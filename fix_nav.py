import re
file_path = "src/components/Navbar.tsx"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Wrap logo in flex lg:flex-1
logo_search = r"(<Link href=\"/\" className=\"flex items-center gap-2\.5\">.*?</span>\n\s*</Link>)"
logo_replacement = r"<div className=\"flex lg:flex-1\">\n              \1\n            </div>"
content = re.sub(logo_search, logo_replacement, content, flags=re.DOTALL)

# 2. Add flex lg:flex-1 justify-end to actions container
actions_search = r"<div className=\"flex items-center gap-2\">"
actions_replacement = r"<div className=\"flex items-center justify-end gap-2 lg:flex-1\">"
content = content.replace(actions_search, actions_replacement)

# 3. Simplify the Search button
search_buttons_search = r"<button\s+onClick=\{\(\) => setSearch\(true\)\}\s+aria-label=\"Search\"\s+className=\"hidden items-center gap-2 rounded-xl border border-\[var\(--surface-border\)\] bg-\[var\(--surface\)\] px-3 py-2 text-sm text-\[var\(--text-faint\)\] transition hover:text-\[var\(--text\)\] sm:flex\"\s*>\s*<Icon name=\"search\" size=\{16\} />\s*<span className=\"hidden md:block\">Search</span>\s*<kbd className=\"hidden rounded border border-\[var\(--surface-border\)\] px-1\.5 text-\[10px\] md:block\">\s*⌘K\s*</kbd>\s*</button>\s*<button\s+onClick=\{\(\) => setSearch\(true\)\}\s+aria-label=\"Search\"\s+className=\"grid h-10 w-10 place-items-center rounded-xl border border-\[var\(--surface-border\)\] bg-\[var\(--surface\)\] text-\[var\(--text-muted\)\] sm:hidden\"\s*>\s*<Icon name=\"search\" size=\{18\} />\s*</button>"

new_search_button = """<button
                onClick={() => setSearch(true)}
                aria-label="Search"
                className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] text-[var(--text-muted)] transition hover:text-[var(--text)] hover:shadow-sm"
              >
                <Icon name="search" size={18} />
              </button>"""

content = re.sub(search_buttons_search, new_search_button, content, flags=re.DOTALL)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
print("Updated Navbar")
