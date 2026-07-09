import re
file_path = "src/lib/data.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# The empty object might be represented as `  {},\n` or `  {\n  },\n`
content = re.sub(r"\s*\{\s*\},", "", content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
print("Removed empty object")
