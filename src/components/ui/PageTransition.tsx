"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageTransition() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
          exit={{ clipPath: "circle(0% at 50% 50%)" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Animated background blocks */}
          <motion.div
            className="absolute inset-0 grid grid-cols-5 grid-rows-5"
            initial="initial"
            animate="animate"
          >
            {Array.from({ length: 25 }).map((_, i) => (
              <motion.div
                key={i}
                className="border border-black/5"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{
                  duration: 1.2,
                  delay: i * 0.03,
                  ease: "easeInOut" as const,
                }}
              />
            ))}
          </motion.div>

          {/* Center logo animation */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              className="relative"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring" as const,
                stiffness: 200,
                damping: 15,
                delay: 0.2,
              }}
            >
              <div className="w-24 h-24 border-3 border-black rounded-neo bg-accent-blue shadow-neo flex items-center justify-center">
                <span className="font-heading text-3xl font-black text-white">
                  B.
                </span>
              </div>
            </motion.div>

            <motion.div
              className="mt-6 flex gap-1.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 rounded-full border-2 border-black bg-accent-yellow"
                  animate={{
                    y: [0, -12, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut" as const,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
