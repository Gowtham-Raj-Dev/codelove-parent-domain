import re
file_path = "src/app/resources/page.tsx"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Restore the standard grid (no custom image card)
old_grid = """          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resourceHub.slice(0, 2).map((r, i) => (
              <Reveal key={r.title} delay={(i % 3) * 70}>
                <Link
                  href={r.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
                >
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${r.gradient} text-white shadow-[var(--shadow-glow)] transition group-hover:scale-110`}
                  >
                    <Icon name={r.icon} size={22} />
                  </span>
                  <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-bold tracking-tight">
                    {r.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">{r.blurb}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition group-hover:gap-2.5">
                    {r.cta} <Icon name="arrowRight" size={15} />
                  </span>
                </Link>
              </Reveal>
            ))}

            <Reveal delay={140}>
              <div className="group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-2xl border border-[var(--surface-border)] shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]">
                <img src="/images/base64_practice.png" alt="Learn, Build, Ship" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-[var(--text)]">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight">Learn, Build, Ship</h3>
                  <p className="mt-2 text-sm text-[var(--text-muted)]">Everything you need to master modern web development.</p>
                </div>
              </div>
            </Reveal>

            {resourceHub.slice(2).map((r, i) => (
              <Reveal key={r.title} delay={((i + 3) % 3) * 70}>
                <Link
                  href={r.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
                >
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${r.gradient} text-white shadow-[var(--shadow-glow)] transition group-hover:scale-110`}
                  >
                    <Icon name={r.icon} size={22} />
                  </span>
                  <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-bold tracking-tight">
                    {r.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">{r.blurb}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition group-hover:gap-2.5">
                    {r.cta} <Icon name="arrowRight" size={15} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>"""

new_grid = """          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resourceHub.map((r, i) => (
              <Reveal key={r.title} delay={(i % 3) * 70}>
                <Link
                  href={r.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
                >
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${r.gradient} text-white shadow-[var(--shadow-glow)] transition group-hover:scale-110`}
                  >
                    <Icon name={r.icon} size={22} />
                  </span>
                  <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-bold tracking-tight">
                    {r.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">{r.blurb}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition group-hover:gap-2.5">
                    {r.cta} <Icon name="arrowRight" size={15} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>"""

if old_grid in content:
    content = content.replace(old_grid, new_grid)

# Now completely remove the DOCUMENTATION GUIDES section and replace with an image banner
docs_section_pattern = re.compile(r"\{\/\* ============================================================ \*\/\}\n\s*\{\/\*  DOCUMENTATION GUIDES.*?(?=\{\/\* ============================================================ \*\/\}\n\s*\{\/\*  FEATURED READING)", re.DOTALL)

image_banner = """{/* ============================================================ */}
        {/*  IMAGE BANNER                                                */}
        {/* ============================================================ */}
        <section className="container-px mx-auto max-w-7xl pb-20 sm:pb-24">
          <Reveal>
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl border border-[var(--surface-border)] shadow-[var(--shadow-soft)]">
              <img src="/images/base64_practice.png" alt="Resources" className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </Reveal>
        </section>

        """

content = docs_section_pattern.sub(image_banner, content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
print("Removed docs section and restored grid")
