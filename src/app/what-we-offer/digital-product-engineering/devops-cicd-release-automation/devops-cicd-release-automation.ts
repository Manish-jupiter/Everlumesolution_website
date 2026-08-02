import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-devops-cicd-release-automation',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="dp-sub-bc">
      <a routerLink="/">Home</a><span class="sep">›</span>
      <a routerLink="/what-we-offer">What We Offer</a><span class="sep">›</span>
      <a routerLink="/what-we-offer/digital-product-engineering">Digital Product Engineering</a><span class="sep">›</span>
      <span class="cur">DevOps, CI/CD &amp; Release Automation</span>
    </div>
    <header class="dp-sub-hdr">
      <div class="dp-sub-hdr__grid"></div><div class="dp-sub-hdr__glow"></div>
      <div class="dp-sub-hdr__inner">
        <div class="dp-sub-hdr__badge"><i class="ph ph-git-branch"></i><span>Digital Product Engineering</span></div>
        <h1 class="dp-sub-hdr__title">DevOps, CI/CD, and <em>Release Automation</em></h1>
      </div>
    </header>
    <section class="dp-sub-body">
      <div class="dp-sub-body__inner">
        <p>Accelerate software delivery, improve product quality, and increase engineering efficiency with DevOps, CI/CD, and Release Automation practices that transform how organisations build, test, and deploy digital products. Our DevOps services help organisations establish the engineering culture, toolchain, and automation capabilities required to deliver software faster, with greater reliability, consistency, and confidence across development, staging, and production environments.</p>
        <p>We help organisations design and implement a DevOps operating model that integrates development, testing, security, and operations into a cohesive, automated delivery workflow. By breaking down silos between engineering teams, standardising tooling and processes, and embedding automation throughout the software development lifecycle, we enable organisations to increase deployment frequency, reduce lead time, improve change success rates, and accelerate time-to-market for new features and capabilities.</p>
        <p>Our CI/CD implementation services help organisations establish automated build, test, and deployment pipelines that enforce quality gates, reduce manual intervention, and enable consistent, repeatable releases across all environments. We design pipeline architectures that support continuous integration, automated testing, infrastructure provisioning, environment management, and progressive delivery strategies, enabling engineering teams to release with confidence at any time.</p>
        <p>We embed DevSecOps principles throughout the delivery pipeline, integrating automated security scanning, vulnerability assessment, compliance checks, and policy enforcement into every stage of the release process. This ensures security and governance requirements are met without sacrificing delivery speed, enabling organisations to maintain enterprise-grade security standards in high-velocity engineering environments.</p>
        <p>The result is a high-performance engineering delivery capability that reduces deployment risk, accelerates feature delivery, improves engineering productivity, and provides the automation foundation required to scale digital product development across teams, technologies, and environments.</p>
      </div>
    </section>
    <section class="dp-sub-cta">
      <a routerLink="/what-we-offer/digital-product-engineering" class="dp-sub-cta__back"><i class="ph ph-arrow-left"></i> Back to Digital Product Engineering</a>
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
export class DevOpsCicdReleaseAutomation {}
