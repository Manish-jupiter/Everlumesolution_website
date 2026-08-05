import { AfterViewInit, Component, ElementRef, OnDestroy, signal } from '@angular/core';

interface Deliverable {
  icon: string;
  title: string;
  intro: string;
  paragraphs: string[];
}

@Component({
  selector: 'app-managed-services',
  standalone: true,
  imports: [],
  template: `
    <article class="ms">
      <!-- ─── VIDEO HERO ─────────────────────────────────── -->
      <section class="ms-hero" id="ms-hero" aria-label="Managed Services">
        <div class="ms-hero__bg" aria-hidden="true">
          <img class="ms-hero__video" src="Images/image_025.jpg" alt="Managed Services" />
          <div class="ms-hero__overlay"></div>
          <div class="ms-hero__grid"></div>
        </div>

        <div class="ms-hero__inner">
          <span class="ms-hero__eyebrow">
            <span class="ms-hero__pulse"></span>
            <span>Managed Services</span>
          </span>
          <h1 class="ms-hero__title">
            Intelligent operations for<br />
            <span class="ms-hero__title-gradient">modern enterprises</span>
          </h1>
          <p class="ms-hero__lede">
            From 24/7 monitoring and incident response to cloud, cybersecurity, and service desk operations — we keep your technology estate secure, resilient, and continuously optimised through experienced engineers, AI-driven automation, and governance-first ITSM practices.
          </p>
        </div>
      </section>

      <!-- ─── INTRO ─────────────────────────────────────── -->
      <section class="ms-intro">
        <div class="ms-intro__inner" data-reveal>
          <span class="ms-intro__eyebrow">Why Managed Services</span>
          <h2 class="ms-intro__heading">Simplify IT operations. <em>Accelerate business outcomes.</em></h2>
          <p class="ms-intro__lead">
            Ensure the continuous performance, availability, and security of your technology landscape with our comprehensive Managed Services offering. We help organisations simplify IT operations by taking responsibility for the day-to-day management of applications, infrastructure, cloud environments, networks, cybersecurity, end-user services, and business-critical platforms — enabling greater operational resilience, reduced technology complexity, and freedom for internal teams to focus on innovation.
          </p>
        </div>

        <div class="ms-intro__highlights">
          <article class="ms-highlight" data-reveal>
            <div class="ms-highlight__icon"><i class="ph ph-arrows-clockwise"></i></div>
            <span class="ms-highlight__eyebrow">Full Lifecycle</span>
            <h3 class="ms-highlight__title">End-to-end IT operations</h3>
            <p class="ms-highlight__body">
              Our Managed Services portfolio spans the full lifecycle of IT operations — from monitoring and incident management to maintenance, optimisation, security, service desk operations, and continuous improvement — delivered seamlessly across hybrid, cloud, and on-premises environments.
            </p>
          </article>

          <article class="ms-highlight" data-reveal>
            <div class="ms-highlight__icon"><i class="ph ph-robot"></i></div>
            <span class="ms-highlight__eyebrow">Intelligent Operations</span>
            <h3 class="ms-highlight__title">AI, automation &amp; predictive insight</h3>
            <p class="ms-highlight__body">
              We combine experienced engineers with automation, Artificial Intelligence, predictive monitoring, analytics, and mature ITSM practices to proactively identify issues, automate routine work, optimise performance, and minimise business disruption.
            </p>
          </article>

          <article class="ms-highlight" data-reveal>
            <div class="ms-highlight__icon"><i class="ph ph-scales"></i></div>
            <span class="ms-highlight__eyebrow">Governance First</span>
            <h3 class="ms-highlight__title">Security, compliance &amp; SLAs built in</h3>
            <p class="ms-highlight__body">
              Enterprise-grade security, compliance, service governance, and risk management are woven in. Clearly defined SLAs, operational dashboards, automated reporting, and structured governance reviews deliver full transparency and accountability.
            </p>
          </article>
        </div>

        <div class="ms-intro__callout" data-reveal>
          <div class="ms-intro__callout-icon"><i class="ph ph-sparkle"></i></div>
          <div class="ms-intro__callout-body">
            <span class="ms-intro__callout-label">The Outcome</span>
            <p>
              A resilient, secure, and highly efficient managed operations environment that improves system availability, accelerates issue resolution, reduces administrative overhead, and provides a scalable technology foundation for long-term business growth and digital transformation.
            </p>
          </div>
        </div>
      </section>


      <!-- ─── WHAT WE DELIVER (ACCORDION) ───────── -->
      <section class="ms-deliver" id="ms-deliver">
        <div class="ms-deliver__bg-glow ms-deliver__bg-glow--a"></div>
        <div class="ms-deliver__bg-glow ms-deliver__bg-glow--b"></div>

        <div class="ms-deliver__header" data-reveal>
          <span class="ms-deliver__eyebrow">Our Service Portfolio</span>
          <h2 class="ms-deliver__heading">What we <em>deliver</em></h2>
          <p class="ms-deliver__sub">A comprehensive set of managed operations capabilities that keep your technology estate secure, available, and continuously optimised.</p>
        </div>

        <div class="ms-deliver__list">
          @for (item of deliverables; track item.title; let i = $index) {
            <div class="ms-deliver__item" [class.is-open]="openDeliverIndex() === i" data-reveal>
              <button class="ms-deliver__toggle" (click)="toggleDeliver(i)" [attr.aria-expanded]="openDeliverIndex() === i">
                <span class="ms-deliver__toggle-num">{{ (i + 1).toString().padStart(2, '0') }}</span>
                <span class="ms-deliver__toggle-icon"><i class="ph {{ item.icon }}"></i></span>
                <span class="ms-deliver__toggle-title">{{ item.title }}</span>
                <span class="ms-deliver__toggle-chev"><i class="ph ph-caret-down"></i></span>
              </button>
              <div class="ms-deliver__panel">
                <div class="ms-deliver__panel-inner">
                  <p class="ms-deliver__panel-lead">{{ item.intro }}</p>
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
      <section class="ms-why">
        <article class="ms-why__matter" data-reveal>
          <span class="ms-why__eyebrow">Why It Matters</span>
          <h2 class="ms-why__heading">Complexity is the new <em>constant</em></h2>
          <p>Modern IT environments are becoming increasingly complex, spanning on-premises infrastructure, cloud platforms, applications, networks, cybersecurity, and end-user services. As technology ecosystems expand, internal IT teams are often consumed by routine maintenance, incident resolution, and operational support, leaving limited capacity to focus on innovation, business transformation, and strategic initiatives.</p>
          <p>Our Managed Services offering helps organisations overcome these challenges by providing a proactive, fully managed operational model that combines experienced specialists, advanced monitoring, automation, AI-driven insights, and proven IT Service Management (ITSM) practices. We continuously monitor, maintain, optimise, and secure your technology environment to improve service quality, minimise downtime, and ensure business-critical systems operate at peak performance.</p>
          <p>By shifting day-to-day IT operations to a trusted managed services partner, organisations gain predictable service delivery, improved operational resilience, stronger security, and access to specialised expertise — without the cost and complexity of expanding internal support teams.</p>
        </article>

        <div class="ms-why__grid">
          <article class="ms-why__card ms-why__card--value" data-reveal>
            <div class="ms-why__card-icon"><i class="ph ph-target"></i></div>
            <span class="ms-why__card-eyebrow">Business Value</span>
            <h3 class="ms-why__card-title">Measurable outcomes, delivered</h3>
            <ul class="ms-why__list">
              <li><i class="ph ph-check-circle"></i><span>Improve system availability, reliability, and operational resilience.</span></li>
              <li><i class="ph ph-check-circle"></i><span>Accelerate incident detection, response, and resolution.</span></li>
              <li><i class="ph ph-check-circle"></i><span>Reduce operational risk through proactive monitoring and preventive maintenance.</span></li>
              <li><i class="ph ph-check-circle"></i><span>Lower the administrative burden on internal IT teams.</span></li>
              <li><i class="ph ph-check-circle"></i><span>Optimise infrastructure, application, and cloud performance.</span></li>
              <li><i class="ph ph-check-circle"></i><span>Enhance security, compliance, and governance across the technology landscape.</span></li>
              <li><i class="ph ph-check-circle"></i><span>Achieve predictable service levels through structured service management and measurable performance reporting.</span></li>
            </ul>
          </article>

          <article class="ms-why__card ms-why__card--gov" data-reveal>
            <div class="ms-why__card-icon"><i class="ph ph-scales"></i></div>
            <span class="ms-why__card-eyebrow">Governance &amp; Control</span>
            <h3 class="ms-why__card-title">Governed by design</h3>
            <p>Our Managed Services are delivered through a governance-first operating model that embeds service management, security, compliance, and operational oversight into every engagement. We implement clearly defined Service Level Agreements (SLAs), performance scorecards, role-based governance, incident and change management processes, audit trails, continuous monitoring, and regular service reviews to ensure complete transparency, accountability, and alignment with business objectives.</p>
            <p>Continuous service improvement, operational analytics, and proactive risk management ensure that your technology environment remains secure, resilient, and responsive to evolving business needs.</p>
          </article>
        </div>

        <div class="ms-why__tagline" data-reveal>
          <div class="ms-why__tagline-glow"></div>
          <p>
            Build a <em>resilient, secure, and high-performing</em> technology environment with Managed Services that deliver operational excellence, predictable service outcomes, and the agility to support long-term business growth and digital transformation.
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

      .ms {
        font-family: 'DM Sans', system-ui, sans-serif;
        color: var(--ink);
        overflow: hidden;
      }

      /* ─── VIDEO HERO ─────────────────────────────────── */
      .ms-hero {
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
      .ms-hero__bg { position: absolute; inset: 0; z-index: -1; }
      .ms-hero__video {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(0.7) saturate(1.05);
      }
      .ms-hero__overlay {
        position: absolute;
        inset: 0;
        background:
          radial-gradient(ellipse at 25% 25%, rgba(27, 58, 143, 0.45), transparent 55%),
          radial-gradient(ellipse at 80% 75%, rgba(232, 119, 34, 0.28), transparent 55%),
          linear-gradient(180deg, rgba(16, 21, 42, 0.35), rgba(16, 21, 42, 0.85));
      }
      .ms-hero__grid {
        position: absolute;
        inset: 0;
        background-image:
          linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
        background-size: 60px 60px;
        mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
        opacity: 0.6;
      }
      .ms-hero__inner {
        position: relative;
        max-width: 920px;
        padding: 4rem 1.5rem;
        text-align: center;
        animation: msHeroRise 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) both;
      }
      .ms-hero__eyebrow {
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
      .ms-hero__pulse {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--orange);
        box-shadow: 0 0 0 0 rgba(232, 119, 34, 0.65);
        animation: msHeroPulse 1.8s ease-out infinite;
      }
      .ms-hero__title {
        font-family: 'DM Serif Display', serif;
        font-size: clamp(2.4rem, 5.5vw, 4.6rem);
        line-height: 1.08;
        letter-spacing: -0.01em;
        margin: 0 0 1.25rem;
        color: #fff;
        text-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
      }
      .ms-hero__title-gradient {
        background: linear-gradient(120deg, var(--orange), #ffb98f 40%, #fff);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        font-style: italic;
      }
      .ms-hero__lede {
        font-size: clamp(1rem, 1.4vw, 1.15rem);
        line-height: 1.7;
        color: rgba(255, 255, 255, 0.85);
        max-width: 660px;
        margin: 0 auto;
      }

      @keyframes msHeroRise {
        from { opacity: 0; transform: translateY(24px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes msHeroPulse {
        0% { box-shadow: 0 0 0 0 rgba(232, 119, 34, 0.7); }
        70% { box-shadow: 0 0 0 12px rgba(232, 119, 34, 0); }
        100% { box-shadow: 0 0 0 0 rgba(232, 119, 34, 0); }
      }

      @media (max-width: 768px) {
        .ms-hero__inner { padding: 3rem 1.25rem; }
      }

      /* ─── INTRO ─────────────────────────────────────── */
      .ms-intro {
        padding: 6rem 1.5rem 5rem;
        background: linear-gradient(180deg, #fff 0%, var(--panel) 100%);
        position: relative;
        overflow: hidden;
      }
      .ms-intro::before {
        content: '';
        position: absolute;
        top: -180px;
        right: -180px;
        width: 420px; height: 420px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(232,119,34,0.08), transparent 70%);
        pointer-events: none;
      }
      .ms-intro::after {
        content: '';
        position: absolute;
        bottom: -160px;
        left: -160px;
        width: 380px; height: 380px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(27,58,143,0.08), transparent 70%);
        pointer-events: none;
      }
      .ms-intro__inner {
        max-width: 900px;
        margin: 0 auto 3.5rem;
        text-align: center;
        position: relative;
      }
      .ms-intro__eyebrow {
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
      .ms-intro__heading {
        font-family: 'DM Serif Display', serif;
        font-size: clamp(1.9rem, 3.6vw, 2.75rem);
        line-height: 1.2;
        margin: 0 0 1.5rem;
        color: var(--ink);
      }
      .ms-intro__heading em {
        font-style: italic;
        color: var(--navy);
      }
      .ms-intro__lead {
        font-size: 1.1rem;
        line-height: 1.8;
        color: var(--mist);
        margin: 0;
      }

      /* Highlights grid */
      .ms-intro__highlights {
        max-width: 1200px;
        margin: 0 auto 3rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.75rem;
        position: relative;
      }

      .ms-highlight {
        position: relative;
        background: #fff;
        border-radius: 20px;
        padding: 2rem 1.75rem;
        border: 1px solid #e6e8f2;
        box-shadow: 0 6px 20px -10px rgba(27,58,143,0.15);
        transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
        overflow: hidden;
      }
      .ms-highlight::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 20px;
        padding: 1px;
        background: linear-gradient(135deg, transparent, transparent);
        transition: background 0.35s ease;
        pointer-events: none;
      }
      .ms-highlight:hover {
        transform: translateY(-6px);
        box-shadow: 0 22px 44px -20px rgba(27,58,143,0.25);
        border-color: transparent;
      }

      .ms-highlight__icon {
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
      .ms-highlight__icon i.ph {
        font-size: 1.6rem;
        color: var(--orange);
        line-height: 1;
        transition: color 0.35s ease;
      }
      .ms-highlight:hover .ms-highlight__icon {
        background: linear-gradient(135deg, var(--orange), var(--orange-dark));
        transform: rotate(-4deg) scale(1.08);
      }
      .ms-highlight:hover .ms-highlight__icon i.ph { color: #fff; }

      .ms-highlight__eyebrow {
        display: block;
        color: var(--orange);
        font-size: 0.72rem;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        font-weight: 700;
        margin-bottom: 0.5rem;
      }
      .ms-highlight__title {
        font-family: 'DM Serif Display', serif;
        font-size: 1.3rem;
        line-height: 1.3;
        color: var(--ink);
        margin: 0 0 0.85rem;
      }
      .ms-highlight__body {
        color: var(--mist);
        line-height: 1.75;
        font-size: 0.96rem;
        margin: 0;
      }

      /* Outcome callout */
      .ms-intro__callout {
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
      .ms-intro__callout::before {
        content: '';
        position: absolute;
        left: 0; top: 20%;
        width: 4px; height: 60%;
        background: linear-gradient(180deg, var(--orange), var(--navy));
        border-radius: 2px 0 0 2px;
      }
      .ms-intro__callout-icon {
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
      .ms-intro__callout-icon i.ph {
        font-size: 1.7rem;
        color: #fff;
        line-height: 1;
      }
      .ms-intro__callout-body { min-width: 0; }
      .ms-intro__callout-label {
        display: block;
        color: var(--orange);
        font-size: 0.72rem;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        font-weight: 700;
        margin-bottom: 0.35rem;
      }
      .ms-intro__callout p {
        color: var(--ink);
        line-height: 1.7;
        font-size: 1rem;
        margin: 0;
      }
      @media (max-width: 640px) {
        .ms-intro__callout {
          grid-template-columns: 1fr;
          text-align: center;
          padding: 1.75rem 1.25rem;
        }
        .ms-intro__callout-icon { margin: 0 auto; }
      }

      /* ─── WHAT WE DELIVER (ACCORDION) ─────────── */
      .ms-deliver {
        position: relative;
        padding: 6rem 1.5rem 6rem;
        background: linear-gradient(180deg, var(--navy-dark) 0%, var(--navy) 100%);
        overflow: hidden;
      }
      .ms-deliver__bg-glow {
        position: absolute;
        border-radius: 50%;
        filter: blur(90px);
        pointer-events: none;
      }
      .ms-deliver__bg-glow--a {
        width: 480px; height: 480px;
        background: radial-gradient(circle, rgba(232,119,34,0.35), transparent 70%);
        top: -120px; left: -140px;
      }
      .ms-deliver__bg-glow--b {
        width: 520px; height: 520px;
        background: radial-gradient(circle, rgba(123,211,209,0.22), transparent 70%);
        bottom: -160px; right: -140px;
      }
      .ms-deliver__header {
        position: relative;
        max-width: 820px;
        margin: 0 auto 3.5rem;
        text-align: center;
      }
      .ms-deliver__eyebrow {
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
      .ms-deliver__heading {
        font-family: 'DM Serif Display', serif;
        font-size: clamp(2rem, 3.8vw, 2.85rem);
        line-height: 1.2;
        color: #fff;
        margin: 0 0 1rem;
      }
      .ms-deliver__heading em {
        font-style: italic;
        color: var(--orange);
      }
      .ms-deliver__sub {
        color: rgba(255,255,255,0.72);
        line-height: 1.7;
        margin: 0;
      }

      .ms-deliver__list {
        position: relative;
        max-width: 1000px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .ms-deliver__item {
        background: rgba(255,255,255,0.04);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 16px;
        backdrop-filter: blur(6px);
        overflow: hidden;
        transition: background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
      }
      .ms-deliver__item.is-open {
        background: rgba(255,255,255,0.07);
        border-color: rgba(232,119,34,0.45);
        box-shadow: 0 22px 44px -22px rgba(232,119,34,0.35);
      }

      .ms-deliver__toggle {
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
      .ms-deliver__toggle-num {
        font-family: 'DM Serif Display', serif;
        font-size: 1.3rem;
        color: rgba(255,255,255,0.35);
        letter-spacing: -0.02em;
        transition: color 0.35s ease;
        min-width: 2.2rem;
      }
      .ms-deliver__item.is-open .ms-deliver__toggle-num { color: var(--orange); }

      .ms-deliver__toggle-icon {
        width: 44px;
        height: 44px;
        border-radius: 12px;
        background: linear-gradient(135deg, rgba(232,119,34,0.18), rgba(255,255,255,0.05));
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: background 0.35s ease, transform 0.35s ease;
      }
      .ms-deliver__toggle-icon i.ph {
        font-size: 1.35rem;
        color: var(--orange);
        line-height: 1;
        transition: color 0.35s ease;
      }
      .ms-deliver__item.is-open .ms-deliver__toggle-icon {
        background: linear-gradient(135deg, var(--orange), var(--orange-dark));
        transform: rotate(-4deg) scale(1.05);
      }
      .ms-deliver__item.is-open .ms-deliver__toggle-icon i.ph { color: #fff; }

      .ms-deliver__toggle-title {
        font-family: 'DM Sans', system-ui, sans-serif;
        font-size: 1.05rem;
        font-weight: 600;
        color: #fff;
        line-height: 1.3;
      }

      .ms-deliver__toggle-chev {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: rgba(255,255,255,0.08);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: background 0.35s ease, transform 0.35s ease;
      }
      .ms-deliver__toggle-chev i.ph {
        font-size: 1rem;
        color: #fff;
        line-height: 1;
        transition: transform 0.35s ease, color 0.35s ease;
      }
      .ms-deliver__item.is-open .ms-deliver__toggle-chev {
        background: var(--orange);
      }
      .ms-deliver__item.is-open .ms-deliver__toggle-chev i.ph {
        transform: rotate(180deg);
      }

      .ms-deliver__panel {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.55s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .ms-deliver__item.is-open .ms-deliver__panel {
        max-height: 2000px;
      }
      .ms-deliver__panel-inner {
        padding: 0 1.5rem 1.75rem 5.2rem;
        color: rgba(255,255,255,0.78);
        line-height: 1.75;
      }
      .ms-deliver__panel-inner p {
        margin: 0 0 0.9rem;
        font-size: 0.96rem;
      }
      .ms-deliver__panel-inner p:last-child { margin-bottom: 0; }
      .ms-deliver__panel-lead {
        color: #fff !important;
        font-size: 1rem !important;
        font-weight: 500;
      }

      @media (max-width: 720px) {
        .ms-deliver__toggle {
          grid-template-columns: auto auto 1fr auto;
          gap: 0.75rem;
          padding: 1.1rem 1rem;
        }
        .ms-deliver__toggle-num { display: none; }
        .ms-deliver__toggle-title { font-size: 0.95rem; }
        .ms-deliver__panel-inner { padding: 0 1rem 1.5rem 3.75rem; }
      }

      /* ─── WHY / VALUE / GOVERNANCE ────────── */
      .ms-why {
        position: relative;
        padding: 6rem 1.5rem 5rem;
        background: #fff;
        max-width: 1200px;
        margin: 0 auto;
      }

      .ms-why__matter {
        position: relative;
        max-width: 900px;
        margin: 0 auto 3.5rem;
        text-align: center;
      }
      .ms-why__icon {
        width: 64px;
        height: 64px;
        margin: 0 auto 1.25rem;
        border-radius: 18px;
        background: linear-gradient(135deg, var(--orange), var(--orange-dark));
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 14px 32px -14px rgba(232,119,34,0.55);
      }
      .ms-why__icon i.ph {
        font-size: 1.9rem;
        color: #fff;
        line-height: 1;
      }
      .ms-why__eyebrow {
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
      .ms-why__heading {
        font-family: 'DM Serif Display', serif;
        font-size: clamp(1.9rem, 3.4vw, 2.5rem);
        line-height: 1.2;
        margin: 0 0 1.5rem;
        color: var(--ink);
      }
      .ms-why__heading em {
        font-style: italic;
        color: var(--navy);
      }
      .ms-why__matter p {
        color: var(--mist);
        line-height: 1.8;
        margin: 0 0 1rem;
        font-size: 1rem;
      }
      .ms-why__matter p:last-child { margin-bottom: 0; }

      .ms-why__grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 1.75rem;
        margin-bottom: 3rem;
      }

      .ms-why__card {
        position: relative;
        background: #fff;
        border-radius: 20px;
        padding: 2.25rem 2rem;
        border: 1px solid #e6e8f2;
        box-shadow: 0 10px 30px -18px rgba(27,58,143,0.2);
        overflow: hidden;
        transition: transform 0.35s ease, box-shadow 0.35s ease;
      }
      .ms-why__card::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 4px;
        background: linear-gradient(90deg, var(--orange), var(--navy));
      }
      .ms-why__card:hover {
        transform: translateY(-4px);
        box-shadow: 0 26px 50px -22px rgba(27,58,143,0.28);
      }
      .ms-why__card--value {
        background: linear-gradient(180deg, #fff 0%, #fdf6f0 100%);
      }
      .ms-why__card--gov {
        background: linear-gradient(180deg, #fff 0%, #f0f3fb 100%);
      }
      .ms-why__card-icon {
        width: 52px;
        height: 52px;
        border-radius: 14px;
        background: linear-gradient(135deg, rgba(232,119,34,0.12), rgba(27,58,143,0.08));
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.25rem;
      }
      .ms-why__card-icon i.ph {
        font-size: 1.6rem;
        color: var(--orange);
        line-height: 1;
      }
      .ms-why__card-eyebrow {
        display: block;
        color: var(--orange);
        font-size: 0.72rem;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        font-weight: 700;
        margin-bottom: 0.5rem;
      }
      .ms-why__card-title {
        font-family: 'DM Serif Display', serif;
        font-size: 1.35rem;
        line-height: 1.3;
        color: var(--ink);
        margin: 0 0 1.1rem;
      }
      .ms-why__card p {
        color: var(--mist);
        line-height: 1.75;
        font-size: 0.96rem;
        margin: 0 0 0.9rem;
      }
      .ms-why__card p:last-child { margin-bottom: 0; }

      .ms-why__list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.7rem;
      }
      .ms-why__list li {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: start;
        gap: 0.7rem;
        color: var(--ink);
        font-size: 0.95rem;
        line-height: 1.55;
      }
      .ms-why__list li i.ph {
        color: var(--orange);
        font-size: 1.15rem;
        line-height: 1.4;
        flex-shrink: 0;
      }

      .ms-why__tagline {
        position: relative;
        max-width: 1000px;
        margin: 0 auto;
        padding: 2.5rem 2.5rem;
        border-radius: 24px;
        background: linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%);
        text-align: center;
        overflow: hidden;
      }
      .ms-why__tagline-glow {
        position: absolute;
        top: 50%; left: 50%;
        width: 460px; height: 460px;
        transform: translate(-50%, -50%);
        background: radial-gradient(circle, rgba(232,119,34,0.28), transparent 70%);
        filter: blur(60px);
        pointer-events: none;
      }
      .ms-why__tagline p {
        position: relative;
        font-family: 'DM Serif Display', serif;
        color: #fff;
        font-size: clamp(1.15rem, 2.1vw, 1.5rem);
        line-height: 1.5;
        margin: 0;
      }
      .ms-why__tagline em {
        font-style: italic;
        color: var(--orange);
      }

      @media (max-width: 640px) {
        .ms-why__tagline { padding: 2rem 1.5rem; }
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
export class ManagedServices implements AfterViewInit, OnDestroy {
  protected openDeliverIndex = signal<number | null>(0);

  protected toggleDeliver(i: number): void {
    this.openDeliverIndex.update((current) => (current === i ? null : i));
  }

  protected deliverables: Deliverable[] = [
    {
      icon: 'ph-monitor',
      title: '24/7 monitoring and support',
      intro: 'Maintain continuous business operations with comprehensive 24/7 Monitoring and Support services that provide around-the-clock visibility, proactive issue detection, and rapid incident response across your technology environment.',
      paragraphs: [
        'Our operations teams continuously monitor applications, infrastructure, cloud platforms, networks, databases, and business services using advanced monitoring tools, AI-driven analytics, and intelligent alerting capabilities. By tracking system health, availability, performance, capacity, and operational events in real time, we identify potential issues before they impact users or disrupt business operations, allowing proactive intervention and preventive maintenance.',
        'When incidents occur, our experienced support teams follow structured IT Service Management (ITSM) processes to rapidly investigate, prioritise, and resolve issues. Through well-defined incident management, escalation procedures, root cause analysis, and service restoration workflows, we minimise downtime, reduce business disruption, and restore normal operations as quickly as possible. Continuous communication and transparent status reporting ensure stakeholders remain informed throughout the incident lifecycle.',
        'Beyond incident response, we provide proactive operational oversight through trend analysis, predictive monitoring, capacity planning, health assessments, and continuous service optimisation. By identifying recurring issues, performance bottlenecks, and emerging risks, we help organisations strengthen system reliability, improve operational resilience, and reduce the likelihood of future service disruptions.',
        'Built on governance-first principles, our 24/7 Monitoring and Support services incorporate comprehensive operational dashboards, service-level management, audit trails, security monitoring, compliance oversight, automated reporting, and continuous performance measurement. Regular service reviews and continuous improvement initiatives ensure support operations remain aligned with business objectives while consistently meeting agreed service levels.',
        'The result is a resilient, always-on operational environment that improves system availability, accelerates incident resolution, reduces operational risk, strengthens business continuity, and gives organisations the confidence that their critical technology services are continuously monitored, supported, and optimised.',
      ],
    },
    {
      icon: 'ph-stack',
      title: 'Application and infrastructure management',
      intro: 'Ensure the reliability, performance, and resilience of your technology landscape with comprehensive Application and Infrastructure Management services.',
      paragraphs: [
        'We help organisations manage and optimise the applications, platforms, servers, databases, networks, cloud environments, and supporting infrastructure that power critical business operations. Through proactive management and continuous optimisation, we enable organisations to maximise system availability, improve operational efficiency, and reduce the complexity of day-to-day IT management.',
        'Our services provide end-to-end operational management across the technology stack, including application support, infrastructure administration, operating system management, database administration, middleware support, cloud resource management, network operations, and platform maintenance. We ensure business-critical systems remain stable, secure, and consistently available while supporting evolving business requirements and growth.',
        'Beyond routine maintenance, we continuously monitor application and infrastructure performance, conduct health assessments, optimise system configurations, apply software updates and security patches, manage capacity, and resolve operational issues before they impact business users. Leveraging automation, AI-driven monitoring, predictive analytics, and IT Service Management (ITSM) best practices, we proactively identify risks, eliminate performance bottlenecks, and improve the overall efficiency of your technology environment.',
        'Our engineering-led approach focuses on maintaining operational excellence while reducing the burden on internal IT teams. By standardising operational processes, automating routine administration, and implementing preventive maintenance practices, we help organisations improve service reliability, enhance user experience, and extend the lifecycle of critical technology assets.',
        'Built on governance-first principles, our Application and Infrastructure Management services incorporate comprehensive change management, configuration management, security controls, compliance monitoring, service-level management, audit trails, performance reporting, and continuous improvement practices. Regular operational reviews and detailed performance dashboards provide complete visibility into system health while ensuring alignment with business objectives and enterprise governance standards.',
        'The result is a secure, resilient, and high-performing technology environment that improves application availability, strengthens infrastructure reliability, reduces operational overhead, enhances business continuity, and provides organisations with a scalable foundation for sustained operational excellence and future growth.',
      ],
    },
    {
      icon: 'ph-warning-octagon',
      title: 'Incident management and resolution',
      intro: 'Minimise business disruption and restore services rapidly with comprehensive Incident Management and Resolution services that ensure timely response, effective communication, and continuous service improvement.',
      paragraphs: [
        'Our incident management services provide end-to-end coordination across the entire incident lifecycle, from automated detection and initial triage through investigation, prioritisation, escalation, resolution, and service restoration. Leveraging advanced monitoring platforms, AI-driven event correlation, and intelligent alerting, we rapidly identify operational issues before they escalate into major business disruptions, enabling faster response and improved service resilience.',
        'Our experienced support teams follow well-defined operational procedures to classify incidents based on business impact and urgency, ensuring that critical issues receive immediate attention while routine incidents are managed efficiently. Structured escalation paths, cross-functional collaboration, and real-time stakeholder communication ensure that every incident is addressed with speed, transparency, and accountability throughout the resolution process.',
        'Beyond restoring service, we perform comprehensive root cause analysis to identify the underlying factors contributing to recurring incidents. By implementing permanent corrective actions, process improvements, knowledge management, and preventive measures, we help organisations reduce repeat incidents, strengthen operational stability, and continuously improve service quality over time.',
        'Built on governance-first principles, our Incident Management and Resolution services incorporate service-level management, operational dashboards, audit trails, change coordination, problem management, compliance monitoring, and performance reporting. Continuous measurement of key operational metrics — including response times, resolution times, incident trends, and service availability — provides complete visibility into service performance while driving ongoing operational excellence.',
        'The result is a resilient, responsive, and well-governed incident management capability that accelerates service restoration, minimises business disruption, improves user satisfaction, reduces recurring issues, and ensures critical technology services remain reliable, secure, and available.',
      ],
    },
    {
      icon: 'ph-gauge',
      title: 'Performance optimisation',
      intro: 'Maximise the efficiency, responsiveness, and reliability of your technology environment with comprehensive Performance Optimisation services.',
      paragraphs: [
        'We help organisations continuously enhance the performance of applications, infrastructure, cloud platforms, databases, and enterprise systems to ensure they operate at peak efficiency while supporting evolving business demands and user expectations.',
        'Our approach begins with continuous monitoring and analysis of system performance across the technology landscape. By evaluating application responsiveness, infrastructure utilisation, database performance, network latency, resource consumption, and workload patterns, we identify bottlenecks, inefficiencies, and capacity constraints that may impact operational performance or user experience.',
        'Leveraging advanced monitoring tools, AI-driven analytics, automation, and engineering best practices, we implement targeted optimisation initiatives that improve system throughput, reduce response times, enhance resource utilisation, and increase overall operational efficiency. This may include application tuning, infrastructure optimisation, database performance improvements, workload balancing, cloud resource optimisation, capacity planning, and workflow refinement to ensure technology investments deliver maximum business value.',
        'Our optimisation services are designed to evolve alongside your organisation. As business volumes increase, applications change, cloud environments expand, or operational priorities shift, we continuously assess system behaviour and implement enhancements that maintain high performance while supporting scalability, resilience, and cost efficiency.',
        'Built on governance-first principles, our Performance Optimisation services incorporate comprehensive performance monitoring, capacity management, operational analytics, service-level reporting, change management, and continuous improvement practices. Regular health assessments, trend analysis, and optimisation reviews provide complete visibility into system performance while ensuring ongoing alignment with business objectives, operational requirements, and enterprise governance standards.',
        'The result is a high-performing, resilient, and cost-efficient technology environment that delivers faster application performance, improved user experiences, optimised infrastructure utilisation, lower operational costs, and a scalable foundation capable of supporting long-term business growth and digital transformation.',
      ],
    },
    {
      icon: 'ph-shield-check',
      title: 'Security and patch management',
      intro: 'Protect your technology environment with comprehensive Security and Patch Management services that proactively safeguard systems against evolving cyber threats and operational vulnerabilities.',
      paragraphs: [
        'Our services provide end-to-end management of security updates across operating systems, applications, databases, middleware, cloud platforms, network devices, and supporting infrastructure. We continuously monitor vendor advisories, security bulletins, and emerging threat intelligence to identify relevant patches and security updates, ensuring critical vulnerabilities are addressed promptly while minimising operational disruption.',
        'Beyond routine patch deployment, we implement a structured patch management lifecycle that includes vulnerability assessment, impact analysis, testing, scheduling, deployment, validation, and post-implementation verification. This disciplined approach ensures updates are applied consistently and safely, reducing the risk of service interruptions while maintaining system stability and performance.',
        'Our security management capabilities extend beyond patching to include vulnerability monitoring, configuration management, security baseline enforcement, compliance validation, and ongoing operational hardening. Through continuous monitoring, risk assessments, and proactive maintenance, we help organisations reduce their attack surface, strengthen cyber resilience, and maintain secure technology operations across hybrid, cloud, and on-premises environments.',
        'Built on governance-first principles, our Security and Patch Management services incorporate role-based access controls, change management, audit trails, compliance reporting, security monitoring, policy enforcement, and continuous performance measurement. Regular security reviews, patch compliance reporting, and operational dashboards provide complete visibility into the security posture of the technology environment while ensuring alignment with organisational policies, industry standards, and regulatory requirements.',
        'The result is a secure, well-governed, and resilient technology environment that reduces cybersecurity risk, improves operational stability, strengthens compliance, and ensures critical business systems remain protected, current, and ready to support long-term business operations with confidence.',
      ],
    },
    {
      icon: 'ph-cloud-arrow-up',
      title: 'Backup, recovery, and continuity support',
      intro: 'Safeguard business operations with comprehensive Backup, Recovery, and Continuity Support services that ensure your critical systems, applications, and data remain protected against disruption.',
      paragraphs: [
        'Our services provide end-to-end management of backup and recovery operations across on-premises, cloud, and hybrid environments. We design and manage backup policies, data protection strategies, retention schedules, replication processes, and recovery workflows tailored to your business, operational, and regulatory requirements. Continuous monitoring ensures backups are completed successfully, securely stored, and readily available when needed.',
        'Beyond backup management, we develop and maintain comprehensive disaster recovery and business continuity capabilities that enable organisations to recover quickly from infrastructure failures, cyber incidents, natural disasters, or other operational disruptions. Our approach includes recovery planning, failover strategies, resilience architecture, recovery testing, and validation exercises to ensure business-critical services can be restored within defined Recovery Time Objectives (RTOs) and Recovery Point Objectives (RPOs).',
        'Leveraging automation, intelligent monitoring, and proven resilience engineering practices, we continuously assess recovery readiness, identify potential risks, and optimise recovery procedures as technology environments and business requirements evolve. Regular testing and simulation exercises validate the effectiveness of recovery plans while ensuring teams remain prepared to respond confidently to unexpected incidents.',
        'Built on governance-first principles, our Backup, Recovery, and Continuity Support services incorporate comprehensive security controls, encryption, access management, audit trails, compliance monitoring, change management, and operational reporting. Continuous governance reviews, resilience assessments, and performance dashboards provide complete visibility into backup health, recovery readiness, and business continuity capabilities while ensuring alignment with organisational policies and regulatory requirements.',
        'The result is a resilient, secure, and highly recoverable technology environment that protects critical business assets, minimises operational disruption, accelerates service restoration, strengthens business continuity, and provides organisations with the confidence to operate securely in an increasingly dynamic and risk-sensitive digital landscape.',
      ],
    },
    {
      icon: 'ph-headset',
      title: 'Service desk and user support',
      intro: 'Deliver exceptional user experiences with comprehensive Service Desk and User Support services that provide responsive, efficient, and reliable assistance across your technology environment.',
      paragraphs: [
        'Our service desk serves as a single point of contact for end-user support, managing the full lifecycle of incidents and service requests — from initial logging and triage through diagnosis, resolution, escalation, and closure. Whether addressing application issues, access requests, device support, software problems, account management, or infrastructure-related enquiries, our experienced support teams provide structured, user-focused assistance that restores productivity quickly and efficiently.',
        'Leveraging modern IT Service Management (ITSM) practices, automation, AI-assisted ticket classification, knowledge management, and self-service capabilities, we streamline support operations while reducing response times and improving first-contact resolution rates. Intelligent routing ensures requests are directed to the appropriate technical teams, while integrated workflows enable seamless collaboration across service, infrastructure, application, and security teams to resolve issues efficiently.',
        'Beyond reactive support, we focus on continuously improving the end-user experience through trend analysis, knowledge base enhancement, proactive communication, user education, and service optimisation. By analysing recurring incidents and support patterns, we identify opportunities to eliminate root causes, reduce ticket volumes, and improve overall service quality, enabling internal IT teams to focus on higher-value strategic initiatives.',
        'Built on governance-first principles, our Service Desk and User Support services incorporate service-level management, role-based access controls, operational dashboards, audit trails, customer satisfaction measurement, performance reporting, and continuous service improvement practices. Regular service reviews, KPI tracking, and operational analytics provide complete visibility into support performance while ensuring alignment with organisational objectives and agreed service levels.',
        'The result is a responsive, scalable, and user-centric support function that improves service quality, accelerates issue resolution, enhances employee productivity, reduces operational overhead, and delivers a consistently reliable support experience across the organisation.',
      ],
    },
    {
      icon: 'ph-chart-bar',
      title: 'Reporting, governance, and SLA tracking',
      intro: 'Drive operational excellence through comprehensive Reporting, Governance, and SLA Tracking services that provide complete visibility into service performance, operational health, and business outcomes.',
      paragraphs: [
        'Our reporting capabilities provide real-time and periodic insights into every aspect of service delivery, including incident volumes, service request trends, system availability, response and resolution times, infrastructure health, operational performance, security posture, and key service metrics. Executive dashboards and detailed operational reports enable stakeholders to monitor performance, identify emerging trends, assess risks, and make informed decisions that support continuous service improvement.',
        'Our governance framework establishes clear accountability, defined roles and responsibilities, structured operational processes, and regular service review mechanisms that ensure effective oversight throughout the engagement. Through governance meetings, performance reviews, risk assessments, change advisory processes, and continuous improvement initiatives, we work collaboratively with clients to align service delivery with evolving business priorities and technology strategies.',
        'Service Level Agreement (SLA) management forms a core component of our operating model. We continuously monitor and measure service performance against agreed SLAs and Key Performance Indicators (KPIs), providing transparent reporting on service availability, response times, resolution performance, operational efficiency, and customer satisfaction. Proactive performance management enables us to identify potential service issues early, implement corrective actions, and consistently achieve or exceed agreed service commitments.',
        'Built on governance-first principles, our Reporting, Governance, and SLA Tracking services incorporate comprehensive audit trails, compliance monitoring, policy enforcement, operational analytics, risk management, and continuous performance optimisation. Automated reporting, data-driven insights, and structured governance reviews ensure complete transparency, measurable accountability, and ongoing alignment with organisational goals and regulatory requirements.',
        'The result is a transparent, accountable, and performance-driven managed services environment that strengthens operational governance, ensures consistent service quality, improves decision-making, enhances stakeholder confidence, and enables organisations to achieve predictable, measurable outcomes from their managed services investments.',
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
