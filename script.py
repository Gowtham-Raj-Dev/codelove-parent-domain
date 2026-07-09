import re

def add_demo_images():
    file_path = "src/lib/data.ts"
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # We will use /images/base64_practice.png as the beautiful demo image
    demo_image = "/images/base64_practice.png"
    
    def replacement(match):
        heading_line = match.group(1)
        next_text = match.group(2)
        
        # If it does not already have an image
        if "image:" not in next_text[:30]:
            indent = re.match(r'^(\s*)', heading_line).group(1)
            image_line = f'{indent}image: "{demo_image}",\n'
            return f"{heading_line}\n{image_line}{next_text}"
        return match.group(0)

    # regex to find heading line and capture it and the following text
    pattern = re.compile(r'(^\s*heading:\s*"[^"]+",)\n(\s*)', re.MULTILINE)
    
    new_content = pattern.sub(replacement, content)
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)
        
    print("Added demo images")

add_demo_images()
