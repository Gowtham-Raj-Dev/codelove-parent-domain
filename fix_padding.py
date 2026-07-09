import os
import re

replacements = {
    r"py-12 sm:py-16": "py-10",
    r"py-16 sm:py-20": "py-10",
    r"py-20 sm:py-24": "py-10",
    r"py-20 sm:py-28": "py-10",
    r"py-24 sm:py-32": "py-10",
    r"pb-16 sm:pb-20": "pb-10",
    r"pb-20 sm:pb-24": "pb-10",
    r"pb-24 sm:pb-28": "pb-10",
    r"pb-24 sm:pb-32": "pb-10",
    r"pt-16 sm:pt-20": "pt-10",
    r"pt-20 sm:pt-24": "pt-10",
    r"pt-24 sm:pt-32": "pt-10",
}

for root, _, files in os.walk("src"):
    for file in files:
        if file.endswith(".tsx"):
            path = os.path.join(root, file)
            with open(path, "r", encoding="utf-8") as f:
                content = f.read()
            
            new_content = content
            for old, new in replacements.items():
                new_content = re.sub(old, new, new_content)
            
            if new_content != content:
                with open(path, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Updated {path}")
print("Done padding update")
