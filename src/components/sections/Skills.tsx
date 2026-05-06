"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import { skills } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.6, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 15,
    },
  },
};

export default function Skills() {
  const t = useTranslations("skills");

  const categories = [
    { key: "business", label: t("cat_business"), color: "blue" as const, dotClass: "bg-accent-blue", data: skills.business },
    { key: "data", label: t("cat_data"), color: "yellow" as const, dotClass: "bg-accent-yellow", data: skills.data },
    { key: "technical", label: t("cat_technical"), color: "green" as const, dotClass: "bg-accent-green", data: skills.technical },
    { key: "tools", label: t("cat_tools"), color: "purple" as const, dotClass: "bg-accent-purple", data: skills.tools },
  ];

  // Alternate animation directions
  const getCardAnimation = (index: number) => {
    const directions = [
      { x: -30, y: 0 },
      { x: 30, y: 0 },
      { x: -30, y: 0 },
      { x: 30, y: 0 },
    ];
    return directions[index];
  };

  return (
    <section id="skills" className="section-padding dot-pattern">
      <div className="container-main">
        <SectionTitle
          title={t("title")}
          subtitle={t("subtitle")}
          color="yellow"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, catIndex) => {
            const direction = getCardAnimation(catIndex);
            return (
              <motion.div
                key={category.key}
                className="neo-card"
                initial={{ opacity: 0, x: direction.x }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <h3 className="font-heading font-bold text-lg mb-4 flex items-center gap-2">
                  <motion.span
                    className={`w-3 h-3 rounded-full ${category.dotClass}`}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: catIndex * 0.5,
                    }}
                  />
                  {category.label}
                </h3>
                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {category.data.map((skill) => (
                    <motion.div key={skill} variants={badgeVariants}>
                      <Badge color={category.color}>{skill}</Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
