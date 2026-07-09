import re
file_path = "src/app/blog/[slug]/page.tsx"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace("const related = articles", "const related = blogs")
content = content.replace("concat(articles.filter", "concat(blogs.filter")
content = content.replace("<ArticleCard article={a} />", "<ArticleCard article={a} basePath=\"/blog\" />")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
print("Fixed blog page 2")
