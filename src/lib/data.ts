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
  /** Label of the button that opens the product; defaults to "Access Tool". */
  cta?: string;
};

/** Every status except "Soon" is already live and can be opened. */
export const isProductLive = (product: Product) => product.status !== "Soon";

export const products: Product[] = [
  {
    slug: "downloader",
    name: "Downloader",
    icon: "download",
    domain: "downloader.codelove.in",
    url: "https://downloader.codelove.in",
    tagline: "Media downloader",
    description:
      "Download public Instagram and Pinterest videos and images using a clean, fast, ad-light interface built for creators and marketers.",
    features: [
      "Instagram video & Reels downloader",
      "Pinterest video downloader",
      "Pinterest image downloader",
      "Batch & multi-link downloading",
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
    slug: "models",
    name: "3D Models",
    icon: "box",
    domain: "models.codelove.in",
    url: "https://models.codelove.in",
    tagline: "Free 3D model library",
    description:
      "Browse and download thousands of free 3D models in GLB format — characters, vehicles, buildings, props and animations — with a live in-browser viewer.",
    features: [
      "6,700+ free GLB models",
      "Characters, vehicles, buildings & props",
      "Live in-browser 3D viewer",
      "Model packs & animations",
    ],
    gradient: "from-indigo-500 to-violet-600",
    accent: "#6366f1",
    status: "Live",
    category: "3D",
    image: "/images/models.png",
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
    slug: "videotoimages",
    name: "Video to Images",
    icon: "film",
    domain: "videotoimages.codelove.in",
    url: "https://videotoimages.codelove.in",
    tagline: "Frames, audio & media tools",
    description:
      "Extract image frames from any video, save its audio as MP3, and compress, crop or resize videos and images — all directly in your browser.",
    features: [
      "Extract frames as JPG, PNG or WebP",
      "Video to MP3 audio",
      "Compress, crop & resize video",
      "Compress, crop & resize images",
    ],
    gradient: "from-fuchsia-500 to-rose-600",
    accent: "#d946ef",
    status: "Live",
    category: "Media",
    image: "/images/videotoimages.png",
  },
  {
    slug: "games",
    name: "3D Games",
    icon: "play",
    domain: "games.codelove.in",
    url: "https://games.codelove.in",
    tagline: "Free 3D browser games",
    description:
      "Play free 3D games right in your browser — kart racing, skating, tower defense, a dungeon crawler, mini golf, puzzles and more. No download, no sign-up.",
    features: [
      "Free 3D games, no download",
      "Racing, action, puzzle & strategy",
      "Plays on PC and phone",
      "No sign-up needed",
    ],
    gradient: "from-amber-500 to-orange-600",
    accent: "#f59e0b",
    status: "New",
    category: "Games",
    image: "/images/games.jpg",
    cta: "Play Games",
  },
  {
    slug: "utubeflow",
    name: "UTubeFlow",
    icon: "youtube",
    domain: "utubeflow.codelove.in",
    url: "https://utubeflow.codelove.in",
    tagline: "Free YouTube automation",
    description:
      "Free YouTube automation: bulk upload and schedule YouTube videos and Shorts, and let Autopilot keep posting on time even with your PC turned off.",
    features: [
      "Bulk upload YouTube videos & Shorts",
      "Schedule posts in advance",
      "Autopilot posting with your PC off",
      "100% free, no paid plans",
    ],
    gradient: "from-red-500 to-rose-600",
    accent: "#ef4444",
    status: "New",
    category: "Creator",
    image: "/images/utubeflow.png",
  },
  {
    slug: "javaplay",
    name: "JavaPlay",
    icon: "smartphone",
    domain: "javaplay.codelove.in",
    url: "https://javaplay.codelove.in",
    tagline: "Free Java phone games",
    description:
      "Play old Java (J2ME) phone games free in your browser or in a tiny Android app. Pick from 163 free open-license games or open your own .jar file. No sign-up.",
    features: [
      "Play J2ME .jar games in your browser",
      "163 free open-license Java games",
      "Tiny Android app (~177 KB)",
      "Phone keypad, touch & keyboard controls",
    ],
    gradient: "from-emerald-500 to-teal-600",
    accent: "#10b981",
    status: "New",
    category: "Games",
    image: "/images/javaplay.png",
    cta: "Play Java Games",
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
      "The CodeLove Downloader is a fast, ad-light media saver for creators, marketers and researchers. Paste a link from Instagram or Pinterest and it fetches the original, watermark-free file in the highest quality the platform offers — videos, Reels and pin images. Everything runs through a clean interface with no forced sign-ups.",
    highlights: ["No watermarks", "HD quality", "No sign-up", "Instagram · Pinterest"],
    steps: [
      { icon: "link", title: "Copy the link", text: "Open the post, Reel, video or pin you want and copy its share link from the app or browser." },
      { icon: "download", title: "Paste it in", text: "Choose the Instagram or Pinterest downloader and drop the link into the input box." },
      { icon: "layers", title: "Preview it", text: "Check the preview to make sure it is the right post — fetch a single link or several at once in multi-link mode." },
      { icon: "check", title: "Save to device", text: "Hit download and the original file saves straight to your device, clean and watermark-free." },
    ],
    faqs: [
      { q: "Which platforms are supported?", a: "Instagram (videos & Reels) and Pinterest (videos & images), each with a single-link and a multi-link mode." },
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
  models: {
    overview:
      "3D Models is a free library of thousands of ready-to-use 3D assets in GLB format. Browse characters, vehicles, buildings, props and animations by category, collection or pack, inspect any model from every angle in the live in-browser viewer, and download it for your game, web or AR project. Every model page shows its licence, so you always know how you can use it.",
    highlights: ["6,700+ models", "GLB format", "Live 3D viewer", "Licence on every model"],
    steps: [
      { icon: "search", title: "Browse the library", text: "Explore by category, collection or pack, or search for the exact asset you need." },
      { icon: "box", title: "Preview in 3D", text: "Open any model in the live viewer and rotate, zoom and inspect it right in your browser." },
      { icon: "fileText", title: "Check the licence", text: "Each model page lists its licence and credits, so you know how the model can be used." },
      { icon: "download", title: "Download the GLB", text: "Download the file and drop it into your game engine, 3D tool or web project." },
    ],
    faqs: [
      { q: "What format are the models in?", a: "Models are provided as GLB (binary glTF), a widely supported format that works with tools such as Blender, Godot and three.js." },
      { q: "Are the models free?", a: "Yes — browsing and downloading is free. Each model has its own licence shown on its page, so check it before using a model in your project." },
      { q: "Do I need an account?", a: "No. You can browse, preview and download models without signing up." },
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
  videotoimages: {
    overview:
      "Video to Images is a set of video and image tools that run entirely inside your browser. Extract frames from a video as JPG, PNG or WebP images, save a video's audio as MP3, and compress, crop or resize both videos and images. Because processing happens locally on your device, your files are never uploaded.",
    highlights: ["Runs in-browser", "No uploads", "No watermarks", "Video & image tools"],
    steps: [
      { icon: "search", title: "Pick a tool", text: "Choose what you need: frame extraction, video to MP3, or compress, crop and resize for video and images." },
      { icon: "film", title: "Add your file", text: "Drop a video or image into the tool — it loads instantly and stays on your device, never touching a server." },
      { icon: "sliders", title: "Adjust settings", text: "Set the frame rate, output format, quality or dimensions to match what you need." },
      { icon: "download", title: "Download the result", text: "Save the frames, audio or converted file straight to your device with no watermark." },
    ],
    faqs: [
      { q: "Are my files uploaded anywhere?", a: "No. All processing happens locally in your browser, so your files never leave your device." },
      { q: "What formats can frames be saved in?", a: "Frames can be exported as JPG, PNG or WebP images from MP4, WebM or MOV video." },
      { q: "Is there a limit?", a: "No, you can process as many files as you need. Very large files depend on your device's available memory." },
    ],
  },
  games: {
    overview:
      "3D Games is a collection of free 3D games that run straight in your web browser. Race karts, skate, defend towers, explore dungeons or play mini golf — every game loads in seconds on a PC or a phone, with nothing to install and no account to create. The games are built from the CodeLove 3D model library.",
    highlights: ["Free to play", "No download", "PC & mobile", "No sign-up"],
    steps: [
      { icon: "search", title: "Pick a game", text: "Browse the collection and open any game that catches your eye." },
      { icon: "play", title: "Press play", text: "The game loads right in your browser tab — no installer, no app store." },
      { icon: "smartphone", title: "Play anywhere", text: "Use keyboard and mouse on a PC or touch controls on your phone." },
      { icon: "star", title: "Come back for more", text: "New games are added to the collection regularly." },
    ],
    faqs: [
      { q: "Are the games free?", a: "Yes. Every game is free to play with no sign-up." },
      { q: "Do I need to download anything?", a: "No. The games run in your browser on PC and phone." },
      { q: "Where can I play?", a: "Open games.codelove.in and pick any game from the list." },
    ],
  },
  utubeflow: {
    overview:
      "UTubeFlow is free YouTube automation for creators. Upload a whole batch of YouTube videos and Shorts at once, set when each one should go live, and let Autopilot publish them on schedule — even while your PC is switched off. No paid plans, no per-video limits.",
    highlights: ["Completely free", "Bulk upload", "Videos & Shorts", "Autopilot posting"],
    steps: [
      { icon: "youtube", title: "Connect your channel", text: "Sign in with Google and connect the YouTube channel you want to post to." },
      { icon: "layers", title: "Add your videos", text: "Drop in a batch of videos or Shorts and fill in titles, descriptions and tags." },
      { icon: "clock", title: "Set the schedule", text: "Choose when each video should go live, or spread the batch across the days ahead." },
      { icon: "zap", title: "Let Autopilot post", text: "Autopilot publishes every video on time, even with your PC turned off." },
    ],
    faqs: [
      { q: "Is UTubeFlow really free?", a: "Yes. Bulk uploading, scheduling and Autopilot posting are free to use." },
      { q: "Does my PC need to stay on?", a: "No. Once Autopilot is set up, your scheduled videos and Shorts are posted even when your PC is off." },
      { q: "Does it work with YouTube Shorts?", a: "Yes. You can bulk upload and schedule both regular YouTube videos and Shorts." },
    ],
  },
  javaplay: {
    overview:
      "JavaPlay brings back the Java (J2ME) games from old keypad phones. Open a .jar game right in your browser, or install the small Android app (about 177 KB). The site has a free catalog of 163 open-license Java games ready to play, and you can also load .jar files you already have. An on-screen phone keypad, touch and your computer keyboard all work as controls, and you can record your gameplay as a video. It is free and needs no sign-up.",
    highlights: ["Completely free", "No sign-up", "Browser & Android", "163 free games"],
    steps: [
      { icon: "search", title: "Pick a game", text: "Browse the 163 free open-license Java games, or open a .jar file you already have." },
      { icon: "play", title: "Play in your browser", text: "The game starts right in the browser tab — nothing to install." },
      { icon: "smartphone", title: "Use phone keys", text: "Play with the on-screen phone keypad, touch, or your computer keyboard." },
      { icon: "download", title: "Get the Android app", text: "Install the tiny JavaPlay app (about 177 KB) to play Java games on your Android phone." },
    ],
    faqs: [
      { q: "Is JavaPlay free?", a: "Yes. The player, the Android app and the 163 games in the catalog are free, with no sign-up." },
      { q: "Can I play my own .jar games?", a: "Yes. Open any J2ME .jar file in the browser player or the Android app. Only play games you have the right to use." },
      { q: "Where do I get the Android app?", a: "Download it from javaplay.codelove.in/download/JavaPlay.apk. It is about 177 KB." },
      { q: "Can I record my gameplay?", a: "Yes. JavaPlay can record your gameplay as a video you can save and share." },
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
  { icon: "sparkles", title: "Always improving", text: "New tools, features and guides ship regularly, shaped by feedback from the people who use them." },
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
  { icon: "film", title: "Video", slug: "video", blurb: "GIFs, frames, formats & compression.", gradient: "from-rose-500 to-pink-600" },
  { icon: "image", title: "Image", slug: "image", blurb: "Formats, compression, cropping & resizing.", gradient: "from-purple-500 to-violet-600" },
  { icon: "download", title: "Downloads", slug: "downloads", blurb: "Saving Instagram & Pinterest media responsibly.", gradient: "from-blue-500 to-indigo-600" },
  { icon: "link", title: "Creator", slug: "creator", blurb: "Link-in-bio pages & growing your audience.", gradient: "from-violet-500 to-fuchsia-600" },
  { icon: "box", title: "3D Models", slug: "3d-models", blurb: "GLB files, licences & using models in projects.", gradient: "from-indigo-500 to-violet-600" },
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
    slug: "what-is-a-glb-file",
    title: "What Is a GLB File? 3D Models for the Web Explained",
    excerpt:
      "GLB is the single-file format behind most 3D on the web. Learn what is inside one, how it relates to glTF, and where you can open it.",
    category: "3D Models",
    readingTime: "6 min read",
    author: "Gowtham",
    published: "Oct 10, 2026",
    updated: "Oct 10, 2026",
    gradient: "from-indigo-500 to-violet-600",
    icon: "box",
    featured: true,
    image: "/images/models.png",
    intro:
      "If you have downloaded a 3D model recently, there is a good chance it ended in .glb. The format has quietly become the standard way to move 3D models between tools and onto web pages. Here is what it is and why it took over.",
    takeaways: [
      "GLB is the binary, single-file version of glTF 2.0, an open standard.",
      "One file holds the mesh, materials, textures and animations.",
      "It is built for real-time use, so files stay small and load fast.",
      "Browsers, 3D editors and game engines can all read it.",
    ],
    content: [
      {
        heading: "glTF and GLB in plain language",
        paragraphs: [
          "glTF is an open, royalty-free format for 3D scenes and models, maintained by the Khronos Group. A plain glTF model is usually several files: a JSON file describing the scene, a binary file with the geometry, and separate image files for the textures.",
          "GLB is the same data packed into one binary container. Nothing is lost and nothing is added — it is simply easier to share, because there are no loose texture folders to forget or links to break.",
        ],
      },
      {
        heading: "What is inside a GLB",
        paragraphs: [
          "A GLB can carry everything a model needs: the mesh (its triangles), the materials that describe how surfaces react to light, the texture images, and optionally a skeleton and animation clips for characters that move.",
          "Two numbers tell you most of what you need to know before using one: the triangle count, which affects how heavy the model is to draw, and the file size, which affects how long it takes to download.",
        ],
      },
      {
        heading: "Where GLB files work",
        paragraphs: [
          "Because glTF is an open standard, support is wide. Web libraries such as three.js load GLB directly in the browser, 3D editors such as Blender import and export it, and game engines read it either natively or through an importer.",
          "That makes it a safe choice when you do not yet know where a model will end up: the same file can be previewed on a web page today and dropped into a game project tomorrow.",
        ],
      },
      {
        heading: "Try it with a real model",
        paragraphs: [
          "The easiest way to understand the format is to open one. Every model in the CodeLove 3D Models library is a single .glb file with its textures inside, and each model page shows a live 3D preview next to its triangle count, size and licence.",
          "Pick something simple, rotate it in the viewer, then download it and open it in your own tool. Once you have seen one file travel from a web page into your project, the format stops being mysterious.",
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
    featured: true,
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
        paragraphs: [
          "The GIF format dates back decades and carries a hard limit: a maximum of 256 colours per frame. That's why gradients and video footage can look banded or grainy as a GIF. It also has no real compression for motion, so file sizes climb quickly with length and dimensions.",
          "Knowing these constraints upfront is the key to working with the format instead of against it.",
        ],
      },
      {
        heading: "The settings that matter",
        paragraphs: [
          "Three dials control quality and size. Length: keep it to a few seconds — GIF is for moments, not scenes. Framerate: 10–15 fps is usually plenty and dramatically smaller than 30 fps. Dimensions: scale down to the size it'll actually display at rather than exporting full resolution.",
          "A smart colour palette — optimised for the specific clip — also does a lot to keep the limited 256 colours looking clean.",
        ],
      },
      {
        heading: "When not to use a GIF at all",
        paragraphs: [
          "For anything longer than a few seconds or rich in colour, a short looping MP4 or WebM video will look far better and weigh a fraction as much. Most platforms now autoplay silent video loops that behave just like a GIF.",
          "Reserve true GIFs for short, simple, widely-shareable loops where universal compatibility matters more than fidelity.",
        ],
      },
    ],
  },
  {
    slug: "how-to-extract-frames-from-video",
    title: "How to Extract Frames from a Video",
    excerpt:
      "Turn a video into still images for thumbnails, storyboards or reference. Learn how frame rate and image format affect what you get.",
    category: "Video",
    readingTime: "6 min read",
    author: "Gowtham",
    published: "Oct 10, 2026",
    updated: "Oct 10, 2026",
    gradient: "from-fuchsia-500 to-rose-600",
    icon: "image",
    image: "/images/videotoimages.png",
    intro:
      "A video is just a long stack of still images shown quickly. Pulling those images back out is useful more often than you might expect — for thumbnails, storyboards, reference stills or simply grabbing the one perfect moment.",
    takeaways: [
      "A video's frame rate decides how many stills each second contains.",
      "Extracting at a lower rate gives fewer, more useful images.",
      "JPG keeps files small; PNG keeps every pixel; WebP does both.",
      "Browser-based extraction keeps your footage on your own device.",
    ],
    content: [
      {
        heading: "Why extract frames at all",
        paragraphs: [
          "The most common reason is a thumbnail: the best frame of a video is rarely the one a platform picks automatically. Frames are also handy for storyboards, for comparing a movement step by step, and for pulling reference images out of footage you shot yourself.",
          "A screenshot can do this for a single moment, but it captures your screen rather than the video itself. Extracting frames gives you the actual image at the video's own resolution.",
        ],
      },
      {
        heading: "Frame rate decides how many images you get",
        paragraphs: [
          "A 30 fps video holds 30 images for every second, so a one-minute clip contains 1,800 frames. You almost never want all of them. Extracting at 10 frames per second gives you a manageable set that still covers the action; 30 or 60 is for when you need every step of a fast movement.",
          "A good rule is to start low. If the moment you want falls between two extracted frames, run it again at a higher rate on just that part of the clip.",
        ],
      },
      {
        heading: "Pick the right image format",
        paragraphs: [
          "JPG produces the smallest files and is the sensible default when you are extracting many frames. PNG is lossless, which makes it the better choice for frames you plan to edit or that contain sharp text and graphics. WebP gives you small files with good quality and works in every modern browser.",
        ],
      },
      {
        heading: "Doing it in your browser",
        paragraphs: [
          "The Video to Frame tool on Video to Images extracts frames from MP4, WebM or MOV files at 10, 30 or 60 frames per second and saves them as JPG, PNG or WebP. The video is processed on your own device, so nothing is uploaded.",
          "Drop the file in, choose the rate and format, and download the frames you need.",
        ],
      },
    ],
  },
  {
    slug: "complete-instagram-downloader-guide",
    title: "The Complete Instagram Downloader Guide (2026)",
    excerpt:
      "How Instagram media works, what you can and can't download, and how to save reels, photos and carousels responsibly for your own content.",
    category: "Downloads",
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
        paragraphs: [
          "Every reel, photo and carousel on Instagram is ultimately a standard video or image file hosted on Meta's servers and delivered to your browser or app. The platform wraps these files in its own interface, but the underlying media is retrievable when you have the post's link.",
          "A downloader simply requests that original file and hands it to you directly, without the app's compression or on-screen watermarks.",
        ],
      },
      {
        heading: "What you can download",
        paragraphs: [
          "Modern tools handle the full range of public content: single-photo posts, multi-image carousels, reels, video posts and even high-resolution profile pictures. For carousels, a good downloader lets you grab every slide at once rather than one at a time.",
          "The process is usually the same: copy the share link from the post's menu, paste it into the downloader, preview the media and save it in its original quality.",
        ],
      },
      {
        heading: "Downloading responsibly",
        paragraphs: [
          "Downloading content you created, own the rights to, or have permission to reuse is perfectly reasonable. Downloading someone else's work to republish as your own is not — it can breach copyright and Instagram's terms.",
          "Treat downloaders as a convenience for legitimate backup and reuse, always credit creators, and never redistribute private or copyrighted material without consent.",
        ],
      },
    ],
  },
  {
    slug: "how-to-use-free-3d-models",
    title: "How to Use Free 3D Models in Your Game or Web Project",
    excerpt:
      "Free does not always mean no rules. Learn how to choose models that fit your project, read their licences and credit authors correctly.",
    category: "3D Models",
    readingTime: "7 min read",
    author: "Gowtham",
    published: "Oct 10, 2026",
    updated: "Oct 10, 2026",
    gradient: "from-violet-500 to-fuchsia-600",
    icon: "layers",
    image: "/images/models.png",
    intro:
      "Free 3D model libraries can save weeks of work on a game, a prototype or a web experience. Getting real value from them comes down to three things: picking models that suit real-time use, understanding the licence, and keeping your credits in order.",
    takeaways: [
      "Check the licence on every model before you build on it.",
      "CC0 and public-domain models need no credit; CC BY models do.",
      "Triangle count and file size decide how well a model performs.",
      "Models from one kit share a style, so scenes look consistent.",
    ],
    content: [
      {
        heading: "Start with the licence",
        paragraphs: [
          "Open licences are what make free models usable, and they are not all the same. CC0 and public-domain models can be used for anything with no credit required. MIT-licensed models can be used and modified freely as long as the licence notice stays with them. CC BY models ask you to credit the author, and CC BY-ND models also ask you to share them only unmodified.",
          "All of these allow commercial use, but the conditions differ. In the CodeLove 3D Models library each model page shows its exact licence, so check it there rather than assuming.",
        ],
      },
      {
        heading: "Choose models that fit real-time use",
        paragraphs: [
          "A model made for a film render can bring a browser or a phone to its knees. For games and web pages, look at the triangle count and file size first. Low-poly kits with a few hundred or a few thousand triangles per object let you fill a whole scene without frame-rate problems.",
          "Style matters as much as performance. Models from the same collection are designed to sit together, so building a scene from one or two kits looks far more coherent than mixing a dozen unrelated sources.",
        ],
      },
      {
        heading: "Preview before you download",
        paragraphs: [
          "Thumbnails hide a lot. Rotating a model in a 3D viewer shows you the back, the underside and how the materials react to light — the things you only otherwise discover after importing it.",
          "If you need several models from one collection, downloading the whole pack saves time. In the 3D Models library each collection can be downloaded as a single .zip that includes the licence and an attribution file.",
        ],
      },
      {
        heading: "Keep your credits in order",
        paragraphs: [
          "The simplest habit is to keep a credits file in your project from day one. Each time you add a model that needs attribution, add a line with the model name, the author and the licence.",
          "When you ship, that file becomes your credits screen or your about page. It takes a minute per model and saves an uncomfortable scramble at release time.",
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
        paragraphs: [
          "Instagram, TikTok and most social apps allow a single link in your profile. If you're a creator or business, that's a real bottleneck — you constantly have to choose which destination matters most this week. A link-in-bio page removes the choice by putting all your important links on one clean, shareable page.",
          "Visitors land on a mini-site with buttons for your shop, latest content, booking form and socials, and pick what they want.",
        ],
      },
      {
        heading: "A branded hub that builds trust",
        paragraphs: [
          "Beyond convenience, a well-designed bio page reinforces your brand. Consistent colours, a profile image and a clear layout make you look established and trustworthy the moment someone taps through. You control the experience instead of dumping people onto a bare link.",
          "Because it's one page, updating your priorities is instant — swap the top button when you launch something new, and every platform's link is updated at once.",
        ],
      },
      {
        heading: "The analytics advantage",
        paragraphs: [
          "Social platforms hide most of what happens after someone leaves their app. A bio page gives that visibility back: which links get the most taps, when your audience is active, and what content actually converts.",
          "That data lets you double down on what works and quietly retire what doesn't — turning your bio link from a static list into a growth tool.",
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
        paragraphs: [
          "Video is full of repetition. Within a single frame, large areas of similar colour repeat — that's spatial redundancy. Across frames, most of the picture stays the same from one moment to the next — that's temporal redundancy. Compression is fundamentally about detecting and removing this repetition.",
          "On top of that, codecs exploit the limits of human vision: we notice changes in brightness far more than subtle shifts in colour, so encoders spend fewer bits on colour detail without you ever noticing.",
        ],
      },
      {
        heading: "Keyframes, predicted frames and motion",
        paragraphs: [
          "Rather than storing every frame as a full image, codecs use keyframes (I-frames) that hold a complete picture, followed by predicted frames (P- and B-frames) that only describe what changed. If a person walks across a static background, the encoder stores the moving pixels and reuses the rest.",
          "This is why a talking-head video compresses far better than fast-action footage: less motion means less new information to store per frame.",
        ],
      },
      {
        heading: "Bitrate, codecs and the quality trade-off",
        paragraphs: [
          "Bitrate — how many bits per second the video uses — is your primary quality control. Too low and you get blocky artefacts and smearing; too high and files balloon with no visible benefit. Variable bitrate (VBR) spends more bits on complex scenes and fewer on simple ones for the best balance.",
          "The codec matters just as much. H.264 is universally compatible, HEVC (H.265) and VP9 cut size significantly, and AV1 pushes efficiency further still. Newer codecs deliver the same quality at a lower bitrate — at the cost of more processing power to encode and decode.",
        ],
      },
    ],
  },
  {
    slug: "jpg-vs-png-vs-webp",
    title: "JPG vs PNG vs WebP: Which Image Format Should You Use?",
    excerpt:
      "Three formats cover almost every image on the web. Learn what each one is good at and how to choose in a few seconds.",
    category: "Image",
    readingTime: "6 min read",
    author: "Gowtham",
    published: "Oct 10, 2026",
    updated: "Oct 10, 2026",
    gradient: "from-purple-500 to-violet-600",
    icon: "image",
    image: "/images/image_formats.jpg",
    intro:
      "Saving an image usually means picking a format from a list without much thought. The choice matters more than it looks: the wrong one gives you a blurry logo or a photo ten times larger than it needs to be.",
    takeaways: [
      "JPG is lossy and best for photographs.",
      "PNG is lossless and supports transparency.",
      "WebP offers both modes in smaller files.",
      "Choose by content: photo, graphic or transparent.",
    ],
    content: [
      {
        heading: "JPG: small files for photos",
        paragraphs: [
          "JPG compresses by discarding detail the eye is unlikely to miss. On photographs, with their soft gradients and natural noise, that works extremely well — files shrink dramatically with no visible change.",
          "It struggles with sharp edges and flat colour, where its compression shows up as fuzzy halos around text and lines. It also cannot store transparency.",
        ],
      },
      {
        heading: "PNG: every pixel, exactly",
        paragraphs: [
          "PNG is lossless: what you save is exactly what you get back. That makes it the right choice for screenshots, logos, diagrams and anything with text, and it supports transparent backgrounds.",
          "The price is size. A photograph saved as PNG is often several times larger than the same picture as a good-quality JPG.",
        ],
      },
      {
        heading: "WebP: the modern all-rounder",
        paragraphs: [
          "WebP can work in either mode. Its lossy mode competes with JPG at smaller file sizes, and its lossless mode competes with PNG while still supporting transparency. Every modern browser can display it.",
          "The main reason not to use it is compatibility outside the browser: some older apps and upload forms still expect JPG or PNG.",
        ],
      },
      {
        heading: "Choosing in practice",
        paragraphs: [
          "For photos, use JPG or lossy WebP. For screenshots, logos and graphics, use PNG or lossless WebP. If you need a transparent background, JPG is out.",
          "The same logic applies when you extract frames from a video: JPG for a large batch of stills, PNG for the few frames you plan to edit. Video to Images can export frames in all three formats, and its Image Compressor reduces the size of images you already have.",
        ],
      },
    ],
  },
  {
    slug: "how-to-make-a-gif-smaller",
    title: "How to Make a GIF Smaller Without Ruining It",
    excerpt:
      "GIFs get heavy fast. Learn the four settings that control file size and when converting a GIF to video is the better answer.",
    category: "Video",
    readingTime: "6 min read",
    author: "Gowtham",
    published: "Oct 10, 2026",
    updated: "Oct 10, 2026",
    gradient: "from-rose-500 to-pink-600",
    icon: "scissors",
    image: "/images/videotogif.png",
    intro:
      "A five-second GIF can easily weigh more than a minute of video. That is not a mistake in your export — it is how the format works. Once you know what drives the size, shrinking a GIF becomes a matter of choosing what to give up.",
    takeaways: [
      "GIF is an old format that stores frames inefficiently.",
      "Dimensions, frame rate, length and colours control the size.",
      "Halving the width cuts the pixels to a quarter.",
      "For long clips, converting the GIF to video is far smaller.",
    ],
    content: [
      {
        heading: "Why GIFs are so heavy",
        paragraphs: [
          "GIF dates from 1987. It is limited to 256 colours per frame and compresses each frame much less cleverly than a modern video codec, which only stores what changed between frames.",
          "The result is that every extra frame, pixel and colour costs real bytes. A GIF has no hidden efficiency to fall back on.",
        ],
      },
      {
        heading: "The four settings that matter",
        paragraphs: [
          "Dimensions come first: halving the width and height leaves a quarter of the pixels, and most GIFs are viewed small anyway. Frame rate is next — 10 to 15 frames per second looks smooth for most clips and halves the frame count compared with 30.",
          "Length matters just as directly: trim to the moment that makes the point. Finally, reducing the number of colours shrinks each frame, though push it too far and you will see banding in gradients.",
        ],
      },
      {
        heading: "A sensible order to work in",
        paragraphs: [
          "Crop first, so you are not spending bytes on empty edges. Then resize to the size it will actually be shown at, and only then compress. Each step makes the next one more effective, and you avoid crushing the quality of pixels you were going to throw away.",
        ],
      },
      {
        heading: "When to use video instead",
        paragraphs: [
          "If a GIF is still too big after all that, the clip is probably too long for the format. Converting it to MP4 gives you the same looping picture at a fraction of the size.",
          "Video to GIF includes separate GIF Crop, GIF Resize and GIF Compressor tools, plus GIF to Video for exactly this case. All of them run in your browser.",
        ],
      },
    ],
  },
  {
    slug: "how-to-download-pinterest-videos-and-images",
    title: "How to Download Pinterest Videos and Images",
    excerpt:
      "Save pins for offline reference the right way. Learn how pin links work, how to save videos and images, and what you may do with them.",
    category: "Downloads",
    readingTime: "6 min read",
    author: "Gowtham",
    published: "Oct 10, 2026",
    updated: "Oct 10, 2026",
    gradient: "from-red-500 to-rose-600",
    icon: "download",
    image: "/images/downloader.png",
    intro:
      "Pinterest is built for collecting ideas, but its boards only work while you are online and signed in. Saving a pin to your device is useful for mood boards, client references and offline planning — as long as you respect who made it.",
    takeaways: [
      "Every pin has a share link you can copy.",
      "Video pins and image pins are saved with different tools.",
      "The full pin URL is more reliable than a short link.",
      "Saved pins are for reference, not for republishing.",
    ],
    content: [
      {
        heading: "How pin links work",
        paragraphs: [
          "Each pin lives at its own address. In the app or on the website, the share menu gives you a link you can copy. Pinterest often shortens these to a pin.it address, which redirects to the full pin URL.",
          "Both normally work, but if a short link fails, open the pin in a browser and copy the full address from the address bar instead.",
        ],
      },
      {
        heading: "Saving a video or an image",
        paragraphs: [
          "The steps are the same for both: copy the pin's link, paste it into the downloader, check the preview to confirm it is the right pin, and save the file. The CodeLove Downloader has a Pinterest Video Downloader for video pins and a Pinterest Image Downloader for image pins.",
          "If you are collecting several pins for one project, the multi-link mode lets you paste a list of links and fetch them together instead of one at a time.",
        ],
      },
      {
        heading: "What you can and cannot save",
        paragraphs: [
          "Downloaders work with public pins. Pins on secret boards and content that requires you to be signed in cannot be fetched, and that is by design.",
        ],
      },
      {
        heading: "Using saved pins responsibly",
        paragraphs: [
          "A pin usually belongs to the photographer, designer or creator who made it, not to the person who pinned it. Saving it for your own reference, a private mood board or a client conversation is a reasonable use.",
          "Republishing it as your own, or using it commercially without permission, is not. When in doubt, follow the pin back to its source and ask.",
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
        paragraphs: [
          "A container is the wrapper — the .mp4 or .webm file — that bundles your video stream, audio stream, subtitles and metadata into one package. The codec is the algorithm that compresses the actual video inside. The same MP4 container can hold H.264, HEVC or AV1 video, which is why file extension alone doesn't tell the whole story.",
          "When you pick a 'format', you're really choosing a container-plus-codec combination, and each pairing has different compatibility and efficiency characteristics.",
        ],
      },
      {
        heading: "The three formats compared",
        paragraphs: [
          "MP4 is the universal default. Paired with H.264, it plays on virtually every device, browser and platform ever made, which makes it the safest choice for sharing and social media. WebM, built around VP9 and AV1, is open, royalty-free and slightly more efficient — ideal for websites where you control playback.",
          "MOV is Apple's QuickTime container, common in editing pipelines and screen recordings on macOS and iOS. It's excellent for editing but less friendly for distribution outside the Apple ecosystem.",
        ],
      },
      {
        heading: "Which one should you use?",
        paragraphs: [
          "For uploading to YouTube, Instagram or sending to a client: MP4 with H.264 every time. For a self-hosted website where load speed matters: WebM as the primary source with an MP4 fallback. For editing on a Mac before exporting: MOV is fine as an intermediate, but export to MP4 for delivery.",
          "When in doubt, MP4 is rarely the wrong answer — its compatibility is unmatched.",
        ],
      },
    ],
  },
  {
    slug: "what-to-put-on-your-link-in-bio-page",
    title: "What to Put on Your Link in Bio Page (and What to Leave Out)",
    excerpt:
      "A bio page works best when it is short and deliberate. Learn how to choose, order and label your links so visitors actually tap them.",
    category: "Creator",
    readingTime: "5 min read",
    author: "Gowtham",
    published: "Oct 10, 2026",
    updated: "Oct 10, 2026",
    gradient: "from-violet-500 to-fuchsia-600",
    icon: "link",
    image: "/images/linkinbio.png",
    intro:
      "A link in bio page can hold as many links as you like, which is exactly the trap. The pages that work are the ones that make a visitor's next step obvious within a couple of seconds.",
    takeaways: [
      "Lead with the one thing you most want visitors to do.",
      "A handful of clear links beats a long list.",
      "Label links by what the visitor gets, not what you call it.",
      "Review your click numbers and prune what nobody taps.",
    ],
    content: [
      {
        heading: "Start with one priority",
        paragraphs: [
          "Decide what you want most this month — a new video watched, a product bought, a newsletter joined — and put that link first. People tap the top of a list far more than the bottom, so the order is doing real work.",
          "When your priority changes, move the link. That is the whole advantage of a bio page: you update one place and every profile that points to it is current.",
        ],
      },
      {
        heading: "Keep the list short",
        paragraphs: [
          "Every extra link makes the others a little less likely to be chosen. Most pages are well served by three to six links plus a row of social icons.",
          "Old campaigns, finished giveaways and last year's event should come off. A short, current page looks more trustworthy than a long, stale one.",
        ],
      },
      {
        heading: "Write labels people understand",
        paragraphs: [
          "A label should say what the visitor gets. Watch my latest video or Shop the summer collection tells them more than a bare brand name or an internal project title.",
          "Add a clear profile picture, your name and a one-line bio so people are sure they have landed in the right place.",
        ],
      },
      {
        heading: "Let the numbers decide",
        paragraphs: [
          "Guessing which links matter is unnecessary when you can see the clicks. Link in Bio shows how many views your page gets and how often each link is tapped.",
          "Check it every few weeks. Promote what performs, rewrite what does not, and remove what nobody uses.",
        ],
      },
    ],
  },
  {
    slug: "how-to-compress-crop-and-resize-images",
    title: "How to Compress, Crop and Resize Images for the Web",
    excerpt:
      "Three small edits make images load faster and fit properly. Learn what each one does and the order that gives the best result.",
    category: "Image",
    readingTime: "5 min read",
    author: "Gowtham",
    published: "Oct 10, 2026",
    updated: "Oct 10, 2026",
    gradient: "from-purple-500 to-violet-600",
    icon: "scissors",
    image: "/images/image_editing.jpg",
    intro:
      "Most images that slow a page down are not badly compressed — they are simply far bigger than the space they are shown in. Resizing, cropping and compressing each solve a different part of that problem.",
    takeaways: [
      "Resizing changes the pixel dimensions of the whole image.",
      "Cropping removes edges to change the shape or focus.",
      "Compressing reduces file size at the same dimensions.",
      "Crop, then resize, then compress for the best quality.",
    ],
    content: [
      {
        heading: "Three different jobs",
        paragraphs: [
          "Resizing scales the whole picture to new dimensions, for example from 4000 pixels wide down to 1200. Cropping cuts away part of the picture, which changes its shape and what it focuses on. Compressing keeps the dimensions and reduces how many bytes are used to store them.",
          "They are easy to confuse because all three make the file smaller, but they change different things — and only one of them changes what is actually in the frame.",
        ],
      },
      {
        heading: "Getting the shape right",
        paragraphs: [
          "Different places expect different shapes. A square 1:1 crop suits profile pictures and many feed posts, 16:9 suits video thumbnails and banners, and 4:3 is a comfortable general-purpose shape.",
          "Cropping to the right ratio yourself means you decide what stays in the frame, instead of leaving a platform to cut off someone's head automatically.",
        ],
      },
      {
        heading: "The order that works",
        paragraphs: [
          "Crop first, so you are only working with the part you want. Resize next, to the largest size the image will actually be displayed at. Compress last, because compression works best when it is the final step and nothing is rescaled afterwards.",
          "For photos, a quality setting somewhere around 70 to 85 percent is usually indistinguishable from the original at a fraction of the size.",
        ],
      },
      {
        heading: "Doing it in your browser",
        paragraphs: [
          "Video to Images includes Image Crop, Image Resize and Image Compressor tools. Image Crop offers 1:1, 16:9 and 4:3 presets as well as a custom shape with a live preview.",
          "All three process the image on your own device, so your pictures are not uploaded.",
        ],
      },
    ],
  },
  {
    slug: "how-to-extract-audio-from-video-as-mp3",
    title: "How to Extract Audio from a Video as MP3",
    excerpt:
      "Save the sound from a video as an MP3 for podcasts, notes or editing. Learn how audio sits inside a video file and what affects quality.",
    category: "Video",
    readingTime: "5 min read",
    author: "Gowtham",
    published: "Oct 10, 2026",
    updated: "Oct 10, 2026",
    gradient: "from-rose-500 to-pink-600",
    icon: "play",
    image: "/images/audio_extract.jpg",
    intro:
      "Sometimes the picture is not the part you need. A recorded talk makes a fine podcast episode, a voice note is easier to share as audio, and an interview is quicker to transcribe from a small sound file than from a large video.",
    takeaways: [
      "A video file is a container holding separate picture and sound tracks.",
      "Extracting audio converts the sound track into a standalone MP3.",
      "Quality cannot be higher than the audio in the original video.",
      "Only extract audio from videos you own or may reuse.",
    ],
    content: [
      {
        heading: "How audio lives inside a video",
        paragraphs: [
          "Formats such as MP4, WebM and MOV are containers. Inside, the picture and the sound are stored as separate tracks that are played back in sync. Extracting the audio means reading the sound track and writing it out on its own.",
          "Saving it as MP3 makes the result playable almost anywhere — phones, cars, editors and every podcast app.",
        ],
      },
      {
        heading: "What affects the quality",
        paragraphs: [
          "The audio in most videos is already compressed, so converting it to MP3 compresses it a second time. That is fine for speech and everyday listening, but it means the MP3 can never sound better than the video it came from.",
          "For the same reason, start from the best copy you have. Extracting from the original recording will always beat extracting from a version that has been re-shared and re-compressed several times.",
        ],
      },
      {
        heading: "When it is useful",
        paragraphs: [
          "Common uses are turning recorded talks and lessons into audio you can listen to on the move, pulling narration out of a screen recording, and saving the sound from your own clips to reuse in an edit.",
          "As with any media, the rule is simple: extract audio from videos you made or have permission to use. Music and speech in other people's videos are protected just like the picture is.",
        ],
      },
      {
        heading: "Doing it in your browser",
        paragraphs: [
          "The Video to MP3 tool on Video to Images takes an MP4, WebM or MOV file and saves its audio track as an MP3. The conversion runs in your browser, so the video is not uploaded anywhere.",
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

/** Returns the learning-center category an article belongs to, matched by its category title. */
export function getCategoryByTitle(title: string) {
  return categories.find((c) => c.title.toLowerCase() === title.toLowerCase()) ?? null;
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
  { icon: "box", title: "Using 3D Models", text: "Find, preview and download GLB models, and check each licence before you use them.", steps: 5 },
  { icon: "film", title: "Editing Video", text: "Crop, resize, compress and convert video right inside your browser.", steps: 7 },
  { icon: "image", title: "Making GIFs & Frames", text: "Turn clips into GIFs and extract image frames while keeping your files private.", steps: 5 },
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
    icon: "film",
    title: "Video & GIF Guides",
    blurb: "Formats, compression, frame extraction and GIFs explained in plain language.",
    href: "/learn/video",
    cta: "Read the guides",
    gradient: "from-slate-600 to-slate-800",
  },
  {
    icon: "zap",
    title: "Free Tools",
    blurb: "Every CodeLove product on its own fast, free subdomain — a media downloader, video and image tools, a link-in-bio builder and a 3D model library.",
    href: "/products",
    cta: "Explore tools",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: "box",
    title: "Free 3D Models",
    blurb: "Thousands of free GLB models you can preview in the browser and download for games, web and AR projects.",
    href: "/products/models",
    cta: "Browse models",
    gradient: "from-pink-500 to-rose-600",
  },
];

/* ------------------------------------------------------------------ */
/*  Legal & policy pages — rendered by /legal/[slug]                   */
/* ------------------------------------------------------------------ */
export type LegalSection = {
  heading: string;
  paragraphs: string[];
  /** Optional external links listed under the paragraphs. */
  links?: { label: string; href: string }[];
};
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
    description: "How CodeLove handles the limited data involved in using our tools, including analytics, cookies and advertising.",
    updated: "October 2026",
    intro:
      "CodeLove is built privacy-first. Most of our tools run entirely in your browser, and we collect as little as possible. This page explains what that means in plain language.",
    sections: [
      {
        heading: "What we collect",
        paragraphs: [
          "Many CodeLove tools process your files and data directly in your browser — those files are never uploaded to us. For features that do require a server, we only handle what is strictly needed to perform the task, and we do not keep your content afterwards.",
          "Some CodeLove sites use Google Analytics to collect aggregated usage data (such as which pages are visited) so we can understand what is useful and improve the product. We do not sell your data.",
        ],
      },
      {
        heading: "Cookies & local storage",
        paragraphs: [
          "We use local storage for small preferences such as your light/dark theme. Analytics and advertising cookies are described below and on our Cookie Policy page.",
        ],
      },
      {
        heading: "Advertising",
        paragraphs: [
          "We use, or may use, Google AdSense to show ads on CodeLove sites. Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visits to our sites and other sites on the Internet.",
          "You can opt out of personalised advertising in Google Ads Settings, and opt out of other vendors' use of cookies for personalised advertising at aboutads.info.",
        ],
        links: [
          { label: "Google Ads Settings", href: "https://adssettings.google.com" },
          { label: "Opt out of personalised advertising (aboutads.info)", href: "https://www.aboutads.info" },
          { label: "How Google uses information from sites that use its services", href: "https://policies.google.com/technologies/partner-sites" },
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
    description: "The terms for using CodeLove's free online tools and websites: fair and lawful use, your rights to the files you process, availability, changes and liability.",
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
    description: "How and why CodeLove uses cookies and local storage: theme preferences, Google Analytics, advertising cookies, and how you can control or delete them.",
    updated: "October 2026",
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
          "Some CodeLove sites use Google Analytics, which sets cookies to measure how the site is used and which tools are useful. This data is aggregated and not used to personally identify you.",
        ],
      },
      {
        heading: "Advertising cookies",
        paragraphs: [
          "We use, or may use, Google AdSense to show ads. Google and other third-party vendors use cookies to serve ads based on your prior visits to this website or other websites. You can opt out of personalised advertising at any time using the links below.",
        ],
        links: [
          { label: "Google Ads Settings", href: "https://adssettings.google.com" },
          { label: "Opt out of personalised advertising (aboutads.info)", href: "https://www.aboutads.info" },
          { label: "How Google uses information from sites that use its services", href: "https://policies.google.com/technologies/partner-sites" },
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
    description: "Important notes about relying on CodeLove tools and content: tools provided as is, guides that are not professional advice, and links to third-party sites.",
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
    description: "How we research, write, fact-check and update the guides, tutorials and blog posts on CodeLove, and how to report a mistake.",
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
      { label: "3D Models", href: "/products/models" },
      { label: "Video to GIF", href: "/products/videotogif" },
      { label: "Video to Images", href: "/products/videotoimages" },
      { label: "3D Games", href: "/products/games" },
      { label: "UTubeFlow", href: "/products/utubeflow" },
      { label: "JavaPlay", href: "/products/javaplay" },
      { label: "All Products", href: "/products" },
    ],
  },
  {
    // Plain links to every site in the CodeLove network so crawlers can discover each subdomain.
    title: "CodeLove network",
    links: [
      { label: "Free 3D Models", href: "https://models.codelove.in" },
      { label: "Free 3D Games", href: "https://games.codelove.in" },
      { label: "Instagram & Pinterest Downloader", href: "https://downloader.codelove.in" },
      { label: "Link in Bio", href: "https://linkinbio.codelove.in" },
      { label: "Video to GIF", href: "https://videotogif.codelove.in" },
      { label: "Video to Images", href: "https://videotoimages.codelove.in" },
      { label: "Free YouTube Automation", href: "https://utubeflow.codelove.in" },
      { label: "Free Java Games", href: "https://javaplay.codelove.in" },
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
    title: "Learn",
    links: [
      { label: "Video Guides", href: "/learn/video" },
      { label: "Image Guides", href: "/learn/image" },
      { label: "Download Guides", href: "/learn/downloads" },
      { label: "Creator Guides", href: "/learn/creator" },
      { label: "3D Model Guides", href: "/learn/3d-models" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Editorial Policy", href: "/legal/editorial-policy" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "Cookie Policy", href: "/legal/cookies" },
      { label: "Disclaimer", href: "/legal/disclaimer" },
    ],
  },
];

export const blogs: Article[] = [
  {
    slug: "introducing-3d-models",
    title: "Introducing 3D Models: A Free GLB Library",
    excerpt: "A new CodeLove product: thousands of free 3D models you can preview in the browser and download as GLB files.",
    category: "Announcements",
    readingTime: "4 min read",
    author: "Gowtham",
    published: "Oct 10, 2026",
    updated: "Oct 10, 2026",
    gradient: "from-indigo-500 to-violet-600",
    icon: "box",
    featured: true,
    image: "/images/models.png",
    intro: "CodeLove has a new product, and it is a different kind of tool from the ones before it. 3D Models is a library of free 3D assets you can inspect in your browser and download for your own projects.",
    takeaways: ["6,700+ free models", "Live 3D preview", "Open licences shown on every model", "Single-file GLB downloads"],
    content: [
      {
        heading: "What is in the library",
        image: "/images/models.png",
        paragraphs: [
          "The library holds more than 6,700 models: rigged characters and animals, vehicles, buildings, furniture, food, nature and space. They are organised into categories and collections, so you can browse a whole matching kit instead of hunting for pieces one at a time.",
          "Every model has its own page with a live 3D preview, its triangle count, its file size and its licence."
        ]
      },
      {
        heading: "Made to be used",
        paragraphs: [
          "Each model is a single GLB file with its textures inside, so there are no loose folders to keep track of. You can download one model, or a whole collection as a single zip that includes the licence and an attribution file.",
          "The rigged human characters can play a set of motion clips, there is a viewer for inspecting your own GLB files, and a scene builder lets you place models together and export the result."
        ]
      },
      {
        heading: "Free, with the licence in plain sight",
        paragraphs: [
          "We did not make these models. They are the work of their original authors, published under open licences that allow anyone to use them, including in commercial projects. Some ask for a credit, and each model page tells you exactly which licence applies.",
          "You will find the library at models.codelove.in, or through the Products page here on CodeLove."
        ]
      }
    ]
  },
  {
    slug: "downloader-instagram-and-pinterest",
    title: "The Downloader: Focused on Instagram and Pinterest",
    excerpt: "What the CodeLove Downloader supports today, how the single and multi-link modes work, and how to use it responsibly.",
    category: "Updates",
    readingTime: "3 min read",
    author: "Gowtham",
    published: "Oct 10, 2026",
    updated: "Oct 10, 2026",
    gradient: "from-blue-500 to-indigo-600",
    icon: "download",
    featured: false,
    image: "/images/downloader.png",
    intro: "The CodeLove Downloader now concentrates on two platforms: Instagram and Pinterest. Here is what it does today.",
    takeaways: ["Instagram videos and Reels", "Pinterest videos and images", "Single and multi-link modes", "Public content only"],
    content: [
      {
        heading: "What is supported",
        image: "/images/downloader.png",
        paragraphs: [
          "There are three downloaders: one for Instagram videos and Reels, one for Pinterest videos and one for Pinterest images. Each works the same way — paste a link, check the preview, and save the file.",
          "You do not need an account, and the Downloader never asks for your Instagram or Pinterest password."
        ]
      },
      {
        heading: "One link or several",
        paragraphs: [
          "Every downloader has a multi-link mode. Instead of fetching posts one at a time, you can paste several links and fetch them together, which is useful when you are collecting your own posts or gathering references for a project."
        ]
      },
      {
        heading: "Public content, used responsibly",
        paragraphs: [
          "The Downloader only works with publicly available posts. Private accounts and restricted content cannot be fetched, and that is deliberate.",
          "Everything you save still belongs to the person who made it. Saving your own posts, or media you have permission to reuse, is what the tool is for. Republishing someone else's work without asking is not."
        ]
      }
    ]
  },
  {
    slug: "video-to-frame-is-now-video-to-images",
    title: "Video to Frame Is Now Video to Images",
    excerpt: "Our frame extractor has grown into a set of eight video and image tools, all running in your browser.",
    category: "Updates",
    readingTime: "3 min read",
    author: "Gowtham",
    published: "Oct 10, 2026",
    updated: "Oct 10, 2026",
    gradient: "from-fuchsia-500 to-rose-600",
    icon: "film",
    featured: false,
    image: "/images/videotoimages.png",
    intro: "Video to Frame started as one tool that did one job. It now sits alongside seven others, so the product has a new name to match: Video to Images.",
    takeaways: ["Eight tools in one place", "Video and image editing", "Nothing is uploaded", "Free, with no watermark"],
    content: [
      {
        heading: "What is included",
        image: "/images/videotoimages.png",
        paragraphs: [
          "For video there are five tools: Video to Frame for extracting stills, Video to MP3 for saving the audio track, and Video Compressor, Video Crop and Video Resize for getting a clip to the right size and shape.",
          "For images there are three: Image Compressor, Image Crop and Image Resize."
        ]
      },
      {
        heading: "Still local-first",
        paragraphs: [
          "Every tool processes your file on your own device. The video or image you drop in is not uploaded to a server, which keeps large files fast to work with and private files private.",
          "There is no account to create and no watermark on what you export."
        ]
      },
      {
        heading: "Where to find it",
        paragraphs: [
          "The tools live at videotoimages.codelove.in. If you bookmarked the old frame extractor, Video to Frame is still there as the first tool in the list."
        ]
      }
    ]
  },
  {
    slug: "video-to-gif-is-a-full-gif-toolkit",
    title: "Video to GIF Is Now a Full GIF Toolkit",
    excerpt: "Converting a clip is only the first step. Video to GIF now includes tools to crop, resize, compress and convert GIFs back to video.",
    category: "Updates",
    readingTime: "3 min read",
    author: "Gowtham",
    published: "Oct 10, 2026",
    updated: "Oct 10, 2026",
    gradient: "from-rose-500 to-pink-600",
    icon: "play",
    featured: false,
    image: "/images/videotogif.png",
    intro: "Making a GIF is rarely a single step. You convert the clip, notice it is too large, crop out the edges and shrink it again. Video to GIF now covers that whole loop.",
    takeaways: ["Eight GIF and video tools", "Convert in both directions", "Crop, resize and compress", "Runs in your browser"],
    content: [
      {
        heading: "The tools",
        image: "/images/videotogif.png",
        paragraphs: [
          "Alongside the original Video to GIF converter there is now GIF to Video, which turns an animated GIF into a much lighter MP4. GIF Resize, GIF Crop and GIF Compressor handle the clean-up after a conversion.",
          "Three matching tools work on the source clip before you convert it: Video Crop, Video Resize and Video Compressor."
        ]
      },
      {
        heading: "Why the extra steps matter",
        paragraphs: [
          "GIF is an inefficient format, so small decisions make a large difference to file size. Cropping away empty edges and resizing to the size the GIF will actually be shown at often does more than any compression setting.",
          "Having those steps next to the converter means you can fix a heavy GIF without starting again."
        ]
      },
      {
        heading: "Private by design",
        paragraphs: [
          "As before, the work happens on your own device. Your clips are not uploaded, and nothing you export carries a watermark. You will find the toolkit at videotogif.codelove.in."
        ]
      }
    ]
  },
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
    image: "/og.png",
    intro: "Welcome to the all-new CodeLove platform! This is our first official blog post on the new infrastructure, and we have so much to share with you.",
    takeaways: ["Lightning fast performance", "New Learning Center", "Better video tools", "Five focused products"],
    content: [
      {
        heading: "A New Beginning for CodeLove",
        image: "/og.png",
        paragraphs: [
          "For the past few months, we have been quietly working behind the scenes. We listened to your feedback, analyzed how you used our tools, and realized that our old architecture was simply not scaling well enough to support the ambitious features we wanted to build.",
          "Today, we are thrilled to unveil the completely rebuilt CodeLove platform. We migrated our entire stack to Next.js App Router, completely revamped our design system, and optimized every single page to load in under a second."
        ]
      },
      {
        heading: "What's new in this release?",
        paragraphs: [
          "First and foremost, performance. Everything you click should feel instant. By leveraging server components and aggressive static generation, the platform now uses 60% less client-side JavaScript.",
          "We also introduced the brand new Learning Center. Previously, our tutorials were scattered. Now, they are organized by topic, so guides about video, images, downloads, creator tools and 3D models are each in one place."
        ]
      },
      {
        heading: "What happens next?",
        paragraphs: [
          "This is just day one. Over the next few weeks, we will be rolling out more browser-based video and image utilities, along with new guides for every product.",
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
    icon: "zap",
    featured: false,
    image: "/images/videoformats.png",
    intro: "Building web tools has fundamentally changed. With the power of WebAssembly, we no longer need to send user data to servers.",
    takeaways: ["Privacy by default", "Zero latency interactions", "WebAssembly power", "Massive cost reductions"],
    content: [
      {
        heading: "The old way of building web apps",
        image: "/images/videocompression.png",
        paragraphs: [
          "Traditionally, turning a clip into a GIF, pulling frames out of a video or compressing an image meant uploading the file to a cloud server. The server would do the heavy lifting and send the result back to the user.",
          "This architecture is expensive to scale, slow for users on poor connections, and terrible for privacy. If the file is a private family video or an unreleased client project, the last thing you want is for it to travel across the internet."
        ]
      },
      {
        heading: "The WebAssembly revolution",
        paragraphs: [
          "WebAssembly (WASM) allows us to take high-performance code written in languages like C++ or Rust and run it directly in the browser at near-native speeds. This changes everything.",
          "By utilizing WASM, our video, GIF and image tools can perform complex operations directly on your machine. The browser becomes the server."
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
        image: "/images/downloader.png",
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
