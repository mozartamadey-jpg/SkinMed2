import urllib.request
import re
import os

urls = [
    "https://skinmedclinic.ru/uslugi/apparatnaya-kosmetologiya",
    "https://skinmedclinic.ru/uslugi/apparatnaya-kosmetologiya/SMAS-lifting-Ulthera",
    "https://skinmedclinic.ru/uslugi/apparatnaya-kosmetologiya/SMAS-lifting-Bizon",
    "https://skinmedclinic.ru/uslugi/apparatnaya-kosmetologiya/rf-lifting-vivache",
    "https://skinmedclinic.ru/uslugi/apparatnaya-kosmetologiya/oligio",
    "https://skinmedclinic.ru/uslugi/apparatnaya-kosmetologiya/ultrazvukovaya-chistka-litsa",
    "https://skinmedclinic.ru/uslugi/apparatnaya-kosmetologiya/fotoomolozhenie"
]

output_dir = "e:/SkinMed2/texts/parsed/hardware"
os.makedirs(output_dir, exist_ok=True)

req_headers = {'User-Agent': 'Mozilla/5.0'}

def clean_html(html):
    # Remove script and style elements
    text = re.sub(r'<(script|style)[^>]*>[\s\S]*?</\1>', '', html, flags=re.IGNORECASE)
    # Extract text from tags
    text = re.sub(r'<[^>]+>', ' ', text)
    # Clean up whitespace
    text = re.sub(r'\s+', ' ', text).strip()
    return text

for url in urls:
    name = url.split("/")[-1]
    if name == "apparatnaya-kosmetologiya":
        name = "main"
        
    print(f"Fetching {name}...")
    try:
        req = urllib.request.Request(url, headers=req_headers)
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8')
            clean_text = clean_html(html)
            
            with open(f"{output_dir}/{name}.txt", "w", encoding="utf-8") as f:
                f.write(clean_text)
            print(f"Saved {name}.txt ({len(clean_text)} chars)")
    except Exception as e:
        print(f"Failed to fetch {name}: {e}")
