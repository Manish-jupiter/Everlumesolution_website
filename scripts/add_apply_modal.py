import re, pathlib

FILE = pathlib.Path(r'c:\Manish\Everlunme\src\app\career\career.ts')
txt = FILE.read_text(encoding='utf-8')

# ── 1. Replace Apply anchors with buttons carrying job info ─────────────────
jobs = [
    ('Senior AI / ML Engineer',           'AI Engineering'),
    ('Agentic AI Solutions Architect',     'Solutions Eng.'),
    ('Senior Data Scientist',              'Data & Analytics'),
    ('UI / UX Designer',                   'Design'),
    ('MLOps / AI Platform Engineer',       'Platform Eng.'),
    ('NLP / Conversational AI Engineer',   'AI Research'),
    ('AI Product Manager',                 'Product'),
    ('AI Governance & Ethics Specialist',  'Risk & Governance'),
]

OLD_ANCHOR = '<a routerLink="/contact-us" class="cr-jrow__btn">Apply <i class="ph ph-arrow-right"></i></a>'

for title, dept in jobs:
    title_tag = f'<h3 class="cr-jrow__title">{title}</h3>'
    new_btn   = f'<button type="button" class="cr-jrow__btn" (click)="openApply(\'{title}\', \'{dept}\')">Apply <i class="ph ph-arrow-right"></i></button>'
    idx = txt.find(title_tag)
    if idx == -1:
        print(f'MISS title: {title}'); continue
    a_idx = txt.find(OLD_ANCHOR, idx)
    if a_idx == -1:
        print(f'MISS anchor: {title}'); continue
    txt = txt[:a_idx] + new_btn + txt[a_idx + len(OLD_ANCHOR):]
    print(f'OK  {title}')

# ── 2. Insert modal template before <!-- CTA --> ────────────────────────────
MODAL_HTML = """
    <!-- APPLY MODAL -->
    <div class="cr-modal-overlay" [style.display]="applyJob ? 'flex' : 'none'" (click)="closeApply()">
      <div class="cr-modal" (click)="$event.stopPropagation()">

        <!-- Success state -->
        <div class="cr-modal__success" [style.display]="formSubmitted ? 'flex' : 'none'">
          <div class="cr-modal__success-icon"><i class="ph ph-check-circle"></i></div>
          <h3>Application Submitted!</h3>
          <p>Thank you for applying for <strong>{{ applyJob?.title }}</strong>.<br/>We'll review your application and get back to you soon.</p>
          <button class="cr-modal__done-btn" (click)="closeApply()">Close</button>
        </div>

        <!-- Form state -->
        <div [style.display]="formSubmitted ? 'none' : 'flex'" style="flex-direction:column;flex:1;overflow:hidden">
          <div class="cr-modal__header">
            <div>
              <span class="cr-modal__label">Apply for</span>
              <h3 class="cr-modal__title">{{ applyJob?.title }}</h3>
              <span class="cr-modal__dept">{{ applyJob?.dept }}</span>
            </div>
            <button type="button" class="cr-modal__close" (click)="closeApply()"><i class="ph ph-x"></i></button>
          </div>
          <form class="cr-modal__form" (submit)="submitApplication($event)" novalidate>
            <div class="cr-modal__row">
              <div class="cr-mfield">
                <label>Full Name <span>*</span></label>
                <input type="text" name="name" placeholder="Your full name" required />
              </div>
              <div class="cr-mfield">
                <label>Email Address <span>*</span></label>
                <input type="email" name="email" placeholder="you@example.com" required />
              </div>
            </div>
            <div class="cr-modal__row">
              <div class="cr-mfield">
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder="+1 (000) 000-0000" />
              </div>
              <div class="cr-mfield">
                <label>LinkedIn / Portfolio URL</label>
                <input type="url" name="linkedin" placeholder="https://linkedin.com/in/..." />
              </div>
            </div>
            <div class="cr-mfield cr-mfield--full">
              <label>Why are you a great fit? <span>*</span></label>
              <textarea name="message" rows="4" placeholder="Tell us about your experience and why you'd like to join Everlume..." required></textarea>
            </div>
            <button type="submit" class="cr-modal__submit">Submit Application <i class="ph ph-paper-plane-tilt"></i></button>
          </form>
        </div>

      </div>
    </div>

"""
txt = txt.replace('\n    <!-- CTA -->', MODAL_HTML + '    <!-- CTA -->', 1)

# ── 3. Insert modal CSS before /* ── Responsive ── */ ───────────────────────
MODAL_CSS = """    /* ── Apply Modal ── */
    .cr-modal-overlay { position: fixed; inset: 0; background: rgba(6,13,31,.72); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); z-index: 1200; display: flex; align-items: center; justify-content: center; padding: 1rem; }
    .cr-modal { background: #fff; border-radius: 20px; width: 100%; max-width: 620px; max-height: 92vh; overflow-y: auto; box-shadow: 0 30px 80px rgba(0,0,0,.3); display: flex; flex-direction: column; animation: crModalIn .3s cubic-bezier(.22,1,.36,1); }
    @keyframes crModalIn { from { opacity: 0; transform: translateY(24px) scale(.97); } to { opacity: 1; transform: none; } }
    .cr-modal__header { display: flex; justify-content: space-between; align-items: flex-start; padding: 1.8rem 2rem 1.2rem; border-bottom: 1px solid #eef0f6; flex-shrink: 0; }
    .cr-modal__label { font-size: .7rem; text-transform: uppercase; letter-spacing: .12em; color: #e87722; font-weight: 700; display: block; }
    .cr-modal__title { font-family: 'DM Serif Display', serif; font-size: 1.35rem; color: #101a3a; font-weight: 400; margin: .25rem 0 .3rem; }
    .cr-modal__dept { font-size: .78rem; color: #888; }
    .cr-modal__close { width: 36px; height: 36px; border-radius: 50%; border: 1.5px solid #e2e6ef; background: #f7f8fc; color: #444; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 1.1rem; flex-shrink: 0; transition: background .2s; }
    .cr-modal__close:hover { background: #edf0f8; }
    .cr-modal__form { padding: 1.5rem 2rem 2rem; display: flex; flex-direction: column; gap: 1rem; }
    .cr-modal__row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    .cr-mfield { display: flex; flex-direction: column; gap: .4rem; }
    .cr-mfield--full { grid-column: 1 / -1; }
    .cr-mfield label { font-size: .8rem; font-weight: 600; color: #101a3a; }
    .cr-mfield label span { color: #e11d48; }
    .cr-mfield input, .cr-mfield textarea { border: 1.5px solid #d6dce8; border-radius: 10px; padding: .65rem .9rem; font-size: .88rem; font-family: inherit; color: #101a3a; background: #f9faff; outline: none; transition: border-color .2s; resize: vertical; width: 100%; box-sizing: border-box; }
    .cr-mfield input:focus, .cr-mfield textarea:focus { border-color: #1B3A8F; background: #fff; }
    .cr-mfield input:invalid:not(:placeholder-shown), .cr-mfield textarea:invalid:not(:placeholder-shown) { border-color: #e11d48; }
    .cr-modal__submit { display: flex; align-items: center; justify-content: center; gap: .5rem; background: #1B3A8F; color: #fff; border: none; border-radius: 999px; padding: .85rem 2rem; font-weight: 700; font-size: .9rem; cursor: pointer; transition: background .25s, transform .25s; margin-top: .5rem; }
    .cr-modal__submit:hover { background: #e87722; transform: translateY(-2px); }
    .cr-modal__success { display: flex; flex-direction: column; align-items: center; padding: 3.5rem 2rem; text-align: center; gap: .8rem; }
    .cr-modal__success-icon i.ph { font-size: 3.5rem; color: #16a34a; }
    .cr-modal__success h3 { font-family: 'DM Serif Display', serif; font-size: 1.5rem; color: #101a3a; font-weight: 400; margin: 0; }
    .cr-modal__success p { font-size: .9rem; color: #666; line-height: 1.7; margin: 0; max-width: 380px; }
    .cr-modal__done-btn { margin-top: .5rem; background: #1B3A8F; color: #fff; border: none; border-radius: 999px; padding: .75rem 2rem; font-weight: 700; font-size: .88rem; cursor: pointer; transition: background .25s; }
    .cr-modal__done-btn:hover { background: #e87722; }
    @media (max-width: 600px) { .cr-modal { border-radius: 16px; } .cr-modal__header { padding: 1.4rem 1.2rem 1rem; } .cr-modal__form { padding: 1.2rem 1.2rem 1.5rem; } .cr-modal__row { grid-template-columns: 1fr; } }

"""
txt = txt.replace('    /* \u2500\u2500 Responsive \u2500\u2500 */', MODAL_CSS + '    /* \u2500\u2500 Responsive \u2500\u2500 */', 1)

# ── 4. Update the class ─────────────────────────────────────────────────────
OLD_CLASS = """export class Career {
  currentPage = 1;

  goToPage(n: number) {
    this.currentPage = n;
    document.getElementById('cr-open-roles')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}"""

NEW_CLASS = """export class Career {
  currentPage = 1;
  applyJob: { title: string; dept: string } | null = null;
  formSubmitted = false;

  goToPage(n: number) {
    this.currentPage = n;
    document.getElementById('cr-open-roles')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  openApply(title: string, dept: string) {
    this.applyJob = { title, dept };
    this.formSubmitted = false;
    document.body.style.overflow = 'hidden';
  }

  closeApply() {
    this.applyJob = null;
    this.formSubmitted = false;
    document.body.style.overflow = '';
  }

  submitApplication(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    const fd = new FormData(form);
    const application = {
      id: Date.now(),
      job: this.applyJob?.title ?? '',
      department: this.applyJob?.dept ?? '',
      name: fd.get('name') as string,
      email: fd.get('email') as string,
      phone: fd.get('phone') as string,
      linkedin: fd.get('linkedin') as string,
      message: fd.get('message') as string,
      submittedAt: new Date().toISOString(),
    };
    try {
      const raw = localStorage.getItem('everlume_applications');
      const existing: object[] = raw ? (JSON.parse(raw) as object[]) : [];
      existing.push(application);
      localStorage.setItem('everlume_applications', JSON.stringify(existing));
    } catch (_) { /* storage unavailable */ }
    this.formSubmitted = true;
  }
}"""

if OLD_CLASS in txt:
    txt = txt.replace(OLD_CLASS, NEW_CLASS, 1)
    print('OK  class updated')
else:
    print('MISS class — check manually')

FILE.write_text(txt, encoding='utf-8')
print('Done writing file')
