import { Component, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-remote-patient-monitoring',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- â”€â”€â”€ BREADCRUMB â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <div class="breadcrumb-bar">
      <a routerLink="/">Home</a>
      <span class="sep">></span>
      <a routerLink="/who-we-serve/healthcare">Healthcare</a>
      <span class="sep">></span>
      <span class="current">Remote Patient Monitoring Data Integration</span>
    </div>

    <!-- â”€â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="rp-hero">
      <div class="rp-hero__bg">
        <img src="Images/image_012.jpg" alt="Remote Patient Monitoring" />
        <div class="rp-hero__overlay"></div>
      </div>
      <div class="rp-hero__abstract-ring"></div>
      <div class="rp-hero__abstract-blob"></div>
      <div class="rp-hero__particles" id="rp-particles"></div>
      <div class="rp-hero__content" data-reveal>
        <div class="rp-hero__badge">
          <span class="rp-hero__badge-dot"></span>
          <span>Agentic AI Solution</span>
        </div>
        <h1 class="rp-hero__heading">Remote Patient Monitoring<br/><em>Data Integration</em></h1>
        <p class="rp-hero__sub">Transforming continuous patient-generated health data into timely, actionable clinical insights for proactive, personalised care.</p>
        <a href="#rp-capabilities" class="rp-hero__cta">
          Explore Capabilities
          <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
    </section>

    <!-- â”€â”€â”€ INTRO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="rp-intro">
      <div class="rp-intro__blob"></div>
      <div class="rp-intro__dots"></div>
      <div class="rp-intro__grid">
        <div class="rp-intro__text" data-reveal-left>
          <span class="rp-eyebrow">Overview</span>
          <h2 class="rp-section-heading">Intelligent AI agents that <em>transform</em> monitoring data into clinical action</h2>
          <p>Our Agentic AI solution for Remote Patient Monitoring (RPM) Data Integration enables healthcare organisations to transform continuous patient-generated health data into timely, actionable clinical insights. By intelligently integrating data from connected medical devices, wearable technologies, mobile health applications, and patient-reported outcomes, the solution empowers care teams to proactively monitor patient health, identify emerging risks, and intervene before conditions deteriorate.</p>
          <p>The solution seamlessly integrates with Electronic Health Records (EHRs), care management platforms, virtual care solutions, and clinical communication systems to continuously ingest, normalise, and analyse data from multiple sources. Leveraging AI-driven reasoning and workflow orchestration, intelligent agents detect abnormal physiological trends, monitor patient adherence, prioritise patients based on clinical risk, and coordinate follow-up actions across care teams. Rather than overwhelming clinicians with isolated alerts, the solution delivers contextual, actionable insights that enable proactive, personalised, and data-driven care.</p>
          <p>By automating data interpretation and care coordination, healthcare organisations can improve chronic disease management, reduce avoidable hospitalisations, strengthen virtual care programmes, and enhance patient engagement while minimising administrative effort.</p>
        </div>
        <div class="rp-intro__visual" data-reveal-right>
          <div class="rp-intro__dot-grid"></div>
          <div class="rp-intro__ring"></div>
          <div class="rp-intro__img">
            <img src="Images/image_024.jpg" alt="Remote Patient Monitoring AI" loading="lazy" />
          </div>
          <div class="rp-intro__float-card">
            <div class="rp-intro__float-icon">ðŸ“¡</div>
            <div class="rp-intro__float-text">
              <strong>Real-time Monitoring</strong>
              <span>AI-powered insights</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- â”€â”€â”€ KEY CAPABILITIES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="rp-capabilities" id="rp-capabilities">
      <div class="rp-capabilities__ring"></div>
      <div class="rp-capabilities__blob"></div>
      <div class="rp-capabilities__inner">
        <div class="rp-capabilities__header" data-reveal>
          <span class="rp-eyebrow">Key Capabilities</span>
          <h2 class="rp-section-heading">End-to-end <em>monitoring intelligence</em></h2>
        </div>
        <div class="rp-capabilities__grid">
          <div class="rp-cap-card" data-reveal>
            <div class="rp-cap-card__icon"><i class="ph ph-pulse"></i></div>
            <h3>Real-time Data Ingestion</h3>
            <p>Ingest real-time patient data from wearable devices, home monitoring equipment, connected medical devices, and mobile health applications.</p>
          </div>
          <div class="rp-cap-card" data-reveal>
            <div class="rp-cap-card__icon"><i class="ph ph-globe"></i></div>
            <h3>Data Normalisation</h3>
            <p>Normalise and consolidate data from multiple sources into a unified patient monitoring workflow.</p>
          </div>
          <div class="rp-cap-card" data-reveal>
            <div class="rp-cap-card__icon"><i class="ph ph-heartbeat"></i></div>
            <h3>Physiological Analysis</h3>
            <p>Continuously analyse physiological readings to identify abnormal values, emerging clinical trends, and potential patient deterioration.</p>
          </div>
          <div class="rp-cap-card" data-reveal>
            <div class="rp-cap-card__icon"><i class="ph ph-warning-circle"></i></div>
            <h3>Adherence Monitoring</h3>
            <p>Detect missing or inconsistent monitoring data and identify potential patient non-adherence.</p>
          </div>
          <div class="rp-cap-card" data-reveal>
            <div class="rp-cap-card__icon"><i class="ph ph-star"></i></div>
            <h3>Risk Prioritisation</h3>
            <p>Prioritise alerts and interventions using clinical risk stratification, organisational protocols, and evidence-based rules.</p>
          </div>
          <div class="rp-cap-card" data-reveal>
            <div class="rp-cap-card__icon"><i class="ph ph-phone"></i></div>
            <h3>Automated Workflows</h3>
            <p>Automatically trigger clinician notifications, patient outreach, follow-up activities, and care coordination workflows.</p>
          </div>
          <div class="rp-cap-card" data-reveal>
            <div class="rp-cap-card__icon"><i class="ph ph-monitor"></i></div>
            <h3>EHR Synchronisation</h3>
            <p>Synchronise monitoring data with Electronic Health Records (EHRs), care management platforms, and longitudinal patient records.</p>
          </div>
          <div class="rp-cap-card" data-reveal>
            <div class="rp-cap-card__icon"><i class="ph ph-lightning"></i></div>
            <h3>Actionable Insights</h3>
            <p>Generate actionable insights and recommendations to support proactive clinical decision-making and chronic disease management.</p>
          </div>
          <div class="rp-cap-card" data-reveal>
            <div class="rp-cap-card__icon"><i class="ph ph-lock-simple"></i></div>
            <h3>Human-in-the-Loop</h3>
            <p>Escalate urgent, clinically significant, or low-confidence scenarios to the appropriate care teams through a human-in-the-loop framework. Maintain comprehensive audit trails, monitoring history, and AI decision logs to support governance, regulatory compliance, and operational transparency.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- â”€â”€â”€ WHY IT MATTERS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="rp-why">
      <div class="rp-why__bg-grid"></div>
      <div class="rp-why__glow-1"></div>
      <div class="rp-why__glow-2"></div>
      <div class="rp-why__inner">
        <div class="rp-why__header" data-reveal>
          <span class="rp-eyebrow rp-eyebrow--light">Why It Matters</span>
          <h2 class="rp-section-heading rp-section-heading--light">Why it matters</h2>
          <p class="rp-why__text">Remote Patient Monitoring (RPM) has become a critical component of modern healthcare, enabling continuous patient engagement, chronic disease management, and proactive intervention beyond the traditional care setting. However, many RPM programmes struggle to realise their full potential due to fragmented data sources, excessive alert volumes, disconnected workflows, and the significant manual effort required to interpret patient-generated health data. Agentic AI overcomes these challenges by transforming continuous streams of monitoring data into meaningful clinical intelligence, intelligently prioritising patients based on risk, and orchestrating timely interventions within existing care workflows. This enables healthcare organisations to move from reactive monitoring to proactive, continuous care management, improving patient outcomes while optimising operational efficiency.</p>
        </div>
      </div>
    </section>

    <!-- â”€â”€â”€ BUSINESS VALUE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="rp-value" data-reveal>
      <div class="rp-value__ring"></div>
      <div class="rp-value__inner">
        <span class="rp-eyebrow">Business Value</span>
        <h2 class="rp-section-heading">Business value</h2>
        <div class="rp-value__grid">
          <div class="rp-value-card">
            <div class="rp-value-card__icon">ðŸ‘ï¸</div>
            <span>Provide real-time visibility into patient health status between clinical encounters.</span>
          </div>
          <div class="rp-value-card">
            <div class="rp-value-card__icon">âš¡</div>
            <span>Enable earlier identification of patient deterioration and accelerate clinical intervention.</span>
          </div>
          <div class="rp-value-card">
            <div class="rp-value-card__icon">ðŸ“‰</div>
            <span>Reduce clinician burden by automating data interpretation, risk assessment, and routine monitoring activities.</span>
          </div>
          <div class="rp-value-card">
            <div class="rp-value-card__icon">ðŸ¤</div>
            <span>Improve care coordination and continuity through intelligent workflow orchestration across virtual and in-person care teams.</span>
          </div>
          <div class="rp-value-card">
            <div class="rp-value-card__icon">ðŸ¥</div>
            <span>Enhance chronic disease management and support better adherence to personalised care plans.</span>
          </div>
          <div class="rp-value-card">
            <div class="rp-value-card__icon">ðŸ“ˆ</div>
            <span>Increase the scalability of Remote Patient Monitoring programmes without proportionally increasing staffing requirements.</span>
          </div>
          <div class="rp-value-card">
            <div class="rp-value-card__icon">âœ…</div>
            <span>Improve patient engagement, clinical outcomes, and operational efficiency while reducing avoidable emergency visits, hospital admissions, and readmissions.</span>
          </div>
        </div>
      </div>
    </section>

    <!-- â”€â”€â”€ GOVERNANCE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="rp-governance">
      <div class="rp-governance__inner" data-reveal>
        <div class="rp-governance__icon-wrap"><i class="ph ph-lock-simple"></i></div>
        <h2 class="rp-section-heading">Governance and <em>Control</em></h2>
        <p>Our Agentic AI solutions are designed with enterprise-grade governance, patient safety, and regulatory compliance at their core. Configurable clinical thresholds, evidence-based alerting, transparent decision logic, and comprehensive audit trails ensure that every recommendation is explainable, traceable, and aligned with organisational policies and clinical guidelines. Human-in-the-loop oversight is embedded throughout the monitoring process, with urgent, high-risk, or low-confidence scenarios automatically escalated to clinicians for expert assessment and intervention. This governance-first approach enables healthcare organisations to scale intelligent remote monitoring programmes while maintaining clinical accountability, patient safety, regulatory compliance, and trust in AI-driven care.</p>
      </div>
    </section>

    <!-- â”€â”€â”€ CTA BAND â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="rp-cta">
      <div class="rp-cta__ring"></div>
      <div class="rp-cta__dots"></div>
      <h2 class="rp-cta__heading">Ready to transform remote patient monitoring?</h2>
      <p class="rp-cta__sub">Let's discuss how Agentic AI can turn your monitoring data into proactive clinical action.</p>
      <a routerLink="/contact-us" class="rp-cta__btn">
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

    /* â”€â”€â”€ BREADCRUMB â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .breadcrumb-bar { background: var(--teal-dark); padding: 0.55rem 3rem; }
    .breadcrumb-bar a, .breadcrumb-bar span { color: rgba(255,255,255,0.65); font-size: 0.8rem; font-weight: 500; text-decoration: none; }
    .breadcrumb-bar a:hover { color: #fff; }
    .breadcrumb-bar .sep { margin: 0 0.45rem; color: rgba(255,255,255,0.3); }
    .breadcrumb-bar .current { color: var(--teal-light); font-weight: 600; }
    @media (max-width: 768px) { .breadcrumb-bar { padding: 0.55rem 1rem; margin-top: 58px; } }

    /* â”€â”€â”€ SHARED â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .rp-eyebrow { display: inline-block; color: var(--teal); font-size: 0.78rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 1rem; }
    .rp-eyebrow--light { color: var(--orange); }
    .rp-section-heading { font-family: "DM Serif Display", serif; font-size: clamp(1.8rem, 3vw, 2.5rem); color: var(--dark); font-weight: 400; line-height: 1.2; margin-bottom: 1.2rem; }
    .rp-section-heading em { color: var(--orange); font-style: italic; }
    .rp-section-heading--light { color: #fff; }

    /* â”€â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .rp-hero { position: relative; height: 55vh; min-height: 360px; max-height: 480px; overflow: hidden; }
    .rp-hero__bg { position: absolute; inset: 0; }
    .rp-hero__bg img { width: 100%; height: 100%; object-fit: cover; transform: scale(1.05); animation: heroZoom 12s ease-out forwards; }
    @keyframes heroZoom { to { transform: scale(1); } }
    .rp-hero__overlay { position: absolute; inset: 0; background: radial-gradient(ellipse at 20% 30%, rgba(232, 119, 34, 0.28), transparent 55%), radial-gradient(ellipse at 80% 70%, rgba(27, 58, 143, 0.45), transparent 55%), linear-gradient(180deg, rgba(16, 21, 42, 0.35), rgba(16, 21, 42, 0.85)); }
    .rp-hero__abstract-ring { position: absolute; top: 8%; left: 4%; width: 220px; height: 220px; border: 1.5px solid rgba(255,255,255,0.1); border-radius: 50%; z-index: 1; animation: spinSlow 28s linear infinite; }
    .rp-hero__abstract-blob { position: absolute; bottom: 12%; right: 6%; width: 140px; height: 140px; background: rgba(232,119,34,0.15); border-radius: 50%; z-index: 1; filter: blur(40px); animation: drift 14s ease-in-out infinite; }
    .rp-hero__particles { position: absolute; inset: 0; z-index: 1; overflow: hidden; pointer-events: none; }
    .rp-hero__particle { position: absolute; width: 4px; height: 4px; background: rgba(255,255,255,0.4); border-radius: 50%; animation: particleRise linear infinite; }
    @keyframes particleRise { 0% { transform: translateY(100vh) scale(0); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(-20px) scale(1); opacity: 0; } }
    .rp-hero__content { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 2rem; z-index: 2; }
    .rp-hero__badge { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.1); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.2); border-radius: 999px; padding: 0.35rem 1.1rem; margin-bottom: 1.5rem; opacity: 0; transform: translateY(12px); animation: fadeUp 0.8s 0.3s forwards; }
    .rp-hero__badge-dot { width: 7px; height: 7px; background: var(--teal-light); border-radius: 50%; animation: pulse 2s infinite; }
    @keyframes pulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.5; transform:scale(0.7); } }
    .rp-hero__badge span:last-child { color: #fff; font-size: 0.78rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; }
    .rp-hero__heading { font-family: "DM Serif Display", serif; font-size: clamp(1.8rem, 4vw, 3rem); color: #fff; font-weight: 400; line-height: 1.1; margin-bottom: 1.2rem; opacity: 0; transform: translateY(20px); animation: fadeUp 1s 0.5s forwards; }
    .rp-hero__heading em { font-style: italic; color: var(--orange); }
    .rp-hero__sub { font-size: 0.95rem; color: rgba(255,255,255,0.75); max-width: 580px; line-height: 1.6; margin-bottom: 1.5rem; opacity: 0; transform: translateY(20px); animation: fadeUp 1s 0.7s forwards; }
    .rp-hero__cta { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--orange); color: #fff; font-weight: 600; font-size: 0.9rem; padding: 0.75rem 1.8rem; border-radius: 999px; text-decoration: none; transition: background 0.3s, transform 0.3s, box-shadow 0.3s; opacity: 0; transform: translateY(20px); animation: fadeUp 1s 0.9s forwards; }
    .rp-hero__cta:hover { background: #c96418; color: #fff; transform: translateY(-3px); box-shadow: 0 12px 32px rgba(232,119,34,0.4); }
    @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
    @media (max-width: 768px) { .rp-hero { height: 50vh; min-height: 320px; } .rp-hero__sub { font-size: 0.88rem; } }

    /* â”€â”€â”€ INTRO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .rp-intro { padding: 6rem 3rem; max-width: 1200px; margin: 0 auto; position: relative; overflow: hidden; }
    .rp-intro__blob { position: absolute; top: -60px; right: -80px; width: 300px; height: 300px; background: radial-gradient(circle, rgba(27,58,143,0.06) 0%, transparent 70%); border-radius: 50%; animation: drift 15s ease-in-out infinite; pointer-events: none; }
    .rp-intro__dots { position: absolute; bottom: -40px; left: -40px; width: 150px; height: 150px; background-image: radial-gradient(circle, rgba(232,119,34,0.2) 1.5px, transparent 1.5px); background-size: 16px 16px; opacity: 0.6; pointer-events: none; animation: float 10s ease-in-out infinite; }
    .rp-intro__grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 5rem; align-items: center; }
    .rp-intro__text p { font-size: 1rem; color: #444; line-height: 1.85; margin-bottom: 1.2rem; }
    .rp-intro__visual { position: relative; padding: 2rem; }
    .rp-intro__ring { position: absolute; top: -10px; right: -10px; width: 280px; height: 280px; border: 2px dashed rgba(27,58,143,0.1); border-radius: 50%; animation: spinSlow 35s linear infinite; pointer-events: none; }
    .rp-intro__ring::after { content: ""; position: absolute; top: -5px; left: 50%; width: 10px; height: 10px; background: var(--orange); border-radius: 50%; box-shadow: 0 0 16px rgba(232,119,34,0.5); }
    .rp-intro__dot-grid { position: absolute; top: -15px; left: -15px; width: 120px; height: 120px; background-image: radial-gradient(circle, rgba(27,58,143,0.15) 1.5px, transparent 1.5px); background-size: 14px 14px; pointer-events: none; z-index: 0; }
    .rp-intro__img { width: 100%; border-radius: 24px; box-shadow: 0 20px 60px rgba(27,58,143,0.15); overflow: hidden; position: relative; z-index: 1; }
    .rp-intro__img img { width: 100%; height: auto; display: block; }
    .rp-intro__float-card { position: absolute; bottom: -30px; right: -20px; background: #fff; border-radius: 16px; padding: 1.1rem 1.4rem; box-shadow: 0 10px 40px rgba(0,0,0,0.1); display: flex; align-items: center; gap: 0.8rem; z-index: 2; animation: floatCard 4s ease-in-out infinite; }
    @keyframes floatCard { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
    .rp-intro__float-icon { width: 44px; height: 44px; background: linear-gradient(135deg, var(--orange), #c96418); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; }
    .rp-intro__float-text strong { display: block; font-size: 0.85rem; color: var(--dark); }
    .rp-intro__float-text span { font-size: 0.75rem; color: var(--mid); }
    @media (max-width: 991px) { .rp-intro { padding: 4rem 1.5rem; } .rp-intro__grid { grid-template-columns: 1fr; gap: 2.5rem; } .rp-intro__float-card { right: 10px; bottom: -20px; } }

    /* â”€â”€â”€ CAPABILITIES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .rp-capabilities { padding: 6rem 3rem; background: linear-gradient(180deg, rgba(27,58,143,0.04) 0%, var(--bg) 100%); position: relative; overflow: hidden; }
    .rp-capabilities__ring { position: absolute; top: 100px; left: -120px; width: 350px; height: 350px; border: 1.5px solid rgba(27,58,143,0.06); border-radius: 50%; pointer-events: none; animation: spinSlow 40s linear infinite; }
    .rp-capabilities__blob { position: absolute; bottom: 50px; right: -80px; width: 200px; height: 200px; background: rgba(232,119,34,0.04); border-radius: 50%; filter: blur(60px); animation: drift 15s ease-in-out infinite; pointer-events: none; }
    .rp-capabilities__inner { max-width: 1200px; margin: 0 auto; }
    .rp-capabilities__header { text-align: center; margin-bottom: 4rem; }
    .rp-capabilities__grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; counter-reset: cap-counter; }
    .rp-cap-card { background: var(--card-bg); border-radius: 20px; padding: 2rem 1.8rem; border: 1px solid rgba(27,58,143,0.06); position: relative; overflow: hidden; transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s, border-color 0.3s; display: flex; flex-direction: column; gap: 0.8rem; box-shadow: 0 4px 20px rgba(27,58,143,0.06); counter-increment: cap-counter; }
    .rp-cap-card::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 3px; background: linear-gradient(90deg, var(--blue), var(--orange)); opacity: 0.5; transition: opacity 0.4s, height 0.4s; }
    .rp-cap-card:hover::before { opacity: 1; height: 4px; }
    .rp-cap-card::after { content: "0" counter(cap-counter); position: absolute; bottom: 12px; right: 16px; font-family: "DM Serif Display", serif; font-size: 2.5rem; font-weight: 400; color: rgba(27,58,143,0.04); line-height: 1; pointer-events: none; transition: color 0.4s; }
    .rp-cap-card:hover::after { color: rgba(27,58,143,0.08); }
    .rp-cap-card:hover { transform: translateY(-8px); box-shadow: 0 20px 50px rgba(27,58,143,0.12); border-color: rgba(27,58,143,0.15); }
    .rp-cap-card__icon { width: 50px; height: 50px; background: linear-gradient(135deg, rgba(27,58,143,0.08), rgba(232,119,34,0.06)); border-radius: 14px; display: flex; align-items: center; justify-content: center; transition: background 0.3s, transform 0.3s; box-shadow: 0 2px 8px rgba(27,58,143,0.08); }
    .rp-cap-card:hover .rp-cap-card__icon { background: linear-gradient(135deg, var(--teal), var(--teal-dark)); transform: scale(1.1) rotate(-3deg); }
    .rp-cap-card__icon i.ph { font-size: 1.4rem; color: var(--teal); transition: color 0.3s; line-height: 1; }
    .rp-cap-card:hover .rp-cap-card__icon i.ph { color: #fff; }
    .rp-cap-card h3 { font-size: 1rem; font-weight: 700; color: var(--dark); margin: 0; }
    .rp-cap-card p { font-size: 0.88rem; color: var(--mid); line-height: 1.6; margin: 0; }
    @media (max-width: 768px) { .rp-capabilities { padding: 3.5rem 1.2rem; } .rp-capabilities__grid { grid-template-columns: 1fr; } }

    /* â”€â”€â”€ WHY IT MATTERS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .rp-why { padding: 5rem 3rem; background: linear-gradient(135deg, #060d1f 0%, #0a1635 40%, #0f1f4a 100%); position: relative; overflow: hidden; }
    .rp-why__bg-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 60px 60px; pointer-events: none; }
    .rp-why__glow-1 { position: absolute; width: 400px; height: 400px; border-radius: 50%; background: radial-gradient(circle, rgba(232,119,34,0.15) 0%, transparent 70%); top: -100px; right: -100px; pointer-events: none; animation: drift 18s ease-in-out infinite; }
    .rp-why__glow-2 { position: absolute; width: 350px; height: 350px; border-radius: 50%; background: radial-gradient(circle, rgba(123,163,255,0.1) 0%, transparent 70%); bottom: -120px; left: -80px; pointer-events: none; animation: drift 14s ease-in-out infinite reverse; }
    .rp-why__inner { max-width: 900px; margin: 0 auto; position: relative; z-index: 2; text-align: center; }
    .rp-why__text { font-size: 1rem; color: rgba(255,255,255,0.7); line-height: 1.85; max-width: 850px; margin: 0 auto; }
    @media (max-width: 768px) { .rp-why { padding: 3.5rem 1.2rem; } }

    /* â”€â”€â”€ BUSINESS VALUE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .rp-value { padding: 6rem 3rem; background: linear-gradient(180deg, var(--bg) 0%, rgba(232,119,34,0.04) 100%); position: relative; overflow: hidden; }
    .rp-value__ring { position: absolute; top: 60px; right: -60px; width: 180px; height: 180px; border: 1.5px dashed rgba(232,119,34,0.12); border-radius: 50%; animation: spinSlow 35s linear infinite reverse; pointer-events: none; }
    .rp-value__inner { max-width: 1100px; margin: 0 auto; text-align: center; position: relative; z-index: 1; }
    .rp-value__grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 3rem; text-align: left; }
    .rp-value-card { background: #fff; border-radius: 16px; padding: 1.8rem 1.5rem; display: flex; align-items: flex-start; gap: 1rem; border: 1px solid rgba(232,119,34,0.1); transition: transform 0.3s, box-shadow 0.3s; }
    .rp-value-card:hover { transform: translateY(-6px); box-shadow: 0 14px 40px rgba(27,58,143,0.1); }
    .rp-value-card__icon { width: 46px; height: 46px; flex-shrink: 0; background: linear-gradient(135deg, rgba(232,119,34,0.1), rgba(232,119,34,0.04)); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; }
    .rp-value-card span { font-size: 0.9rem; font-weight: 500; color: var(--dark); line-height: 1.6; }
    @media (max-width: 768px) { .rp-value { padding: 3.5rem 1.2rem; } .rp-value__grid { grid-template-columns: 1fr; } }

    /* â”€â”€â”€ GOVERNANCE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .rp-governance { padding: 5rem 3rem; background: var(--bg); }
    .rp-governance__inner { max-width: 900px; margin: 0 auto; background: #fff; border-radius: 24px; padding: 3rem 3.5rem; box-shadow: 0 10px 40px rgba(27,58,143,0.08); border: 1px solid rgba(27,58,143,0.06); position: relative; overflow: hidden; text-align: center; }
    .rp-governance__inner::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, var(--blue), var(--orange)); }
    .rp-governance__icon-wrap { width: 60px; height: 60px; margin: 0 auto 1.5rem; background: linear-gradient(135deg, rgba(27,58,143,0.08), rgba(232,119,34,0.06)); border-radius: 16px; display: flex; align-items: center; justify-content: center; }
    .rp-governance__icon-wrap i.ph { font-size: 1.6rem; color: var(--teal); line-height: 1; }
    .rp-governance p { font-size: 1rem; color: #444; line-height: 1.85; margin-bottom: 1.2rem; text-align: left; }
    .rp-governance p:last-child { margin-bottom: 0; }
    @media (max-width: 768px) { .rp-governance { padding: 3rem 1.2rem; } .rp-governance__inner { padding: 2rem 1.5rem; } }

    /* â”€â”€â”€ CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .rp-cta { background: linear-gradient(135deg, #142d6b 0%, #1B3A8F 100%); padding: 4rem 3rem; text-align: center; position: relative; overflow: hidden; }
    .rp-cta::before { content: ""; position: absolute; width: 400px; height: 400px; border-radius: 50%; background: rgba(232,119,34,0.08); top: -150px; right: -100px; pointer-events: none; }
    .rp-cta__ring { position: absolute; bottom: -80px; left: 10%; width: 250px; height: 250px; border: 2px solid rgba(255,255,255,0.08); border-radius: 50%; animation: spinSlow 20s linear infinite; }
    .rp-cta__dots { position: absolute; top: 20px; left: 50%; width: 100px; height: 100px; background-image: radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px); background-size: 12px 12px; pointer-events: none; animation: drift 12s ease-in-out infinite; }
    .rp-cta__heading { font-family: "DM Serif Display", serif; font-size: clamp(1.5rem, 3vw, 2.2rem); color: #fff; font-weight: 400; margin-bottom: 1rem; position: relative; }
    .rp-cta__sub { color: rgba(255,255,255,0.7); font-size: 1rem; margin-bottom: 2rem; position: relative; }
    .rp-cta__btn { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--orange); color: #fff; font-weight: 700; font-size: 0.92rem; padding: 0.8rem 2rem; border-radius: 999px; text-decoration: none; transition: transform 0.3s, box-shadow 0.3s; position: relative; }
    .rp-cta__btn:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(232,119,34,0.4); color: #fff; }
    @media (max-width: 768px) { .rp-cta { padding: 3rem 1.2rem; } }

    /* â”€â”€â”€ ANIMATIONS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    @keyframes spinSlow { to { transform: rotate(360deg); } }
    @keyframes float { 0%,100% { transform: translateY(0) rotate(0deg); } 33% { transform: translateY(-15px) rotate(2deg); } 66% { transform: translateY(8px) rotate(-1deg); } }
    @keyframes drift { 0%,100% { transform: translate(0,0); } 25% { transform: translate(20px,-10px); } 50% { transform: translate(-10px,-20px); } 75% { transform: translate(-20px,10px); } }

    /* â”€â”€â”€ REVEAL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
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
export class RemotePatientMonitoring implements AfterViewInit, OnDestroy {
  private revealObserver: IntersectionObserver | null = null;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const host = this.el.nativeElement as HTMLElement;

    // Particles
    const container = host.querySelector('#rp-particles');
    if (container) {
      for (let i = 0; i < 18; i++) {
        const p = document.createElement('span');
        p.className = 'rp-hero__particle';
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
    const cards = host.querySelectorAll<HTMLElement>('.rp-cap-card');
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



