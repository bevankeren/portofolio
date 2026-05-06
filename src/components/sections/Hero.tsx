"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Download, FolderOpen, Mail, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import Button from "@/components/ui/Button";
import { personalInfo } from "@/lib/data";

// Floating animation variants for decorative shapes - more dramatic
const floatingVariants = {
  circle: {
    y: [0, -20, 0],
    x: [0, 8, 0],
    rotate: [0, 8, 0],
    scale: [1, 1.05, 1],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
  square: {
    y: [0, 15, 0],
    x: [0, -6, 0],
    rotate: [12, 22, 12],
    scale: [1, 0.95, 1],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
  smallSquare: {
    y: [0, -14, 0],
    x: [0, 10, 0],
    rotate: [0, -15, 0],
    scale: [1, 1.1, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
  badge: {
    y: [0, -6, 0],
    rotate: [-4, 0, -4],
    scale: [1, 1.03, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

// Typewriter hook
function useTypewriter(text: string, speed = 50, delay = 1200) {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let charIndex = 0;

    const startTyping = () => {
      timeout = setInterval(() => {
        if (charIndex < text.length) {
          setDisplayText(text.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(timeout);
          setIsComplete(true);
        }
      }, speed);
    };

    const delayTimeout = setTimeout(startTyping, delay);
    return () => {
      clearTimeout(delayTimeout);
      clearInterval(timeout);
    };
  }, [text, speed, delay]);

  return { displayText, isComplete };
}

// Particle component
function Particles() {
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 200 - 100,
    y: Math.random() * 200 - 100,
    size: Math.random() * 8 + 4,
    color: ["bg-accent-blue", "bg-accent-pink", "bg-accent-yellow", "bg-accent-green", "bg-accent-purple"][i % 5],
    delay: Math.random() * 0.5,
    duration: Math.random() * 1 + 1.5,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full ${p.color} border border-black`}
          style={{
            width: p.size,
            height: p.size,
            left: "50%",
            top: "50%",
          }}
          initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            x: p.x,
            y: p.y,
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: p.duration,
            delay: 1.8 + p.delay,
            ease: "easeOut" as const,
          }}
        />
      ))}
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

export default function Hero() {
  const t = useTranslations("hero");
  const { displayText, isComplete } = useTypewriter(t("tagline"), 45, 1500);

  // Parallax on mouse move
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [3, -3]);
  const rotateY = useTransform(mouseX, [-300, 300], [-3, 3]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center section-padding pt-24 dot-pattern overflow-hidden relative"
      onMouseMove={handleMouseMove}
    >
      {/* Particle burst on load */}
      <Particles />

      <div className="container-main grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting badge with bounce */}
          <motion.div
            className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-black bg-accent-yellow px-4 py-2 font-heading text-sm font-black shadow-neo-sm"
            variants={{
              hidden: { opacity: 0, scale: 0, rotate: -12 },
              visible: {
                opacity: 1,
                scale: 1,
                rotate: 0,
                transition: {
                  type: "spring" as const,
                  stiffness: 300,
                  damping: 12,
                },
              },
            }}
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 2 }}
            >
              <Sparkles size={16} />
            </motion.span>
            {t("greeting")}
          </motion.div>

          {/* Name with letter-by-letter reveal */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-text-primary mb-5 leading-[0.95]"
            variants={itemVariants}
          >
            {t("name").split(" ").map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                className="inline-block mr-[0.25em]"
                initial={{ opacity: 0, y: 40, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + wordIndex * 0.12,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Tagline with typewriter effect */}
          <motion.div
            className="mb-5 inline-block rotate-[-1.5deg] border-3 border-black bg-accent-blue px-4 py-3 shadow-neo"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ delay: 1.2, duration: 0.4 }}
          >
            <p className="text-xl md:text-2xl font-heading font-black text-white whitespace-nowrap overflow-hidden">
              {displayText}
              {!isComplete && (
                <motion.span
                  className="inline-block w-[3px] h-[1.1em] bg-white ml-1 align-middle"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
              )}
            </p>
          </motion.div>

          <motion.p
            className="text-text-secondary text-lg mb-8 max-w-xl leading-relaxed"
            variants={itemVariants}
          >
            {t("description")}
          </motion.p>

          {/* Buttons with stagger */}
          <motion.div
            className="flex flex-wrap gap-4 mb-8"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.1 },
              },
            }}
          >
            <motion.div variants={itemVariants}>
              <Button color="pink" href="/cv/CV-Bevan-Alqarana.pdf">
                <Download size={18} />
                {t("cta_cv")}
              </Button>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Button color="yellow" href="#projects">
                <FolderOpen size={18} />
                {t("cta_projects")}
              </Button>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Button variant="secondary" href="#contact">
                <Mail size={18} />
                {t("cta_contact")}
              </Button>
            </motion.div>
          </motion.div>

          {/* Social links with pop effect */}
          <motion.div className="flex items-center gap-4" variants={itemVariants}>
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border-2 border-black rounded-neo bg-white shadow-neo-sm"
              aria-label="GitHub"
              whileHover={{
                scale: 1.15,
                rotate: -5,
                boxShadow: "6px 6px 0px #8B5CF6",
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring" as const, stiffness: 400, damping: 15 }}
            >
              <GithubIcon size={22} />
            </motion.a>
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border-2 border-black rounded-neo bg-white shadow-neo-sm"
              aria-label="LinkedIn"
              whileHover={{
                scale: 1.15,
                rotate: 5,
                boxShadow: "6px 6px 0px #3B82F6",
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring" as const, stiffness: 400, damping: 15 }}
            >
              <LinkedinIcon size={22} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right side - Photo with 3D perspective */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 80, rotateY: -15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ perspective: 1200 }}
        >
          <motion.div
            className="relative w-full max-w-[420px]"
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          >
            {/* Floating decorative shapes - more dramatic */}
            <motion.div
              className="absolute -left-5 top-8 h-28 w-28 rounded-full border-3 border-black bg-accent-green"
              animate={floatingVariants.circle}
              whileHover={{ scale: 1.2 }}
            />
            <motion.div
              className="absolute -right-5 bottom-10 h-24 w-24 border-3 border-black bg-accent-pink rounded-neo"
              animate={floatingVariants.square}
              whileHover={{ scale: 1.2 }}
            />
            <motion.div
              className="absolute right-8 -top-5 h-16 w-16 rounded-neo border-3 border-black bg-accent-purple"
              animate={floatingVariants.smallSquare}
              whileHover={{ scale: 1.2 }}
            />

            <motion.div
              className="relative z-10 border-3 border-black rounded-neo shadow-neo bg-accent-yellow p-4 rotate-[2deg]"
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ type: "spring" as const, stiffness: 200, damping: 15 }}
            >
              <div className="h-[470px] md:h-[540px] border-3 border-black rounded-neo bg-white overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <motion.div
                    className="mx-auto mb-5 flex h-40 w-40 items-center justify-center rounded-full border-3 border-black bg-accent-blue/20"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(59, 130, 246, 0.3)",
                        "0 0 0 20px rgba(59, 130, 246, 0)",
                        "0 0 0 0 rgba(59, 130, 246, 0)",
                      ],
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 2 }}
                  >
                    <span className="font-heading text-5xl font-black">BA</span>
                  </motion.div>
                  <p className="font-heading text-lg font-black">
                    Photo Placeholder
                  </p>
                  <p className="mt-2 text-sm text-text-secondary">
                    Replace with your portrait photo
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 left-6 z-20 rounded-full border-2 border-black bg-accent-blue px-5 py-2 font-heading text-sm font-black text-white shadow-neo-sm"
              animate={floatingVariants.badge}
              whileHover={{ scale: 1.1 }}
            >
              IELTS Certified
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
