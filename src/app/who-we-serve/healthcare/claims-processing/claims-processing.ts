import { Component, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-claims-processing',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- â”€â”€â”€ BREADCRUMB â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <div class="breadcrumb-bar">
      <a routerLink="/">Home</a>
      <span class="sep">></span>
      <a routerLink="/who-we-serve/healthcare">Healthcare</a>
      <span class="sep">></span>
      <span class="current">Claims Processing Assistance</span>
    </div>

    <!-- â”€â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="cp-hero">
      <div class="cp-hero__bg">
        <img src="Images/image_033.jpg" alt="Claims processing" />
        <div class="cp-hero__overlay"></div>
      </div>
      <div class="cp-hero__abstract-ring"></div>
      <div class="cp-hero__abstract-blob"></div>
      <div class="cp-hero__particles" id="cp-particles"></div>
      <div class="cp-hero__content" data-reveal>
        <div class="cp-hero__badge">
          <span class="cp-hero__badge-dot"></span>
          <span>Agentic AI Solution</span>
        </div>
        <h1 class="cp-hero__heading">Claims Processing<br/><em>Assistance</em></h1>
        <p class="cp-hero__sub">Enabling healthcare organisations to automate and optimise the end-to-end claims lifecycle, reducing manual effort while improving accuracy, compliance, and processing speed.</p>
        <a href="#cp-capabilities" class="cp-hero__cta">
          Explore Capabilities
          <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
    </section>

    <!-- â”€â”€â”€ INTRO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="cp-intro">
      <div class="cp-intro__blob"></div>
      <div class="cp-intro__dots"></div>
      <div class="cp-intro__grid">
        <div class="cp-intro__text" data-reveal-left>
          <span class="cp-eyebrow">Overview</span>
          <h2 class="cp-section-heading">Intelligent AI agents that <em>automate</em> the claims lifecycle</h2>
          <p>Our Agentic AI solution for Claims Processing Assistance enables healthcare organisations to automate and optimise the end-to-end claims lifecycle, reducing manual effort while improving accuracy, compliance, and processing speed. Intelligent AI agents seamlessly orchestrate claim intake, data extraction, validation, review, routing, and exception management, allowing claims teams to focus on complex cases rather than repetitive administrative tasks.</p>
          <p>Designed to support both paper-based and digital claims, the solution leverages advanced document intelligence, workflow orchestration, and AI-driven decision support to capture and structure claim information, validate submissions against payer-specific policies, identify discrepancies, and proactively resolve issues before claims are submitted or adjudicated. It also integrates with revenue cycle management (RCM) platforms, Electronic Health Records (EHRs), payer systems, and coding applications to deliver a connected and efficient claims ecosystem.</p>
          <p>Beyond automation, the solution continuously analyses claims for coding accuracy, eligibility compliance, documentation completeness, and denial risks, enabling healthcare organisations to improve first-pass acceptance rates, reduce reimbursement delays, and strengthen overall revenue cycle performance.</p>
        </div>
        <div class="cp-intro__visual" data-reveal-right>
          <div class="cp-intro__dot-grid"></div>
          <div class="cp-intro__ring"></div>
          <div class="cp-intro__img">
            <img src="Images/image_002.jpg" alt="Claims AI" loading="lazy" />
          </div>
          <div class="cp-intro__float-card">
            <div class="cp-intro__float-icon">ðŸ“‹</div>
            <div class="cp-intro__float-text">
              <strong>Smart Claims</strong>
              <span>AI-powered processing</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- â”€â”€â”€ KEY CAPABILITIES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="cp-capabilities" id="cp-capabilities">
      <div class="cp-capabilities__ring"></div>
      <div class="cp-capabilities__blob"></div>
      <div class="cp-capabilities__inner">
        <div class="cp-capabilities__header" data-reveal>
          <span class="cp-eyebrow">Key Capabilities</span>
          <h2 class="cp-section-heading">End-to-end <em>claims intelligence</em></h2>
        </div>
        <div class="cp-capabilities__grid">
          <div class="cp-cap-card" data-reveal>
            <div class="cp-cap-card__icon"><i class="ph ph-file-text"></i></div>
            <h3>Document Intelligence</h3>
            <p>Capture and extract claim data from paper-based and digital documents using AI-powered document intelligence.</p>
          </div>
          <div class="cp-cap-card" data-reveal>
            <div class="cp-cap-card__icon"><i class="ph ph-check-square"></i></div>
            <h3>Policy Validation</h3>
            <p>Validate claims against payer-specific policies, benefit plans, and business rules.</p>
          </div>
          <div class="cp-cap-card" data-reveal>
            <div class="cp-cap-card__icon"><i class="ph ph-clock"></i></div>
            <h3>Error Detection</h3>
            <p>Identify missing, inconsistent, duplicate, or invalid claim information before submission.</p>
          </div>
          <div class="cp-cap-card" data-reveal>
            <div class="cp-cap-card__icon"><i class="ph ph-gear-six"></i></div>
            <h3>Eligibility &amp; Coding Verification</h3>
            <p>Verify patient eligibility, coding accuracy, supporting documentation, and required attachments.</p>
          </div>
          <div class="cp-cap-card" data-reveal>
            <div class="cp-cap-card__icon"><i class="ph ph-pulse"></i></div>
            <h3>Quality Checks</h3>
            <p>Perform intelligent pre-submission quality checks to minimise denials and rework.</p>
          </div>
          <div class="cp-cap-card" data-reveal>
            <div class="cp-cap-card__icon"><i class="ph ph-users-three"></i></div>
            <h3>Smart Routing</h3>
            <p>Route exceptions and complex claims to the appropriate reviewer or operational team based on configurable business rules.</p>
          </div>
          <div class="cp-cap-card" data-reveal>
            <div class="cp-cap-card__icon"><i class="ph ph-arrows-left-right"></i></div>
            <h3>Corrective Actions</h3>
            <p>Recommend corrective actions and next-best steps to accelerate claim resolution.</p>
          </div>
          <div class="cp-cap-card" data-reveal>
            <div class="cp-cap-card__icon"><i class="ph ph-monitor"></i></div>
            <h3>System Integration</h3>
            <p>Integrate seamlessly with EHRs, RCM platforms, payer systems, and document repositories.</p>
          </div>
          <div class="cp-cap-card" data-reveal>
            <div class="cp-cap-card__icon"><i class="ph ph-lock-simple"></i></div>
            <h3>Audit &amp; Compliance</h3>
            <p>Maintain comprehensive audit trails, decision logs, and workflow history to support governance, compliance, and operational transparency.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- â”€â”€â”€ WHY IT MATTERS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="cp-why">
      <div class="cp-why__bg-grid"></div>
      <div class="cp-why__glow-1"></div>
      <div class="cp-why__glow-2"></div>
      <div class="cp-why__inner">
        <div class="cp-why__header" data-reveal>
          <span class="cp-eyebrow cp-eyebrow--light">Why It Matters</span>
          <h2 class="cp-section-heading cp-section-heading--light">Why it matters</h2>
          <p class="cp-why__text">Claims processing remains one of the most operationally intensive functions within the healthcare revenue cycle. Incomplete submissions, manual validation, fragmented workflows, and repeated handoffs across teams and systems frequently lead to processing delays, increased administrative costs, higher denial rates, and slower reimbursements. Agentic AI addresses these challenges by intelligently automating routine validation, decision-support, and workflow orchestration tasks while proactively identifying exceptions that require human expertise. The result is a faster, more accurate, and highly efficient claims process that improves financial performance without compromising quality or compliance.</p>
        </div>
      </div>
    </section>

    <!-- â”€â”€â”€ BUSINESS VALUE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="cp-value" data-reveal>
      <div class="cp-value__ring"></div>
      <div class="cp-value__inner">
        <span class="cp-eyebrow">Business Value</span>
        <h2 class="cp-section-heading">Business value</h2>
        <div class="cp-value__grid">
          <div class="cp-value-card">
            <div class="cp-value-card__icon">âš¡</div>
            <span>Accelerate claims processing and reimbursement cycles through intelligent workflow automation.</span>
          </div>
          <div class="cp-value-card">
            <div class="cp-value-card__icon">âœ…</div>
            <span>Improve first-pass claim acceptance rates by reducing submission errors and incomplete claims.</span>
          </div>
          <div class="cp-value-card">
            <div class="cp-value-card__icon">ðŸ“‰</div>
            <span>Minimise rework, denials, and appeals through proactive validation and quality assurance.</span>
          </div>
          <div class="cp-value-card">
            <div class="cp-value-card__icon">ðŸ‘¥</div>
            <span>Reduce administrative workload, enabling claims and revenue cycle teams to focus on higher-value activities.</span>
          </div>
          <div class="cp-value-card">
            <div class="cp-value-card__icon">ðŸ“Š</div>
            <span>Enhance visibility into claim status, processing bottlenecks, and operational performance with real-time workflow insights.</span>
          </div>
          <div class="cp-value-card">
            <div class="cp-value-card__icon">ðŸ“ˆ</div>
            <span>Increase operational scalability while maintaining consistency, accuracy, and adherence to payer requirements.</span>
          </div>
          <div class="cp-value-card">
            <div class="cp-value-card__icon">ðŸ’°</div>
            <span>Strengthen revenue cycle performance by improving cash flow, reducing cost-to-collect, and optimising workforce productivity.</span>
          </div>
        </div>
      </div>
    </section>

    <!-- â”€â”€â”€ GOVERNANCE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="cp-governance">
      <div class="cp-governance__inner" data-reveal>
        <div class="cp-governance__icon-wrap"><i class="ph ph-lock-simple"></i></div>
        <h2 class="cp-section-heading">Governance and <em>Control</em></h2>
        <p>Our Agentic AI solutions are built with enterprise-grade governance, transparency, and regulatory compliance at their foundation. Human-in-the-loop oversight ensures that complex, high-value, low-confidence, or clinically sensitive claims are automatically escalated to qualified reviewers for assessment and approval. Comprehensive audit trails, explainable AI decisioning, continuous monitoring, configurable business rules, and rigorous compliance controls provide complete traceability and accountability throughout the claims lifecycle.</p>
        <p>This governance-first approach enables healthcare organisations to achieve the efficiencies of intelligent automation while maintaining accuracy, regulatory alignment, and confidence in every decision.</p>
      </div>
    </section>

    <!-- â”€â”€â”€ CTA BAND â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="cp-cta">
      <div class="cp-cta__ring"></div>
      <div class="cp-cta__dots"></div>
      <h2 class="cp-cta__heading">Ready to transform claims processing?</h2>
      <p class="cp-cta__sub">Let's discuss how Agentic AI can optimise your revenue cycle.</p>
      <a routerLink="/contact-us" class="cp-cta__btn">
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
    .cp-eyebrow { display: inline-block; color: var(--teal); font-size: 0.78rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 1rem; }
    .cp-eyebrow--light { color: var(--orange); }
    .cp-section-heading { font-family: "DM Serif Display", serif; font-size: clamp(1.8rem, 3vw, 2.5rem); color: var(--dark); font-weight: 400; line-height: 1.2; margin-bottom: 1.2rem; }
    .cp-section-heading em { color: var(--orange); font-style: italic; }
    .cp-section-heading--light { color: #fff; }

    /* â”€â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .cp-hero { position: relative; height: 55vh; min-height: 360px; max-height: 480px; overflow: hidden; }
    .cp-hero__bg { position: absolute; inset: 0; }
    .cp-hero__bg img { width: 100%; height: 100%; object-fit: cover; transform: scale(1.05); animation: heroZoom 12s ease-out forwards; }
    @keyframes heroZoom { to { transform: scale(1); } }
    .cp-hero__overlay { position: absolute; inset: 0; background: radial-gradient(ellipse at 20% 30%, rgba(232, 119, 34, 0.28), transparent 55%), radial-gradient(ellipse at 80% 70%, rgba(27, 58, 143, 0.45), transparent 55%), linear-gradient(180deg, rgba(16, 21, 42, 0.35), rgba(16, 21, 42, 0.85)); }
    .cp-hero__abstract-ring { position: absolute; top: 8%; left: 4%; width: 220px; height: 220px; border: 1.5px solid rgba(255,255,255,0.1); border-radius: 50%; z-index: 1; animation: spinSlow 28s linear infinite; }
    .cp-hero__abstract-blob { position: absolute; bottom: 12%; right: 6%; width: 140px; height: 140px; background: rgba(232,119,34,0.15); border-radius: 50%; z-index: 1; filter: blur(40px); animation: drift 14s ease-in-out infinite; }
    .cp-hero__particles { position: absolute; inset: 0; z-index: 1; overflow: hidden; pointer-events: none; }
    .cp-hero__particle { position: absolute; width: 4px; height: 4px; background: rgba(255,255,255,0.4); border-radius: 50%; animation: particleRise linear infinite; }
    @keyframes particleRise { 0% { transform: translateY(100vh) scale(0); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(-20px) scale(1); opacity: 0; } }
    .cp-hero__content { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 2rem; z-index: 2; }
    .cp-hero__badge { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.1); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.2); border-radius: 999px; padding: 0.35rem 1.1rem; margin-bottom: 1.5rem; opacity: 0; transform: translateY(12px); animation: fadeUp 0.8s 0.3s forwards; }
    .cp-hero__badge-dot { width: 7px; height: 7px; background: var(--teal-light); border-radius: 50%; animation: pulse 2s infinite; }
    @keyframes pulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.5; transform:scale(0.7); } }
    .cp-hero__badge span:last-child { color: #fff; font-size: 0.78rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; }
    .cp-hero__heading { font-family: "DM Serif Display", serif; font-size: clamp(1.8rem, 4vw, 3rem); color: #fff; font-weight: 400; line-height: 1.1; margin-bottom: 1.2rem; opacity: 0; transform: translateY(20px); animation: fadeUp 1s 0.5s forwards; }
    .cp-hero__heading em { font-style: italic; color: var(--orange); }
    .cp-hero__sub { font-size: 0.95rem; color: rgba(255,255,255,0.75); max-width: 580px; line-height: 1.6; margin-bottom: 1.5rem; opacity: 0; transform: translateY(20px); animation: fadeUp 1s 0.7s forwards; }
    .cp-hero__cta { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--orange); color: #fff; font-weight: 600; font-size: 0.9rem; padding: 0.75rem 1.8rem; border-radius: 999px; text-decoration: none; transition: background 0.3s, transform 0.3s, box-shadow 0.3s; opacity: 0; transform: translateY(20px); animation: fadeUp 1s 0.9s forwards; }
    .cp-hero__cta:hover { background: #c96418; color: #fff; transform: translateY(-3px); box-shadow: 0 12px 32px rgba(232,119,34,0.4); }
    @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
    @media (max-width: 768px) { .cp-hero { height: 50vh; min-height: 320px; } .cp-hero__sub { font-size: 0.88rem; } }

    /* â”€â”€â”€ INTRO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .cp-intro { padding: 6rem 3rem; max-width: 1200px; margin: 0 auto; position: relative; overflow: hidden; }
    .cp-intro__blob { position: absolute; top: -60px; right: -80px; width: 300px; height: 300px; background: radial-gradient(circle, rgba(27,58,143,0.06) 0%, transparent 70%); border-radius: 50%; animation: drift 15s ease-in-out infinite; pointer-events: none; }
    .cp-intro__dots { position: absolute; bottom: -40px; left: -40px; width: 150px; height: 150px; background-image: radial-gradient(circle, rgba(232,119,34,0.2) 1.5px, transparent 1.5px); background-size: 16px 16px; opacity: 0.6; pointer-events: none; animation: float 10s ease-in-out infinite; }
    .cp-intro__grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 5rem; align-items: center; }
    .cp-intro__text p { font-size: 1rem; color: #444; line-height: 1.85; margin-bottom: 1.2rem; }
    .cp-intro__visual { position: relative; padding: 2rem; }
    .cp-intro__ring { position: absolute; top: -10px; right: -10px; width: 280px; height: 280px; border: 2px dashed rgba(27,58,143,0.1); border-radius: 50%; animation: spinSlow 35s linear infinite; pointer-events: none; }
    .cp-intro__ring::after { content: ""; position: absolute; top: -5px; left: 50%; width: 10px; height: 10px; background: var(--orange); border-radius: 50%; box-shadow: 0 0 16px rgba(232,119,34,0.5); }
    .cp-intro__dot-grid { position: absolute; top: -15px; left: -15px; width: 120px; height: 120px; background-image: radial-gradient(circle, rgba(27,58,143,0.15) 1.5px, transparent 1.5px); background-size: 14px 14px; pointer-events: none; z-index: 0; }
    .cp-intro__img { width: 100%; border-radius: 24px; box-shadow: 0 20px 60px rgba(27,58,143,0.15); overflow: hidden; position: relative; z-index: 1; }
    .cp-intro__img img { width: 100%; height: auto; display: block; }
    .cp-intro__float-card { position: absolute; bottom: -30px; right: -20px; background: #fff; border-radius: 16px; padding: 1.1rem 1.4rem; box-shadow: 0 10px 40px rgba(0,0,0,0.1); display: flex; align-items: center; gap: 0.8rem; z-index: 2; animation: floatCard 4s ease-in-out infinite; }
    @keyframes floatCard { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
    .cp-intro__float-icon { width: 44px; height: 44px; background: linear-gradient(135deg, var(--orange), #c96418); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; }
    .cp-intro__float-text strong { display: block; font-size: 0.85rem; color: var(--dark); }
    .cp-intro__float-text span { font-size: 0.75rem; color: var(--mid); }
    @media (max-width: 991px) { .cp-intro { padding: 4rem 1.5rem; } .cp-intro__grid { grid-template-columns: 1fr; gap: 2.5rem; } .cp-intro__float-card { right: 10px; bottom: -20px; } }

    /* â”€â”€â”€ CAPABILITIES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .cp-capabilities { padding: 6rem 3rem; background: linear-gradient(180deg, rgba(27,58,143,0.04) 0%, var(--bg) 100%); position: relative; overflow: hidden; }
    .cp-capabilities__ring { position: absolute; top: 100px; left: -120px; width: 350px; height: 350px; border: 1.5px solid rgba(27,58,143,0.06); border-radius: 50%; pointer-events: none; animation: spinSlow 40s linear infinite; }
    .cp-capabilities__blob { position: absolute; bottom: 50px; right: -80px; width: 200px; height: 200px; background: rgba(232,119,34,0.04); border-radius: 50%; filter: blur(60px); animation: drift 15s ease-in-out infinite; pointer-events: none; }
    .cp-capabilities__inner { max-width: 1200px; margin: 0 auto; }
    .cp-capabilities__header { text-align: center; margin-bottom: 4rem; }
    .cp-capabilities__grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; counter-reset: cap-counter; }
    .cp-cap-card { background: var(--card-bg); border-radius: 20px; padding: 2rem 1.8rem; border: 1px solid rgba(27,58,143,0.06); position: relative; overflow: hidden; transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s, border-color 0.3s; display: flex; flex-direction: column; gap: 0.8rem; box-shadow: 0 4px 20px rgba(27,58,143,0.06); counter-increment: cap-counter; }
    .cp-cap-card::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 3px; background: linear-gradient(90deg, var(--blue), var(--orange)); opacity: 0.5; transition: opacity 0.4s, height 0.4s; }
    .cp-cap-card:hover::before { opacity: 1; height: 4px; }
    .cp-cap-card::after { content: "0" counter(cap-counter); position: absolute; bottom: 12px; right: 16px; font-family: "DM Serif Display", serif; font-size: 2.5rem; font-weight: 400; color: rgba(27,58,143,0.04); line-height: 1; pointer-events: none; transition: color 0.4s; }
    .cp-cap-card:hover::after { color: rgba(27,58,143,0.08); }
    .cp-cap-card:hover { transform: translateY(-8px); box-shadow: 0 20px 50px rgba(27,58,143,0.12); border-color: rgba(27,58,143,0.15); }
    .cp-cap-card__icon { width: 50px; height: 50px; background: linear-gradient(135deg, rgba(27,58,143,0.08), rgba(232,119,34,0.06)); border-radius: 14px; display: flex; align-items: center; justify-content: center; transition: background 0.3s, transform 0.3s; box-shadow: 0 2px 8px rgba(27,58,143,0.08); }
    .cp-cap-card:hover .cp-cap-card__icon { background: linear-gradient(135deg, var(--teal), var(--teal-dark)); transform: scale(1.1) rotate(-3deg); }
    .cp-cap-card__icon i.ph { font-size: 1.4rem; color: var(--teal); transition: color 0.3s; line-height: 1; }
    .cp-cap-card:hover .cp-cap-card__icon i.ph { color: #fff; }
    .cp-cap-card h3 { font-size: 1rem; font-weight: 700; color: var(--dark); margin: 0; }
    .cp-cap-card p { font-size: 0.88rem; color: var(--mid); line-height: 1.6; margin: 0; }
    @media (max-width: 768px) { .cp-capabilities { padding: 3.5rem 1.2rem; } .cp-capabilities__grid { grid-template-columns: 1fr; } }

    /* â”€â”€â”€ WHY IT MATTERS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .cp-why { padding: 5rem 3rem; background: linear-gradient(135deg, #060d1f 0%, #0a1635 40%, #0f1f4a 100%); position: relative; overflow: hidden; }
    .cp-why__bg-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 60px 60px; pointer-events: none; }
    .cp-why__glow-1 { position: absolute; width: 400px; height: 400px; border-radius: 50%; background: radial-gradient(circle, rgba(232,119,34,0.15) 0%, transparent 70%); top: -100px; right: -100px; pointer-events: none; animation: drift 18s ease-in-out infinite; }
    .cp-why__glow-2 { position: absolute; width: 350px; height: 350px; border-radius: 50%; background: radial-gradient(circle, rgba(123,163,255,0.1) 0%, transparent 70%); bottom: -120px; left: -80px; pointer-events: none; animation: drift 14s ease-in-out infinite reverse; }
    .cp-why__inner { max-width: 900px; margin: 0 auto; position: relative; z-index: 2; text-align: center; }
    .cp-why__text { font-size: 1rem; color: rgba(255,255,255,0.7); line-height: 1.85; max-width: 850px; margin: 0 auto; }
    @media (max-width: 768px) { .cp-why { padding: 3.5rem 1.2rem; } }

    /* â”€â”€â”€ BUSINESS VALUE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .cp-value { padding: 6rem 3rem; background: linear-gradient(180deg, var(--bg) 0%, rgba(232,119,34,0.04) 100%); position: relative; overflow: hidden; }
    .cp-value__ring { position: absolute; top: 60px; right: -60px; width: 180px; height: 180px; border: 1.5px dashed rgba(232,119,34,0.12); border-radius: 50%; animation: spinSlow 35s linear infinite reverse; pointer-events: none; }
    .cp-value__inner { max-width: 1100px; margin: 0 auto; text-align: center; position: relative; z-index: 1; }
    .cp-value__grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 3rem; text-align: left; }
    .cp-value-card { background: #fff; border-radius: 16px; padding: 1.8rem 1.5rem; display: flex; align-items: flex-start; gap: 1rem; border: 1px solid rgba(232,119,34,0.1); transition: transform 0.3s, box-shadow 0.3s; }
    .cp-value-card:hover { transform: translateY(-6px); box-shadow: 0 14px 40px rgba(27,58,143,0.1); }
    .cp-value-card__icon { width: 46px; height: 46px; flex-shrink: 0; background: linear-gradient(135deg, rgba(232,119,34,0.1), rgba(232,119,34,0.04)); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; }
    .cp-value-card span { font-size: 0.9rem; font-weight: 500; color: var(--dark); line-height: 1.6; }
    @media (max-width: 768px) { .cp-value { padding: 3.5rem 1.2rem; } .cp-value__grid { grid-template-columns: 1fr; } }

    /* â”€â”€â”€ GOVERNANCE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .cp-governance { padding: 5rem 3rem; background: var(--bg); }
    .cp-governance__inner { max-width: 900px; margin: 0 auto; background: #fff; border-radius: 24px; padding: 3rem 3.5rem; box-shadow: 0 10px 40px rgba(27,58,143,0.08); border: 1px solid rgba(27,58,143,0.06); position: relative; overflow: hidden; text-align: center; }
    .cp-governance__inner::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, var(--blue), var(--orange)); }
    .cp-governance__icon-wrap { width: 60px; height: 60px; margin: 0 auto 1.5rem; background: linear-gradient(135deg, rgba(27,58,143,0.08), rgba(232,119,34,0.06)); border-radius: 16px; display: flex; align-items: center; justify-content: center; }
    .cp-governance__icon-wrap i.ph { font-size: 1.6rem; color: var(--teal); line-height: 1; }
    .cp-governance p { font-size: 1rem; color: #444; line-height: 1.85; margin-bottom: 1.2rem; text-align: left; }
    .cp-governance p:last-child { margin-bottom: 0; }
    @media (max-width: 768px) { .cp-governance { padding: 3rem 1.2rem; } .cp-governance__inner { padding: 2rem 1.5rem; } }

    /* â”€â”€â”€ CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .cp-cta { background: linear-gradient(135deg, #142d6b 0%, #1B3A8F 100%); padding: 4rem 3rem; text-align: center; position: relative; overflow: hidden; }
    .cp-cta::before { content: ""; position: absolute; width: 400px; height: 400px; border-radius: 50%; background: rgba(232,119,34,0.08); top: -150px; right: -100px; pointer-events: none; }
    .cp-cta__ring { position: absolute; bottom: -80px; left: 10%; width: 250px; height: 250px; border: 2px solid rgba(255,255,255,0.08); border-radius: 50%; animation: spinSlow 20s linear infinite; }
    .cp-cta__dots { position: absolute; top: 20px; left: 50%; width: 100px; height: 100px; background-image: radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px); background-size: 12px 12px; pointer-events: none; animation: drift 12s ease-in-out infinite; }
    .cp-cta__heading { font-family: "DM Serif Display", serif; font-size: clamp(1.5rem, 3vw, 2.2rem); color: #fff; font-weight: 400; margin-bottom: 1rem; position: relative; }
    .cp-cta__sub { color: rgba(255,255,255,0.7); font-size: 1rem; margin-bottom: 2rem; position: relative; }
    .cp-cta__btn { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--orange); color: #fff; font-weight: 700; font-size: 0.92rem; padding: 0.8rem 2rem; border-radius: 999px; text-decoration: none; transition: transform 0.3s, box-shadow 0.3s; position: relative; }
    .cp-cta__btn:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(232,119,34,0.4); color: #fff; }
    @media (max-width: 768px) { .cp-cta { padding: 3rem 1.2rem; } }

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
export class ClaimsProcessing implements AfterViewInit, OnDestroy {
  private revealObserver: IntersectionObserver | null = null;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const host = this.el.nativeElement as HTMLElement;

    // Particles
    const container = host.querySelector('#cp-particles');
    if (container) {
      for (let i = 0; i < 18; i++) {
        const p = document.createElement('span');
        p.className = 'cp-hero__particle';
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
    const cards = host.querySelectorAll<HTMLElement>('.cp-cap-card');
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



