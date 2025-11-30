import { createClient } from "@/lib/supabase/server";
import AuthProvider from "./auth-provider";

export default async function AuthObserver({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <AuthProvider
      session={
        session
          ? {
              access_token: session.access_token,
              expires_at: session.expires_at,
            }
          : null
      }
    >
      {children}
    </AuthProvider>
  );
}
