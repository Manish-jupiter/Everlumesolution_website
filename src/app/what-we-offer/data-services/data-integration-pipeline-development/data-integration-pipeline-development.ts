import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-data-integration-pipeline-development',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="dp-sub-bc">
      <a routerLink="/">Home</a><span class="sep">›</span>
      <a routerLink="/what-we-offer">What We Offer</a><span class="sep">›</span>
      <a routerLink="/what-we-offer/data-services">Data Services</a><span class="sep">›</span>
      <span class="cur">Data Integration &amp; Pipeline Development</span>
    </div>
    <header class="dp-sub-hdr">
      <div class="dp-sub-hdr__grid"></div><div class="dp-sub-hdr__glow"></div>
      <div class="dp-sub-hdr__inner">
        <div class="dp-sub-hdr__badge"><i class="ph ph-plugs-connected"></i><span>Data Services</span></div>
        <h1 class="dp-sub-hdr__title">Data Integration and <em>Pipeline Development</em></h1>
      </div>
    </header>
    <section class="dp-sub-body"><div class="dp-sub-body__inner">
      <p>Unlock the full value of enterprise data with modern Data Integration and Pipeline Development services that connect, transform, and deliver information seamlessly across your organisation. We help businesses build scalable, reliable, and high-performing data pipelines that ensure trusted data flows efficiently between applications, platforms, and analytics environments, enabling faster decision-making, automation, and AI-driven innovation.</p>
      <p>We design and implement robust data integration frameworks that connect diverse data sources, including enterprise applications, cloud platforms, databases, SaaS solutions, IoT devices, and third-party systems. Our solutions support structured, semi-structured, and unstructured data while accommodating both batch and real-time processing to meet the operational and analytical requirements of modern enterprises.</p>
      <p>Our engineering approach leverages cloud-native data platforms, API-based integration, event-driven architectures, streaming technologies, and automated orchestration to create resilient and scalable data pipelines. By eliminating manual data movement, reducing latency, and ensuring consistent information flow across systems, we enable organisations to improve operational efficiency, enhance data quality, and accelerate access to business-critical insights.</p>
      <p>Built on governance-first principles, our integration services incorporate comprehensive data validation, transformation, metadata management, monitoring, security, and error-handling capabilities to ensure data remains accurate, traceable, and compliant throughout its lifecycle. Continuous monitoring and automated pipeline management provide complete visibility into data movement while ensuring reliable performance and rapid issue resolution.</p>
      <p>The result is a modern, intelligent data integration ecosystem that delivers trusted information to the right people, applications, and business processes at the right time, reducing data fragmentation, improving enterprise agility, and providing the scalable foundation required for analytics, Artificial Intelligence, automation, and digital transformation initiatives.</p>
    </div></section>
    <section class="dp-sub-cta">
      <a routerLink="/what-we-offer/data-services" class="dp-sub-cta__back"><i class="ph ph-arrow-left"></i> Back to Data Services</a>
      <a routerLink="/contact-us" class="dp-sub-cta__btn">Talk to an Expert <i class="ph ph-arrow-right"></i></a>
    </section>
  `,
  styles: [`
    :host { display: block; font-family: 'DM Sans', system-ui, sans-serif; }
    .dp-sub-bc { background:#142d6b; padding:.55rem 3rem; display:flex; gap:.4rem; flex-wrap:wrap; }
    .dp-sub-bc a,.dp-sub-bc span { color:rgba(255,255,255,.65); font-size:.8rem; text-decoration:none; }
    .dp-sub-bc .cur { color:#E87722; font-weight:600; }
    .dp-sub-hdr { background:linear-gradient(135deg,#060d1f,#1B3A8F); padding:5rem 3rem; text-align:center; position:relative; overflow:hidden; }
    .dp-sub-hdr__grid { position:absolute; inset:0; background-image:linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px); background-size:50px 50px; }
    .dp-sub-hdr__glow { position:absolute; width:400px; height:400px; border-radius:50%; background:radial-gradient(circle,rgba(232,119,34,.14),transparent 70%); top:-120px; right:-80px; }
    .dp-sub-hdr__inner { position:relative; z-index:2; }
    .dp-sub-hdr__badge { display:inline-flex; gap:.5rem; background:rgba(255,255,255,.1); border:1px solid rgba(255,255,255,.18); border-radius:999px; padding:.4rem 1.2rem; margin-bottom:1.8rem; }
    .dp-sub-hdr__badge i.ph { color:#E87722; }
    .dp-sub-hdr__badge span { color:rgba(255,255,255,.85); font-size:.78rem; text-transform:uppercase; letter-spacing:.07em; }
    .dp-sub-hdr__title { font-family:"DM Serif Display",serif; font-size:clamp(2rem,4vw,3rem); color:#fff; font-weight:400; }
    .dp-sub-hdr__title em { color:#E87722; font-style:italic; }
    .dp-sub-body { padding:5rem 3rem; background:#f5f5f3; }
    .dp-sub-body__inner { max-width:900px; margin:0 auto; background:#fff; border-radius:24px; padding:3.5rem; position:relative; border:1px solid rgba(27,58,143,.06); box-shadow:0 8px 40px rgba(27,58,143,.07); }
    .dp-sub-body__inner::before { content:""; position:absolute; top:0; left:0; width:100%; height:4px; background:linear-gradient(90deg,#1B3A8F,#E87722); }
    .dp-sub-body__inner p { font-size:1rem; color:#444; line-height:1.85; margin-bottom:1.4rem; }
    .dp-sub-cta { padding:2.5rem 3rem; background:linear-gradient(135deg,#142d6b,#1B3A8F); display:flex; justify-content:space-between; gap:1rem; flex-wrap:wrap; }
    .dp-sub-cta__back { color:rgba(255,255,255,.75); text-decoration:none; font-weight:600; }
    .dp-sub-cta__btn { background:#E87722; color:#fff; text-decoration:none; font-weight:700; padding:.75rem 1.8rem; border-radius:999px; }
  `],
})
export class DataIntegrationPipelineDevelopment {}
