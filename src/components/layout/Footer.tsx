"use client";

import { useTranslations } from "next-intl";
import { ArrowUp } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const t = useTranslations("footer");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t-3 border-black bg-surface py-8 px-4 md:px-8">
      <div className="container-main flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left - Copyright */}
        <div className="text-center md:text-left">
          <p className="font-heading font-bold text-lg mb-1">Bevan.</p>
          <p className="text-sm text-text-secondary">{t("copyright")}</p>
        </div>

        {/* Center - Built with */}
        <p className="text-sm text-text-secondary">{t("built_with")}</p>

        {/* Right - Social + Back to top */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border-2 border-black rounded-neo hover:bg-accent-purple/10 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 border-2 border-black rounded-neo hover:bg-accent-blue/10 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
