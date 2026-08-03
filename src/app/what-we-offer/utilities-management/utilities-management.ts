import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Capability {
  title: string;
  icon: string;
  body: string;
}

interface SecurityTopic {
  title: string;
  icon: string;
  paragraphs: string[];
}

@Component({
  selector: 'app-utilities-management',
  standalone: true,
  imports: [RouterLink],
  template: `
    <article class="um">
      <!-- ─── 1. VIDEO HERO ────────────────────────────── -->
      <section class="um-hero" aria-label="Utilities Management">
        <div class="um-hero__bg" aria-hidden="true">
          <video class="um-hero__video" autoplay muted loop playsinline preload="auto">
            <source src="VIdeos/Evelume_video.mp4" type="video/mp4" />
          </video>
          <div class="um-hero__overlay"></div>
          <div class="um-hero__grid"></div>
        </div>

        <div class="um-hero__inner">
          <span class="um-hero__eyebrow">
            <span class="um-hero__pulse"></span>
            <span>Utilities Management</span>
          </span>
          <h1 class="um-hero__title">
            Powering smarter utility<br />
            <span class="um-hero__title-gradient">operations with Agentic AI</span>
          </h1>
          <p class="um-hero__lede">
            Transform billing, customer service, service requests, and field
            operations for energy, water, and gas providers — with intelligent
            AI agents that orchestrate work across systems while keeping humans
            in the loop for the decisions that matter.
          </p>
          <div class="um-hero__cta-wrap">
            <a routerLink="/contact-us" class="um-hero__cta">
              <span>Talk to an expert</span>
              <i class="ph ph-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </section>

      <!-- ─── 2. INTRO ─────────────────────────────────── -->
      <section class="um-intro">
        <div class="um-intro__inner">
          <div class="um-intro__head">
            <span class="um-eyebrow">
              <i class="ph ph-sparkle" aria-hidden="true"></i>
              <span>Overview</span>
            </span>
            <h2 class="um-intro__title">
              Agentic AI for
              <span class="um-intro__title-accent">Utilities Management</span>
            </h2>
          </div>

          <div class="um-intro__grid">
            <div class="um-intro__lead">
              <span class="um-intro__drop">A</span>
              <p>
                Transform utility operations with intelligent Agentic AI solutions
                that automate high-volume, rules-driven processes across billing,
                customer service, service requests, and operational workflows.
                Designed for utilities providers and service organisations, our
                solutions reduce manual effort, improve accuracy, accelerate
                issue resolution, and deliver more responsive customer
                experiences — while keeping human oversight for complex or
                sensitive decisions.
              </p>
            </div>

            <div class="um-intro__cols">
              <article class="um-intro__col">
                <div class="um-intro__col-icon">
                  <i class="ph ph-graph" aria-hidden="true"></i>
                </div>
                <h3>Unified orchestration layer</h3>
                <p>
                  Connects billing platforms, Customer Information Systems
                  (CIS), CRM, document management, payments, field service, and
                  communication channels. Intelligent agents combine operational
                  data, business rules, and AI-driven reasoning to coordinate
                  activities across every system.
                </p>
              </article>

              <article class="um-intro__col">
                <div class="um-intro__col-icon">
                  <i class="ph ph-arrows-clockwise" aria-hidden="true"></i>
                </div>
                <h3>Adaptive business processes</h3>
                <p>
                  Rather than automating isolated tasks, Agentic AI orchestrates
                  complete processes that continuously adapt to changing
                  customer needs, operational priorities, and regulatory
                  requirements — delivering a scalable utility management model.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <!-- ─── 3. CAPABILITIES ACCORDION ────────────────── -->
      <section class="um-caps">
        <div class="um-caps__inner">
          <div class="um-caps__head">
            <span class="um-eyebrow um-eyebrow--dark">
              <i class="ph ph-stack" aria-hidden="true"></i>
              <span>Capabilities</span>
            </span>
            <h2 class="um-caps__title">
              Seven workflows where Agentic AI drives
              <em>measurable impact</em>
            </h2>
            <p class="um-caps__lede">
              Tap any capability to explore how our agents deliver operational
              lift across the customer and billing lifecycle.
            </p>
          </div>

          <ul class="um-acc" role="list">
            @for (cap of capabilities; track cap.title; let i = $index) {
              <li class="um-acc__item" [class.is-open]="openIndex() === i">
                <button
                  type="button"
                  class="um-acc__trigger"
                  [attr.aria-expanded]="openIndex() === i"
                  (click)="toggle(i)"
                >
                  <span class="um-acc__num">{{ (i + 1).toString().padStart(2, '0') }}</span>
                  <span class="um-acc__icon">
                    <i class="ph" [class]="'ph-' + cap.icon" aria-hidden="true"></i>
                  </span>
                  <span class="um-acc__title">{{ cap.title }}</span>
                  <span class="um-acc__chev" aria-hidden="true">
                    <i class="ph ph-caret-down"></i>
                  </span>
                </button>
                <div class="um-acc__panel">
                  <div class="um-acc__panel-inner">
                    <p>{{ cap.body }}</p>
                  </div>
                </div>
              </li>
            }
          </ul>
        </div>
      </section>

      <!-- ─── 4. SECURITY & GOVERNANCE ─────────────────── -->
      <section class="um-sec">
        <div class="um-sec__inner">
          <div class="um-sec__head">
            <span class="um-eyebrow">
              <i class="ph ph-shield-check" aria-hidden="true"></i>
              <span>Security &amp; Governance</span>
            </span>
            <h2 class="um-sec__title">
              Enterprise-grade protection
              <span class="um-sec__title-accent">at every layer</span>
            </h2>
            <p class="um-sec__lede">
              A defence-in-depth architecture — from network segmentation and
              next-generation firewalls to endpoint protection, Zero Trust
              access, and continuous monitoring.
            </p>
          </div>

          <div class="um-sec__grid">
            @for (topic of securityTopics; track topic.title; let i = $index) {
              <article class="um-sec__card">
                <div class="um-sec__card-top">
                  <div class="um-sec__card-icon">
                    <i class="ph" [class]="'ph-' + topic.icon" aria-hidden="true"></i>
                  </div>
                  <span class="um-sec__card-num">{{ (i + 1).toString().padStart(2, '0') }}</span>
                </div>
                <h3 class="um-sec__card-title">{{ topic.title }}</h3>
                @for (p of topic.paragraphs; track $index) {
                  <p class="um-sec__card-p">{{ p }}</p>
                }
              </article>
            }
          </div>

          <!-- Conclusion -->
          <div class="um-conclusion">
            <div class="um-conclusion__badge">
              <i class="ph ph-flag-checkered" aria-hidden="true"></i>
              <span>Conclusion</span>
            </div>
            <h3 class="um-conclusion__title">
              A comprehensive, defence-in-depth security posture.
            </h3>
            <p>
              The combination of Cisco Layer 3 network segmentation, Cisco
              Firepower Next Generation Firewalls, Microsoft Defender for
              Endpoint, integrated identity controls, centralised monitoring,
              threat intelligence, and automated incident response establishes a
              comprehensive security architecture that aligns closely with the
              expectations of HIPAA, SOC 2, and the HITRUST CSF.
            </p>
            <p>
              By integrating preventive, detective, and responsive controls
              across the network, endpoint, identity, and monitoring layers, the
              organisation is well positioned to safeguard sensitive data,
              maintain confidentiality, integrity, and availability, and
              demonstrate compliance with recognised industry frameworks —
              supporting regulatory requirements, customer assurance
              programmes, and evolving cybersecurity threats with confidence.
            </p>
          </div>
        </div>
      </section>
    </article>
  `,
  styles: [
    `
      :host {
        display: block;
        --um-orange: #e87722;
        --um-navy: #1b3a8f;
        --um-ink: #101a3a;
        --um-mist: #4a5680;
      }

      /* ── 1. Video hero ───────────────────────── */
      .um-hero {
        position: relative;
        min-height: calc(100vh - 88px);
        min-height: calc(100dvh - 88px);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        color: #ffffff;
        isolation: isolate;
        font-family: 'DM Sans', system-ui, sans-serif;
      }
      .um-hero__bg { position: absolute; inset: 0; z-index: -1; }
      .um-hero__video {
        position: absolute; inset: 0;
        width: 100%; height: 100%;
        object-fit: cover;
        filter: brightness(0.7) saturate(1.05);
      }
      .um-hero__overlay {
        position: absolute; inset: 0;
        background:
          radial-gradient(ellipse at 20% 30%, rgba(232,119,34,0.28), transparent 55%),
          radial-gradient(ellipse at 80% 70%, rgba(27,58,143,0.45), transparent 55%),
          linear-gradient(180deg, rgba(16,21,42,0.35), rgba(16,21,42,0.85));
      }
      .um-hero__grid {
        position: absolute; inset: 0;
        background-image:
          linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px);
        background-size: 60px 60px;
        mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
        opacity: 0.6;
      }
      .um-hero__inner {
        position: relative;
        max-width: 900px;
        padding: 4rem 1.5rem;
        text-align: center;
        animation: umRise 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) both;
      }
      .um-hero__eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 0.55rem;
        padding: 0.4rem 0.9rem;
        border-radius: 999px;
        background: rgba(255,255,255,0.1);
        border: 1px solid rgba(255,255,255,0.2);
        color: #ffffff;
        font-size: 0.78rem;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        backdrop-filter: blur(8px);
        margin-bottom: 1.4rem;
      }
      .um-hero__pulse {
        width: 8px; height: 8px;
        border-radius: 50%;
        background: var(--um-orange);
        box-shadow: 0 0 0 0 rgba(232,119,34,0.65);
        animation: umPulse 1.8s ease-out infinite;
      }
      .um-hero__title {
        font-family: 'DM Serif Display', serif;
        font-size: clamp(2.4rem, 5.5vw, 4.6rem);
        line-height: 1.08;
        letter-spacing: -0.01em;
        margin: 0 0 1.25rem;
        color: #ffffff;
        text-shadow: 0 10px 40px rgba(0,0,0,0.4);
        font-weight: 400;
      }
      .um-hero__title-gradient {
        background: linear-gradient(120deg, var(--um-orange), #ffb98f 40%, #ffffff);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        font-style: italic;
      }
      .um-hero__lede {
        font-size: clamp(1rem, 1.4vw, 1.15rem);
        line-height: 1.7;
        color: rgba(255,255,255,0.85);
        max-width: 640px;
        margin: 0 auto 2rem;
      }
      .um-hero__cta-wrap { margin-top: 0.5rem; }
      .um-hero__cta {
        display: inline-flex;
        align-items: center;
        gap: 0.6rem;
        padding: 0.95rem 1.6rem;
        border-radius: 999px;
        background: linear-gradient(135deg, var(--um-orange), var(--um-navy));
        color: #ffffff;
        text-decoration: none;
        font-weight: 600;
        letter-spacing: 0.01em;
        box-shadow: 0 18px 36px -18px rgba(232,119,34,0.7);
        transition: transform 0.25s ease, box-shadow 0.25s ease;
      }
      .um-hero__cta i.ph { transition: transform 0.25s ease; }
      .um-hero__cta:hover {
        transform: translateY(-2px);
        box-shadow: 0 22px 44px -18px rgba(232,119,34,0.85);
      }
      .um-hero__cta:hover i.ph { transform: translateX(3px); }

      /* ── 2. Body (existing content) ───────────── */
      .um-body {
        max-width: 1000px;
        margin: 0 auto;
        padding: 3.5rem 1.5rem 4rem;
        font-family: 'DM Sans', system-ui, sans-serif;
        color: var(--um-ink);
        font-size: 1rem;
        line-height: 1.75;
        white-space: pre-wrap;
      }

      /* ── Shared eyebrow ───────────────────────── */
      .um-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.35rem 0.85rem;
        border-radius: 999px;
        background: rgba(232, 119, 34, 0.1);
        color: var(--um-orange);
        font-size: 0.72rem;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        font-weight: 600;
      }
      .um-eyebrow i.ph { font-size: 0.95rem; }
      .um-eyebrow--dark {
        background: rgba(255, 255, 255, 0.08);
        color: #ffd6b3;
      }

      /* ── 3. Intro section ─────────────────────── */
      .um-intro {
        background: linear-gradient(180deg, #edebeb 0%, #f6f7fb 100%);
        padding: 5rem 1.5rem;
        font-family: 'DM Sans', system-ui, sans-serif;
        color: var(--um-ink);
      }
      .um-intro__inner { max-width: 1180px; margin: 0 auto; }
      .um-intro__head { text-align: center; margin-bottom: 3rem; }
      .um-intro__title {
        font-family: 'DM Serif Display', serif;
        font-size: clamp(2rem, 4vw, 3rem);
        line-height: 1.15;
        margin: 1rem 0 0;
        font-weight: 400;
        color: var(--um-ink);
      }
      .um-intro__title-accent {
        display: block;
        background: linear-gradient(120deg, var(--um-orange), var(--um-navy));
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        font-style: italic;
      }
      .um-intro__grid {
        display: grid;
        gap: 2rem;
        align-items: start;
      }
      .um-intro__lead {
        position: relative;
        padding: 1.75rem 1.75rem 1.75rem 2.5rem;
        background: #ffffff;
        
      }
      .um-intro__lead::before {
        content: '';
        position: absolute;
        top: 1.75rem; bottom: 1.75rem; left: 1rem;
        width: 4px;
        border-radius: 4px;
        background: linear-gradient(180deg, var(--um-orange), var(--um-navy));
      }
      .um-intro__drop {
        float: left;
        font-family: 'DM Serif Display', serif;
        font-size: 3.5rem;
        line-height: 1;
        color: var(--um-orange);
        padding: 0.25rem 0.6rem 0 0;
      }
      .um-intro__lead p {
        margin: 0;
        font-size: 1.02rem;
        line-height: 1.75;
        color: var(--um-mist);
      }
      .um-intro__cols {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.25rem;
      }
      .um-intro__col {
        background: #ffffff;
        border: 1px solid rgba(27, 58, 143, 0.08);
        border-radius: 18px;
        padding: 1.5rem 1.5rem 1.6rem;
        position: relative;
        transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
      }
      .um-intro__col:hover {
        transform: translateY(-3px);
        border-color: rgba(232, 119, 34, 0.35);
        box-shadow: 0 22px 42px -28px rgba(232, 119, 34, 0.4);
      }
      .um-intro__col-icon {
        width: 44px; height: 44px;
        border-radius: 12px;
        display: grid; place-items: center;
        background: linear-gradient(135deg, rgba(232,119,34,0.15), rgba(27,58,143,0.12));
        color: var(--um-orange);
        font-size: 1.35rem;
        margin-bottom: 0.85rem;
      }
      .um-intro__col h3 {
        font-family: 'DM Serif Display', serif;
        font-size: 1.25rem;
        margin: 0 0 0.55rem;
        color: var(--um-ink);
        font-weight: 400;
      }
      .um-intro__col p {
        margin: 0;
        color: var(--um-mist);
        font-size: 0.97rem;
        line-height: 1.65;
      }
      @media (max-width: 900px) {
        .um-intro__grid { grid-template-columns: 1fr; }
      }

      /* ── 4. Capabilities accordion ────────────── */
      .um-caps {
        position: relative;
        padding: 5.5rem 1.5rem;
        background:
          radial-gradient(ellipse at 15% 20%, rgba(232, 119, 34, 0.18), transparent 55%),
          radial-gradient(ellipse at 85% 80%, rgba(27, 58, 143, 0.35), transparent 55%),
          linear-gradient(180deg, #101a3a 0%, #1b2452 100%);
        color: #ffffff;
        font-family: 'DM Sans', system-ui, sans-serif;
        overflow: hidden;
      }
      .um-caps__inner { max-width: 1080px; margin: 0 auto; position: relative; }
      .um-caps__head { text-align: center; margin-bottom: 3rem; }
      .um-caps__title {
        font-family: 'DM Serif Display', serif;
        font-size: clamp(2rem, 4vw, 2.9rem);
        line-height: 1.2;
        margin: 1rem 0 0.9rem;
        font-weight: 400;
        color: #ffffff;
      }
      .um-caps__title em {
        font-style: italic;
        background: linear-gradient(120deg, var(--um-orange), #ffb98f);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      .um-caps__lede {
        margin: 0 auto;
        max-width: 620px;
        color: rgba(255, 255, 255, 0.75);
        font-size: 1.02rem;
        line-height: 1.65;
      }

      .um-acc {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 0.9rem;
      }
      .um-acc__item {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 18px;
        overflow: hidden;
        transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
      }
      .um-acc__item:hover {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(232, 119, 34, 0.4);
      }
      .um-acc__item.is-open {
        background: rgba(255, 255, 255, 0.09);
        border-color: rgba(232, 119, 34, 0.5);
        box-shadow: 0 20px 40px -20px rgba(232, 119, 34, 0.35);
      }
      .um-acc__trigger {
        display: grid;
        grid-template-columns: auto auto 1fr auto;
        align-items: center;
        gap: 1.1rem;
        width: 100%;
        padding: 1.15rem 1.4rem;
        background: transparent;
        border: 0;
        color: inherit;
        text-align: left;
        cursor: pointer;
        font: inherit;
      }
      .um-acc__num {
        font-family: 'DM Serif Display', serif;
        font-size: 1.35rem;
        color: rgba(255, 255, 255, 0.35);
        min-width: 2.25rem;
        transition: color 0.25s ease;
      }
      .um-acc__item.is-open .um-acc__num { color: var(--um-orange); }
      .um-acc__icon {
        width: 42px; height: 42px;
        border-radius: 12px;
        display: grid; place-items: center;
        background: linear-gradient(135deg, rgba(232, 119, 34, 0.2), rgba(27, 58, 143, 0.25));
        color: #ffd6b3;
        font-size: 1.25rem;
        transition: background 0.25s ease, color 0.25s ease, transform 0.35s ease;
      }
      .um-acc__item.is-open .um-acc__icon {
        background: linear-gradient(135deg, var(--um-orange), var(--um-navy));
        color: #ffffff;
        transform: rotate(-6deg);
      }
      .um-acc__title {
        font-family: 'DM Serif Display', serif;
        font-size: clamp(1.05rem, 1.5vw, 1.3rem);
        color: #ffffff;
        font-weight: 400;
      }
      .um-acc__chev {
        width: 36px; height: 36px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.08);
        display: grid; place-items: center;
        color: #ffffff;
        font-size: 1rem;
        transition: transform 0.3s ease, background 0.25s ease;
      }
      .um-acc__item.is-open .um-acc__chev {
        transform: rotate(180deg);
        background: var(--um-orange);
      }
      .um-acc__panel {
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows 0.35s ease;
      }
      .um-acc__item.is-open .um-acc__panel { grid-template-rows: 1fr; }
      .um-acc__panel-inner {
        overflow: hidden;
        padding: 0 1.4rem 0 5rem;
      }
      .um-acc__item.is-open .um-acc__panel-inner { padding-bottom: 1.4rem; }
      .um-acc__panel-inner p {
        margin: 0;
        color: rgba(255, 255, 255, 0.78);
        font-size: 0.97rem;
        line-height: 1.7;
        border-left: 2px solid rgba(232, 119, 34, 0.5);
        padding-left: 1rem;
      }
      @media (max-width: 600px) {
        .um-acc__trigger { grid-template-columns: auto auto 1fr auto; gap: 0.7rem; padding: 1rem; }
        .um-acc__panel-inner { padding-left: 1rem; }
      }

      /* ── 5. Security section ──────────────────── */
      .um-sec {
        padding: 5.5rem 1.5rem;
        background: #f6f7fb;
        font-family: 'DM Sans', system-ui, sans-serif;
        color: var(--um-ink);
      }
      .um-sec__inner { max-width: 1180px; margin: 0 auto; }
      .um-sec__head { text-align: center; margin-bottom: 3rem; }
      .um-sec__title {
        font-family: 'DM Serif Display', serif;
        font-size: clamp(2rem, 4vw, 2.9rem);
        line-height: 1.2;
        margin: 1rem 0 0.9rem;
        font-weight: 400;
      }
      .um-sec__title-accent {
        display: block;
        background: linear-gradient(120deg, var(--um-orange), var(--um-navy));
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        font-style: italic;
      }
      .um-sec__lede {
        margin: 0 auto;
        max-width: 640px;
        color: var(--um-mist);
        font-size: 1.02rem;
        line-height: 1.65;
      }
      .um-sec__grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1.5rem;
      }
      .um-sec__card {
        position: relative;
        background: #ffffff;
        border: 1px solid rgba(27, 58, 143, 0.08);
        border-radius: 20px;
        padding: 1.75rem 1.75rem 1.85rem;
        transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        overflow: hidden;
      }

      /* Per-card light gradient tints */
      .um-sec__card:nth-child(8n + 1) {
        background: linear-gradient(135deg, #fffaf3 0%, #fff1e0 100%);
        border-color: rgba(232, 119, 34, 0.14);
      }
      .um-sec__card:nth-child(8n + 2) {
        background: linear-gradient(135deg, #f8faff 0%, #ebf0ff 100%);
        border-color: rgba(27, 58, 143, 0.14);
      }
      .um-sec__card:nth-child(8n + 3) {
        background: linear-gradient(135deg, #f6fefa 0%, #e6faee 100%);
        border-color: rgba(5, 150, 105, 0.15);
      }
      .um-sec__card:nth-child(8n + 4) {
        background: linear-gradient(135deg, #fef8fb 0%, #fbeaf2 100%);
        border-color: rgba(224, 75, 107, 0.15);
      }
      .um-sec__card:nth-child(8n + 5) {
        background: linear-gradient(135deg, #faf9ff 0%, #efecff 100%);
        border-color: rgba(124, 58, 237, 0.15);
      }
      .um-sec__card:nth-child(8n + 6) {
        background: linear-gradient(135deg, #fffef5 0%, #fff8dc 100%);
        border-color: rgba(202, 138, 4, 0.15);
      }
      .um-sec__card:nth-child(8n + 7) {
        background: linear-gradient(135deg, #f5fdff 0%, #e2f7fb 100%);
        border-color: rgba(14, 165, 233, 0.15);
      }
      .um-sec__card:nth-child(8n + 8) {
        background: linear-gradient(135deg, #fff7f8 0%, #ffebee 100%);
        border-color: rgba(244, 63, 94, 0.15);
      }
      .um-sec__card::before {
        content: '';
        position: absolute;
        left: 0; top: 0; bottom: 0;
        width: 3px;
        background: linear-gradient(180deg, var(--um-orange), var(--um-navy));
        transform: scaleY(0.2);
        transform-origin: top;
        transition: transform 0.35s ease;
      }
      .um-sec__card:hover {
        transform: translateY(-4px);
        border-color: rgba(232, 119, 34, 0.35);
        box-shadow: 0 26px 48px -28px rgba(16, 21, 42, 0.35);
      }
      .um-sec__card:hover::before { transform: scaleY(1); }
      .um-sec__card-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;
      }
      .um-sec__card-icon {
        width: 48px; height: 48px;
        border-radius: 14px;
        display: grid; place-items: center;
        background: linear-gradient(135deg, rgba(232, 119, 34, 0.15), rgba(27, 58, 143, 0.12));
        color: var(--um-orange);
        font-size: 1.45rem;
      }
      .um-sec__card-num {
        font-family: 'DM Serif Display', serif;
        font-size: 1.5rem;
        color: rgba(16, 21, 42, 0.12);
      }
      .um-sec__card-title {
        font-family: 'DM Serif Display', serif;
        font-size: 1.3rem;
        margin: 0 0 0.85rem;
        color: var(--um-ink);
        font-weight: 400;
        line-height: 1.3;
      }
      .um-sec__card-p {
        margin: 0 0 0.7rem;
        color: var(--um-mist);
        font-size: 0.96rem;
        line-height: 1.7;
      }
      .um-sec__card-p:last-child { margin-bottom: 0; }
      @media (max-width: 820px) {
        .um-sec__grid { grid-template-columns: 1fr; }
      }

      /* ── Conclusion ──────────────────────────── */
      .um-conclusion {
        margin-top: 3rem;
        padding: 2.5rem;
        background: linear-gradient(135deg, #101a3a, #1b3a8f);
        border-radius: 24px;
        color: #ffffff;
        position: relative;
        overflow: hidden;
      }
      .um-conclusion::before {
        content: '';
        position: absolute;
        top: -60px; right: -60px;
        width: 220px; height: 220px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(232, 119, 34, 0.35), transparent 70%);
      }
      .um-conclusion__badge {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.35rem 0.85rem;
        border-radius: 999px;
        background: rgba(232, 119, 34, 0.2);
        color: #ffd6b3;
        font-size: 0.72rem;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        font-weight: 600;
        margin-bottom: 1rem;
      }
      .um-conclusion__title {
        font-family: 'DM Serif Display', serif;
        font-size: clamp(1.4rem, 2.4vw, 1.9rem);
        margin: 0 0 1rem;
        color: #ffffff;
        font-weight: 400;
        line-height: 1.3;
      }
      .um-conclusion p {
        margin: 0 0 0.9rem;
        color: rgba(255, 255, 255, 0.85);
        font-size: 1rem;
        line-height: 1.75;
        position: relative;
      }
      .um-conclusion p:last-child { margin-bottom: 0; }

      @keyframes umRise {
        from { opacity: 0; transform: translateY(24px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes umPulse {
        0% { box-shadow: 0 0 0 0 rgba(232,119,34,0.65); }
        70% { box-shadow: 0 0 0 12px rgba(232,119,34,0); }
        100% { box-shadow: 0 0 0 0 rgba(232,119,34,0); }
      }

      /* ── Legacy .page styles (kept for backward-compat) ── */
      .page {
        max-width: 1440px;
        margin: 0 auto;
        padding: 3rem 1.5rem 4rem;
        font-family: 'DM Sans', system-ui, sans-serif;
        color: #101a3a;
      }
      .page__eyebrow {
        display: inline-block;
        padding: 0.3rem 0.7rem;
        border-radius: 999px;
        background: rgba(232, 119, 34, 0.12);
        color: #e87722;
        font-size: 0.75rem;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        margin-bottom: 1rem;
      }
      .page__title {
        font-family: 'DM Serif Display', serif;
        font-size: clamp(2rem, 4vw, 2.75rem);
        display: inline-flex;
        align-items: center;
        gap: 0.85rem;
        margin: 0 0 1rem;
      }
      .page__title i.ph {
        color: #e87722;
        font-size: 2.4rem;
      }
      .page__lede {
        color: #4a5680;
        font-size: 1.05rem;
        line-height: 1.7;
        margin: 0 0 1.75rem;
      }
      .page__cta { margin-top: 1.5rem; }
      .page__btn {
        display: inline-flex;
        align-items: center;
        gap: 0.55rem;
        padding: 0.85rem 1.35rem;
        border-radius: 999px;
        background: linear-gradient(135deg, #e87722, #1b3a8f);
        color: #fff;
        text-decoration: none;
        font-weight: 600;
        transition: transform 0.25s ease, box-shadow 0.25s ease;
      }
      .page__btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 14px 28px -14px rgba(27, 58, 143, 0.6);
      }
    `,
  ],
})
export class UtilitiesManagement {
  readonly openIndex = signal<number | null>(0);

  toggle(i: number): void {
    this.openIndex.update((cur) => (cur === i ? null : i));
  }

  readonly capabilities: Capability[] = [
    {
      title: 'Billing exception resolution & dispute handling',
      icon: 'receipt',
      body:
        'Automate the identification, review, and resolution of billing exceptions before they become larger customer issues — flagging anomalies, gathering supporting context, and routing cases to the right resolution path. Reduces manual back-and-forth, improves billing accuracy, and delivers a smoother, more dependable billing experience.',
    },
    {
      title: 'Customer service & service request automation',
      icon: 'headset',
      body:
        'Streamline common customer interactions so routine requests around bills, account status, service updates, and standard support are handled quickly and consistently. Automation cuts wait times, ensures every request follows the approved workflow, and lets service teams focus on complex or sensitive cases.',
    },
    {
      title: 'Move-in & move-out workflow orchestration',
      icon: 'house-line',
      body:
        'Coordinate every step of starting or ending service — gathering information, validating records, updating systems, and triggering the right follow-up actions. Orchestration eliminates missed steps and delays, making transitions smoother for customers and operations teams alike.',
    },
    {
      title: 'Tariff & account update support',
      icon: 'gauge',
      body:
        'Handle the high-volume work of updating tariffs, account details, and service-related changes by applying rules, validating information, and propagating updates accurately across systems. Fewer manual errors, faster routine updates, and consistent account management with less operational effort.',
    },
    {
      title: 'Complaint intake, triage & case management',
      icon: 'chat-teardrop-text',
      body:
        'Capture complaints, classify them by type and urgency, and route them to the appropriate team. A structured response process prevents issues from being lost, improves visibility into status and ownership, and delivers clearer, more accountable complaint handling from intake through resolution.',
    },
    {
      title: 'Human-in-the-loop controls for critical actions',
      icon: 'user-focus',
      body:
        'Keep people involved in high-risk or sensitive steps where judgment and accountability matter most. Important decisions are reviewed before anything is finalised or executed, reducing errors on edge cases and giving teams confidence that automation is being used responsibly.',
    },
    {
      title: 'Governance, monitoring & audit support',
      icon: 'shield-check',
      body:
        'Provide the controls needed to keep the system transparent, compliant, and measurable — logging actions, monitoring performance, and supporting review processes. Governance defines behaviour and ownership; audit support makes it easy to demonstrate what happened and why.',
    },
  ];

  readonly securityTopics: SecurityTopic[] = [
    {
      title: 'Network Security & Segmentation',
      icon: 'network',
      paragraphs: [
        'Built on Cisco Layer 3 switching technology providing a secure, resilient foundation. Critical business systems, production environments, workstations, and sensitive applications are logically separated through VLANs, significantly reducing lateral-movement opportunities in the event of a compromise.',
        'Access Control Lists (ACLs) enforce tightly controlled communication between segments so only authorised systems and services can talk to one another. Port security prevents unauthorised devices from connecting, DHCP Snooping blocks rogue DHCP servers, and routing authentication safeguards internal routing integrity.',
      ],
    },
    {
      title: 'Advanced Perimeter Protection',
      icon: 'shield-star',
      paragraphs: [
        'Cisco Firepower Next Generation Firewalls sit at key network boundaries and inspect inbound and outbound traffic using application-aware policies that extend well beyond port-based filtering. Deep packet inspection and SSL decryption reveal malicious activity concealed within encrypted traffic.',
        'Integrated Intrusion Prevention Services (IPS) continuously monitor for known exploits, malware, and emerging techniques. Policies are integrated with enterprise identity so decisions consider authenticated user and role — reinforcing a Zero Trust posture backed by real-time Cisco Talos threat intelligence.',
      ],
    },
    {
      title: 'Endpoint Protection & Threat Detection',
      icon: 'desktop',
      paragraphs: [
        'Every managed endpoint is protected by Microsoft Defender for Endpoint. Real-time anti-malware, EDR behavioural analytics, and Attack Surface Reduction policies work together to detect ransomware, unauthorised macros, malicious scripts, and advanced threats that evade signature-based tools.',
        'Integrated URL filtering blocks access to malicious sites, while rich forensic visibility lets security teams investigate quickly, understand attack timelines, and remediate. Microsoft 365 integration provides centralised management and coordinated operations across identities and devices.',
      ],
    },
    {
      title: 'Integrated Security Operations',
      icon: 'crosshair',
      paragraphs: [
        'Network segmentation, application-aware firewall policies, endpoint protection, identity management, and centralised monitoring are integrated as a single defence system. Cisco Talos and Microsoft Security threat intelligence continuously feed the environment so emerging threats are identified and blocked with the latest research.',
        'Security events from network devices, firewalls, endpoints, operating systems, and applications are consolidated in a central SIEM — enabling rapid identification of suspicious activity, detailed forensic investigations, and comprehensive audit trails.',
      ],
    },
    {
      title: 'Zero Trust Security',
      icon: 'lock-key',
      paragraphs: [
        'Every user, device, and connection is verified before access is granted, regardless of network location. Identity-aware controls evaluate user, device health, security posture, and business need, while least-privilege principles limit access to only what each role requires.',
        'Segmentation restricts unnecessary communication between systems and limits lateral movement, and continuous monitoring keeps access decisions dynamic and responsive to changing risk throughout the session.',
      ],
    },
    {
      title: 'Incident Detection & Response',
      icon: 'siren',
      paragraphs: [
        'Microsoft Defender EDR continuously monitors endpoint activity for indicators of compromise, and automated workflows initiate rapid investigation and containment. Integration with Cisco Firepower enables coordinated response — compromised endpoints are isolated while malicious network paths are simultaneously restricted.',
        'Comprehensive forensic data captured during incidents supports root-cause analysis, post-incident reviews, and continuous improvement of security controls.',
      ],
    },
    {
      title: 'Continuous Monitoring & Audit Readiness',
      icon: 'chart-line-up',
      paragraphs: [
        'Security events across the enterprise are centrally collected, analysed, and retained. Detailed audit logs capture user activity, admin actions, endpoint events, firewall traffic, and security alerts — supporting ongoing monitoring, investigations, and demonstrable evidence of governance for customers, auditors, and regulators.',
        'Centralised log correlation enables early identification of abnormal behaviour and supports proactive risk management through continuous security analytics.',
      ],
    },
    {
      title: 'Operational Security Practices',
      icon: 'wrench',
      paragraphs: [
        'Technical safeguards are reinforced by disciplined operational practices — structured patch management for infrastructure and endpoints, regular configuration reviews aligned to organisational standards, and awareness programmes covering phishing, social engineering, password hygiene, and secure computing.',
        'Periodic penetration testing, vulnerability assessments, and red-team exercises evaluate control effectiveness. Business continuity is supported through secure backup and recovery procedures that protect enterprise data and critical infrastructure configurations.',
      ],
    },
  ];
}
