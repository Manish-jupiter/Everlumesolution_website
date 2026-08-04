import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-api-first-microservices-architecture',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="breadcrumb-bar">
      <a routerLink="/">Home</a><span class="sep">></span>
      <a routerLink="/what-we-offer">What We Offer</a><span class="sep">></span>
      <a routerLink="/what-we-offer/digital-product-engineering">Digital Product Engineering</a><span class="sep">></span>
      <span class="current">API-First &amp; Microservices Architecture</span>
    </div>
    <section class="stub-page">
      <div class="stub-page__inner">
        <span class="stub-eyebrow">Digital Product Engineering</span>
        <h1 class="stub-title">API-First and <em>Microservices Architecture</em></h1>
        <p class="stub-lead">Build agile, scalable, and future-ready digital platforms with modern API-first and microservices architectures. Our approach enables organisations to create modular, loosely coupled applications that integrate seamlessly across enterprise systems, partner ecosystems, cloud platforms, and digital channels. By designing products around reusable services and well-defined APIs, we help businesses accelerate innovation, simplify integration, and respond more quickly to evolving market and customer demands.</p>
        <p class="stub-body">We architect digital solutions using API-first principles, ensuring that every capability is designed for interoperability, reusability, and secure integration from the outset. This enables applications to connect effortlessly with enterprise platforms, third-party services, mobile applications, customer portals, and emerging technologies, creating a flexible digital ecosystem that supports rapid business expansion and innovation.</p>
        <p class="stub-body">Our microservices architecture decomposes complex applications into independently deployable services that can be developed, tested, deployed, and scaled without impacting the broader application landscape. This modular approach improves engineering agility, enhances system resilience, reduces deployment risk, and enables development teams to deliver new features and enhancements more rapidly through continuous integration and delivery (CI/CD) practices.</p>
        <p class="stub-body">By embracing cloud-native design patterns, containerisation, service orchestration, API management, and event-driven architectures, organisations gain the flexibility to modernise legacy systems, accelerate digital transformation, and build products that evolve continuously alongside changing business requirements. Every solution is designed with enterprise-grade security, governance, observability, and performance to ensure reliability across mission-critical environments.</p>
        <p class="stub-body">The result is a highly scalable, resilient, and extensible digital architecture that accelerates product innovation, simplifies enterprise integration, reduces technical debt, and provides a robust foundation for sustainable business growth and continuous digital transformation.</p>
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
export class ApiFirstMicroservicesArchitecture {}
