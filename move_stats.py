import re
file_path = "src/lib/data.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Extract stats block
stats_pattern = re.compile(r"export const stats: Stat\[\] = \[\n  \{ value: products\.length, suffix: \"\+\", label: \"Products & tools\" \},\n  \{ value: articles\.length \+ blogs\.length, suffix: \"\+\", label: \"Guides & articles\" \},\n  \{ value: 10, suffix: \"K\+\", label: \"Monthly users\" \},\n  \{ value: 150, suffix: \"K\+\", label: \"Tasks completed\" \},\n  \{ value: 25, suffix: \"\+\", label: \"Countries reached\" \},\n\];")
match = stats_pattern.search(content)

if match:
    stats_block = match.group(0)
    # Remove from original location
    content = content.replace(stats_block, "")
    # Add to the very end of the file
    content += "\n\n/* ------------------------------------------------------------------ */\n/*  Stats                                                              */\n/* ------------------------------------------------------------------ */\n"
    content += stats_block + "\n"
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Moved stats to end of file")
else:
    print("Could not find stats block")
