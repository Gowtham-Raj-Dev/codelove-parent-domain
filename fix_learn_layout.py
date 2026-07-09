import re
with open("src/app/learn/page.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Increase font size
content = content.replace("text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl", "text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl")

# Fix buttons
buttons_regex = re.compile(r"<div className=\"mt-8 flex flex-wrap items-center justify-center gap-3\">.*?</div>", re.DOTALL)
new_buttons = """<div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#categories"
                  className="theme-grad group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_50px_-18px_var(--t-solid)] transition hover:-translate-y-0.5 hover:brightness-110"
                >
                  Browse topics
                  <Icon name="arrowRight" size={16} className="transition group-hover:translate-x-0.5" />
                </a>
              </div>"""
content = buttons_regex.sub(new_buttons, content)

# Remove "All articles" links that point to /blog
link_regex = re.compile(r"<Link href=\"/blog\" className=\"inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-\[var\(--t-solid\)\] transition hover:gap-2.5\">\s*.*?<Icon name=\"arrowRight\" size=\{15\} />\s*</Link>", re.DOTALL)
content = link_regex.sub("", content)

with open("src/app/learn/page.tsx", "w", encoding="utf-8") as f:
    f.write(content)
print("Updated learn page layout")
