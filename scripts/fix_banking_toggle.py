path = r'c:\Manish\Everlunme\src\app\who-we-serve\banking\banking.ts'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Para 1 button: only show "Read more ↓", hide when expanded
old_btn = '<button class="hc-intro__toggle" (click)="introExpanded = !introExpanded">{{ introExpanded ? \'Read less ↑\' : \'Read more ↓\' }}</button>'
new_btn = '<button class="hc-intro__toggle" [style.display]="introExpanded ? \'none\' : \'inline\'" (click)="introExpanded = true">Read more ↓</button>'
if old_btn in content:
    content = content.replace(old_btn, new_btn)
    print('OK: para1 button updated')
else:
    print('FAIL: para1 button not found')

# 2. Add "Read less ↑" button at end of para 3
old_para3_end = 'and responsible AI. \n        </p>\n        </div>'
new_para3_end = 'and responsible AI. <button class="hc-intro__toggle" [style.display]="introExpanded ? \'inline\' : \'none\'" (click)="introExpanded = false">Read less \u2191</button>\n        </p>\n        </div>'
if old_para3_end in content:
    content = content.replace(old_para3_end, new_para3_end)
    print('OK: para3 read-less button added')
else:
    idx = content.find('and responsible AI.')
    print(f'FAIL: para3 end not found, checking around idx {idx}')
    print(repr(content[idx:idx+80]))

# 3. Increase max-height from 500px to 1200px (both occurrences)
old_mh = 'max-height: 500px;'
new_mh = 'max-height: 1200px;'
count = content.count(old_mh)
if count > 0:
    content = content.replace(old_mh, new_mh)
    print(f'OK: max-height updated ({count} occurrences)')
else:
    print('FAIL: max-height 500px not found')

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print('File saved.')
