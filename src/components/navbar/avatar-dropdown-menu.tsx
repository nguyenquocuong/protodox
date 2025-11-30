"use client";

import { LogOut, Moon, Sun, UserRoundIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuthStore } from "@/features/auth/store";

export default function AvatarDropdownMenu() {
  const t = useTranslations();
  const router = useRouter();
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);

  const { resolvedTheme, theme, setTheme } = useTheme();

  const handleLogout = async () => {
    await logout();
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        id="avatar"
        className="flex items-center gap-3 outline-none"
      >
        <Avatar>
          <AvatarFallback className="text-highlight">
            <UserRoundIcon className="h-6 w-6" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="mt-2 w-72" align="end">
        <DropdownMenuItem className="py-3">
          <Avatar>
            <AvatarFallback className="text-highlight">
              <UserRoundIcon className="h-6 w-6" />
            </AvatarFallback>
          </Avatar>

          <div className="ml-1 flex flex-col">
            {/* <p className="text-sm font-medium">My Workspace</p> */}
            <p className="text-xs text-muted-foreground">{user?.email}</p>
          </div>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none select-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\'size-\'])]:size-4 [&_svg:not([class*=\'text-\'])]:text-foreground">
            {resolvedTheme === "dark" ? (
              <Moon className="mr-1" />
            ) : (
              <Sun className="mr-1" />
            )}
            {t("AvatarDropdownMenu.apprearance.title")}
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuCheckboxItem
              checked={theme === "light"}
              onClick={() => setTheme("light")}
            >
              {t("AvatarDropdownMenu.apprearance.light")}
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={theme === "dark"}
              onClick={() => setTheme("dark")}
            >
              {t("AvatarDropdownMenu.apprearance.dark")}
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={theme === "system"}
              onClick={() => setTheme("system")}
            >
              {t("AvatarDropdownMenu.apprearance.system")}
            </DropdownMenuCheckboxItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={handleLogout}
          className="flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none select-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\'size-\'])]:size-4 [&_svg:not([class*=\'text-\'])]:text-foreground"
        >
          <LogOut className="mr-1" />
          {t("AvatarDropdownMenu.sign_out")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
