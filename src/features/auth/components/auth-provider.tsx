"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { useAuthStore } from "@/features/auth/store";
import { logger } from "@/lib/logger";
import { createClient } from "@/lib/supabase/client";

const ctx = logger.with({ component: "AuthProvider" });

export default function AuthProvider({
  session,
  children,
}: {
  session?: { access_token: string; expires_at?: number } | null;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const setToken = useAuthStore((s) => s.setToken);
  const saveLoginData = useAuthStore((s) => s.saveLoginData);

  useEffect(() => {
    if (session?.access_token) {
      setToken(session.access_token);
    }
  }, [session, setToken]);

  // Sync session from Supabase
  useEffect(() => {
    const supabase = createClient();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user && session?.access_token) {
        saveLoginData(session.user, session);
        setToken(session.access_token);
      } else {
        setToken(undefined);
      }
      router.refresh();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router, saveLoginData, setToken]);

  // Refresh session periodically
  const refreshSession = useCallback(async () => {
    const supabase = createClient();
    const {
      data: { session: currentSession },
    } = await supabase.auth.getSession();

    if (currentSession) {
      const { data, error } = await supabase.auth.refreshSession();
      if (!error && data.session) {
        saveLoginData(data.session.user, data.session);
        setToken(data.session.access_token);
        router.refresh();
      }
    }
  }, [router, saveLoginData, setToken]);

  useEffect(() => {
    if (session?.expires_at) {
      const currentTime = Date.now();
      const expiresAt = session.expires_at * 1000;
      const remaining = expiresAt - currentTime;

      if (remaining > 0) {
        // Refresh 5 minutes before expiration
        const delay = Math.max(remaining - 5 * 60 * 1000, 60000); // At least 1 minute

        ctx.debug("refresh session after {delay}ms", { delay });

        const timeout = setTimeout(refreshSession, delay);
        return () => clearTimeout(timeout);
      } else {
        // Already expired, refresh immediately
        refreshSession();
      }
    }

    return () => {};
  }, [session, refreshSession]);

  return children;
}
