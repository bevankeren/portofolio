import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  Database,
  Layers3,
  MapPinned,
  NotebookTabs,
  Radar,
  Route,
  Search,
  Target,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import { GithubIcon } from "@/components/ui/Icons";
import {
  CaseStudyLocale,
  retailWarZoneLinks,
  retailWarZonesContent,
} from "@/lib/retailWarZones";

type PageProps = {
  params: {
    locale: string;
  };
};

const methodologyIcons = [
  Database,
  Search,
  MapPinned,
  Route,
  Target,
  Layers3,
  Radar,
  BarChart3,
];

const findingAccentClasses = [
  "border-t-[6px] border-t-red-500 bg-surface",
  "border-t-[6px] border-t-accent-green bg-surface",
  "border-t-[6px] border-t-accent-blue bg-surface",
];

function getLocale(locale: string): CaseStudyLocale {
  return locale === "en" ? "en" : "id";
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "id" }];
}

export function generateMetadata({ params }: PageProps): Metadata {
  const content = retailWarZonesContent[getLocale(params.locale)];

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    openGraph: {
      title: `${content.metaTitle} | Bevan Alqarana`,
      description: content.metaDescription,
      images: ["/assets/retail-war-zones/hero_map.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${content.metaTitle} | Bevan Alqarana`,
      description: content.metaDescription,
      images: ["/assets/retail-war-zones/hero_map.png"],
    },
  };
}

export default function JakartaRetailWarZonesPage({ params }: PageProps) {
  const locale = getLocale(params.locale);
  const content = retailWarZonesContent[locale];

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-text-primary">
      <section className="section-padding border-b-3 border-black bg-background pt-28 dot-pattern">
        <div className="container-main grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 font-heading text-sm font-bold transition-colors hover:text-accent-blue"
            >
              <ArrowLeft size={16} />
              {content.backLabel}
            </Link>

            <p className="mb-4 inline-flex max-w-full rounded-neo border-2 border-black bg-accent-yellow px-3 py-1 font-heading text-xs font-bold uppercase tracking-wide text-black shadow-neo-sm">
              {content.eyebrow}
            </p>
            <h1 className="mb-4 break-words font-heading text-4xl font-bold leading-tight text-text-primary sm:text-5xl md:text-6xl">
              {content.title}
            </h1>
            <p className="mb-5 max-w-3xl text-lg font-bold text-text-primary sm:text-xl md:text-2xl">
              {content.subtitle}
            </p>
            <p className="max-w-3xl text-base leading-relaxed text-text-secondary md:text-lg">
              {content.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={retailWarZoneLinks.map}
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn inline-flex w-full items-center justify-center gap-2 bg-accent-blue text-white sm:w-auto"
              >
                <MapPinned size={18} />
                {content.primaryCta}
              </a>
              <span className="inline-flex w-full cursor-not-allowed flex-wrap items-center justify-center gap-2 rounded-neo border-3 border-black bg-surface px-5 py-3 font-heading text-sm font-bold text-text-secondary shadow-neo-sm sm:w-auto">
                <GithubIcon size={18} />
                {content.githubCta}
                <span className="rounded-full border-2 border-black bg-accent-yellow px-2 py-0.5 text-[10px] uppercase text-black">
                  {content.pendingLabel}
                </span>
              </span>
              <span className="inline-flex w-full cursor-not-allowed flex-wrap items-center justify-center gap-2 rounded-neo border-3 border-black bg-surface px-5 py-3 font-heading text-sm font-bold text-text-secondary shadow-neo-sm sm:w-auto">
                <NotebookTabs size={18} />
                {content.kaggleCta}
                <span className="rounded-full border-2 border-black bg-accent-yellow px-2 py-0.5 text-[10px] uppercase text-black">
                  {content.pendingLabel}
                </span>
              </span>
            </div>
          </div>

          <div className="relative aspect-[16/11] overflow-hidden rounded-neo border-3 border-black bg-black shadow-neo">
            <Image
              src="/assets/retail-war-zones/hero_map.png"
              alt={content.gallery[0].alt}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="border-b-3 border-black bg-accent-blue/10 px-4 py-10 md:px-8 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.kpis.map((kpi, index) => (
            <div
              key={kpi.label}
              className={`neo-card p-5 ${
                index % 2 === 0
                  ? "border-t-[6px] border-t-red-500"
                  : "border-t-[6px] border-t-accent-blue"
              }`}
            >
              <p className="font-heading text-3xl font-bold text-text-primary">
                {kpi.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {kpi.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 inline-flex rounded-neo border-2 border-black bg-accent-yellow px-3 py-1 font-heading text-xs font-bold uppercase tracking-wide text-black">
              {content.businessQuestionTitle}
            </p>
            <h2 className="font-heading text-3xl font-bold leading-tight text-text-primary md:text-4xl">
              {content.businessQuestion}
            </h2>
          </div>
          <div className="neo-card border-l-[6px] border-l-accent-blue">
            <p className="mb-2 font-heading text-lg font-bold text-text-primary">
              {content.executiveReadTitle}
            </p>
            <p className="leading-relaxed text-text-secondary">
              {content.executiveRead}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding border-y-3 border-black bg-background dot-pattern">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 font-heading text-3xl font-bold text-text-primary">
            {content.methodologyTitle}
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {content.methodology.map((step, index) => {
              const Icon = methodologyIcons[index] ?? Target;

              return (
                <div
                  key={step}
                  className="neo-card p-5"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-neo border-2 border-black bg-accent-blue text-white">
                      <Icon size={18} />
                    </span>
                    <span className="font-mono text-xs font-bold text-text-secondary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="font-heading text-sm font-bold leading-snug text-text-primary">
                    {step}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 font-heading text-3xl font-bold text-text-primary">
            {content.findingsTitle}
          </h2>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {content.findings.map((finding, index) => (
              <div
                key={finding.title}
                className={`neo-card p-6 ${
                  findingAccentClasses[index] ?? findingAccentClasses[0]
                }`}
              >
                <h3 className="mb-3 font-heading text-xl font-bold text-text-primary">
                  {finding.title}
                </h3>
                <p className="leading-relaxed text-text-secondary">
                  {finding.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-y-3 border-black bg-accent-yellow/20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 font-heading text-3xl font-bold text-text-primary">
            {content.galleryTitle}
          </h2>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {content.gallery.map((item) => (
              <figure
                key={item.src}
                className="overflow-hidden rounded-neo border-3 border-black bg-surface shadow-neo"
              >
                <div className="relative aspect-video">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
                <figcaption className="border-t-3 border-black px-5 py-4 font-heading text-sm font-bold text-text-primary">
                  {item.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 font-heading text-3xl font-bold text-text-primary">
            {content.outputsTitle}
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {content.outputs.map((output) => (
              <a
                key={output.href}
                href={output.href}
                target="_blank"
                rel="noopener noreferrer"
                className="neo-card group p-6"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-text-primary">
                      {output.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {output.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={22}
                    className="shrink-0 text-text-secondary transition-colors group-hover:text-accent-blue"
                  />
                </div>
                <span className="font-heading text-sm font-bold text-accent-blue">
                  {content.openOutput}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t-3 border-black bg-background dot-pattern">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
          <div className="neo-card border-t-[6px] border-t-accent-purple">
            <h2 className="mb-4 font-heading text-2xl font-bold text-text-primary">
              {content.stackTitle}
            </h2>
            <div className="flex flex-wrap gap-2">
              {content.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border-2 border-black bg-surface px-3 py-1 text-sm font-bold text-text-primary"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="neo-card border-t-[6px] border-t-red-500">
            <h2 className="mb-4 font-heading text-2xl font-bold text-text-primary">
              {content.limitationsTitle}
            </h2>
            <ul className="space-y-3 text-sm leading-relaxed text-text-secondary">
              {content.limitations.map((item) => (
                <li key={item} className="border-l-3 border-red-500 pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="neo-card border-t-[6px] border-t-accent-blue">
            <h2 className="mb-4 font-heading text-2xl font-bold text-text-primary">
              {content.futureTitle}
            </h2>
            <ul className="space-y-3 text-sm leading-relaxed text-text-secondary">
              {content.future.map((item) => (
                <li key={item} className="border-l-3 border-accent-blue pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
