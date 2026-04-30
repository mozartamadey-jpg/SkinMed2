import re

with open("e:/SkinMed2/doctor_page.html", "r", encoding="utf-8") as f:
    html = f.read()

# We only want blocks that represent a person's card.
# In Tilda, team members are often in blocks like t848, t303, t794
# Let's find all pairs of (Image, Name) within a small distance of each other.
# A robust way: find every instance of a name, and then look for the NEAREST preceding or succeeding image tag or background-image.

names_to_find = [
    "Качурина Екатерина",
    "Валеева Лилия",
    "Мусина Динара",
    "Багаутдинов Адель",
    "Давлетшина Резеда",
    "Сафьянова Айгуль",
    "Шитов Денис",
    "Глубокая Оксана",
    "Емелина Виктория",
    "Никифорова Екатерина",
    "Воробьёва Лилия",
    "Мухаметзянова Алсу",
    "Евдокимова Наиля"
]

results = {}

for name in names_to_find:
    # Find index of name
    idx = html.find(name)
    if idx == -1:
        print(f"Could not find {name}")
        continue
    
    # Extract a chunk of HTML around the name (1500 chars before and 500 after should cover the wrapping t-item)
    start = max(0, idx - 1500)
    end = min(len(html), idx + 500)
    chunk = html[start:end]
    
    # We want to skip hero section. Tilda blocks have sequential IDs or types.
    # We look for all image URLs in this chunk
    images = []
    
    # data-original="URL"
    for m in re.finditer(r'data-original="([^"]+)"', chunk):
        images.append((m.start(), m.group(1)))
        
    # src="URL" where url has .jpg or .png
    for m in re.finditer(r'src="([^"]+\.(?:jpg|png))"', chunk):
        images.append((m.start(), m.group(1)))
        
    # background-image: url(...)
    for m in re.finditer(r'url\([\'"]?([^\'")]+\.(?:jpg|png))[\'"]?\)', chunk):
        images.append((m.start(), m.group(1)))
        
    if images:
        # Sort by distance to the name which is at relative position (idx - start)
        name_pos = idx - start
        closest_img = sorted(images, key=lambda x: abs(x[0] - name_pos))[0][1]
        results[name] = closest_img
    else:
        results[name] = "NOT FOUND"

for n, url in results.items():
    print(f"{n} : {url}")
