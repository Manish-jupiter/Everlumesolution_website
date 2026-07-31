import { Component, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-clinical-digital-support',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- ─── BREADCRUMB ─────────────────────────────────────── -->
    <div class="breadcrumb-bar">
      <a routerLink="/">Home</a>
      <span class="sep">›</span>
      <a routerLink="/who-we-serve/healthcare">Healthcare</a>
      <span class="sep">›</span>
      <span class="current">Clinical Decision Support Integration</span>
    </div>

    <!-- ─── HERO ───────────────────────────────────────────── -->
    <section class="cd-hero">
      <div class="cd-hero__bg">
        <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1800&q=80" alt="Clinical Decision Support" />
        <div class="cd-hero__overlay"></div>
      </div>
      <div class="cd-hero__abstract-ring"></div>
      <div class="cd-hero__abstract-blob"></div>
      <div class="cd-hero__particles" id="cd-particles"></div>
      <div class="cd-hero__content" data-reveal>
        <div class="cd-hero__badge">
          <span class="cd-hero__badge-dot"></span>
          <span>Agentic AI Solution</span>
        </div>
        <h1 class="cd-hero__heading">Clinical Decision<br/><em>Support Integration</em></h1>
        <p class="cd-hero__sub">Delivering intelligent, evidence-based decision support directly within the clinician's workflow to improve care quality and patient safety.</p>
        <a href="#cd-capabilities" class="cd-hero__cta">
          Explore Capabilities
          <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
    </section>

    <!-- ─── INTRO ──────────────────────────────────────────── -->
    <section class="cd-intro">
      <div class="cd-intro__blob"></div>
      <div class="cd-intro__dots"></div>
      <div class="cd-intro__grid">
        <div class="cd-intro__text" data-reveal-left>
          <span class="cd-eyebrow">Overview</span>
          <h2 class="cd-section-heading">Intelligent AI agents that <em>augment</em> clinical decision-making</h2>
          <p>Our Agentic AI solution for Clinical Decision Support Integration empowers healthcare organisations to deliver intelligent, evidence-based decision support directly within the clinician's workflow. By seamlessly integrating with Electronic Health Records (EHRs) and other clinical systems, the solution analyses comprehensive patient context in real time and provides timely, contextual recommendations that support diagnosis, triage, treatment planning, medication management, and follow-up care.</p>
          <p>The solution intelligently combines structured and unstructured clinical data, evidence-based guidelines, organisational protocols, and real-time workflow context to create a unified clinical intelligence layer. Continuously monitoring patient information as it becomes available, AI agents evaluate clinical scenarios, identify potential risks and opportunities, and surface concise, actionable recommendations at the point of care. Rather than replacing clinical judgement, the solution augments clinicians with relevant insights and decision support while ensuring that all clinical decisions remain under the control of the care team through a robust human-in-the-loop framework.</p>
        </div>
        <div class="cd-intro__visual" data-reveal-right>
          <div class="cd-intro__dot-grid"></div>
          <div class="cd-intro__ring"></div>
          <div class="cd-intro__img">
            <img src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&q=80" alt="Clinical Decision Support AI" loading="lazy" />
          </div>
          <div class="cd-intro__float-card">
            <div class="cd-intro__float-icon">🧠</div>
            <div class="cd-intro__float-text">
              <strong>Smart Decisions</strong>
              <span>AI-powered support</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── KEY CAPABILITIES ───────────────────────────────── -->
    <section class="cd-capabilities" id="cd-capabilities">
      <div class="cd-capabilities__ring"></div>
      <div class="cd-capabilities__blob"></div>
      <div class="cd-capabilities__inner">
        <div class="cd-capabilities__header" data-reveal>
          <span class="cd-eyebrow">Key Capabilities</span>
          <h2 class="cd-section-heading">End-to-end <em>clinical intelligence</em></h2>
        </div>
        <div class="cd-capabilities__grid">
          <div class="cd-cap-card" data-reveal>
            <div class="cd-cap-card__icon">
              <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            </div>
            <h3>Patient Context Retrieval</h3>
            <p>Retrieve and analyse comprehensive patient context from Electronic Health Records (EHRs) and integrated clinical systems.</p>
          </div>
          <div class="cd-cap-card" data-reveal>
            <div class="cd-cap-card__icon">
              <svg viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
            <h3>Real-time Recommendations</h3>
            <p>Deliver real-time, evidence-based recommendations within existing clinical workflows.</p>
          </div>
          <div class="cd-cap-card" data-reveal>
            <div class="cd-cap-card__icon">
              <svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            </div>
            <h3>Clinical Pathway Support</h3>
            <p>Support triage, differential diagnosis, treatment planning, medication management, and care pathway optimisation.</p>
          </div>
          <div class="cd-cap-card" data-reveal>
            <div class="cd-cap-card__icon">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </div>
            <h3>Anomaly Detection</h3>
            <p>Identify abnormal laboratory results, adverse trends, clinical deterioration, and high-risk patient patterns.</p>
          </div>
          <div class="cd-cap-card" data-reveal>
            <div class="cd-cap-card__icon">
              <svg viewBox="0 0 24 24"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>
            </div>
            <h3>Next-Best Actions</h3>
            <p>Recommend appropriate follow-up actions, diagnostic investigations, referrals, and next-best clinical interventions.</p>
          </div>
          <div class="cd-cap-card" data-reveal>
            <div class="cd-cap-card__icon">
              <svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
            </div>
            <h3>Guideline Surfacing</h3>
            <p>Surface relevant clinical guidelines, best practices, and organisational protocols at the point of care.</p>
          </div>
          <div class="cd-cap-card" data-reveal>
            <div class="cd-cap-card__icon">
              <svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            </div>
            <h3>Continuous Monitoring</h3>
            <p>Continuously monitor patient data and proactively notify care teams of significant clinical changes requiring attention.</p>
          </div>
          <div class="cd-cap-card" data-reveal>
            <div class="cd-cap-card__icon">
              <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3>Smart Escalation</h3>
            <p>Automatically escalate ambiguous, low-confidence, or clinically complex scenarios to clinicians for expert evaluation and decision-making.</p>
          </div>
          <div class="cd-cap-card" data-reveal>
            <div class="cd-cap-card__icon">
              <svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </div>
            <h3>Audit &amp; Accountability</h3>
            <p>Maintain comprehensive audit trails, explainable AI recommendations, confidence scoring, and decision logs to support governance, regulatory compliance, and clinical accountability.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── WHY IT MATTERS ─────────────────────────────────── -->
    <section class="cd-why">
      <div class="cd-why__bg-grid"></div>
      <div class="cd-why__glow-1"></div>
      <div class="cd-why__glow-2"></div>
      <div class="cd-why__inner">
        <div class="cd-why__header" data-reveal>
          <span class="cd-eyebrow cd-eyebrow--light">Why It Matters</span>
          <h2 class="cd-section-heading cd-section-heading--light">Why it matters</h2>
          <p class="cd-why__text">Traditional clinical decision support systems often rely on static rules and isolated alerts, limiting their ability to adapt to the evolving clinical context of individual patients. As patient data continues to grow in volume and complexity, clinicians require intelligent, workflow-aware support that synthesises information, applies evidence-based reasoning, and delivers actionable insights at the point of care. Agentic AI addresses this challenge by continuously analysing patient data, clinical guidelines, and care workflows to provide context-aware recommendations that evolve alongside the patient's condition. This enables clinicians to make faster, more informed decisions while reducing cognitive burden and improving the consistency, quality, and safety of care delivery.</p>
        </div>
      </div>
    </section>

    <!-- ─── BUSINESS VALUE ─────────────────────────────────── -->
    <section class="cd-value" data-reveal>
      <div class="cd-value__ring"></div>
      <div class="cd-value__inner">
        <span class="cd-eyebrow">Business Value</span>
        <h2 class="cd-section-heading">Business value</h2>
        <div class="cd-value__grid">
          <div class="cd-value-card">
            <div class="cd-value-card__icon">⚡</div>
            <span>Deliver faster access to evidence-based, patient-specific clinical guidance at the point of care.</span>
          </div>
          <div class="cd-value-card">
            <div class="cd-value-card__icon">✅</div>
            <span>Improve consistency and quality of clinical decision-making across care teams and specialties.</span>
          </div>
          <div class="cd-value-card">
            <div class="cd-value-card__icon">🧠</div>
            <span>Reduce clinician cognitive burden by filtering, prioritising, and contextualising relevant clinical information.</span>
          </div>
          <div class="cd-value-card">
            <div class="cd-value-card__icon">🎯</div>
            <span>Enhance early identification of high-risk patients and enable timely clinical interventions.</span>
          </div>
          <div class="cd-value-card">
            <div class="cd-value-card__icon">📋</div>
            <span>Improve adherence to evidence-based care pathways, organisational protocols, and clinical best practices.</span>
          </div>
          <div class="cd-value-card">
            <div class="cd-value-card__icon">📈</div>
            <span>Increase workflow efficiency by embedding intelligent decision support within existing clinical systems.</span>
          </div>
          <div class="cd-value-card">
            <div class="cd-value-card__icon">🏥</div>
            <span>Strengthen patient safety, care quality, and operational performance while supporting value-based care initiatives.</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── GOVERNANCE ─────────────────────────────────────── -->
    <section class="cd-governance">
      <div class="cd-governance__inner" data-reveal>
        <div class="cd-governance__icon-wrap">
          <svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        </div>
        <h2 class="cd-section-heading">Governance and <em>Control</em></h2>
        <p>Our Agentic AI solutions are designed with a governance-first approach that prioritises patient safety, clinical accountability, and regulatory compliance. AI agents operate within clearly defined guardrails and bounded autonomy, ensuring that recommendations are generated through transparent, explainable reasoning and validated against clinical guidelines and organisational policies. Human-in-the-loop oversight is embedded throughout the decision-making process, with complex, high-risk, or low-confidence scenarios automatically escalated to clinicians for expert evaluation and final judgement. Comprehensive audit trails, confidence scoring, continuous monitoring, and explainable decision logs provide complete transparency, enabling healthcare organisations to deploy AI responsibly while maintaining trust, compliance, and the highest standards of clinical care.</p>
      </div>
    </section>

    <!-- ─── CTA BAND ──────────────────────────────────────── -->
    <section class="cd-cta">
      <div class="cd-cta__ring"></div>
      <div class="cd-cta__dots"></div>
      <h2 class="cd-cta__heading">Ready to enhance clinical decision-making?</h2>
      <p class="cd-cta__sub">Let's discuss how Agentic AI can deliver intelligent decision support within your clinical workflows.</p>
      <a routerLink="/contact-us" class="cd-cta__btn">
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
    .cd-eyebrow { display: inline-block; color: var(--teal); font-size: 0.78rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 1rem; }
    .cd-eyebrow--light { color: var(--orange); }
    .cd-section-heading { font-family: "DM Serif Display", serif; font-size: clamp(1.8rem, 3vw, 2.5rem); color: var(--dark); font-weight: 400; line-height: 1.2; margin-bottom: 1.2rem; }
    .cd-section-heading em { color: var(--orange); font-style: italic; }
    .cd-section-heading--light { color: #fff; }

    /* ─── HERO ───────────────────────────────────────────── */
    .cd-hero { position: relative; height: 55vh; min-height: 360px; max-height: 480px; overflow: hidden; }
    .cd-hero__bg { position: absolute; inset: 0; }
    .cd-hero__bg img { width: 100%; height: 100%; object-fit: cover; transform: scale(1.05); animation: heroZoom 12s ease-out forwards; }
    @keyframes heroZoom { to { transform: scale(1); } }
    .cd-hero__overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(15,23,42,0.35) 0%, rgba(27,58,143,0.78) 100%); }
    .cd-hero__abstract-ring { position: absolute; top: 8%; left: 4%; width: 220px; height: 220px; border: 1.5px solid rgba(255,255,255,0.1); border-radius: 50%; z-index: 1; animation: spinSlow 28s linear infinite; }
    .cd-hero__abstract-blob { position: absolute; bottom: 12%; right: 6%; width: 140px; height: 140px; background: rgba(232,119,34,0.15); border-radius: 50%; z-index: 1; filter: blur(40px); animation: drift 14s ease-in-out infinite; }
    .cd-hero__particles { position: absolute; inset: 0; z-index: 1; overflow: hidden; pointer-events: none; }
    .cd-hero__particle { position: absolute; width: 4px; height: 4px; background: rgba(255,255,255,0.4); border-radius: 50%; animation: particleRise linear infinite; }
    @keyframes particleRise { 0% { transform: translateY(100vh) scale(0); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(-20px) scale(1); opacity: 0; } }
    .cd-hero__content { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 2rem; z-index: 2; }
    .cd-hero__badge { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.1); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.2); border-radius: 999px; padding: 0.35rem 1.1rem; margin-bottom: 1.5rem; opacity: 0; transform: translateY(12px); animation: fadeUp 0.8s 0.3s forwards; }
    .cd-hero__badge-dot { width: 7px; height: 7px; background: var(--teal-light); border-radius: 50%; animation: pulse 2s infinite; }
    @keyframes pulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.5; transform:scale(0.7); } }
    .cd-hero__badge span:last-child { color: #fff; font-size: 0.78rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; }
    .cd-hero__heading { font-family: "DM Serif Display", serif; font-size: clamp(1.8rem, 4vw, 3rem); color: #fff; font-weight: 400; line-height: 1.1; margin-bottom: 1.2rem; opacity: 0; transform: translateY(20px); animation: fadeUp 1s 0.5s forwards; }
    .cd-hero__heading em { font-style: italic; color: var(--orange); }
    .cd-hero__sub { font-size: 0.95rem; color: rgba(255,255,255,0.75); max-width: 580px; line-height: 1.6; margin-bottom: 1.5rem; opacity: 0; transform: translateY(20px); animation: fadeUp 1s 0.7s forwards; }
    .cd-hero__cta { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--orange); color: #fff; font-weight: 600; font-size: 0.9rem; padding: 0.75rem 1.8rem; border-radius: 999px; text-decoration: none; transition: background 0.3s, transform 0.3s, box-shadow 0.3s; opacity: 0; transform: translateY(20px); animation: fadeUp 1s 0.9s forwards; }
    .cd-hero__cta:hover { background: #c96418; color: #fff; transform: translateY(-3px); box-shadow: 0 12px 32px rgba(232,119,34,0.4); }
    @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
    @media (max-width: 768px) { .cd-hero { height: 50vh; min-height: 320px; } .cd-hero__sub { font-size: 0.88rem; } }

    /* ─── INTRO ──────────────────────────────────────────── */
    .cd-intro { padding: 6rem 3rem; max-width: 1200px; margin: 0 auto; position: relative; overflow: hidden; }
    .cd-intro__blob { position: absolute; top: -60px; right: -80px; width: 300px; height: 300px; background: radial-gradient(circle, rgba(27,58,143,0.06) 0%, transparent 70%); border-radius: 50%; animation: drift 15s ease-in-out infinite; pointer-events: none; }
    .cd-intro__dots { position: absolute; bottom: -40px; left: -40px; width: 150px; height: 150px; background-image: radial-gradient(circle, rgba(232,119,34,0.2) 1.5px, transparent 1.5px); background-size: 16px 16px; opacity: 0.6; pointer-events: none; animation: float 10s ease-in-out infinite; }
    .cd-intro__grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 5rem; align-items: center; }
    .cd-intro__text p { font-size: 1rem; color: #444; line-height: 1.85; margin-bottom: 1.2rem; }
    .cd-intro__visual { position: relative; padding: 2rem; }
    .cd-intro__ring { position: absolute; top: -10px; right: -10px; width: 280px; height: 280px; border: 2px dashed rgba(27,58,143,0.1); border-radius: 50%; animation: spinSlow 35s linear infinite; pointer-events: none; }
    .cd-intro__ring::after { content: ""; position: absolute; top: -5px; left: 50%; width: 10px; height: 10px; background: var(--orange); border-radius: 50%; box-shadow: 0 0 16px rgba(232,119,34,0.5); }
    .cd-intro__dot-grid { position: absolute; top: -15px; left: -15px; width: 120px; height: 120px; background-image: radial-gradient(circle, rgba(27,58,143,0.15) 1.5px, transparent 1.5px); background-size: 14px 14px; pointer-events: none; z-index: 0; }
    .cd-intro__img { width: 100%; border-radius: 24px; box-shadow: 0 20px 60px rgba(27,58,143,0.15); overflow: hidden; position: relative; z-index: 1; }
    .cd-intro__img img { width: 100%; height: auto; display: block; }
    .cd-intro__float-card { position: absolute; bottom: -30px; right: -20px; background: #fff; border-radius: 16px; padding: 1.1rem 1.4rem; box-shadow: 0 10px 40px rgba(0,0,0,0.1); display: flex; align-items: center; gap: 0.8rem; z-index: 2; animation: floatCard 4s ease-in-out infinite; }
    @keyframes floatCard { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
    .cd-intro__float-icon { width: 44px; height: 44px; background: linear-gradient(135deg, var(--orange), #c96418); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; }
    .cd-intro__float-text strong { display: block; font-size: 0.85rem; color: var(--dark); }
    .cd-intro__float-text span { font-size: 0.75rem; color: var(--mid); }
    @media (max-width: 991px) { .cd-intro { padding: 4rem 1.5rem; } .cd-intro__grid { grid-template-columns: 1fr; gap: 2.5rem; } .cd-intro__float-card { right: 10px; bottom: -20px; } }

    /* ─── CAPABILITIES ───────────────────────────────────── */
    .cd-capabilities { padding: 6rem 3rem; background: linear-gradient(180deg, rgba(27,58,143,0.04) 0%, var(--bg) 100%); position: relative; overflow: hidden; }
    .cd-capabilities__ring { position: absolute; top: 100px; left: -120px; width: 350px; height: 350px; border: 1.5px solid rgba(27,58,143,0.06); border-radius: 50%; pointer-events: none; animation: spinSlow 40s linear infinite; }
    .cd-capabilities__blob { position: absolute; bottom: 50px; right: -80px; width: 200px; height: 200px; background: rgba(232,119,34,0.04); border-radius: 50%; filter: blur(60px); animation: drift 15s ease-in-out infinite; pointer-events: none; }
    .cd-capabilities__inner { max-width: 1200px; margin: 0 auto; }
    .cd-capabilities__header { text-align: center; margin-bottom: 4rem; }
    .cd-capabilities__grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; counter-reset: cap-counter; }
    .cd-cap-card { background: var(--card-bg); border-radius: 20px; padding: 2rem 1.8rem; border: 1px solid rgba(27,58,143,0.06); position: relative; overflow: hidden; transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s, border-color 0.3s; display: flex; flex-direction: column; gap: 0.8rem; box-shadow: 0 4px 20px rgba(27,58,143,0.06); counter-increment: cap-counter; }
    .cd-cap-card::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 3px; background: linear-gradient(90deg, var(--blue), var(--orange)); opacity: 0.5; transition: opacity 0.4s, height 0.4s; }
    .cd-cap-card:hover::before { opacity: 1; height: 4px; }
    .cd-cap-card::after { content: "0" counter(cap-counter); position: absolute; bottom: 12px; right: 16px; font-family: "DM Serif Display", serif; font-size: 2.5rem; font-weight: 400; color: rgba(27,58,143,0.04); line-height: 1; pointer-events: none; transition: color 0.4s; }
    .cd-cap-card:hover::after { color: rgba(27,58,143,0.08); }
    .cd-cap-card:hover { transform: translateY(-8px); box-shadow: 0 20px 50px rgba(27,58,143,0.12); border-color: rgba(27,58,143,0.15); }
    .cd-cap-card__icon { width: 50px; height: 50px; background: linear-gradient(135deg, rgba(27,58,143,0.08), rgba(232,119,34,0.06)); border-radius: 14px; display: flex; align-items: center; justify-content: center; transition: background 0.3s, transform 0.3s; box-shadow: 0 2px 8px rgba(27,58,143,0.08); }
    .cd-cap-card:hover .cd-cap-card__icon { background: linear-gradient(135deg, var(--teal), var(--teal-dark)); transform: scale(1.1) rotate(-3deg); }
    .cd-cap-card__icon svg { width: 22px; height: 22px; }
    .cd-cap-card__icon svg path, .cd-cap-card__icon svg circle, .cd-cap-card__icon svg polyline, .cd-cap-card__icon svg line, .cd-cap-card__icon svg rect { stroke: var(--teal); fill: none; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; transition: stroke 0.3s; }
    .cd-cap-card:hover .cd-cap-card__icon svg path, .cd-cap-card:hover .cd-cap-card__icon svg circle, .cd-cap-card:hover .cd-cap-card__icon svg polyline, .cd-cap-card:hover .cd-cap-card__icon svg line, .cd-cap-card:hover .cd-cap-card__icon svg rect { stroke: #fff; }
    .cd-cap-card h3 { font-size: 1rem; font-weight: 700; color: var(--dark); margin: 0; }
    .cd-cap-card p { font-size: 0.88rem; color: var(--mid); line-height: 1.6; margin: 0; }
    @media (max-width: 768px) { .cd-capabilities { padding: 3.5rem 1.2rem; } .cd-capabilities__grid { grid-template-columns: 1fr; } }

    /* ─── WHY IT MATTERS ─────────────────────────────────── */
    .cd-why { padding: 5rem 3rem; background: linear-gradient(135deg, #060d1f 0%, #0a1635 40%, #0f1f4a 100%); position: relative; overflow: hidden; }
    .cd-why__bg-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 60px 60px; pointer-events: none; }
    .cd-why__glow-1 { position: absolute; width: 400px; height: 400px; border-radius: 50%; background: radial-gradient(circle, rgba(232,119,34,0.15) 0%, transparent 70%); top: -100px; right: -100px; pointer-events: none; animation: drift 18s ease-in-out infinite; }
    .cd-why__glow-2 { position: absolute; width: 350px; height: 350px; border-radius: 50%; background: radial-gradient(circle, rgba(123,163,255,0.1) 0%, transparent 70%); bottom: -120px; left: -80px; pointer-events: none; animation: drift 14s ease-in-out infinite reverse; }
    .cd-why__inner { max-width: 900px; margin: 0 auto; position: relative; z-index: 2; text-align: center; }
    .cd-why__text { font-size: 1rem; color: rgba(255,255,255,0.7); line-height: 1.85; max-width: 850px; margin: 0 auto; }
    @media (max-width: 768px) { .cd-why { padding: 3.5rem 1.2rem; } }

    /* ─── BUSINESS VALUE ─────────────────────────────────── */
    .cd-value { padding: 6rem 3rem; background: linear-gradient(180deg, var(--bg) 0%, rgba(232,119,34,0.04) 100%); position: relative; overflow: hidden; }
    .cd-value__ring { position: absolute; top: 60px; right: -60px; width: 180px; height: 180px; border: 1.5px dashed rgba(232,119,34,0.12); border-radius: 50%; animation: spinSlow 35s linear infinite reverse; pointer-events: none; }
    .cd-value__inner { max-width: 1100px; margin: 0 auto; text-align: center; position: relative; z-index: 1; }
    .cd-value__grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 3rem; text-align: left; }
    .cd-value-card { background: #fff; border-radius: 16px; padding: 1.8rem 1.5rem; display: flex; align-items: flex-start; gap: 1rem; border: 1px solid rgba(232,119,34,0.1); transition: transform 0.3s, box-shadow 0.3s; }
    .cd-value-card:hover { transform: translateY(-6px); box-shadow: 0 14px 40px rgba(27,58,143,0.1); }
    .cd-value-card__icon { width: 46px; height: 46px; flex-shrink: 0; background: linear-gradient(135deg, rgba(232,119,34,0.1), rgba(232,119,34,0.04)); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; }
    .cd-value-card span { font-size: 0.9rem; font-weight: 500; color: var(--dark); line-height: 1.6; }
    @media (max-width: 768px) { .cd-value { padding: 3.5rem 1.2rem; } .cd-value__grid { grid-template-columns: 1fr; } }

    /* ─── GOVERNANCE ─────────────────────────────────────── */
    .cd-governance { padding: 5rem 3rem; background: var(--bg); }
    .cd-governance__inner { max-width: 900px; margin: 0 auto; background: #fff; border-radius: 24px; padding: 3rem 3.5rem; box-shadow: 0 10px 40px rgba(27,58,143,0.08); border: 1px solid rgba(27,58,143,0.06); position: relative; overflow: hidden; text-align: center; }
    .cd-governance__inner::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, var(--blue), var(--orange)); }
    .cd-governance__icon-wrap { width: 60px; height: 60px; margin: 0 auto 1.5rem; background: linear-gradient(135deg, rgba(27,58,143,0.08), rgba(232,119,34,0.06)); border-radius: 16px; display: flex; align-items: center; justify-content: center; }
    .cd-governance__icon-wrap svg { width: 28px; height: 28px; }
    .cd-governance__icon-wrap svg path, .cd-governance__icon-wrap svg rect { stroke: var(--teal); fill: none; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
    .cd-governance p { font-size: 1rem; color: #444; line-height: 1.85; margin-bottom: 1.2rem; text-align: left; }
    .cd-governance p:last-child { margin-bottom: 0; }
    @media (max-width: 768px) { .cd-governance { padding: 3rem 1.2rem; } .cd-governance__inner { padding: 2rem 1.5rem; } }

    /* ─── CTA ────────────────────────────────────────────── */
    .cd-cta { background: linear-gradient(135deg, #142d6b 0%, #1B3A8F 100%); padding: 4rem 3rem; text-align: center; position: relative; overflow: hidden; }
    .cd-cta::before { content: ""; position: absolute; width: 400px; height: 400px; border-radius: 50%; background: rgba(232,119,34,0.08); top: -150px; right: -100px; pointer-events: none; }
    .cd-cta__ring { position: absolute; bottom: -80px; left: 10%; width: 250px; height: 250px; border: 2px solid rgba(255,255,255,0.08); border-radius: 50%; animation: spinSlow 20s linear infinite; }
    .cd-cta__dots { position: absolute; top: 20px; left: 50%; width: 100px; height: 100px; background-image: radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px); background-size: 12px 12px; pointer-events: none; animation: drift 12s ease-in-out infinite; }
    .cd-cta__heading { font-family: "DM Serif Display", serif; font-size: clamp(1.5rem, 3vw, 2.2rem); color: #fff; font-weight: 400; margin-bottom: 1rem; position: relative; }
    .cd-cta__sub { color: rgba(255,255,255,0.7); font-size: 1rem; margin-bottom: 2rem; position: relative; }
    .cd-cta__btn { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--orange); color: #fff; font-weight: 700; font-size: 0.92rem; padding: 0.8rem 2rem; border-radius: 999px; text-decoration: none; transition: transform 0.3s, box-shadow 0.3s; position: relative; }
    .cd-cta__btn:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(232,119,34,0.4); color: #fff; }
    @media (max-width: 768px) { .cd-cta { padding: 3rem 1.2rem; } }

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
export class ClinicalDigitalSupport implements AfterViewInit, OnDestroy {
  private revealObserver: IntersectionObserver | null = null;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const host = this.el.nativeElement as HTMLElement;

    // Particles
    const container = host.querySelector('#cd-particles');
    if (container) {
      for (let i = 0; i < 18; i++) {
        const p = document.createElement('span');
        p.className = 'cd-hero__particle';
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
    const cards = host.querySelectorAll<HTMLElement>('.cd-cap-card');
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
