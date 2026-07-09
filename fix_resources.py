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
    },"""

content = content.replace(docs_block, "")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
print("Removed docs block from resourceHub")
