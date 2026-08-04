import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cloud-native-application-development',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="breadcrumb-bar">
      <a routerLink="/">Home</a><span class="sep">></span>
      <a routerLink="/what-we-offer">What We Offer</a><span class="sep">></span>
      <a routerLink="/what-we-offer/digital-product-engineering">Digital Product Engineering</a><span class="sep">></span>
      <span class="current">Cloud-Native Application Development</span>
    </div>
    <section class="stub-page">
      <div class="stub-page__inner">
        <span class="stub-eyebrow">Digital Product Engineering</span>
        <h1 class="stub-title">Cloud-Native Application <em>Development</em></h1>
        <p class="stub-lead">Build modern, resilient, and scalable applications designed to thrive in today's cloud-first digital landscape. Our Cloud-Native Application Development services help organisations accelerate innovation by leveraging cloud-native architectures, microservices, containers, serverless computing, and DevSecOps practices to deliver high-performing applications that are secure, flexible, and built for continuous evolution.</p>
        <p class="stub-body">We design and develop cloud-native applications that fully utilise the capabilities of leading cloud platforms, enabling organisations to improve scalability, increase operational resilience, optimise infrastructure costs, and accelerate the delivery of new features and services. Whether developing new digital products or modernising legacy applications, our engineering approach ensures solutions are architected for agility, performance, and long-term sustainability.</p>
        <p class="stub-body">Our cloud-native development methodology incorporates modern architectural patterns, API-first design, event-driven services, containerisation, Kubernetes orchestration, Infrastructure as Code (IaC), automated testing, and continuous integration and delivery (CI/CD). This enables development teams to release software more frequently, respond rapidly to changing business requirements, and maintain high levels of availability and reliability across distributed environments.</p>
        <p class="stub-body">By embracing cloud-native engineering principles, organisations gain the flexibility to scale applications dynamically, integrate seamlessly with enterprise systems, and continuously innovate without the constraints of traditional infrastructure. Every solution is built with enterprise-grade security, observability, resilience, and governance to ensure reliable operations in mission-critical environments.</p>
        <p class="stub-body">The result is a future-ready digital platform that delivers superior performance, accelerated time-to-market, operational efficiency, and the scalability required to support business growth, evolving customer expectations, and continuous innovation.</p>
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
export class CloudNativeApplicationDevelopment {}

