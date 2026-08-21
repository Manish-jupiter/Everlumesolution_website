import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [RouterLink],
  template: `

    <!-- BREADCRUMB -->
    <div class="breadcrumb-bar">
      <a routerLink="/">Home</a><span class="sep">›</span>
      <span class="current">Careers</span>
    </div>

    <!-- HERO -->
    <section class="cr-hero">
      <div class="cr-hero__bg">
        <img src="Images/image_056.jpg" alt="Team collaboration at Everlume" />
        <div class="cr-hero__overlay"></div>
      </div>
      <div class="cr-hero__abstract-ring"></div>
      <div class="cr-hero__abstract-blob"></div>
      <div class="cr-hero__content">
        <div class="cr-hero__badge" style="cursor:pointer" (click)="goToPage(1)">
          <span class="cr-hero__badge-dot"></span>
          <span>We're Hiring</span>
        </div>
        <h1 class="cr-hero__heading">Build the Future of<br/><em>Agentic AI</em> with Us</h1>
        <p class="cr-hero__sub">Join a team of AI engineers, data scientists, and technologists shaping how enterprises reason, automate, and scale through intelligent AI agents.</p>
        <a routerLink="/contact-us" class="cr-hero__cta">Get in Touch <i class="ph ph-arrow-right"></i></a>
      </div>
    </section>

    <!-- CULTURE -->
    <section class="cr-culture">
      <div class="cr-culture__inner">
        <div class="cr-culture__text" data-reveal-left>
          <span class="cr-eyebrow">Why Everlume</span>
          <h2 class="cr-section-heading">Where <em>innovation</em> meets purpose</h2>
          <p>At Everlume, we build AI systems that transform how enterprises operate. Work on agentic reasoning, multi-system orchestration, and responsible AI — and create measurable impact for clients across banking, healthcare, and retail.</p>
          <div class="cr-culture__stats">
            <div class="cr-stat"><span class="cr-stat__value">50+</span><span class="cr-stat__label">AI Engineers</span></div>
            <div class="cr-stat"><span class="cr-stat__value">12+</span><span class="cr-stat__label">Countries</span></div>
            <div class="cr-stat"><span class="cr-stat__value">100+</span><span class="cr-stat__label">Enterprise Clients</span></div>
            <div class="cr-stat"><span class="cr-stat__value">4.8★</span><span class="cr-stat__label">Glassdoor Rating</span></div>
          </div>
        </div>
        <div class="cr-culture__visual" data-reveal-right>
          <div class="cr-culture__img-wrap">
            <img src="Images/image_019.jpg" alt="Everlume team collaborating" loading="lazy" />
          </div>
          <div class="cr-culture__badge-card">
            <i class="ph ph-rocket-launch"></i>
            <div><strong>Fast Growth</strong><span>Hypergrowth AI company</span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- OPEN ROLES -->
    <section class="cr-roles" id="cr-open-roles">
      <div class="cr-roles__inner">
        <div class="cr-roles__header">
          <span class="cr-eyebrow">Open Positions</span>
          <h2 class="cr-section-heading">Current <em>job openings</em></h2>
          <p class="cr-roles__sub">We're looking for exceptional people to join our growing team. All roles are open to remote candidates unless stated otherwise.</p>
        </div>

        <div class="cr-jobs">

          <div class="cr-jrow" [style.display]="currentPage === 1 ? 'grid' : 'none'">
            <div class="cr-jrow__icon" style="background:linear-gradient(135deg,#1B3A8F,#2a52c9)"><i class="ph ph-brain"></i></div>
            <div class="cr-jrow__body">
              <h3 class="cr-jrow__title">Senior AI / ML Engineer</h3>
              <p class="cr-jrow__desc">Design ML pipelines, fine-tune foundation models, and build production-grade AI agents for enterprise banking and healthcare clients.</p>
            </div>
            <div class="cr-jrow__meta">
              <span class="cr-pill cr-pill--blue">AI Engineering</span>
              <span class="cr-pill cr-pill--green">Remote</span>
              <span class="cr-pill">Full-time</span>
            </div>
            <button type="button" class="cr-jrow__btn" (click)="openApply('Senior AI / ML Engineer', 'AI Engineering')">Apply <i class="ph ph-arrow-right"></i></button>
          </div>

          <div class="cr-jrow" [style.display]="currentPage === 1 ? 'grid' : 'none'">
            <div class="cr-jrow__icon" style="background:linear-gradient(135deg,#e87722,#c96418)"><i class="ph ph-robot"></i></div>
            <div class="cr-jrow__body">
              <h3 class="cr-jrow__title">Agentic AI Solutions Architect</h3>
              <p class="cr-jrow__desc">Lead multi-agent system design and orchestration frameworks integrating with ERP, CRM, and core banking platforms.</p>
            </div>
            <div class="cr-jrow__meta">
              <span class="cr-pill cr-pill--blue">Solutions Eng.</span>
              <span class="cr-pill cr-pill--orange">Hybrid</span>
              <span class="cr-pill">Full-time</span>
            </div>
            <button type="button" class="cr-jrow__btn" (click)="openApply('Agentic AI Solutions Architect', 'Solutions Eng.')">Apply <i class="ph ph-arrow-right"></i></button>
          </div>

          <div class="cr-jrow" [style.display]="currentPage === 1 ? 'grid' : 'none'">
            <div class="cr-jrow__icon" style="background:linear-gradient(135deg,#0d7a5f,#14a87f)"><i class="ph ph-chart-line-up"></i></div>
            <div class="cr-jrow__body">
              <h3 class="cr-jrow__title">Senior Data Scientist</h3>
              <p class="cr-jrow__desc">Build predictive models for fraud detection, demand forecasting, and patient risk stratification using deep learning and advanced statistics.</p>
            </div>
            <div class="cr-jrow__meta">
              <span class="cr-pill cr-pill--teal">Data & Analytics</span>
              <span class="cr-pill cr-pill--green">Remote</span>
              <span class="cr-pill">Full-time</span>
            </div>
            <button type="button" class="cr-jrow__btn" (click)="openApply('Senior Data Scientist', 'Data & Analytics')">Apply <i class="ph ph-arrow-right"></i></button>
          </div>

          <div class="cr-jrow" [style.display]="currentPage === 1 ? 'grid' : 'none'">
            <div class="cr-jrow__icon" style="background:linear-gradient(135deg,#0f766e,#14b8a6)"><i class="ph ph-pen-nib"></i></div>
            <div class="cr-jrow__body">
              <h3 class="cr-jrow__title">UI / UX Designer</h3>
              <p class="cr-jrow__desc">Design intuitive interfaces, user journeys, and interactive prototypes for Everlume's AI-powered products and enterprise client solutions.</p>
            </div>
            <div class="cr-jrow__meta">
              <span class="cr-pill cr-pill--teal">Design</span>
              <span class="cr-pill cr-pill--orange">Hybrid</span>
              <span class="cr-pill">Full-time</span>
            </div>
            <button type="button" class="cr-jrow__btn" (click)="openApply('UI / UX Designer', 'Design')">Apply <i class="ph ph-arrow-right"></i></button>
          </div>

          <div class="cr-jrow" [style.display]="currentPage === 1 ? 'grid' : 'none'">
            <div class="cr-jrow__icon" style="background:linear-gradient(135deg,#6d28d9,#8b5cf6)"><i class="ph ph-git-branch"></i></div>
            <div class="cr-jrow__body">
              <h3 class="cr-jrow__title">MLOps / AI Platform Engineer</h3>
              <p class="cr-jrow__desc">Build scalable ML infrastructure, model registries, and automated retraining pipelines to support continuous production AI deployment.</p>
            </div>
            <div class="cr-jrow__meta">
              <span class="cr-pill cr-pill--purple">Platform Eng.</span>
              <span class="cr-pill cr-pill--green">Remote</span>
              <span class="cr-pill">Full-time</span>
            </div>
            <button type="button" class="cr-jrow__btn" (click)="openApply('MLOps / AI Platform Engineer', 'Platform Eng.')">Apply <i class="ph ph-arrow-right"></i></button>
          </div>

          <div class="cr-jrow" [style.display]="currentPage === 1 ? 'grid' : 'none'">
            <div class="cr-jrow__icon" style="background:linear-gradient(135deg,#0369a1,#0ea5e9)"><i class="ph ph-chat-text"></i></div>
            <div class="cr-jrow__body">
              <h3 class="cr-jrow__title">NLP / Conversational AI Engineer</h3>
              <p class="cr-jrow__desc">Develop LLM applications, RAG pipelines, and conversational agents powering intelligent customer interactions and document processing.</p>
            </div>
            <div class="cr-jrow__meta">
              <span class="cr-pill cr-pill--sky">AI Research</span>
              <span class="cr-pill cr-pill--green">Remote</span>
              <span class="cr-pill">Full-time</span>
            </div>
            <button type="button" class="cr-jrow__btn" (click)="openApply('NLP / Conversational AI Engineer', 'AI Research')">Apply <i class="ph ph-arrow-right"></i></button>
          </div>

          <div class="cr-jrow" [style.display]="currentPage === 2 ? 'grid' : 'none'">
            <div class="cr-jrow__icon" style="background:linear-gradient(135deg,#b45309,#d97706)"><i class="ph ph-intersect"></i></div>
            <div class="cr-jrow__body">
              <h3 class="cr-jrow__title">AI Product Manager</h3>
              <p class="cr-jrow__desc">Define strategy and roadmaps for Everlume's AI agent portfolio, translating complex AI capabilities into measurable business outcomes.</p>
            </div>
            <div class="cr-jrow__meta">
              <span class="cr-pill cr-pill--amber">Product</span>
              <span class="cr-pill cr-pill--orange">Hybrid</span>
              <span class="cr-pill">Full-time</span>
            </div>
            <button type="button" class="cr-jrow__btn" (click)="openApply('AI Product Manager', 'Product')">Apply <i class="ph ph-arrow-right"></i></button>
          </div>

          <div class="cr-jrow" [style.display]="currentPage === 2 ? 'grid' : 'none'">
            <div class="cr-jrow__icon" style="background:linear-gradient(135deg,#be123c,#e11d48)"><i class="ph ph-shield-check"></i></div>
            <div class="cr-jrow__body">
              <h3 class="cr-jrow__title">AI Governance & Ethics Specialist</h3>
              <p class="cr-jrow__desc">Develop responsible AI frameworks, bias evaluation protocols, and compliance strategies for enterprise AI deployments across regulated industries.</p>
            </div>
            <div class="cr-jrow__meta">
              <span class="cr-pill cr-pill--red">Risk & Governance</span>
              <span class="cr-pill cr-pill--green">Remote</span>
              <span class="cr-pill">Full-time</span>
            </div>
            <button type="button" class="cr-jrow__btn" (click)="openApply('AI Governance & Ethics Specialist', 'Risk & Governance')">Apply <i class="ph ph-arrow-right"></i></button>
          </div>

        </div>

        <!-- PAGINATION -->
        <div class="cr-pagination">
          <span class="cr-pg__count">{{ currentPage === 1 ? '1 – 6' : '7 – 8' }} <span class="cr-pg__total">of 8 openings</span></span>
          <div class="cr-pg__pages">
            <button class="cr-pg__arrow" [disabled]="currentPage === 1" (click)="goToPage(currentPage - 1)">
              <i class="ph ph-caret-left"></i>
            </button>
            <button class="cr-pg__page" [class.cr-pg__page--active]="currentPage === 1" (click)="goToPage(1)">1</button>
            <button class="cr-pg__page" [class.cr-pg__page--active]="currentPage === 2" (click)="goToPage(2)">2</button>
            <button class="cr-pg__arrow" [disabled]="currentPage === 2" (click)="goToPage(currentPage + 1)">
              <i class="ph ph-caret-right"></i>
            </button>
          </div>
        </div>

      </div>
    </section>

    <!-- BENEFITS -->
    <section class="cr-benefits">
      <div class="cr-benefits__left">
        <span class="cr-benefits__eyebrow">Perks &amp; Benefits</span>
        <h2 class="cr-benefits__heading">Why you'll<br/><em>love it here</em></h2>
        <p class="cr-benefits__sub">We invest in the people who build the future. Here's what working at Everlume looks like.</p>
        <div class="cr-benefits__tally">
          <div class="cr-bt"><span class="cr-bt__n">6</span><span class="cr-bt__l">Core Perks</span></div>
          <div class="cr-bt"><span class="cr-bt__n">100%</span><span class="cr-bt__l">Remote Options</span></div>
        </div>
      </div>
      <div class="cr-benefits__right">
        <div class="cr-brow">
          <div class="cr-brow__icon" style="background:linear-gradient(135deg,#1B3A8F,#2a52c9)"><i class="ph ph-globe"></i></div>
          <div class="cr-brow__body"><h4>Remote-First</h4><p>Work from anywhere. We're a globally distributed team built around async collaboration and deep work.</p></div>
        </div>
     
        <div class="cr-brow">
          <div class="cr-brow__icon" style="background:linear-gradient(135deg,#e87722,#c96418)"><i class="ph ph-chart-bar"></i></div>
          <div class="cr-brow__body"><h4>Equity &amp; Growth</h4><p>Competitive salary, equity participation, and a clear progression framework to grow into leadership.</p></div>
        </div>
        <div class="cr-brow">
          <div class="cr-brow__icon" style="background:linear-gradient(135deg,#be123c,#e11d48)"><i class="ph ph-heartbeat"></i></div>
          <div class="cr-brow__body"><h4>Health &amp; Wellbeing</h4><p>Full health, dental &amp; vision coverage plus a monthly wellbeing allowance for fitness or therapy.</p></div>
        </div>
        <div class="cr-brow">
          <div class="cr-brow__icon" style="background:linear-gradient(135deg,#6d28d9,#8b5cf6)"><i class="ph ph-clock"></i></div>
          <div class="cr-brow__body"><h4>Flexible Hours</h4><p>No rigid 9-to-5. Own your schedule and deliver results at the times that work best for you.</p></div>
        </div>
        <div class="cr-brow">
          <div class="cr-brow__icon" style="background:linear-gradient(135deg,#0369a1,#0ea5e9)"><i class="ph ph-users-three"></i></div>
          <div class="cr-brow__body"><h4>Inclusive Culture</h4><p>We celebrate diversity and build a psychologically safe environment where everyone does their best work.</p></div>
        </div>
      </div>
    </section>

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
        <div [style.display]="formSubmitted ? 'none' : 'flex'" style="flex-direction:column;flex:1;min-height:0;overflow:hidden">
          <div class="cr-modal__header">
            <div>
              <span class="cr-modal__label">Apply for</span>
              <h3 class="cr-modal__title">{{ applyJob?.title }}</h3>
              <span class="cr-modal__dept">{{ applyJob?.dept }}</span>
            </div>
            <button type="button" class="cr-modal__close" (click)="closeApply()"><i class="ph ph-x"></i></button>
          </div>
          <form id="cr-apply-form" class="cr-modal__form" (submit)="submitApplication($event)" novalidate>
            <div class="cr-modal__fields">
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
              <div class="cr-mfield cr-mfield--full">
                <label>Resume / CV <span>*</span></label>
                <label class="cr-file-drop" [class.cr-file-drop--filled]="resumeFileName">
                  <input type="file" name="resume" accept=".pdf,.doc,.docx" (change)="onResumeChange($event)" />
                  <i class="ph" [class.ph-upload-simple]="!resumeFileName" [class.ph-file-check]="resumeFileName"></i>
                  <span class="cr-file-drop__text">{{ resumeFileName || 'Click to upload PDF, DOC or DOCX' }}</span>
                  <span class="cr-file-drop__hint" [style.display]="resumeFileName ? 'none' : 'block'">Max 5 MB</span>
                </label>
                <span class="cr-file-error" [style.display]="resumeError ? 'block' : 'none'">{{ resumeError }}</span>
              </div>
            </div>
          </form>
          <div class="cr-modal__footer">
            <button type="submit" form="cr-apply-form" class="cr-modal__submit">Submit Application <i class="ph ph-paper-plane-tilt"></i></button>
          </div>
        </div>

      </div>
    </div>

    <!-- CTA -->
    <section class="cr-cta">
      <div class="cr-cta__inner">
        <h2 class="cr-cta__heading">Don't see a role that fits?</h2>
        <p class="cr-cta__sub">We're always interested in hearing from exceptional people. Send us your CV and tell us how you'd like to contribute.</p>
        <a routerLink="/contact-us" class="cr-cta__btn">Get in Touch <i class="ph ph-arrow-right"></i></a>
      </div>
    </section>

  `,
  styles: [`
    :host { display: block; font-family: 'DM Sans', system-ui, sans-serif; }

    /* ── Shared ── */
    .breadcrumb-bar { background: #142d6b; padding: .55rem 3rem; display: flex; gap: .4rem; flex-wrap: wrap; }
    .breadcrumb-bar a, .breadcrumb-bar span { color: rgba(255,255,255,.65); font-size: .8rem; text-decoration: none; }
    .breadcrumb-bar .current { color: #E87722; font-weight: 600; }
    .breadcrumb-bar .sep { color: rgba(255,255,255,.35); margin: 0 .2rem; }
    .cr-eyebrow { display: inline-block; padding: .3rem .85rem; border-radius: 999px; background: rgba(232,119,34,.1); color: var(--orange,#e87722); font-size: .75rem; letter-spacing: .14em; text-transform: uppercase; font-weight: 600; margin-bottom: 1rem; }
    .cr-section-heading { font-family: 'DM Serif Display', serif; font-size: clamp(1.8rem,3.5vw,2.6rem); color: #101a3a; font-weight: 400; line-height: 1.15; margin: 0 0 1.2rem; }
    .cr-section-heading em { font-style: italic; color: var(--orange,#e87722); }

    /* ── Hero ── */
    .cr-hero { position: relative; height: 58vh; min-height: 400px; max-height: 520px; overflow: hidden; }
    .cr-hero__bg { position: absolute; inset: 0; }
    .cr-hero__bg img { width: 100%; height: 100%; object-fit: cover; transform: scale(1.04); animation: crHeroZoom 12s ease-out forwards; }
    @keyframes crHeroZoom { to { transform: scale(1); } }
    .cr-hero__overlay { position: absolute; inset: 0; background: radial-gradient(ellipse at 20% 40%, rgba(232,119,34,.22), transparent 55%), linear-gradient(170deg, rgba(10,18,50,.82) 0%, rgba(27,58,143,.65) 100%); }
    .cr-hero__abstract-ring { position: absolute; top: 8%; left: 4%; width: 220px; height: 220px; border: 1.5px solid rgba(255,255,255,.08); border-radius: 50%; z-index: 1; animation: crSpin 30s linear infinite; }
    .cr-hero__abstract-blob { position: absolute; bottom: 10%; right: 5%; width: 160px; height: 160px; background: rgba(232,119,34,.12); border-radius: 50%; z-index: 1; filter: blur(40px); animation: crDrift 14s ease-in-out infinite; }
    @keyframes crSpin { to { transform: rotate(360deg); } }
    @keyframes crDrift { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
    .cr-hero__content { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 2rem; z-index: 2; }
    .cr-hero__badge { display: inline-flex; align-items: center; gap: .5rem; background: rgba(255,255,255,.1); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,.2); border-radius: 999px; padding: .35rem 1.1rem; margin-bottom: 1.5rem; }
    .cr-hero__badge-dot { width: 8px; height: 8px; border-radius: 50%; background: #4ade80; box-shadow: 0 0 8px #4ade80; animation: crPulse 2s infinite; }
    @keyframes crPulse { 0%,100% { opacity: 1; } 50% { opacity: .4; } }
    .cr-hero__badge span:last-child { color: #fff; font-size: .78rem; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; }
    .cr-hero__heading { font-family: 'DM Serif Display', serif; font-size: clamp(1.9rem,4.5vw,3.2rem); color: #fff; font-weight: 400; line-height: 1.1; margin-bottom: 1.2rem; }
    .cr-hero__heading em { font-style: italic; color: var(--orange,#e87722); }
    .cr-hero__sub { font-size: .98rem; color: rgba(255,255,255,.75); max-width: 600px; line-height: 1.65; margin-bottom: 2rem; }
    .cr-hero__cta { display: inline-flex; align-items: center; gap: .5rem; background: var(--orange,#e87722); color: #fff; font-weight: 700; font-size: .9rem; padding: .8rem 1.9rem; border-radius: 999px; text-decoration: none; transition: background .3s, transform .3s; }
    .cr-hero__cta:hover { background: #c96418; transform: translateY(-3px); }

    /* ── Culture ── */
    .cr-culture { padding: 3rem 3rem; background: #fff; position: relative; overflow: hidden; }
    .cr-culture::before { content: ""; position: absolute; top: -80px; right: -80px; width: 320px; height: 320px; background: radial-gradient(circle, rgba(232,119,34,.06), transparent 70%); border-radius: 50%; pointer-events: none; }
    .cr-culture__inner { max-width: 1180px; margin: 0 auto; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 3.5rem; align-items: center; }
    .cr-culture__text p { font-size: 1rem; color: #444; line-height: 1.85; margin-bottom: 1.2rem; }
    .cr-culture__stats { display: flex; flex-wrap: wrap; gap: 1rem 2.5rem; margin-top: 1.2rem; }
    .cr-stat__value { display: block; font-family: 'DM Serif Display', serif; font-size: 2rem; color: #1B3A8F; line-height: 1; }
    .cr-stat__label { display: block; font-size: .78rem; color: #888; text-transform: uppercase; letter-spacing: .1em; margin-top: .25rem; }
    .cr-culture__visual { position: relative; }
    .cr-culture__img-wrap { border-radius: 24px; overflow: hidden; box-shadow: 0 20px 60px rgba(27,58,143,.14); }
    .cr-culture__img-wrap img { width: 100%; height: 240px; object-fit: cover; display: block; }
    .cr-culture__badge-card { position: absolute; bottom: -20px; left: -20px; background: #fff; border-radius: 16px; padding: 1rem 1.3rem; box-shadow: 0 10px 40px rgba(0,0,0,.1); display: flex; align-items: center; gap: .75rem; }
    .cr-culture__badge-card i.ph { font-size: 1.5rem; color: var(--orange,#e87722); }
    .cr-culture__badge-card strong { display: block; font-size: .85rem; color: #101a3a; }
    .cr-culture__badge-card span { font-size: .75rem; color: #888; }

    /* ── Roles ── */
    .cr-roles { padding: 5rem 3rem; background: #f7f8fc; }
    .cr-roles__inner { max-width: 1000px; margin: 0 auto; }
    .cr-roles__header { text-align: center; margin-bottom: 3rem; }
    .cr-roles__sub { font-size: 1rem; color: #666; max-width: 580px; margin: 0 auto; line-height: 1.7; }
    .cr-jobs { display: flex; flex-direction: column; gap: 1rem; }
    .cr-jrow { display: grid; grid-template-columns: 56px 1fr auto auto; align-items: center; gap: 1.4rem; background: #fff; border-radius: 16px; padding: 1.4rem 1.8rem; border: 1px solid rgba(27,58,143,.07); box-shadow: 0 2px 12px rgba(27,58,143,.05); transition: transform .25s, box-shadow .25s; }
    .cr-jrow:hover { transform: translateY(-3px); box-shadow: 0 10px 32px rgba(27,58,143,.11); }
    .cr-jrow__icon { width: 52px; height: 52px; border-radius: 14px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .cr-jrow__icon i.ph { font-size: 1.35rem; color: #fff; }
    .cr-jrow__body { min-width: 0; }
    .cr-jrow__title { font-family: 'DM Serif Display', serif; font-size: 1.1rem; color: #101a3a; font-weight: 400; margin: 0 0 .3rem; }
    .cr-jrow__desc { font-size: .84rem; color: #666; line-height: 1.6; margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .cr-jrow__meta { display: flex; gap: .4rem; flex-wrap: wrap; justify-content: flex-end; }
    .cr-pill { display: inline-block; padding: .25rem .7rem; border-radius: 999px; font-size: .7rem; font-weight: 600; border: 1px solid rgba(27,58,143,.18); color: #1B3A8F; background: rgba(27,58,143,.05); white-space: nowrap; }
    .cr-pill--blue   { border-color: rgba(27,58,143,.3);  color: #1B3A8F; background: rgba(27,58,143,.07); }
    .cr-pill--green  { border-color: rgba(22,163,74,.35); color: #15803d; background: rgba(22,163,74,.07); }
    .cr-pill--orange { border-color: rgba(194,65,12,.35); color: #c2410c; background: rgba(251,146,60,.08); }
    .cr-pill--teal   { border-color: rgba(13,122,95,.3);  color: #0d7a5f; background: rgba(13,122,95,.07); }
    .cr-pill--purple { border-color: rgba(109,40,217,.3); color: #6d28d9; background: rgba(109,40,217,.06); }
    .cr-pill--sky    { border-color: rgba(3,105,161,.3);  color: #0369a1; background: rgba(14,165,233,.07); }
    .cr-pill--amber  { border-color: rgba(180,83,9,.3);   color: #b45309; background: rgba(217,119,6,.07); }
    .cr-pill--red    { border-color: rgba(190,18,60,.3);  color: #be123c; background: rgba(225,29,72,.07); }
    .cr-jrow__btn { display: inline-flex; align-items: center; gap: .35rem; color: #fff; background: #1B3A8F; font-weight: 700; font-size: .82rem; text-decoration: none; border-radius: 999px; padding: .55rem 1.3rem; white-space: nowrap; transition: background .25s, transform .25s; flex-shrink: 0; }
    .cr-jrow__btn:hover { background: #e87722; transform: translateY(-2px); }

    /* ── Pagination ── */
    .cr-pagination { display: flex; align-items: center; justify-content: flex-end; gap: .9rem; margin-top: 1rem; padding: .8rem 1.8rem; }
    .cr-pg__count { font-size: .78rem; color: #888; letter-spacing: .04em; margin-right: .4rem; }
    .cr-pg__total { color: #bbb; }
    .cr-pg__pages { display: flex; align-items: center; gap: .35rem; }
    .cr-pg__page { width: 34px; height: 34px; border-radius: 10px; border: 1.5px solid rgba(27,58,143,.2); background: #fff; color: #1B3A8F; font-weight: 700; font-size: .82rem; cursor: pointer; transition: all .2s; }
    .cr-pg__page:hover { background: rgba(27,58,143,.07); }
    .cr-pg__page--active { background: #1B3A8F; color: #fff; border-color: #1B3A8F; }
    .cr-pg__arrow { width: 34px; height: 34px; border-radius: 50%; border: 1.5px solid rgba(27,58,143,.2); background: #fff; color: #1B3A8F; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: .95rem; transition: all .2s; }
    .cr-pg__arrow:hover:not([disabled]) { background: #1B3A8F; color: #fff; border-color: #1B3A8F; }
    .cr-pg__arrow[disabled] { opacity: .35; cursor: default; }

    /* ── Benefits ── */
    .cr-benefits { display: grid; grid-template-columns: 1fr 1.4fr; min-height: 480px; }
    .cr-benefits__left { background: linear-gradient(160deg, #060d1f 0%, #1B3A8F 100%); padding: 4.5rem 3.5rem; display: flex; flex-direction: column; justify-content: center; position: relative; overflow: hidden; }
    .cr-benefits__left::after { content: ''; position: absolute; bottom: -60px; right: -60px; width: 260px; height: 260px; border: 1.5px solid rgba(255,255,255,.07); border-radius: 50%; pointer-events: none; }
    .cr-benefits__eyebrow { display: inline-block; padding: .3rem .85rem; border-radius: 999px; background: rgba(232,119,34,.18); color: #e87722; font-size: .7rem; letter-spacing: .14em; text-transform: uppercase; font-weight: 600; margin-bottom: 1.2rem; width: fit-content; }
    .cr-benefits__heading { font-family: 'DM Serif Display', serif; font-size: clamp(2rem,3vw,2.8rem); color: #fff; font-weight: 400; line-height: 1.15; margin: 0 0 1rem; }
    .cr-benefits__heading em { color: #e87722; font-style: italic; }
    .cr-benefits__sub { font-size: .92rem; color: rgba(255,255,255,.62); line-height: 1.75; margin: 0 0 2.5rem; }
    .cr-benefits__tally { display: flex; gap: 2rem; }
    .cr-bt__n { display: block; font-family: 'DM Serif Display', serif; font-size: 2.2rem; color: #e87722; line-height: 1; }
    .cr-bt__l { display: block; font-size: .72rem; color: rgba(255,255,255,.5); text-transform: uppercase; letter-spacing: .1em; margin-top: .25rem; }
    .cr-benefits__right { background: #fff; padding: 2rem 3.5rem; display: flex; flex-direction: column; justify-content: center; }
    .cr-brow { display: flex; align-items: flex-start; gap: 1.2rem; padding: 1.1rem 0; border-bottom: 1px solid rgba(27,58,143,.07); }
    .cr-brow:last-child { border-bottom: none; }
    .cr-brow__icon { width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .cr-brow__icon i.ph { font-size: 1.2rem; color: #fff; }
    .cr-brow__body h4 { font-size: .95rem; font-weight: 700; color: #101a3a; margin: 0 0 .25rem; }
    .cr-brow__body p { font-size: .82rem; color: #666; line-height: 1.65; margin: 0; }

    /* ── CTA ── */
    .cr-cta { padding: 5rem 3rem; background: linear-gradient(135deg, #060d1f, #1B3A8F); text-align: center; }
    .cr-cta__inner { max-width: 640px; margin: 0 auto; }
    .cr-cta__heading { font-family: 'DM Serif Display', serif; font-size: clamp(1.8rem,3.5vw,2.4rem); color: #fff; font-weight: 400; margin-bottom: 1rem; }
    .cr-cta__sub { font-size: 1rem; color: rgba(255,255,255,.72); line-height: 1.7; margin-bottom: 2rem; }
    .cr-cta__btn { display: inline-flex; align-items: center; gap: .5rem; background: var(--orange,#e87722); color: #fff; font-weight: 700; font-size: .95rem; padding: .9rem 2rem; border-radius: 999px; text-decoration: none; transition: background .3s, transform .3s; }
    .cr-cta__btn:hover { background: #c96418; transform: translateY(-3px); }

    /* ── Apply Modal ── */
    .cr-modal-overlay { position: fixed; inset: 0; background: rgba(6,13,31,.72); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); z-index: 1200; display: flex; align-items: center; justify-content: center; padding: 1rem; }
    .cr-modal { background: #fff; border-radius: 20px; width: 100%; max-width: 620px; max-height: 92vh; overflow: hidden; box-shadow: 0 30px 80px rgba(0,0,0,.3); display: flex; flex-direction: column; animation: crModalIn .3s cubic-bezier(.22,1,.36,1); }
    @keyframes crModalIn { from { opacity: 0; transform: translateY(24px) scale(.97); } to { opacity: 1; transform: none; } }
    .cr-modal__header { display: flex; justify-content: space-between; align-items: flex-start; padding: 1.8rem 2rem 1.2rem; border-bottom: 1px solid #eef0f6; flex-shrink: 0; }
    .cr-modal__label { font-size: .7rem; text-transform: uppercase; letter-spacing: .12em; color: #e87722; font-weight: 700; display: block; }
    .cr-modal__title { font-family: 'DM Serif Display', serif; font-size: 1.35rem; color: #101a3a; font-weight: 400; margin: .25rem 0 .3rem; }
    .cr-modal__dept { font-size: .78rem; color: #888; }
    .cr-modal__close { width: 36px; height: 36px; border-radius: 50%; border: 1.5px solid #e2e6ef; background: #f7f8fc; color: #444; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 1.1rem; flex-shrink: 0; transition: background .2s; }
    .cr-modal__close:hover { background: #edf0f8; }
    .cr-modal__form { flex: 1; min-height: 0; overflow: hidden; display: flex; flex-direction: column; }
    .cr-modal__fields { flex: 1; overflow-y: auto; padding: 1.5rem 2rem; display: flex; flex-direction: column; gap: 1rem; }
    .cr-modal__footer { flex-shrink: 0; padding: 1rem 2rem 1.4rem; border-top: 1px solid #eef0f6; background: #fff; border-radius: 0 0 20px 20px; }
    .cr-modal__submit { width: 100%; display: flex; align-items: center; justify-content: center; gap: .5rem; background: #1B3A8F; color: #fff; border: none; border-radius: 999px; padding: .85rem 2rem; font-weight: 700; font-size: .9rem; cursor: pointer; transition: background .25s, transform .25s; }
    .cr-mfield { display: flex; flex-direction: column; gap: .4rem; }
    .cr-mfield--full { grid-column: 1 / -1; }
    .cr-mfield label { font-size: .8rem; font-weight: 600; color: #101a3a; }
    .cr-mfield label span { color: #e11d48; }
    .cr-mfield input, .cr-mfield textarea { border: 1.5px solid #d6dce8; border-radius: 10px; padding: .65rem .9rem; font-size: .88rem; font-family: inherit; color: #101a3a; background: #f9faff; outline: none; transition: border-color .2s; resize: vertical; width: 100%; box-sizing: border-box; }
    .cr-mfield input:focus, .cr-mfield textarea:focus { border-color: #1B3A8F; background: #fff; }
    .cr-mfield input:invalid:not(:placeholder-shown), .cr-mfield textarea:invalid:not(:placeholder-shown) { border-color: #e11d48; }
    .cr-modal__row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    .cr-modal__submit:hover { background: #e87722; transform: translateY(-2px); }
    .cr-modal__success { display: flex; flex-direction: column; align-items: center; padding: 3.5rem 2rem; text-align: center; gap: .8rem; }
    .cr-modal__success-icon i.ph { font-size: 3.5rem; color: #16a34a; }
    .cr-modal__success h3 { font-family: 'DM Serif Display', serif; font-size: 1.5rem; color: #101a3a; font-weight: 400; margin: 0; }
    .cr-modal__success p { font-size: .9rem; color: #666; line-height: 1.7; margin: 0; max-width: 380px; }
    .cr-modal__done-btn { margin-top: .5rem; background: #1B3A8F; color: #fff; border: none; border-radius: 999px; padding: .75rem 2rem; font-weight: 700; font-size: .88rem; cursor: pointer; transition: background .25s; }
    .cr-modal__done-btn:hover { background: #e87722; }
    .cr-file-drop { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: .35rem; border: 2px dashed #d6dce8; border-radius: 10px; padding: 1.4rem 1rem; cursor: pointer; transition: border-color .2s, background .2s; background: #f9faff; text-align: center; }
    .cr-file-drop input[type=file] { display: none; }
    .cr-file-drop i.ph { font-size: 1.6rem; color: #1B3A8F; }
    .cr-file-drop:hover { border-color: #1B3A8F; background: #f0f4ff; }
    .cr-file-drop__text { font-size: .83rem; color: #444; font-weight: 500; }
    .cr-file-drop__hint { font-size: .72rem; color: #aaa; }
    .cr-file-drop--filled { border-color: #16a34a; background: #f0fdf4; border-style: solid; }
    .cr-file-drop--filled i.ph { color: #16a34a; }
    .cr-file-drop--filled .cr-file-drop__text { color: #166534; font-weight: 600; }
    .cr-file-error { font-size: .75rem; color: #e11d48; margin-top: .25rem; display: block; }
    @media (max-width: 600px) { .cr-modal { border-radius: 16px; } .cr-modal__header { padding: 1.4rem 1.2rem 1rem; } .cr-modal__fields { padding: 1.2rem 1.2rem 1rem; } .cr-modal__footer { padding: 0.75rem 1.2rem 1.2rem; border-radius: 0 0 16px 16px; } .cr-modal__row { grid-template-columns: 1fr; } }

    /* ── Responsive ── */
    @media (max-width: 900px) {
      .cr-culture__inner { grid-template-columns: 1fr; gap: 3rem; }
      .cr-culture__img-wrap img { height: 260px; }
      .cr-culture__badge-card { display: none; }
      .cr-roles { padding: 4rem 1.5rem; }
      .cr-culture { padding: 4rem 1.5rem; }
      .cr-benefits { grid-template-columns: 1fr; }
      .cr-benefits__left { padding: 3.5rem 2rem; }
      .cr-benefits__right { padding: 2rem; }
      .cr-jrow { grid-template-columns: 52px 1fr; }
      .cr-jrow__meta { display: none; }
      .cr-jrow__btn { grid-column: 2; justify-self: start; }
    }
    @media (max-width: 600px) {
      .cr-hero { height: 70vw; min-height: 300px; }
      .cr-jrow__desc { display: none; }
    }
  `],
})
export class Career {
  currentPage = 1;
  applyJob: { title: string; dept: string } | null = null;
  formSubmitted = false;
  sending = false;
  resumeFileName = '';
  resumeBase64 = '';
  resumeError = '';
    private readonly recipientEmail = 'truthstarindia@gmail.com';

  goToPage(n: number) {
    this.currentPage = n;
    document.getElementById('cr-open-roles')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  openApply(title: string, dept: string) {
    this.applyJob = { title, dept };
    this.formSubmitted = false;
    this.sending = false;
    this.resumeFileName = '';
    this.resumeBase64 = '';
    this.resumeError = '';
    document.body.style.overflow = 'hidden';
  }

  closeApply() {
    this.applyJob = null;
    this.formSubmitted = false;
    this.sending = false;
    this.resumeFileName = '';
    this.resumeBase64 = '';
    this.resumeError = '';
    document.body.style.overflow = '';
  }

  onResumeChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    this.resumeError = '';
    this.resumeFileName = '';
    this.resumeBase64 = '';
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      this.resumeError = 'File too large — max 5 MB allowed.';
      input.value = '';
      return;
    }
    this.resumeFileName = file.name;
    const reader = new FileReader();
    reader.onload = (e) => { this.resumeBase64 = (e.target?.result as string) ?? ''; };
    reader.onerror = () => { this.resumeError = 'Could not read file. Please try again.'; this.resumeFileName = ''; };
    reader.readAsDataURL(file);
  }

  submitApplication(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    if (!this.resumeFileName) { this.resumeError = 'Please upload your resume.'; return; }
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
      resumeFileName: this.resumeFileName,
      resumeData: this.resumeBase64,
      submittedAt: new Date().toISOString(),
    };

    // Save to localStorage as backup
    try {
      const raw = localStorage.getItem('everlume_applications');
      const existing: object[] = raw ? (JSON.parse(raw) as object[]) : [];
      existing.push(application);
      localStorage.setItem('everlume_applications', JSON.stringify(existing));
    } catch (_) { /* storage quota exceeded or unavailable */ }

    this.sending = true;

    // Append Formsubmit config + extra fields; file input 'resume' is already in fd
    fd.append('_subject',     `New Application: ${application.job} — ${application.name}`);
    fd.append('_captcha',     'false');
    fd.append('Job Title',    application.job);
    fd.append('Department',   application.department);
    fd.append('Submitted At', application.submittedAt);

    fetch(`https://formsubmit.co/ajax/${encodeURIComponent(this.recipientEmail)}`,
  {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: fd,
    })
    .then(r => r.json())
    .then(res => { if (!res.success) console.error('Formsubmit error:', res); })
    .catch(err => console.error('Formsubmit error:', err))
    .finally(() => { this.sending = false; });

    this.formSubmitted = true;
  }
  
}