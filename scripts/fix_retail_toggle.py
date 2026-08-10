path = r'c:\Manish\Everlunme\src\app\who-we-serve\retail\retail.ts'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add Read more button at end of para 1 (just before </p>)
old1 = 'and governance.</p>'
new1 = 'and governance. <button class="rt-intro__toggle" [style.display]="introExpanded ? \'none\' : \'inline\'" (click)="introExpanded = true">Read more \u2193</button></p>'
if old1 in content:
    content = content.replace(old1, new1)
    print('OK: para1 button added')
else:
    print('FAIL: para1 end not found')

# 2. Wrap paras 2+3 in collapsible div (open div after para1 </p>)
# Find the exact para2 start
old2 = new1 + '\n          <p>We design and deploy'
new2 = new1 + '\n          <div class="rt-intro__more" [class.rt-intro__more--open]="introExpanded">\n          <p>We design and deploy'
if old2 in content:
    content = content.replace(old2, new2)
    print('OK: div open added')
else:
    print('FAIL: div open not found')

# 3. Add Read less button at end of para 3 and close div
old3 = 'and responsible AI.</p>\n          <div class="rt-intro__actions">'
new3 = 'and responsible AI. <button class="rt-intro__toggle" [style.display]="introExpanded ? \'inline\' : \'none\'" (click)="introExpanded = false">Read less \u2191</button></p>\n          </div>\n          <div class="rt-intro__actions">'
if old3 in content:
    content = content.replace(old3, new3)
    print('OK: para3 button + div close added')
else:
    print('FAIL: para3 end not found')

# 4. Add toggle + more CSS after .rt-intro__text p rule
old_css = '.rt-intro__text p { font-size: 1rem; color: #444; line-height: 1.85; margin-bottom: 1.2rem; }'
new_css = '''.rt-intro__text p { font-size: 1rem; color: #444; line-height: 1.85; margin-bottom: 1.2rem; }
    .rt-intro__more { max-height: 0; overflow: hidden; transition: max-height 0.5s ease; }
    .rt-intro__more--open { max-height: 1200px; }
    .rt-intro__toggle { display: inline; background: none; border: none; cursor: pointer; color: var(--blue); font-size: inherit; font-weight: 600; padding: 0; margin-left: 0.2rem; transition: color 0.2s; }
    .rt-intro__toggle:hover { color: var(--orange); }'''
if old_css in content:
    content = content.replace(old_css, new_css)
    print('OK: toggle CSS added')
else:
    print('FAIL: CSS anchor not found')

# 5. Add introExpanded = false to class
old_class = 'export class Retail implements AfterViewInit, OnDestroy {'
new_class = 'export class Retail implements AfterViewInit, OnDestroy {\n  introExpanded = false;'
if old_class in content:
    content = content.replace(old_class, new_class)
    print('OK: introExpanded added to class')
else:
    print('FAIL: class declaration not found')

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print('File saved.')
