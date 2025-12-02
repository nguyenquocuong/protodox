import { useTranslations } from "next-intl";
import { Separator } from "@/components/ui/separator";

export default function OrSeparator() {
  const t = useTranslations("common");
  return (
    <div className="relative flex items-center justify-center overflow-hidden">
      <Separator className="bg-gray-700" />
      <div className="w-11 shrink-0 text-center font-semibold text-primary dark:text-gray-400">
        {t("or")}
      </div>
      <Separator className="bg-gray-700" />
    </div>
  );
}
