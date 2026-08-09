"""Replace garbled emoji with Phosphor icons and fix CSS in who-we-serve + retail files."""
import os

BASE = r'c:\Manish\Everlunme\src\app\who-we-serve'
PH = lambda name: f'<i class="ph ph-{name}"></i>'

# Exact Unicode codepoints verified via probe2.py
EMOJI_MAP = [
    ('ðŸ›\x8dï¸\x8f', '<i class="ph ph-shopping-bag"></i>'),    # 🛍️
    ('ðŸ¤\x96', '<i class="ph ph-robot"></i>'),                   # 🤖
    ('ðŸ§ ', '<i class="ph ph-brain"></i>'),                       # 🧠
    ('âš™ï¸\x8f', '<i class="ph ph-gear"></i>'),                   # ⚙️
    ('ðŸ'\x95¥', '<i class="ph ph-users"></i>'),                   # 👥
    ('ðŸ\x8f¥', '<i class="ph ph-hospital"></i>'),                 # 🏥
    ('ðŸ"\x85', '<i class="ph ph-calendar"></i>'),                 # 📅
    ('ðŸ"\x9d', '<i class="ph ph-note-pencil"></i>'),              # 📝
    ('ðŸ"\xa1', '<i class="ph ph-broadcast"></i>'),                # 📡
    ('ðŸŽ¯', '<i class="ph ph-target"></i>'),                      # 🎯
    ('ðŸ"\x8b', '<i class="ph ph-clipboard-text"></i>'),           # 📋
    ('ðŸ"\x88', '<i class="ph ph-chart-line-up"></i>'),            # 📈
    ('ðŸ"\x84', '<i class="ph ph-arrows-clockwise"></i>'),         # 🔄
    ('ðŸ¤\x9d', '<i class="ph ph-handshake"></i>'),                # 🤝
    ('ðŸ"\x8a', '<i class="ph ph-chart-bar"></i>'),                # 📊
    ('ðŸ"\x89', '<i class="ph ph-trend-down"></i>'),               # 📉
    ('ðŸš\x80', '<i class="ph ph-rocket"></i>'),                   # 🚀
    ('ðŸ›¡ï¸\x8f', '<i class="ph ph-shield"></i>'),                # 🛡️
    ('ðŸ"\x9e', '<i class="ph ph-phone"></i>'),                    # 📞
    ('ðŸ˜\x8a', '<i class="ph ph-smiley"></i>'),                   # 😊
    ('ðŸ'\x81ï¸\x8f', '<i class="ph ph-eye"></i>'),               # 👁️
    ('âš¡', '<i class="ph ph-lightning"></i>'),                    # ⚡
    ('âœ…', '<i class="ph ph-check-circle"></i>'),                 # ✅
]

FILES = [
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

def fix_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    original = content
    for old, new in EMOJI_MAP:
        content = content.replace(old, new)
    if content != original:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Fixed: {os.path.basename(path)}')
    else:
        print(f'No changes: {os.path.basename(path)}')

for file_path in FILES:
    fix_file(file_path)

print('Done.')
