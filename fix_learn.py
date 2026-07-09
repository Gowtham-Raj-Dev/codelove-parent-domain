import re

def update_file(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Change ArticleCard usage
    content = content.replace("<ArticleCard article={a} />", "<ArticleCard article={a} basePath=\"/learn/guide\" />")
    content = content.replace("<ArticleCard article={upNext} />", "<ArticleCard article={upNext} basePath=\"/learn/guide\" />")
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

update_file("src/app/learn/page.tsx")
update_file("src/app/learn/[category]/page.tsx")
print("Fixed learn pages")
