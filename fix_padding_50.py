import os
import re

def process_file(path):
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # We replaced larger paddings with 10. Now we change 10 to 12 (48px, closest to 50px).
    # Need to be careful not to replace random 10s like z-10.
    # We only target py-10, pt-10, pb-10
    
    new_content = content
    new_content = re.sub(r"\bpy-10\b", "py-[50px]", new_content)
    new_content = re.sub(r"\bpb-10\b", "pb-[50px]", new_content)
    new_content = re.sub(r"\bpt-10\b", "pt-[50px]", new_content)
    
    # Also if there are any sm:py-10
    new_content = re.sub(r"\bsm:py-10\b", "sm:py-[50px]", new_content)
    new_content = re.sub(r"\bsm:pb-10\b", "sm:pb-[50px]", new_content)
    new_content = re.sub(r"\bsm:pt-10\b", "sm:pt-[50px]", new_content)
    
    # Actually wait, Tailwind uses `py-[50px]`. Let's just use that to be exactly 50px.
    
    if new_content != content:
        with open(path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Updated {path}")

for root, _, files in os.walk("src"):
    for file in files:
        if file.endswith(".tsx"):
            process_file(os.path.join(root, file))
print("Done padding update to 50px")
