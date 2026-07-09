import re
file_path = "src/lib/data.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

old_stats = """export const stats: Stat[] = [
  { value: 12, suffix: "+", label: "Products & platforms" },
  { value: 240, suffix: "+", label: "Articles & tutorials" },
  { value: 1.8, suffix: "M+", label: "Monthly users" },
  { value: 46, suffix: "M+", label: "Tasks completed" },
  { value: 190, suffix: "+", label: "Countries reached" },
];"""

new_stats = """export const stats: Stat[] = [
  { value: products.length, suffix: "+", label: "Products & tools" },
  { value: articles.length + blogs.length, suffix: "+", label: "Guides & articles" },
  { value: 10, suffix: "K+", label: "Monthly users" },
  { value: 150, suffix: "K+", label: "Tasks completed" },
  { value: 25, suffix: "+", label: "Countries reached" },
];"""

if old_stats in content:
    content = content.replace(old_stats, new_stats)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
print("Updated stats")
