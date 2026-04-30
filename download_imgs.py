import urllib.request

urls = {
    "kachyurina.jpg": "https://static.tildacdn.com/tild3365-6637-4933-b764-356338343634/-.jpg",
    "emelina.jpg": "https://static.tildacdn.com/tild3631-6265-4433-a538-633138653535/1.jpg",
    "glubokaya.jpg": "https://static.tildacdn.com/tild3739-3061-4133-a664-306666663762/photo.jpg",
    "muhametzanova.jpg": "https://static.tildacdn.com/tild3464-3535-4664-a333-633661643164/2pg.jpg",
    "shitov.jpg": "https://static.tildacdn.com/tild6638-3139-4161-b730-326432666133/-.jpg",
    "vorobyova.jpg": "https://static.tildacdn.com/tild3631-3435-4565-a438-333735653936/-.jpg",
    "nikiforova.jpg": "https://static.tildacdn.com/tild6465-3064-4532-a331-626262376234/15.jpg",
    "safyanova.jpg": "https://static.tildacdn.com/tild6165-3663-4064-a533-326464303034/--3.jpg"
}

req_headers = {'User-Agent': 'Mozilla/5.0'}

for name, url in urls.items():
    print(f"Downloading {name} from {url}...")
    try:
        req = urllib.request.Request(url, headers=req_headers)
        with urllib.request.urlopen(req) as response:
            with open(f"e:/SkinMed2/public/images/doctors/{name}", "wb") as f:
                f.write(response.read())
        print(f"Success: {name}")
    except Exception as e:
        print(f"Failed to download {name}: {e}")
