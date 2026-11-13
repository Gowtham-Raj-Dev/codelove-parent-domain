import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import { products } from "@/lib/data";
import { ADSENSE_CLIENT, GA_MEASUREMENT_ID } from "@/lib/adsense";
import Script from "next/script";
import NextTopLoader from "nextjs-toploader";
import SmoothScroll from "@/components/SmoothScroll";
import AdSenseScript from "@/components/AdSenseScript";

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
const DESCRIPTION =
  "CodeLove offers free browser tools, video shorts cutter, 3D GLB models, online 3D & Java games, link in bio pages, and creator automation — no sign-up.";

const NETWORK_URLS = [
  "https://gowtham.codelove.in",
  "https://models.codelove.in",
  "https://games.codelove.in",
  "https://downloader.codelove.in",
  "https://linkinbio.codelove.in",
  "https://videotogif.codelove.in",
  "https://videotoimages.codelove.in",
  "https://videocut.codelove.in",
  "https://videomaker.codelove.in",
  "https://utubeflow.codelove.in",
  "https://javaplay.codelove.in",
];
// Default social preview image (public/og.png, 1200x630). Pages without their own image fall back to it.
const OG_IMAGE = { url: "/og.png", width: 1200, height: 630, alt: "CodeLove — free online tools for creators and developers" };

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "CodeLove — Free Online Tools, 3D Models & Games",
    template: "%s · CodeLove",
  },
  description: DESCRIPTION,
  keywords: [
    "CodeLove",
    "codelove",
    "code love",
    "code of love",
    "code with love",
    ...products.map((p) => p.name),
    ...products.map((p) => p.name.toLowerCase()),
    "free online tools",
    "video tools",
    "image tools",
    "video cut",
    "video shorts cutter",
    "video compressor",
    "instagram downloader",
    "pinterest downloader",
    "link in bio",
    "link in bio free",
    "free 3d models",
    "free glb models",
    "video to gif",
    "video to images",
    "games",
    "free 3d games",
    "3d games free no download",
    "free youtube automation",
    "free java games",
    "java games online",
    "Gowtham",
    "gowtham.codelove.in",
    "web development tutorials",
  ],
  authors: [{ name: "Gowtham", url: "https://gowtham.codelove.in" }],
  creator: "Gowtham",
  publisher: "CodeLove",
  applicationName: "CodeLove",
  category: "technology",
  // /favicon.ico is served from src/app/favicon.ico. Every icon is the white "C" on a black tile with
  // rounded, transparent corners, matching the other CodeLove tools' favicons.
  icons: {
    icon: [
      { url: "/new-logo/favicon-adaptive.svg", type: "image/svg+xml" },
      { url: "/new-logo/favicon-32x32-dark.png", type: "image/png", sizes: "32x32" },
      { url: "/new-logo/favicon-48x48-dark.png", type: "image/png", sizes: "48x48" },
      { url: "/new-logo/favicon-96x96-dark.png", type: "image/png", sizes: "96x96" },
      { url: "/new-logo/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/new-logo/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/new-logo/site.webmanifest",
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "CodeLove",
    title: "CodeLove — Everything You Need. One Platform.",
    description: DESCRIPTION,
    locale: "en_US",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeLove — Everything You Need. One Platform.",
    description: DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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

const SITE_NAV = [
  { name: "All Products & Tools", description: "Browse all 10+ free CodeLove web apps and tools.", url: `${SITE}/products` },
  { name: "Free AI Video Maker", description: "Type a script, get a talking cartoon or text video with AI voices — free, no watermark.", url: "https://videomaker.codelove.in" },
  { name: "Video Cut — Shorts Cutter", description: "Split and crop videos into 9:16 YouTube Shorts & Reels.", url: "https://videocut.codelove.in" },
  { name: "Free 3D Models (GLB)", description: "6,900+ free GLB/glTF 3D models with live viewer.", url: "https://models.codelove.in" },
  { name: "Free 3D Browser Games", description: "14+ free 3D games ready to play in your browser.", url: "https://games.codelove.in" },
  { name: "Learning Center", description: "Step-by-step tutorials and guides across video, 3D, and web.", url: `${SITE}/learn` },
  { name: "CodeLove Blog", description: "Articles, product deep-dives, and developer guides.", url: `${SITE}/blog` },
  { name: "About CodeLove", description: "Story, creator Gowtham, and mission behind CodeLove.", url: `${SITE}/about` },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://gowtham.codelove.in/#person",
      name: "Gowtham",
      alternateName: "Gowthamraj",
      url: "https://gowtham.codelove.in",
      jobTitle: "Full-Stack Developer & 3D Generalist",
      worksFor: { "@id": `${SITE}/#organization` },
      sameAs: ["https://codelove.in/about", "https://gowtham.codelove.in"],
    },
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "CodeLove",
      legalName: "CodeLove",
      alternateName: ["Code Love", "Code With Love", "Code of Love", "CodeLove Tools"],
      slogan: "Everything You Need. One Platform.",
      foundingDate: "2024",
      foundingLocation: { "@type": "Country", name: "India" },
      url: SITE,
      sameAs: NETWORK_URLS,
      logo: {
        "@type": "ImageObject",
        url: `${SITE}/new-logo/android-chrome-512x512.png`,
        width: 512,
        height: 512,
      },
      image: [
        `${SITE}/og.png`,
        ...products.filter((p) => p.image).map((p) => `${SITE}${p.image}`),
      ],
      description:
        "CodeLove builds free online tools: media downloader, video shorts cutter, video compressor, video and image tools, link-in-bio builder, 3D model library, 3D games, YouTube automation and Java phone games.",
      founder: { "@id": "https://gowtham.codelove.in/#person" },
      knowsAbout: ["Video Editing", "Web Tools", "3D GLB Models", "Browser Games", "Creator Economy", "YouTube Automation"],
      owns: products.map((p) => ({
        "@type": "WebApplication",
        name: p.name,
        url: p.url,
        applicationCategory: p.category === "Games" ? "GameApplication" : "WebApplication",
        operatingSystem: "Any",
      })),
      email: "support@codelove.in",
      contactPoint: [
        { "@type": "ContactPoint", contactType: "customer support", email: "support@codelove.in", availableLanguage: ["English", "Tamil"] },
        { "@type": "ContactPoint", contactType: "sales", name: "Gowtham", email: "gowtham@codelove.in", telephone: "+91-63694-94396", url: "https://wa.me/916369494396", availableLanguage: ["English", "Tamil"] },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "CodeLove",
      alternateName: ["Code Love", "Code of Love", "codelove.in"],
      description: DESCRIPTION,
      creator: { "@id": "https://gowtham.codelove.in/#person" },
      publisher: { "@id": `${SITE}/#organization` },
      inLanguage: "en",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE}/blog?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    ...SITE_NAV.map((nav) => ({
      "@type": "SiteNavigationElement",
      name: nav.name,
      description: nav.description,
      url: nav.url,
    })),
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
        <link rel="sitemap" type="application/xml" href="https://codelove.in/sitemap.xml" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google AdSense — only rendered once a publisher ID is set in src/lib/adsense.ts */}
        {ADSENSE_CLIENT ? <meta name="google-adsense-account" content={ADSENSE_CLIENT} /> : null}
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
        {ADSENSE_CLIENT ? <AdSenseScript client={ADSENSE_CLIENT} /> : null}
        {/* Google Analytics — only once a measurement ID is set in src/lib/adsense.ts */}
        {GA_MEASUREMENT_ID ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}');`}
            </Script>
          </>
        ) : null}
        {children}
      </body>
    </html>
  );
}
