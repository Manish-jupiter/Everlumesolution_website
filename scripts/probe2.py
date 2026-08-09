import os, re
BASE = r'c:\Manish\Everlunme\src\app\who-we-serve'
files = [
    BASE + r'\retail\retail.ts',
    BASE + r'\banking\banking.ts',
    BASE + r'\healthcare\clinical-digital-support\clinical-digital-support.ts',
    BASE + r'\healthcare\clinical-operational-workflow\clinical-operational-workflow.ts',
    BASE + r'\healthcare\human-in-the-loop\human-in-the-loop.ts',
    BASE + r'\healthcare\medical-coding\medical-coding.ts',
    BASE + r'\healthcare\patient-scheduling\patient-scheduling.ts',
    BASE + r'\healthcare\prior-authorization\prior-authorization.ts',
    BASE + r'\healthcare\remote-patient-monitoring\remote-patient-monitoring.ts',
]
seen = {}
for f in files:
    content = open(f, encoding='utf-8').read()
    pattern = r'class="[^"]*(?:float-icon|value-card__icon)[^"]*">([^<]+)<'
    matches = re.findall(pattern, content)
    for m in matches:
        if m not in seen:
            seen[m] = True
            hex_cps = ' '.join(f'U+{ord(c):04X}' for c in m)
            print(f'{repr(m):30s} => {hex_cps}')
