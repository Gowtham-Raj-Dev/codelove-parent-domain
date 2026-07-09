import re
file_path = "src/lib/data.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Append a small blogs array at the bottom of data.ts
blogs_code = """
export const blogs: Article[] = [
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
    image: "/images/aivideos.png",
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
    image: "/images/videocomp_spatial.png",
    intro: "We are excited to announce a new suite of video tools.",
    takeaways: ["Video to GIF", "Video to Frame"],
    content: [
      {
        heading: "Browser-based video editing",
        image: "/images/base64_practice.png",
        paragraphs: [
          "Our new video tools run completely in your browser, meaning no uploads and complete privacy."
        ]
      }
    ]
  }
];

export const blogCategories = ["All", "Announcements", "Updates"];
"""

if "export const blogs: Article[]" not in content:
    with open(file_path, "a", encoding="utf-8") as f:
        f.write(blogs_code)
print("Added blogs array")
