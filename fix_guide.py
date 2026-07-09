import re
file_path = "src/app/learn/guide/[slug]/page.tsx"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace blogs with articles
content = content.replace("import { blogs, getCategory } from \"@/lib/data\";", "import { articles, getArticle, getCategory } from \"@/lib/data\";")
content = content.replace("blogs.map((a)", "articles.map((a)")
content = content.replace("blogs.find(b => b.slug === slug)", "getArticle(slug)")
content = content.replace("const idx = blogs.findIndex((a) => a.slug === slug);", "const idx = articles.findIndex((a) => a.slug === slug);")
content = content.replace("const upNext = blogs[(idx + 1) % blogs.length];", "const upNext = articles[(idx + 1) % articles.length];")
content = content.replace("basePath=\"/blog\"", "basePath=\"/learn/guide\"")
content = content.replace("theme-blog", "theme-learn")
content = content.replace("ArticlePage", "GuidePage")

# Now change the layout significantly. We will remove the large banner and gradient, and use a sidebar-like clean layout.
# We will replace the entire header and banner section with a sleek minimalist one.
header_pattern = re.compile(r"          {/\* Header \*/}.*?{/\* Banner \*/}", re.DOTALL)
banner_pattern = re.compile(r"          {/\* Banner \*/}.*?{/\* Main content \*/}", re.DOTALL)

new_header = """          {/* Header */}
          <header className="container-px mx-auto max-w-5xl py-12 text-center">
            <Reveal>
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] text-[var(--t-solid)] shadow-sm">
                <Icon name={article.icon} size={32} />
              </div>
              <h1 className="mt-8 font-[family-name:var(--font-display)] text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
                {article.title}
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)]">
                {article.excerpt}
              </p>
              <div className="mt-8 flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm text-[var(--text-faint)]">
                <span className="inline-flex items-center gap-1.5 font-medium text-[var(--t-solid)]">
                  <span className="theme-grad-br grid h-6 w-6 place-items-center rounded-full text-[9px] font-bold text-white shadow-sm">
                    {article.author.charAt(0)}
                  </span>
                  {article.author}
                </span>
                <span className="hidden sm:block">·</span>
                <span className="inline-flex items-center gap-1.5"><Icon name="clock" size={14} /> {article.readingTime}</span>
                <span className="hidden sm:block">·</span>
                <span>Updated {article.updated}</span>
              </div>
            </Reveal>
          </header>

          {/* Main content */}"""

content = header_pattern.sub("", content)
content = banner_pattern.sub(new_header, content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
print("Updated Guide Layout")
