import { Component, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-care-gap-identification',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- ─── BREADCRUMB ─────────────────────────────────────── -->
    <div class="breadcrumb-bar">
      <a routerLink="/">Home</a>
      <span class="sep">›</span>
      <a routerLink="/who-we-serve/healthcare">Healthcare</a>
      <span class="sep">›</span>
      <span class="current">Care Gap Identification and Follow-up Automation</span>
    </div>

    <!-- ─── HERO ───────────────────────────────────────────── -->
    <section class="cg-hero">
      <div class="cg-hero__bg">
        <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1800&q=80" alt="Care Gap Identification" />
        <div class="cg-hero__overlay"></div>
      </div>
      <div class="cg-hero__abstract-ring"></div>
      <div class="cg-hero__abstract-blob"></div>
      <div class="cg-hero__particles" id="cg-particles"></div>
      <div class="cg-hero__content" data-reveal>
        <div class="cg-hero__badge">
          <span class="cg-hero__badge-dot"></span>
          <span>Agentic AI Solution</span>
        </div>
        <h1 class="cg-hero__heading">Care Gap Identification and<br/><em>Follow-up Automation</em></h1>
        <p class="cg-hero__sub">Proactive identification of care gaps with automated patient outreach and follow-up orchestration to improve clinical outcomes.</p>
        <a href="#cg-capabilities" class="cg-hero__cta">
          Explore Capabilities
          <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
    </section>

    <!-- ─── INTRO ──────────────────────────────────────────── -->
    <section class="cg-intro">
      <div class="cg-intro__blob"></div>
      <div class="cg-intro__dots"></div>
      <div class="cg-intro__grid">
        <div class="cg-intro__text" data-reveal-left>
          <span class="cg-eyebrow">Overview</span>
          <h2 class="cg-section-heading">Intelligent AI agents that <em>close</em> care gaps proactively</h2>
          <p>Our Agentic AI solution for Care Gap Identification and Follow-up Automation enables healthcare organisations to proactively identify, prioritise, and close gaps in patient care, improving clinical outcomes while enhancing operational efficiency. Intelligent AI agents continuously analyse patient data, compare it against evidence-based clinical guidelines, and orchestrate timely follow-up actions to ensure patients receive the right care at the right time.</p>
          <p>The solution seamlessly integrates with Electronic Health Records (EHRs), population health platforms, care management systems, and patient engagement channels to analyse both structured and unstructured clinical data, including physician notes, laboratory results, diagnostic reports, medication histories, referral information, and previous encounters. By identifying preventive, chronic disease, and post-discharge care gaps, the AI agents prioritise patients based on clinical risk, care programme requirements, and organisational objectives, while autonomously initiating the appropriate follow-up workflows.</p>
          <p>From scheduling preventive screenings and annual wellness visits to coordinating chronic disease management, medication adherence programmes, and post-discharge follow-up, the solution intelligently orchestrates patient engagement and care team activities, helping healthcare organisations improve quality measures, strengthen value-based care performance, and deliver more personalised, proactive care.</p>
        </div>
        <div class="cg-intro__visual" data-reveal-right>
          <div class="cg-intro__dot-grid"></div>
          <div class="cg-intro__ring"></div>
          <div class="cg-intro__img">
            <img src="https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=800&q=80" alt="Care Gap AI" loading="lazy" />
          </div>
          <div class="cg-intro__float-card">
            <div class="cg-intro__float-icon">🎯</div>
            <div class="cg-intro__float-text">
              <strong>Proactive Care</strong>
              <span>AI-powered follow-up</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── KEY CAPABILITIES ───────────────────────────────── -->
    <section class="cg-capabilities" id="cg-capabilities">
      <div class="cg-capabilities__ring"></div>
      <div class="cg-capabilities__blob"></div>
      <div class="cg-capabilities__inner">
        <div class="cg-capabilities__header" data-reveal>
          <span class="cg-eyebrow">Key Capabilities</span>
          <h2 class="cg-section-heading">End-to-end <em>care gap intelligence</em></h2>
        </div>
        <div class="cg-capabilities__grid">
          <div class="cg-cap-card" data-reveal>
            <div class="cg-cap-card__icon">
              <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </div>
            <h3>Gap Detection</h3>
            <p>Identify missed preventive screenings, overdue follow-up appointments, unresolved care actions, and chronic disease management gaps.</p>
          </div>
          <div class="cg-cap-card" data-reveal>
            <div class="cg-cap-card__icon">
              <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            </div>
            <h3>Clinical Data Analysis</h3>
            <p>Analyse structured and unstructured clinical data, including EHR records, physician notes, laboratory results, diagnostic reports, and historical encounters.</p>
          </div>
          <div class="cg-cap-card" data-reveal>
            <div class="cg-cap-card__icon">
              <svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
            </div>
            <h3>Guideline Evaluation</h3>
            <p>Evaluate patient records against evidence-based clinical guidelines, quality measures, and organisational care protocols.</p>
          </div>
          <div class="cg-cap-card" data-reveal>
            <div class="cg-cap-card__icon">
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <h3>Patient Prioritisation</h3>
            <p>Prioritise patients using clinical risk stratification, urgency, care programme requirements, and population health objectives.</p>
          </div>
          <div class="cg-cap-card" data-reveal>
            <div class="cg-cap-card__icon">
              <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z"/></svg>
            </div>
            <h3>Automated Outreach</h3>
            <p>Automate patient outreach through SMS, email, patient portals, voice assistants, and care coordination workflows.</p>
          </div>
          <div class="cg-cap-card" data-reveal>
            <div class="cg-cap-card__icon">
              <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </div>
            <h3>Smart Reminders</h3>
            <p>Generate appointment reminders, scheduling prompts, medication adherence notifications, and personalised care recommendations.</p>
          </div>
          <div class="cg-cap-card" data-reveal>
            <div class="cg-cap-card__icon">
              <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3>Follow-up Orchestration</h3>
            <p>Create and orchestrate follow-up tasks for clinicians, care managers, and administrative teams across integrated workflows.</p>
          </div>
          <div class="cg-cap-card" data-reveal>
            <div class="cg-cap-card__icon">
              <svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            </div>
            <h3>Real-time Monitoring</h3>
            <p>Monitor care gap closure, update clinical records automatically, and provide real-time visibility into patient engagement and programme performance.</p>
          </div>
          <div class="cg-cap-card" data-reveal>
            <div class="cg-cap-card__icon">
              <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3>Human-in-the-Loop</h3>
            <p>Escalate complex, low-confidence, or clinically sensitive cases to care teams for expert review through a human-in-the-loop framework.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── WHY IT MATTERS ─────────────────────────────────── -->
    <section class="cg-why">
      <div class="cg-why__bg-grid"></div>
      <div class="cg-why__glow-1"></div>
      <div class="cg-why__glow-2"></div>
      <div class="cg-why__inner">
        <div class="cg-why__header" data-reveal>
          <span class="cg-eyebrow cg-eyebrow--light">Why It Matters</span>
          <h2 class="cg-section-heading cg-section-heading--light">Why it matters</h2>
          <p class="cg-why__text">Closing care gaps is fundamental to improving patient outcomes, advancing value-based care, and enhancing population health performance. Yet many healthcare organisations continue to rely on fragmented data, manual chart reviews, and disconnected workflows, making it difficult to identify patients requiring timely interventions. Agentic AI transforms this process by continuously monitoring patient records, identifying care opportunities in real time, and intelligently orchestrating follow-up activities across clinical and administrative teams. This proactive approach enables healthcare organisations to move beyond reactive care management, improving care continuity, patient engagement, and overall clinical quality while reducing administrative burden.</p>
        </div>
      </div>
    </section>

    <!-- ─── BUSINESS VALUE ─────────────────────────────────── -->
    <section class="cg-value" data-reveal>
      <div class="cg-value__ring"></div>
      <div class="cg-value__inner">
        <span class="cg-eyebrow">Business Value</span>
        <h2 class="cg-section-heading">Business value</h2>
        <div class="cg-value__grid">
          <div class="cg-value-card">
            <div class="cg-value-card__icon">⚡</div>
            <span>Accelerate the identification and closure of preventive, chronic care, and post-discharge care gaps.</span>
          </div>
          <div class="cg-value-card">
            <div class="cg-value-card__icon">✅</div>
            <span>Improve patient engagement and follow-up completion rates through intelligent, personalised outreach.</span>
          </div>
          <div class="cg-value-card">
            <div class="cg-value-card__icon">📉</div>
            <span>Reduce manual chart reviews and administrative effort by automating care gap detection and workflow coordination.</span>
          </div>
          <div class="cg-value-card">
            <div class="cg-value-card__icon">🤝</div>
            <span>Enhance care continuity and coordination across providers, care teams, and patient engagement channels.</span>
          </div>
          <div class="cg-value-card">
            <div class="cg-value-card__icon">📊</div>
            <span>Improve quality performance against HEDIS®, CMS Star Ratings, and other value-based care measures.</span>
          </div>
          <div class="cg-value-card">
            <div class="cg-value-card__icon">🏥</div>
            <span>Strengthen population health management through proactive risk identification, prioritisation, and intervention.</span>
          </div>
          <div class="cg-value-card">
            <div class="cg-value-card__icon">📈</div>
            <span>Increase operational efficiency while delivering better clinical outcomes, patient satisfaction, and financial performance.</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── GOVERNANCE ─────────────────────────────────────── -->
    <section class="cg-governance">
      <div class="cg-governance__inner" data-reveal>
        <div class="cg-governance__icon-wrap">
          <svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        </div>
        <h2 class="cg-section-heading">Governance and <em>Control</em></h2>
        <p>Our Agentic AI solutions are built on a foundation of enterprise-grade governance, clinical safety, and regulatory compliance. Configurable clinical rules, transparent decision logic, comprehensive audit trails, and continuous workflow monitoring ensure that every recommendation is traceable and aligned with organisational policies and evidence-based care guidelines. Human-in-the-loop oversight is embedded throughout the process, automatically escalating clinically sensitive, high-risk, or low-confidence cases for expert review. This governance-first approach enables healthcare organisations to scale AI-driven care coordination while preserving clinical judgement, patient safety, accountability, and regulatory compliance.</p>
      </div>
    </section>

    <!-- ─── CTA BAND ──────────────────────────────────────── -->
    <section class="cg-cta">
      <div class="cg-cta__ring"></div>
      <div class="cg-cta__dots"></div>
      <h2 class="cg-cta__heading">Ready to close care gaps at scale?</h2>
      <p class="cg-cta__sub">Let's discuss how Agentic AI can transform your care gap identification and follow-up workflows.</p>
      <a routerLink="/contact-us" class="cg-cta__btn">
        Schedule a Consultation
        <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
    </section>
  `,
  styles: [`
    :host {
      --blue: #1B3A8F;
      --orange: #E87722;
      --dark: #111111;
      --bg: #f5f5f3;
      --mid: #555555;
      --card-bg: #ffffff;
      --teal: #1B3A8F;
      --teal-dark: #142d6b;
      --teal-light: #E87722;
    }

    /* ─── BREADCRUMB ─────────────────────────────────────── */
    .breadcrumb-bar { background: var(--teal-dark); padding: 0.55rem 3rem; }
    .breadcrumb-bar a, .breadcrumb-bar span { color: rgba(255,255,255,0.65); font-size: 0.8rem; font-weight: 500; text-decoration: none; }
    .breadcrumb-bar a:hover { color: #fff; }
    .breadcrumb-bar .sep { margin: 0 0.45rem; color: rgba(255,255,255,0.3); }
    .breadcrumb-bar .current { color: var(--teal-light); font-weight: 600; }
    @media (max-width: 768px) { .breadcrumb-bar { padding: 0.55rem 1rem; margin-top: 58px; } }

    /* ─── SHARED ─────────────────────────────────────────── */
    .cg-eyebrow { display: inline-block; color: var(--teal); font-size: 0.78rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 1rem; }
    .cg-eyebrow--light { color: var(--orange); }
    .cg-section-heading { font-family: "DM Serif Display", serif; font-size: clamp(1.8rem, 3vw, 2.5rem); color: var(--dark); font-weight: 400; line-height: 1.2; margin-bottom: 1.2rem; }
    .cg-section-heading em { color: var(--orange); font-style: italic; }
    .cg-section-heading--light { color: #fff; }

    /* ─── HERO ───────────────────────────────────────────── */
    .cg-hero { position: relative; height: 55vh; min-height: 360px; max-height: 480px; overflow: hidden; }
    .cg-hero__bg { position: absolute; inset: 0; }
    .cg-hero__bg img { width: 100%; height: 100%; object-fit: cover; transform: scale(1.05); animation: heroZoom 12s ease-out forwards; }
    @keyframes heroZoom { to { transform: scale(1); } }
    .cg-hero__overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(15,23,42,0.35) 0%, rgba(27,58,143,0.78) 100%); }
    .cg-hero__abstract-ring { position: absolute; top: 8%; left: 4%; width: 220px; height: 220px; border: 1.5px solid rgba(255,255,255,0.1); border-radius: 50%; z-index: 1; animation: spinSlow 28s linear infinite; }
    .cg-hero__abstract-blob { position: absolute; bottom: 12%; right: 6%; width: 140px; height: 140px; background: rgba(232,119,34,0.15); border-radius: 50%; z-index: 1; filter: blur(40px); animation: drift 14s ease-in-out infinite; }
    .cg-hero__particles { position: absolute; inset: 0; z-index: 1; overflow: hidden; pointer-events: none; }
    .cg-hero__particle { position: absolute; width: 4px; height: 4px; background: rgba(255,255,255,0.4); border-radius: 50%; animation: particleRise linear infinite; }
    @keyframes particleRise { 0% { transform: translateY(100vh) scale(0); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(-20px) scale(1); opacity: 0; } }
    .cg-hero__content { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 2rem; z-index: 2; }
    .cg-hero__badge { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.1); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.2); border-radius: 999px; padding: 0.35rem 1.1rem; margin-bottom: 1.5rem; opacity: 0; transform: translateY(12px); animation: fadeUp 0.8s 0.3s forwards; }
    .cg-hero__badge-dot { width: 7px; height: 7px; background: var(--teal-light); border-radius: 50%; animation: pulse 2s infinite; }
    @keyframes pulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.5; transform:scale(0.7); } }
    .cg-hero__badge span:last-child { color: #fff; font-size: 0.78rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; }
    .cg-hero__heading { font-family: "DM Serif Display", serif; font-size: clamp(1.8rem, 4vw, 3rem); color: #fff; font-weight: 400; line-height: 1.1; margin-bottom: 1.2rem; opacity: 0; transform: translateY(20px); animation: fadeUp 1s 0.5s forwards; }
    .cg-hero__heading em { font-style: italic; color: var(--orange); }
    .cg-hero__sub { font-size: 0.95rem; color: rgba(255,255,255,0.75); max-width: 580px; line-height: 1.6; margin-bottom: 1.5rem; opacity: 0; transform: translateY(20px); animation: fadeUp 1s 0.7s forwards; }
    .cg-hero__cta { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--orange); color: #fff; font-weight: 600; font-size: 0.9rem; padding: 0.75rem 1.8rem; border-radius: 999px; text-decoration: none; transition: background 0.3s, transform 0.3s, box-shadow 0.3s; opacity: 0; transform: translateY(20px); animation: fadeUp 1s 0.9s forwards; }
    .cg-hero__cta:hover { background: #c96418; color: #fff; transform: translateY(-3px); box-shadow: 0 12px 32px rgba(232,119,34,0.4); }
    @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
    @media (max-width: 768px) { .cg-hero { height: 50vh; min-height: 320px; } .cg-hero__sub { font-size: 0.88rem; } }

    /* ─── INTRO ──────────────────────────────────────────── */
    .cg-intro { padding: 6rem 3rem; max-width: 1200px; margin: 0 auto; position: relative; overflow: hidden; }
    .cg-intro__blob { position: absolute; top: -60px; right: -80px; width: 300px; height: 300px; background: radial-gradient(circle, rgba(27,58,143,0.06) 0%, transparent 70%); border-radius: 50%; animation: drift 15s ease-in-out infinite; pointer-events: none; }
    .cg-intro__dots { position: absolute; bottom: -40px; left: -40px; width: 150px; height: 150px; background-image: radial-gradient(circle, rgba(232,119,34,0.2) 1.5px, transparent 1.5px); background-size: 16px 16px; opacity: 0.6; pointer-events: none; animation: float 10s ease-in-out infinite; }
    .cg-intro__grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 5rem; align-items: center; }
    .cg-intro__text p { font-size: 1rem; color: #444; line-height: 1.85; margin-bottom: 1.2rem; }
    .cg-intro__visual { position: relative; padding: 2rem; }
    .cg-intro__ring { position: absolute; top: -10px; right: -10px; width: 280px; height: 280px; border: 2px dashed rgba(27,58,143,0.1); border-radius: 50%; animation: spinSlow 35s linear infinite; pointer-events: none; }
    .cg-intro__ring::after { content: ""; position: absolute; top: -5px; left: 50%; width: 10px; height: 10px; background: var(--orange); border-radius: 50%; box-shadow: 0 0 16px rgba(232,119,34,0.5); }
    .cg-intro__dot-grid { position: absolute; top: -15px; left: -15px; width: 120px; height: 120px; background-image: radial-gradient(circle, rgba(27,58,143,0.15) 1.5px, transparent 1.5px); background-size: 14px 14px; pointer-events: none; z-index: 0; }
    .cg-intro__img { width: 100%; border-radius: 24px; box-shadow: 0 20px 60px rgba(27,58,143,0.15); overflow: hidden; position: relative; z-index: 1; }
    .cg-intro__img img { width: 100%; height: auto; display: block; }
    .cg-intro__float-card { position: absolute; bottom: -30px; right: -20px; background: #fff; border-radius: 16px; padding: 1.1rem 1.4rem; box-shadow: 0 10px 40px rgba(0,0,0,0.1); display: flex; align-items: center; gap: 0.8rem; z-index: 2; animation: floatCard 4s ease-in-out infinite; }
    @keyframes floatCard { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
    .cg-intro__float-icon { width: 44px; height: 44px; background: linear-gradient(135deg, var(--orange), #c96418); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; }
    .cg-intro__float-text strong { display: block; font-size: 0.85rem; color: var(--dark); }
    .cg-intro__float-text span { font-size: 0.75rem; color: var(--mid); }
    @media (max-width: 991px) { .cg-intro { padding: 4rem 1.5rem; } .cg-intro__grid { grid-template-columns: 1fr; gap: 2.5rem; } .cg-intro__float-card { right: 10px; bottom: -20px; } }

    /* ─── CAPABILITIES ───────────────────────────────────── */
    .cg-capabilities { padding: 6rem 3rem; background: linear-gradient(180deg, rgba(27,58,143,0.04) 0%, var(--bg) 100%); position: relative; overflow: hidden; }
    .cg-capabilities__ring { position: absolute; top: 100px; left: -120px; width: 350px; height: 350px; border: 1.5px solid rgba(27,58,143,0.06); border-radius: 50%; pointer-events: none; animation: spinSlow 40s linear infinite; }
    .cg-capabilities__blob { position: absolute; bottom: 50px; right: -80px; width: 200px; height: 200px; background: rgba(232,119,34,0.04); border-radius: 50%; filter: blur(60px); animation: drift 15s ease-in-out infinite; pointer-events: none; }
    .cg-capabilities__inner { max-width: 1200px; margin: 0 auto; }
    .cg-capabilities__header { text-align: center; margin-bottom: 4rem; }
    .cg-capabilities__grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; counter-reset: cap-counter; }
    .cg-cap-card { background: var(--card-bg); border-radius: 20px; padding: 2rem 1.8rem; border: 1px solid rgba(27,58,143,0.06); position: relative; overflow: hidden; transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s, border-color 0.3s; display: flex; flex-direction: column; gap: 0.8rem; box-shadow: 0 4px 20px rgba(27,58,143,0.06); counter-increment: cap-counter; }
    .cg-cap-card::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 3px; background: linear-gradient(90deg, var(--blue), var(--orange)); opacity: 0.5; transition: opacity 0.4s, height 0.4s; }
    .cg-cap-card:hover::before { opacity: 1; height: 4px; }
    .cg-cap-card::after { content: "0" counter(cap-counter); position: absolute; bottom: 12px; right: 16px; font-family: "DM Serif Display", serif; font-size: 2.5rem; font-weight: 400; color: rgba(27,58,143,0.04); line-height: 1; pointer-events: none; transition: color 0.4s; }
    .cg-cap-card:hover::after { color: rgba(27,58,143,0.08); }
    .cg-cap-card:hover { transform: translateY(-8px); box-shadow: 0 20px 50px rgba(27,58,143,0.12); border-color: rgba(27,58,143,0.15); }
    .cg-cap-card__icon { width: 50px; height: 50px; background: linear-gradient(135deg, rgba(27,58,143,0.08), rgba(232,119,34,0.06)); border-radius: 14px; display: flex; align-items: center; justify-content: center; transition: background 0.3s, transform 0.3s; box-shadow: 0 2px 8px rgba(27,58,143,0.08); }
    .cg-cap-card:hover .cg-cap-card__icon { background: linear-gradient(135deg, var(--teal), var(--teal-dark)); transform: scale(1.1) rotate(-3deg); }
    .cg-cap-card__icon svg { width: 22px; height: 22px; }
    .cg-cap-card__icon svg path, .cg-cap-card__icon svg circle, .cg-cap-card__icon svg polyline, .cg-cap-card__icon svg line, .cg-cap-card__icon svg rect, .cg-cap-card__icon svg polygon { stroke: var(--teal); fill: none; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; transition: stroke 0.3s; }
    .cg-cap-card:hover .cg-cap-card__icon svg path, .cg-cap-card:hover .cg-cap-card__icon svg circle, .cg-cap-card:hover .cg-cap-card__icon svg polyline, .cg-cap-card:hover .cg-cap-card__icon svg line, .cg-cap-card:hover .cg-cap-card__icon svg rect, .cg-cap-card:hover .cg-cap-card__icon svg polygon { stroke: #fff; }
    .cg-cap-card h3 { font-size: 1rem; font-weight: 700; color: var(--dark); margin: 0; }
    .cg-cap-card p { font-size: 0.88rem; color: var(--mid); line-height: 1.6; margin: 0; }
    @media (max-width: 768px) { .cg-capabilities { padding: 3.5rem 1.2rem; } .cg-capabilities__grid { grid-template-columns: 1fr; } }

    /* ─── WHY IT MATTERS ─────────────────────────────────── */
    .cg-why { padding: 5rem 3rem; background: linear-gradient(135deg, #060d1f 0%, #0a1635 40%, #0f1f4a 100%); position: relative; overflow: hidden; }
    .cg-why__bg-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 60px 60px; pointer-events: none; }
    .cg-why__glow-1 { position: absolute; width: 400px; height: 400px; border-radius: 50%; background: radial-gradient(circle, rgba(232,119,34,0.15) 0%, transparent 70%); top: -100px; right: -100px; pointer-events: none; animation: drift 18s ease-in-out infinite; }
    .cg-why__glow-2 { position: absolute; width: 350px; height: 350px; border-radius: 50%; background: radial-gradient(circle, rgba(123,163,255,0.1) 0%, transparent 70%); bottom: -120px; left: -80px; pointer-events: none; animation: drift 14s ease-in-out infinite reverse; }
    .cg-why__inner { max-width: 900px; margin: 0 auto; position: relative; z-index: 2; text-align: center; }
    .cg-why__text { font-size: 1rem; color: rgba(255,255,255,0.7); line-height: 1.85; max-width: 850px; margin: 0 auto; }
    @media (max-width: 768px) { .cg-why { padding: 3.5rem 1.2rem; } }

    /* ─── BUSINESS VALUE ─────────────────────────────────── */
    .cg-value { padding: 6rem 3rem; background: linear-gradient(180deg, var(--bg) 0%, rgba(232,119,34,0.04) 100%); position: relative; overflow: hidden; }
    .cg-value__ring { position: absolute; top: 60px; right: -60px; width: 180px; height: 180px; border: 1.5px dashed rgba(232,119,34,0.12); border-radius: 50%; animation: spinSlow 35s linear infinite reverse; pointer-events: none; }
    .cg-value__inner { max-width: 1100px; margin: 0 auto; text-align: center; position: relative; z-index: 1; }
    .cg-value__grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 3rem; text-align: left; }
    .cg-value-card { background: #fff; border-radius: 16px; padding: 1.8rem 1.5rem; display: flex; align-items: flex-start; gap: 1rem; border: 1px solid rgba(232,119,34,0.1); transition: transform 0.3s, box-shadow 0.3s; }
    .cg-value-card:hover { transform: translateY(-6px); box-shadow: 0 14px 40px rgba(27,58,143,0.1); }
    .cg-value-card__icon { width: 46px; height: 46px; flex-shrink: 0; background: linear-gradient(135deg, rgba(232,119,34,0.1), rgba(232,119,34,0.04)); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; }
    .cg-value-card span { font-size: 0.9rem; font-weight: 500; color: var(--dark); line-height: 1.6; }
    @media (max-width: 768px) { .cg-value { padding: 3.5rem 1.2rem; } .cg-value__grid { grid-template-columns: 1fr; } }

    /* ─── GOVERNANCE ─────────────────────────────────────── */
    .cg-governance { padding: 5rem 3rem; background: var(--bg); }
    .cg-governance__inner { max-width: 900px; margin: 0 auto; background: #fff; border-radius: 24px; padding: 3rem 3.5rem; box-shadow: 0 10px 40px rgba(27,58,143,0.08); border: 1px solid rgba(27,58,143,0.06); position: relative; overflow: hidden; text-align: center; }
    .cg-governance__inner::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, var(--blue), var(--orange)); }
    .cg-governance__icon-wrap { width: 60px; height: 60px; margin: 0 auto 1.5rem; background: linear-gradient(135deg, rgba(27,58,143,0.08), rgba(232,119,34,0.06)); border-radius: 16px; display: flex; align-items: center; justify-content: center; }
    .cg-governance__icon-wrap svg { width: 28px; height: 28px; }
    .cg-governance__icon-wrap svg path, .cg-governance__icon-wrap svg rect { stroke: var(--teal); fill: none; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
    .cg-governance p { font-size: 1rem; color: #444; line-height: 1.85; margin-bottom: 1.2rem; text-align: left; }
    .cg-governance p:last-child { margin-bottom: 0; }
    @media (max-width: 768px) { .cg-governance { padding: 3rem 1.2rem; } .cg-governance__inner { padding: 2rem 1.5rem; } }

    /* ─── CTA ────────────────────────────────────────────── */
    .cg-cta { background: linear-gradient(135deg, #142d6b 0%, #1B3A8F 100%); padding: 4rem 3rem; text-align: center; position: relative; overflow: hidden; }
    .cg-cta::before { content: ""; position: absolute; width: 400px; height: 400px; border-radius: 50%; background: rgba(232,119,34,0.08); top: -150px; right: -100px; pointer-events: none; }
    .cg-cta__ring { position: absolute; bottom: -80px; left: 10%; width: 250px; height: 250px; border: 2px solid rgba(255,255,255,0.08); border-radius: 50%; animation: spinSlow 20s linear infinite; }
    .cg-cta__dots { position: absolute; top: 20px; left: 50%; width: 100px; height: 100px; background-image: radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px); background-size: 12px 12px; pointer-events: none; animation: drift 12s ease-in-out infinite; }
    .cg-cta__heading { font-family: "DM Serif Display", serif; font-size: clamp(1.5rem, 3vw, 2.2rem); color: #fff; font-weight: 400; margin-bottom: 1rem; position: relative; }
    .cg-cta__sub { color: rgba(255,255,255,0.7); font-size: 1rem; margin-bottom: 2rem; position: relative; }
    .cg-cta__btn { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--orange); color: #fff; font-weight: 700; font-size: 0.92rem; padding: 0.8rem 2rem; border-radius: 999px; text-decoration: none; transition: transform 0.3s, box-shadow 0.3s; position: relative; }
    .cg-cta__btn:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(232,119,34,0.4); color: #fff; }
    @media (max-width: 768px) { .cg-cta { padding: 3rem 1.2rem; } }

    /* ─── ANIMATIONS ─────────────────────────────────────── */
    @keyframes spinSlow { to { transform: rotate(360deg); } }
    @keyframes float { 0%,100% { transform: translateY(0) rotate(0deg); } 33% { transform: translateY(-15px) rotate(2deg); } 66% { transform: translateY(8px) rotate(-1deg); } }
    @keyframes drift { 0%,100% { transform: translate(0,0); } 25% { transform: translate(20px,-10px); } 50% { transform: translate(-10px,-20px); } 75% { transform: translate(-20px,10px); } }

    /* ─── REVEAL ─────────────────────────────────────────── */
    [data-reveal] { opacity: 0; transform: translateY(40px); transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1); }
    [data-reveal].is-visible { opacity: 1; transform: translateY(0); }
    [data-reveal-left] { opacity: 0; transform: translateX(-40px); transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1); }
    [data-reveal-left].is-visible { opacity: 1; transform: translateX(0); }
    [data-reveal-right] { opacity: 0; transform: translateX(40px); transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1); }
    [data-reveal-right].is-visible { opacity: 1; transform: translateX(0); }
    [data-reveal-scale] { opacity: 0; transform: scale(0.9); transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1); }
    [data-reveal-scale].is-visible { opacity: 1; transform: scale(1); }
  `],
})
export class CareGapIdentification implements AfterViewInit, OnDestroy {
  private revealObserver: IntersectionObserver | null = null;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const host = this.el.nativeElement as HTMLElement;

    // Particles
    const container = host.querySelector('#cg-particles');
    if (container) {
      for (let i = 0; i < 18; i++) {
        const p = document.createElement('span');
        p.className = 'cg-hero__particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (6 + Math.random() * 8) + 's';
        p.style.animationDelay = (Math.random() * 6) + 's';
        p.style.width = p.style.height = (2 + Math.random() * 4) + 'px';
        container.appendChild(p);
      }
    }

    // Scroll Reveal
    const revealEls = host.querySelectorAll('[data-reveal],[data-reveal-left],[data-reveal-right],[data-reveal-scale]');
    this.revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = Number((entry.target as HTMLElement).dataset['revealDelay']) || 0;
          setTimeout(() => entry.target.classList.add('is-visible'), delay * 150);
          this.revealObserver?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach((el, i) => {
      if (!(el as HTMLElement).dataset['revealDelay']) {
        (el as HTMLElement).dataset['revealDelay'] = String(i % 5);
      }
      this.revealObserver!.observe(el);
    });

    // Card hover glow
    const cards = host.querySelectorAll<HTMLElement>('.cg-cap-card');
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', ((e.clientX - rect.left) / rect.width * 100) + '%');
        card.style.setProperty('--mouse-y', ((e.clientY - rect.top) / rect.height * 100) + '%');
      });
    });
  }

  ngOnDestroy(): void {
    if (this.revealObserver) this.revealObserver.disconnect();
  }
}
