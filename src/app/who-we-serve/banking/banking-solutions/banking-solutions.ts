import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-banking-solutions',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="breadcrumb-bar">
      <a routerLink="/">Home</a><span class="sep">></span>
      <a routerLink="/who-we-serve">Who We Serve</a><span class="sep">></span>
      <a routerLink="/who-we-serve/banking">Banking</a><span class="sep">></span>
      <span class="current">Our Solutions</span>
    </div>

    <!-- PAGE HEADER -->
    <header class="bs-header">
      <div class="bs-header__bg"><img src="Images/image_004.jpg" alt="Global banking solutions" /><div class="bs-header__overlay"></div></div>
      <div class="bs-header__grid-bg"></div>
      <div class="bs-header__glow-1"></div>
      <div class="bs-header__glow-2"></div>
      <div class="bs-header__inner">
        <div class="bs-header__badge">
          <i class="ph ph-bank"></i>
          <span>Agentic AI · Banking Solutions</span>
        </div>
        <h1 class="bs-header__title">Purpose-built agents for <em>every banking challenge</em></h1>
        <p class="bs-header__sub">Explore our suite of Agentic AI solutions engineered to address the most critical operational challenges across modern banking ecosystems. Each agent is designed to integrate, orchestrate, and deliver measurable business outcomes.</p>
      </div>
    </header>

    <!-- SOLUTIONS GRID -->
    <section class="bs-grid-section">
      <div class="bs-grid-section__inner">

        <a routerLink="/who-we-serve/banking/customer-service-agent" class="bs-card">
          <div class="bs-card__icon"><i class="ph ph-headset"></i></div>
          <h2 class="bs-card__title">Customer Service Agent</h2>
          <i class="ph ph-arrow-right bs-card__arrow"></i>
        </a>

        <a routerLink="/who-we-serve/banking/fraud-detection-case-triage-agent" class="bs-card">
          <div class="bs-card__icon"><i class="ph ph-shield-warning"></i></div>
          <h2 class="bs-card__title">Fraud Detection and Case Triage Agent</h2>
          <i class="ph ph-arrow-right bs-card__arrow"></i>
        </a>

        <a routerLink="/who-we-serve/banking/kyc-compliance-agent" class="bs-card">
          <div class="bs-card__icon"><i class="ph ph-identification-card"></i></div>
          <h2 class="bs-card__title">KYC and Compliance Agent</h2>
          <i class="ph ph-arrow-right bs-card__arrow"></i>
        </a>

      </div>
    </section>

    <!-- BACK CTA -->
    <section class="bs-back-cta">
      <a routerLink="/who-we-serve/banking" class="bs-back-cta__link"><i class="ph ph-arrow-left"></i> Back to Banking</a>
      <a routerLink="/contact-us" class="bs-back-cta__btn">Talk to an Expert <i class="ph ph-arrow-right"></i></a>
    </section>
  `,
  styles: [`
    :host { display: block; font-family: 'DM Sans', system-ui, sans-serif; --blue:#1B3A8F; --orange:#E87722; --dark:#111; --bg:#f5f5f3; --mid:#555; --teal-dark:#142d6b; }

    .breadcrumb-bar { background: var(--teal-dark); padding: 0.55rem 3rem; display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap; }
    .breadcrumb-bar a, .breadcrumb-bar span { color: rgba(255,255,255,0.6); font-size: 0.8rem; font-weight: 500; text-decoration: none; }
    .breadcrumb-bar a:hover { color: #fff; }
    .breadcrumb-bar .sep { color: rgba(255,255,255,0.25); }
    .breadcrumb-bar .current { color: var(--orange); font-weight: 600; }
    @media (max-width: 768px) { .breadcrumb-bar { padding: 0.55rem 1rem; margin-top: 58px; } }

    /* HEADER */
    .bs-header { padding: 5rem 3rem 4.5rem; position: relative; overflow: hidden; text-align: center; }    .bs-header__bg { position: absolute; inset: 0; z-index: 0; }    .bs-header__bg img { width: 100%; height: 100%; object-fit: cover; }    .bs-header__overlay { position: absolute; inset: 0; background: linear-gradient(135deg,rgba(6,13,31,0.90) 0%,rgba(15,31,74,0.82) 60%,rgba(27,58,143,0.70) 100%); }
    .bs-header__grid-bg { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 50px 50px; pointer-events: none; }
    .bs-header__glow-1 { position: absolute; width: 450px; height: 450px; border-radius: 50%; background: radial-gradient(circle, rgba(232,119,34,0.14) 0%, transparent 70%); top: -150px; right: -80px; pointer-events: none; }
    .bs-header__glow-2 { position: absolute; width: 300px; height: 300px; border-radius: 50%; background: radial-gradient(circle, rgba(123,163,255,0.1) 0%, transparent 70%); bottom: -80px; left: -60px; pointer-events: none; }
    .bs-header__inner { position: relative; z-index: 2; max-width: 800px; margin: 0 auto; }
    .bs-header__badge { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.1); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.18); border-radius: 999px; padding: 0.4rem 1.2rem; margin-bottom: 1.8rem; }
    .bs-header__badge i { font-size: 1rem; color: var(--orange); }
    .bs-header__badge span { color: rgba(255,255,255,0.85); font-size: 0.78rem; font-weight: 600; letter-spacing: 0.07em; text-transform: uppercase; }
    .bs-header__title { font-family: "DM Serif Display", serif; font-size: clamp(2rem, 4vw, 3rem); color: #fff; font-weight: 400; line-height: 1.15; margin-bottom: 1.4rem; }
    .bs-header__title em { font-style: italic; color: var(--orange); }
    .bs-header__sub { font-size: 1rem; color: rgba(255,255,255,0.72); line-height: 1.75; max-width: 680px; margin: 0 auto; }
    @media (max-width: 768px) { .bs-header { padding: 4rem 1.5rem; } }

    /* SOLUTIONS GRID */
    .bs-grid-section { padding: 6rem 3rem; background: var(--bg); }
    .bs-grid-section__inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }

    .bs-card { position: relative; background: #fff; border-radius: 20px; padding: 2.4rem 2rem; text-decoration: none; border: 1px solid rgba(27,58,143,0.1); box-shadow: 0 4px 20px rgba(27,58,143,0.06); display: flex; flex-direction: column; align-items: flex-start; gap: 1rem; transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s, border-color 0.3s; }
    .bs-card:hover { transform: translateY(-8px); box-shadow: 0 24px 56px rgba(27,58,143,0.13); border-color: rgba(27,58,143,0.2); }

    .bs-card__icon { width: 56px; height: 56px; border-radius: 16px; background: linear-gradient(135deg, rgba(27,58,143,0.08), rgba(232,119,34,0.08)); display: flex; align-items: center; justify-content: center; }
    .bs-card__icon i { font-size: 1.8rem; color: var(--blue); }

    .bs-card__title { font-size: 1.05rem; font-weight: 700; color: var(--dark); line-height: 1.35; margin: 0; flex: 1; }

    .bs-card__arrow { font-size: 1.2rem; color: var(--orange); margin-top: auto; transition: transform 0.3s; }
    .bs-card:hover .bs-card__arrow { transform: translateX(5px); }

    @media (max-width: 1024px) { .bs-grid-section__inner { grid-template-columns: 1fr 1fr; } }
    @media (max-width: 640px) { .bs-grid-section { padding: 3.5rem 1.2rem; } .bs-grid-section__inner { grid-template-columns: 1fr; } }

    /* BACK CTA */
    .bs-back-cta { background: #fff; padding: 2.5rem 3rem; display: flex; align-items: center; justify-content: space-between; border-top: 1px solid rgba(27,58,143,0.08); gap: 1rem; flex-wrap: wrap; }
    .bs-back-cta__link { display: inline-flex; align-items: center; gap: 0.4rem; color: var(--mid); font-size: 0.9rem; font-weight: 600; text-decoration: none; transition: color 0.2s; }
    .bs-back-cta__link:hover { color: var(--blue); }
    .bs-back-cta__link i { font-size: 1rem; }
    .bs-back-cta__btn { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--orange); color: #fff; font-size: 0.9rem; font-weight: 700; padding: 0.75rem 1.8rem; border-radius: 999px; text-decoration: none; transition: background 0.3s, transform 0.3s; }
    .bs-back-cta__btn:hover { background: #c96418; transform: translateY(-2px); }
    .bs-back-cta__btn i { font-size: 1rem; }
    @media (max-width: 640px) { .bs-back-cta { padding: 2rem 1.2rem; justify-content: center; } }
  `]
})
export class BankingSolutions {}
