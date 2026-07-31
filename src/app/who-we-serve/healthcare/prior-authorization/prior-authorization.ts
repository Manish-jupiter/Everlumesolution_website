import { Component, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-prior-authorization',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- ─── BREADCRUMB ─────────────────────────────────────── -->
    <div class="breadcrumb-bar">
      <a routerLink="/">Home</a>
      <span class="sep">›</span>
      <a routerLink="/who-we-serve/healthcare">Healthcare</a>
      <span class="sep">›</span>
      <span class="current">Prior Authorisation and Eligibility Support</span>
    </div>

    <!-- ─── HERO ───────────────────────────────────────────── -->
    <section class="pa-hero">
      <div class="pa-hero__bg">
        <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=80" alt="Prior authorisation" />
        <div class="pa-hero__overlay"></div>
      </div>
      <div class="pa-hero__abstract-ring"></div>
      <div class="pa-hero__abstract-blob"></div>
      <div class="pa-hero__particles" id="pa-particles"></div>
      <div class="pa-hero__content" data-reveal>
        <div class="pa-hero__badge">
          <span class="pa-hero__badge-dot"></span>
          <span>Agentic AI Solution</span>
        </div>
        <h1 class="pa-hero__heading">Prior Authorisation and<br/><em>Eligibility Support</em></h1>
        <p class="pa-hero__sub">Transforming one of healthcare's most complex and resource-intensive administrative processes into an intelligent, automated workflow.</p>
        <a href="#pa-capabilities" class="pa-hero__cta">
          Explore Capabilities
          <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
    </section>

    <!-- ─── INTRO ──────────────────────────────────────────── -->
    <section class="pa-intro">
      <div class="pa-intro__blob"></div>
      <div class="pa-intro__dots"></div>
      <div class="pa-intro__grid">
        <div class="pa-intro__text" data-reveal-left>
          <span class="pa-eyebrow">Overview</span>
          <h2 class="pa-section-heading">Intelligent AI agents that <em>automate</em> prior authorisation workflows</h2>
          <p>Our Agentic AI solution for Prior Authorisation and Eligibility Support transforms one of healthcare's most complex and resource-intensive administrative processes into an intelligent, automated workflow. By orchestrating activities across clinical, administrative, and payer ecosystems, our AI agents verify patient eligibility, determine prior authorisation requirements, validate documentation, and prepare complete submission packages with minimal human intervention.</p>
          <p>The solution intelligently coordinates multiple tasks across payer policies, clinical documentation, benefits information, and internal healthcare systems. It extracts and structures data from referrals, medical records, benefits documents, and other unstructured sources, evaluates request completeness, identifies missing information, applies payer-specific rules and medical necessity criteria, and seamlessly routes exceptions to clinical or administrative staff for review and approval.</p>
          <p>This human-in-the-loop approach ensures both operational efficiency and regulatory compliance while accelerating authorisation turnaround times.</p>
        </div>
        <div class="pa-intro__visual" data-reveal-right>
          <div class="pa-intro__dot-grid"></div>
          <div class="pa-intro__ring"></div>
          <div class="pa-intro__img">
            <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80" alt="Prior auth AI" loading="lazy" />
          </div>
          <div class="pa-intro__float-card">
            <div class="pa-intro__float-icon">🔍</div>
            <div class="pa-intro__float-text">
              <strong>Smart Verification</strong>
              <span>AI-powered workflows</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── KEY CAPABILITIES ───────────────────────────────── -->
    <section class="pa-capabilities" id="pa-capabilities">
      <div class="pa-capabilities__ring"></div>
      <div class="pa-capabilities__blob"></div>
      <div class="pa-capabilities__inner">
        <div class="pa-capabilities__header" data-reveal>
          <span class="pa-eyebrow">Key Capabilities</span>
          <h2 class="pa-section-heading">End-to-end <em>authorisation intelligence</em></h2>
        </div>
        <div class="pa-capabilities__grid">
          <div class="pa-cap-card" data-reveal>
            <div class="pa-cap-card__icon">
              <svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
            </div>
            <h3>Eligibility Verification</h3>
            <p>Verify member eligibility, benefits, and coverage in real time.</p>
          </div>
          <div class="pa-cap-card" data-reveal>
            <div class="pa-cap-card__icon">
              <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            </div>
            <h3>Auth Requirements</h3>
            <p>Determine prior authorisation requirements based on payer-specific policies.</p>
          </div>
          <div class="pa-cap-card" data-reveal>
            <div class="pa-cap-card__icon">
              <svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
            </div>
            <h3>Clinical Documentation</h3>
            <p>Collect, validate, and organise supporting clinical documentation.</p>
          </div>
          <div class="pa-cap-card" data-reveal>
            <div class="pa-cap-card__icon">
              <svg viewBox="0 0 24 24"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>
            </div>
            <h3>Data Extraction</h3>
            <p>Extract and structure information from unstructured clinical and administrative documents.</p>
          </div>
          <div class="pa-cap-card" data-reveal>
            <div class="pa-cap-card__icon">
              <svg viewBox="0 0 24 24"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            </div>
            <h3>Policy Evaluation</h3>
            <p>Evaluate requests against payer rules, coverage policies, and medical necessity guidelines.</p>
          </div>
          <div class="pa-cap-card" data-reveal>
            <div class="pa-cap-card__icon">
              <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </div>
            <h3>Submission Packages</h3>
            <p>Generate complete, submission-ready prior authorisation packages.</p>
          </div>
          <div class="pa-cap-card" data-reveal>
            <div class="pa-cap-card__icon">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            </div>
            <h3>Gap Identification</h3>
            <p>Identify missing or inconsistent information and proactively request additional documentation.</p>
          </div>
          <div class="pa-cap-card" data-reveal>
            <div class="pa-cap-card__icon">
              <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3>Smart Routing</h3>
            <p>Route complex cases and exceptions to the appropriate staff for review and approval.</p>
          </div>
          <div class="pa-cap-card" data-reveal>
            <div class="pa-cap-card__icon">
              <svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            </div>
            <h3>Status Tracking</h3>
            <p>Track authorisation status and provide proactive updates to care teams.</p>
          </div>
          <div class="pa-cap-card" data-reveal>
            <div class="pa-cap-card__icon">
              <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            </div>
            <h3>Admin Reduction</h3>
            <p>Reduce administrative effort, improve submission accuracy, and accelerate patient access to care.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── WHY IT MATTERS ─────────────────────────────────── -->
    <section class="pa-why">
      <div class="pa-why__bg-grid"></div>
      <div class="pa-why__glow-1"></div>
      <div class="pa-why__glow-2"></div>
      <div class="pa-why__inner">
        <div class="pa-why__header" data-reveal>
          <span class="pa-eyebrow pa-eyebrow--light">Why It Matters</span>
          <h2 class="pa-section-heading pa-section-heading--light">Why it matters</h2>
          <p class="pa-why__text">Prior authorisation remains one of the most significant administrative challenges in healthcare, often delaying patient care, increasing operational costs, and placing a substantial burden on providers, payers, and care coordination teams. By leveraging Agentic AI, organisations can intelligently automate repetitive validation and decision-support activities, minimise manual back-and-forth between stakeholders, and improve the quality and completeness of submissions. The result is a faster, more streamlined authorisation process that accelerates patient access to care while enabling staff to focus on higher-value clinical and operational activities.</p>
        </div>
      </div>
    </section>

    <!-- ─── BUSINESS VALUE ─────────────────────────────────── -->
    <section class="pa-value" data-reveal>
      <div class="pa-value__ring"></div>
      <div class="pa-value__inner">
        <span class="pa-eyebrow">Business Value</span>
        <h2 class="pa-section-heading">Business value</h2>
        <div class="pa-value__grid">
          <div class="pa-value-card">
            <div class="pa-value-card__icon">⚡</div>
            <span>Accelerate prior authorisation turnaround times and improve patient access to treatment.</span>
          </div>
          <div class="pa-value-card">
            <div class="pa-value-card__icon">✅</div>
            <span>Increase first-pass submission quality, reducing incomplete, delayed, and rejected requests.</span>
          </div>
          <div class="pa-value-card">
            <div class="pa-value-card__icon">📉</div>
            <span>Significantly reduce administrative effort for clinical, revenue cycle, and care management teams.</span>
          </div>
          <div class="pa-value-card">
            <div class="pa-value-card__icon">⚙️</div>
            <span>Improve operational efficiency by automating repetitive eligibility, documentation, and validation tasks.</span>
          </div>
          <div class="pa-value-card">
            <div class="pa-value-card__icon">📊</div>
            <span>Enhance visibility into authorisation status, workflow bottlenecks, and operational performance through real-time tracking and reporting.</span>
          </div>
          <div class="pa-value-card">
            <div class="pa-value-card__icon">🤝</div>
            <span>Improve payer-provider collaboration through consistent, accurate, and policy-compliant submissions.</span>
          </div>
          <div class="pa-value-card">
            <div class="pa-value-card__icon">📈</div>
            <span>Deliver measurable improvements in productivity, cost efficiency, and patient satisfaction.</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── GOVERNANCE ─────────────────────────────────────── -->
    <section class="pa-governance">
      <div class="pa-governance__inner" data-reveal>
        <div class="pa-governance__icon-wrap">
          <svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        </div>
        <h2 class="pa-section-heading">Governance and <em>Control</em></h2>
        <p>Our Agentic AI solutions are designed with enterprise-grade governance, transparency, and compliance at their core. Human-in-the-loop oversight is embedded throughout the workflow, ensuring that low-confidence, clinically sensitive, or high-risk cases are automatically escalated for expert review. Comprehensive audit trails, explainable decision logic, continuous monitoring, and adherence to payer policies and regulatory requirements provide the transparency and control needed to maintain compliance while building trust in AI-driven operations.</p>
        <p>This balanced approach enables healthcare organisations to realise the efficiencies of intelligent automation without compromising clinical judgement, patient safety, or regulatory integrity.</p>
      </div>
    </section>

    <!-- ─── CTA BAND ──────────────────────────────────────── -->
    <section class="pa-cta">
      <div class="pa-cta__ring"></div>
      <div class="pa-cta__dots"></div>
      <h2 class="pa-cta__heading">Ready to streamline prior authorisation?</h2>
      <p class="pa-cta__sub">Let's discuss how Agentic AI can transform your authorisation workflows.</p>
      <a routerLink="/contact-us" class="pa-cta__btn">
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
    .pa-eyebrow { display: inline-block; color: var(--teal); font-size: 0.78rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 1rem; }
    .pa-eyebrow--light { color: var(--orange); }
    .pa-section-heading { font-family: "DM Serif Display", serif; font-size: clamp(1.8rem, 3vw, 2.5rem); color: var(--dark); font-weight: 400; line-height: 1.2; margin-bottom: 1.2rem; }
    .pa-section-heading em { color: var(--orange); font-style: italic; }
    .pa-section-heading--light { color: #fff; }

    /* ─── HERO ───────────────────────────────────────────── */
    .pa-hero { position: relative; height: 55vh; min-height: 360px; max-height: 480px; overflow: hidden; }
    .pa-hero__bg { position: absolute; inset: 0; }
    .pa-hero__bg img { width: 100%; height: 100%; object-fit: cover; transform: scale(1.05); animation: heroZoom 12s ease-out forwards; }
    @keyframes heroZoom { to { transform: scale(1); } }
    .pa-hero__overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(15,23,42,0.35) 0%, rgba(27,58,143,0.78) 100%); }
    .pa-hero__abstract-ring { position: absolute; top: 8%; left: 4%; width: 220px; height: 220px; border: 1.5px solid rgba(255,255,255,0.1); border-radius: 50%; z-index: 1; animation: spinSlow 28s linear infinite; }
    .pa-hero__abstract-blob { position: absolute; bottom: 12%; right: 6%; width: 140px; height: 140px; background: rgba(232,119,34,0.15); border-radius: 50%; z-index: 1; filter: blur(40px); animation: drift 14s ease-in-out infinite; }
    .pa-hero__particles { position: absolute; inset: 0; z-index: 1; overflow: hidden; pointer-events: none; }
    .pa-hero__particle { position: absolute; width: 4px; height: 4px; background: rgba(255,255,255,0.4); border-radius: 50%; animation: particleRise linear infinite; }
    @keyframes particleRise { 0% { transform: translateY(100vh) scale(0); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(-20px) scale(1); opacity: 0; } }
    .pa-hero__content { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 2rem; z-index: 2; }
    .pa-hero__badge { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.1); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.2); border-radius: 999px; padding: 0.35rem 1.1rem; margin-bottom: 1.5rem; opacity: 0; transform: translateY(12px); animation: fadeUp 0.8s 0.3s forwards; }
    .pa-hero__badge-dot { width: 7px; height: 7px; background: var(--teal-light); border-radius: 50%; animation: pulse 2s infinite; }
    @keyframes pulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.5; transform:scale(0.7); } }
    .pa-hero__badge span:last-child { color: #fff; font-size: 0.78rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; }
    .pa-hero__heading { font-family: "DM Serif Display", serif; font-size: clamp(1.8rem, 4vw, 3rem); color: #fff; font-weight: 400; line-height: 1.1; margin-bottom: 1.2rem; opacity: 0; transform: translateY(20px); animation: fadeUp 1s 0.5s forwards; }
    .pa-hero__heading em { font-style: italic; color: var(--orange); }
    .pa-hero__sub { font-size: 0.95rem; color: rgba(255,255,255,0.75); max-width: 580px; line-height: 1.6; margin-bottom: 1.5rem; opacity: 0; transform: translateY(20px); animation: fadeUp 1s 0.7s forwards; }
    .pa-hero__cta { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--orange); color: #fff; font-weight: 600; font-size: 0.9rem; padding: 0.75rem 1.8rem; border-radius: 999px; text-decoration: none; transition: background 0.3s, transform 0.3s, box-shadow 0.3s; opacity: 0; transform: translateY(20px); animation: fadeUp 1s 0.9s forwards; }
    .pa-hero__cta:hover { background: #c96418; color: #fff; transform: translateY(-3px); box-shadow: 0 12px 32px rgba(232,119,34,0.4); }
    @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
    @media (max-width: 768px) { .pa-hero { height: 50vh; min-height: 320px; } .pa-hero__sub { font-size: 0.88rem; } }

    /* ─── INTRO ──────────────────────────────────────────── */
    .pa-intro { padding: 6rem 3rem; max-width: 1200px; margin: 0 auto; position: relative; overflow: hidden; }
    .pa-intro__blob { position: absolute; top: -60px; right: -80px; width: 300px; height: 300px; background: radial-gradient(circle, rgba(27,58,143,0.06) 0%, transparent 70%); border-radius: 50%; animation: drift 15s ease-in-out infinite; pointer-events: none; }
    .pa-intro__dots { position: absolute; bottom: -40px; left: -40px; width: 150px; height: 150px; background-image: radial-gradient(circle, rgba(232,119,34,0.2) 1.5px, transparent 1.5px); background-size: 16px 16px; opacity: 0.6; pointer-events: none; animation: float 10s ease-in-out infinite; }
    .pa-intro__grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 5rem; align-items: center; }
    .pa-intro__text p { font-size: 1rem; color: #444; line-height: 1.85; margin-bottom: 1.2rem; }
    .pa-intro__visual { position: relative; padding: 2rem; }
    .pa-intro__ring { position: absolute; top: -10px; right: -10px; width: 280px; height: 280px; border: 2px dashed rgba(27,58,143,0.1); border-radius: 50%; animation: spinSlow 35s linear infinite; pointer-events: none; }
    .pa-intro__ring::after { content: ""; position: absolute; top: -5px; left: 50%; width: 10px; height: 10px; background: var(--orange); border-radius: 50%; box-shadow: 0 0 16px rgba(232,119,34,0.5); }
    .pa-intro__dot-grid { position: absolute; top: -15px; left: -15px; width: 120px; height: 120px; background-image: radial-gradient(circle, rgba(27,58,143,0.15) 1.5px, transparent 1.5px); background-size: 14px 14px; pointer-events: none; z-index: 0; }
    .pa-intro__img { width: 100%; border-radius: 24px; box-shadow: 0 20px 60px rgba(27,58,143,0.15); overflow: hidden; position: relative; z-index: 1; }
    .pa-intro__img img { width: 100%; height: auto; display: block; }
    .pa-intro__float-card { position: absolute; bottom: -30px; right: -20px; background: #fff; border-radius: 16px; padding: 1.1rem 1.4rem; box-shadow: 0 10px 40px rgba(0,0,0,0.1); display: flex; align-items: center; gap: 0.8rem; z-index: 2; animation: floatCard 4s ease-in-out infinite; }
    @keyframes floatCard { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
    .pa-intro__float-icon { width: 44px; height: 44px; background: linear-gradient(135deg, var(--orange), #c96418); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; }
    .pa-intro__float-text strong { display: block; font-size: 0.85rem; color: var(--dark); }
    .pa-intro__float-text span { font-size: 0.75rem; color: var(--mid); }
    @media (max-width: 991px) { .pa-intro { padding: 4rem 1.5rem; } .pa-intro__grid { grid-template-columns: 1fr; gap: 2.5rem; } .pa-intro__float-card { right: 10px; bottom: -20px; } }

    /* ─── CAPABILITIES ───────────────────────────────────── */
    .pa-capabilities { padding: 6rem 3rem; background: linear-gradient(180deg, rgba(27,58,143,0.04) 0%, var(--bg) 100%); position: relative; overflow: hidden; }
    .pa-capabilities__ring { position: absolute; top: 100px; left: -120px; width: 350px; height: 350px; border: 1.5px solid rgba(27,58,143,0.06); border-radius: 50%; pointer-events: none; animation: spinSlow 40s linear infinite; }
    .pa-capabilities__blob { position: absolute; bottom: 50px; right: -80px; width: 200px; height: 200px; background: rgba(232,119,34,0.04); border-radius: 50%; filter: blur(60px); animation: drift 15s ease-in-out infinite; pointer-events: none; }
    .pa-capabilities__inner { max-width: 1200px; margin: 0 auto; }
    .pa-capabilities__header { text-align: center; margin-bottom: 4rem; }
    .pa-capabilities__grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; counter-reset: cap-counter; }
    .pa-cap-card { background: var(--card-bg); border-radius: 20px; padding: 2rem 1.8rem; border: 1px solid rgba(27,58,143,0.06); position: relative; overflow: hidden; transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s, border-color 0.3s; display: flex; flex-direction: column; gap: 0.8rem; box-shadow: 0 4px 20px rgba(27,58,143,0.06); counter-increment: cap-counter; }
    .pa-cap-card::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 3px; background: linear-gradient(90deg, var(--blue), var(--orange)); opacity: 0.5; transition: opacity 0.4s, height 0.4s; }
    .pa-cap-card:hover::before { opacity: 1; height: 4px; }
    .pa-cap-card::after { content: "0" counter(cap-counter); position: absolute; bottom: 12px; right: 16px; font-family: "DM Serif Display", serif; font-size: 2.5rem; font-weight: 400; color: rgba(27,58,143,0.04); line-height: 1; pointer-events: none; transition: color 0.4s; }
    .pa-cap-card:hover::after { color: rgba(27,58,143,0.08); }
    .pa-cap-card:hover { transform: translateY(-8px); box-shadow: 0 20px 50px rgba(27,58,143,0.12); border-color: rgba(27,58,143,0.15); }
    .pa-cap-card__icon { width: 50px; height: 50px; background: linear-gradient(135deg, rgba(27,58,143,0.08), rgba(232,119,34,0.06)); border-radius: 14px; display: flex; align-items: center; justify-content: center; transition: background 0.3s, transform 0.3s; box-shadow: 0 2px 8px rgba(27,58,143,0.08); }
    .pa-cap-card:hover .pa-cap-card__icon { background: linear-gradient(135deg, var(--teal), var(--teal-dark)); transform: scale(1.1) rotate(-3deg); }
    .pa-cap-card__icon svg { width: 22px; height: 22px; }
    .pa-cap-card__icon svg path, .pa-cap-card__icon svg circle, .pa-cap-card__icon svg polyline, .pa-cap-card__icon svg line, .pa-cap-card__icon svg rect { stroke: var(--teal); fill: none; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; transition: stroke 0.3s; }
    .pa-cap-card:hover .pa-cap-card__icon svg path, .pa-cap-card:hover .pa-cap-card__icon svg circle, .pa-cap-card:hover .pa-cap-card__icon svg polyline, .pa-cap-card:hover .pa-cap-card__icon svg line, .pa-cap-card:hover .pa-cap-card__icon svg rect { stroke: #fff; }
    .pa-cap-card h3 { font-size: 1rem; font-weight: 700; color: var(--dark); margin: 0; }
    .pa-cap-card p { font-size: 0.88rem; color: var(--mid); line-height: 1.6; margin: 0; }
    @media (max-width: 768px) { .pa-capabilities { padding: 3.5rem 1.2rem; } .pa-capabilities__grid { grid-template-columns: 1fr; } }

    /* ─── WHY IT MATTERS ─────────────────────────────────── */
    .pa-why { padding: 5rem 3rem; background: linear-gradient(135deg, #060d1f 0%, #0a1635 40%, #0f1f4a 100%); position: relative; overflow: hidden; }
    .pa-why__bg-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 60px 60px; pointer-events: none; }
    .pa-why__glow-1 { position: absolute; width: 400px; height: 400px; border-radius: 50%; background: radial-gradient(circle, rgba(232,119,34,0.15) 0%, transparent 70%); top: -100px; right: -100px; pointer-events: none; animation: drift 18s ease-in-out infinite; }
    .pa-why__glow-2 { position: absolute; width: 350px; height: 350px; border-radius: 50%; background: radial-gradient(circle, rgba(123,163,255,0.1) 0%, transparent 70%); bottom: -120px; left: -80px; pointer-events: none; animation: drift 14s ease-in-out infinite reverse; }
    .pa-why__inner { max-width: 900px; margin: 0 auto; position: relative; z-index: 2; text-align: center; }
    .pa-why__text { font-size: 1rem; color: rgba(255,255,255,0.7); line-height: 1.85; max-width: 850px; margin: 0 auto; }
    @media (max-width: 768px) { .pa-why { padding: 3.5rem 1.2rem; } }

    /* ─── BUSINESS VALUE ─────────────────────────────────── */
    .pa-value { padding: 6rem 3rem; background: linear-gradient(180deg, var(--bg) 0%, rgba(232,119,34,0.04) 100%); position: relative; overflow: hidden; }
    .pa-value__ring { position: absolute; top: 60px; right: -60px; width: 180px; height: 180px; border: 1.5px dashed rgba(232,119,34,0.12); border-radius: 50%; animation: spinSlow 35s linear infinite reverse; pointer-events: none; }
    .pa-value__inner { max-width: 1100px; margin: 0 auto; text-align: center; position: relative; z-index: 1; }
    .pa-value__grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 3rem; text-align: left; }
    .pa-value-card { background: #fff; border-radius: 16px; padding: 1.8rem 1.5rem; display: flex; align-items: flex-start; gap: 1rem; border: 1px solid rgba(232,119,34,0.1); transition: transform 0.3s, box-shadow 0.3s; }
    .pa-value-card:hover { transform: translateY(-6px); box-shadow: 0 14px 40px rgba(27,58,143,0.1); }
    .pa-value-card__icon { width: 46px; height: 46px; flex-shrink: 0; background: linear-gradient(135deg, rgba(232,119,34,0.1), rgba(232,119,34,0.04)); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; }
    .pa-value-card span { font-size: 0.9rem; font-weight: 500; color: var(--dark); line-height: 1.6; }
    @media (max-width: 768px) { .pa-value { padding: 3.5rem 1.2rem; } .pa-value__grid { grid-template-columns: 1fr; } }

    /* ─── GOVERNANCE ─────────────────────────────────────── */
    .pa-governance { padding: 5rem 3rem; background: var(--bg); }
    .pa-governance__inner { max-width: 900px; margin: 0 auto; background: #fff; border-radius: 24px; padding: 3rem 3.5rem; box-shadow: 0 10px 40px rgba(27,58,143,0.08); border: 1px solid rgba(27,58,143,0.06); position: relative; overflow: hidden; text-align: center; }
    .pa-governance__inner::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, var(--blue), var(--orange)); }
    .pa-governance__icon-wrap { width: 60px; height: 60px; margin: 0 auto 1.5rem; background: linear-gradient(135deg, rgba(27,58,143,0.08), rgba(232,119,34,0.06)); border-radius: 16px; display: flex; align-items: center; justify-content: center; }
    .pa-governance__icon-wrap svg { width: 28px; height: 28px; }
    .pa-governance__icon-wrap svg path, .pa-governance__icon-wrap svg rect { stroke: var(--teal); fill: none; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
    .pa-governance p { font-size: 1rem; color: #444; line-height: 1.85; margin-bottom: 1.2rem; text-align: left; }
    .pa-governance p:last-child { margin-bottom: 0; }
    @media (max-width: 768px) { .pa-governance { padding: 3rem 1.2rem; } .pa-governance__inner { padding: 2rem 1.5rem; } }

    /* ─── CTA ────────────────────────────────────────────── */
    .pa-cta { background: linear-gradient(135deg, #142d6b 0%, #1B3A8F 100%); padding: 4rem 3rem; text-align: center; position: relative; overflow: hidden; }
    .pa-cta::before { content: ""; position: absolute; width: 400px; height: 400px; border-radius: 50%; background: rgba(232,119,34,0.08); top: -150px; right: -100px; pointer-events: none; }
    .pa-cta__ring { position: absolute; bottom: -80px; left: 10%; width: 250px; height: 250px; border: 2px solid rgba(255,255,255,0.08); border-radius: 50%; animation: spinSlow 20s linear infinite; }
    .pa-cta__dots { position: absolute; top: 20px; left: 50%; width: 100px; height: 100px; background-image: radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px); background-size: 12px 12px; pointer-events: none; animation: drift 12s ease-in-out infinite; }
    .pa-cta__heading { font-family: "DM Serif Display", serif; font-size: clamp(1.5rem, 3vw, 2.2rem); color: #fff; font-weight: 400; margin-bottom: 1rem; position: relative; }
    .pa-cta__sub { color: rgba(255,255,255,0.7); font-size: 1rem; margin-bottom: 2rem; position: relative; }
    .pa-cta__btn { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--orange); color: #fff; font-weight: 700; font-size: 0.92rem; padding: 0.8rem 2rem; border-radius: 999px; text-decoration: none; transition: transform 0.3s, box-shadow 0.3s; position: relative; }
    .pa-cta__btn:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(232,119,34,0.4); color: #fff; }
    @media (max-width: 768px) { .pa-cta { padding: 3rem 1.2rem; } }

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
export class PriorAuthorization implements AfterViewInit, OnDestroy {
  private revealObserver: IntersectionObserver | null = null;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const host = this.el.nativeElement as HTMLElement;

    // Particles
    const container = host.querySelector('#pa-particles');
    if (container) {
      for (let i = 0; i < 18; i++) {
        const p = document.createElement('span');
        p.className = 'pa-hero__particle';
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
    const cards = host.querySelectorAll<HTMLElement>('.pa-cap-card');
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
