import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ai-data-integration',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="breadcrumb-bar">
      <a routerLink="/">Home</a><span class="sep">></span>
      <a routerLink="/what-we-offer">What We Offer</a><span class="sep">></span>
      <a routerLink="/what-we-offer/digital-product-engineering">Digital Product Engineering</a><span class="sep">></span>
      <span class="current">AI &amp; Data Integration</span>
    </div>
    <section class="stub-page">
      <div class="stub-page__inner">
        <span class="stub-eyebrow">Digital Product Engineering</span>
        <h1 class="stub-title">AI and <em>Data Integration</em></h1>
        <p class="stub-lead">Transform digital products into intelligent, data-driven platforms by seamlessly integrating Artificial Intelligence, advanced analytics, and enterprise data ecosystems. Our AI and Data Integration services help organisations embed intelligence directly into their products, enabling personalised user experiences, intelligent automation, predictive decision-making, and continuous product innovation.</p>
        <p class="stub-body">We design and implement architectures that connect digital products with enterprise data platforms, AI models, analytics engines, cloud services, and real-time data streams. By integrating structured and unstructured data from across the organisation, we enable products to generate contextual insights, automate complex workflows, deliver personalised recommendations, and respond dynamically to changing user behaviour and business conditions.</p>
        <p class="stub-body">Our approach combines advanced AI capabilities — including predictive analytics, Generative AI, Agentic AI, machine learning, and intelligent automation — with modern data engineering and integration frameworks to create products that continuously learn, adapt, and improve over time. Whether enhancing customer engagement, optimising operational processes, enabling intelligent search, or delivering real-time decision support, we ensure AI capabilities are seamlessly embedded within the product experience rather than operating as standalone features.</p>
        <p class="stub-body">Built on secure, scalable, and governance-first architectures, our solutions incorporate robust data management, API integration, model orchestration, security, privacy, explainability, and responsible AI controls. This ensures that intelligent capabilities remain reliable, transparent, and aligned with organisational policies and regulatory requirements while supporting enterprise-scale deployment.</p>
        <p class="stub-body">The result is a new generation of intelligent digital products that leverage the power of AI and data to deliver richer user experiences, smarter business processes, personalised interactions, and continuous innovation — creating sustainable competitive advantage and long-term business value.</p>
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
    .stub-body { font-size: 0.97rem; color: #555; line-height: 1.8; margin-bottom: 1.2rem; }
    .stub-back { display: inline-flex; align-items: center; gap: 0.45rem; color: #1B3A8F; font-weight: 600; font-size: 0.88rem; border: 2px solid #1B3A8F; border-radius: 999px; padding: 0.6rem 1.4rem; transition: all 0.25s; margin-top: 1rem; }
    .stub-back:hover { background: #1B3A8F; color: #fff; }
    @media (max-width: 768px) { .stub-page { padding: 3rem 1.2rem; } .stub-page__inner { padding: 2rem 1.5rem; } }
  `],
})
export class AiDataIntegration {}