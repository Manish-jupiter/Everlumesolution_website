import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface DelightIndustry {
  id: string;
  label: string;
  route: string;
  eyebrow: string;
  headline: string;
  blurb: string;
  metric: string;
  metricLabel: string;
  icon: string;
  accent: string;
}

@Component({
  selector: 'app-customer-delight',
  standalone: true,
  imports: [RouterLink],
  template: `
    <article class="cd">
      <!-- ─── 1. VIDEO HERO ───────────────────────────────── -->
      <section class="cd-hero" aria-label="Customer Delight">
        <div class="cd-hero__bg" aria-hidden="true">
          <video class="cd-hero__video" autoplay muted loop playsinline preload="auto">
            <source src="VIdeos/customerdelight.mov" type="video/mp4" />
          </video>
          <div class="cd-hero__overlay"></div>
          <div class="cd-hero__grid"></div>
        </div>

        <div class="cd-hero__inner">
          <span class="cd-hero__eyebrow">
            <span class="cd-hero__pulse"></span>
            <span>Customer Delight</span>
          </span>
          <h1 class="cd-hero__title">
            Real outcomes for the<br />
            <span class="cd-hero__title-gradient">enterprises we serve</span>
          </h1>
          <p class="cd-hero__lede">
            From healthcare to manufacturing, our partners rely on Everlume to
            turn complex operations into intelligent, resilient, and delightfully
            efficient experiences — measured in real business impact.
          </p>
        </div>
      </section>

      <!-- ─── 2. INDUSTRY DELIGHT GRID ────────────────────── -->
      <section class="cd-industries" aria-label="Delight by industry">
        <div class="cd-industries__head">
          <span class="cd-industries__eyebrow">By Industry</span>
          <h2 class="cd-industries__title">
            Where our clients find <span class="cd-industries__title-accent">delight</span>
          </h2>
          <p class="cd-industries__lede">
            Every industry has its own definition of success. Explore how we
            create measurable customer delight across the sectors we serve.
          </p>
        </div>

        <div class="cd-industries__grid">
          @for (item of industries; track item.id; let i = $index) {
            <a
              [routerLink]="item.route"
              class="cd-card"
              [style.--cd-accent]="item.accent"
              [attr.data-index]="i + 1"
            >
              <span class="cd-card__num">{{ (i + 1).toString().padStart(2, '0') }}</span>
              <div class="cd-card__icon">
                <i class="ph {{ item.icon }}" aria-hidden="true"></i>
              </div>
              <span class="cd-card__eyebrow">{{ item.eyebrow }}</span>
              <h3 class="cd-card__label">{{ item.label }}</h3>
              <p class="cd-card__headline">{{ item.headline }}</p>
              <p class="cd-card__blurb">{{ item.blurb }}</p>

              <div class="cd-card__metric">
                <span class="cd-card__metric-value">{{ item.metric }}</span>
                <span class="cd-card__metric-label">{{ item.metricLabel }}</span>
              </div>

              <span class="cd-card__cta">
                <span>Read the story</span>
                <i class="ph ph-arrow-right" aria-hidden="true"></i>
              </span>

              <span class="cd-card__glow" aria-hidden="true"></span>
              <span class="cd-card__ring" aria-hidden="true"></span>
            </a>
          }
        </div>
      </section>

      <!-- ─── 3. CTA STRIP ────────────────────────────────── -->
      <section class="cd-cta">
        <div class="cd-cta__inner">
          <div class="cd-cta__glow" aria-hidden="true"></div>
          <h2 class="cd-cta__title">
            Ready to become our next <span class="cd-cta__accent">delight</span> story?
          </h2>
          <p class="cd-cta__sub">
            Let's design outcomes worth talking about — measurable, scalable, and
            engineered for your industry.
          </p>
          <a routerLink="/contact-us" class="cd-cta__btn">
            <span>Talk to an expert</span>
            <i class="ph ph-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </section>
    </article>
  `,
  styles: [
    `
      :host {
        display: block;
        font-family: 'DM Sans', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
        color: #101a3a;
        --cd-orange: #e87722;
        --cd-navy: #1b3a8f;
        --cd-ink: #101a3a;
        --cd-mist: #4a5680;
        --cd-panel: #f6f7fb;
        --cd-line: rgba(17, 26, 58, 0.08);
      }

      /* ── 1. Hero ─────────────────────────────────────── */
      .cd-hero {
        position: relative;
        min-height: calc(100vh - 88px);
        min-height: calc(100dvh - 88px);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        color: #ffffff;
        isolation: isolate;
      }
      .cd-hero__bg { position: absolute; inset: 0; z-index: -1; }
      .cd-hero__video {
        position: absolute; inset: 0;
        width: 100%; height: 100%;
        object-fit: cover;
        filter: brightness(0.7) saturate(1.05);
      }
      .cd-hero__overlay {
        position: absolute; inset: 0;
        background:
          radial-gradient(ellipse at 20% 30%, rgba(232, 119, 34, 0.28), transparent 55%),
          radial-gradient(ellipse at 80% 70%, rgba(27, 58, 143, 0.45), transparent 55%),
          linear-gradient(180deg, rgba(16, 21, 42, 0.35), rgba(16, 21, 42, 0.85));
      }
      .cd-hero__grid {
        position: absolute; inset: 0;
        background-image:
          linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px);
        background-size: 60px 60px;
        mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
        opacity: 0.6;
      }
      .cd-hero__inner {
        position: relative;
        max-width: 900px;
        padding: 4rem 1.5rem;
        text-align: center;
        animation: cdRise 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) both;
      }
      .cd-hero__eyebrow {
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
      .cd-hero__pulse {
        width: 8px; height: 8px;
        border-radius: 50%;
        background: var(--cd-orange);
        box-shadow: 0 0 0 0 rgba(232,119,34,0.65);
        animation: cdPulse 1.8s ease-out infinite;
      }
      .cd-hero__title {
        font-family: 'DM Serif Display', serif;
        font-size: clamp(2.4rem, 5.5vw, 4.6rem);
        line-height: 1.08;
        letter-spacing: -0.01em;
        margin: 0 0 1.25rem;
        color: #ffffff;
        text-shadow: 0 10px 40px rgba(0,0,0,0.4);
        font-weight: 400;
      }
      .cd-hero__title-gradient {
        background: linear-gradient(120deg, var(--cd-orange), #ffb98f 40%, #ffffff);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        font-style: italic;
      }
      .cd-hero__lede {
        font-size: clamp(1rem, 1.4vw, 1.15rem);
        line-height: 1.7;
        color: rgba(255,255,255,0.85);
        max-width: 640px;
        margin: 0 auto;
      }

      /* ── 2. Industry grid ────────────────────────────── */
      .cd-industries {
        max-width: 1240px;
        margin: 0 auto;
        padding: 5rem 1.5rem 4rem;
      }
      .cd-industries__head {
        text-align: center;
        max-width: 720px;
        margin: 0 auto 3.5rem;
      }
      .cd-industries__eyebrow {
        display: inline-block;
        padding: 0.35rem 0.85rem;
        border-radius: 999px;
        background: linear-gradient(135deg, rgba(232,119,34,0.15), rgba(27,58,143,0.15));
        color: var(--cd-orange);
        font-size: 0.72rem;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        font-weight: 700;
        margin-bottom: 1rem;
      }
      .cd-industries__title {
        font-family: 'DM Serif Display', serif;
        font-size: clamp(1.8rem, 3.4vw, 2.6rem);
        line-height: 1.15;
        margin: 0 0 1rem;
        color: var(--cd-ink);
        font-weight: 400;
      }
      .cd-industries__title-accent {
        background: linear-gradient(135deg, var(--cd-orange), var(--cd-navy));
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        font-style: italic;
      }
      .cd-industries__lede {
        color: var(--cd-mist);
        line-height: 1.7;
        margin: 0;
      }

      .cd-industries__grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1.5rem;
      }
      /* Custom position — 5 cards in 3-col grid: last row centered */
      .cd-industries__grid > :nth-child(4) { grid-column: 1 / span 1; grid-column-start: 1; }
      .cd-industries__grid > :nth-child(4) { grid-column-start: 1; }
      /* Simpler: use standard flow but center the trailing row by adding empty visual balance
         via the last card spanning nicely — skip and let flow handle it */

      .cd-card {
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 2rem 1.75rem 1.75rem;
        border-radius: 22px;
        background: linear-gradient(180deg, #ffffff 0%, #fafbff 100%);
        border: 1px solid rgba(27,58,143,0.08);
        box-shadow: 0 18px 40px -26px rgba(27,58,143,0.35);
        text-decoration: none;
        color: inherit;
        overflow: hidden;
        isolation: isolate;
        min-height: 380px;
        transition: transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1),
                    box-shadow 0.45s ease, border-color 0.45s ease;
      }
      .cd-card::before {
        content: '';
        position: absolute;
        left: 0; top: 0;
        width: 100%;
        height: 4px;
        background: linear-gradient(90deg, var(--cd-accent, var(--cd-orange)), var(--cd-navy));
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.55s cubic-bezier(0.2, 0.8, 0.2, 1);
      }
      .cd-card:hover {
        transform: translateY(-8px);
        border-color: transparent;
        box-shadow: 0 32px 56px -22px rgba(27,58,143,0.4);
      }
      .cd-card:hover::before { transform: scaleX(1); }

      .cd-card__glow {
        position: absolute;
        top: -40%;
        right: -30%;
        width: 260px;
        height: 260px;
        background: radial-gradient(circle, var(--cd-accent, rgba(232,119,34,0.5)), transparent 65%);
        opacity: 0;
        transition: opacity 0.5s ease;
        pointer-events: none;
        z-index: -1;
      }
      .cd-card:hover .cd-card__glow { opacity: 0.35; }
      .cd-card__ring {
        position: absolute;
        bottom: -60px;
        left: -60px;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        border: 1px dashed rgba(27,58,143,0.14);
        pointer-events: none;
        z-index: -1;
        transition: transform 0.6s ease;
      }
      .cd-card:hover .cd-card__ring { transform: scale(1.15) rotate(20deg); }

      .cd-card__num {
        position: absolute;
        top: 1.15rem;
        right: 1.4rem;
        font-family: 'DM Serif Display', serif;
        font-size: 2.4rem;
        line-height: 1;
        background: linear-gradient(135deg, var(--cd-accent, var(--cd-orange)), rgba(27,58,143,0.35));
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        opacity: 0.85;
      }

      .cd-card__icon {
        width: 56px;
        height: 56px;
        border-radius: 16px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg,
          color-mix(in srgb, var(--cd-accent, #e87722) 18%, transparent),
          rgba(27,58,143,0.14));
        color: var(--cd-accent, var(--cd-orange));
        margin-bottom: 1.15rem;
        transition: background 0.4s ease, color 0.4s ease,
                    transform 0.4s ease, box-shadow 0.4s ease;
      }
      .cd-card__icon i.ph { font-size: 1.65rem; line-height: 1; }
      .cd-card:hover .cd-card__icon {
        background: linear-gradient(135deg, var(--cd-accent, var(--cd-orange)), var(--cd-navy));
        color: #ffffff;
        transform: rotate(-6deg) scale(1.06);
        box-shadow: 0 16px 28px -12px
          color-mix(in srgb, var(--cd-accent, #e87722) 65%, transparent);
      }

      .cd-card__eyebrow {
        display: inline-block;
        padding: 0.25rem 0.7rem;
        border-radius: 999px;
        background: rgba(232,119,34,0.1);
        color: var(--cd-accent, var(--cd-orange));
        font-size: 0.68rem;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        font-weight: 700;
        margin-bottom: 0.6rem;
        width: fit-content;
      }
      .cd-card__label {
        font-family: 'DM Serif Display', serif;
        font-size: 1.55rem;
        line-height: 1.2;
        margin: 0 0 0.4rem;
        color: var(--cd-ink);
        font-weight: 400;
      }
      .cd-card__headline {
        margin: 0 0 0.75rem;
        font-size: 0.95rem;
        color: var(--cd-ink);
        font-weight: 600;
        line-height: 1.5;
      }
      .cd-card__blurb {
        margin: 0 0 1.35rem;
        font-size: 0.9rem;
        color: var(--cd-mist);
        line-height: 1.6;
      }

      .cd-card__metric {
        margin: auto 0 1.25rem;
        padding: 0.85rem 1rem;
        border-radius: 12px;
        background: linear-gradient(135deg, rgba(232,119,34,0.08), rgba(27,58,143,0.08));
        border: 1px dashed rgba(232,119,34,0.35);
        display: flex;
        align-items: baseline;
        gap: 0.5rem;
      }
      .cd-card__metric-value {
        font-family: 'DM Serif Display', serif;
        font-size: 1.7rem;
        line-height: 1;
        background: linear-gradient(135deg, var(--cd-accent, var(--cd-orange)), var(--cd-navy));
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      .cd-card__metric-label {
        font-size: 0.78rem;
        color: var(--cd-mist);
        line-height: 1.35;
      }

      .cd-card__cta {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        font-size: 0.88rem;
        font-weight: 600;
        color: var(--cd-navy);
        letter-spacing: 0.01em;
      }
      .cd-card__cta i.ph { transition: transform 0.3s ease; }
      .cd-card:hover .cd-card__cta i.ph { transform: translateX(4px); }

      /* ── 3. CTA strip ─────────────────────────────────── */
      .cd-cta {
        padding: 4rem 1.5rem 5rem;
      }
      .cd-cta__inner {
        max-width: 900px;
        margin: 0 auto;
        padding: 3.25rem 2.5rem;
        text-align: center;
        border-radius: 24px;
        background: linear-gradient(135deg, #142d6b 0%, #1b3a8f 100%);
        color: #ffffff;
        position: relative;
        overflow: hidden;
        isolation: isolate;
      }
      .cd-cta__glow {
        position: absolute;
        top: -60%;
        left: 50%;
        transform: translateX(-50%);
        width: 520px;
        height: 520px;
        background: radial-gradient(circle, rgba(232,119,34,0.35), transparent 65%);
        pointer-events: none;
        z-index: -1;
      }
      .cd-cta__title {
        font-family: 'DM Serif Display', serif;
        font-size: clamp(1.6rem, 3vw, 2.2rem);
        line-height: 1.2;
        margin: 0 0 0.75rem;
        color: #ffffff;
        font-weight: 400;
      }
      .cd-cta__accent {
        background: linear-gradient(135deg, #ffb98f, var(--cd-orange));
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        font-style: italic;
      }
      .cd-cta__sub {
        margin: 0 auto 1.75rem;
        color: rgba(255,255,255,0.82);
        line-height: 1.65;
        max-width: 560px;
      }
      .cd-cta__btn {
        display: inline-flex;
        align-items: center;
        gap: 0.55rem;
        padding: 0.9rem 1.5rem;
        border-radius: 999px;
        background: linear-gradient(135deg, var(--cd-orange), #ffb98f);
        color: #101a3a;
        text-decoration: none;
        font-weight: 700;
        box-shadow: 0 18px 36px -18px rgba(232,119,34,0.7);
        transition: transform 0.25s ease, box-shadow 0.25s ease;
      }
      .cd-cta__btn i.ph { transition: transform 0.25s ease; }
      .cd-cta__btn:hover { transform: translateY(-2px); box-shadow: 0 22px 44px -18px rgba(232,119,34,0.85); }
      .cd-cta__btn:hover i.ph { transform: translateX(3px); }

      /* ── Animations ──────────────────────────────────── */
      @keyframes cdRise {
        from { opacity: 0; transform: translateY(24px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes cdPulse {
        0% { box-shadow: 0 0 0 0 rgba(232,119,34,0.65); }
        70% { box-shadow: 0 0 0 12px rgba(232,119,34,0); }
        100% { box-shadow: 0 0 0 0 rgba(232,119,34,0); }
      }

      /* ── Responsive ──────────────────────────────────── */
      @media (max-width: 960px) {
        .cd-industries__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      }
      @media (max-width: 620px) {
        .cd-industries { padding: 3.5rem 1.2rem 3rem; }
        .cd-industries__grid { grid-template-columns: 1fr; gap: 1.15rem; }
        .cd-card { min-height: 0; padding: 1.75rem 1.35rem 1.5rem; }
        .cd-cta__inner { padding: 2.5rem 1.5rem; }
      }
    `,
  ],
})
export class CustomerDelight {
  readonly industries: DelightIndustry[] = [
    {
      id: 'healthcare',
      label: 'Healthcare',
      route: '/who-we-serve/healthcare',
      eyebrow: 'Provider · Payer',
      headline: 'Faster care, cleaner revenue cycles.',
      blurb:
        'Agentic AI orchestrating claims, coding, prior auth, and human-in-the-loop review — with the governance clinicians and payers demand.',
      metric: '3.4×',
      metricLabel: 'faster claims turnaround',
      icon: 'ph-first-aid-kit',
      accent: '#e04b6b',
    },
    {
      id: 'banking',
      label: 'Banking',
      route: '/who-we-serve/banking',
      eyebrow: 'Risk · Compliance',
      headline: 'Confident decisions at enterprise scale.',
      blurb:
        'Unified underwriting, fraud, and compliance workflows across core banking systems — with explainable, audit-ready AI decisioning.',
      metric: '62%',
      metricLabel: 'lower manual review effort',
      icon: 'ph-bank',
      accent: '#1b3a8f',
    },
    {
      id: 'telecom',
      label: 'Telecom',
      route: '/who-we-serve/telecom',
      eyebrow: 'Network · CX',
      headline: 'Networks that anticipate, not just react.',
      blurb:
        'From field service to customer care, Agentic AI keeps networks resilient, service SLAs green, and every subscriber interaction personalised.',
      metric: '48%',
      metricLabel: 'faster ticket resolution',
      icon: 'ph-broadcast',
      accent: '#0ea5e9',
    },
    {
      id: 'retail',
      label: 'Retail',
      route: '/who-we-serve/retail',
      eyebrow: 'Commerce · Loyalty',
      headline: 'Effortless journeys, joyful shoppers.',
      blurb:
        'Intelligent orchestration across inventory, storefronts, and support — turning every touchpoint into a moment of measurable delight.',
      metric: '2.1×',
      metricLabel: 'lift in repeat purchases',
      icon: 'ph-storefront',
      accent: '#e87722',
    },
    {
      id: 'manufacturing',
      label: 'Manufacturing',
      route: '/who-we-serve/manufacturing',
      eyebrow: 'Operations · Quality',
      headline: 'Smarter plants, uncompromising quality.',
      blurb:
        'Agentic AI keeps production lines humming — predictive maintenance, quality assurance, and planning that adapts in real time.',
      metric: '31%',
      metricLabel: 'reduction in downtime',
      icon: 'ph-factory',
      accent: '#059669',
    },
  ];
}
