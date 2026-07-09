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
    readingTime: "3 min read",
    author: "Gowtham",
    published: "Jul 8, 2026",
    updated: "Jul 8, 2026",
    gradient: "from-blue-500 to-indigo-600",
    icon: "sparkles",
    featured: true,
    intro: "Welcome to the all-new CodeLove platform! This is our first official blog post on the new infrastructure.",
    takeaways: ["Faster performance", "New Learning Center", "Better video tools"],
    content: [
      {
        heading: "A New Beginning",
        image: "/images/base64_practice.png",
        paragraphs: [
          "We spent the last few months listening to feedback and completely rewriting the platform from the ground up.",
          "This new blog section will be used for platform updates, new tool releases, and general announcements. For technical tutorials and guides, please visit the Learning Center!"
        ]
      }
    ]
  },
  {
    slug: "july-2026-update",
    title: "July 2026 Update: New Video Tools",
    excerpt: "This month we are rolling out new browser-based video utilities for creators.",
    category: "Updates",
    readingTime: "2 min read",
    author: "Gowtham",
    published: "Jul 1, 2026",
    updated: "Jul 1, 2026",
    gradient: "from-rose-500 to-pink-600",
    icon: "film",
    featured: false,
    intro: "We are excited to announce a new suite of video tools.",
    takeaways: ["Video to GIF", "Video to Frame"],
    content: [
      {
        heading: "Browser-based video editing",
        image: "/images/base64_practice.png",
        paragraphs: [
          "Our new video tools run completely in your browser, meaning no uploads and complete privacy. Convert videos to GIFs instantly without waiting for cloud rendering."
        ]
      }
    ]
  },
  {
    slug: "why-local-first-development",
    title: "Why We Chose a Local-First Architecture",
    excerpt: "How running utilities directly in the browser protects user privacy and reduces server costs.",
    category: "Engineering",
    readingTime: "5 min read",
    author: "Gowtham",
    published: "Jun 28, 2026",
    updated: "Jun 28, 2026",
    gradient: "from-emerald-500 to-teal-600",
    icon: "terminal",
    featured: true,
    intro: "Building web tools has changed. With the power of WebAssembly, we no longer need to send user data to servers.",
    takeaways: ["Privacy first", "Zero latency", "WebAssembly power"],
    content: [
      {
        heading: "The old way vs the new way",
        image: "/images/base64_practice.png",
        paragraphs: [
          "Traditionally, processing a PDF or compressing a video required uploading the file to a cloud server. Not anymore.",
          "By running these operations locally on your device, your sensitive documents and media never leave your browser."
        ]
      },
      {
        heading: "The WebAssembly revolution",
        image: "/images/base64_practice.png",
        paragraphs: [
          "WebAssembly (WASM) allows us to run high-performance C++ and Rust code directly in the browser, matching native speeds."
        ]
      }
    ]
  },
  {
    slug: "designing-for-creators",
    title: "Designing Tools for the Creator Economy",
    excerpt: "The UI and UX principles behind our Link in Bio and Social Downloader tools.",
    category: "Design",
    readingTime: "4 min read",
    author: "Gowtham",
    published: "Jun 15, 2026",
    updated: "Jun 16, 2026",
    gradient: "from-fuchsia-500 to-rose-600",
    icon: "palette",
    featured: false,
    intro: "Creators need tools that get out of the way. Here is how we designed our creator suite.",
    takeaways: ["Mobile first", "Minimal friction", "Bold aesthetics"],
    content: [
      {
        heading: "Speed is a feature",
        image: "/images/base64_practice.png",
        paragraphs: [
          "When a creator needs to download a reel or update their bio link, they want it done in seconds. We stripped away all unnecessary clicks."
        ]
      }
    ]
  },
  {
    slug: "future-of-ai-tools",
    title: "The Future of AI Tools on CodeLove",
    excerpt: "A sneak peek into the AI-powered background removal and generation tools coming later this year.",
    category: "Updates",
    readingTime: "3 min read",
    author: "Gowtham",
    published: "Jun 5, 2026",
    updated: "Jun 5, 2026",
    gradient: "from-sky-500 to-cyan-600",
    icon: "sparkles",
    featured: false,
    intro: "AI is reshaping how we build tools. We are integrating on-device AI to keep your data private.",
    takeaways: ["On-device AI", "Background removal", "Privacy focused"],
    content: [
      {
        heading: "AI without the cloud",
        image: "/images/base64_practice.png",
        paragraphs: [
          "Using WebGL and WebGPU, we are bringing complex AI models directly to your browser for instant image processing."
        ]
      }
    ]
  },
  {
    slug: "mastering-react-server-components",
    title: "Mastering React Server Components",
    excerpt: "How we migrated our codebase to App Router and saw a 40% performance boost.",
    category: "Engineering",
    readingTime: "6 min read",
    author: "Gowtham",
    published: "May 20, 2026",
    updated: "May 22, 2026",
    gradient: "from-slate-600 to-slate-800",
    icon: "terminal",
    featured: false,
    intro: "The transition to Next.js App Router was not easy, but the performance gains were worth it.",
    takeaways: ["Less client JS", "Faster routing", "SEO improvements"],
    content: [
      {
        heading: "Cutting the bundle size",
        image: "/images/base64_practice.png",
        paragraphs: [
          "By pushing UI logic to the server, we reduced our client-side JavaScript bundle by almost half, resulting in blazing fast load times."
        ]
      }
    ]
  },
  {
    slug: "building-the-ultimate-pdf-toolkit",
    title: "Building the Ultimate PDF Toolkit",
    excerpt: "The challenges of parsing and merging PDFs entirely in the browser.",
    category: "Engineering",
    readingTime: "4 min read",
    author: "Gowtham",
    published: "May 10, 2026",
    updated: "May 10, 2026",
    gradient: "from-orange-500 to-red-600",
    icon: "fileText",
    featured: false,
    intro: "PDFs are notoriously complex to work with. Here is how we built a reliable client-side PDF tool.",
    takeaways: ["PDF-lib", "Memory management", "Client-side processing"],
    content: [
      {
        heading: "Wrestling with PDF structures",
        image: "/images/base64_practice.png",
        paragraphs: [
          "PDF is an old format. Building a reliable tool to parse, merge, and split them without a backend server took extensive testing and memory optimization."
        ]
      }
    ]
  },
  {
    slug: "the-importance-of-clean-ui",
    title: "The Importance of Clean UI in Dev Tools",
    excerpt: "Why developer utilities do not have to look like airplane cockpits.",
    category: "Design",
    readingTime: "3 min read",
    author: "Gowtham",
    published: "Apr 28, 2026",
    updated: "Apr 28, 2026",
    gradient: "from-amber-500 to-orange-600",
    icon: "layout",
    featured: false,
    intro: "Developer tools are often cluttered and confusing. We believe they can be beautiful.",
    takeaways: ["Minimalism", "Focus", "Aesthetics matter"],
    content: [
      {
        heading: "Function over clutter",
        image: "/images/base64_practice.png",
        paragraphs: [
          "We designed our developer tools to do exactly what you need—encode, format, or validate—without bombarding you with hundreds of toggles you will never use."
        ]
      }
    ]
  }
];

export const blogCategories = ["All", "Announcements", "Updates", "Engineering", "Design"];
"""

with open(file_path, "w", encoding="utf-8") as f:
    f.write(base_content + new_blogs_code)
print("Updated blogs array")
