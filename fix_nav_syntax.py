import re
file_path = "src/components/Navbar.tsx"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace("className=\\\"flex lg:flex-1\\\"", "className=\"flex lg:flex-1\"")
content = content.replace("className=\\\"flex items-center justify-end gap-2 lg:flex-1\\\"", "className=\"flex items-center justify-end gap-2 lg:flex-1\"")

# Restore the accidentally deleted Nav
nav_block = """            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 lg:flex">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-lg px-3.5 py-2 text-sm font-medium text-[var(--text-muted)] transition hover:bg-[var(--surface)] hover:text-[var(--text)]"
                >
                  {l.label}
                </Link>
              ))}
            </nav>"""

# Find where to put it back. The multi-replace left `                  {l.label}\n                </Link>\n              ))}\n            </nav>` which means it deleted the start of the block.
content = re.sub(r"\s*\{l\.label\}\s*</Link>\s*\)\)\}\s*</nav>", "", content)
# Add it before {/* Actions */}
content = content.replace("            {/* Actions */}", nav_block + "\n\n            {/* Actions */}")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
print("Fixed syntax")
