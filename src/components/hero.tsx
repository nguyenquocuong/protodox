import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

const Hero = () => {
  return (
    <div className="flex min-h-[calc(100vh-6rem)] flex-col items-center px-6 py-20">
      <div className="flex items-center justify-center md:mt-6">
        <div className="max-w-2xl text-center">
          <h1 className="mt-6 flex max-w-[20ch] flex-col items-center gap-1 text-3xl !leading-[1.2] font-bold tracking-tight xs:text-4xl sm:text-5xl md:text-6xl">
            <span>Transform Your Fitness Journey with</span>
            <Logo className="mt-1 w-[100px] md:mt-4 md:w-[200px]" />
          </h1>
          <p className="mt-6 max-w-[60ch] xs:text-lg">
            Ficro creates custom meal plans and smart grocery lists tailored to
            your goals, lifestyle, and dietary needs — in just seconds.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Badge className="rounded-full border-none bg-primary py-1">
              No calorie counting.
            </Badge>
            <Badge className="rounded-full border-none bg-primary py-1">
              No overwhelm.
            </Badge>
            <Badge className="rounded-full border-none bg-primary py-1">
              Just results — powered by Ficro.
            </Badge>
          </div>
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="w-full rounded-full text-base sm:w-auto"
            >
              <Link href="/signup">
                Get Started <ArrowUpRight className="!h-5 !w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
