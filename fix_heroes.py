import os
import re

def fix_top_padding(path):
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # We look for the first `<section ` or `<main ` and ensure its `pt-X` is at least `pt-28` or `pt-32`
    # Let's just manually replace in the key hero files:
    
    if "Hero.tsx" in path:
        content = content.replace("pt-10 pb-10 sm:pt-32 sm:pb-10", "pt-28 pb-10 sm:pt-32 sm:pb-10")
    elif "app/learn/page.tsx" in path or "app\\learn\\page.tsx" in path:
        content = content.replace("pt-32 pb-10 sm:pt-36 sm:pb-10", "pt-32 pb-10 sm:pt-36 sm:pb-10") # Learn had pt-32 originally and I excluded pt-32 from replacement!
        content = content.replace("pt-10 pb-10 sm:pt-36 sm:pb-10", "pt-32 pb-10 sm:pt-36 sm:pb-10") # In case it was pt-24 -> pt-10
    elif "app/resources/page.tsx" in path or "app\\resources\\page.tsx" in path:
        content = content.replace("pt-10 pb-10 sm:pt-36 sm:pb-10", "pt-32 pb-10 sm:pt-36 sm:pb-10")
        
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

for root, _, files in os.walk("src"):
    for file in files:
        if file.endswith(".tsx"):
            fix_top_padding(os.path.join(root, file))

print("Fixed top padding for heroes")
