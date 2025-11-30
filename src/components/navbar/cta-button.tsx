import Link from "next/link";
import { getTranslations } from "next-intl/server";
// import { isLoggedIn } from "@/features/auth/actions";
import { Button } from "../ui/button";
import AvatarDropdownMenu from "./avatar-dropdown-menu";

export default async function CTAButton() {
  const t = await getTranslations();

  // if (await isLoggedIn()) {
  //   return <AvatarDropdownMenu />;
  // }

  return (
    <>
      <Button
        asChild
        variant="outline"
        className="hidden rounded-full sm:inline-flex"
      >
        <Link href="/login">{t("Navbar.login")}</Link>
      </Button>
      <Button asChild className="hidden rounded-full xs:inline-flex">
        <Link href="/signup">{t("Navbar.get_started")}</Link>
      </Button>
    </>
  );
}
