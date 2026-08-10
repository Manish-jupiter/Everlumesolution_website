"""Apply healthcare-style changes to banking.ts: read-more toggle + section spacing."""

path = r'c:\Manish\Everlunme\src\app\who-we-serve\banking\banking.ts'
content = open(path, encoding='utf-8').read()
original = content

# ── 1. Template: add inline toggle at end of para 1, wrap paras 2+3 ────────
# Mark the end of para 1 (unique: "and governance." followed by newline + </p>)
toggle_btn = ' <button class="hc-intro__toggle" (click)="introExpanded = !introExpanded">{{ introExpanded ? \'Read less \u2191\' : \'Read more \u2193\' }}</button>'

para1_end = 'and governance.\n          </p>'
para1_end_new = 'and governance.' + toggle_btn + '\n          </p>'

if para1_end in content:
    content = content.replace(para1_end, para1_end_new, 1)
    print('Para1 toggle: OK')
else:
    print('Para1 toggle: FAILED')

# Wrap paras 2+3 in collapsible div (unique markers: para 2 open + </div> of actions)
paras_old = (
    '        <p class="hc-intro__text">\n'
    '        We design and deploy'
)
paras_new = (
    '        <div class="hc-intro__more" [class.hc-intro__more--open]="introExpanded">\n'
    '        <p class="hc-intro__text">\n'
    '        We design and deploy'
)
if paras_old in content:
    content = content.replace(paras_old, paras_new, 1)
    print('Div open: OK')
else:
    print('Div open: FAILED')

# Close the div just before hc-intro__actions
actions_old = '        </p>\n        <div class="hc-intro__actions">'
actions_new = '        </p>\n        </div>\n        <div class="hc-intro__actions">'
if actions_old in content:
    content = content.replace(actions_old, actions_new, 1)
    print('Div close: OK')
else:
    print('Div close: FAILED')

# ── 2. CSS: add toggle + collapsible styles (already done in previous run) ──
if 'hc-intro__more' not in content:
    toggle_css = (
        '    .hc-intro__more {\n'
        '      max-height: 0;\n'
        '      overflow: hidden;\n'
        '      transition: max-height 0.5s ease;\n'
        '    }\n'
        '    .hc-intro__more--open {\n'
        '      max-height: 500px;\n'
        '    }\n'
        '    .hc-intro__toggle {\n'
        '      display: inline;\n'
        '      background: none;\n'
        '      border: none;\n'
        '      cursor: pointer;\n'
        '      color: var(--blue);\n'
        '      font-size: inherit;\n'
        '      font-weight: 600;\n'
        '      padding: 0;\n'
        '      margin-left: 0.2rem;\n'
        '      transition: color 0.2s;\n'
        '    }\n'
        '    .hc-intro__toggle:hover { color: var(--orange); }\n\n'
    )
    btn_marker = '    .hc-intro__btn {\n      display: inline-flex;'
    if btn_marker in content:
        content = content.replace(btn_marker, toggle_css + btn_marker)
        print('Toggle CSS: OK')
else:
    print('Toggle CSS: already present')

# ── 3. Class property (already done) ────────────────────────────────────────
if 'introExpanded = false' not in content:
    cls_old = 'export class Banking implements AfterViewInit, OnDestroy  {\n  private carouselTimer'
    cls_new = 'export class Banking implements AfterViewInit, OnDestroy  {\n  introExpanded = false;\n  private carouselTimer'
    if cls_old in content:
        content = content.replace(cls_old, cls_new)
        print('Class property: OK')
else:
    print('Class property: already present')

if content != original:
    open(path, 'w', encoding='utf-8').write(content)
    print('File saved.')
else:
    print('No new changes.')

content = open(path, encoding='utf-8').read()
original = content

# ── 1. Template: wrap paras 2+3 in collapsible div, add inline toggle ──────
old_paras = (
    '        <p class="hc-intro__text">\n'
    '        Transform banking operations with intelligent AI agents that can reason, orchestrate, and execute complex business processes across risk management, compliance, operations, lending, and customer engagement. Our Agentic AI solutions enable banks and financial institutions to accelerate decision-making, enhance operational efficiency, strengthen regulatory compliance, and deliver exceptional customer experiences through secure, intelligent automation\u00e2\u0080\u0094while maintaining robust human oversight and governance.\n'
    '          </p>\n'
    '        <p class="hc-intro__text">\n'
    '        We design and deploy enterprise-grade, banking-ready Agentic AI solutions that seamlessly integrate with core banking platforms, loan origination systems, payment networks, customer relationship management (CRM) applications, risk and compliance platforms, fraud management systems, and digital banking ecosystems. By intelligently coordinating activities across people, systems, and AI agents, our solutions streamline end-to-end workflows, eliminate operational silos, and enable faster, more informed business decisions. \n'
    '        </p>\n'
    '        <p class="hc-intro__text">\n'
    '        From intelligent customer onboarding and Know Your Customer (KYC) verification to credit underwriting, fraud detection, anti-money laundering (AML) investigations, payment operations, regulatory reporting, collections, and customer service automation, our Agentic AI solutions optimise every stage of the banking value chain. Built on secure, scalable, and governance-first AI architectures, they empower financial institutions to reduce operational costs, improve productivity, strengthen risk management, and accelerate digital transformation while ensuring the highest standards of security, regulatory compliance, and responsible AI. \n'
    '        </p>\n'
)

# Check for the garbled form of the em dash
garbled_em = '\u00e2\u0080\u0094'  # UTF-8 bytes of em-dash decoded as Latin-1
if garbled_em not in content:
    # Try the actual em dash
    garbled_em = '\u2014'

old_paras2 = old_paras.replace('\u00e2\u0080\u0094', garbled_em)

new_paras = (
    '        <p class="hc-intro__text">\n'
    '        Transform banking operations with intelligent AI agents that can reason, orchestrate, and execute complex business processes across risk management, compliance, operations, lending, and customer engagement. Our Agentic AI solutions enable banks and financial institutions to accelerate decision-making, enhance operational efficiency, strengthen regulatory compliance, and deliver exceptional customer experiences through secure, intelligent automation\u00e2\u0080\u0094while maintaining robust human oversight and governance. <button class="hc-intro__toggle" (click)="introExpanded = !introExpanded">{{ introExpanded ? \'Read less \u2191\' : \'Read more \u2193\' }}</button>\n'
    '          </p>\n'
    '        <div class="hc-intro__more" [class.hc-intro__more--open]="introExpanded">\n'
    '        <p class="hc-intro__text">\n'
    '        We design and deploy enterprise-grade, banking-ready Agentic AI solutions that seamlessly integrate with core banking platforms, loan origination systems, payment networks, customer relationship management (CRM) applications, risk and compliance platforms, fraud management systems, and digital banking ecosystems. By intelligently coordinating activities across people, systems, and AI agents, our solutions streamline end-to-end workflows, eliminate operational silos, and enable faster, more informed business decisions. \n'
    '        </p>\n'
    '        <p class="hc-intro__text">\n'
    '        From intelligent customer onboarding and Know Your Customer (KYC) verification to credit underwriting, fraud detection, anti-money laundering (AML) investigations, payment operations, regulatory reporting, collections, and customer service automation, our Agentic AI solutions optimise every stage of the banking value chain. Built on secure, scalable, and governance-first AI architectures, they empower financial institutions to reduce operational costs, improve productivity, strengthen risk management, and accelerate digital transformation while ensuring the highest standards of security, regulatory compliance, and responsible AI. \n'
    '        </p>\n'
    '        </div>\n'
)

if old_paras in content:
    content = content.replace(old_paras, new_paras)
    print('Para replacement: OK (clean em dash)')
elif old_paras2 in content:
    content = content.replace(old_paras2, new_paras.replace('\u00e2\u0080\u0094', garbled_em))
    print('Para replacement: OK (garbled em dash)')
else:
    print('Para replacement: FAILED - checking actual content...')
    # Debug: show lines 57-65
    for i, line in enumerate(content.splitlines()[56:65], 57):
        print(f'  L{i}: {repr(line[:100])}')

# ── 2. CSS: add toggle + collapsible styles before .hc-intro__btn ───────────
toggle_css = (
    '    .hc-intro__more {\n'
    '      max-height: 0;\n'
    '      overflow: hidden;\n'
    '      transition: max-height 0.5s ease;\n'
    '    }\n'
    '    .hc-intro__more--open {\n'
    '      max-height: 500px;\n'
    '    }\n'
    '    .hc-intro__toggle {\n'
    '      display: inline;\n'
    '      background: none;\n'
    '      border: none;\n'
    '      cursor: pointer;\n'
    '      color: var(--blue);\n'
    '      font-size: inherit;\n'
    '      font-weight: 600;\n'
    '      padding: 0;\n'
    '      margin-left: 0.2rem;\n'
    '      transition: color 0.2s;\n'
    '    }\n'
    '    .hc-intro__toggle:hover { color: var(--orange); }\n\n'
)
btn_marker = '    .hc-intro__btn {\n      display: inline-flex;'
if btn_marker in content:
    content = content.replace(btn_marker, toggle_css + btn_marker)
    print('Toggle CSS: OK')
else:
    print('Toggle CSS: FAILED')

# ── 3. CSS: reduce section paddings ─────────────────────────────────────────
replacements = [
    ('      padding: 6rem 3rem;\n      padding-top: 7rem;', '      padding: 4rem 3rem;\n      padding-top: 5rem;'),
    ('.hc-deliver {\n      padding: 6rem 3rem;', '.hc-deliver {\n      padding: 4rem 3rem;'),
    ('.hc-deliver__header {\n      text-align: center;\n      margin-bottom: 4rem;', '.hc-deliver__header {\n      text-align: center;\n      margin-bottom: 2.5rem;'),
    ('.hc-why {\n      padding: 4rem 3rem;', '.hc-why {\n      padding: 3rem 3rem;'),
    ('.hc-outcomes {\n      padding: 6rem 3rem;', '.hc-outcomes {\n      padding: 4rem 3rem;'),
    ('background: linear-gradient(135deg, #142d6b 0%, #1B3A8F 100%);\n      padding: 4rem 3rem;', 'background: linear-gradient(135deg, #142d6b 0%, #1B3A8F 100%);\n      padding: 3rem 3rem;'),
]
for old, new in replacements:
    if old in content:
        content = content.replace(old, new)
        print(f'Spacing: OK -> {repr(new[:40])}')
    else:
        print(f'Spacing: FAILED -> {repr(old[:40])}')

# ── 4. Class property ────────────────────────────────────────────────────────
cls_old = 'export class Banking implements AfterViewInit, OnDestroy  {\n  private carouselTimer'
cls_new = 'export class Banking implements AfterViewInit, OnDestroy  {\n  introExpanded = false;\n  private carouselTimer'
if cls_old in content:
    content = content.replace(cls_old, cls_new)
    print('Class property: OK')
else:
    print('Class property: FAILED')

if content != original:
    open(path, 'w', encoding='utf-8').write(content)
    print('File saved.')
else:
    print('No changes written.')
