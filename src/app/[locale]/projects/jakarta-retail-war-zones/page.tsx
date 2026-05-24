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
  "border-red-500/70 bg-red-500/10",
  "border-emerald-400/70 bg-emerald-400/10",
  "border-blue-400/70 bg-blue-400/10",
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
    <div className="min-h-screen overflow-x-hidden bg-[#07111f] text-slate-100">
      <section className="relative overflow-hidden border-b-3 border-black pt-24">
        <Image
          src="/assets/retail-war-zones/hero_map.png"
          alt={content.gallery[0].alt}
          fill
          priority
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-[#07111f]/72" />
        <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-10 md:px-8 lg:px-16">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-slate-300 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} />
            {content.backLabel}
          </Link>

          <div className="max-w-4xl">
            <p className="mb-4 inline-flex max-w-full rounded-neo border-2 border-accent-yellow bg-accent-yellow px-3 py-1 font-heading text-xs font-bold uppercase tracking-wide text-black">
              {content.eyebrow}
            </p>
            <h1 className="mb-4 break-words font-heading text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl">
              {content.title}
            </h1>
            <p className="mb-5 max-w-3xl text-lg font-semibold text-slate-100 sm:text-xl md:text-2xl">
              {content.subtitle}
            </p>
            <p className="max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
              {content.description}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={retailWarZoneLinks.map}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-neo border-2 border-accent-blue bg-accent-blue px-5 py-3 font-heading text-sm font-bold text-white shadow-neo-sm transition-transform hover:-translate-y-1 sm:w-auto"
            >
              <MapPinned size={18} />
              {content.primaryCta}
            </a>
            <span className="inline-flex w-full cursor-not-allowed flex-wrap items-center justify-center gap-2 rounded-neo border-2 border-slate-500/70 bg-slate-900/70 px-5 py-3 font-heading text-sm font-bold text-slate-400 sm:w-auto">
              <GithubIcon size={18} />
              {content.githubCta}
              <span className="rounded-full bg-slate-700 px-2 py-0.5 text-[10px] uppercase">
                {content.pendingLabel}
              </span>
            </span>
            <span className="inline-flex w-full cursor-not-allowed flex-wrap items-center justify-center gap-2 rounded-neo border-2 border-slate-500/70 bg-slate-900/70 px-5 py-3 font-heading text-sm font-bold text-slate-400 sm:w-auto">
              <NotebookTabs size={18} />
              {content.kaggleCta}
              <span className="rounded-full bg-slate-700 px-2 py-0.5 text-[10px] uppercase">
                {content.pendingLabel}
              </span>
            </span>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800 bg-[#0a1424] px-4 py-10 md:px-8 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.kpis.map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-neo border border-slate-700 bg-[#101d31] p-5 shadow-[0_0_24px_rgba(59,130,246,0.08)]"
            >
              <p className="font-heading text-3xl font-bold text-white">
                {kpi.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {kpi.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 font-heading text-sm font-bold uppercase tracking-wide text-accent-yellow">
              {content.businessQuestionTitle}
            </p>
            <h2 className="font-heading text-3xl font-bold leading-tight text-white md:text-4xl">
              {content.businessQuestion}
            </h2>
          </div>
          <div className="rounded-neo border border-slate-700 bg-[#101d31] p-6">
            <p className="mb-2 font-heading text-lg font-bold text-white">
              {content.executiveReadTitle}
            </p>
            <p className="leading-relaxed text-slate-300">
              {content.executiveRead}
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-[#0a1424] px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 font-heading text-3xl font-bold text-white">
            {content.methodologyTitle}
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {content.methodology.map((step, index) => {
              const Icon = methodologyIcons[index] ?? Target;

              return (
                <div
                  key={step}
                  className="rounded-neo border border-slate-700 bg-[#101d31] p-5"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-neo border border-slate-600 bg-slate-900 text-accent-blue">
                      <Icon size={18} />
                    </span>
                    <span className="font-mono text-xs text-slate-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="font-heading text-sm font-bold leading-snug text-white">
                    {step}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 font-heading text-3xl font-bold text-white">
            {content.findingsTitle}
          </h2>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {content.findings.map((finding, index) => (
              <div
                key={finding.title}
                className={`rounded-neo border p-6 ${
                  findingAccentClasses[index] ?? findingAccentClasses[0]
                }`}
              >
                <h3 className="mb-3 font-heading text-xl font-bold text-white">
                  {finding.title}
                </h3>
                <p className="leading-relaxed text-slate-300">
                  {finding.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-[#0a1424] px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 font-heading text-3xl font-bold text-white">
            {content.galleryTitle}
          </h2>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {content.gallery.map((item) => (
              <figure
                key={item.src}
                className="overflow-hidden rounded-neo border border-slate-700 bg-[#101d31]"
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
                <figcaption className="border-t border-slate-700 px-5 py-4 font-heading text-sm font-bold text-white">
                  {item.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 font-heading text-3xl font-bold text-white">
            {content.outputsTitle}
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {content.outputs.map((output) => (
              <a
                key={output.href}
                href={output.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-neo border border-slate-700 bg-[#101d31] p-6 transition-colors hover:border-accent-blue"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white">
                      {output.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      {output.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={22}
                    className="shrink-0 text-slate-500 transition-colors group-hover:text-accent-blue"
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

      <section className="border-t border-slate-800 bg-[#0a1424] px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
          <div>
            <h2 className="mb-4 font-heading text-2xl font-bold text-white">
              {content.stackTitle}
            </h2>
            <div className="flex flex-wrap gap-2">
              {content.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-700 bg-[#101d31] px-3 py-1 text-sm font-semibold text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-4 font-heading text-2xl font-bold text-white">
              {content.limitationsTitle}
            </h2>
            <ul className="space-y-3 text-sm leading-relaxed text-slate-300">
              {content.limitations.map((item) => (
                <li key={item} className="border-l-2 border-red-400 pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 font-heading text-2xl font-bold text-white">
              {content.futureTitle}
            </h2>
            <ul className="space-y-3 text-sm leading-relaxed text-slate-300">
              {content.future.map((item) => (
                <li key={item} className="border-l-2 border-accent-blue pl-3">
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
