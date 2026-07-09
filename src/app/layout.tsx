import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import { products } from "@/lib/data";
import NextTopLoader from "nextjs-toploader";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE = "https://codelove.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "CodeLove — Everything You Need. One Platform.",
    template: "%s · CodeLove",
  },
  description:
    "CodeLove is the content hub and product showcase for powerful online tools — downloaders, developer utilities, video & PDF tools, AI content, templates and educational tutorials for creators, developers and businesses.",
  keywords: [
    "CodeLove",
    "codelove",
    "code love",
    ...products.map((p) => p.name),
    ...products.map((p) => p.name.toLowerCase()),
    "online tools",
    "developer utilities",
    "video tools",
    "pdf tools",
    "instagram downloader",
    "background remover",
    "link in bio",
    "base64 encoder",
    "json formatter",
    "favicon generator",
    "AI videos",
    "web development tutorials",
  ],
  authors: [{ name: "Gowtham", url: "https://gowtham.codelove.in" }],
  creator: "Gowtham",
  publisher: "CodeLove",
  applicationName: "CodeLove",
  category: "technology",
  alternates: { canonical: SITE },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "CodeLove",
    title: "CodeLove — Everything You Need. One Platform.",
    description:
      "Explore powerful online tools, developer utilities, creative resources, media applications and educational content built for creators, developers, students and businesses.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeLove — Everything You Need. One Platform.",
    description:
      "Powerful online tools, developer utilities, media & AI platforms, templates and tutorials — all in one place.",
    creator: "@codelove",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('codelove-theme');
    if (t === 'dark' || !t) document.documentElement.classList.add('dark');
  } catch(e){}
})();
`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "CodeLove",
      url: SITE,
      logo: `${SITE}/icon.png`,
      description:
        "CodeLove develops powerful online applications, developer utilities, media tools, AI content platforms, productivity solutions and creative web experiences.",
      founder: { "@type": "Person", name: "Gowtham" },
      sameAs: [
        "https://gowtham.codelove.in",
        "https://downloader.codelove.in",
        "https://templates.codelove.in",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "CodeLove",
      publisher: { "@id": `${SITE}/#organization` },
      inLanguage: "en",
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Products", item: `${SITE}/#products` },
        { "@type": "ListItem", position: 3, name: "Blog", item: `${SITE}/#articles` },
      ],
    },
    {
      "@type": "ItemList",
      name: "CodeLove Products",
      itemListElement: products.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "SoftwareApplication",
          name: p.name,
          url: p.url,
          applicationCategory: "WebApplication",
          operatingSystem: "Web",
          description: p.description,
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full">
        <NextTopLoader
          color="linear-gradient(to right, #2563eb, #7c3aed, #06b6d4)"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2563eb, 0 0 5px #7c3aed"
        />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
