"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { Globe } from "lucide-react";

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const newLocale = locale === "id" ? "en" : "id";
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-1.5 px-3 py-1.5 border-2 border-black rounded-neo text-sm font-bold font-heading hover:bg-accent-yellow/20 transition-colors"
      aria-label="Toggle language"
    >
      <Globe size={16} />
      <span>{locale === "id" ? "EN" : "ID"}</span>
    </button>
  );
}
