import os, re

BASE = r'c:\Manish\Everlunme\src\app\who-we-serve'
files = [
    os.path.join(BASE, 'retail', 'retail.ts'),
    os.path.join(BASE, 'banking', 'banking.ts'),
    os.path.join(BASE, 'healthcare', 'clinical-digital-support', 'clinical-digital-support.ts'),
    os.path.join(BASE, 'healthcare', 'clinical-operational-workflow', 'clinical-operational-workflow.ts'),
    os.path.join(BASE, 'healthcare', 'human-in-the-loop', 'human-in-the-loop.ts'),
    os.path.join(BASE, 'healthcare', 'medical-coding', 'medical-coding.ts'),
    os.path.join(BASE, 'healthcare', 'patient-scheduling', 'patient-scheduling.ts'),
    os.path.join(BASE, 'healthcare', 'prior-authorization', 'prior-authorization.ts'),
    os.path.join(BASE, 'healthcare', 'remote-patient-monitoring', 'remote-patient-monitoring.ts'),
]

seen = {}
for f in files:
    content = open(f, encoding='utf-8').read()
    matches = re.findall(r'class="[^"]*(?:float-icon|value-card__icon)[^"]*">([^<]+)<', content)
    for m in matches:
        if m not in seen:
            seen[m] = True
            print(repr(m))
