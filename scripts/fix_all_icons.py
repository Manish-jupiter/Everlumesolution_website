"""Fix garbled emoji -> Phosphor icons + CSS for all icon containers."""
import os, re

BASE = r'c:\Manish\Everlunme\src\app\who-we-serve'
PH = lambda n: f'<i class="ph ph-{n}"></i>'

# Build garbled sequences using chr() to avoid any encoding ambiguity
def s(*cps): return ''.join(chr(c) for c in cps)

EMOJI_MAP = [
    (s(0xf0,0x178,0x203a,0x8d,0xef,0xb8,0x8f), PH('shopping-bag')),   # shopping bag
    (s(0xf0,0x178,0xa4,0x2013),                  PH('robot')),           # robot
    (s(0xf0,0x178,0xa7,0xa0),                    PH('brain')),           # brain
    (s(0xe2,0x161,0xa1),                         PH('lightning')),       # lightning
    (s(0xe2,0x153,0x2026),                       PH('check-circle')),    # check
    (s(0xf0,0x178,0x17d,0xaf),                   PH('target')),          # target
    (s(0xf0,0x178,0x201c,0x2039),                PH('clipboard-text')),  # clipboard
    (s(0xf0,0x178,0x201c,0x2c6),                 PH('chart-line-up')),   # chart up
    (s(0xf0,0x178,0x8f,0xa5),                    PH('hospital')),        # hospital
    (s(0xe2,0x161,0x2122,0xef,0xb8,0x8f),        PH('gear')),            # gear
    (s(0xf0,0x178,0x201d,0x201e),                PH('arrows-clockwise')),# circular arrows
    (s(0xf0,0x178,0xa4,0x9d),                    PH('handshake')),       # handshake
    (s(0xf0,0x178,0x201c,0x160),                 PH('chart-bar')),       # chart bar
    (s(0xf0,0x178,0x201c,0x2030),                PH('trend-down')),      # chart down
    (s(0xf0,0x178,0x2018,0xa5),                  PH('users')),           # users
    (s(0xf0,0x178,0x161,0x20ac),                 PH('rocket')),          # rocket
    (s(0xf0,0x178,0x203a,0xa1,0xef,0xb8,0x8f),  PH('shield')),          # shield
    (s(0xf0,0x178,0x201c,0x2026),                PH('calendar')),        # calendar
    (s(0xf0,0x178,0x201c,0x17e),                 PH('phone')),           # phone
    (s(0xf0,0x178,0x2dc,0x160),                  PH('smiley')),          # smiley
    (s(0xf0,0x178,0x201d,0x8d),                  PH('note-pencil')),     # note/pencil
    (s(0xf0,0x178,0x201c,0xa1),                  PH('broadcast')),       # broadcast
    (s(0xf0,0x178,0x2018,0x81,0xef,0xb8,0x8f),  PH('eye')),             # eye
]

SINGLE_LINE_PREFIXES = ['cd', 'co', 'hl', 'mc', 'pa', 'rp']

def css_single(content, pfx):
    fi_old = (f'    .{pfx}-intro__float-icon {{ width: 44px; height: 44px; background: linear-gradient(135deg, var(--orange), #c96418); '
              f'border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; }}')
    fi_new = (fi_old.rstrip('}') + 'color: #fff; }\n'
              f'    .{pfx}-intro__float-icon i.ph {{ font-size: 1.4rem; line-height: 1; }}')
    vc_old = (f'    .{pfx}-value-card__icon {{ width: 46px; height: 46px; flex-shrink: 0; background: linear-gradient(135deg, rgba(232,119,34,0.1), rgba(232,119,34,0.04)); '
              f'border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; }}')
    vc_new = (vc_old.rstrip('}') + 'color: var(--orange); }\n'
              f'    .{pfx}-value-card__icon i.ph {{ font-size: 1.4rem; line-height: 1; }}')
    return content.replace(fi_old, fi_new).replace(vc_old, vc_new)

def css_retail(content):
    old = ('    .rt-intro__float-icon { width: 44px; height: 44px; background: linear-gradient(135deg, var(--orange), #c96418); '
           'border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; }')
    new = old.rstrip('}') + 'color: #fff; }\n    .rt-intro__float-icon i.ph { font-size: 1.4rem; line-height: 1; }'
    return content.replace(old, new)

def css_banking(content):
    marker = ('      color: #fff;\n'
              '      font-size: 1.2rem;\n'
              '    }')
    replacement = (marker + '\n'
                   '    .hc-intro__float-icon i.ph { font-size: 1.4rem; line-height: 1; }')
    return content.replace(marker, replacement)

def css_patient_scheduling(content):
    fi_old = ('    .ps-intro__float-icon {\n'
              '      width: 44px; height: 44px;\n'
              '      background: linear-gradient(135deg, var(--orange), #c96418);\n'
              '      border-radius: 12px;\n'
              '      display: flex; align-items: center;\n'
              '      justify-content: center; font-size: 1.2rem;\n'
              '    }')
    fi_new = fi_old.replace('font-size: 1.2rem;\n    }', 'font-size: 1.2rem; color: #fff;\n    }\n'
                             '    .ps-intro__float-icon i.ph { font-size: 1.4rem; line-height: 1; }')
    vc_old = ('    .ps-value-card__icon {\n'
              '      width: 52px; height: 52px;\n'
              '      margin: 0 auto 1rem;\n'
              '      background: linear-gradient(135deg, rgba(232,119,34,0.1), rgba(232,119,34,0.04));\n'
              '      border-radius: 14px;\n'
              '      display: flex; align-items: center;\n'
              '      justify-content: center; font-size: 1.4rem;\n'
              '    }')
    vc_new = vc_old.replace('font-size: 1.4rem;\n    }', 'font-size: 1.4rem; color: var(--orange);\n    }\n'
                             '    .ps-value-card__icon i.ph { font-size: 1.4rem; line-height: 1; }')
    return content.replace(fi_old, fi_new).replace(vc_old, vc_new)

FILES = {
    os.path.join(BASE, 'retail', 'retail.ts'): 'retail',
    os.path.join(BASE, 'banking', 'banking.ts'): 'banking',
    os.path.join(BASE, 'healthcare', 'clinical-digital-support', 'clinical-digital-support.ts'): 'cd',
    os.path.join(BASE, 'healthcare', 'clinical-operational-workflow', 'clinical-operational-workflow.ts'): 'co',
    os.path.join(BASE, 'healthcare', 'human-in-the-loop', 'human-in-the-loop.ts'): 'hl',
    os.path.join(BASE, 'healthcare', 'medical-coding', 'medical-coding.ts'): 'mc',
    os.path.join(BASE, 'healthcare', 'patient-scheduling', 'patient-scheduling.ts'): 'ps',
    os.path.join(BASE, 'healthcare', 'prior-authorization', 'prior-authorization.ts'): 'pa',
    os.path.join(BASE, 'healthcare', 'remote-patient-monitoring', 'remote-patient-monitoring.ts'): 'rp',
}

for path, role in FILES.items():
    content = open(path, encoding='utf-8').read()
    original = content
    for old, new in EMOJI_MAP:
        content = content.replace(old, new)
    if role == 'retail':
        content = css_retail(content)
    elif role == 'banking':
        content = css_banking(content)
    elif role == 'ps':
        content = css_patient_scheduling(content)
    elif role in SINGLE_LINE_PREFIXES:
        content = css_single(content, role)
    if content != original:
        open(path, 'w', encoding='utf-8').write(content)
        print(f'Fixed: {os.path.basename(os.path.dirname(path))}/{os.path.basename(path)}')
    else:
        print(f'No changes: {os.path.basename(path)}')
