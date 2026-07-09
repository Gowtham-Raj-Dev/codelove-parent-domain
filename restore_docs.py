import re
file_path = "src/lib/data.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

docs_block = """    {
      icon: "layers",
      title: "Documentation",
      blurb: "Clear, step-by-step guides that walk you through each tool — from your first click to advanced workflows.",
      href: "#documentation",
      cta: "View guides",
      gradient: "from-violet-500 to-purple-600",
    },
"""

# Insert it back after "Blog & Articles" block
blog_block = """    {
      icon: "fileText",
      title: "Blog & Articles",
      blurb: "In-depth reads, product deep-dives and how-tos published every week. Stay sharp with practical, no-fluff writing.",
      href: "/blog",
      cta: "Read the blog",
      gradient: "from-blue-500 to-indigo-600",
    },"""

if blog_block in content:
    content = content.replace(blog_block, blog_block + "\n" + docs_block)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
print("Restored docs card to resourceHub")
