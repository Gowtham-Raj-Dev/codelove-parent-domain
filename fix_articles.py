import re
with open("src/components/Articles.tsx", "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace("href={`/blog/${article.slug}`}", "href={`/learn/guide/${article.slug}`}")

with open("src/components/Articles.tsx", "w", encoding="utf-8") as f:
    f.write(content)
print("Fixed Articles component")
