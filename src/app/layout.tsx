import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import { products } from "@/lib/data";
import { ADSENSE_CLIENT } from "@/lib/adsense";
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
  "Free online tools by CodeLove: media downloader, video to GIF, video to images, link in bio builder, a 3D model library and free 3D games.";
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
    ...products.map((p) => p.name),
    ...products.map((p) => p.name.toLowerCase()),
    "free online tools",
    "video tools",
    "image tools",
    "instagram downloader",
    "pinterest downloader",
    "link in bio",
    "free 3d models",
    "video to gif",
    "video to images",
    "free 3d games",
    "web development tutorials",
  ],
  authors: [{ name: "Gowtham", url: "https://gowtham.codelove.in" }],
  creator: "Gowtham",
  publisher: "CodeLove",
  applicationName: "CodeLove",
  category: "technology",
  alternates: { canonical: SITE },
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
    description:
      "Free online tools — media downloader, video and image tools, link-in-bio builder and 3D models — all in one place.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "CodeLove",
      url: SITE,
      logo: `${SITE}/new-logo/android-chrome-512x512.png`,
      description:
        "CodeLove builds free online tools: a media downloader, video and image tools, a link-in-bio builder, a 3D model library and free 3D games.",
      founder: { "@type": "Person", name: "Gowtham" },
      email: "support@codelove.in",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "CodeLove",
      alternateName: ["Code Love", "codelove.in"],
      publisher: { "@id": `${SITE}/#organization` },
      inLanguage: "en",
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
        {children}
      </body>
    </html>
  );
}
