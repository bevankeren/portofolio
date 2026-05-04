"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import { skills } from "@/lib/data";

export default function Skills() {
  const t = useTranslations("skills");

  const categories = [
    { key: "business", label: t("cat_business"), color: "blue" as const, dotClass: "bg-accent-blue", data: skills.business },
    { key: "data", label: t("cat_data"), color: "yellow" as const, dotClass: "bg-accent-yellow", data: skills.data },
    { key: "technical", label: t("cat_technical"), color: "green" as const, dotClass: "bg-accent-green", data: skills.technical },
    { key: "tools", label: t("cat_tools"), color: "purple" as const, dotClass: "bg-accent-purple", data: skills.tools },
  ];

  return (
    <section id="skills" className="section-padding dot-pattern">
      <div className="container-main">
        <SectionTitle
          title={t("title")}
          subtitle={t("subtitle")}
          color="yellow"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.key}
              className="neo-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIndex * 0.1 }}
            >
              <h3 className="font-heading font-bold text-lg mb-4 flex items-center gap-2">
                <span
                  className={`w-3 h-3 rounded-full ${category.dotClass}`}
                />
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.data.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: catIndex * 0.1 + skillIndex * 0.05,
                    }}
                  >
                    <Badge color={category.color}>{skill}</Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
