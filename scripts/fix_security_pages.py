import os, re

BASE = r'c:\Manish\Everlunme\src\app\who-we-serve\healthcare\security-compliance'

# (subfolder, banner_image, content_image, alt_text)
PAGES = [
    ('integrated-security-operations/integrated-security-operations.ts',   'image_059.jpg', 'image_005.jpg', 'Security operations team'),
    ('zero-trust-security/zero-trust-security.ts',                         'image_022.jpg', 'image_007.jpg', 'Zero trust cybersecurity'),
    ('network-security-segmentation/network-security-segmentation.ts',     'image_004.jpg', 'image_016.jpg', 'Network security'),
    ('incident-detection-response/incident-detection-response.ts',         'image_059.jpg', 'image_022.jpg', 'Incident detection'),
    ('advanced-perimeter-protection/advanced-perimeter-protection.ts',     'image_008.jpg', 'image_004.jpg', 'Perimeter protection'),
    ('continuous-monitoring-audit-readiness/continuous-monitoring-audit-readiness.ts', 'image_005.jpg', 'image_016.jpg', 'Continuous monitoring'),
    ('endpoint-protection-threat-detection/endpoint-protection-threat-detection.ts',   'image_007.jpg', 'image_059.jpg', 'Endpoint protection'),
    ('operational-security-practices/operational-security-practices.ts',   'image_019.jpg', 'image_006.jpg', 'Security operations'),
]

HDR_CSS_OLD = '.dp-sub-hdr{background:linear-gradient(135deg,#060d1f,#1B3A8F);padding:5rem 3rem;text-align:center;position:relative;overflow:hidden;}'
HDR_CSS_NEW = (
    '.dp-sub-hdr{padding:5rem 3rem;text-align:center;position:relative;overflow:hidden;}'
    ' .dp-sub-hdr__bg{position:absolute;inset:0;z-index:0;}'
    ' .dp-sub-hdr__bg img{width:100%;height:100%;object-fit:cover;}'
    ' .dp-sub-hdr__overlay{position:absolute;inset:0;background:linear-gradient(135deg,rgba(6,13,31,0.88),rgba(27,58,143,0.72));}'
)

BODY_CSS_OLD = '.dp-sub-body__inner{max-width:900px;margin:0 auto;background:#fff;border-radius:24px;padding:3.5rem;position:relative;border:1px solid rgba(27,58,143,.06);box-shadow:0 8px 40px rgba(27,58,143,.07);}'
BODY_CSS_NEW = (
    '.dp-sub-body__inner{max-width:1100px;margin:0 auto;background:#fff;border-radius:24px;padding:3.5rem;position:relative;border:1px solid rgba(27,58,143,.06);box-shadow:0 8px 40px rgba(27,58,143,.07);}'
    ' .dp-sub-body__grid{display:grid;grid-template-columns:1fr 300px;gap:2.5rem;align-items:start;}'
    ' .dp-sub-body__img img{width:100%;height:auto;min-height:300px;object-fit:cover;border-radius:12px;display:block;box-shadow:0 8px 24px rgba(27,58,143,.12);}'
    ' @media(max-width:768px){.dp-sub-body__grid{grid-template-columns:1fr;} .dp-sub-body__img{display:none;}}'
)

for rel_path, banner_img, content_img, alt in PAGES:
    path = os.path.join(BASE, rel_path)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    name = os.path.basename(path)

    # 1. Add banner bg image to header
    old_hdr = '<header class="dp-sub-hdr"><div class="dp-sub-hdr__grid">'
    new_hdr = (
        f'<header class="dp-sub-hdr">'
        f'<div class="dp-sub-hdr__bg"><img src="Images/{banner_img}" alt="{alt}" /><div class="dp-sub-hdr__overlay"></div></div>'
        f'<div class="dp-sub-hdr__grid">'
    )
    if old_hdr in content:
        content = content.replace(old_hdr, new_hdr)
        print(f'  {name}: banner OK')
    else:
        print(f'  {name}: banner FAIL')

    # 2. Wrap paragraphs + add right-side content image
    old_body_open = '<section class="dp-sub-body"><div class="dp-sub-body__inner">'
    new_body_open = '<section class="dp-sub-body"><div class="dp-sub-body__inner"><div class="dp-sub-body__grid"><div class="dp-sub-body__content">'
    if old_body_open in content:
        content = content.replace(old_body_open, new_body_open)
        print(f'  {name}: body open OK')
    else:
        print(f'  {name}: body open FAIL')

    old_body_close = '</div></section>\n    <section class="dp-sub-cta">'
    new_body_close = (
        f'</div>'
        f'<div class="dp-sub-body__img"><img src="Images/{content_img}" alt="{alt}" loading="lazy" /></div>'
        f'</div></div></section>\n    <section class="dp-sub-cta">'
    )
    if old_body_close in content:
        content = content.replace(old_body_close, new_body_close)
        print(f'  {name}: body close OK')
    else:
        print(f'  {name}: body close FAIL')

    # 3. Update header CSS
    if HDR_CSS_OLD in content:
        content = content.replace(HDR_CSS_OLD, HDR_CSS_NEW)
        print(f'  {name}: hdr CSS OK')
    else:
        print(f'  {name}: hdr CSS FAIL (may be already updated)')

    # 4. Update body CSS
    if BODY_CSS_OLD in content:
        content = content.replace(BODY_CSS_OLD, BODY_CSS_NEW)
        print(f'  {name}: body CSS OK')
    else:
        print(f'  {name}: body CSS FAIL (may be already updated)')

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

print('\nAll done.')
