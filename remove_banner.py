import re
file_path = "src/app/resources/page.tsx"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

banner_pattern = re.compile(r"\{\/\* ============================================================ \*\/\}\n\s*\{\/\*  IMAGE BANNER                                                \*\/\}\n\s*\{\/\* ============================================================ \*\/\}\n\s*<section className=\"container-px mx-auto max-w-7xl pb-20 sm:pb-24\">\n\s*<Reveal>\n\s*<div className=\"relative aspect-\[21/9\] w-full overflow-hidden rounded-3xl border border-\[var\(--surface-border\)\] shadow-\[var\(--shadow-soft\)\]\">\n\s*<img src=\"/images/base64_practice\.png\" alt=\"Resources\" className=\"absolute inset-0 h-full w-full object-cover\" />\n\s*</div>\n\s*</Reveal>\n\s*</section>", re.DOTALL)

content = banner_pattern.sub("", content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
print("Removed large image banner")
