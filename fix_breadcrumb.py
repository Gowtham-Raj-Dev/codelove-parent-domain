import re
file_path = "src/app/learn/guide/[slug]/page.tsx"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace <Link href="/blog" className="transition hover:text-[var(--text)]">Blog</Link>
content = content.replace('<Link href="/blog" className="transition hover:text-[var(--text)]">Blog</Link>', '<Link href="/learn" className="transition hover:text-[var(--text)]">Learning Center</Link>')

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
print("Fixed breadcrumb")
