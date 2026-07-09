import re

file_path = "src/lib/data.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Split the content right before "export const blogs: Article[] ="
parts = content.split("export const blogs: Article[] = [")
if len(parts) == 2:
    base_content = parts[0]
else:
    print("Could not find blogs array")
    exit(1)

new_blogs_code = """export const blogs: Article[] = [
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
    intro: "Welcome to the all-new CodeLove platform! This is our first official blog post on the new infrastructure, and we have so much to share with you.",
    takeaways: ["Lightning fast performance", "New Learning Center", "Better video tools", "Unified dashboard"],
    content: [
      {
        heading: "A New Beginning for CodeLove",
        image: "/images/base64_practice.png",
        paragraphs: [
          "For the past few months, we have been quietly working behind the scenes. We listened to your feedback, analyzed how you used our tools, and realized that our old architecture was simply not scaling well enough to support the ambitious features we wanted to build.",
          "Today, we are thrilled to unveil the completely rebuilt CodeLove platform. We migrated our entire stack to Next.js App Router, completely revamped our design system, and optimized every single page to load in under a second."
        ]
      },
      {
        heading: "What's new in this release?",
        image: "/images/base64_practice.png",
        paragraphs: [
          "First and foremost, performance. Everything you click should feel instant. By leveraging server components and aggressive static generation, the platform now uses 60% less client-side JavaScript.",
          "We also introduced the brand new Learning Center. Previously, our tutorials were scattered. Now, they are organized into a strict curriculum that guides you from beginner concepts to advanced implementations in Web Development and Video processing.",
          "Finally, we have rolled out the foundation for our upcoming AI tools. The infrastructure is now ready to handle on-device AI generation, which means big things are coming soon."
        ]
      },
      {
        heading: "What happens next?",
        image: "/images/base64_practice.png",
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
    intro: "We are incredibly excited to announce our newest suite of tools: CodeLove Video Utilities.",
    takeaways: ["Video to GIF conversion", "High-res frame extraction", "100% private", "No uploads required"],
    content: [
      {
        heading: "The problem with cloud video editors",
        image: "/images/base64_practice.png",
        paragraphs: [
          "We have all been there. You have a 500MB video and you just need to extract a single frame or convert a 3-second clip into a GIF. Most online tools require you to upload that massive file to their servers, wait in a processing queue, and then download the result—often with an ugly watermark plastered across it.",
          "Not only is this incredibly slow and frustrating, but it also poses a massive privacy risk. Why should a random server have access to your personal videos just to make a GIF?"
        ]
      },
      {
        heading: "Enter Local-First Processing",
        image: "/images/base64_practice.png",
        paragraphs: [
          "Our new Video to GIF and Video to Frame tools fix this by moving the entire processing engine into your web browser. When you drop a video into CodeLove, it never leaves your computer.",
          "Using WebAssembly and modern browser APIs, we compile powerful video processing tools to run locally. This means instant loads, zero upload times, and complete privacy."
        ]
      },
      {
        heading: "Available today",
        image: "/images/base64_practice.png",
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
    intro: "Building web tools has fundamentally changed. With the power of WebAssembly, we no longer need to send user data to servers.",
    takeaways: ["Privacy by default", "Zero latency interactions", "WebAssembly power", "Massive cost reductions"],
    content: [
      {
        heading: "The old way of building web apps",
        image: "/images/base64_practice.png",
        paragraphs: [
          "Traditionally, processing a PDF, formatting a massive JSON file, or compressing a video required uploading the file to a cloud server. The server would do the heavy lifting and send the result back to the user.",
          "This architecture is expensive to scale, slow for users on poor connections, and terrible for privacy. If you are formatting a JSON file containing sensitive API keys, the last thing you want is for it to travel across the internet."
        ]
      },
      {
        heading: "The WebAssembly revolution",
        image: "/images/base64_practice.png",
        paragraphs: [
          "WebAssembly (WASM) allows us to take high-performance code written in languages like C++ or Rust and run it directly in the browser at near-native speeds. This changes everything.",
          "By utilizing WASM, our Developer Utilities and Media Tools can perform complex operations directly on your machine. The browser becomes the server."
        ]
      },
      {
        heading: "Win-Win for Everyone",
        image: "/images/base64_practice.png",
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
    intro: "Creators are busy. They need tools that get out of the way and just work. Here is how we designed our creator suite.",
    takeaways: ["Mobile first design", "Minimal friction", "Bold but clean aesthetics", "Speed as a feature"],
    content: [
      {
        heading: "Speed is the ultimate feature",
        image: "/images/base64_practice.png",
        paragraphs: [
          "When a creator needs to download a reel for a reaction video, or update their bio link to point to a new sponsor, they want it done in seconds. Every extra click is a point of friction.",
          "We designed our tools to require the absolute minimum number of interactions. Paste a link, hit enter, get your file. No accounts required, no popups, no hidden menus."
        ]
      },
      {
        heading: "Aesthetics that inspire trust",
        image: "/images/base64_practice.png",
        paragraphs: [
          "Many free online tools look like spam sites from 2010. They are covered in flashing banner ads and fake download buttons. We took the opposite approach.",
          "We use a dark, premium aesthetic with smooth gradients and high-quality typography. By making our free tools look like expensive enterprise software, we build immediate trust with our users."
        ]
      },
      {
        heading: "Mobile-first by necessity",
        image: "/images/base64_practice.png",
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
    intro: "AI is reshaping how we build tools. But we are integrating AI differently—focusing on privacy and on-device processing.",
    takeaways: ["On-device AI models", "Background removal", "Privacy focused generation", "WebGPU capabilities"],
    content: [
      {
        heading: "AI without the cloud",
        image: "/images/base64_practice.png",
        paragraphs: [
          "Most AI tools today require you to send your data to OpenAI or Anthropic. While this makes sense for massive language models, it is unnecessary for smaller tasks like image segmentation.",
          "Using WebGL and the upcoming WebGPU standard, we are bringing complex AI models directly to your browser. This allows for instant image processing without a round-trip to a server."
        ]
      },
      {
        heading: "Coming Soon: Instant Background Removal",
        image: "/images/base64_practice.png",
        paragraphs: [
          "Our first major AI release will be a background removal tool. By running a lightweight segmentation model entirely in your browser, you will be able to cut out subjects from photos instantly, even while offline.",
          "Because the image never leaves your device, you can safely use it on confidential documents or personal family photos."
        ]
      },
      {
        heading: "The ethical approach",
        image: "/images/base64_practice.png",
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
    intro: "The transition to Next.js App Router and React Server Components was not easy, but the performance gains were undeniable.",
    takeaways: ["Reduced client JS", "Faster routing", "SEO improvements", "Mental model shift"],
    content: [
      {
        heading: "The paradigm shift",
        image: "/images/base64_practice.png",
        paragraphs: [
          "For years, React developers have been accustomed to shipping their entire application logic to the client. Server-side rendering (SSR) helped with the initial HTML payload, but the client still had to download and execute all the JavaScript to hydrate the page.",
          "React Server Components (RSC) flip this model on its head. Now, components execute exclusively on the server by default, and only the resulting HTML is sent to the browser."
        ]
      },
      {
        heading: "Cutting the bundle size",
        image: "/images/base64_practice.png",
        paragraphs: [
          "By pushing our UI logic, markdown parsing, and heavy data formatting libraries to the server, we reduced our client-side JavaScript bundle by almost 60%.",
          "This resulted in blazing fast load times, especially for users on slower mobile networks. The blog you are reading right now is rendered entirely on the server."
        ]
      },
      {
        heading: "Challenges we faced",
        image: "/images/base64_practice.png",
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
    intro: "PDFs are notoriously complex and fragile to work with. Here is how we built a reliable client-side PDF manipulation tool.",
    takeaways: ["PDF-lib integration", "Memory management", "Client-side processing", "Cross-browser quirks"],
    content: [
      {
        heading: "Wrestling with an ancient format",
        image: "/images/base64_practice.png",
        paragraphs: [
          "The Portable Document Format (PDF) is over 30 years old. It is an incredibly powerful format, but under the hood, it is a chaotic mix of dictionaries, streams, and cross-reference tables.",
          "Building a reliable tool to parse, merge, and split these files without a backend server took extensive testing. A single corrupted byte can render the entire document unreadable."
        ]
      },
      {
        heading: "Memory is the enemy",
        image: "/images/base64_practice.png",
        paragraphs: [
          "When you process a 50MB PDF entirely in the browser, memory management becomes critical. If you try to hold the entire uncompressed file stream in memory, mobile browsers will simply crash the tab.",
          "We had to implement aggressive garbage collection hints and stream processing where possible to keep the memory footprint under control."
        ]
      },
      {
        heading: "The payoff",
        image: "/images/base64_practice.png",
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
    intro: "Developer tools are often cluttered, confusing, and overwhelming. We believe they can be beautiful.",
    takeaways: ["Minimalism as a feature", "Focus and clarity", "Aesthetics matter", "Reducing cognitive load"],
    content: [
      {
        heading: "Function over clutter",
        image: "/images/base64_practice.png",
        paragraphs: [
          "Take a look at the average JSON formatter or Base64 encoder online. They are typically crammed with dozens of checkboxes, huge blocks of text explaining what JSON is, and massive advertising banners.",
          "We designed our developer tools to do exactly what you need—encode, format, or validate—without bombarding you with visual noise."
        ]
      },
      {
        heading: "Command palettes and shortcuts",
        image: "/images/base64_practice.png",
        paragraphs: [
          "Instead of putting every feature on the screen at once, we hide advanced functionality behind intuitive keyboard shortcuts and command palettes (like the CMD+K menu).",
          "This allows power users to navigate at lightning speed, while keeping the interface clean and welcoming for beginners."
        ]
      },
      {
        heading: "Dark mode done right",
        image: "/images/base64_practice.png",
        paragraphs: [
          "Developers stare at screens all day. A good dark mode is not just a palette swap; it requires careful consideration of contrast ratios and eye strain.",
          "We spent weeks refining our colors, avoiding pure blacks and harsh whites in favor of deep slates and soft grays, creating an environment that feels relaxing to work in."
        ]
      }
    ]
  }
];

export const blogCategories = ["All", "Announcements", "Updates", "Engineering", "Design"];
"""

with open(file_path, "w", encoding="utf-8") as f:
    f.write(base_content + new_blogs_code)
print("Updated blogs array with rich content")
