import re

file_path = "src/lib/data.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Fix duplicates: we will find all blocks between { and } and if they have multiple image: lines, remove the one that is the demo image
def fix_duplicates(match):
    block = match.group(0)
    lines = block.split("\n")
    image_lines = [i for i, line in enumerate(lines) if "image:" in line]
    if len(image_lines) > 1:
        # keep the first one, remove others if they are the demo one, or just keep the first one
        # actually, just keep the last one if it is not demo, or just first one
        # To be safe, let's just remove any line that has "base64_practice.png" if there are >1 image lines
        new_lines = []
        has_kept_image = False
        for line in lines:
            if "image:" in line:
                if has_kept_image:
                    continue # skip duplicate
                has_kept_image = True
            new_lines.append(line)
        return "\n".join(new_lines)
    return block

# regex to match an object block loosely inside content arrays
content = re.sub(r"\{[^{]*?heading:.*?\}", fix_duplicates, content, flags=re.DOTALL)

# Fix LegalSection: remove image: from anything after export const legal = [
parts = content.split("export const legal")
if len(parts) == 2:
    legal_part = parts[1]
    legal_part = re.sub(r"^\s*image:\s*\".*?\",\n", "", legal_part, flags=re.MULTILINE)
    content = parts[0] + "export const legal" + legal_part

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
print("Fixed data.ts")
