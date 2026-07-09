import os
import re

def process_file(path):
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # We will look for <section className="..."> and modify only those classes
    # to avoid modifying arbitrary things, though class names are usually safe.
    # Actually, replacing all occurrences of these large padding classes is safest
    # EXCEPT pt-32, pt-36 which are often used in Heroes.
    # Let's replace:
    # py-16, py-20, py-24, py-28, py-32 -> py-10
    # pb-16, pb-20, pb-24, pb-28, pb-32 -> pb-10
    # pt-16, pt-20, pt-24, pt-28 (skip pt-32/36 for hero) -> pt-10
    
    new_content = content
    # Replace responsive patterns first so they don't get partially matched
    new_content = re.sub(r"py-(12|16|20|24|28|32)\s+sm:py-(16|20|24|28|32)", "py-10", new_content)
    new_content = re.sub(r"pb-(12|16|20|24|28|32)\s+sm:pb-(16|20|24|28|32)", "pb-10", new_content)
    new_content = re.sub(r"pt-(12|16|20|24|28|32)\s+sm:pt-(16|20|24|28|32)", "pt-10", new_content)
    
    # Then single patterns (exclude pt-32 and pt-36)
    new_content = re.sub(r"\bpy-(12|16|20|24|28|32)\b", "py-10", new_content)
    new_content = re.sub(r"\bpb-(12|16|20|24|28|32)\b", "pb-10", new_content)
    new_content = re.sub(r"\bpt-(12|16|20|24|28)\b", "pt-10", new_content)
    
    if new_content != content:
        with open(path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Updated {path}")

for root, _, files in os.walk("src"):
    for file in files:
        if file.endswith(".tsx"):
            process_file(os.path.join(root, file))
print("Done padding update 2")
