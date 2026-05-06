"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion";
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

  // Navbar height shrinks on scroll
  const navHeight = useTransform(scrollYProgress, [0, 0.1], [64, 56]);
  const navHeightSpring = useSpring(navHeight, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 border-b-3 border-black transition-colors duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md"
          : "bg-background/90 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Scroll Progress Bar - gradient */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[3px] origin-left z-50"
        style={{
          scaleX,
          background: "linear-gradient(90deg, #3B82F6, #8B5CF6, #EC4899)",
        }}
      />

      <motion.div
        className="container-main flex items-center justify-between px-4 md:px-8"
        style={{ height: navHeightSpring }}
      >
        {/* Logo with bounce */}
        <motion.a
          href="#home"
          className="font-heading font-bold text-xl md:text-2xl"
          whileHover={{
            scale: 1.1,
            color: "#3B82F6",
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring" as const, stiffness: 400, damping: 15 }}
        >
          Bevan.
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.key}
              href={link.href}
              className="text-sm font-medium relative group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              whileHover={{ y: -2 }}
            >
              {t(link.key)}
              {/* Animated underline */}
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-accent-blue rounded-full"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
          <LanguageToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <LanguageToggle />
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 border-2 border-black rounded-neo hover:bg-accent-yellow/20 transition-colors"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:hidden border-t-2 border-black bg-background overflow-hidden"
          >
            <div className="container-main py-4 px-4 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.key}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium py-3 px-4 rounded-neo hover:bg-accent-blue/10 transition-colors border-2 border-transparent hover:border-black"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.05,
                    type: "spring" as const,
                    stiffness: 200,
                    damping: 15,
                  }}
                >
                  {t(link.key)}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
