"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "../logo";
import { NavMenu } from "./nav-menu";

interface NavigationSheetProps {
  ctaButtonMobile: React.ReactNode;
}

export function NavigationSheet({ ctaButtonMobile }: NavigationSheetProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="p-6">
        <Logo />
        <NavMenu orientation="vertical" className="mt-12 flex-0" />
        {ctaButtonMobile}
      </SheetContent>
    </Sheet>
  );
}
