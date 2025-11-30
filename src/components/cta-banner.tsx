import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function CTABanner() {
  return (
    <div className="px-6">
      <div className="dark relative mx-auto my-20 w-full max-w-screen-lg overflow-hidden rounded-2xl bg-background px-6 py-10 text-foreground md:px-14 md:py-16 dark:border">
        <div className="relative z-0 flex flex-col gap-3">
          <h3 className="text-3xl font-semibold md:text-4xl">
            Ready to Take Control of Your Nutrition?
          </h3>
          <p className="mt-2 text-base md:text-lg">
            Start planning smarter meals with Ficro today. No calorie counting.
            No stress. Just results.
          </p>
        </div>
        <div className="relative z-0 mt-14 flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/signup">
              Get Started – It’s Free <ArrowUpRight className="!h-5 !w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
