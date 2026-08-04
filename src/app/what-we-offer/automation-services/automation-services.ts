import { AfterViewInit, Component, ElementRef, OnDestroy, signal } from '@angular/core';

interface Deliverable {
  icon: string;
  title: string;
  intro: string;
  paragraphs: string[];
}

@Component({
  selector: 'app-automation-services',
  standalone: true,
  imports: [],
  template: `
    <article class="as">
      <!-- ─── VIDEO HERO ─────────────────────────────────── -->
      <section class="as-hero" id="as-hero" aria-label="Automation Services">
        <div class="as-hero__bg" aria-hidden="true">
          <video class="as-hero__video" autoplay muted loop playsinline preload="auto">
            <source src="VIdeos/telicom.mov" type="video/mp4" />
          </video>
          <div class="as-hero__overlay"></div>
          <div class="as-hero__grid"></div>
        </div>

        <div class="as-hero__inner">
          <span class="as-hero__eyebrow">
            <span class="as-hero__pulse"></span>
            <span>Automation Services</span>
          </span>
          <h1 class="as-hero__title">
            Intelligent automation for<br />
            <span class="as-hero__title-gradient">business transformation</span>
          </h1>
          <p class="as-hero__lede">
            From RPA and intelligent document processing to AI-driven workflow orchestration and managed automation operations — we help enterprises automate repetitive, rules-based, and complex business processes at scale, with governance, resilience, and measurable outcomes built in.
          </p>
        </div>
      </section>

      <!-- ─── INTRO ─────────────────────────────────────── -->
      <section class="as-intro">
        <div class="as-intro__inner" data-reveal>
          <span class="as-intro__eyebrow">Automation as a Service</span>
          <h2 class="as-intro__heading">Accelerate operations. <em>Transform the enterprise.</em></h2>
          <p class="as-intro__lead">
            Accelerate operational efficiency and business transformation with our comprehensive Automation as a Service (AaaS) offering. We help organisations automate repetitive, rules-based, and complex business processes without the cost and complexity of building, operating, and maintaining automation platforms in-house. By combining intelligent automation, robotic process automation (RPA), Artificial Intelligence, workflow orchestration, and managed services, we enable organisations to improve productivity, reduce operational costs, and scale automation across the enterprise.
          </p>
        </div>

        <div class="as-intro__highlights">
          <article class="as-highlight" data-reveal>
            <div class="as-highlight__icon"><i class="ph ph-arrows-clockwise"></i></div>
            <span class="as-highlight__eyebrow">Full Lifecycle</span>
            <h3 class="as-highlight__title">Discovery to continuous optimisation</h3>
            <p class="as-highlight__body">
              Our Automation as a Service offering spans the entire automation lifecycle — from process discovery and opportunity assessment to solution design, implementation, deployment, monitoring, and continuous optimisation — delivering scalable outcomes that integrate seamlessly with existing enterprise applications.
            </p>
          </article>

          <article class="as-highlight" data-reveal>
            <div class="as-highlight__icon"><i class="ph ph-brain"></i></div>
            <span class="as-highlight__eyebrow">Intelligent Ecosystems</span>
            <h3 class="as-highlight__title">AI, RPA &amp; workflow orchestration</h3>
            <p class="as-highlight__body">
              We go beyond task automation to build intelligent, end-to-end automation ecosystems. Leveraging AI, machine learning, document intelligence, workflow orchestration, API integration, and low-code platforms, we automate complex, cross-functional processes while maintaining visibility, governance, and operational control.
            </p>
          </article>

          <article class="as-highlight" data-reveal>
            <div class="as-highlight__icon"><i class="ph ph-shield-check"></i></div>
            <span class="as-highlight__eyebrow">Governance First</span>
            <h3 class="as-highlight__title">Secure, compliant &amp; auditable</h3>
            <p class="as-highlight__body">
              Enterprise-grade security, compliance, monitoring, performance management, and continuous improvement are woven in. Workflows are designed with auditability, exception handling, role-based access controls, and human-in-the-loop governance where required.
            </p>
          </article>
        </div>

        <div class="as-intro__callout" data-reveal>
          <div class="as-intro__callout-icon"><i class="ph ph-sparkle"></i></div>
          <div class="as-intro__callout-body">
            <span class="as-intro__callout-label">The Outcome</span>
            <p>
              A scalable, resilient, and continuously evolving automation capability that accelerates digital transformation, improves operational performance, enhances employee productivity, reduces operating costs, and enables organisations to innovate faster while focusing their workforce on higher-value strategic initiatives.
            </p>
          </div>
        </div>
      </section>


      <!-- ─── WHAT WE DELIVER (ACCORDION) ───────── -->
      <section class="as-deliver" id="as-deliver">
        <div class="as-deliver__bg-glow as-deliver__bg-glow--a"></div>
        <div class="as-deliver__bg-glow as-deliver__bg-glow--b"></div>

        <div class="as-deliver__header" data-reveal>
          <span class="as-deliver__eyebrow">Our Automation Portfolio</span>
          <h2 class="as-deliver__heading">What we <em>deliver</em></h2>
          <p class="as-deliver__sub">A comprehensive set of automation capabilities that transform business processes into intelligent, connected, and continuously improving workflows.</p>
        </div>

        <div class="as-deliver__list">
          @for (item of deliverables; track item.title; let i = $index) {
            <div class="as-deliver__item" [class.is-open]="openDeliverIndex() === i" data-reveal>
              <button class="as-deliver__toggle" (click)="toggleDeliver(i)" [attr.aria-expanded]="openDeliverIndex() === i">
                <span class="as-deliver__toggle-num">{{ (i + 1).toString().padStart(2, '0') }}</span>
                <span class="as-deliver__toggle-icon"><i class="ph {{ item.icon }}"></i></span>
                <span class="as-deliver__toggle-title">{{ item.title }}</span>
                <span class="as-deliver__toggle-chev"><i class="ph ph-caret-down"></i></span>
              </button>
              <div class="as-deliver__panel">
                <div class="as-deliver__panel-inner">
                  <p class="as-deliver__panel-lead">{{ item.intro }}</p>
                  @for (p of item.paragraphs; track $index) {
                    <p>{{ p }}</p>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      </section>

      <!-- ─── WHY / VALUE / GOVERNANCE ──────────── -->
      <section class="as-why">
        <article class="as-why__matter" data-reveal>
          <span class="as-why__eyebrow">Why It Matters</span>
          <h2 class="as-why__heading">Manual processes are the hidden <em>tax on transformation</em></h2>
          <p>As organisations pursue digital transformation, manual and repetitive processes continue to consume valuable time, increase operating costs, and introduce inconsistencies that limit productivity and business agility. Scaling automation internally often requires significant investments in technology, infrastructure, specialist skills, and ongoing maintenance — creating barriers that slow adoption and reduce return on investment.</p>
          <p>Our Automation as a Service (AaaS) offering removes these barriers by delivering enterprise-grade automation through a fully managed service model. Combining intelligent automation, AI, robotic process automation (RPA), workflow orchestration, and continuous optimisation, we help organisations automate business processes rapidly while maintaining complete visibility, governance, and control over business outcomes. This enables teams to focus on higher-value work while automation handles repetitive, time-consuming tasks with greater speed, accuracy, and consistency.</p>
        </article>

        <div class="as-why__grid">
          <article class="as-why__card as-why__card--value" data-reveal>
            <div class="as-why__card-icon"><i class="ph ph-target"></i></div>
            <span class="as-why__card-eyebrow">Business Value</span>
            <h3 class="as-why__card-title">Measurable outcomes, delivered</h3>
            <ul class="as-why__list">
              <li><i class="ph ph-check-circle"></i><span>Accelerate business processes through intelligent workflow automation.</span></li>
              <li><i class="ph ph-check-circle"></i><span>Reduce operational costs by eliminating repetitive manual activities.</span></li>
              <li><i class="ph ph-check-circle"></i><span>Improve process accuracy, consistency, and compliance across the enterprise.</span></li>
              <li><i class="ph ph-check-circle"></i><span>Increase workforce productivity by enabling employees to focus on higher-value initiatives.</span></li>
              <li><i class="ph ph-check-circle"></i><span>Scale automation rapidly without investing in dedicated infrastructure or specialist resources.</span></li>
              <li><i class="ph ph-check-circle"></i><span>Improve operational visibility through real-time monitoring, analytics, and performance reporting.</span></li>
              <li><i class="ph ph-check-circle"></i><span>Enhance business agility with automation that evolves alongside changing business requirements.</span></li>
            </ul>
          </article>

          <article class="as-why__card as-why__card--gov" data-reveal>
            <div class="as-why__card-icon"><i class="ph ph-scales"></i></div>
            <span class="as-why__card-eyebrow">Governance &amp; Control</span>
            <h3 class="as-why__card-title">Governed by design</h3>
            <p>Our Automation as a Service offering is delivered through a governance-first operating model that embeds security, compliance, transparency, and operational oversight into every automated workflow. We implement role-based access controls, comprehensive audit trails, exception management, human-in-the-loop approvals, policy enforcement, and continuous performance monitoring to ensure automation operates safely, reliably, and in alignment with business and regulatory requirements.</p>
            <p>Ongoing optimisation and governance reviews ensure automation continues to deliver measurable value while adapting to evolving organisational needs.</p>
          </article>
        </div>

        <div class="as-why__tagline" data-reveal>
          <div class="as-why__tagline-glow"></div>
          <p>
            Transform repetitive business processes into <em>intelligent, scalable, and resilient automation</em> that improves efficiency, reduces costs, and accelerates digital transformation — through a managed service built for long-term business value.
          </p>
        </div>
      </section>

    </article>
  `,
  styles: [
    `
      :host {
        display: block;
        --orange: #e87722;
        --orange-dark: #c96418;
        --navy: #1b3a8f;
        --navy-dark: #101a3a;
        --ink: #101a3a;
        --mist: #4a5680;
        --panel: #f6f7fb;
        --panel-2: #eef1fa;
        --teal-light: #7bd3d1;
      }

      .as {
        font-family: 'DM Sans', system-ui, sans-serif;
        color: var(--ink);
        overflow: hidden;
      }

      /* ─── VIDEO HERO ─────────────────────────────────── */
      .as-hero {
        position: relative;
        min-height: calc(100vh - 88px);
        min-height: calc(100dvh - 88px);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        color: #fff;
        isolation: isolate;
      }
      .as-hero__bg { position: absolute; inset: 0; z-index: -1; }
      .as-hero__video {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(0.7) saturate(1.05);
      }
      .as-hero__overlay {
        position: absolute;
        inset: 0;
        background:
          radial-gradient(ellipse at 25% 25%, rgba(27, 58, 143, 0.45), transparent 55%),
          radial-gradient(ellipse at 80% 75%, rgba(232, 119, 34, 0.28), transparent 55%),
          linear-gradient(180deg, rgba(16, 21, 42, 0.35), rgba(16, 21, 42, 0.85));
      }
      .as-hero__grid {
        position: absolute;
        inset: 0;
        background-image:
          linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
        background-size: 60px 60px;
        mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
        opacity: 0.6;
      }
      .as-hero__inner {
        position: relative;
        max-width: 920px;
        padding: 4rem 1.5rem;
        text-align: center;
        animation: asHeroRise 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) both;
      }
      .as-hero__eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 0.55rem;
        padding: 0.4rem 0.9rem;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: #fff;
        font-size: 0.78rem;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        backdrop-filter: blur(8px);
        margin-bottom: 1.4rem;
      }
      .as-hero__pulse {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--orange);
        box-shadow: 0 0 0 0 rgba(232, 119, 34, 0.65);
        animation: asHeroPulse 1.8s ease-out infinite;
      }
      .as-hero__title {
        font-family: 'DM Serif Display', serif;
        font-size: clamp(2.4rem, 5.5vw, 4.6rem);
        line-height: 1.08;
        letter-spacing: -0.01em;
        margin: 0 0 1.25rem;
        color: #fff;
        text-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
      }
      .as-hero__title-gradient {
        background: linear-gradient(120deg, var(--orange), #ffb98f 40%, #fff);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        font-style: italic;
      }
      .as-hero__lede {
        font-size: clamp(1rem, 1.4vw, 1.15rem);
        line-height: 1.7;
        color: rgba(255, 255, 255, 0.85);
        max-width: 720px;
        margin: 0 auto;
      }

      @keyframes asHeroRise {
        from { opacity: 0; transform: translateY(24px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes asHeroPulse {
        0% { box-shadow: 0 0 0 0 rgba(232, 119, 34, 0.7); }
        70% { box-shadow: 0 0 0 12px rgba(232, 119, 34, 0); }
        100% { box-shadow: 0 0 0 0 rgba(232, 119, 34, 0); }
      }

      @media (max-width: 768px) {
        .as-hero__inner { padding: 3rem 1.25rem; }
      }

      /* ─── INTRO ─────────────────────────────────────── */
      .as-intro {
        padding: 6rem 1.5rem 5rem;
        background: linear-gradient(180deg, #fff 0%, var(--panel) 100%);
        position: relative;
        overflow: hidden;
      }
      .as-intro::before {
        content: '';
        position: absolute;
        top: -180px;
        right: -180px;
        width: 420px; height: 420px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(232,119,34,0.08), transparent 70%);
        pointer-events: none;
      }
      .as-intro::after {
        content: '';
        position: absolute;
        bottom: -160px;
        left: -160px;
        width: 380px; height: 380px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(27,58,143,0.08), transparent 70%);
        pointer-events: none;
      }
      .as-intro__inner {
        max-width: 900px;
        margin: 0 auto 3.5rem;
        text-align: center;
        position: relative;
      }
      .as-intro__eyebrow {
        display: inline-block;
        color: var(--orange);
        font-size: 0.78rem;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        font-weight: 700;
        margin-bottom: 1rem;
        padding: 0.35rem 0.9rem;
        background: rgba(232,119,34,0.1);
        border-radius: 999px;
      }
      .as-intro__heading {
        font-family: 'DM Serif Display', serif;
        font-size: clamp(1.9rem, 3.6vw, 2.75rem);
        line-height: 1.2;
        margin: 0 0 1.5rem;
        color: var(--ink);
      }
      .as-intro__heading em {
        font-style: italic;
        color: var(--navy);
      }
      .as-intro__lead {
        font-size: 1.05rem;
        line-height: 1.8;
        color: var(--mist);
        margin: 0;
      }

      /* Highlights grid */
      .as-intro__highlights {
        max-width: 1200px;
        margin: 0 auto 3rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.75rem;
        position: relative;
      }

      .as-highlight {
        position: relative;
        background: #fff;
        border-radius: 20px;
        padding: 2rem 1.75rem;
        border: 1px solid #e6e8f2;
        box-shadow: 0 6px 20px -10px rgba(27,58,143,0.15);
        transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
        overflow: hidden;
      }
      .as-highlight:hover {
        transform: translateY(-6px);
        box-shadow: 0 22px 44px -20px rgba(27,58,143,0.25);
        border-color: transparent;
      }
      .as-highlight__icon {
        width: 52px;
        height: 52px;
        border-radius: 14px;
        background: linear-gradient(135deg, rgba(232,119,34,0.12), rgba(27,58,143,0.08));
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.25rem;
        transition: background 0.35s ease, transform 0.35s ease;
      }
      .as-highlight__icon i.ph {
        font-size: 1.6rem;
        color: var(--orange);
        line-height: 1;
        transition: color 0.35s ease;
      }
      .as-highlight:hover .as-highlight__icon {
        background: linear-gradient(135deg, var(--orange), var(--orange-dark));
        transform: rotate(-4deg) scale(1.08);
      }
      .as-highlight:hover .as-highlight__icon i.ph { color: #fff; }
      .as-highlight__eyebrow {
        display: block;
        color: var(--orange);
        font-size: 0.72rem;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        font-weight: 700;
        margin-bottom: 0.5rem;
      }
      .as-highlight__title {
        font-family: 'DM Serif Display', serif;
        font-size: 1.3rem;
        line-height: 1.3;
        color: var(--ink);
        margin: 0 0 0.85rem;
      }
      .as-highlight__body {
        color: var(--mist);
        line-height: 1.75;
        font-size: 0.96rem;
        margin: 0;
      }

      /* Outcome callout */
      .as-intro__callout {
        position: relative;
        max-width: 1100px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        gap: 1.5rem;
        padding: 1.75rem 2rem;
        background: linear-gradient(135deg, rgba(232,119,34,0.06) 0%, rgba(27,58,143,0.05) 100%);
        border: 1px solid rgba(27,58,143,0.12);
        border-radius: 20px;
        backdrop-filter: blur(4px);
      }
      .as-intro__callout::before {
        content: '';
        position: absolute;
        left: 0; top: 20%;
        width: 4px; height: 60%;
        background: linear-gradient(180deg, var(--orange), var(--navy));
        border-radius: 2px 0 0 2px;
      }
      .as-intro__callout-icon {
        width: 56px;
        height: 56px;
        border-radius: 16px;
        background: linear-gradient(135deg, var(--orange), var(--orange-dark));
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 12px 26px -12px rgba(232,119,34,0.55);
        flex-shrink: 0;
      }
      .as-intro__callout-icon i.ph {
        font-size: 1.7rem;
        color: #fff;
        line-height: 1;
      }
      .as-intro__callout-body { min-width: 0; }
      .as-intro__callout-label {
        display: block;
        color: var(--orange);
        font-size: 0.72rem;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        font-weight: 700;
        margin-bottom: 0.35rem;
      }
      .as-intro__callout p {
        color: var(--ink);
        line-height: 1.7;
        font-size: 1rem;
        margin: 0;
      }
      @media (max-width: 640px) {
        .as-intro__callout {
          grid-template-columns: 1fr;
          text-align: center;
          padding: 1.75rem 1.25rem;
        }
        .as-intro__callout-icon { margin: 0 auto; }
      }

      /* ─── WHAT WE DELIVER (ACCORDION) ─────────── */
      .as-deliver {
        position: relative;
        padding: 6rem 1.5rem 6rem;
        background: linear-gradient(180deg, var(--navy-dark) 0%, var(--navy) 100%);
        overflow: hidden;
      }
      .as-deliver__bg-glow {
        position: absolute;
        border-radius: 50%;
        filter: blur(90px);
        pointer-events: none;
      }
      .as-deliver__bg-glow--a {
        width: 480px; height: 480px;
        background: radial-gradient(circle, rgba(232,119,34,0.35), transparent 70%);
        top: -120px; left: -140px;
      }
      .as-deliver__bg-glow--b {
        width: 520px; height: 520px;
        background: radial-gradient(circle, rgba(123,211,209,0.22), transparent 70%);
        bottom: -160px; right: -140px;
      }
      .as-deliver__header {
        position: relative;
        max-width: 820px;
        margin: 0 auto 3.5rem;
        text-align: center;
      }
      .as-deliver__eyebrow {
        display: inline-block;
        color: var(--orange);
        font-size: 0.78rem;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        font-weight: 700;
        margin-bottom: 1rem;
        padding: 0.35rem 0.9rem;
        background: rgba(232,119,34,0.14);
        border: 1px solid rgba(232,119,34,0.3);
        border-radius: 999px;
      }
      .as-deliver__heading {
        font-family: 'DM Serif Display', serif;
        font-size: clamp(2rem, 3.8vw, 2.85rem);
        line-height: 1.2;
        color: #fff;
        margin: 0 0 1rem;
      }
      .as-deliver__heading em {
        font-style: italic;
        color: var(--orange);
      }
      .as-deliver__sub {
        color: rgba(255,255,255,0.72);
        line-height: 1.7;
        margin: 0;
      }

      .as-deliver__list {
        position: relative;
        max-width: 1000px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .as-deliver__item {
        background: rgba(255,255,255,0.04);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 16px;
        backdrop-filter: blur(6px);
        overflow: hidden;
        transition: background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
      }
      .as-deliver__item.is-open {
        background: rgba(255,255,255,0.07);
        border-color: rgba(232,119,34,0.45);
        box-shadow: 0 22px 44px -22px rgba(232,119,34,0.35);
      }

      .as-deliver__toggle {
        width: 100%;
        display: grid;
        grid-template-columns: auto auto 1fr auto;
        align-items: center;
        gap: 1.25rem;
        padding: 1.25rem 1.5rem;
        background: transparent;
        border: none;
        color: #fff;
        text-align: left;
        cursor: pointer;
        font-family: inherit;
      }
      .as-deliver__toggle-num {
        font-family: 'DM Serif Display', serif;
        font-size: 1.3rem;
        color: rgba(255,255,255,0.35);
        letter-spacing: -0.02em;
        transition: color 0.35s ease;
        min-width: 2.2rem;
      }
      .as-deliver__item.is-open .as-deliver__toggle-num { color: var(--orange); }

      .as-deliver__toggle-icon {
        width: 44px;
        height: 44px;
        border-radius: 12px;
        background: linear-gradient(135deg, rgba(232,119,34,0.18), rgba(255,255,255,0.05));
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: background 0.35s ease, transform 0.35s ease;
      }
      .as-deliver__toggle-icon i.ph {
        font-size: 1.35rem;
        color: var(--orange);
        line-height: 1;
        transition: color 0.35s ease;
      }
      .as-deliver__item.is-open .as-deliver__toggle-icon {
        background: linear-gradient(135deg, var(--orange), var(--orange-dark));
        transform: rotate(-4deg) scale(1.05);
      }
      .as-deliver__item.is-open .as-deliver__toggle-icon i.ph { color: #fff; }

      .as-deliver__toggle-title {
        font-family: 'DM Sans', system-ui, sans-serif;
        font-size: 1.05rem;
        font-weight: 600;
        color: #fff;
        line-height: 1.3;
      }

      .as-deliver__toggle-chev {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: rgba(255,255,255,0.08);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: background 0.35s ease, transform 0.35s ease;
      }
      .as-deliver__toggle-chev i.ph {
        font-size: 1rem;
        color: #fff;
        line-height: 1;
        transition: transform 0.35s ease, color 0.35s ease;
      }
      .as-deliver__item.is-open .as-deliver__toggle-chev {
        background: var(--orange);
      }
      .as-deliver__item.is-open .as-deliver__toggle-chev i.ph {
        transform: rotate(180deg);
      }

      .as-deliver__panel {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.55s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .as-deliver__item.is-open .as-deliver__panel {
        max-height: 2400px;
      }
      .as-deliver__panel-inner {
        padding: 0 1.5rem 1.75rem 5.2rem;
        color: rgba(255,255,255,0.78);
        line-height: 1.75;
      }
      .as-deliver__panel-inner p {
        margin: 0 0 0.9rem;
        font-size: 0.96rem;
      }
      .as-deliver__panel-inner p:last-child { margin-bottom: 0; }
      .as-deliver__panel-lead {
        color: #fff !important;
        font-size: 1rem !important;
        font-weight: 500;
      }

      @media (max-width: 720px) {
        .as-deliver__toggle {
          grid-template-columns: auto auto 1fr auto;
          gap: 0.75rem;
          padding: 1.1rem 1rem;
        }
        .as-deliver__toggle-num { display: none; }
        .as-deliver__toggle-title { font-size: 0.95rem; }
        .as-deliver__panel-inner { padding: 0 1rem 1.5rem 3.75rem; }
      }

      /* ─── WHY / VALUE / GOVERNANCE ────────── */
      .as-why {
        position: relative;
        padding: 6rem 1.5rem 5rem;
        background: #fff;
        max-width: 1200px;
        margin: 0 auto;
      }
      .as-why__matter {
        position: relative;
        max-width: 900px;
        margin: 0 auto 3.5rem;
        text-align: center;
      }
      .as-why__eyebrow {
        display: inline-block;
        color: var(--orange);
        font-size: 0.78rem;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        font-weight: 700;
        margin-bottom: 0.8rem;
        padding: 0.35rem 0.9rem;
        background: rgba(232,119,34,0.1);
        border-radius: 999px;
      }
      .as-why__heading {
        font-family: 'DM Serif Display', serif;
        font-size: clamp(1.9rem, 3.4vw, 2.5rem);
        line-height: 1.2;
        margin: 0 0 1.5rem;
        color: var(--ink);
      }
      .as-why__heading em {
        font-style: italic;
        color: var(--navy);
      }
      .as-why__matter p {
        color: var(--mist);
        line-height: 1.8;
        margin: 0 0 1rem;
        font-size: 1rem;
      }
      .as-why__matter p:last-child { margin-bottom: 0; }

      .as-why__grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 1.75rem;
        margin-bottom: 3rem;
      }

      .as-why__card {
        position: relative;
        background: #fff;
        border-radius: 20px;
        padding: 2.25rem 2rem;
        border: 1px solid #e6e8f2;
        box-shadow: 0 10px 30px -18px rgba(27,58,143,0.2);
        overflow: hidden;
        transition: transform 0.35s ease, box-shadow 0.35s ease;
      }
      .as-why__card::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 4px;
        background: linear-gradient(90deg, var(--orange), var(--navy));
      }
      .as-why__card:hover {
        transform: translateY(-4px);
        box-shadow: 0 26px 50px -22px rgba(27,58,143,0.28);
      }
      .as-why__card--value {
        background: linear-gradient(180deg, #fff 0%, #fdf6f0 100%);
      }
      .as-why__card--gov {
        background: linear-gradient(180deg, #fff 0%, #f0f3fb 100%);
      }
      .as-why__card-icon {
        width: 52px;
        height: 52px;
        border-radius: 14px;
        background: linear-gradient(135deg, rgba(232,119,34,0.12), rgba(27,58,143,0.08));
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.25rem;
      }
      .as-why__card-icon i.ph {
        font-size: 1.6rem;
        color: var(--orange);
        line-height: 1;
      }
      .as-why__card-eyebrow {
        display: block;
        color: var(--orange);
        font-size: 0.72rem;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        font-weight: 700;
        margin-bottom: 0.5rem;
      }
      .as-why__card-title {
        font-family: 'DM Serif Display', serif;
        font-size: 1.35rem;
        line-height: 1.3;
        color: var(--ink);
        margin: 0 0 1.1rem;
      }
      .as-why__card p {
        color: var(--mist);
        line-height: 1.75;
        font-size: 0.96rem;
        margin: 0 0 0.9rem;
      }
      .as-why__card p:last-child { margin-bottom: 0; }

      .as-why__list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.7rem;
      }
      .as-why__list li {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: start;
        gap: 0.7rem;
        color: var(--ink);
        font-size: 0.95rem;
        line-height: 1.55;
      }
      .as-why__list li i.ph {
        color: var(--orange);
        font-size: 1.15rem;
        line-height: 1.4;
        flex-shrink: 0;
      }

      .as-why__tagline {
        position: relative;
        max-width: 1000px;
        margin: 0 auto;
        padding: 2.5rem 2.5rem;
        border-radius: 24px;
        background: linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%);
        text-align: center;
        overflow: hidden;
      }
      .as-why__tagline-glow {
        position: absolute;
        top: 50%; left: 50%;
        width: 460px; height: 460px;
        transform: translate(-50%, -50%);
        background: radial-gradient(circle, rgba(232,119,34,0.28), transparent 70%);
        filter: blur(60px);
        pointer-events: none;
      }
      .as-why__tagline p {
        position: relative;
        font-family: 'DM Serif Display', serif;
        color: #fff;
        font-size: clamp(1.15rem, 2.1vw, 1.5rem);
        line-height: 1.5;
        margin: 0;
      }
      .as-why__tagline em {
        font-style: italic;
        color: var(--orange);
      }

      @media (max-width: 640px) {
        .as-why__tagline { padding: 2rem 1.5rem; }
      }

      /* ─── REVEAL ──────────────────────────────────── */
      [data-reveal] {
        opacity: 0;
        transform: translateY(24px);
        transition: opacity 0.7s ease, transform 0.7s ease;
      }
      [data-reveal].is-visible {
        opacity: 1;
        transform: translateY(0);
      }
    `,
  ],
})
export class AutomationServices implements AfterViewInit, OnDestroy {
  protected openDeliverIndex = signal<number | null>(0);

  protected toggleDeliver(i: number): void {
    this.openDeliverIndex.update((current) => (current === i ? null : i));
  }

  protected deliverables: Deliverable[] = [
    {
      icon: 'ph-magnifying-glass',
      title: 'Process assessment and automation roadmap',
      intro: 'Lay the foundation for successful enterprise automation with comprehensive Process Assessment and Automation Roadmap services. We help organisations identify, evaluate, and prioritise automation opportunities by analysing existing business processes, operational challenges, and technology landscapes to develop a clear, strategic roadmap for scalable automation.',
      paragraphs: [
        'Our approach begins with a detailed assessment of your current workflows, examining process flows, manual activities, decision points, system interactions, exceptions, dependencies, and performance metrics. Working closely with business and operational stakeholders, we identify repetitive, rules-based, and high-impact processes where automation can deliver measurable improvements in efficiency, accuracy, cost reduction, and customer experience.',
        'Using a structured evaluation framework, we assess each automation opportunity based on business value, implementation complexity, technical feasibility, process stability, operational risk, and expected return on investment. This enables us to prioritise initiatives that deliver rapid business benefits while establishing a scalable foundation for broader enterprise automation.',
        'Beyond opportunity identification, we develop a comprehensive automation roadmap that aligns with your strategic objectives, digital transformation initiatives, and operational priorities. The roadmap defines implementation phases, technology recommendations, governance models, resource requirements, success metrics, and change management considerations, providing a practical and actionable plan for expanding automation capabilities over time.',
        'Built on governance-first principles, our methodology incorporates process governance, stakeholder alignment, risk assessment, compliance considerations, architecture planning, and performance measurement to ensure every automation initiative is aligned with organisational objectives and delivers sustainable business value.',
        'The result is a well-defined, enterprise-wide automation strategy that enables organisations to prioritise the right opportunities, accelerate implementation, maximise return on investment, and build a scalable automation capability that supports long-term operational excellence and digital transformation.',
      ],
    },
    {
      icon: 'ph-flow-arrow',
      title: 'Workflow automation and orchestration',
      intro: 'Transform fragmented business processes into intelligent, connected workflows with comprehensive Workflow Automation and Orchestration services. We help organisations streamline end-to-end business operations by automating tasks, coordinating decisions, and orchestrating activities across people, applications, and systems.',
      paragraphs: [
        'Our workflow automation services are designed to eliminate repetitive manual activities, reduce processing delays, and standardise the execution of business processes. We analyse existing workflows, identify automation opportunities, and design intelligent process flows that route tasks, approvals, notifications, and business information efficiently between teams and systems, ensuring work progresses without unnecessary intervention or bottlenecks.',
        'Beyond task automation, our orchestration capabilities create a unified execution layer that coordinates multiple systems, business rules, and process dependencies into a single, integrated workflow. Whether managing cross-functional operations, multi-stage approvals, customer onboarding, financial processing, supply chain activities, or service delivery, our solutions ensure that every process step is executed in the correct sequence while adapting dynamically to changing business conditions and exceptions.',
        'Leveraging workflow engines, API integrations, AI-driven decision support, robotic process automation (RPA), and event-driven architectures, we enable organisations to automate complex, enterprise-wide workflows while maintaining complete visibility and operational control. Intelligent routing, real-time monitoring, exception handling, automated escalations, and business rule management help improve process performance, reduce manual coordination, and accelerate business outcomes.',
        'Built on governance-first principles, our workflow automation solutions incorporate role-based access controls, approval workflows, audit trails, policy enforcement, exception management, and performance monitoring to ensure every automated process remains secure, transparent, compliant, and aligned with organisational governance standards.',
        'The result is an intelligent, scalable, and highly coordinated workflow environment that improves operational efficiency, reduces process cycle times, enhances collaboration across teams, and enables organisations to execute business processes with greater speed, consistency, and agility.',
      ],
    },
    {
      icon: 'ph-file-text',
      title: 'Document and data processing automation',
      intro: 'Accelerate business operations with intelligent Document and Data Processing Automation services that transform manual, document-intensive workflows into fast, accurate, and scalable digital processes.',
      paragraphs: [
        'Our solutions automate high-volume document processing across a wide range of business functions, including invoices, purchase orders, contracts, customer forms, applications, claims, emails, medical records, financial documents, and other business-critical records. Using intelligent document processing (IDP), optical character recognition (OCR), natural language processing (NLP), and AI-powered data extraction, we convert information into structured, actionable data that can seamlessly flow into downstream systems and business workflows.',
        'Beyond data extraction, we implement intelligent validation, business rule enforcement, exception handling, and workflow orchestration to ensure information is verified, enriched, and processed accurately before entering enterprise applications. Automated routing, classification, approvals, and system integrations eliminate repetitive manual handling while improving consistency, reducing errors, and accelerating processing times across the organisation.',
        'Built on governance-first principles, our Document and Data Processing Automation services incorporate comprehensive security controls, role-based access, audit trails, data validation, quality assurance, and compliance monitoring to ensure sensitive information is processed securely and in accordance with organisational policies and regulatory requirements. Continuous performance monitoring and operational analytics provide complete visibility into document processing volumes, accuracy, turnaround times, and automation effectiveness, enabling ongoing optimisation and continuous improvement.',
        'The result is a highly efficient, intelligent, and scalable document processing environment that reduces manual workload, accelerates business operations, improves data accuracy, enhances compliance, and enables organisations to redirect valuable resources toward higher-value, strategic activities.',
      ],
    },
    {
      icon: 'ph-lightning',
      title: 'Event-driven and rule-based automation',
      intro: 'Enable intelligent, responsive business operations with comprehensive Event-Driven and Rule-Based Automation services. We help organisations automate business processes that respond dynamically to real-time events, predefined business rules, and operational conditions.',
      paragraphs: [
        'Our solutions are designed to monitor business events, system activities, user interactions, and data changes across enterprise applications, automatically triggering the appropriate workflows, notifications, approvals, or downstream actions when defined conditions are met. Whether responding to customer requests, operational incidents, financial transactions, inventory changes, compliance events, or service requests, our automation capabilities ensure that business processes react immediately and consistently without requiring manual intervention.',
        'Using configurable business rules, decision engines, event-processing frameworks, and workflow orchestration technologies, we build intelligent automation solutions that can initiate, pause, route, escalate, or complete processes based on business logic and operational priorities. These capabilities enable organisations to standardise decision-making, reduce processing delays, minimise manual errors, and ensure every workflow follows approved policies and governance requirements.',
        'Our event-driven architecture integrates seamlessly with enterprise applications, cloud platforms, APIs, messaging systems, and operational data sources, creating a connected automation ecosystem that supports real-time responsiveness across business functions. Built-in exception handling, intelligent routing, automated notifications, and escalation mechanisms ensure that complex processes continue to operate efficiently even as business conditions evolve.',
        'Built on governance-first principles, our Event-Driven and Rule-Based Automation services incorporate policy enforcement, role-based access controls, audit trails, business rule versioning, compliance monitoring, and continuous performance analytics. These capabilities provide complete transparency into automated decisions while ensuring workflows remain secure, reliable, compliant, and fully aligned with organisational governance standards.',
        'The result is an intelligent, scalable, and highly responsive automation environment that enables organisations to react faster to business events, standardise operational processes, improve compliance, reduce manual effort, and deliver consistent outcomes across the enterprise.',
      ],
    },
    {
      icon: 'ph-brain',
      title: 'AI-assisted routing and exception handling',
      intro: 'Enhance operational efficiency with intelligent AI-Assisted Routing and Exception Handling services that enable business processes to adapt dynamically to changing conditions while maintaining speed, accuracy, and governance.',
      paragraphs: [
        'Our AI-powered routing capabilities analyse the context, content, priority, business rules, historical patterns, and operational data associated with each request to determine the most appropriate path for execution. Whether processing customer enquiries, service requests, financial transactions, support tickets, healthcare cases, or operational workflows, our solutions ensure work is directed to the right resource, system, or business process at the right time, improving responsiveness while reducing manual intervention.',
        'Beyond intelligent routing, our exception handling capabilities identify situations that fall outside predefined workflows, detect anomalies, incomplete information, policy conflicts, or unusual operating conditions, and determine the most appropriate course of action. AI provides contextual recommendations, prioritises exceptions based on business impact, and automatically routes complex cases to designated specialists or approval workflows, ensuring exceptions are resolved efficiently without disrupting the overall process.',
        'By combining AI-driven classification, predictive analytics, workflow orchestration, business rules, and real-time decision support, we enable organisations to minimise bottlenecks, reduce processing delays, improve operational consistency, and optimise resource utilisation across enterprise workflows. Intelligent learning capabilities also help refine routing decisions over time, continuously improving accuracy and operational performance as business conditions evolve.',
        'Built on governance-first principles, our AI-Assisted Routing and Exception Handling services incorporate explainable AI, role-based access controls, human-in-the-loop approvals, audit trails, policy enforcement, exception logging, and continuous performance monitoring. These safeguards ensure that automated decisions remain transparent, compliant, and aligned with organisational governance standards while preserving human oversight for high-impact or sensitive cases.',
        'The result is an intelligent, adaptive, and resilient workflow environment that accelerates process execution, improves decision quality, reduces operational bottlenecks, enhances customer and employee experiences, and enables organisations to manage both routine operations and complex exceptions with greater speed, confidence, and control.',
      ],
    },
    {
      icon: 'ph-chart-line-up',
      title: 'Platform monitoring and optimisation',
      intro: 'Ensure your automation ecosystem continues to deliver maximum business value with comprehensive Platform Monitoring and Optimisation services. We provide continuous oversight, performance management, and ongoing optimisation to ensure automation platforms, workflows, and digital workers operate reliably, efficiently, and at scale as business demands evolve.',
      paragraphs: [
        'Our services continuously monitor the health, performance, and availability of automation environments across workflows, bots, integrations, orchestration platforms, and supporting infrastructure. By tracking key operational metrics — including throughput, execution times, success rates, exception volumes, resource utilisation, system availability, and process bottlenecks — we provide complete visibility into automation performance and rapidly identify issues before they impact business operations.',
        'Beyond operational monitoring, we continuously optimise automation performance through process analysis, workload balancing, workflow refinement, infrastructure tuning, and automation enhancements. As transaction volumes increase, business rules evolve, applications change, or new operational requirements emerge, we proactively adapt automation workflows to maintain performance, improve resilience, and maximise business outcomes.',
        'Leveraging advanced analytics, AI-driven operational insights, predictive monitoring, and intelligent alerting, we identify emerging trends, detect performance anomalies, and recommend optimisation opportunities that improve reliability, scalability, and return on automation investments. Regular health assessments and performance reviews ensure automation initiatives continue to align with evolving business objectives and operational priorities.',
        'Built on governance-first principles, our Platform Monitoring and Optimisation services incorporate comprehensive operational dashboards, audit trails, security monitoring, compliance oversight, change management, capacity planning, service-level reporting, and continuous improvement practices. These capabilities provide complete transparency into automation performance while ensuring enterprise automation remains secure, governed, and fully aligned with organisational policies and regulatory requirements.',
        'The result is a resilient, high-performing, and continuously evolving automation environment that delivers consistent operational excellence, maximises automation value, reduces operational risk, and enables organisations to scale automation with confidence as business needs continue to grow.',
      ],
    },
    {
      icon: 'ph-scales',
      title: 'Governance, controls, and audit support',
      intro: 'Ensure enterprise automation operates with transparency, accountability, and confidence through comprehensive Governance, Controls, and Audit Support services.',
      paragraphs: [
        'Our governance framework defines clear ownership, operating standards, approval workflows, and accountability across the automation lifecycle. We implement structured policies for automation development, deployment, change management, and operational oversight, ensuring that every automated process is designed, executed, and maintained according to established governance principles and organisational standards.',
        'To safeguard critical business processes, we incorporate robust control mechanisms including role-based and attribute-based access controls, segregation of duties, approval workflows, policy enforcement, exception management, and human-in-the-loop controls for high-impact or sensitive activities. These safeguards ensure that automation executes within clearly defined boundaries while maintaining the flexibility required to support evolving business needs.',
        'Our comprehensive audit capabilities provide complete visibility into automated operations through detailed activity logs, execution histories, decision records, workflow traceability, and system-generated audit trails. Continuous monitoring, compliance reporting, and operational analytics enable organisations to review automated actions, investigate exceptions, demonstrate regulatory compliance, and support internal and external audit requirements with confidence.',
        'Built on governance-first principles, our Governance, Controls, and Audit Support services integrate seamlessly with enterprise security, risk management, compliance, and operational governance frameworks. Through continuous policy enforcement, performance monitoring, control validation, and periodic governance reviews, we help organisations ensure that automation remains secure, compliant, transparent, and aligned with changing regulatory and business requirements.',
        'The result is a trusted, well-governed automation environment that balances operational efficiency with strong oversight, reduces organisational risk, strengthens compliance, and enables organisations to scale automation confidently while maintaining complete accountability and control.',
      ],
    },
    {
      icon: 'ph-gear',
      title: 'Ongoing enhancement and managed operations',
      intro: 'Maximise the long-term value of your automation investments through comprehensive Ongoing Enhancement and Managed Operations services. We provide continuous operational support, proactive optimisation, and strategic enhancement to ensure your automation ecosystem remains reliable, scalable, and aligned with evolving business priorities.',
      paragraphs: [
        'Our team provides end-to-end operational management across your automation environment, including workflow monitoring, issue resolution, performance optimisation, platform administration, change management, and lifecycle support. We ensure automation solutions continue to operate efficiently while adapting to changes in business processes, applications, regulatory requirements, and technology platforms.',
        'Beyond day-to-day operations, we continuously refine and expand your automation capabilities by enhancing workflows, updating business rules, incorporating new automation opportunities, and integrating emerging technologies such as Artificial Intelligence and intelligent decisioning. Through regular health assessments, performance reviews, and automation maturity evaluations, we identify opportunities to improve efficiency, increase automation coverage, and maximise return on investment.',
        'Our managed operations model combines proactive monitoring, predictive analytics, capacity planning, incident management, release management, and continuous improvement practices to maintain high levels of availability, reliability, and operational performance. As business volumes grow and organisational priorities evolve, we ensure your automation platform scales seamlessly while maintaining consistent service quality and governance.',
        'Built on governance-first principles, our Ongoing Enhancement and Managed Operations services incorporate comprehensive performance monitoring, security oversight, compliance management, audit support, service-level reporting, and continuous governance reviews. This ensures every automation initiative remains secure, transparent, resilient, and fully aligned with enterprise policies, regulatory obligations, and business objectives.',
        'The result is a fully managed, continuously evolving automation ecosystem that improves operational resilience, accelerates business agility, reduces the burden on internal teams, and ensures your automation programme continues to deliver measurable business value, innovation, and competitive advantage over the long term.',
      ],
    },
  ];

  private revealObserver: IntersectionObserver | null = null;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const host = this.el.nativeElement as HTMLElement;

    // Scroll reveal
    const revealEls = host.querySelectorAll('[data-reveal]');
    this.revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this.revealObserver?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    revealEls.forEach((el) => this.revealObserver?.observe(el));
  }

  ngOnDestroy(): void {
    this.revealObserver?.disconnect();
  }
}
