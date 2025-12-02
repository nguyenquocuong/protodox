"use client";

import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { toast } from "sonner";
import GoogleIcon from "@/components/icons/google-icon";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "../store";

export default function GoogleLoginButton() {
  const t = useTranslations("GoogleLoginButton");

  const [loading, setLoading] = useState(false);
  const googleLogin = useAuthStore((s) => s.googleLogin);

  const handleGoogleLoginClick = async () => {
    setLoading(true);
    try {
      await googleLogin();
      // The OAuth flow will redirect to /auth/callback
      // Supabase handles the redirect automatically
    } catch (error) {
      setLoading(false);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to sign in with Google";
      toast.error(errorMessage);
    }
  };

  return (
    <Button
      variant="outline"
      className="h-11 rounded-full text-base font-semibold"
      onClick={handleGoogleLoginClick}
      disabled={loading}
    >
      {loading ? (
        <Loader2 className="animate-spin" />
      ) : (
        <GoogleIcon className="size-5" />
      )}{" "}
      {t("text")}
    </Button>
  );
}
