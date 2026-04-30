import re
with open("e:/SkinMed2/doctor_page.html", "r", encoding="utf-8") as f:
    html = f.read()

# Replace any HTML entities or tags for cleaner searching
words = ["Емелина", "Качурина", "Глубокая", "Шитов", "Никифорова"]

for w in words:
    print("---------------------------------")
    print(f"SEARCHING FOR: {w}")
    for m in re.finditer(w, html):
        start = max(0, m.start() - 300)
        end = min(len(html), m.start() + 500)
        chunk = html[start:end]
        # find img
        imgs = re.findall(r'(https://static\.tildacdn\.com/[^\'"\)\s]+\.jpg)', chunk)
        if imgs:
            print(f"Match found! Nearby images: {list(set(imgs))}")
        else:
            print("Match found, but no images nearby.")
