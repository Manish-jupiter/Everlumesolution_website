import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-monitoring-optimization-finops-support',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="dp-sub-bc">
      <a routerLink="/">Home</a><span class="sep">></span>
      <a routerLink="/what-we-offer">What We Offer</a><span class="sep">></span>
      <a routerLink="/what-we-offer/cloud-engineering">Cloud Engineering</a><span class="sep">></span>
      <span class="cur">Monitoring, Optimisation &amp; FinOps Support</span>
    </div>
    <header class="dp-sub-hdr">
      <div class="dp-sub-hdr__grid"></div><div class="dp-sub-hdr__glow"></div>
      <div class="dp-sub-hdr__inner">
        <div class="dp-sub-hdr__badge"><i class="ph ph-chart-line-up"></i><span>Cloud Engineering</span></div>
        <h1 class="dp-sub-hdr__title">Monitoring, Optimisation, and <em>FinOps Support</em></h1>
      </div>
    </header>
    <section class="dp-sub-body">
      <div class="dp-sub-body__inner">
        <p>Maximise the performance, reliability, and cost efficiency of your cloud environment through continuous monitoring, intelligent optimisation, and FinOps-driven financial governance. Our Monitoring, Optimisation, and FinOps services help organisations gain complete visibility into their cloud operations, ensuring cloud resources deliver optimal business value while maintaining operational excellence and financial discipline.</p>
        <p>We implement comprehensive monitoring and observability capabilities that provide real-time insights into infrastructure health, application performance, resource utilisation, availability, and service dependencies. Advanced analytics and proactive alerting enable organisations to identify performance bottlenecks, detect operational anomalies, and resolve issues before they impact business operations or customer experience.</p>
        <p>Beyond operational monitoring, we continuously optimise cloud environments to improve performance, scalability, resilience, and resource utilisation. By analysing workload characteristics, infrastructure configurations, and application behaviour, we identify opportunities to enhance efficiency, automate resource management, optimise capacity, and improve overall cloud performance while maintaining service reliability.</p>
        <p>Our FinOps services introduce a disciplined, data-driven approach to cloud financial management. We help organisations establish governance frameworks for cloud spending through continuous cost monitoring, usage analytics, budget management, resource rightsizing, forecasting, chargeback and showback models, and cloud cost optimisation strategies. This enables business and technology teams to make informed investment decisions, maximise resource utilisation, and align cloud expenditure with business priorities.</p>
        <p>Built on automation, governance, and cloud-native best practices, our approach integrates observability, performance engineering, cost optimisation, policy-driven governance, and continuous improvement into a unified operating model. This ensures cloud environments remain resilient, secure, efficient, and financially sustainable as business requirements evolve.</p>
        <p>The result is a highly optimised cloud environment that delivers exceptional performance, operational resilience, and cost efficiency — empowering organisations to maximise the return on their cloud investments while supporting continuous innovation, business agility, and sustainable growth.</p>
      </div>
    </section>
    <section class="dp-sub-cta">
      <a routerLink="/what-we-offer/cloud-engineering" class="dp-sub-cta__back"><i class="ph ph-arrow-left"></i> Back to Cloud Engineering</a>
      <a routerLink="/contact-us" class="dp-sub-cta__btn">Talk to an Expert <i class="ph ph-arrow-right"></i></a>
    </section>
  `,
  styles: [`
    :host { display: block; font-family: 'DM Sans', system-ui, sans-serif; }
    .dp-sub-bc { background: #142d6b; padding: 0.55rem 3rem; display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap; }
    .dp-sub-bc a, .dp-sub-bc span { color: rgba(255,255,255,0.6); font-size: 0.8rem; font-weight: 500; text-decoration: none; }
    .dp-sub-bc a:hover { color: #fff; } .dp-sub-bc .sep { color: rgba(255,255,255,0.25); } .dp-sub-bc .cur { color: #E87722; font-weight: 600; }
    .dp-sub-hdr { background: linear-gradient(135deg,#060d1f 0%,#0f1f4a 60%,#1B3A8F 100%); padding: 5rem 3rem; text-align: center; position: relative; overflow: hidden; }
    .dp-sub-hdr__grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px); background-size: 50px 50px; pointer-events: none; }
    .dp-sub-hdr__glow { position: absolute; width: 400px; height: 400px; border-radius: 50%; background: radial-gradient(circle,rgba(232,119,34,0.14) 0%,transparent 70%); top: -120px; right: -80px; pointer-events: none; }
    .dp-sub-hdr__inner { position: relative; z-index: 2; max-width: 820px; margin: 0 auto; }
    .dp-sub-hdr__badge { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.1); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.18); border-radius: 999px; padding: 0.4rem 1.2rem; margin-bottom: 1.8rem; }
    .dp-sub-hdr__badge i.ph { font-size: 1rem; color: #E87722; line-height: 1; }
    .dp-sub-hdr__badge span { color: rgba(255,255,255,0.85); font-size: 0.78rem; font-weight: 600; letter-spacing: 0.07em; text-transform: uppercase; }
    .dp-sub-hdr__title { font-family: "DM Serif Display", serif; font-size: clamp(2rem,4vw,3rem); color: #fff; font-weight: 400; line-height: 1.1; margin: 0; }
    .dp-sub-hdr__title em { font-style: italic; color: #E87722; }
    .dp-sub-body { padding: 5rem 3rem; background: #f5f5f3; }
    .dp-sub-body__inner { max-width: 900px; margin: 0 auto; background: #fff; border-radius: 24px; padding: 3.5rem; box-shadow: 0 8px 40px rgba(27,58,143,0.07); border: 1px solid rgba(27,58,143,0.06); position: relative; overflow: hidden; }
    .dp-sub-body__inner::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg,#1B3A8F,#E87722); }
    .dp-sub-body__inner p { font-size: 1rem; color: #444; line-height: 1.85; margin-bottom: 1.4rem; }
    .dp-sub-body__inner p:last-child { margin-bottom: 0; }
    .dp-sub-cta { padding: 2.5rem 3rem; background: linear-gradient(135deg,#142d6b,#1B3A8F); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
    .dp-sub-cta__back { display: inline-flex; align-items: center; gap: 0.4rem; color: rgba(255,255,255,0.75); font-size: 0.88rem; font-weight: 600; text-decoration: none; transition: color 0.25s; }
    .dp-sub-cta__back:hover { color: #fff; }
    .dp-sub-cta__btn { display: inline-flex; align-items: center; gap: 0.5rem; background: #E87722; color: #fff; font-weight: 700; font-size: 0.9rem; padding: 0.75rem 1.8rem; border-radius: 999px; text-decoration: none; transition: transform 0.3s, box-shadow 0.3s; }
    .dp-sub-cta__btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(232,119,34,0.4); color: #fff; }
    @media (max-width: 768px) { .dp-sub-bc { padding: 0.55rem 1rem; margin-top: 58px; } .dp-sub-hdr { padding: 4rem 1.5rem; } .dp-sub-body { padding: 3rem 1.2rem; } .dp-sub-body__inner { padding: 2rem 1.5rem; } .dp-sub-cta { padding: 2rem 1.5rem; flex-direction: column; align-items: flex-start; } }
  `],
})
export class MonitoringOptimizationFinopsSupport {}

