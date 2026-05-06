"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only show on desktop
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsVisible(true);
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);

    // Detect hoverable elements
    const hoverables = document.querySelectorAll("a, button, .neo-card, .neo-btn");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-accent-blue pointer-events-none z-[9998] mix-blend-difference hidden lg:block"
        style={{ x, y }}
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.5 : 0.8,
        }}
        transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9998] hidden lg:flex items-center justify-center"
        style={{ x, y }}
      >
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-accent-blue"
          animate={{
            scale: isHovering ? 0 : 1,
          }}
        />
      </motion.div>
    </>
  );
}
