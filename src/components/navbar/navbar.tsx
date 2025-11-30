import Link from "next/link";
import { Logo } from "../logo";
import CTAButton from "./cta-button";
import CTAButtonMobile from "./cta-button-mobile";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

const Navbar = () => {
  return (
    <nav className="z-999 fixed inset-x-4 top-6 z-10 mx-auto h-14 max-w-screen-xl rounded-full border bg-background/50 backdrop-blur-sm xs:h-16 dark:border-slate-700/70">
      <div className="mx-auto flex h-full items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <CTAButton />

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet ctaButtonMobile={<CTAButtonMobile />} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
