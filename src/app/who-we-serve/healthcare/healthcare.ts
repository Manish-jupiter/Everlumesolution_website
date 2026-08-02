import { Component, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-healthcare',
  standalone: true,
  imports: [RouterLink],
  template: `
    
     <!-- ─── BREADCRUMB ───────────────────────────────────────── -->
  <div class="breadcrumb-bar">
    <a href="index.html">Home</a>
    <span class="sep">›</span>
    <a href="#">Services</a>
    <span class="sep">›</span>
    <span class="current">Healthcare Agentic AI</span>
  </div>

  <!-- ─── HERO CAROUSEL ────────────────────────────────────── -->
  <section class="hc-hero" id="hc-hero">
    <div class="hc-hero__slide is-active">
      <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=80" alt="Healthcare technology" />
      <div class="hc-hero__overlay"></div>
    </div>
    <div class="hc-hero__slide">
      <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1800&q=80" alt="Medical professionals" />
      <div class="hc-hero__overlay"></div>
    </div>
    <div class="hc-hero__slide">
      <img src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1800&q=80" alt="AI in healthcare" />
      <div class="hc-hero__overlay"></div>
    </div>

    <!-- Abstract decorative shapes -->
    <div class="hc-hero__abstract-1"></div>
    <div class="hc-hero__abstract-2 abstract-blob"></div>
    <div class="hc-hero__abstract-3"></div>
    <div class="hc-hero__particles" id="hero-particles"></div>

    <div class="hc-hero__content">
      <div class="hc-hero__badge">
        <span class="hc-hero__badge-dot"></span>
        <span>Healthcare Agentic AI</span>
      </div>
      <h1 class="hc-hero__heading">Intelligent agents for<br/><em>smarter healthcare</em></h1>
      <p class="hc-hero__sub">Autonomous AI workflows that streamline patient engagement, optimise operations, and deliver measurable outcomes across the care continuum.</p>
      <a href="#hc-deliver" class="hc-hero__cta">
        Explore Our Solutions
        <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
    </div>

    <div class="hc-hero__dots" id="hc-hero-dots">
      <button class="hc-hero__dot is-active" data-slide="0" aria-label="Slide 1"></button>
      <button class="hc-hero__dot" data-slide="1" aria-label="Slide 2"></button>
      <button class="hc-hero__dot" data-slide="2" aria-label="Slide 3"></button>
    </div>
  </section>

  <!-- ─── STATS STRIP ──────────────────────────────────────── -->
  <div class="hc-stats-strip" data-reveal-scale>
    <div class="hc-stat">
      <span class="hc-counter" data-target="40">0</span><span class="hc-counter">%</span>
      <p class="hc-stat__label">Cost Reduction</p>
    </div>
    <div class="hc-stat">
      <span class="hc-counter" data-target="3">0</span><span class="hc-counter">x</span>
      <p class="hc-stat__label">Faster Workflows</p>
    </div>
    <div class="hc-stat">
      <span class="hc-counter" data-target="95">0</span><span class="hc-counter">%</span>
      <p class="hc-stat__label">Accuracy Rate</p>
    </div>
    <div class="hc-stat">
      <span class="hc-counter" data-target="24">0</span><span class="hc-counter">/7</span>
      <p class="hc-stat__label">Autonomous Ops</p>
    </div>
  </div>

  <!-- ─── INTRO ────────────────────────────────────────────── -->
  <section class="hc-intro" style="position:relative; overflow:hidden;">
    <div class="hc-intro__blob"></div>
    <div class="hc-intro__dots-pattern"></div>
    <div class="hc-intro__grid">
      <div data-reveal-left>
        <span class="hc-intro__eyebrow">About Our Service</span>
        <h2 class="hc-intro__heading">Enterprise-grade AI that <em>transforms</em> healthcare operations</h2>
        <p class="hc-intro__text">
          Transform healthcare operations with intelligent AI agents capable of reasoning, orchestrating, and executing complex workflows autonomously. Our Agentic AI services empower healthcare providers, payers, and health technology organizations to streamline patient engagement, optimise administrative processes, and enhance operational performance—while ensuring appropriate human oversight and governance.
        </p>
        <p class="hc-intro__text">
          We design and deploy enterprise-grade, healthcare-ready agentic AI solutions that seamlessly integrate with EHRs, revenue cycle management platforms, claims processing systems, scheduling applications, and customer support ecosystems.
        </p>
        <p class="hc-intro__text">
          Built on secure, scalable, and compliant AI architectures, our solutions enable healthcare organisations to reduce operational costs, improve workforce productivity, enhance patient experiences, and achieve measurable business outcomes while maintaining the highest standards of security, privacy, and regulatory compliance.
        </p>
        <a routerLink="/customer-delight" class="hc-intro__btn">
          Customer Delight
          <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
      <div class="hc-intro__visual" data-reveal-right>
        <div class="hc-intro__dot-grid"></div>
        <div class="hc-intro__ring"></div>
        <div class="hc-intro__plus"></div>
        <div class="hc-intro__glow"></div>
        <div class="hc-intro__img">
          <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80" alt="Healthcare AI integration" loading="lazy" />
        </div>
        <div class="hc-intro__float-card">
          <div class="hc-intro__float-icon">🤖</div>
          <div class="hc-intro__float-text">
            <strong>AI-Powered</strong>
            <span>Autonomous workflows</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ─── WHAT WE DELIVER ──────────────────────────────────── -->
  <section class="hc-deliver" id="hc-deliver" style="position:relative; overflow:hidden;">
    <div class="hc-deliver__abstract abstract-ring"></div>
    <div class="hc-deliver__abstract-2 abstract-blob"></div>
    <div class="hc-deliver__inner">
      <div class="hc-deliver__header" data-reveal>
        <span class="hc-deliver__eyebrow">What We Deliver</span>
        <h2 class="hc-deliver__title">End-to-end healthcare<br/><em>AI capabilities</em></h2>
        <p class="hc-deliver__sub">Click any capability below to explore how our AI agents deliver value across the healthcare ecosystem.</p>
      </div>

      <div class="hc-deliver__grid">
        <a routerLink="/who-we-serve/healthcare/patient-scheduling" class="hc-card" data-reveal>
          <div class="hc-card__icon"><i class="ph ph-calendar"></i></div>
          <span class="hc-card__title">Patient Scheduling & Coordination</span>
          <span class="hc-card__desc">AI-driven appointment optimization, automated reminders, and intelligent care coordination across providers.</span>
          <span class="hc-card__arrow">Learn more →</span>
        </a>

        <a routerLink="/who-we-serve/healthcare/prior-authorization" class="hc-card" data-reveal>
          <div class="hc-card__icon"><i class="ph ph-check-square"></i></div>
          <span class="hc-card__title">Prior Authorization & Eligibility</span>
          <span class="hc-card__desc">Automated eligibility verification and prior auth workflows that reduce denials and accelerate approvals.</span>
          <span class="hc-card__arrow">Learn more →</span>
        </a>

        <a routerLink="/who-we-serve/healthcare/claims-processing" class="hc-card" data-reveal>
          <div class="hc-card__icon"><i class="ph ph-file-text"></i></div>
          <span class="hc-card__title">Claims Processing Assistance</span>
          <span class="hc-card__desc">Intelligent claims adjudication, error detection, and automated follow-up to maximize clean claim rates.</span>
          <span class="hc-card__arrow">Learn more →</span>
        </a>

        <a routerLink="/who-we-serve/healthcare/medical-coding" class="hc-card" data-reveal>
          <div class="hc-card__icon"><i class="ph ph-book-open"></i></div>
          <span class="hc-card__title">Medical Coding</span>
          <span class="hc-card__desc">AI-assisted code suggestion and validation ensuring accuracy, compliance, and faster reimbursement cycles.</span>
          <span class="hc-card__arrow">Learn more →</span>
        </a>

        <a routerLink="/who-we-serve/healthcare/care-gap-identification" class="hc-card" data-reveal>
          <div class="hc-card__icon"><i class="ph ph-clock"></i></div>
          <span class="hc-card__title">Care Gap Identification & Follow-up</span>
          <span class="hc-card__desc">Proactive identification of care gaps with automated patient outreach and follow-up orchestration.</span>
          <span class="hc-card__arrow">Learn more →</span>
        </a>

        <a routerLink="/who-we-serve/healthcare/clinical-digital-support" class="hc-card" data-reveal>
          <div class="hc-card__icon"><i class="ph ph-monitor"></i></div>
          <span class="hc-card__title">Clinical Digital Support Integration</span>
          <span class="hc-card__desc">Seamless integration with clinical decision support tools to enhance diagnostic and treatment workflows.</span>
          <span class="hc-card__arrow">Learn more →</span>
        </a>

        <a routerLink="/who-we-serve/healthcare/remote-patient-monitoring" class="hc-card" data-reveal>
          <div class="hc-card__icon"><i class="ph ph-pulse"></i></div>
          <span class="hc-card__title">Remote Patient Monitoring Integration</span>
          <span class="hc-card__desc">Real-time data aggregation from wearables and IoT devices with intelligent alerting and care escalation.</span>
          <span class="hc-card__arrow">Learn more →</span>
        </a>

        <a routerLink="/who-we-serve/healthcare/clinical-operational-workflow" class="hc-card" data-reveal>
          <div class="hc-card__icon"><i class="ph ph-arrows-left-right"></i></div>
          <span class="hc-card__title">Clinical & Operational Workflow Integration</span>
          <span class="hc-card__desc">End-to-end workflow orchestration connecting clinical and administrative systems for unified operations.</span>
          <span class="hc-card__arrow">Learn more →</span>
        </a>

        <a routerLink="/who-we-serve/healthcare/human-in-the-loop" class="hc-card" data-reveal>
          <div class="hc-card__icon"><i class="ph ph-users-three"></i></div>
          <span class="hc-card__title">Human-in-the-Loop Controls</span>
          <span class="hc-card__desc">Configurable escalation paths and approval gates ensuring human oversight for critical decisions.</span>
          <span class="hc-card__arrow">Learn more →</span>
        </a>

        <a routerLink="/who-we-serve/healthcare/security-compliance" class="hc-card" data-reveal>
          <div class="hc-card__icon"><i class="ph ph-lock-simple"></i></div>
          <span class="hc-card__title">Security & Compliance</span>
          <span class="hc-card__desc">HIPAA-compliant architectures with enterprise-grade encryption, audit trails, and regulatory adherence.</span>
          <span class="hc-card__arrow">Learn more →</span>
        </a>
      </div>
    </div>
  </section>

  <!-- ─── WHY IT MATTERS ───────────────────────────────────── -->
  <section class="hc-why">
    <div class="hc-why__bg-grid"></div>
    <div class="hc-why__glow-1"></div>
    <div class="hc-why__glow-2"></div>

    <div class="hc-why__inner">
      <div class="hc-why__top" data-reveal>
        <span class="hc-why__eyebrow">Why It Matters</span>
        <h2 class="hc-why__heading">Addressing healthcare's biggest operational challenges with intelligent automation</h2>
        <p class="hc-why__text">
          Healthcare organisations continue to face significant operational inefficiencies driven by repetitive administrative tasks, fragmented workflows, manual handoffs, and constant navigation across disparate systems. Our Agentic AI solutions address these challenges by intelligently automating routine decisions, orchestrating activities across applications, delivering the right information to the right stakeholders at the right time, and seamlessly escalating complex or exception-based scenarios to human experts when required.
        </p>
      </div>

      <div class="hc-why__bottom">
        <div class="hc-why__content" data-reveal-left>

        <div class="hc-why__features">
          <div class="hc-why__feature" data-reveal>
            <div class="hc-why__feature-icon"><i class="ph ph-gear-six"></i></div>
            <div class="hc-why__feature-text">
              <strong>Automate Routine Decisions</strong>
              <span>Intelligently handle repetitive tasks so teams focus on high-value care</span>
            </div>
          </div>
          <div class="hc-why__feature" data-reveal>
            <div class="hc-why__feature-icon"><i class="ph ph-arrows-left-right"></i></div>
            <div class="hc-why__feature-text">
              <strong>Orchestrate Across Systems</strong>
              <span>Seamlessly coordinate activities across all applications and platforms</span>
            </div>
          </div>
          <div class="hc-why__feature" data-reveal>
            <div class="hc-why__feature-icon"><i class="ph ph-clock"></i></div>
            <div class="hc-why__feature-text">
              <strong>Right Info, Right Time</strong>
              <span>Deliver precise information to stakeholders when they need it most</span>
            </div>
          </div>
          <div class="hc-why__feature" data-reveal>
            <div class="hc-why__feature-icon"><i class="ph ph-users-three"></i></div>
            <div class="hc-why__feature-text">
              <strong>Smart Escalation</strong>
              <span>Seamlessly route complex scenarios to human experts when required</span>
            </div>
          </div>
        </div>
        </div>

      <div class="hc-why__abstract" data-reveal-right>
        <div class="hc-why__hex-grid">
          <div class="hc-why__hex hc-why__hex--1"></div>
          <div class="hc-why__hex hc-why__hex--2"></div>
          <div class="hc-why__hex hc-why__hex--3"></div>
          <div class="hc-why__hex hc-why__hex--4"></div>
          <div class="hc-why__hex hc-why__hex--5"></div>
          <div class="hc-why__hex hc-why__hex--6"></div>
          <div class="hc-why__hex hc-why__hex--7"></div>
          <div class="hc-why__hex hc-why__hex--8"></div>
          <div class="hc-why__hex hc-why__hex--9"></div>
          <div class="hc-why__hex-line hc-why__hex-line--1"></div>
          <div class="hc-why__hex-line hc-why__hex-line--2"></div>
          <div class="hc-why__hex-line hc-why__hex-line--3"></div>
          <div class="hc-why__hex-line hc-why__hex-line--4"></div>
          <div class="hc-why__data-node hc-why__data-node--1"></div>
          <div class="hc-why__data-node hc-why__data-node--2"></div>
          <div class="hc-why__data-node hc-why__data-node--3"></div>
          <div class="hc-why__data-node hc-why__data-node--4"></div>
        </div>
        <div class="hc-why__center-ring"></div>
        <div class="hc-why__center-badge">
          <span class="hc-why__center-badge-icon"><i class="ph ph-user"></i></span>
          <span>Agentic<br/>Intelligence</span>
        </div>
      </div>
      </div>

      <div class="hc-why__quote" data-reveal>
        <p>The result is a more agile, scalable, and patient-centric operating model that enhances workforce productivity, accelerates care delivery, reduces administrative overhead, and enables healthcare professionals to focus on delivering higher-value patient care.</p>
      </div>
    </div>
  </section>

  <!-- ─── OUTCOMES ─────────────────────────────────────────── -->
  <section class="hc-outcomes" data-reveal style="position:relative; overflow:hidden;">
    <div class="hc-outcomes__ring"></div>
    <div class="hc-outcomes__inner" style="position:relative; z-index:1;">
      <span class="hc-outcomes__eyebrow">Expected Outcomes</span>
      <h2 class="hc-outcomes__title">Measurable results from day one</h2>

      <div class="hc-outcomes__grid">
        <div class="hc-outcome-card">
          <div class="hc-outcome-card__icon">⚡</div>
          <span class="hc-outcome-card__text">Faster administrative workflows</span>
        </div>
        <div class="hc-outcome-card">
          <div class="hc-outcome-card__icon">📉</div>
          <span class="hc-outcome-card__text">Lower operational overhead</span>
        </div>
        <div class="hc-outcome-card">
          <div class="hc-outcome-card__icon">😊</div>
          <span class="hc-outcome-card__text">Improved patient & staff experience</span>
        </div>
        <div class="hc-outcome-card">
          <div class="hc-outcome-card__icon">🔄</div>
          <span class="hc-outcome-card__text">Better consistency across care processes</span>
        </div>
        <div class="hc-outcome-card">
          <div class="hc-outcome-card__icon">👁️</div>
          <span class="hc-outcome-card__text">Greater visibility & control over actions</span>
        </div>
      </div>

      <p class="hc-outcomes__closing">
        Build healthcare operations that are faster, smarter, and easier to scale with Agentic AI.
      </p>
    </div>
  </section>

  <!-- ─── CTA BAND ─────────────────────────────────────────── -->
  <section class="hc-cta-band">
    <div class="hc-cta-band__ring"></div>
    <div class="hc-cta-band__dots"></div>
    <h2 class="hc-cta-band__heading">Ready to transform your healthcare operations?</h2>
    <p class="hc-cta-band__sub">Let's discuss how Agentic AI can accelerate your organisation's digital transformation.</p>
    <a href="#" class="hc-cta-band__btn">
      Schedule a Consultation
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
  </section>
   
  `,
  styles: [
    `
     
      
/* Internal Pages  */
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
      --emerald: #E87722;
    }
/* ─── BREADCRUMB ─────────────────────────────────────── */
    .breadcrumb-bar {
      background: var(--teal-dark);
      padding: 0.55rem 3rem;
     
    }
    .breadcrumb-bar a, .breadcrumb-bar span {
      color: rgba(255,255,255,0.65);
      font-size: 0.8rem;
      font-weight: 500;
      text-decoration: none;
    }
    .breadcrumb-bar a:hover { color: #fff; }
    .breadcrumb-bar .sep { margin: 0 0.45rem; color: rgba(255,255,255,0.3); }
    .breadcrumb-bar .current { color: var(--teal-light); font-weight: 600; }

    @media (max-width: 768px) {
      .breadcrumb-bar { padding: 0.55rem 1rem; margin-top: 58px; }
    }

    /* ─── HERO CAROUSEL ──────────────────────────────────── */
    .hc-hero {
      position: relative;
      height: 85vh;
      min-height: 500px;
      max-height: 750px;
      overflow: hidden;
    }

    .hc-hero__slide {
      position: absolute;
      inset: 0;
      opacity: 0;
      transition: opacity 1.2s ease-in-out;
    }

    .hc-hero__slide.is-active { opacity: 1; }

    .hc-hero__slide img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: scale(1.05);
      transition: transform 8s ease-out;
    }

    .hc-hero__slide.is-active img { transform: scale(1); }

    .hc-hero__overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(15,23,42,0.4) 0%, rgba(27,58,143,0.75) 100%);
    }

    .hc-hero__content {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 2rem;
      z-index: 2;
    }

    .hc-hero__badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(255,255,255,0.1);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255,255,255,0.2);
      border-radius: 999px;
      padding: 0.35rem 1.1rem;
      margin-bottom: 1.5rem;
      opacity: 0;
      transform: translateY(12px);
      animation: fadeUp 0.8s 0.3s forwards;
    }

    .hc-hero__badge-dot {
      width: 7px; height: 7px;
      background: var(--teal-light);
      border-radius: 50%;
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0%,100% { opacity:1; transform:scale(1); }
      50% { opacity:0.5; transform:scale(0.7); }
    }

    .hc-hero__badge span:last-child {
      color: #fff;
      font-size: 0.78rem;
      font-weight: 600;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    .hc-hero__heading {
      font-family: "DM Serif Display", serif;
      font-size: clamp(2.2rem, 5vw, 4rem);
      color: #fff;
      font-weight: 400;
      line-height: 1.1;
      margin-bottom: 1.2rem;
      opacity: 0;
      transform: translateY(20px);
      animation: fadeUp 1s 0.5s forwards;
    }

    .hc-hero__heading em {
      font-style: italic;
      color: var(--orange);
    }

    .hc-hero__sub {
      font-size: 1.08rem;
      color: rgba(255,255,255,0.75);
      max-width: 600px;
      line-height: 1.7;
      margin-bottom: 2rem;
      opacity: 0;
      transform: translateY(20px);
      animation: fadeUp 1s 0.7s forwards;
    }

    .hc-hero__cta {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--orange);
      color: #fff;
      font-weight: 600;
      font-size: 0.9rem;
      padding: 0.75rem 1.8rem;
      border-radius: 999px;
      text-decoration: none;
      transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
      opacity: 0;
      transform: translateY(20px);
      animation: fadeUp 1s 0.9s forwards;
    }

    .hc-hero__cta:hover {
      background: #c96418;
      color: #fff;
      transform: translateY(-3px);
      box-shadow: 0 12px 32px rgba(232,119,34,0.4);
    }

    @keyframes fadeUp {
      to { opacity: 1; transform: translateY(0); }
    }

    /* Carousel dots */
    .hc-hero__dots {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 0.6rem;
      z-index: 3;
    }

    .hc-hero__dot {
      width: 10px; height: 10px;
      border-radius: 50%;
      background: rgba(255,255,255,0.35);
      border: none;
      cursor: pointer;
      transition: background 0.3s, transform 0.3s;
    }

    .hc-hero__dot.is-active {
      background: var(--teal-light);
      transform: scale(1.3);
    }

    @media (max-width: 768px) {
      .hc-hero { height: 70vh; min-height: 400px; }
      .hc-hero__sub { font-size: 0.92rem; }
    }

    /* ─── INTRO SECTION ──────────────────────────────────── */
    .hc-intro {
      padding: 6rem 3rem;
      padding-top: 7rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .hc-intro__grid {
      display: grid;
      grid-template-columns: 1.3fr 1fr;
      gap: 5rem;
      align-items: center;
    }

    .hc-intro__eyebrow {
      display: inline-block;
      color: var(--teal);
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 1rem;
    }

    .hc-intro__heading {
      font-family: "DM Serif Display", serif;
      font-size: clamp(1.8rem, 3vw, 2.6rem);
      color: var(--dark);
      line-height: 1.2;
      margin-bottom: 1.5rem;
      font-weight: 400;
    }

    .hc-intro__heading em {
      font-style: italic;
      color: var(--orange);
    }

    .hc-intro__text {
      font-size: 1rem;
      color: #444;
      line-height: 1.85;
      margin-bottom: 1.2rem;
    }

    .hc-intro__btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--orange);
      color: #fff;
      font-weight: 600;
      font-size: 0.9rem;
      padding: 0.75rem 1.8rem;
      border-radius: 999px;
      text-decoration: none;
      margin-top: 0.8rem;
      transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
    }

    .hc-intro__btn:hover {
      background: #c96418;
      color: #fff;
      transform: translateY(-3px);
      box-shadow: 0 12px 32px rgba(232,119,34,0.35);
    }

    .hc-intro__btn svg {
      transition: transform 0.3s;
    }

    .hc-intro__btn:hover svg {
      transform: translateX(4px);
    }

    .hc-intro__visual {
      position: relative;
      padding: 2rem;
    }

    /* Abstract ring behind image */
    .hc-intro__ring {
      position: absolute;
      top: -10px; right: -10px;
      width: 280px; height: 280px;
      border: 2px dashed rgba(27,58,143,0.1);
      border-radius: 50%;
      animation: spinSlow 35s linear infinite;
      pointer-events: none;
    }

    .hc-intro__ring::after {
      content: "";
      position: absolute;
      top: -5px; left: 50%;
      width: 10px; height: 10px;
      background: var(--orange);
      border-radius: 50%;
      box-shadow: 0 0 16px rgba(232,119,34,0.5);
    }

    /* Dot grid behind image */
    .hc-intro__dot-grid {
      position: absolute;
      top: -15px; left: -15px;
      width: 120px; height: 120px;
      background-image: radial-gradient(circle, rgba(27,58,143,0.15) 1.5px, transparent 1.5px);
      background-size: 14px 14px;
      pointer-events: none;
      z-index: 0;
    }

    /* Plus/cross shape */
    .hc-intro__plus {
      position: absolute;
      top: 15%; right: -25px;
      width: 20px; height: 20px;
      z-index: 0;
      animation: float 6s ease-in-out infinite;
    }

    .hc-intro__plus::before,
    .hc-intro__plus::after {
      content: "";
      position: absolute;
      background: var(--orange);
      border-radius: 2px;
    }

    .hc-intro__plus::before {
      width: 2px; height: 100%;
      top: 0; left: 50%;
      transform: translateX(-50%);
    }

    .hc-intro__plus::after {
      width: 100%; height: 2px;
      top: 50%; left: 0;
      transform: translateY(-50%);
    }

    /* Glowing accent blob */
    .hc-intro__glow {
      position: absolute;
      bottom: 20px; left: -30px;
      width: 100px; height: 100px;
      background: radial-gradient(circle, rgba(232,119,34,0.12) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      animation: drift 12s ease-in-out infinite;
    }

    /* Second floating badge top-left */
    .hc-intro__float-badge {
      position: absolute;
      top: -10px; left: 10px;
      background: #fff;
      border-radius: 12px;
      padding: 0.6rem 1rem;
      box-shadow: 0 6px 24px rgba(0,0,0,0.08);
      display: flex;
      align-items: center;
      gap: 0.5rem;
      z-index: 3;
      animation: floatCard 5s ease-in-out infinite;
      animation-delay: -2s;
    }

    .hc-intro__float-badge-icon {
      width: 32px; height: 32px;
      background: linear-gradient(135deg, var(--blue), #3a5bbf);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .hc-intro__float-badge-icon svg {
      width: 16px; height: 16px;
    }

    .hc-intro__float-badge-icon svg path {
      stroke: #fff;
      fill: none;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .hc-intro__float-badge span {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--dark);
      line-height: 1.2;
    }

    .hc-intro__float-badge small {
      display: block;
      font-size: 0.62rem;
      color: var(--mid);
      font-weight: 400;
    }

    .hc-intro__img {
      width: 100%;
      border-radius: 24px;
      box-shadow: 0 20px 60px rgba(27,58,143,0.15);
      overflow: hidden;
    }

    .hc-intro__img img {
      width: 100%;
      height: auto;
      display: block;
    }

    .hc-intro__float-card {
      position: absolute;
      bottom: -30px;
      right: -20px;
      background: #fff;
      border-radius: 16px;
      padding: 1.1rem 1.4rem;
      box-shadow: 0 10px 40px rgba(0,0,0,0.1);
      display: flex;
      align-items: center;
      gap: 0.8rem;
      animation: floatCard 4s ease-in-out infinite;
    }

    @keyframes floatCard {
      0%,100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }

    .hc-intro__float-icon {
      width: 44px; height: 44px;
      background: linear-gradient(135deg, var(--orange), #c96418);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 1.2rem;
    }

    .hc-intro__float-text strong {
      display: block;
      font-size: 0.85rem;
      color: var(--dark);
    }

    .hc-intro__float-text span {
      font-size: 0.75rem;
      color: var(--mid);
    }

    @media (max-width: 991px) {
      .hc-intro { padding: 4rem 1.5rem; }
      .hc-intro__grid { grid-template-columns: 1fr; gap: 2.5rem; }
      .hc-intro__float-card { right: 10px; bottom: -20px; }
    }

    /* ─── WHAT WE DELIVER — CLICKABLE CARDS ──────────────── */
    .hc-deliver {
      padding: 6rem 3rem;
      background: linear-gradient(180deg, rgba(27,58,143,0.04) 0%, var(--bg) 100%);
      position: relative;
      overflow: hidden;
    }

    .hc-deliver__inner {
      max-width: 1200px;
      margin: 0 auto;
    }

    .hc-deliver__header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .hc-deliver__eyebrow {
      display: inline-block;
      color: var(--teal);
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 0.8rem;
    }

    .hc-deliver__title {
      font-family: "DM Serif Display", serif;
      font-size: clamp(1.8rem, 3vw, 2.5rem);
      color: var(--dark);
      font-weight: 400;
      margin-bottom: 0.8rem;
    }

    .hc-deliver__title em {
      color: var(--orange);
      font-style: italic;
    }

    .hc-deliver__sub {
      font-size: 1rem;
      color: var(--mid);
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.7;
    }

    .hc-deliver__grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.5rem;
    }

    .hc-card {
      background: var(--card-bg);
      border-radius: 20px;
      padding: 2rem 1.8rem;
      border: 1px solid rgba(27,58,143,0.06);
      text-decoration: none;
      color: inherit;
      position: relative;
      overflow: hidden;
      transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s, border-color 0.3s;
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      box-shadow: 0 4px 20px rgba(27,58,143,0.06);
      counter-increment: card-counter;
    }

    .hc-deliver__grid {
      counter-reset: card-counter;
    }

    /* Top accent gradient bar */
    .hc-card::before {
      content: "";
      position: absolute;
      top: 0; left: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(90deg, var(--blue), var(--orange));
      opacity: 0.5;
      transition: opacity 0.4s, height 0.4s;
    }

    .hc-card:hover::before {
      opacity: 1;
      height: 4px;
    }

    /* Card number watermark */
    .hc-card::after {
      content: "0" counter(card-counter);
      position: absolute;
      bottom: 12px; right: 16px;
      font-family: "DM Serif Display", serif;
      font-size: 2.5rem;
      font-weight: 400;
      color: rgba(27,58,143,0.04);
      line-height: 1;
      pointer-events: none;
      transition: color 0.4s;
    }

    .hc-card:hover::after {
      color: rgba(27,58,143,0.08);
    }

    .hc-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 50px rgba(27,58,143,0.12);
      border-color: rgba(27,58,143,0.15);
    }

    .hc-card__icon {
      width: 50px; height: 50px;
      background: linear-gradient(135deg, rgba(27,58,143,0.08), rgba(232,119,34,0.06));
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.3s, transform 0.3s;
      box-shadow: 0 2px 8px rgba(27,58,143,0.08);
    }

    .hc-card:hover .hc-card__icon {
      background: linear-gradient(135deg, var(--teal), var(--teal-dark));
      transform: scale(1.1) rotate(-3deg);
    }

    .hc-card__icon i.ph { font-size: 1.4rem; color: var(--teal); transition: color 0.3s; line-height: 1; }
    .hc-card:hover .hc-card__icon i.ph { color: #fff; }

    .hc-card__title {
      font-size: 1rem;
      font-weight: 700;
      color: var(--dark);
      position: relative;
      display: inline-block;
    }

    .hc-card__desc {
      font-size: 0.88rem;
      color: var(--mid);
      line-height: 1.6;
    }

    .hc-card__arrow {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      color: var(--orange);
      font-size: 0.8rem;
      font-weight: 600;
      margin-top: auto;
      opacity: 0.4;
      transform: translateX(0);
      transition: opacity 0.3s, transform 0.3s, gap 0.3s;
    }

    .hc-card:hover .hc-card__arrow {
      opacity: 1;
      transform: translateX(4px);
      gap: 0.5rem;
    }

    @media (max-width: 768px) {
      .hc-deliver { padding: 3.5rem 1.2rem; }
      .hc-deliver__grid { grid-template-columns: 1fr; }
    }

    /* ─── WHY IT MATTERS — REDESIGNED ────────────────────── */
    .hc-why {
      padding: 4rem 3rem;
      background: linear-gradient(135deg, #060d1f 0%, #0a1635 40%, #0f1f4a 100%);
      position: relative;
      overflow: hidden;
    }

    .hc-why__bg-grid {
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
      background-size: 60px 60px;
      pointer-events: none;
    }

    .hc-why__glow-1 {
      position: absolute;
      width: 400px; height: 400px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(232,119,34,0.15) 0%, transparent 70%);
      top: -100px; right: -100px;
      pointer-events: none;
      animation: drift 18s ease-in-out infinite;
    }

    .hc-why__glow-2 {
      position: absolute;
      width: 350px; height: 350px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(123,163,255,0.1) 0%, transparent 70%);
      bottom: -120px; left: -80px;
      pointer-events: none;
      animation: drift 14s ease-in-out infinite reverse;
    }

    .hc-why__inner {
      max-width: 1400px;
      margin: 0 auto;
      position: relative;
      z-index: 2;
    }

    .hc-why__top {
      max-width: 990px;
      margin: 0 auto 50px;
      text-align: center;
    }

    .hc-why__bottom {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 2rem;
      align-items: start;
    }

    .hc-why__content {
      position: relative;
    }

    .hc-why__eyebrow {
      display: inline-block;
      color: var(--orange);
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 1rem;
    }

    .hc-why__heading {
      font-family: "DM Serif Display", serif;
      font-size: clamp(1.6rem, 2.8vw, 2.4rem);
      color: #fff;
      font-weight: 400;
      margin-bottom: 0.8rem;
      line-height: 1.25;
    }

    .hc-why__text {
      font-size: 0.98rem;
      color: rgba(255,255,255,0.65);
      line-height: 1.85;
      margin-bottom: 0;
    }

    .hc-why__features {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      counter-reset: feature-counter;
    }

    .hc-why__feature {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 1.2rem 1.4rem;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 16px;
      backdrop-filter: blur(8px);
      transition: background 0.4s, border-color 0.4s, transform 0.4s, box-shadow 0.4s;
      position: relative;
      counter-increment: feature-counter;
    }

    .hc-why__feature::before {
      content: "0" counter(feature-counter);
      position: absolute;
      top: 10px; right: 14px;
      font-size: 0.65rem;
      font-weight: 700;
      color: rgba(232,119,34,0.25);
      letter-spacing: 0.05em;
      transition: color 0.3s;
    }

    .hc-why__feature:hover {
      background: rgba(232,119,34,0.06);
      border-color: rgba(232,119,34,0.25);
      transform: translateX(8px);
      box-shadow: 0 8px 30px rgba(232,119,34,0.08);
    }

    .hc-why__feature:hover::before {
      color: rgba(232,119,34,0.5);
    }

    .hc-why__feature-icon {
      width: 42px; height: 42px;
      flex-shrink: 0;
      background: linear-gradient(135deg, var(--orange), #c96418);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .hc-why__feature-icon i.ph { font-size: 1.2rem; color: #fff; line-height: 1; }

    .hc-why__feature-text strong {
      display: block;
      font-size: 0.88rem;
      color: #fff;
      margin-bottom: 0.2rem;
    }

    .hc-why__feature-text span {
      font-size: 0.8rem;
      color: rgba(255,255,255,0.5);
      line-height: 1.5;
    }

    /* Abstract side — hexagonal network pattern */
    .hc-why__abstract {
      position: relative;
      width: 100%;
      min-height: 320px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .hc-why__hex-grid {
      position: absolute;
      inset: 0;
    }

    .hc-why__hex {
      position: absolute;
      width: 55px; height: 63px;
      clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      transition: background 0.5s, transform 0.5s;
    }

    .hc-why__hex--1 { top: 2%; left: 20%; background: rgba(232,119,34,0.12); animation: hexPulse 4s ease-in-out infinite; }
    .hc-why__hex--2 { top: 2%; right: 18%; background: rgba(123,163,255,0.08); animation: hexPulse 4s 0.8s ease-in-out infinite; }
    .hc-why__hex--3 { top: 25%; left: 5%; background: rgba(255,255,255,0.04); animation: hexPulse 4s 1.6s ease-in-out infinite; }
    .hc-why__hex--4 { top: 25%; left: 38%; background: rgba(232,119,34,0.08); animation: hexPulse 4s 0.4s ease-in-out infinite; }
    .hc-why__hex--5 { top: 25%; right: 5%; background: rgba(232,119,34,0.15); animation: hexPulse 4s 1.2s ease-in-out infinite; }
    .hc-why__hex--6 { top: 50%; left: 20%; background: rgba(123,163,255,0.1); animation: hexPulse 4s 2s ease-in-out infinite; }
    .hc-why__hex--7 { top: 50%; right: 18%; background: rgba(255,255,255,0.05); animation: hexPulse 4s 0.6s ease-in-out infinite; }
    .hc-why__hex--8 { bottom: 5%; left: 5%; background: rgba(232,119,34,0.06); animation: hexPulse 4s 1.4s ease-in-out infinite; }
    .hc-why__hex--9 { bottom: 5%; left: 38%; background: rgba(123,163,255,0.06); animation: hexPulse 4s 1s ease-in-out infinite; }

    @keyframes hexPulse {
      0%,100% { opacity: 0.6; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.08); }
    }

    /* Connection lines between hexagons */
    .hc-why__hex-line {
      position: absolute;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(232,119,34,0.25), transparent);
      transform-origin: left center;
      animation: lineGlow 3s ease-in-out infinite;
    }

    .hc-why__hex-line--1 { top: 18%; left: 30%; width: 70px; transform: rotate(25deg); }
    .hc-why__hex-line--2 { top: 42%; left: 15%; width: 90px; transform: rotate(-10deg); animation-delay: -1s; }
    .hc-why__hex-line--3 { top: 55%; right: 12%; width: 60px; transform: rotate(40deg); animation-delay: -2s; }
    .hc-why__hex-line--4 { bottom: 20%; left: 25%; width: 80px; transform: rotate(15deg); animation-delay: -0.5s; }

    @keyframes lineGlow {
      0%,100% { opacity: 0.2; }
      50% { opacity: 0.8; }
    }

    /* Floating data nodes */
    .hc-why__data-node {
      position: absolute;
      border-radius: 50%;
      animation: float 5s ease-in-out infinite;
    }

    .hc-why__data-node--1 {
      width: 10px; height: 10px;
      background: var(--orange);
      top: 10%; right: 8%;
      box-shadow: 0 0 18px rgba(232,119,34,0.6);
    }

    .hc-why__data-node--2 {
      width: 6px; height: 6px;
      background: #7ba3ff;
      bottom: 15%; left: 12%;
      box-shadow: 0 0 14px rgba(123,163,255,0.5);
      animation-delay: -2s;
    }

    .hc-why__data-node--3 {
      width: 5px; height: 5px;
      background: #fff;
      top: 45%; left: 3%;
      box-shadow: 0 0 10px rgba(255,255,255,0.4);
      animation-delay: -3.5s;
    }

    .hc-why__data-node--4 {
      width: 8px; height: 8px;
      background: var(--orange);
      bottom: 30%; right: 3%;
      box-shadow: 0 0 16px rgba(232,119,34,0.5);
      animation-delay: -1s;
    }

    /* Center badge */
    .hc-why__center-badge {
      position: relative;
      width: 110px; height: 110px;
      background: rgba(232,119,34,0.08);
      border: 1px solid rgba(232,119,34,0.2);
      backdrop-filter: blur(16px);
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      z-index: 2;
      box-shadow: 0 0 40px rgba(232,119,34,0.15);
      animation: badgePulse 4s ease-in-out infinite;
    }

    @keyframes badgePulse {
      0%,100% { box-shadow: 0 0 40px rgba(232,119,34,0.1); }
      50% { box-shadow: 0 0 80px rgba(232,119,34,0.25); }
    }

    .hc-why__center-badge-icon {
      margin-bottom: 0.3rem;
    }

    .hc-why__center-badge-icon i.ph { font-size: 1.4rem; color: var(--orange); line-height: 1; }

    .hc-why__center-badge span:last-child {
      font-size: 0.6rem;
      color: rgba(255,255,255,0.7);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      line-height: 1.3;
    }

    /* Orbiting ring around center */
    .hc-why__center-ring {
      position: absolute;
      width: 155px; height: 155px;
      border: 1px dashed rgba(232,119,34,0.15);
      border-radius: 50%;
      animation: spinSlow 25s linear infinite;
    }

    .hc-why__center-ring::after {
      content: "";
      position: absolute;
      top: -4px; left: 50%;
      width: 8px; height: 8px;
      background: var(--orange);
      border-radius: 50%;
      box-shadow: 0 0 16px rgba(232,119,34,0.6);
    }

    @keyframes connectorPulse {
      0%,100% { opacity: 0.3; }
      50% { opacity: 1; }
    }

    /* Highlight quote card */
    .hc-why__quote {
      max-width: 1400px;
      margin: 3rem auto 0;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 16px;
      padding: 2rem 2.5rem;
      backdrop-filter: blur(10px);
      position: relative;
      overflow: hidden;
      z-index: 2;
    }

    .hc-why__quote::before {
      content: "";
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 3px;
      background: linear-gradient(90deg, var(--orange), #7ba3ff, var(--orange));
      background-size: 200% 100%;
      animation: shimmer 4s linear infinite;
    }

    @keyframes shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }

    .hc-why__quote p {
      font-size: 1.05rem;
      color: rgba(255,255,255,0.8);
      line-height: 1.8;
      margin: 0;
      font-weight: 500;
      font-style: italic;
    }

    @media (max-width: 991px) {
      .hc-why__bottom { grid-template-columns: 1fr; gap: 3rem; }
      .hc-why__abstract { max-width: 350px; margin: 0 auto; }
    }

    @media (max-width: 768px) {
      .hc-why { padding: 3.5rem 1.2rem; }
      .hc-why__quote { padding: 1.4rem; }
    }

    /* ─── OUTCOMES ───────────────────────────────────────── */
    .hc-outcomes {
      padding: 6rem 3rem;
      background: linear-gradient(180deg, var(--bg) 0%, rgba(232,119,34,0.04) 100%);
      position: relative;
      overflow: hidden;
    }

    .hc-outcomes__inner {
      max-width: 1100px;
      margin: 0 auto;
      text-align: center;
    }

    .hc-outcomes__eyebrow {
      display: inline-block;
      color: var(--emerald);
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 0.8rem;
    }

    .hc-outcomes__title {
      font-family: "DM Serif Display", serif;
      font-size: clamp(1.6rem, 2.8vw, 2.2rem);
      color: var(--dark);
      font-weight: 400;
      margin-bottom: 3rem;
    }

    .hc-outcomes__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
      margin-bottom: 3rem;
    }

    .hc-outcome-card {
      background: #fff;
      border-radius: 16px;
      padding: 2rem 1.5rem;
      text-align: center;
      border: 1px solid rgba(232,119,34,0.1);
      transition: transform 0.3s, box-shadow 0.3s;
    }

    .hc-outcome-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 14px 40px rgba(27,58,143,0.1);
    }

    .hc-outcome-card__icon {
      width: 52px; height: 52px;
      margin: 0 auto 1rem;
      background: linear-gradient(135deg, rgba(232,119,34,0.1), rgba(232,119,34,0.04));
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
    }

    .hc-outcome-card__text {
      font-size: 0.92rem;
      font-weight: 600;
      color: var(--dark);
      line-height: 1.5;
    }

    .hc-outcomes__closing {
      font-size: 1.1rem;
      color: #333;
      font-weight: 500;
      line-height: 1.7;
      max-width: 700px;
      margin: 0 auto;
      padding: 2rem;
      background: #fff;
      border-radius: 16px;
      border: 1px solid rgba(27,58,143,0.1);
      box-shadow: 0 4px 20px rgba(0,0,0,0.04);
    }

    @media (max-width: 768px) {
      .hc-outcomes { padding: 3.5rem 1.2rem; }
      .hc-outcomes__grid { grid-template-columns: 1fr 1fr; }
    }

    @media (max-width: 480px) {
      .hc-outcomes__grid { grid-template-columns: 1fr; }
    }

    /* ─── CTA BAND ───────────────────────────────────────── */
    .hc-cta-band {
      background: linear-gradient(135deg, #142d6b 0%, #1B3A8F 100%);
      padding: 4rem 3rem;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .hc-cta-band::before {
      content: "";
      position: absolute;
      width: 400px; height: 400px;
      border-radius: 50%;
      background: rgba(232,119,34,0.08);
      top: -150px; right: -100px;
      pointer-events: none;
    }

    .hc-cta-band__heading {
      font-family: "DM Serif Display", serif;
      font-size: clamp(1.5rem, 3vw, 2.2rem);
      color: #fff;
      font-weight: 400;
      margin-bottom: 1rem;
      position: relative;
    }

    .hc-cta-band__sub {
      color: rgba(255,255,255,0.7);
      font-size: 1rem;
      margin-bottom: 2rem;
      position: relative;
    }

    .hc-cta-band__btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--orange);
      color: #fff;
      font-weight: 700;
      font-size: 0.92rem;
      padding: 0.8rem 2rem;
      border-radius: 999px;
      text-decoration: none;
      transition: transform 0.3s, box-shadow 0.3s;
      position: relative;
    }

    .hc-cta-band__btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 30px rgba(232,119,34,0.4);
      color: #fff;
    }

    @media (max-width: 768px) {
      .hc-cta-band { padding: 3rem 1.2rem; }
    }

    /* ─── ABSTRACT BLOBS & SHAPES ────────────────────────── */
    .abstract-blob {
      position: absolute;
      border-radius: 50%;
      filter: blur(60px);
      opacity: 0.5;
      pointer-events: none;
      z-index: 0;
    }

    .abstract-ring {
      position: absolute;
      border: 2px solid rgba(27,58,143,0.08);
      border-radius: 50%;
      pointer-events: none;
      z-index: 0;
      animation: spinSlow 30s linear infinite;
    }

    @keyframes spinSlow {
      to { transform: rotate(360deg); }
    }

    @keyframes float {
      0%,100% { transform: translateY(0) rotate(0deg); }
      33% { transform: translateY(-15px) rotate(2deg); }
      66% { transform: translateY(8px) rotate(-1deg); }
    }

    @keyframes drift {
      0%,100% { transform: translate(0,0); }
      25% { transform: translate(20px,-10px); }
      50% { transform: translate(-10px,-20px); }
      75% { transform: translate(-20px,10px); }
    }

    @keyframes morphBlob {
      0%,100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
      25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
      50% { border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%; }
      75% { border-radius: 60% 30% 60% 40% / 70% 40% 50% 60%; }
    }

    /* Hero abstract shapes */
    .hc-hero__abstract-1 {
      position: absolute;
      top: 10%; left: 5%;
      width: 200px; height: 200px;
      border: 1.5px solid rgba(255,255,255,0.1);
      border-radius: 50%;
      z-index: 1;
      animation: spinSlow 25s linear infinite;
    }

    .hc-hero__abstract-2 {
      position: absolute;
      bottom: 15%; right: 8%;
      width: 120px; height: 120px;
      background: rgba(232,119,34,0.15);
      z-index: 1;
      animation: morphBlob 12s ease-in-out infinite, float 8s ease-in-out infinite;
    }

    .hc-hero__abstract-3 {
      position: absolute;
      top: 20%; right: 15%;
      width: 80px; height: 80px;
      border: 1.5px dashed rgba(255,255,255,0.15);
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
      z-index: 1;
      animation: spinSlow 20s linear infinite reverse, float 6s ease-in-out infinite;
    }

    .hc-hero__particles {
      position: absolute;
      inset: 0;
      z-index: 1;
      overflow: hidden;
      pointer-events: none;
    }

    .hc-hero__particle {
      position: absolute;
      width: 4px; height: 4px;
      background: rgba(255,255,255,0.4);
      border-radius: 50%;
      animation: particleRise linear infinite;
    }

    @keyframes particleRise {
      0% { transform: translateY(100vh) scale(0); opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { transform: translateY(-20px) scale(1); opacity: 0; }
    }

    /* Intro abstract */
    .hc-intro__blob {
      position: absolute;
      top: -60px; right: -80px;
      width: 300px; height: 300px;
      background: radial-gradient(circle, rgba(27,58,143,0.06) 0%, transparent 70%);
      border-radius: 50%;
      animation: drift 15s ease-in-out infinite;
      pointer-events: none;
    }

    .hc-intro__dots-pattern {
      position: absolute;
      bottom: -40px; left: -40px;
      width: 150px; height: 150px;
      background-image: radial-gradient(circle, rgba(232,119,34,0.2) 1.5px, transparent 1.5px);
      background-size: 16px 16px;
      opacity: 0.6;
      pointer-events: none;
      animation: float 10s ease-in-out infinite;
    }

    /* Deliver section abstract */
    .hc-deliver__abstract {
      position: absolute;
      top: 100px; left: -120px;
      width: 350px; height: 350px;
      border: 1.5px solid rgba(27,58,143,0.06);
      border-radius: 50%;
      pointer-events: none;
      animation: spinSlow 40s linear infinite;
    }

    .hc-deliver__abstract-2 {
      position: absolute;
      bottom: 50px; right: -80px;
      width: 200px; height: 200px;
      background: rgba(232,119,34,0.04);
      animation: morphBlob 15s ease-in-out infinite;
      pointer-events: none;
    }

    /* CTA band abstract */
    .hc-cta-band__ring {
      position: absolute;
      bottom: -80px; left: 10%;
      width: 250px; height: 250px;
      border: 2px solid rgba(255,255,255,0.08);
      border-radius: 50%;
      animation: spinSlow 20s linear infinite;
    }

    .hc-cta-band__dots {
      position: absolute;
      top: 20px; left: 50%;
      width: 100px; height: 100px;
      background-image: radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px);
      background-size: 12px 12px;
      pointer-events: none;
      animation: drift 12s ease-in-out infinite;
    }

    /* Outcomes section abstract */
    .hc-outcomes__ring {
      position: absolute;
      top: 60px; right: -60px;
      width: 180px; height: 180px;
      border: 1.5px dashed rgba(232,119,34,0.12);
      border-radius: 50%;
      animation: spinSlow 35s linear infinite reverse;
      pointer-events: none;
    }

    /* ─── REVEAL ANIMATION ───────────────────────────────── */
    [data-reveal] {
      opacity: 0;
      transform: translateY(40px);
      transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1);
    }

    [data-reveal].is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    [data-reveal-left] {
      opacity: 0;
      transform: translateX(-40px);
      transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1);
    }

    [data-reveal-left].is-visible {
      opacity: 1;
      transform: translateX(0);
    }

    [data-reveal-right] {
      opacity: 0;
      transform: translateX(40px);
      transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1);
    }

    [data-reveal-right].is-visible {
      opacity: 1;
      transform: translateX(0);
    }

    [data-reveal-scale] {
      opacity: 0;
      transform: scale(0.9);
      transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1);
    }

    [data-reveal-scale].is-visible {
      opacity: 1;
      transform: scale(1);
    }

    /* ─── COUNTER ANIMATION ───────────────────────────────── */
    .hc-counter {
      font-family: "DM Serif Display", serif;
      font-size: 2.2rem;
      color: var(--blue);
      font-weight: 400;
      line-height: 1;
    }

    .hc-stats-strip {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
      max-width: 1000px;
      margin: -3rem auto 0;
      padding: 2.5rem 3rem;
      background: #fff;
      border-radius: 20px;
      box-shadow: 0 16px 50px rgba(27,58,143,0.1);
      position: relative;
      z-index: 10;
    }

    .hc-stat {
      text-align: center;
    }

    .hc-stat__label {
      font-size: 0.78rem;
      color: var(--mid);
      font-weight: 500;
      margin-top: 0.4rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }

    @media (max-width: 768px) {
      .hc-stats-strip {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
        margin: -2rem 1rem 0;
        padding: 1.5rem;
      }
    }

    /* ─── FOOTER RESET ───────────────────────────────────── */
    .site-footer { margin-top: 0; }
    `,
  ],
})
export class Healthcare implements AfterViewInit, OnDestroy {
  private carouselTimer: any;
  private revealObserver: IntersectionObserver | null = null;
  private counterObserver: IntersectionObserver | null = null;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const host = this.el.nativeElement as HTMLElement;

    // Hero Carousel
    const slides = host.querySelectorAll<HTMLElement>('.hc-hero__slide');
    const dots = host.querySelectorAll<HTMLElement>('.hc-hero__dot');
    let current = 0;

    const goTo = (idx: number) => {
      slides[current]?.classList.remove('is-active');
      dots[current]?.classList.remove('is-active');
      current = idx;
      slides[current]?.classList.add('is-active');
      dots[current]?.classList.add('is-active');
    };

    const next = () => goTo((current + 1) % slides.length);

    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        clearInterval(this.carouselTimer);
        goTo(Number((dot as HTMLElement).dataset['slide']));
        this.carouselTimer = setInterval(next, 5000);
      });
    });

    this.carouselTimer = setInterval(next, 5000);

    // Floating Particles
    const container = host.querySelector('#hero-particles');
    if (container) {
      for (let i = 0; i < 20; i++) {
        const p = document.createElement('span');
        p.className = 'hc-hero__particle';
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

    // Counter Animation
    const counters = host.querySelectorAll<HTMLElement>('.hc-counter[data-target]');
    const statsStrip = host.querySelector('.hc-stats-strip');
    if (counters.length && statsStrip) {
      let observed = false;
      this.counterObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !observed) {
            observed = true;
            counters.forEach((el) => {
              const target = parseInt(el.dataset['target'] || '0');
              const duration = 1800;
              const start = performance.now();
              const tick = (now: number) => {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                const ease = 1 - Math.pow(1 - progress, 3);
                el.textContent = String(Math.round(target * ease));
                if (progress < 1) requestAnimationFrame(tick);
              };
              requestAnimationFrame(tick);
            });
          }
        });
      }, { threshold: 0.5 });
      this.counterObserver.observe(statsStrip);
    }

    // Card Mouse Glow Tracking
    const cards = host.querySelectorAll<HTMLElement>('.hc-card');
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', ((e.clientX - rect.left) / rect.width * 100) + '%');
        card.style.setProperty('--mouse-y', ((e.clientY - rect.top) / rect.height * 100) + '%');
      });
    });
  }

  ngOnDestroy(): void {
    if (this.carouselTimer) clearInterval(this.carouselTimer);
    if (this.revealObserver) this.revealObserver.disconnect();
    if (this.counterObserver) this.counterObserver.disconnect();
  }
}
