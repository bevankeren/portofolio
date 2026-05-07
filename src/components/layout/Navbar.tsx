"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import LanguageToggle from "@/components/ui/LanguageToggle";

const navLinks = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "focus", href: "#focus" },
  { key: "projects", href: "#projects" },
  { key: "skills", href: "#skills" },
  { key: "education", href: "#education" },
  { key: "certificates", href: "#certificates" },
  { key: "contact", href: "#contact" },
];

export default function Navbar() {
  const t = useTranslations("nav");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b-3 border-black transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md"
          : "bg-background/90 backdrop-blur-sm"
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[3px] origin-left z-50"
        style={{
          scaleX,
          background: "linear-gradient(90deg, #3B82F6, #8B5CF6, #EC4899)",
        }}
      />

      <div className="container-main flex items-center justify-between px-4 md:px-8 h-16">
        {/* Logo */}
        <a
          href="#home"
          className="font-heading font-bold text-xl md:text-2xl hover:text-accent-blue transition-colors duration-200"
        >
          Bevan.
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm font-medium relative group hover:text-accent-blue transition-colors duration-200"
            >
              {t(link.key)}
              <span className="absolute -bottom-1 left-0 h-0.5 bg-accent-blue rounded-full w-0 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <LanguageToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <LanguageToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 border-2 border-black rounded-neo hover:bg-accent-yellow/20 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t-2 border-black bg-background overflow-hidden"
          >
            <div className="container-main py-4 px-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium py-3 px-4 rounded-neo hover:bg-accent-blue/10 transition-colors border-2 border-transparent hover:border-black"
                >
                  {t(link.key)}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
