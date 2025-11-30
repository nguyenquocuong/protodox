import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { isLoggedIn } from "@/features/auth/actions";
import { Button } from "../ui/button";

export default async function CTAButtonMobile() {
  const t = await getTranslations();

  // if (await isLoggedIn()) {
  //   return;
  // }

  return (
    <div className="mt-8 space-y-4">
      <Button
        asChild
        variant="outline"
        className="w-full rounded-full sm:hidden"
      >
        <Link href="/login">{t("Navbar.login")}</Link>
      </Button>
      <Button asChild className="w-full rounded-full xs:hidden">
        <Link href="/signup">{t("Navbar.get_started")}</Link>
      </Button>
    </div>
  );
}
