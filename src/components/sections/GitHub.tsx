"use client";

import { useEffect, useState, useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { ExternalLink, GitBranch, Star, Users } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { personalInfo } from "@/lib/data";

interface GitHubStats {
  repos: number;
  contributions: number;
  followers: number;
}

function AnimatedCounter({
  value,
  duration = 2,
}: {
  value: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView || value === 0) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function GitHubSection() {
  const t = useTranslations("github");
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setStats(data);
        }
      })
      .catch(() => {
        // Silently fail - UI will show fallback
      })
      .finally(() => setLoading(false));
  }, []);

  const statCards = [
    {
      icon: GitBranch,
      value: stats?.repos ?? 0,
      label: t("repos"),
      color: "bg-accent-blue/10",
      textColor: "text-accent-blue",
      borderColor: "border-accent-blue",
    },
    {
      icon: Star,
      value: stats?.contributions ?? 0,
      label: t("contributions"),
      color: "bg-accent-green/10",
      textColor: "text-accent-green",
      borderColor: "border-accent-green",
    },
    {
      icon: Users,
      value: stats?.followers ?? 0,
      label: t("followers"),
      color: "bg-accent-purple/10",
      textColor: "text-accent-purple",
      borderColor: "border-accent-purple",
    },
  ];

  return (
    <section id="github" className="section-padding bg-surface">
      <div className="container-main">
        <SectionTitle
          title={t("title")}
          subtitle={t("subtitle")}
          color="purple"
        />

        <div className="max-w-3xl mx-auto">
          <motion.div
            className="neo-card text-center bg-accent-purple/10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-24 h-24 mx-auto mb-6 border-3 border-black rounded-full bg-white flex items-center justify-center shadow-neo-sm">
              <GithubIcon size={40} />
            </div>

            <h3 className="font-heading font-black text-2xl mb-2">
              @bevankeren
            </h3>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
              {statCards.map((card, index) => (
                <motion.div
                  key={card.label}
                  className={`p-4 border-2 border-black rounded-neo ${card.color} shadow-neo-sm`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <card.icon
                    size={20}
                    className={`mx-auto mb-2 ${card.textColor}`}
                  />
                  <p
                    className={`text-3xl font-heading font-bold ${card.textColor}`}
                  >
                    {loading ? (
                      <span className="inline-block w-8 h-8 bg-gray-200 rounded animate-pulse" />
                    ) : (
                      <AnimatedCounter value={card.value} />
                    )}
                  </p>
                  <p className="text-sm text-text-secondary mt-1">
                    {card.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* GitHub Stats Image with fallback */}
            {!imgError && (
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-6 p-4 border-2 border-black rounded-neo bg-white hover:shadow-neo-sm transition-all"
                aria-label="Open GitHub profile"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://github-readme-stats.vercel.app/api?username=bevankeren&show_icons=true&theme=default&hide_border=true&bg_color=FFFDF7&title_color=8B5CF6&icon_color=EC4899&text_color=1A1A1A"
                  alt="GitHub Stats"
                  className="w-full max-w-md mx-auto"
                  loading="lazy"
                  onError={() => setImgError(true)}
                />
              </a>
            )}

            <Button color="purple" href={personalInfo.github}>
              <GithubIcon size={18} />
              {t("view_profile")}
              <ExternalLink size={14} />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
