import re
file_path = "src/app/blog/[slug]/page.tsx"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace("import { articles, getArticle, getCategory } from \"@/lib/data\";", "import { blogs, getCategory } from \"@/lib/data\";")
content = content.replace("export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {\n  const { slug } = await params;\n  const article = getArticle(slug);", "export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {\n  const { slug } = await params;\n  const article = blogs.find(b => b.slug === slug);")
content = content.replace("const idx = articles.findIndex((a) => a.slug === slug);\n  const upNext = articles[(idx + 1) % articles.length];", "const idx = blogs.findIndex((a) => a.slug === slug);\n  const upNext = blogs[(idx + 1) % blogs.length];")
content = content.replace("<ArticleCard article={upNext} />", "<ArticleCard article={upNext} basePath=\"/blog\" />")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
print("Fixed blog page")
