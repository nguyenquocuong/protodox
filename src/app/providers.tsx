"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";
// import { useAuthStore } from "@/features/auth/stores";
import { env } from "@/lib/env";
import { logger } from "@/lib/logger";

const ctx = logger.with({ component: "PostHogProvider" });

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  // const user = useAuthStore((s) => s.user);

  useEffect(() => {
    if (env.NEXT_PUBLIC_POSTHOG_KEY) {
      ctx.debug("Init");
      posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY as string, {
        api_host: env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
        person_profiles: "always", // or 'always' to create profiles for anonymous users as well
        defaults: "2025-05-24",
      });
    }
  }, []);

  // useEffect(() => {
  //   if (user) {
  //     const { id, email, provider, firstName, lastName } = user;
  //     posthog.identify(id.toString(), { email, provider, firstName, lastName });
  //     ctx.debug("User identified");
  //   }
  // }, [user]);

  if (!env.NEXT_PUBLIC_POSTHOG_KEY) {
    return <>{children}</>;
  }

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
