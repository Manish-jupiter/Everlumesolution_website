import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ongoing-product-enhancement-support',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="breadcrumb-bar">
      <a routerLink="/">Home</a><span class="sep">›</span>
      <a routerLink="/what-we-offer">What We Offer</a><span class="sep">›</span>
      <a routerLink="/what-we-offer/digital-product-engineering">Digital Product Engineering</a><span class="sep">›</span>
      <span class="current">Ongoing Product Enhancement &amp; Support</span>
    </div>
    <section class="stub-page">
      <div class="stub-page__inner">
        <span class="stub-eyebrow">Digital Product Engineering</span>
        <h1 class="stub-title">Ongoing Product Enhancement <em>and Support</em></h1>
        <p class="stub-lead">Keep your digital products competitive, secure, and performant with structured enhancement programmes, proactive maintenance, and responsive support models.</p>
        <p class="stub-body">Our product lifecycle services extend beyond launch — covering continuous feature delivery, performance optimisation, security patching, dependency management, SLA-based support operations, and data-driven product evolution. We operate as an embedded extension of your product team, using usage analytics and customer feedback loops to prioritise the right enhancements at the right time.</p>
        <a routerLink="/what-we-offer/digital-product-engineering" class="stub-back"><i class="ph ph-arrow-left"></i> Back to Digital Product Engineering</a>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; font-family: 'DM Sans', system-ui, sans-serif; }
    .breadcrumb-bar { padding: 0.7rem 2rem; background: #f0f2f8; font-size: 0.8rem; display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap; }
    .breadcrumb-bar a { color: #1B3A8F; font-weight: 600; } .breadcrumb-bar a:hover { color: #E87722; }
    .breadcrumb-bar .sep { color: #aaa; } .breadcrumb-bar .current { color: #555; }
    .stub-page { padding: 5rem 3rem; background: #f5f5f3; }
    .stub-page__inner { max-width: 860px; margin: 0 auto; background: #fff; border-radius: 24px; padding: 3.5rem; box-shadow: 0 10px 40px rgba(27,58,143,0.08); border: 1px solid rgba(27,58,143,0.06); position: relative; overflow: hidden; }
    .stub-page__inner::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg,#1B3A8F,#E87722); }
    .stub-eyebrow { display: inline-block; padding: 0.3rem 0.9rem; border-radius: 999px; background: rgba(232,119,34,0.1); color: #E87722; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 1.2rem; }
    .stub-title { font-family: "DM Serif Display", serif; font-size: clamp(1.6rem,3vw,2.2rem); font-weight: 400; color: #111; line-height: 1.2; margin-bottom: 1.5rem; }
    .stub-title em { font-style: italic; color: #E87722; }
    .stub-lead { font-size: 1.05rem; color: #333; line-height: 1.8; margin-bottom: 1.2rem; }
    .stub-body { font-size: 0.97rem; color: #555; line-height: 1.8; margin-bottom: 2rem; }
    .stub-back { display: inline-flex; align-items: center; gap: 0.45rem; color: #1B3A8F; font-weight: 600; font-size: 0.88rem; border: 2px solid #1B3A8F; border-radius: 999px; padding: 0.6rem 1.4rem; transition: all 0.25s; }
    .stub-back:hover { background: #1B3A8F; color: #fff; }
    @media (max-width: 768px) { .stub-page { padding: 3rem 1.2rem; } .stub-page__inner { padding: 2rem 1.5rem; } }
  `],
})
export class OngoingProductEnhancementSupport {}
