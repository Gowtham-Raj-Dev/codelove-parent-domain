import re
file_path = "src/lib/data.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

old_stats = """export const stats: Stat[] = [
  { value: products.length, suffix: "+", label: "Products & tools" },
  { value: articles.length + blogs.length, suffix: "+", label: "Guides & articles" },
  { value: 10, suffix: "K+", label: "Monthly users" },
  { value: 150, suffix: "K+", label: "Tasks completed" },
  { value: 25, suffix: "+", label: "Countries reached" },
];"""

new_stats = """export const stats: Stat[] = [
  { get value() { return products.length; }, suffix: "+", label: "Products & tools" },
  { get value() { return articles.length + blogs.length; }, suffix: "+", label: "Guides & articles" },
  { value: 10, suffix: "K+", label: "Monthly users" },
  { value: 150, suffix: "K+", label: "Tasks completed" },
  { value: 25, suffix: "+", label: "Countries reached" },
];"""

if old_stats in content:
    content = content.replace(old_stats, new_stats)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
print("Fixed stats with getters")
