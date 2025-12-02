import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Logo } from "@/components/logo";
import OrSeparator from "@/components/or-separator";
import LoginForm from "@/features/auth/components/login-form";
import SocialLoginButtonGroup from "@/features/auth/components/social-login-button-group";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Login");

  return {
    title: t("meta_title"),
  };
}

export default async function Login() {
  const t = await getTranslations();

  return (
    <>
      {/* <Link href="/" className="flex items-center justify-center"> */}
      {/*   <Logo className="h-[45px]" /> */}
      {/* </Link> */}

      <h1 className="text-center text-3xl font-bold">{t("LoginView.title")}</h1>

      <div className="flex flex-col items-stretch gap-4 min-[720px]:gap-6">
        <SocialLoginButtonGroup />
        <OrSeparator />
        <LoginForm />

        <div className="text-center text-base font-normal">
          <span className="text-sm text-muted-foreground">
            {t("LoginView.dont_have_an_account")}{" "}
            <Link href="/signup" className="text-sm text-primary underline">
              {t("SignupView.title")}
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}
