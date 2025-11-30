import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Logo } from "./logo";

const footerLinks = [
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "Pricing",
    href: "#pricing",
  },
  {
    title: "FAQ",
    href: "#faq",
  },
  {
    title: "Testimonials",
    href: "#testimonials",
  },
  {
    title: "Privacy",
    href: "#privacy",
  },
];

const Footer = () => {
  return (
    <footer className="dark mt-40 bg-background text-foreground dark:border-t">
      <div className="mx-auto max-w-screen-xl">
        <div className="flex flex-col items-start justify-between gap-x-8 gap-y-10 px-6 py-12 sm:flex-row xl:px-0">
          <div>
            <Logo />

            <ul className="mt-6 flex flex-wrap items-center gap-4">
              {footerLinks.map(({ title, href }) => (
                <li key={title}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator />

        <div className="flex flex-col-reverse items-center justify-between gap-x-2 gap-y-5 px-6 py-8 sm:flex-row xl:px-0">
          {/* Copyright */}
          <span className="text-center text-muted-foreground sm:text-start">
            &copy; {new Date().getFullYear()} <Link href="/">Ficro</Link>. All
            rights reserved.
          </span>

          {/* <div className="flex items-center gap-5 text-muted-foreground"> */}
          {/*   <Link href="#" target="_blank"> */}
          {/*     <GithubIcon className="h-5 w-5" /> */}
          {/*   </Link> */}
          {/* </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
