import urllib.request
import re

url = "https://skinmedclinic.ru/doctor"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
except Exception as e:
    # fallback to local file
    with open("e:/SkinMed2/doctor_page.html", "r", encoding="utf-8") as f:
        html = f.read()

# Tilda blocks for cards are usually separated by t-item, t848__col, t-card or similar.
# In Tilda's team blocks (like t303, t848, etc.), each person usually has their block inside <div class="t-item ...">
# Let's import HTML parser
try:
    from bs4 import BeautifulSoup
    soup = BeautifulSoup(html, 'html.parser')
    
    results = []
    # common Tilda item wrappers
    for card in soup.find_all(['div'], class_=re.compile(r't-item|t_col|t-card|t-col_')):
        name_div = card.find('div', class_=re.compile(r't-name', re.I))
        if not name_div:
            name_div = card.find('div', field=re.compile(r'title', re.I))
            
        if name_div:
            name = name_div.get_text(separator=" ").strip()
            # check if it looks like a full name
            if len(name.split()) >= 2 and sum(1 for c in name if c.isupper()) >= 2:
                img_url = ""
                # try img tag
                img_tag = card.find('img', {'data-original': True})
                if img_tag:
                    img_url = img_tag['data-original']
                else:
                    # try bgimg
                    bg_div = card.find('div', class_=re.compile(r't-bgimg'))
                    if bg_div and bg_div.has_attr('data-original'):
                        img_url = bg_div['data-original']
                    elif bg_div and bg_div.has_attr('style'):
                        m = re.search(r"url\(['\"]?(.*?)['\"]?\)", bg_div['style'])
                        if m: img_url = m.group(1)
                
                if img_url:
                    results.append({"name": " ".join(name.split()), "img": img_url})

    import json
    # Because Tilda can nest t-col inside t-col, let's remove exact duplicates
    unique_doctors = {}
    for r in results:
        unique_doctors[r['name']] = r['img']
        
    for name, img in unique_doctors.items():
        print(f"Name: {name} | Image: {img}")
except ImportError:
    print("BeautifulSoup not installed")
