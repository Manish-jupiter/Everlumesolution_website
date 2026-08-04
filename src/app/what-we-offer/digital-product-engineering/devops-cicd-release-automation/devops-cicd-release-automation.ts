import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-devops-cicd-release-automation',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="breadcrumb-bar">
      <a routerLink="/">Home</a><span class="sep">></span>
      <a routerLink="/what-we-offer">What We Offer</a><span class="sep">></span>
      <a routerLink="/what-we-offer/digital-product-engineering">Digital Product Engineering</a><span class="sep">></span>
      <span class="current">DevOps, CI/CD &amp; Release Automation</span>
    </div>
    <section class="stub-page">
      <div class="stub-page__inner">
        <span class="stub-eyebrow">Digital Product Engineering</span>
        <h1 class="stub-title">DevOps, CI/CD and <em>Release Automation</em></h1>
        <p class="stub-lead">Accelerate software delivery and improve engineering excellence with modern DevOps, Continuous Integration/Continuous Delivery (CI/CD), and Release Automation practices. Our services help organisations streamline the entire software delivery lifecycle by automating development, testing, deployment, and operational processes, enabling faster innovation, higher software quality, and more reliable product releases.</p>
        <p class="stub-body">We implement modern DevOps operating models that foster seamless collaboration between development, quality assurance, security, and operations teams, creating a unified engineering environment focused on speed, quality, and continuous improvement. By integrating automation throughout the software development lifecycle, we eliminate manual bottlenecks, reduce deployment risk, and enable teams to deliver new features and enhancements with greater confidence and predictability.</p>
        <p class="stub-body">Our CI/CD frameworks automate code integration, build management, testing, security validation, deployment, and release orchestration, ensuring that every software change is thoroughly validated before reaching production. Combined with Infrastructure as Code (IaC), automated environment provisioning, containerisation, and cloud-native deployment pipelines, our approach enables organisations to release software more frequently while maintaining stability, resilience, and operational consistency.</p>
        <p class="stub-body">Built on DevSecOps principles, our solutions embed security, compliance, quality assurance, and governance throughout the delivery pipeline. Automated policy enforcement, vulnerability scanning, code quality analysis, release controls, and continuous monitoring ensure that applications are delivered securely, reliably, and in accordance with enterprise standards and regulatory requirements.</p>
        <p class="stub-body">The result is a highly efficient, automated software delivery ecosystem that accelerates time-to-market, improves engineering productivity, enhances software quality, reduces operational risk, and enables organisations to continuously deliver innovative digital products with speed, confidence, and enterprise-scale reliability.</p>
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
export class DevOpsCicdReleaseAutomation {}