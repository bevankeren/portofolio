import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { getLocale } from "next-intl/server";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portofolio-cyan-six.vercel.app"),
  title: {
    default: "Bevan Alqarana | Portfolio",
    template: "%s | Bevan Alqarana",
  },
  description:
    "Portfolio Muhammad Bevan Alqarana - Aspiring Business Analyst, Data Analyst & IT Support Intern. Computer Network Engineering graduate with English proficiency.",
  keywords: [
    "portfolio",
    "business analyst",
    "data analyst",
    "IT support",
    "intern",
    "Bevan Alqarana",
    "Muhammad Bevan Alqarana",
  ],
  authors: [{ name: "Muhammad Bevan Alqarana" }],
  creator: "Muhammad Bevan Alqarana",
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: "en_US",
    title: "Bevan Alqarana | Portfolio",
    description:
      "Aspiring Business Analyst, Data Analyst & IT Support Intern. Computer Network Engineering graduate with English proficiency.",
    siteName: "Bevan Alqarana Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bevan Alqarana | Portfolio",
    description:
      "Aspiring Business Analyst, Data Analyst & IT Support Intern. Computer Network Engineering graduate with English proficiency.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
