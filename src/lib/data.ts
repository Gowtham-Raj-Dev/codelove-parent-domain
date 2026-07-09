import type { IconName } from "@/components/Icon";

/* ------------------------------------------------------------------ */
/*  Products                                                           */
/* ------------------------------------------------------------------ */
export type Product = {
  slug: string;
  name: string;
  icon: IconName;
  domain: string;
  url: string;
  tagline: string;
  description: string;
  features: string[];
  gradient: string; // tailwind gradient stops
  accent: string; // hex used for the illustration glow
  status: "Live" | "New" | "Beta" | "Soon";
  category: string;
  image?: string;
};

export const products: Product[] = [
  {
    slug: "downloader",
    name: "Downloader",
    icon: "download",
    domain: "downloader.codelove.in",
    url: "https://downloader.codelove.in",
    tagline: "Media downloader",
    description:
      "Download videos and images from supported platforms using a clean, fast, ad-light interface built for creators and marketers.",
    features: [
      "Instagram video, image & carousel downloader",
      "YouTube video & playlist downloader",
      "Pinterest video, image & board downloader",
      "Batch & multi-media downloading",
    ],
    gradient: "from-blue-500 to-indigo-600",
    accent: "#3b82f6",
    status: "Live",
    category: "Media",
    image: "/images/downloader.png",
  },
  {
    slug: "linkinbio",
    name: "Link in Bio",
    icon: "link",
    domain: "linkinbio.codelove.in",
    url: "https://linkinbio.codelove.in",
    tagline: "Micro-sites for creators",
    description:
      "Create beautiful personal profile pages for Instagram, YouTube, businesses and creators — one link for everything you do.",
    features: [
      "Unlimited links & social icons",
      "Premium themes & custom branding",
      "Built-in click analytics",
      "Mobile-first, lightning fast",
    ],
    gradient: "from-violet-500 to-fuchsia-600",
    accent: "#a855f7",
    status: "Live",
    category: "Creator",
    image: "/images/linkinbio.png",
  },
  {
    slug: "aivideos",
    name: "AI Videos",
    icon: "sparkles",
    domain: "aivideos.codelove.in",
    url: "https://aivideos.codelove.in",
    tagline: "Curated AI video showcase",
    description:
      "Discover, watch and explore thousands of trending AI-generated videos collected from creators across the internet — for inspiration, learning and entertainment.",
    features: [
      "Trending, featured & popular videos",
      "Categories: short films, cinematic, art & more",
      "Watch online in HD",
      "Download available videos",
    ],
    gradient: "from-cyan-500 to-blue-600",
    accent: "#06b6d4",
    status: "Live",
    category: "AI",
    image: "/images/aivideos.png",
  },
  {
    slug: "videotogif",
    name: "Video to GIF",
    icon: "image",
    domain: "videotogif.codelove.in",
    url: "https://videotogif.codelove.in",
    tagline: "High-quality GIF creator",
    description:
      "Convert video files into optimized GIFs directly in your browser without losing quality or waiting for uploads.",
    features: [
      "High-quality output",
      "Browser-based conversion",
      "No watermarks",
      "Fast and secure",
    ],
    gradient: "from-rose-500 to-pink-600",
    accent: "#f43f5e",
    status: "Live",
    category: "Media",
    image: "/images/videotogif.png",
  },
  {
    slug: "videotoframe",
    name: "Video to Frame",
    icon: "image",
    domain: "videotoframe.codelove.in",
    url: "https://videotoframe.codelove.in",
    tagline: "Extract high-res frames",
    description:
      "Easily extract high-resolution image frames from any video instantly in your browser.",
    features: [
      "Extract any frame",
      "High resolution",
      "Secure offline processing",
      "Free to use",
    ],
    gradient: "from-fuchsia-500 to-rose-600",
    accent: "#d946ef",
    status: "Live",
    category: "Media",
    image: "/images/videotoframe.png",
  },
  {
    slug: "iloveconvert",
    name: "Developer Utilities",
    icon: "terminal",
    domain: "iloveconvert.codelove.in",
    url: "https://iloveconvert.codelove.in",
    tagline: "The developer toolbox",
    description:
      "Professional developer and productivity utilities in one fast, privacy-first workspace built for daily engineering work.",
    features: [
      "Base64, JSON, JWT & URL tools",
      "Regex tester & hash generator",
      "Color picker & QR generator",
      "Text compare & dev cheat sheets",
    ],
    gradient: "from-emerald-500 to-teal-600",
    accent: "#10b981",
    status: "Soon",
    category: "Developer",
    image: "/images/iloveconvert.png",
  },
  {
    slug: "pdftools",
    name: "PDF Tools",
    icon: "fileText",
    domain: "pdf.codelove.in",
    url: "https://pdf.codelove.in",
    tagline: "Complete PDF workflow",
    description:
      "Professional PDF utilities to merge, split, compress and convert documents securely — files never leave your device.",
    features: [
      "Merge, split & extract pages",
      "Compress & rotate PDF",
      "Image to PDF & PDF to image",
      "100% private, browser-based",
    ],
    gradient: "from-orange-500 to-red-600",
    accent: "#f97316",
    status: "Soon",
    category: "Documents",
    image: "/images/pdftools.png",
  },
  {
    slug: "templates",
    name: "Templates",
    icon: "layout",
    domain: "templates.codelove.in",
    url: "https://templates.codelove.in",
    tagline: "Ready-made design kits",
    description:
      "Beautiful, production-ready templates for portfolios, businesses, dashboards and documents — copy, customise and ship in minutes.",
    features: [
      "Portfolio & landing page kits",
      "Resume & invoice templates",
      "Dashboard & developer templates",
      "Fully responsive & editable",
    ],
    gradient: "from-amber-500 to-orange-600",
    accent: "#f59e0b",
    status: "Soon",
    category: "Design",
    image: "/images/templates.png",
  },
  {
    slug: "bgremove",
    name: "Background Remover",
    icon: "scissors",
    domain: "bgremove.codelove.in",
    url: "https://bgremove.codelove.in",
    tagline: "AI background removal",
    description:
      "Remove image backgrounds instantly using AI — perfect cut-outs for products, portraits and profile pictures in one click.",
    features: [
      "One-click AI background removal",
      "Crisp edges & hair detection",
      "Transparent PNG export",
      "No sign-up required",
    ],
    gradient: "from-sky-500 to-cyan-600",
    accent: "#0ea5e9",
    status: "Soon",
    category: "Image",
    image: "/images/bgremove.png",
  },
  {
    slug: "favicon",
    name: "Favicon Generator",
    icon: "star",
    domain: "favicon.codelove.in",
    url: "https://favicon.codelove.in",
    tagline: "Icons for every device",
    description:
      "Generate beautiful favicons and app icons for websites and applications in every size and format required by modern browsers.",
    features: [
      "All favicon sizes & formats",
      "iOS, Android & PWA icons",
      "From image, emoji or text",
      "One-click download bundle",
    ],
    gradient: "from-indigo-500 to-violet-600",
    accent: "#6366f1",
    status: "Soon",
    category: "Developer",
    image: "/images/favicon.png",
  },
  {
    slug: "portfolio",
    name: "Portfolio",
    icon: "user",
    domain: "gowtham.codelove.in",
    url: "https://gowtham.codelove.in",
    tagline: "Official portfolio of Gowtham",
    description:
      "The official portfolio of Gowtham — the maker behind CodeLove. Explore projects, case studies and the story behind the platform.",
    features: [
      "Selected projects & case studies",
      "Design & engineering work",
      "About the maker",
      "Get in touch",
    ],
    gradient: "from-slate-600 to-slate-800",
    accent: "#64748b",
    status: "Soon",
    category: "About",
    image: "/images/portfolio.png",
  },
];

/* ------------------------------------------------------------------ */
/*  Product detail pages — explanation + "how it works"               */
/* ------------------------------------------------------------------ */
export type ProductStep = { icon: IconName; title: string; text: string };
export type ProductDetail = {
  /** A longer, richer explanation shown on the dedicated page. */
  overview: string;
  /** Short tags describing who/what it's for. */
  highlights: string[];
  /** Step-by-step "how it works" walkthrough. */
  steps: ProductStep[];
  /** Product-specific FAQs. */
  faqs: { q: string; a: string }[];
};

export const productDetails: Record<string, ProductDetail> = {
  downloader: {
    overview:
      "The CodeLove Downloader is a fast, ad-light media saver for creators, marketers and researchers. Paste a link from Instagram, YouTube or Pinterest and it fetches the original, watermark-free file in the highest quality the platform offers — videos, photos, reels, carousels, playlists and full boards. Everything runs through a clean interface with no forced sign-ups.",
    highlights: ["No watermarks", "HD quality", "No sign-up", "Instagram · YouTube · Pinterest"],
    steps: [
      { icon: "link", title: "Copy the link", text: "Open the post, reel, video or board you want and copy its share link from the app or browser." },
      { icon: "download", title: "Paste it in", text: "Drop the link into the Downloader's input box. It instantly detects the platform and the media type for you." },
      { icon: "layers", title: "Pick your quality", text: "Preview the media and choose the resolution or format — single item, carousel or a whole playlist at once." },
      { icon: "check", title: "Save to device", text: "Hit download and the original file saves straight to your device, clean and watermark-free." },
    ],
    faqs: [
      { q: "Which platforms are supported?", a: "Instagram (videos, images, reels & carousels), YouTube (videos & playlists) and Pinterest (videos, images & boards), with more added over time." },
      { q: "Are there watermarks on downloads?", a: "No. The Downloader saves the original media as the platform serves it, with no added CodeLove watermark." },
      { q: "Is it legal to download content?", a: "Downloading content you own or that is licensed for reuse is fine. Always respect copyright and each platform's terms for content you don't own." },
    ],
  },
  linkinbio: {
    overview:
      "Link in Bio turns the single link social platforms give you into a beautiful, high-converting mini-site. Add every important destination — your shop, videos, latest post, booking form and socials — behind one shareable URL. Choose premium themes, add your own branding and watch real click analytics that Instagram and TikTok keep hidden from you.",
    highlights: ["Unlimited links", "Premium themes", "Click analytics", "Mobile-first"],
    steps: [
      { icon: "user", title: "Create your page", text: "Sign up and claim your personal handle — your page goes live at a clean, shareable link in seconds." },
      { icon: "link", title: "Add your links", text: "Add unlimited links, social icons and buttons, then drag to reorder them exactly how you want." },
      { icon: "palette", title: "Make it yours", text: "Pick a premium theme, add your logo, colours and profile image so it matches your brand perfectly." },
      { icon: "search", title: "Share & track", text: "Drop the link in your bio and watch built-in analytics show which links your audience actually taps." },
    ],
    faqs: [
      { q: "Do I need an account?", a: "Yes — an account lets your page save across devices and keeps your links and analytics in sync." },
      { q: "Can I use my own branding?", a: "Absolutely. Premium themes support custom colours, logos and profile imagery for a fully branded page." },
      { q: "Does it show analytics?", a: "Yes. You get built-in click analytics so you can see which links perform best with your audience." },
    ],
  },
  aivideos: {
    overview:
      "AI Videos is a curated showcase — not a generator — that collects the most striking AI-generated videos from creators across the internet into one place. Browse trending, featured and popular clips organised by category, watch them in HD, and get inspired for your own projects. Where creators allow it, you can download clips too.",
    highlights: ["Curated, not generated", "Trending & featured", "HD streaming", "Browse by category"],
    steps: [
      { icon: "search", title: "Browse the gallery", text: "Explore trending, featured and popular AI videos, or filter by category like cinematic, short films and art." },
      { icon: "play", title: "Watch in HD", text: "Play any video online in crisp HD directly in your browser — no account and no downloads required." },
      { icon: "sparkles", title: "Get inspired", text: "Study styles, prompts and techniques from the best AI creators to spark ideas for your own work." },
      { icon: "download", title: "Download if allowed", text: "For clips where the creator permits it, save the video to your device with a single click." },
    ],
    faqs: [
      { q: "Does this generate AI videos?", a: "No. AI Videos is a curated discovery platform that showcases AI-generated videos made by creators elsewhere." },
      { q: "Can I download every video?", a: "Downloads are available only where the original creator allows it. Otherwise you can watch online in HD." },
      { q: "Is it free to browse?", a: "Yes. Discovering and watching videos is completely free with no sign-up required." },
    ],
  },
  videotogif: {
    overview:
      "Video to GIF is a dedicated utility that runs entirely inside your browser. Convert any video file into an optimized GIF animation without uploading a single byte to a server. Because processing happens locally on your device, it's private, watermark-free and lightning fast.",
    highlights: ["Runs in-browser", "No uploads", "No watermarks", "High quality"],
    steps: [
      { icon: "film", title: "Add your video", text: "Drop a video into the tool — it loads instantly and stays on your device, never touching a server." },
      { icon: "sliders", title: "Adjust settings", text: "Select the portion of the video you want and adjust the framerate and size." },
      { icon: "zap", title: "Convert locally", text: "Everything is processed right in your browser for full privacy." },
      { icon: "download", title: "Download GIF", text: "Download the finished GIF with no watermark and no waiting on uploads in the cloud." },
    ],
    faqs: [
      { q: "Are my videos uploaded anywhere?", a: "No. All processing happens locally in your browser, so your files never leave your device." },
      { q: "Is there a watermark?", a: "No. Exports are completely clean with no branding added." },
      { q: "Is it completely free?", a: "Yes, you can convert as many videos to GIFs as you want for free." },
    ],
  },
  videotoframe: {
    overview:
      "Video to Frame lets you extract high-resolution image frames from any video directly in your browser. Scrub through the video to find the perfect moment and save it as an image. No uploads, no waiting, and completely private.",
    highlights: ["Runs in-browser", "No uploads", "High resolution", "Private by design"],
    steps: [
      { icon: "film", title: "Add your video", text: "Drop a video into the tool — it loads instantly and stays on your device, never touching a server." },
      { icon: "search", title: "Find the frame", text: "Play or scrub through the video timeline to find the exact frame you want to extract." },
      { icon: "image", title: "Extract locally", text: "Capture the frame in its original high resolution directly in your browser." },
      { icon: "download", title: "Save image", text: "Download the extracted frame as an image file instantly." },
    ],
    faqs: [
      { q: "Are my videos uploaded anywhere?", a: "No. All processing happens locally in your browser, so your files never leave your device." },
      { q: "What resolution are the frames?", a: "The frames are extracted at the original resolution of the video you uploaded." },
      { q: "Is there a limit?", a: "No, you can extract as many frames from your videos as you need." },
    ],
  },
  iloveconvert: {
    overview:
      "Developer Utilities is a privacy-first workspace that bundles the small tools engineers reach for every day. Encode and decode Base64, format and validate JSON, decode JWTs, test regular expressions, generate hashes and QR codes, pick colours, compare text and more — all in one fast tab, with everything processed locally so your data stays yours.",
    highlights: ["20+ dev tools", "Privacy-first", "No installs", "One fast workspace"],
    steps: [
      { icon: "search", title: "Find your tool", text: "Open the workspace and pick from Base64, JSON, JWT, regex, hashing, colour, QR and many more utilities." },
      { icon: "terminal", title: "Paste your data", text: "Drop in your text, code or token — the tool processes it instantly, right there in your browser." },
      { icon: "zap", title: "Get the result", text: "See formatted, validated, encoded or decoded output live, with clear error hints when something's off." },
      { icon: "check", title: "Copy & go", text: "Copy the result in one click and get back to shipping. Nothing is stored or sent anywhere." },
    ],
    faqs: [
      { q: "What tools are included?", a: "Base64, JSON formatter/validator, JWT decoder, regex tester, timestamp converter, colour picker, hash & QR generators, URL encoder, text compare and more." },
      { q: "Is my data private?", a: "Yes. The utilities run in your browser, so the data you paste is not uploaded to any server." },
      { q: "Do I need to install anything?", a: "No. It's fully web-based — open the workspace and start using any tool immediately." },
    ],
  },
  pdftools: {
    overview:
      "PDF Tools is a complete document workflow that keeps your files private. Merge several PDFs into one, split or extract pages, compress large files for email, rotate pages, and convert between images and PDF — all processed inside your browser so sensitive documents never leave your device.",
    highlights: ["Merge & split", "Compress", "Image ↔ PDF", "100% private"],
    steps: [
      { icon: "fileText", title: "Add your PDF", text: "Drop in one or more PDF files. They load locally in your browser and are never uploaded to a server." },
      { icon: "layout", title: "Pick an action", text: "Choose to merge, split, extract pages, compress, rotate, or convert between images and PDF." },
      { icon: "zap", title: "Process instantly", text: "Reorder pages, set a compression level or arrange your merge, then run it — all on your own device." },
      { icon: "download", title: "Download securely", text: "Save the finished document instantly, knowing your files stayed private the entire time." },
    ],
    faqs: [
      { q: "Are my documents uploaded?", a: "No. PDF Tools processes files directly in your browser, so confidential documents stay on your device." },
      { q: "What can I do with PDFs?", a: "Merge, split, extract pages, compress, rotate, convert images to PDF, and convert PDF pages to images." },
      { q: "Is there a file limit?", a: "It's built for generous everyday use; very large files depend on your device's available memory." },
    ],
  },
  templates: {
    overview:
      "Templates gives you a library of beautiful, production-ready design kits you can copy, customise and ship in minutes. Portfolios, landing pages, business sites, resumes, invoices, dashboards and developer starters — every template is fully responsive and easy to edit, so you skip the blank page and go straight to launch.",
    highlights: ["Ready to ship", "Fully responsive", "Easy to edit", "Portfolios · Resumes · Dashboards"],
    steps: [
      { icon: "search", title: "Browse the library", text: "Explore categories like portfolios, landing pages, resumes, invoices and dashboards to find your fit." },
      { icon: "layout", title: "Preview a template", text: "Open a live preview to see the design, layout and responsiveness before you commit to it." },
      { icon: "palette", title: "Customise it", text: "Swap in your content, colours and branding — every template is built to be quick and simple to edit." },
      { icon: "check", title: "Launch fast", text: "Export or copy your finished, responsive design and ship it in minutes instead of days." },
    ],
    faqs: [
      { q: "What kinds of templates are there?", a: "Portfolio and landing page kits, resume and invoice templates, plus dashboard and developer starters." },
      { q: "Are they responsive?", a: "Yes. Every template is fully responsive and looks great from small phones to large desktops." },
      { q: "Can I use them commercially?", a: "Yes, for personal and commercial projects — just follow the usage terms provided with the library." },
    ],
  },
  bgremove: {
    overview:
      "Background Remover uses AI image segmentation to detect the subject of any photo and cleanly separate it from its background in a single click. It handles tricky edges and fine hair detail to produce crisp, transparent PNGs — perfect for product shots, portraits and profile pictures. No sign-up, no design skills required.",
    highlights: ["One-click AI", "Hair-level detail", "Transparent PNG", "No sign-up"],
    steps: [
      { icon: "image", title: "Upload an image", text: "Drop in a photo of a product, person or object. Common formats like JPG and PNG all work." },
      { icon: "sparkles", title: "AI does the work", text: "An AI segmentation model detects your subject and separates it from the background automatically." },
      { icon: "scissors", title: "Clean edges", text: "Edge refinement and hair detection tidy the cut-out so it looks sharp and natural, not rough." },
      { icon: "download", title: "Export PNG", text: "Download a crisp, transparent PNG ready to drop onto any background, mockup or design." },
    ],
    faqs: [
      { q: "How does it remove backgrounds?", a: "It uses AI segmentation to identify the subject, then refines the edges for a clean, transparent result." },
      { q: "What format do I get back?", a: "A transparent PNG, so you can place your subject onto any background or design." },
      { q: "Do I need to sign up?", a: "No. You can remove backgrounds instantly without creating an account." },
    ],
  },
  favicon: {
    overview:
      "Favicon Generator creates every favicon and app icon a modern website or app needs, from a single source. Start from an image, an emoji or plain text and instantly get all the sizes and formats browsers and devices expect — including iOS, Android and PWA icons — bundled into a one-click download.",
    highlights: ["All sizes & formats", "iOS · Android · PWA", "From image, emoji or text", "One-click bundle"],
    steps: [
      { icon: "image", title: "Choose your source", text: "Upload an image, pick an emoji or type text to use as the basis for your icon." },
      { icon: "star", title: "Preview the icons", text: "See exactly how your favicon looks across browser tabs, home screens and app launchers." },
      { icon: "layers", title: "Generate every size", text: "The tool produces all required sizes and formats, including iOS, Android and PWA icons." },
      { icon: "download", title: "Download the bundle", text: "Grab the complete icon pack plus the HTML snippet, ready to drop into your project." },
    ],
    faqs: [
      { q: "What can I start from?", a: "An uploaded image, an emoji, or plain text — whichever is easiest for your brand." },
      { q: "Which icons does it produce?", a: "All standard favicon sizes and formats, plus iOS, Android and PWA app icons." },
      { q: "Do I get the HTML code?", a: "Yes. The download bundle includes the markup you need to add the icons to your site." },
    ],
  },
  portfolio: {
    overview:
      "This is the official portfolio of Gowtham, the maker behind CodeLove. Explore selected projects and case studies spanning design and engineering, read the story behind the platform, and find out how to get in touch for collaborations, work and partnerships.",
    highlights: ["Selected projects", "Case studies", "Design & engineering", "Get in touch"],
    steps: [
      { icon: "user", title: "Meet the maker", text: "Learn who's behind CodeLove and the philosophy that shapes every product on the platform." },
      { icon: "layout", title: "Explore projects", text: "Browse selected projects and detailed case studies across design and engineering work." },
      { icon: "search", title: "See the process", text: "Dig into how each project was approached, built and shipped from idea to launch." },
      { icon: "mail", title: "Get in touch", text: "Reach out for collaborations, freelance work, partnerships or just to say hello." },
    ],
    faqs: [
      { q: "Whose portfolio is this?", a: "It's the official portfolio of Gowtham, the creator and maker behind the CodeLove platform." },
      { q: "What will I find there?", a: "Selected projects, case studies, the story behind CodeLove and a way to get in touch." },
      { q: "Can I hire or collaborate?", a: "Yes. The portfolio includes contact details for work, collaborations and partnerships." },
    ],
  },
};

/** Returns a product merged with its detail content, or null if unknown. */
export function getProduct(slug: string) {
  const product = products.find((p) => p.slug === slug);
  if (!product) return null;
  return { ...product, detail: productDetails[slug] ?? null };
}

/* ------------------------------------------------------------------ */
/*  Stats                                                              */
/* ------------------------------------------------------------------ */
export type Stat = { value: number; suffix: string; label: string };


/* ------------------------------------------------------------------ */
/*  Why choose                                                         */
/* ------------------------------------------------------------------ */
export type Value = { icon: IconName; title: string; text: string };
export const values: Value[] = [
  { icon: "cloud", title: "Cloud based", text: "Access every tool from any browser, on any device, with nothing to install or update." },
  { icon: "zap", title: "Blazing fast", text: "Edge-delivered and heavily optimised for near-instant loads and smooth interactions." },
  { icon: "shield", title: "Secure by design", text: "HTTPS everywhere, hardened infrastructure and regular security reviews across products." },
  { icon: "lock", title: "Privacy first", text: "Most tools process your files locally in the browser — your data rarely leaves your device." },
  { icon: "gift", title: "Genuinely free", text: "Core tools are free to use with no forced sign-ups, no trials and no hidden paywalls." },
  { icon: "smartphone", title: "Fully responsive", text: "Pixel-perfect experiences from small phones to ultrawide desktop displays." },
  { icon: "sparkles", title: "AI powered", text: "Modern machine-learning models power background removal, curation and smart workflows." },
  { icon: "palette", title: "Modern UI", text: "A cohesive, accessible design system that feels premium across every single product." },
];

/* ------------------------------------------------------------------ */
/*  Learning center categories                                        */
/* ------------------------------------------------------------------ */
export type Category = {
  icon: IconName;
  title: string;
  slug: string;
  blurb: string;
  gradient: string;
};
export const categories: Category[] = [
  { icon: "terminal", title: "Developer", slug: "developer", blurb: "Encoders, formatters, APIs & tooling.", gradient: "from-emerald-500 to-teal-600" },
  { icon: "film", title: "Video", slug: "video", blurb: "Editing, formats, compression & GIFs.", gradient: "from-rose-500 to-pink-600" },
  { icon: "image", title: "Image", slug: "image", blurb: "Backgrounds, formats, optimisation.", gradient: "from-purple-500 to-violet-600" },
  { icon: "fileText", title: "PDF", slug: "pdf", blurb: "Merge, compress & convert documents.", gradient: "from-orange-500 to-red-600" },
  { icon: "search", title: "SEO", slug: "seo", blurb: "Rankings, snippets & Core Web Vitals.", gradient: "from-blue-500 to-indigo-600" },
  { icon: "workflow", title: "Automation", slug: "automation", blurb: "Workflows that save hours weekly.", gradient: "from-red-500 to-rose-600" },
  { icon: "sparkles", title: "AI", slug: "ai", blurb: "Trends, tools & responsible use.", gradient: "from-cyan-500 to-blue-600" },
  { icon: "code", title: "Programming", slug: "programming", blurb: "Web fundamentals & best practices.", gradient: "from-indigo-500 to-blue-600" },
  { icon: "palette", title: "Design", slug: "design", blurb: "UI, UX, colour & typography.", gradient: "from-amber-500 to-orange-600" },
  { icon: "briefcase", title: "Business", slug: "business", blurb: "Growth, branding & productivity.", gradient: "from-slate-500 to-slate-700" },
];

/* ------------------------------------------------------------------ */
/*  Featured articles                                                  */
/* ------------------------------------------------------------------ */
export type ArticleSection = { heading: string; paragraphs: string[]; image?: string };
export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  author: string;
  published: string;
  updated: string;
  gradient: string;
  icon: IconName;
  featured?: boolean;
  /** Short intro shown at the top of the article body. */
  intro: string;
  /** Bullet-point summary shown in a highlighted card. */
  takeaways: string[];
  /** The body of the article, rendered as headed sections. */
  content: ArticleSection[];
  image?: string;
};

export const articles: Article[] = [
  {
    slug: "what-is-base64-encoding",
    title: "What Is Base64 Encoding? A Complete Beginner's Guide",
    excerpt:
      "Base64 turns binary data into safe, printable text so it can travel through systems built for plain text. Learn how it works, when to use it, and its real trade-offs.",
    category: "Developer",
    readingTime: "8 min read",
    author: "Gowtham",
    published: "Jun 12, 2026",
    updated: "Jul 1, 2026",
    gradient: "from-emerald-500 to-teal-600",
    icon: "terminal",
    featured: true,
    image: "/images/base64.png",
    intro:
      "Base64 is one of those quietly essential technologies that powers email attachments, data URLs, API tokens and more. Yet many developers use it every day without really understanding what it does. This guide demystifies Base64 from first principles.",
    takeaways: [
      "Base64 encodes binary data as 64 safe, printable ASCII characters.",
      "It is encoding, not encryption — it provides zero security on its own.",
      "Expect about a 33% size increase compared to the raw binary.",
      "It is ideal for embedding small assets and moving data through text-only channels.",
    ],
    content: [
      {
        heading: "What problem does Base64 solve?",
        image: "/images/base64_practice.png",
        paragraphs: [
          "Many systems — email, URLs, JSON, XML — were designed to carry text, not raw bytes. When you try to push binary data such as an image or a file through them, characters can get mangled, truncated or misinterpreted. Base64 solves this by translating any binary data into a limited set of 64 characters that every text system understands: A–Z, a–z, 0–9, plus '+' and '/'.",
          "The result is data that looks like gibberish text but survives any journey a plain-text channel can throw at it, then decodes back to the exact original bytes on the other side.",
        ],
      },
      {
        heading: "How the encoding actually works",
        image: "/images/base64_practice.png",
        paragraphs: [
          "Base64 takes your data three bytes (24 bits) at a time and re-slices those 24 bits into four groups of six bits. Each six-bit group has 64 possible values (2⁶), which maps neatly onto the 64-character alphabet. When the input isn't a clean multiple of three bytes, one or two '=' padding characters are added at the end.",
          "Because four output characters represent every three input bytes, encoded data is roughly 33% larger than the original. That overhead is the price you pay for text safety.",
        ],
      },
      {
        heading: "When to use it — and when not to",
        image: "/images/base64_practice.png",
        paragraphs: [
          "Base64 shines for embedding small assets directly in HTML or CSS via data URLs, attaching files to emails, and passing binary tokens through headers. It keeps everything self-contained and text-safe.",
          "It is a poor choice for large files, where the 33% bloat hurts, and it is never a security measure — anyone can decode Base64 instantly. If you need confidentiality, encrypt first, then encode if a text channel requires it.",
        ],
      },
    ],
  },
  {
    slug: "how-video-compression-works",
    title: "How Video Compression Actually Works",
    excerpt:
      "From codecs and bitrate to keyframes and perceptual quality — a clear, visual explanation of how modern video compression shrinks files without wrecking quality.",
    category: "Video",
    readingTime: "11 min read",
    author: "Gowtham",
    published: "Jun 20, 2026",
    updated: "Jun 30, 2026",
    gradient: "from-rose-500 to-pink-600",
    icon: "film",
    featured: true,
    image: "/images/videocompression.png",
    intro:
      "A single minute of raw 1080p video can weigh several gigabytes, yet the clips you stream every day are a tiny fraction of that. Compression is the magic in between. Here's how modern codecs shrink video dramatically while keeping it looking sharp.",
    takeaways: [
      "Codecs remove spatial and temporal redundancy the eye barely notices.",
      "Keyframes store full images; other frames store only what changed.",
      "Bitrate is the main dial trading file size against visual quality.",
      "Newer codecs like AV1 and HEVC beat H.264 at the same quality.",
    ],
    content: [
      {
        heading: "Redundancy is the enemy of file size",
        image: "/images/base64_practice.png",
        paragraphs: [
          "Video is full of repetition. Within a single frame, large areas of similar colour repeat — that's spatial redundancy. Across frames, most of the picture stays the same from one moment to the next — that's temporal redundancy. Compression is fundamentally about detecting and removing this repetition.",
          "On top of that, codecs exploit the limits of human vision: we notice changes in brightness far more than subtle shifts in colour, so encoders spend fewer bits on colour detail without you ever noticing.",
        ],
      },
      {
        heading: "Keyframes, predicted frames and motion",
        image: "/images/base64_practice.png",
        paragraphs: [
          "Rather than storing every frame as a full image, codecs use keyframes (I-frames) that hold a complete picture, followed by predicted frames (P- and B-frames) that only describe what changed. If a person walks across a static background, the encoder stores the moving pixels and reuses the rest.",
          "This is why a talking-head video compresses far better than fast-action footage: less motion means less new information to store per frame.",
        ],
      },
      {
        heading: "Bitrate, codecs and the quality trade-off",
        image: "/images/base64_practice.png",
        paragraphs: [
          "Bitrate — how many bits per second the video uses — is your primary quality control. Too low and you get blocky artefacts and smearing; too high and files balloon with no visible benefit. Variable bitrate (VBR) spends more bits on complex scenes and fewer on simple ones for the best balance.",
          "The codec matters just as much. H.264 is universally compatible, HEVC (H.265) and VP9 cut size significantly, and AV1 pushes efficiency further still. Newer codecs deliver the same quality at a lower bitrate — at the cost of more processing power to encode and decode.",
        ],
      },
    ],
  },
  {
    slug: "best-video-formats-explained",
    title: "Best Video Formats Explained: MP4 vs WebM vs MOV",
    excerpt:
      "Choosing the right container and codec affects quality, size and compatibility. Here's a practical breakdown for the web, social media and archiving.",
    category: "Video",
    readingTime: "9 min read",
    author: "Gowtham",
    published: "Jun 18, 2026",
    updated: "Jun 28, 2026",
    gradient: "from-fuchsia-500 to-purple-600",
    icon: "film",
    image: "/images/videoformats.png",
    intro:
      "MP4, WebM, MOV, MKV — the list of video formats is long and confusing. The key insight is that a format is really two things: a container and a codec. Understand that split and choosing the right one becomes simple.",
    takeaways: [
      "A container (MP4, WebM, MOV) holds video, audio and metadata together.",
      "The codec (H.264, VP9, AV1) does the actual compression.",
      "MP4 with H.264 is the safest, most compatible choice everywhere.",
      "WebM is leaner for the web; MOV suits Apple editing workflows.",
    ],
    content: [
      {
        heading: "Container vs codec: the crucial distinction",
        image: "/images/base64_practice.png",
        paragraphs: [
          "A container is the wrapper — the .mp4 or .webm file — that bundles your video stream, audio stream, subtitles and metadata into one package. The codec is the algorithm that compresses the actual video inside. The same MP4 container can hold H.264, HEVC or AV1 video, which is why file extension alone doesn't tell the whole story.",
          "When you pick a 'format', you're really choosing a container-plus-codec combination, and each pairing has different compatibility and efficiency characteristics.",
        ],
      },
      {
        heading: "The three formats compared",
        image: "/images/base64_practice.png",
        paragraphs: [
          "MP4 is the universal default. Paired with H.264, it plays on virtually every device, browser and platform ever made, which makes it the safest choice for sharing and social media. WebM, built around VP9 and AV1, is open, royalty-free and slightly more efficient — ideal for websites where you control playback.",
          "MOV is Apple's QuickTime container, common in editing pipelines and screen recordings on macOS and iOS. It's excellent for editing but less friendly for distribution outside the Apple ecosystem.",
        ],
      },
      {
        heading: "Which one should you use?",
        image: "/images/base64_practice.png",
        paragraphs: [
          "For uploading to YouTube, Instagram or sending to a client: MP4 with H.264 every time. For a self-hosted website where load speed matters: WebM as the primary source with an MP4 fallback. For editing on a Mac before exporting: MOV is fine as an intermediate, but export to MP4 for delivery.",
          "When in doubt, MP4 is rarely the wrong answer — its compatibility is unmatched.",
        ],
      },
    ],
  },
  {
    slug: "how-ai-background-removal-works",
    title: "How AI Background Removal Works Under the Hood",
    excerpt:
      "Segmentation models, alpha matting and edge refinement — the technology that turns a messy photo into a clean, transparent cut-out in seconds.",
    category: "AI",
    readingTime: "7 min read",
    author: "Gowtham",
    published: "Jun 15, 2026",
    updated: "Jun 27, 2026",
    gradient: "from-sky-500 to-cyan-600",
    icon: "scissors",
    image: "/images/aibgremoval.png",
    intro:
      "One click and the background vanishes, leaving a crisp cut-out with clean edges — even around hair. It feels like magic, but it's the result of several AI techniques working together. Here's what happens behind that single button.",
    takeaways: [
      "A segmentation model classifies every pixel as subject or background.",
      "Alpha matting handles soft, semi-transparent edges like hair.",
      "Edge refinement removes fringing for a natural-looking cut-out.",
      "Modern models run in seconds, often right inside your browser.",
    ],
    content: [
      {
        heading: "Step one: semantic segmentation",
        image: "/images/base64_practice.png",
        paragraphs: [
          "The core of background removal is a neural network trained on millions of images to understand what a 'subject' looks like. It processes your photo and produces a mask — a map that labels every single pixel as either foreground or background. This is called semantic segmentation.",
          "Models like U²-Net are popular for this because they capture both the overall shape of the subject and fine local detail, which is essential for accurate cut-outs.",
        ],
      },
      {
        heading: "Step two: alpha matting for soft edges",
        image: "/images/base64_practice.png",
        paragraphs: [
          "A hard yes/no mask works fine for solid objects, but real subjects have fuzzy boundaries — strands of hair, motion blur, translucent fabric. Alpha matting estimates a partial transparency value for these tricky pixels, so edges blend naturally instead of looking cut with scissors.",
          "This is the difference between an amateur-looking crop and a professional one, and it's where the best tools distinguish themselves.",
        ],
      },
      {
        heading: "Step three: refinement and export",
        image: "/images/base64_practice.png",
        paragraphs: [
          "Finally, edge-refinement passes clean up colour fringing (leftover halos from the old background) and smooth jagged transitions. The subject is then composited onto transparency and exported as a PNG that preserves the alpha channel.",
          "Because these models have become efficient, much of this now runs locally in your browser — no upload required, keeping your images private.",
        ],
      },
    ],
  },
  {
    slug: "what-is-a-json-formatter",
    title: "What Is a JSON Formatter and Why Developers Rely On It",
    excerpt:
      "Readable JSON prevents bugs and speeds up debugging. Learn how formatting, validation and minification fit into a modern developer workflow.",
    category: "Developer",
    readingTime: "6 min read",
    author: "Gowtham",
    published: "Jun 10, 2026",
    updated: "Jun 26, 2026",
    gradient: "from-blue-500 to-indigo-600",
    icon: "code",
    image: "/images/jsonformatter.png",
    intro:
      "JSON is the lingua franca of APIs, but raw JSON from a server is often a single unreadable line. A JSON formatter turns that wall of text into something you can actually work with — and does far more than just add whitespace.",
    takeaways: [
      "Formatting adds indentation so nested structures become readable.",
      "Validation catches syntax errors like trailing commas instantly.",
      "Minification strips whitespace to shrink payloads for production.",
      "Browser-based formatters keep sensitive data on your device.",
    ],
    content: [
      {
        heading: "From a wall of text to readable structure",
        image: "/images/base64_practice.png",
        paragraphs: [
          "APIs typically return JSON minified into one long line to save bandwidth. That's efficient for machines but painful for humans. A formatter (also called a beautifier) parses the data and re-prints it with consistent indentation and line breaks, revealing the nested hierarchy of objects and arrays at a glance.",
          "Suddenly you can see which fields belong to which object, spot missing values, and understand an unfamiliar API response in seconds instead of minutes.",
        ],
      },
      {
        heading: "Validation catches errors before they bite",
        image: "/images/base64_practice.png",
        paragraphs: [
          "A good formatter is also a validator. It parses your JSON against the strict specification and flags problems — a trailing comma, an unquoted key, a mismatched bracket — with the exact line where things break. This turns cryptic runtime failures into obvious, fixable issues.",
          "For anyone hand-editing config files or crafting API requests, this instant feedback is a genuine time-saver.",
        ],
      },
      {
        heading: "Minify for production, and keep it private",
        image: "/images/base64_practice.png",
        paragraphs: [
          "The reverse of formatting is minification: stripping every unnecessary space and newline to make payloads as small as possible for production. Most formatters offer both directions with a single click.",
          "Because JSON often contains sensitive data — tokens, personal info, internal IDs — prefer a browser-based formatter that processes everything locally rather than sending it to a server.",
        ],
      },
    ],
  },
  {
    slug: "complete-guide-to-pdf-compression",
    title: "The Complete Guide to PDF Compression",
    excerpt:
      "Why PDFs get huge, how compression reduces size safely, and how to keep documents sharp while shaving off megabytes for email and the web.",
    category: "PDF",
    readingTime: "8 min read",
    author: "Gowtham",
    published: "Jun 8, 2026",
    updated: "Jun 25, 2026",
    gradient: "from-orange-500 to-red-600",
    icon: "fileText",
    image: "/images/pdfcompression.png",
    intro:
      "You've all been there: a PDF too large to email, bouncing back with a size-limit error. PDFs balloon for predictable reasons, and understanding them is the key to compressing safely without turning your document into a blurry mess.",
    takeaways: [
      "Embedded images are usually the biggest cause of huge PDFs.",
      "Downsampling images to screen resolution reclaims the most space.",
      "Subsetting fonts and removing metadata trims further overhead.",
      "Browser-based compression keeps confidential documents private.",
    ],
    content: [
      {
        heading: "Why PDFs get so big",
        image: "/images/base64_practice.png",
        paragraphs: [
          "A PDF bundles text, vector graphics, fonts and — most importantly — images into one file. High-resolution scans and photos are almost always the culprit behind a bloated document. A single 300 DPI full-page scan can weigh several megabytes on its own.",
          "Embedded fonts, form data and invisible metadata add further weight, but images are where the real savings live.",
        ],
      },
      {
        heading: "How compression shrinks them safely",
        image: "/images/base64_practice.png",
        paragraphs: [
          "The most effective technique is downsampling: reducing image resolution to match how the document will actually be viewed. A PDF read on screen only needs around 150 DPI; anything more is wasted data. Re-encoding images with efficient JPEG or JPEG2000 compression cuts size further.",
          "Beyond images, subsetting fonts (embedding only the characters actually used) and stripping unnecessary metadata can trim a surprising amount without touching visible quality.",
        ],
      },
      {
        heading: "Keeping quality — and privacy — intact",
        image: "/images/base64_practice.png",
        paragraphs: [
          "The goal is to compress to the right level for the job. For email and web, aggressive compression is fine. For printing, keep resolution at 300 DPI. A good tool lets you choose that balance rather than forcing one setting.",
          "Since PDFs often hold contracts, IDs and financial records, favour tools that compress entirely in your browser so the file never leaves your device.",
        ],
      },
    ],
  },
  {
    slug: "complete-instagram-downloader-guide",
    title: "The Complete Instagram Downloader Guide (2026)",
    excerpt:
      "How Instagram media works, what you can and can't download, and how to save reels, photos and carousels responsibly for your own content.",
    category: "Media",
    readingTime: "10 min read",
    author: "Gowtham",
    published: "Jun 22, 2026",
    updated: "Jul 2, 2026",
    gradient: "from-pink-500 to-rose-600",
    icon: "download",
    image: "/images/igdownloader.png",
    intro:
      "Saving your own reels, backing up a client's carousel, or archiving content you created — there are plenty of legitimate reasons to download Instagram media. This guide covers how it works and how to do it responsibly.",
    takeaways: [
      "Instagram serves media as standard files behind its interface.",
      "Downloaders fetch the original, watermark-free version of a post.",
      "Reels, photos, carousels and profile pictures can all be saved.",
      "Always respect copyright and only download content you may use.",
    ],
    content: [
      {
        heading: "How Instagram media works",
        image: "/images/base64_practice.png",
        paragraphs: [
          "Every reel, photo and carousel on Instagram is ultimately a standard video or image file hosted on Meta's servers and delivered to your browser or app. The platform wraps these files in its own interface, but the underlying media is retrievable when you have the post's link.",
          "A downloader simply requests that original file and hands it to you directly, without the app's compression or on-screen watermarks.",
        ],
      },
      {
        heading: "What you can download",
        image: "/images/base64_practice.png",
        paragraphs: [
          "Modern tools handle the full range of public content: single-photo posts, multi-image carousels, reels, video posts and even high-resolution profile pictures. For carousels, a good downloader lets you grab every slide at once rather than one at a time.",
          "The process is usually the same: copy the share link from the post's menu, paste it into the downloader, preview the media and save it in its original quality.",
        ],
      },
      {
        heading: "Downloading responsibly",
        image: "/images/base64_practice.png",
        paragraphs: [
          "Downloading content you created, own the rights to, or have permission to reuse is perfectly reasonable. Downloading someone else's work to republish as your own is not — it can breach copyright and Instagram's terms.",
          "Treat downloaders as a convenience for legitimate backup and reuse, always credit creators, and never redistribute private or copyrighted material without consent.",
        ],
      },
    ],
  },
  {
    slug: "how-link-in-bio-pages-boost-your-presence",
    title: "How Link in Bio Pages Boost Your Online Presence",
    excerpt:
      "One link, every destination. Learn how bio pages centralise your audience, improve conversions and give you analytics social platforms hide.",
    category: "Creator",
    readingTime: "7 min read",
    author: "Gowtham",
    published: "Jun 3, 2026",
    updated: "Jun 23, 2026",
    gradient: "from-violet-500 to-fuchsia-600",
    icon: "link",
    image: "/images/linkinbio_boost.png",
    intro:
      "Social platforms give you just one clickable link, but you have a shop, a newsletter, a latest video and five socials to promote. A link-in-bio page solves that constraint elegantly — and does more than you might think.",
    takeaways: [
      "A bio page turns one allowed link into unlimited destinations.",
      "It creates a consistent, branded hub across every platform.",
      "Built-in analytics reveal what your audience actually taps.",
      "Updating one page beats editing links on every profile.",
    ],
    content: [
      {
        heading: "Solving the one-link problem",
        image: "/images/base64_practice.png",
        paragraphs: [
          "Instagram, TikTok and most social apps allow a single link in your profile. If you're a creator or business, that's a real bottleneck — you constantly have to choose which destination matters most this week. A link-in-bio page removes the choice by putting all your important links on one clean, shareable page.",
          "Visitors land on a mini-site with buttons for your shop, latest content, booking form and socials, and pick what they want.",
        ],
      },
      {
        heading: "A branded hub that builds trust",
        image: "/images/base64_practice.png",
        paragraphs: [
          "Beyond convenience, a well-designed bio page reinforces your brand. Consistent colours, a profile image and a clear layout make you look established and trustworthy the moment someone taps through. You control the experience instead of dumping people onto a bare link.",
          "Because it's one page, updating your priorities is instant — swap the top button when you launch something new, and every platform's link is updated at once.",
        ],
      },
      {
        heading: "The analytics advantage",
        image: "/images/base64_practice.png",
        paragraphs: [
          "Social platforms hide most of what happens after someone leaves their app. A bio page gives that visibility back: which links get the most taps, when your audience is active, and what content actually converts.",
          "That data lets you double down on what works and quietly retire what doesn't — turning your bio link from a static list into a growth tool.",
        ],
      },
    ],
  },
  {
    slug: "beginners-guide-to-web-development-2026",
    title: "A Beginner's Guide to Web Development in 2026",
    excerpt:
      "HTML, CSS and JavaScript demystified — a friendly roadmap that takes you from your first tag to shipping a real, responsive website.",
    category: "Programming",
    readingTime: "14 min read",
    author: "Gowtham",
    published: "Jun 1, 2026",
    updated: "Jun 22, 2026",
    gradient: "from-indigo-500 to-blue-600",
    icon: "code",
    image: "/images/webdev.png",
    intro:
      "Web development can feel overwhelming from the outside — endless frameworks, tools and jargon. But the foundations are simpler than they look, and they haven't fundamentally changed. Here's a clear roadmap from absolute beginner to shipping real sites.",
    takeaways: [
      "HTML, CSS and JavaScript are the three pillars — learn them first.",
      "Master fundamentals before reaching for frameworks.",
      "Build small real projects to cement what you learn.",
      "Responsive design and accessibility are non-negotiable today.",
    ],
    content: [
      {
        heading: "The three pillars",
        image: "/images/base64_practice.png",
        paragraphs: [
          "Every website, no matter how advanced, is built on three technologies. HTML defines structure and content — the headings, paragraphs and buttons. CSS controls presentation — colours, layout, spacing and responsiveness. JavaScript adds behaviour — interactivity, data fetching and dynamic updates.",
          "Learn these in order. A solid grasp of HTML and CSS alone lets you build genuinely useful sites, and it makes everything that comes after far easier to understand.",
        ],
      },
      {
        heading: "Fundamentals before frameworks",
        image: "/images/base64_practice.png",
        paragraphs: [
          "It's tempting to jump straight to React, Next.js or the framework of the month, but frameworks are built on the fundamentals. If you don't understand how the DOM works or how CSS layout behaves, frameworks will feel like magic you can't debug.",
          "Spend real time with vanilla JavaScript and plain CSS first. When you do adopt a framework, you'll learn it faster and use it far more effectively.",
        ],
      },
      {
        heading: "Learn by building",
        image: "/images/base64_practice.png",
        paragraphs: [
          "Tutorials teach concepts, but projects teach you to actually develop. Rebuild a landing page you admire, make a to-do app, then a small site with a form and some interactivity. Each project forces you to solve real problems and glue concepts together.",
          "Along the way, make responsive design and accessibility habits, not afterthoughts — your sites should work on any screen and for every user from the very start.",
        ],
      },
    ],
  },
  {
    slug: "best-developer-tools-to-save-hours",
    title: "The Best Developer Tools to Save Hours Every Week",
    excerpt:
      "A curated stack of encoders, converters, testers and formatters that eliminate busywork so you can focus on shipping great software.",
    category: "Developer",
    readingTime: "9 min read",
    author: "Gowtham",
    published: "May 28, 2026",
    updated: "Jun 21, 2026",
    gradient: "from-teal-500 to-emerald-600",
    icon: "terminal",
    image: "/images/best_developer_tools.png",
    intro:
      "Great developers aren't just good at writing code — they're ruthless about eliminating busywork. A well-chosen set of small utilities can quietly reclaim hours every week. Here are the categories worth keeping one tab away.",
    takeaways: [
      "Formatters and validators catch mistakes before they cost time.",
      "Encoders and converters remove repetitive manual conversions.",
      "Testers for regex and JWTs turn guesswork into instant answers.",
      "Browser-based tools keep sensitive data off third-party servers.",
    ],
    content: [
      {
        heading: "Formatters and validators",
        image: "/images/base64_practice.png",
        paragraphs: [
          "JSON, XML, SQL and code formatters instantly turn messy input into clean, readable structure — and flag syntax errors while they're at it. Reaching for one whenever you inspect an API response or hand-edit a config file saves constant squinting and prevents avoidable bugs.",
          "The time saving is small per use but enormous over a week, because these are things you do dozens of times a day.",
        ],
      },
      {
        heading: "Encoders and converters",
        image: "/images/base64_practice.png",
        paragraphs: [
          "Base64 encoders, URL encoders, timestamp converters and colour-format converters remove the friction of tasks you can't quite do in your head. Instead of context-switching to write a throwaway script, you paste, convert and move on.",
          "Keeping these in a single workspace means you're never more than a click away from the transformation you need.",
        ],
      },
      {
        heading: "Testers and generators",
        image: "/images/base64_practice.png",
        paragraphs: [
          "Regex testers let you build and verify patterns against real input instead of deploying and praying. JWT decoders reveal exactly what's inside a token. Hash and QR generators, along with text-diff tools, handle the long tail of everyday tasks.",
          "Favour tools that run entirely in your browser — when you're pasting tokens or internal data, you don't want it travelling to someone else's server.",
        ],
      },
    ],
  },
  {
    slug: "ai-video-trends-explained",
    title: "AI Video Trends Explained: What's Actually Changing",
    excerpt:
      "From text-to-video to AI cinematics, we break down the trends reshaping creative media — and what they mean for creators and audiences.",
    category: "AI",
    readingTime: "10 min read",
    author: "Gowtham",
    published: "May 26, 2026",
    updated: "Jun 20, 2026",
    gradient: "from-cyan-500 to-blue-600",
    icon: "sparkles",
    image: "/images/ai_video_trends.png",
    intro:
      "AI video has gone from novelty to genuine creative tool in a remarkably short time. Beyond the viral clips, real shifts are underway in how video gets made. Here's what's actually changing — and what it means for creators.",
    takeaways: [
      "Text-to-video models now produce coherent, controllable shots.",
      "AI is becoming a pre-production and editing assistant, not just a generator.",
      "Consistency of characters and style is the current frontier.",
      "Human taste and direction matter more, not less.",
    ],
    content: [
      {
        heading: "From clips to controllable shots",
        image: "/images/base64_practice.png",
        paragraphs: [
          "Early AI video was impressive but chaotic — a few seconds of dreamlike motion with little control. The latest models produce longer, more coherent shots and, crucially, give creators real control over camera movement, framing and pacing through prompts and reference inputs.",
          "That shift from 'random generation' to 'directable output' is what turns a toy into a tool professionals can actually use.",
        ],
      },
      {
        heading: "AI across the whole pipeline",
        image: "/images/base64_practice.png",
        paragraphs: [
          "The bigger trend is AI moving beyond generation into the entire production pipeline. It's storyboarding scenes, generating B-roll, cleaning up audio, cutting rough edits and upscaling footage. For many creators, the value isn't a fully AI film but a dramatically faster, cheaper path through the boring parts.",
          "This lowers the barrier to entry: a solo creator can now produce work that once required a small team.",
        ],
      },
      {
        heading: "The frontier — and the human role",
        image: "/images/base64_practice.png",
        paragraphs: [
          "The hardest remaining problem is consistency: keeping the same character, style and world coherent across many shots. Solving it is the current race, and progress is fast.",
          "Ironically, as generation gets easier, human judgement becomes more valuable, not less. Taste, story, timing and direction are what separate forgettable AI clips from work people actually want to watch.",
        ],
      },
    ],
  },
  {
    slug: "png-vs-svg-which-format",
    title: "PNG vs SVG: Which Image Format Should You Use?",
    excerpt:
      "Raster vs vector, transparency, scalability and file size — a definitive comparison so you always pick the right format for the job.",
    category: "Image",
    readingTime: "6 min read",
    author: "Gowtham",
    published: "May 24, 2026",
    updated: "Jun 19, 2026",
    gradient: "from-purple-500 to-violet-600",
    icon: "image",
    image: "/images/png_vs_svg.png",
    intro:
      "PNG and SVG both support transparency and both look crisp, so it's easy to treat them as interchangeable. They're not. The right choice comes down to one fundamental difference: raster versus vector.",
    takeaways: [
      "PNG is raster — a fixed grid of pixels, ideal for photos and detail.",
      "SVG is vector — math-defined shapes that scale infinitely.",
      "Use SVG for logos, icons and illustrations.",
      "Use PNG for photographs and complex, non-scalable imagery.",
    ],
    content: [
      {
        heading: "Raster vs vector — the core difference",
        image: "/images/base64_practice.png",
        paragraphs: [
          "A PNG stores an image as a fixed grid of coloured pixels. Zoom in far enough and you'll see those pixels — the image can't add detail it doesn't have. An SVG, by contrast, stores an image as mathematical instructions: 'draw a circle here, a line there.' The browser renders those instructions freshly at any size.",
          "This is why an SVG logo stays razor-sharp on a tiny favicon or a giant billboard, while a PNG blurs when scaled beyond its native resolution.",
        ],
      },
      {
        heading: "When SVG wins",
        image: "/images/base64_practice.png",
        paragraphs: [
          "For anything made of clean shapes — logos, icons, illustrations, charts — SVG is the clear winner. It's resolution-independent, usually tiny in file size, and can be styled and animated with CSS. It's the backbone of crisp, responsive interfaces.",
          "The catch: SVG struggles with photographic detail, where describing every subtle colour variation as shapes becomes impractical.",
        ],
      },
      {
        heading: "When PNG wins",
        image: "/images/base64_practice.png",
        paragraphs: [
          "PNG excels at exactly what SVG can't do: photographs, screenshots and detailed imagery with complex colour and texture. It also supports full alpha transparency, making it perfect for cut-outs and images that sit over varied backgrounds.",
          "The rule of thumb is simple: if it's drawn from shapes, reach for SVG; if it's captured or richly detailed, reach for PNG.",
        ],
      },
    ],
  },
  {
    slug: "how-to-convert-video-to-gif",
    title: "How to Convert Video to GIF (The Right Way)",
    excerpt:
      "GIFs are everywhere but easy to get wrong. Learn framerate, colour palettes and sizing so your loops look sharp and stay small.",
    category: "Video",
    readingTime: "7 min read",
    author: "Gowtham",
    published: "May 22, 2026",
    updated: "Jun 18, 2026",
    gradient: "from-rose-500 to-orange-600",
    icon: "film",
    image: "/images/video_to_gif_article.png",
    intro:
      "GIFs are the internet's favourite way to share a quick loop, but a careless conversion produces a huge, ugly file. A few simple choices around length, framerate and colour make all the difference between a crisp loop and a bloated mess.",
    takeaways: [
      "GIF is limited to 256 colours — palette choice is everything.",
      "Shorter clips and lower framerates keep files small.",
      "Trim tightly and size deliberately before converting.",
      "For long or full-colour clips, consider a video format instead.",
    ],
    content: [
      {
        heading: "Understand GIF's limitations",
        image: "/images/base64_practice.png",
        paragraphs: [
          "The GIF format dates back decades and carries a hard limit: a maximum of 256 colours per frame. That's why gradients and video footage can look banded or grainy as a GIF. It also has no real compression for motion, so file sizes climb quickly with length and dimensions.",
          "Knowing these constraints upfront is the key to working with the format instead of against it.",
        ],
      },
      {
        heading: "The settings that matter",
        image: "/images/base64_practice.png",
        paragraphs: [
          "Three dials control quality and size. Length: keep it to a few seconds — GIF is for moments, not scenes. Framerate: 10–15 fps is usually plenty and dramatically smaller than 30 fps. Dimensions: scale down to the size it'll actually display at rather than exporting full resolution.",
          "A smart colour palette — optimised for the specific clip — also does a lot to keep the limited 256 colours looking clean.",
        ],
      },
      {
        heading: "When not to use a GIF at all",
        image: "/images/base64_practice.png",
        paragraphs: [
          "For anything longer than a few seconds or rich in colour, a short looping MP4 or WebM video will look far better and weigh a fraction as much. Most platforms now autoplay silent video loops that behave just like a GIF.",
          "Reserve true GIFs for short, simple, widely-shareable loops where universal compatibility matters more than fidelity.",
        ],
      },
    ],
  },
];

/** Returns a single article by slug, or null if unknown. */
export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug) ?? null;
}

/** Returns a learning-center category by slug, or null if unknown. */
export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug) ?? null;
}

/** Returns every article whose category matches the given name (case-insensitive). */
export function articlesByCategory(name: string) {
  const term = name.toLowerCase();
  return articles.filter((a) => a.category.toLowerCase() === term);
}

/** All distinct categories that actually have articles, for blog filtering. */
export const articleCategories = Array.from(new Set(articles.map((a) => a.category))).sort();

/** Learning-center categories annotated with their real, published article count. */
export type CategoryWithCount = Category & { count: number };
export const categoriesWithCounts: CategoryWithCount[] = categories.map((c) => ({
  ...c,
  count: articlesByCategory(c.title).length,
}));

/** Only the categories that currently have at least one published article. */
export const activeCategories = categoriesWithCounts.filter((c) => c.count > 0);

/* ------------------------------------------------------------------ */
/*  Documentation                                                      */
/* ------------------------------------------------------------------ */
export type Doc = { icon: IconName; title: string; text: string; steps: number };
export const docs: Doc[] = [
  { icon: "rocket", title: "Getting Started", text: "Understand the CodeLove ecosystem and find the right product for your task in minutes.", steps: 4 },
  { icon: "download", title: "Downloading Media", text: "Step-by-step guides for saving videos and images from every supported platform.", steps: 6 },
  { icon: "terminal", title: "Using Developer Tools", text: "Encode, decode, format and validate data with our developer utilities.", steps: 8 },
  { icon: "film", title: "Editing Video", text: "Trim, crop, compress and convert video right inside your browser.", steps: 7 },
  { icon: "fileText", title: "Working with PDFs", text: "Merge, split and compress documents while keeping your files private.", steps: 5 },
  { icon: "link", title: "Building a Bio Page", text: "Create, theme and publish your personal Link in Bio profile.", steps: 6 },
];

/* ------------------------------------------------------------------ */
/*  Testimonials                                                       */
/* ------------------------------------------------------------------ */
export type Testimonial = { name: string; role: string; text: string; initials: string; hue: string };
export const testimonials: Testimonial[] = [
  {
    name: "Ananya Sharma",
    role: "Content Creator",
    text: "CodeLove replaced five different sites I used to juggle. The downloader and video tools alone save me hours every single week.",
    initials: "AS",
    hue: "from-blue-500 to-indigo-600",
  },
  {
    name: "Marcus Reid",
    role: "Full-stack Developer",
    text: "The developer utilities are genuinely best-in-class. JSON formatter, JWT decoder and regex tester are permanently pinned in my browser.",
    initials: "MR",
    hue: "from-emerald-500 to-teal-600",
  },
  {
    name: "Priya Nair",
    role: "Small Business Owner",
    text: "I built my Link in Bio page in ten minutes and it looks incredibly professional. The background remover made my product photos pop.",
    initials: "PN",
    hue: "from-violet-500 to-fuchsia-600",
  },
  {
    name: "Daniel Okafor",
    role: "Video Editor",
    text: "Being able to compress and convert video in the browser with no watermark and no upload is a game changer for quick client turnarounds.",
    initials: "DO",
    hue: "from-rose-500 to-pink-600",
  },
  {
    name: "Sofia Marchetti",
    role: "UX Designer",
    text: "The articles are actually well-written and useful, not filler. I send the format and design guides to my junior designers all the time.",
    initials: "SM",
    hue: "from-amber-500 to-orange-600",
  },
  {
    name: "Rahul Verma",
    role: "Student",
    text: "As a student, having powerful tools that are free and don't nag me to sign up is amazing. The web development guide got me my first internship.",
    initials: "RV",
    hue: "from-cyan-500 to-blue-600",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ — 40 SEO-optimised Q&A                                         */
/* ------------------------------------------------------------------ */
export type Faq = { q: string; a: string; group: string };
export const faqs: Faq[] = [
  { group: "General", q: "What is CodeLove?", a: "CodeLove is a content hub, learning platform and product showcase for a growing family of free online tools. It introduces every CodeLove product, explains what each one does, and publishes tutorials and articles that help creators, developers, students and businesses get more done." },
  { group: "General", q: "Is CodeLove free to use?", a: "Yes. The core of every CodeLove product is free to use, and most tools work without creating an account. We keep the platform sustainable through non-intrusive advertising and optional premium features, so you can get real work done at no cost." },
  { group: "General", q: "Do I need to create an account?", a: "For most tools, no. You can download media, format code, edit video and remove backgrounds without signing up. An account is only needed for products that save your data across devices, such as building and managing a Link in Bio page." },
  { group: "General", q: "Where are the actual tools located?", a: "Each CodeLove product lives on its own dedicated subdomain — for example downloader.codelove.in or iloveconvert.codelove.in. This homepage introduces every product and links you directly to the right one." },
  { group: "General", q: "Who is CodeLove for?", a: "CodeLove is built for creators, developers, students, marketers, designers and small businesses — anyone who wants fast, reliable, well-designed tools and clear educational content without a steep learning curve." },
  { group: "General", q: "What platforms does CodeLove support?", a: "CodeLove is fully web-based, so it works on Windows, macOS, Linux, Android and iOS through any modern browser like Chrome, Edge, Firefox or Safari. There is nothing to download or install." },

  { group: "Products", q: "What can the Downloader tool do?", a: "The Downloader lets you save videos and images from supported platforms including Instagram, YouTube and Pinterest. It supports single and multiple media, carousels, playlists and boards through a clean, fast interface." },
  { group: "Products", q: "Is the AI Videos product a video generator?", a: "No. AI Videos is a curated showcase platform, not a generator. It collects trending AI-generated videos from creators across the internet so you can discover, watch and — where available — download them for inspiration and learning." },
  { group: "Products", q: "What is Link in Bio used for?", a: "Link in Bio creates a single, beautiful profile page that holds all of your important links. It's ideal for Instagram, YouTube, businesses and creators who need one shareable link with themes, analytics and custom branding." },
  { group: "Products", q: "What developer utilities are included?", a: "The developer toolbox includes a Base64 encoder and decoder, JSON formatter and validator, JWT decoder, regex tester, timestamp converter, colour picker, hash generator, QR generator, URL encoder and decoder, Lorem Ipsum generator, text compare and developer cheat sheets." },
  { group: "Products", q: "Can I edit video in the browser?", a: "Yes. Video Tools offers browser-based trimming, cropping, resizing, rotating, merging, compressing and muting, plus conversion to GIF and frames — all without uploading your files to a server." },
  { group: "Products", q: "How does the Background Remover work?", a: "The Background Remover uses AI segmentation to detect the subject of your image and separate it from the background, giving you a clean, transparent PNG in a single click — perfect for products, portraits and profile pictures." },
  { group: "Products", q: "What PDF tools are available?", a: "PDF Tools lets you merge, split, compress and rotate PDFs, extract pages, convert images to PDF and convert PDF pages to images — all processed privately in your browser." },
  { group: "Products", q: "What is the Favicon Generator?", a: "The Favicon Generator creates favicons and app icons in every size and format modern browsers and devices require, including iOS, Android and PWA icons, from an image, emoji or text." },
  { group: "Products", q: "What templates does CodeLove offer?", a: "Templates provides ready-made, customisable kits for portfolios, landing pages, businesses, resumes, invoices, dashboards and developers — all fully responsive and easy to edit." },

  { group: "Privacy & Security", q: "Is my data safe with CodeLove?", a: "Yes. Many CodeLove tools process your files entirely inside your browser, meaning your data never touches a server. Everything is served over encrypted HTTPS and our infrastructure is regularly reviewed for security." },
  { group: "Privacy & Security", q: "Do you upload my files to a server?", a: "For browser-based tools such as video editing and PDF utilities, files are processed locally and are not uploaded. A small number of AI-powered features process data securely and only for as long as needed to return your result." },
  { group: "Privacy & Security", q: "Does CodeLove sell my personal data?", a: "No. CodeLove does not sell your personal data. We only collect what is necessary to operate and improve the service, as described in our Privacy Policy." },
  { group: "Privacy & Security", q: "What cookies does CodeLove use?", a: "CodeLove uses essential cookies for core functionality and, with your consent, analytics and advertising cookies to understand usage and support the free service. You can manage preferences at any time — see our Cookie Policy." },
  { group: "Privacy & Security", q: "Is CodeLove safe for students and schools?", a: "Yes. CodeLove is designed to be clean, ad-light and educational, making it suitable for students and learning environments. Our content focuses on skills, explanations and responsible tool use." },

  { group: "Usage & Legal", q: "Can I use CodeLove tools for commercial work?", a: "Yes, you can use CodeLove tools for personal and commercial projects. You are responsible for ensuring you have the rights to any media you download or content you create, as outlined in our Terms." },
  { group: "Usage & Legal", q: "Is it legal to download videos and images?", a: "Downloading content you own or that is licensed for reuse is generally fine. Downloading copyrighted content you don't have permission to use may violate the rights of the owner or platform terms, so always respect copyright and platform policies." },
  { group: "Usage & Legal", q: "Are there any watermarks on my exports?", a: "No. CodeLove does not add watermarks to files you create or export with our core tools, so your work stays clean and professional." },
  { group: "Usage & Legal", q: "Is there a limit on how many times I can use a tool?", a: "Core tools are designed for generous everyday use. Some resource-intensive AI features may have fair-use limits to keep the service fast and free for everyone." },
  { group: "Usage & Legal", q: "Can I use CodeLove content on my own site?", a: "Our articles and educational content are protected by copyright. You may link to and quote our content with attribution, but republishing full articles requires permission — see our Editorial Policy." },

  { group: "Content & SEO", q: "Who writes the articles on CodeLove?", a: "Articles are written and reviewed by the CodeLove editorial team — practitioners in development, design and media. Every article shows an author, a published date and a last-updated date for transparency." },
  { group: "Content & SEO", q: "How often is content updated?", a: "We regularly review and refresh our guides to keep them accurate as tools, formats and best practices change. Each article displays a 'last updated' date so you always know how current it is." },
  { group: "Content & SEO", q: "Are CodeLove tutorials suitable for beginners?", a: "Absolutely. Our Learning Center is organised by topic and skill level, with beginner-friendly explanations, clear examples and step-by-step guides alongside more advanced material." },
  { group: "Content & SEO", q: "How can I find a specific tool or article?", a: "Use the search in the navigation bar to jump to any product or article, or browse the Learning Center categories such as Developer, Video, Image, PDF, SEO, Automation, AI, Programming, Design and Business." },
  { group: "Content & SEO", q: "Does CodeLove cover SEO and Core Web Vitals?", a: "Yes. Our SEO category explains rankings, featured snippets, structured data and Core Web Vitals in plain language, with practical tips you can apply to your own website." },

  { group: "Technical", q: "Which browsers work best with CodeLove?", a: "CodeLove works on all modern browsers. For the best experience with in-browser video and AI features, we recommend the latest version of Chrome, Edge, Firefox or Safari." },
  { group: "Technical", q: "Does CodeLove work offline?", a: "An internet connection is required to load the tools. However, once a browser-based tool is open, much of its processing happens on your device rather than in the cloud." },
  { group: "Technical", q: "Is CodeLove mobile friendly?", a: "Yes. Every product and page is fully responsive and optimised for touch, so the experience is smooth from small phones to large desktop displays." },
  { group: "Technical", q: "Why is CodeLove so fast?", a: "CodeLove is built on a modern, statically-generated architecture delivered from a global edge network, with heavy performance optimisation and lazy loading for excellent Core Web Vitals." },
  { group: "Technical", q: "Is CodeLove accessible?", a: "We follow WCAG guidance with semantic HTML, keyboard navigation, sufficient colour contrast and support for reduced-motion preferences to make the platform usable for everyone." },

  { group: "Support", q: "How do I report a bug or issue?", a: "You can reach us through the Contact page. Include the product name, your browser and a short description of the problem, and our team will investigate as quickly as possible." },
  { group: "Support", q: "Can I request a new tool or feature?", a: "Yes, we love hearing ideas. Send feature requests through the Contact page — user feedback directly shapes the CodeLove roadmap." },
  { group: "Support", q: "How can I stay updated on new products?", a: "Subscribe to the CodeLove newsletter at the bottom of this page. We share new product launches, major updates and our best tutorials — no spam, unsubscribe anytime." },
  { group: "Support", q: "How do I contact the CodeLove team?", a: "Head to the Contact page for support, partnership and press enquiries. We aim to respond to every genuine message within a few business days." },
];

/* ------------------------------------------------------------------ */
/*  Navigation                                                         */
/* ------------------------------------------------------------------ */
export const navLinks = [
  { label: "Products", href: "/products" },
  { label: "Learning Center", href: "/learn" },
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/resources" },
];

/* ------------------------------------------------------------------ */
/*  Resources hub — cards for the /resources landing page             */
/* ------------------------------------------------------------------ */
export type ResourceCard = {
  icon: IconName;
  title: string;
  blurb: string;
  href: string;
  cta: string;
  gradient: string;
};

export const resourceHub: ResourceCard[] = [
  {
    icon: "rocket",
    title: "Learning Center",
    blurb: "Hundreds of tutorials, explainers and guides organised by topic — from your first line of code to advanced automation.",
    href: "/learn",
    cta: "Browse topics",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: "fileText",
    title: "Blog & Articles",
    blurb: "In-depth reads, product deep-dives and how-tos published every week. Stay sharp with practical, no-fluff writing.",
    href: "/blog",
    cta: "Read the blog",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: "terminal",
    title: "Developer Cheat Sheets",
    blurb: "Quick-reference sheets for encoders, formatters, regex and the utilities developers reach for daily.",
    href: "/learn/developer",
    cta: "Open cheat sheets",
    gradient: "from-slate-600 to-slate-800",
  },
  {
    icon: "zap",
    title: "Free Tools",
    blurb: "Every CodeLove product on its own fast, free subdomain — downloaders, converters, PDF and video tools and more.",
    href: "/products",
    cta: "Explore tools",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: "layout",
    title: "Templates",
    blurb: "Ready-made templates and starters you can download, remix and ship — no design skills required.",
    href: "/products/templates",
    cta: "Get templates",
    gradient: "from-pink-500 to-rose-600",
  },
];

/* ------------------------------------------------------------------ */
/*  Legal & policy pages — rendered by /legal/[slug]                   */
/* ------------------------------------------------------------------ */
export type LegalSection = { heading: string; paragraphs: string[] };
export type LegalPage = {
  slug: string;
  title: string;
  description: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

export const legalPages: LegalPage[] = [
  {
    slug: "privacy",
    title: "Privacy Policy",
    description: "How CodeLove handles the limited data involved in using our tools.",
    updated: "July 2026",
    intro:
      "CodeLove is built privacy-first. Most of our tools run entirely in your browser, and we collect as little as possible. This page explains what that means in plain language.",
    sections: [
      {
        heading: "What we collect",
        paragraphs: [
          "Many CodeLove tools process your files and data directly in your browser — those files are never uploaded to us. For features that do require a server, we only handle what is strictly needed to perform the task, and we do not keep your content afterwards.",
          "We collect basic, anonymised usage analytics (such as which pages are visited) to understand what is useful and to improve the product. We do not sell your data.",
        ],
      },
      {
        heading: "Cookies & local storage",
        paragraphs: [
          "We use local storage for small preferences such as your light/dark theme. Any analytics or advertising cookies, if introduced, are described on our Cookie Policy page.",
        ],
      },
      {
        heading: "Your choices",
        paragraphs: [
          "You can clear cookies and local storage from your browser at any time. If you have a question about your data or want something removed, contact us and we will help.",
        ],
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms of Service",
    description: "The basic terms for using CodeLove tools and websites.",
    updated: "July 2026",
    intro:
      "By using CodeLove, you agree to these terms. They are intentionally short and reasonable — use the tools fairly and they stay free and fast for everyone.",
    sections: [
      {
        heading: "Using our tools",
        paragraphs: [
          "CodeLove tools are provided for lawful personal and commercial use. You are responsible for the content you process and for having the rights to it. Do not use our tools to break the law or infringe on others.",
          "We may apply fair-use limits to protect the service and keep it available for everyone.",
        ],
      },
      {
        heading: "Availability & changes",
        paragraphs: [
          "CodeLove is a young and evolving product. Tools may change, move or be temporarily unavailable, and we may update these terms as the platform grows. Continued use means you accept the current version.",
        ],
      },
      {
        heading: "Liability",
        paragraphs: [
          "Our tools are provided “as is” without warranties. To the extent permitted by law, CodeLove is not liable for any loss arising from use of the tools. Always keep your own backups of important files.",
        ],
      },
    ],
  },
  {
    slug: "cookies",
    title: "Cookie Policy",
    description: "How and why CodeLove uses cookies and local storage.",
    updated: "July 2026",
    intro:
      "This page explains the small amount of browser storage CodeLove relies on and what each part is for.",
    sections: [
      {
        heading: "Essential storage",
        paragraphs: [
          "We use local storage for essentials like remembering your theme preference. These are required for the site to work the way you expect and cannot be turned off from within the app.",
        ],
      },
      {
        heading: "Analytics",
        paragraphs: [
          "If enabled, privacy-friendly analytics help us understand which tools are useful. This data is aggregated and not used to personally identify you.",
        ],
      },
      {
        heading: "Managing cookies",
        paragraphs: [
          "You can delete or block cookies and local storage in your browser settings at any time. Doing so may reset preferences such as your chosen theme.",
        ],
      },
    ],
  },
  {
    slug: "disclaimer",
    title: "Disclaimer",
    description: "Important notes about relying on CodeLove tools and content.",
    updated: "July 2026",
    intro:
      "CodeLove aims to be accurate and helpful, but our tools and articles are provided for general use and information only.",
    sections: [
      {
        heading: "Tools",
        paragraphs: [
          "Our utilities are provided in good faith and “as is.” Results can vary depending on your input and browser. Please verify important output yourself, especially for anything critical.",
        ],
      },
      {
        heading: "Content",
        paragraphs: [
          "Articles and guides reflect our understanding at the time of writing and may become outdated. Nothing here is professional, legal or financial advice.",
        ],
      },
      {
        heading: "External links",
        paragraphs: [
          "We sometimes link to third-party sites and services. We are not responsible for their content, policies or availability.",
        ],
      },
    ],
  },
  {
    slug: "editorial-policy",
    title: "Editorial Policy",
    description: "How we research, write and maintain the content on CodeLove.",
    updated: "July 2026",
    intro:
      "We want everything you read on CodeLove to be clear, current and genuinely useful. Here is how we approach it.",
    sections: [
      {
        heading: "How we write",
        paragraphs: [
          "Our guides are written and reviewed by people who actually use these tools and techniques. We favour plain language, practical steps and honest trade-offs over hype.",
        ],
      },
      {
        heading: "Accuracy & updates",
        paragraphs: [
          "Technology moves quickly, so we revisit and update articles as things change. Each article shows when it was published and last updated.",
        ],
      },
      {
        heading: "Corrections",
        paragraphs: [
          "If you spot a mistake or something out of date, tell us — we will review and fix it. Getting it right matters more to us than being first.",
        ],
      },
    ],
  },
];

export const getLegalPage = (slug: string) => legalPages.find((p) => p.slug === slug);

export const footerColumns = [
  {
    title: "Products",
    links: [
      { label: "Downloader", href: "/products/downloader" },
      { label: "Link in Bio", href: "/products/linkinbio" },
      { label: "AI Videos", href: "/products/aivideos" },
      { label: "Developer Utilities", href: "/products/iloveconvert" },
      { label: "Background Remover", href: "/products/bgremove" },
      { label: "Templates", href: "/products/templates" },
      { label: "All Products", href: "/products" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Resource Hub", href: "/resources" },
      { label: "Learning Center", href: "/learn" },
      { label: "Blog & Articles", href: "/blog" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Developer Utilities", href: "/products/iloveconvert" },
      { label: "PDF Tools", href: "/products/pdftools" },
      { label: "Video Tools", href: "/products/videotools" },
      { label: "Favicon Generator", href: "/products/favicon" },
      { label: "Cheat Sheets", href: "/learn/developer" },
      { label: "Templates", href: "/products/templates" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Editorial Policy", href: "/legal/editorial-policy" },
      { label: "Portfolio", href: "https://gowtham.codelove.in" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "Cookie Policy", href: "/legal/cookies" },
      { label: "Disclaimer", href: "/legal/disclaimer" },
      { label: "Editorial Policy", href: "/legal/editorial-policy" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const blogs: Article[] = [
  {
    slug: "welcome-to-the-new-platform",
    title: "Welcome to the New CodeLove Platform",
    excerpt: "We have completely redesigned the platform to bring you faster tools, better guides, and a unified workspace.",
    category: "Announcements",
    readingTime: "5 min read",
    author: "Gowtham",
    published: "Jul 8, 2026",
    updated: "Jul 8, 2026",
    gradient: "from-blue-500 to-indigo-600",
    icon: "sparkles",
    featured: true,
    image: "/images/jsonformatter.png",
    intro: "Welcome to the all-new CodeLove platform! This is our first official blog post on the new infrastructure, and we have so much to share with you.",
    takeaways: ["Lightning fast performance", "New Learning Center", "Better video tools", "Unified dashboard"],
    content: [
      {
        heading: "A New Beginning for CodeLove",
        image: "/images/jsonformatter.png",
        paragraphs: [
          "For the past few months, we have been quietly working behind the scenes. We listened to your feedback, analyzed how you used our tools, and realized that our old architecture was simply not scaling well enough to support the ambitious features we wanted to build.",
          "Today, we are thrilled to unveil the completely rebuilt CodeLove platform. We migrated our entire stack to Next.js App Router, completely revamped our design system, and optimized every single page to load in under a second."
        ]
      },
      {
        heading: "What's new in this release?",
        image: "/images/webdev.png",
        paragraphs: [
          "First and foremost, performance. Everything you click should feel instant. By leveraging server components and aggressive static generation, the platform now uses 60% less client-side JavaScript.",
          "We also introduced the brand new Learning Center. Previously, our tutorials were scattered. Now, they are organized into a strict curriculum that guides you from beginner concepts to advanced implementations in Web Development and Video processing.",
          "Finally, we have rolled out the foundation for our upcoming AI tools. The infrastructure is now ready to handle on-device AI generation, which means big things are coming soon."
        ]
      },
      {
        heading: "What happens next?",
        image: "/images/portfolio.png",
        paragraphs: [
          "This is just day one. Over the next few weeks, we will be rolling out dedicated Browser-based Video Utilities, a complete PDF workflow, and an expanded suite of Developer Tools.",
          "We want to thank our incredible community for sticking with us. We built this platform for you, and we cannot wait to see what you create using it. Stay tuned for more updates right here on the blog!"
        ]
      }
    ]
  },
  {
    slug: "july-2026-update",
    title: "July 2026 Update: Browser-based Video Tools",
    excerpt: "This month we are rolling out new video utilities that process everything directly in your browser.",
    category: "Updates",
    readingTime: "4 min read",
    author: "Gowtham",
    published: "Jul 1, 2026",
    updated: "Jul 1, 2026",
    gradient: "from-rose-500 to-pink-600",
    icon: "film",
    featured: true,
    image: "/images/videocomp_spatial.png",
    intro: "We are incredibly excited to announce our newest suite of tools: CodeLove Video Utilities.",
    takeaways: ["Video to GIF conversion", "High-res frame extraction", "100% private", "No uploads required"],
    content: [
      {
        heading: "The problem with cloud video editors",
        image: "/images/videoformats.png",
        paragraphs: [
          "We have all been there. You have a 500MB video and you just need to extract a single frame or convert a 3-second clip into a GIF. Most online tools require you to upload that massive file to their servers, wait in a processing queue, and then download the result—often with an ugly watermark plastered across it.",
          "Not only is this incredibly slow and frustrating, but it also poses a massive privacy risk. Why should a random server have access to your personal videos just to make a GIF?"
        ]
      },
      {
        heading: "Enter Local-First Processing",
        image: "/images/videocompression.png",
        paragraphs: [
          "Our new Video to GIF and Video to Frame tools fix this by moving the entire processing engine into your web browser. When you drop a video into CodeLove, it never leaves your computer.",
          "Using WebAssembly and modern browser APIs, we compile powerful video processing tools to run locally. This means instant loads, zero upload times, and complete privacy."
        ]
      },
      {
        heading: "Available today",
        image: "/images/videotogif.png",
        paragraphs: [
          "Both Video to GIF and Video to Frame are available starting today, completely free of charge and without watermarks. Try them out in the Products section and let us know what you think!"
        ]
      }
    ]
  },
  {
    slug: "why-local-first-development",
    title: "Why We Chose a Local-First Architecture",
    excerpt: "How running utilities directly in the browser protects user privacy and reduces server costs.",
    category: "Engineering",
    readingTime: "6 min read",
    author: "Gowtham",
    published: "Jun 28, 2026",
    updated: "Jun 28, 2026",
    gradient: "from-emerald-500 to-teal-600",
    icon: "terminal",
    featured: false,
    image: "/images/videoformats.png",
    intro: "Building web tools has fundamentally changed. With the power of WebAssembly, we no longer need to send user data to servers.",
    takeaways: ["Privacy by default", "Zero latency interactions", "WebAssembly power", "Massive cost reductions"],
    content: [
      {
        heading: "The old way of building web apps",
        image: "/images/iloveconvert.png",
        paragraphs: [
          "Traditionally, processing a PDF, formatting a massive JSON file, or compressing a video required uploading the file to a cloud server. The server would do the heavy lifting and send the result back to the user.",
          "This architecture is expensive to scale, slow for users on poor connections, and terrible for privacy. If you are formatting a JSON file containing sensitive API keys, the last thing you want is for it to travel across the internet."
        ]
      },
      {
        heading: "The WebAssembly revolution",
        image: "/images/base64_binary.png",
        paragraphs: [
          "WebAssembly (WASM) allows us to take high-performance code written in languages like C++ or Rust and run it directly in the browser at near-native speeds. This changes everything.",
          "By utilizing WASM, our Developer Utilities and Media Tools can perform complex operations directly on your machine. The browser becomes the server."
        ]
      },
      {
        heading: "Win-Win for Everyone",
        image: "/images/videoformats.png",
        paragraphs: [
          "For users, this means instant results and complete peace of mind knowing their data is secure. For us, it means our server costs remain incredibly low because we are not paying for compute power to process your files.",
          "This local-first approach is the guiding philosophy behind every new tool we build at CodeLove."
        ]
      }
    ]
  },
  {
    slug: "designing-for-creators",
    title: "Designing Tools for the Creator Economy",
    excerpt: "The UI and UX principles behind our Link in Bio and Social Downloader tools.",
    category: "Design",
    readingTime: "5 min read",
    author: "Gowtham",
    published: "Jun 15, 2026",
    updated: "Jun 16, 2026",
    gradient: "from-fuchsia-500 to-rose-600",
    icon: "palette",
    featured: false,
    image: "/images/linkinbio.png",
    intro: "Creators are busy. They need tools that get out of the way and just work. Here is how we designed our creator suite.",
    takeaways: ["Mobile first design", "Minimal friction", "Bold but clean aesthetics", "Speed as a feature"],
    content: [
      {
        heading: "Speed is the ultimate feature",
        image: "/images/linkinbio.png",
        paragraphs: [
          "When a creator needs to download a reel for a reaction video, or update their bio link to point to a new sponsor, they want it done in seconds. Every extra click is a point of friction.",
          "We designed our tools to require the absolute minimum number of interactions. Paste a link, hit enter, get your file. No accounts required, no popups, no hidden menus."
        ]
      },
      {
        heading: "Aesthetics that inspire trust",
        image: "/images/templates.png",
        paragraphs: [
          "Many free online tools look like spam sites from 2010. They are covered in flashing banner ads and fake download buttons. We took the opposite approach.",
          "We use a dark, premium aesthetic with smooth gradients and high-quality typography. By making our free tools look like expensive enterprise software, we build immediate trust with our users."
        ]
      },
      {
        heading: "Mobile-first by necessity",
        image: "/images/linkinbio.png",
        paragraphs: [
          "Over 80% of the traffic to our Link in Bio and Downloader tools comes from mobile devices. If a UI element is difficult to tap on an iPhone, the design has failed.",
          "We rigorously test every interface on actual mobile hardware to ensure touch targets are large, animations are smooth, and the layout feels native."
        ]
      }
    ]
  },
  {
    slug: "future-of-ai-tools",
    title: "The Future of AI Tools on CodeLove",
    excerpt: "A sneak peek into the AI-powered background removal and generation tools coming later this year.",
    category: "Updates",
    readingTime: "4 min read",
    author: "Gowtham",
    published: "Jun 5, 2026",
    updated: "Jun 5, 2026",
    gradient: "from-sky-500 to-cyan-600",
    icon: "sparkles",
    featured: false,
    image: "/images/ai_video_trends.png",
    intro: "AI is reshaping how we build tools. But we are integrating AI differently—focusing on privacy and on-device processing.",
    takeaways: ["On-device AI models", "Background removal", "Privacy focused generation", "WebGPU capabilities"],
    content: [
      {
        heading: "AI without the cloud",
        image: "/images/ai_video_trends.png",
        paragraphs: [
          "Most AI tools today require you to send your data to OpenAI or Anthropic. While this makes sense for massive language models, it is unnecessary for smaller tasks like image segmentation.",
          "Using WebGL and the upcoming WebGPU standard, we are bringing complex AI models directly to your browser. This allows for instant image processing without a round-trip to a server."
        ]
      },
      {
        heading: "Coming Soon: Instant Background Removal",
        image: "/images/aibgremoval.png",
        paragraphs: [
          "Our first major AI release will be a background removal tool. By running a lightweight segmentation model entirely in your browser, you will be able to cut out subjects from photos instantly, even while offline.",
          "Because the image never leaves your device, you can safely use it on confidential documents or personal family photos."
        ]
      },
      {
        heading: "The ethical approach",
        image: "/images/aivideos.png",
        paragraphs: [
          "We believe AI should be a tool that empowers creators, not one that steals their work. Our curated AI Video gallery only showcases models that have been trained ethically or explicitly credit the original artists.",
          "We are committed to building a platform where technology and creativity can coexist responsibly."
        ]
      }
    ]
  },
  {
    slug: "mastering-react-server-components",
    title: "Mastering React Server Components",
    excerpt: "How we migrated our codebase to App Router and saw a massive performance boost.",
    category: "Engineering",
    readingTime: "7 min read",
    author: "Gowtham",
    published: "May 20, 2026",
    updated: "May 22, 2026",
    gradient: "from-slate-600 to-slate-800",
    icon: "terminal",
    featured: false,
    image: "/images/webdev.png",
    intro: "The transition to Next.js App Router and React Server Components was not easy, but the performance gains were undeniable.",
    takeaways: ["Reduced client JS", "Faster routing", "SEO improvements", "Mental model shift"],
    content: [
      {
        heading: "The paradigm shift",
        image: "/images/base64_encoding.png",
        paragraphs: [
          "For years, React developers have been accustomed to shipping their entire application logic to the client. Server-side rendering (SSR) helped with the initial HTML payload, but the client still had to download and execute all the JavaScript to hydrate the page.",
          "React Server Components (RSC) flip this model on its head. Now, components execute exclusively on the server by default, and only the resulting HTML is sent to the browser."
        ]
      },
      {
        heading: "Cutting the bundle size",
        image: "/images/jsonformatter.png",
        paragraphs: [
          "By pushing our UI logic, markdown parsing, and heavy data formatting libraries to the server, we reduced our client-side JavaScript bundle by almost 60%.",
          "This resulted in blazing fast load times, especially for users on slower mobile networks. The blog you are reading right now is rendered entirely on the server."
        ]
      },
      {
        heading: "Challenges we faced",
        image: "/images/best_developer_tools.png",
        paragraphs: [
          "The biggest hurdle was the mental model. Understanding the boundaries between Server and Client components, dealing with third-party libraries that use Context, and managing state across boundaries required significant refactoring.",
          "However, once we embraced the architecture, it actually simplified our data fetching drastically. No more complex useEffect hooks—just simple async/await at the component level."
        ]
      }
    ]
  },
  {
    slug: "building-the-ultimate-pdf-toolkit",
    title: "Building the Ultimate PDF Toolkit",
    excerpt: "The challenges of parsing, rendering, and merging PDFs entirely in the browser.",
    category: "Engineering",
    readingTime: "6 min read",
    author: "Gowtham",
    published: "May 10, 2026",
    updated: "May 10, 2026",
    gradient: "from-orange-500 to-red-600",
    icon: "fileText",
    featured: false,
    image: "/images/pdfcompression.png",
    intro: "PDFs are notoriously complex and fragile to work with. Here is how we built a reliable client-side PDF manipulation tool.",
    takeaways: ["PDF-lib integration", "Memory management", "Client-side processing", "Cross-browser quirks"],
    content: [
      {
        heading: "Wrestling with an ancient format",
        image: "/images/pdftools.png",
        paragraphs: [
          "The Portable Document Format (PDF) is over 30 years old. It is an incredibly powerful format, but under the hood, it is a chaotic mix of dictionaries, streams, and cross-reference tables.",
          "Building a reliable tool to parse, merge, and split these files without a backend server took extensive testing. A single corrupted byte can render the entire document unreadable."
        ]
      },
      {
        heading: "Memory is the enemy",
        image: "/images/pdfcompression.png",
        paragraphs: [
          "When you process a 50MB PDF entirely in the browser, memory management becomes critical. If you try to hold the entire uncompressed file stream in memory, mobile browsers will simply crash the tab.",
          "We had to implement aggressive garbage collection hints and stream processing where possible to keep the memory footprint under control."
        ]
      },
      {
        heading: "The payoff",
        image: "/images/favicon.png",
        paragraphs: [
          "Despite the challenges, the result is magical. Users can drag and drop highly sensitive tax documents or legal contracts, merge them together, and download the result instantly, knowing with 100% certainty that the files were never uploaded to a cloud server."
        ]
      }
    ]
  },
  {
    slug: "the-importance-of-clean-ui",
    title: "The Importance of Clean UI in Dev Tools",
    excerpt: "Why developer utilities do not have to look like airplane cockpits to be powerful.",
    category: "Design",
    readingTime: "4 min read",
    author: "Gowtham",
    published: "Apr 28, 2026",
    updated: "Apr 28, 2026",
    gradient: "from-amber-500 to-orange-600",
    icon: "layout",
    featured: false,
    image: "/images/best_developer_tools.png",
    intro: "Developer tools are often cluttered, confusing, and overwhelming. We believe they can be beautiful.",
    takeaways: ["Minimalism as a feature", "Focus and clarity", "Aesthetics matter", "Reducing cognitive load"],
    content: [
      {
        heading: "Function over clutter",
        image: "/images/best_developer_tools.png",
        paragraphs: [
          "Take a look at the average JSON formatter or Base64 encoder online. They are typically crammed with dozens of checkboxes, huge blocks of text explaining what JSON is, and massive advertising banners.",
          "We designed our developer tools to do exactly what you need—encode, format, or validate—without bombarding you with visual noise."
        ]
      },
      {
        heading: "Command palettes and shortcuts",
        image: "/images/base64.png",
        paragraphs: [
          "Instead of putting every feature on the screen at once, we hide advanced functionality behind intuitive keyboard shortcuts and command palettes (like the CMD+K menu).",
          "This allows power users to navigate at lightning speed, while keeping the interface clean and welcoming for beginners."
        ]
      },
      {
        heading: "Dark mode done right",
        image: "/images/templates.png",
        paragraphs: [
          "Developers stare at screens all day. A good dark mode is not just a palette swap; it requires careful consideration of contrast ratios and eye strain.",
          "We spent weeks refining our colors, avoiding pure blacks and harsh whites in favor of deep slates and soft grays, creating an environment that feels relaxing to work in."
        ]
      }
    ]
  }
];

export const blogCategories = ["All", "Announcements", "Updates", "Engineering", "Design"];


/* ------------------------------------------------------------------ */
/*  Stats                                                              */
/* ------------------------------------------------------------------ */
export const stats: Stat[] = [
  { get value() { return products.length; }, suffix: "+", label: "Products & tools" },
  { get value() { return articles.length; }, suffix: "+", label: "Guides & articles" },
  { value: 10, suffix: "K+", label: "Monthly users" },
  { value: 1.5, suffix: "M+", label: "Files processed" },
  { value: 2, suffix: "M+", label: "Hours saved" },
];
