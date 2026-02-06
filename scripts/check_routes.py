#!/usr/bin/env python3
import re
from pathlib import Path
import subprocess

app = Path('src/app/App.tsx').read_text()
# extract the routes object
m = re.search(r"const routes:[\s\S]*?=\s*\{([\s\S]*?)\};", app)
if not m:
    print('Could not find routes object')
    raise SystemExit(1)

body = m.group(1)
# find keys like '/path':
keys = re.findall(r"['\"](/[^'\"]*)['\"]\s*:\s*[^,\n]+", body)
keys = sorted(set(keys))
print(f'Found {len(keys)} routes')

for k in keys:
    url = f'http://localhost:4174{k}'
    try:
        r = subprocess.run(['curl','-s','-o','/dev/null','-w','%{http_code}',url], capture_output=True, text=True, timeout=10)
        code = r.stdout.strip()
    except Exception as e:
        code = f'ERR: {e}'
    # check if route is referenced in source (linked)
    found = False
    for p in Path('src').rglob('*.tsx'):
        if k in p.read_text():
            found = True
            break
    link_state = 'linked' if found else 'unlinked'
    print(f'{k} -> {code} ({link_state})')
