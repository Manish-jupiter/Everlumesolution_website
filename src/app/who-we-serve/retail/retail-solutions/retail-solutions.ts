import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-retail-solutions',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="breadcrumb-bar">
      <a routerLink="/">Home</a><span class="sep">›</span>
      <a routerLink="/who-we-serve">Who We Serve</a><span class="sep">›</span>
      <a routerLink="/who-we-serve/retail">Retail</a><span class="sep">›</span>
      <span class="current">Our Solutions</span>
    </div>

    <!-- PAGE HEADER -->
    <header class="rs-header">
      <div class="rs-header__grid-bg"></div>
      <div class="rs-header__glow-1"></div>
      <div class="rs-header__glow-2"></div>
      <div class="rs-header__inner">
        <div class="rs-header__badge">
          <i class="ph ph-layout"></i>
          <span>Agentic AI · Retail Solutions</span>
        </div>
        <h1 class="rs-header__title">Purpose-built agents for <em>every retail challenge</em></h1>
        <p class="rs-header__sub">Explore our suite of Agentic AI solutions engineered to address the most critical operational challenges across modern retail ecosystems. Each agent is designed to integrate, orchestrate, and deliver measurable business outcomes.</p>
      </div>
    </header>

    <!-- SOLUTIONS -->
    <section class="rs-solutions">
      <div class="rs-solutions__inner">

        <a routerLink="/who-we-serve/retail/inventory-optimization-agent" class="rs-card">
          <div class="rs-card__side">
            <div class="rs-card__icon-wrap"><i class="ph ph-cube"></i></div>
            <span class="rs-card__num">01</span>
          </div>
          <div class="rs-card__body">
            <h2 class="rs-card__title">Inventory Optimization Agent</h2>
            <div class="rs-card__footer">
              <span class="rs-card__cta">Explore Agent <i class="ph ph-arrow-right"></i></span>
            </div>
          </div>
        </a>

        <a routerLink="/who-we-serve/retail/personalized-shopping-agent" class="rs-card">
          <div class="rs-card__side">
            <div class="rs-card__icon-wrap"><i class="ph ph-user-circle"></i></div>
            <span class="rs-card__num">02</span>
          </div>
          <div class="rs-card__body">
            <h2 class="rs-card__title">Personalized Shopping Agent</h2>
            <div class="rs-card__footer">
              <span class="rs-card__cta">Explore Agent <i class="ph ph-arrow-right"></i></span>
            </div>
          </div>
        </a>

        <a routerLink="/who-we-serve/retail/customer-service-returns-agent" class="rs-card">
          <div class="rs-card__side">
            <div class="rs-card__icon-wrap"><i class="ph ph-headset"></i></div>
            <span class="rs-card__num">03</span>
          </div>
          <div class="rs-card__body">
            <h2 class="rs-card__title">Customer Service and Returns Agent</h2>
            <div class="rs-card__footer">
              <span class="rs-card__cta">Explore Agent <i class="ph ph-arrow-right"></i></span>
            </div>
          </div>
        </a>

      </div>
    </section>

    <!-- BACK CTA -->
    <section class="rs-back-cta">
      <a routerLink="/who-we-serve/retail" class="rs-back-cta__link"><i class="ph ph-arrow-left"></i> Back to Retail</a>
      <a routerLink="/contact-us" class="rs-back-cta__btn">Talk to an Expert <i class="ph ph-arrow-right"></i></a>
    </section>
  `,
  styles: [`
    :host { display: block; font-family: 'DM Sans', system-ui, sans-serif; }

    .breadcrumb-bar { background: #142d6b; padding: 0.55rem 3rem; display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap; }
    .breadcrumb-bar a, .breadcrumb-bar span { color: rgba(255,255,255,0.6); font-size: 0.8rem; font-weight: 500; text-decoration: none; }
    .breadcrumb-bar a:hover { color: #fff; }
    .breadcrumb-bar .sep { color: rgba(255,255,255,0.25); }
    .breadcrumb-bar .current { color: #E87722; font-weight: 600; }
    @media (max-width: 768px) { .breadcrumb-bar { padding: 0.55rem 1rem; margin-top: 58px; } }

    .rs-header { background: linear-gradient(135deg,#060d1f 0%,#0f1f4a 60%,#1B3A8F 100%); padding: 5rem 3rem 4.5rem; position: relative; overflow: hidden; text-align: center; }
    .rs-header__grid-bg { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px); background-size: 50px 50px; pointer-events: none; }
    .rs-header__glow-1 { position: absolute; width: 450px; height: 450px; border-radius: 50%; background: radial-gradient(circle,rgba(232,119,34,0.14) 0%,transparent 70%); top: -150px; right: -80px; pointer-events: none; }
    .rs-header__glow-2 { position: absolute; width: 300px; height: 300px; border-radius: 50%; background: radial-gradient(circle,rgba(123,163,255,0.1) 0%,transparent 70%); bottom: -80px; left: -60px; pointer-events: none; }
    .rs-header__inner { position: relative; z-index: 2; max-width: 800px; margin: 0 auto; }
    .rs-header__badge { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.1); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.18); border-radius: 999px; padding: 0.4rem 1.2rem; margin-bottom: 1.8rem; }
    .rs-header__badge i.ph { font-size: 1rem; color: #E87722; line-height: 1; }
    .rs-header__badge span { color: rgba(255,255,255,0.85); font-size: 0.78rem; font-weight: 600; letter-spacing: 0.07em; text-transform: uppercase; }
    .rs-header__title { font-family: "DM Serif Display", serif; font-size: clamp(2rem,4vw,3rem); color: #fff; font-weight: 400; line-height: 1.15; margin: 0 0 1.4rem; }
    .rs-header__title em { font-style: italic; color: #E87722; }
    .rs-header__sub { font-size: 1rem; color: rgba(255,255,255,0.72); line-height: 1.75; max-width: 680px; margin: 0 auto; }
    @media (max-width: 768px) { .rs-header { padding: 4rem 1.5rem; } }

    .rs-solutions { padding: 6rem 3rem; background: #f5f5f3; }
    .rs-solutions__inner { max-width: 1060px; margin: 0 auto; display: flex; flex-direction: column; gap: 2rem; }

    .rs-card { display: flex; gap: 0; background: #fff; border-radius: 24px; border: 1px solid rgba(27,58,143,0.08); box-shadow: 0 4px 24px rgba(27,58,143,0.06); overflow: hidden; text-decoration: none; transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s; }
    .rs-card:hover { transform: translateY(-6px); box-shadow: 0 24px 60px rgba(27,58,143,0.13); }

    .rs-card__side { flex-shrink: 0; width: 120px; background: linear-gradient(180deg,#0f1f4a 0%,#1B3A8F 100%); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1.2rem; padding: 2.5rem 1rem; }
    .rs-card__icon-wrap { width: 56px; height: 56px; background: rgba(255,255,255,0.12); border-radius: 16px; display: flex; align-items: center; justify-content: center; transition: background 0.3s; }
    .rs-card:hover .rs-card__icon-wrap { background: #E87722; }
    .rs-card__icon-wrap i.ph { font-size: 1.6rem; color: #fff; line-height: 1; }
    .rs-card__num { font-family: "DM Serif Display", serif; font-size: 2.5rem; color: rgba(255,255,255,0.15); font-weight: 400; line-height: 1; }

    .rs-card__body { flex: 1; padding: 2.4rem 2.8rem; display: flex; flex-direction: column; gap: 0; }
    .rs-card__title { font-family: "DM Serif Display", serif; font-size: 1.45rem; font-weight: 400; color: #111; line-height: 1.3; margin: 0 0 1rem; display: block; transition: color 0.3s; }
    .rs-card:hover .rs-card__title { color: #1B3A8F; }

    .rs-card__footer { margin-top: auto; padding-top: 0.4rem; border-top: 1px solid rgba(27,58,143,0.07); }
    .rs-card__cta { display: inline-flex; align-items: center; gap: 0.45rem; font-size: 0.86rem; font-weight: 700; color: #1B3A8F; transition: color 0.25s, gap 0.25s; }
    .rs-card:hover .rs-card__cta { color: #E87722; gap: 0.7rem; }
    .rs-card__cta i.ph { font-size: 0.9rem; transition: transform 0.25s; }
    .rs-card:hover .rs-card__cta i.ph { transform: translateX(4px); }

    @media (max-width: 768px) {
      .rs-solutions { padding: 3.5rem 1.5rem; }
      .rs-card { flex-direction: column; }
      .rs-card__side { width: 100%; flex-direction: row; padding: 1.5rem; justify-content: flex-start; }
      .rs-card__body { padding: 1.8rem 1.6rem; }
    }

    .rs-back-cta { padding: 2.5rem 3rem; background: linear-gradient(135deg,#142d6b,#1B3A8F); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
    .rs-back-cta__link { display: inline-flex; align-items: center; gap: 0.4rem; color: rgba(255,255,255,0.75); font-size: 0.88rem; font-weight: 600; text-decoration: none; transition: color 0.25s; }
    .rs-back-cta__link:hover { color: #fff; }
    .rs-back-cta__btn { display: inline-flex; align-items: center; gap: 0.5rem; background: #E87722; color: #fff; font-weight: 700; font-size: 0.9rem; padding: 0.75rem 1.8rem; border-radius: 999px; text-decoration: none; transition: transform 0.3s, box-shadow 0.3s; }
    .rs-back-cta__btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(232,119,34,0.4); color: #fff; }
    @media (max-width: 768px) { .rs-back-cta { padding: 2rem 1.5rem; flex-direction: column; align-items: flex-start; } }
  `],
})
export class RetailSolutions {}


@Component({
  selector: 'app-retail-solutions',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="breadcrumb-bar">
      <a routerLink="/">Home</a><span class="sep">›</span>
      <a routerLink="/who-we-serve">Who We Serve</a><span class="sep">›</span>
      <a routerLink="/who-we-serve/retail">Retail</a><span class="sep">›</span>
      <span class="current">Our Solutions</span>
    </div>

    <!-- PAGE HEADER -->
    <header class="rs-header">
      <div class="rs-header__grid-bg"></div>
      <div class="rs-header__glow-1"></div>
      <div class="rs-header__glow-2"></div>
      <div class="rs-header__inner">
        <div class="rs-header__badge">
          <i class="ph ph-layout"></i>
          <span>Agentic AI · Retail Solutions</span>
        </div>
        <h1 class="rs-header__title">Purpose-built agents for <em>every retail challenge</em></h1>
        <p class="rs-header__sub">Explore our suite of Agentic AI solutions engineered to address the most critical operational challenges across modern retail ecosystems. Each agent is designed to integrate, orchestrate, and deliver measurable business outcomes.</p>
      </div>
    </header>

    <!-- SOLUTIONS GRID -->
    <section class="rs-grid-section">
      <div class="rs-grid-section__inner">

        <a routerLink="/who-we-serve/retail/inventory-optimization-agent" class="rs-card">
          <div class="rs-card__accent"></div>
          <div class="rs-card__top">
            <div class="rs-card__num">01</div>
            <div class="rs-card__icon"><i class="ph ph-cube"></i></div>
          </div>
          <h2 class="rs-card__title">Inventory Optimization Agent</h2>
          <p class="rs-card__desc">Continuously monitors stock levels, analyses demand patterns, and orchestrates intelligent replenishment decisions across stores, warehouses, and digital channels to eliminate overstock, reduce stockouts, and improve supply chain efficiency.</p>
          <ul class="rs-card__pills">
            <li>Demand Forecasting</li>
            <li>Replenishment</li>
            <li>Multi-Channel Sync</li>
          </ul>
          <div class="rs-card__cta">Explore Agent <i class="ph ph-arrow-right"></i></div>
        </a>

        <a routerLink="/who-we-serve/retail/personalized-shopping-agent" class="rs-card">
          <div class="rs-card__accent"></div>
          <div class="rs-card__top">
            <div class="rs-card__num">02</div>
            <div class="rs-card__icon"><i class="ph ph-user-circle"></i></div>
          </div>
          <h2 class="rs-card__title">Personalized Shopping Agent</h2>
          <p class="rs-card__desc">Understands customer intent, orchestrates personalised interactions, and dynamically guides shoppers throughout their buying journey to increase conversion, strengthen loyalty, and maximise lifetime value.</p>
          <ul class="rs-card__pills">
            <li>Recommendations</li>
            <li>Journey Orchestration</li>
            <li>Loyalty</li>
          </ul>
          <div class="rs-card__cta">Explore Agent <i class="ph ph-arrow-right"></i></div>
        </a>

        <a routerLink="/who-we-serve/retail/customer-service-returns-agent" class="rs-card">
          <div class="rs-card__accent"></div>
          <div class="rs-card__top">
            <div class="rs-card__num">03</div>
            <div class="rs-card__icon"><i class="ph ph-headset"></i></div>
          </div>
          <h2 class="rs-card__title">Customer Service and Returns Agent</h2>
          <p class="rs-card__desc">Automates routine customer service interactions, orchestrates returns and refund workflows, and provides personalised post-purchase support across every touchpoint to improve satisfaction and reduce contact centre load.</p>
          <ul class="rs-card__pills">
            <li>Returns Automation</li>
            <li>Post-Purchase Support</li>
            <li>Workflow Orchestration</li>
          </ul>
          <div class="rs-card__cta">Explore Agent <i class="ph ph-arrow-right"></i></div>
        </a>

      </div>
    </section>

    <!-- BACK CTA -->
    <section class="rs-back-cta">
      <a routerLink="/who-we-serve/retail" class="rs-back-cta__link"><i class="ph ph-arrow-left"></i> Back to Retail</a>
      <a routerLink="/contact-us" class="rs-back-cta__btn">Talk to an Expert <i class="ph ph-arrow-right"></i></a>
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

    .rs-header { background: linear-gradient(135deg,#060d1f 0%,#0f1f4a 60%,#1B3A8F 100%); padding: 5rem 3rem 4.5rem; position: relative; overflow: hidden; text-align: center; }
    .rs-header__grid-bg { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px); background-size: 50px 50px; pointer-events: none; }
    .rs-header__glow-1 { position: absolute; width: 450px; height: 450px; border-radius: 50%; background: radial-gradient(circle,rgba(232,119,34,0.14) 0%,transparent 70%); top: -150px; right: -80px; pointer-events: none; }
    .rs-header__glow-2 { position: absolute; width: 300px; height: 300px; border-radius: 50%; background: radial-gradient(circle,rgba(123,163,255,0.1) 0%,transparent 70%); bottom: -80px; left: -60px; pointer-events: none; }
    .rs-header__inner { position: relative; z-index: 2; max-width: 800px; margin: 0 auto; }
    .rs-header__badge { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.1); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.18); border-radius: 999px; padding: 0.4rem 1.2rem; margin-bottom: 1.8rem; }
    .rs-header__badge i.ph { font-size: 1rem; color: var(--orange); line-height: 1; }
    .rs-header__badge span { color: rgba(255,255,255,0.85); font-size: 0.78rem; font-weight: 600; letter-spacing: 0.07em; text-transform: uppercase; }
    .rs-header__title { font-family: "DM Serif Display", serif; font-size: clamp(2rem,4vw,3rem); color: #fff; font-weight: 400; line-height: 1.15; margin-bottom: 1.4rem; }
    .rs-header__title em { font-style: italic; color: var(--orange); }
    .rs-header__sub { font-size: 1rem; color: rgba(255,255,255,0.72); line-height: 1.75; max-width: 680px; margin: 0 auto; }
    @media (max-width: 768px) { .rs-header { padding: 4rem 1.5rem; } }

    .rs-grid-section { padding: 6rem 3rem; background: var(--bg); }
    .rs-grid-section__inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }

    .rs-card { position: relative; background: #fff; border-radius: 24px; padding: 2.8rem 2.2rem 2.2rem; text-decoration: none; border: 1px solid rgba(27,58,143,0.08); box-shadow: 0 4px 24px rgba(27,58,143,0.06); overflow: hidden; display: flex; flex-direction: column; gap: 1.2rem; transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s, border-color 0.3s; }
    .rs-card__accent { position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, var(--blue), var(--orange)); transition: height 0.3s; }
    .rs-card:hover { transform: translateY(-10px); box-shadow: 0 28px 64px rgba(27,58,143,0.14); border-color: rgba(27,58,143,0.16); }
    .rs-card:hover .rs-card__accent { height: 6px; }

    .rs-card__top { display: flex; align-items: flex-start; justify-content: space-between; }
    .rs-card__num { font-family: "DM Serif Display", serif; font-size: 4.5rem; font-weight: 400; color: rgba(27,58,143,0.06); line-height: 1; transition: color 0.3s; }
    .rs-card:hover .rs-card__num { color: rgba(27,58,143,0.1); }
    .rs-card__icon { width: 62px; height: 62px; background: linear-gradient(135deg, rgba(27,58,143,0.08), rgba(232,119,34,0.06)); border-radius: 18px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 10px rgba(27,58,143,0.1); transition: background 0.35s, transform 0.35s; flex-shrink: 0; }
    .rs-card:hover .rs-card__icon { background: linear-gradient(135deg, var(--blue), var(--teal-dark)); transform: scale(1.08) rotate(-4deg); }
    .rs-card__icon i.ph { font-size: 1.7rem; color: var(--blue); transition: color 0.3s; line-height: 1; }
    .rs-card:hover .rs-card__icon i.ph { color: #fff; }

    .rs-card__title { font-family: "DM Serif Display", serif; font-size: 1.3rem; font-weight: 400; color: var(--dark); line-height: 1.3; margin: 0; transition: color 0.3s; }
    .rs-card:hover .rs-card__title { color: var(--blue); }
    .rs-card__desc { font-size: 0.9rem; color: var(--mid); line-height: 1.75; margin: 0; flex: 1; }

    .rs-card__pills { display: flex; flex-wrap: wrap; gap: 0.4rem; list-style: none; padding: 0; margin: 0; }
    .rs-card__pills li { font-size: 0.73rem; font-weight: 600; letter-spacing: 0.04em; color: var(--blue); background: rgba(27,58,143,0.07); border-radius: 999px; padding: 0.25rem 0.75rem; transition: background 0.2s, color 0.2s; }
    .rs-card:hover .rs-card__pills li { background: rgba(232,119,34,0.1); color: var(--orange); }

    .rs-card__cta { display: inline-flex; align-items: center; gap: 0.45rem; font-size: 0.85rem; font-weight: 700; color: var(--blue); transition: color 0.25s, gap 0.25s; margin-top: auto; }
    .rs-card:hover .rs-card__cta { color: var(--orange); gap: 0.75rem; }
    .rs-card__cta i.ph { font-size: 0.9rem; transition: transform 0.25s; }
    .rs-card:hover .rs-card__cta i.ph { transform: translateX(4px); }

    @media (max-width: 1024px) { .rs-grid-section__inner { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 640px) { .rs-grid-section { padding: 3.5rem 1.5rem; } .rs-grid-section__inner { grid-template-columns: 1fr; gap: 1.5rem; } }

    .rs-back-cta { padding: 2.5rem 3rem; background: linear-gradient(135deg,#142d6b,#1B3A8F); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
    .rs-back-cta__link { display: inline-flex; align-items: center; gap: 0.4rem; color: rgba(255,255,255,0.75); font-size: 0.88rem; font-weight: 600; text-decoration: none; transition: color 0.25s; }
    .rs-back-cta__link:hover { color: #fff; }
    .rs-back-cta__btn { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--orange); color: #fff; font-weight: 700; font-size: 0.9rem; padding: 0.75rem 1.8rem; border-radius: 999px; text-decoration: none; transition: transform 0.3s, box-shadow 0.3s; }
    .rs-back-cta__btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(232,119,34,0.4); color: #fff; }
    @media (max-width: 768px) { .rs-back-cta { padding: 2rem 1.5rem; flex-direction: column; align-items: flex-start; } }
  `],
})
export class RetailSolutions {}
