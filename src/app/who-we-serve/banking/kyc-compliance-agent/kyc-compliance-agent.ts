import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-kyc-compliance-agent',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="breadcrumb-bar">
      <a routerLink="/">Home</a><span class="sep">></span>
      <a routerLink="/who-we-serve">Who We Serve</a><span class="sep">></span>
      <a routerLink="/who-we-serve/banking/banking-solutions">Our Solutions</a><span class="sep">></span>
      <span class="current">KYC and Compliance Agent</span>
    </div>

    <header class="ra-header">
      <div class="ra-header__bg"><img src="Images/image_019.jpg" alt="KYC compliance team" /><div class="ra-header__overlay"></div></div>
      <div class="ra-header__glow-1"></div>
      <div class="ra-header__glow-2"></div>
      <div class="ra-header__grid-bg"></div>
      <div class="ra-header__inner">
        <div class="ra-header__badge">
          <i class="ph ph-identification-card"></i>
          <span>Agentic AI · Banking</span>
        </div>
        <h1 class="ra-header__title">KYC and <em>Compliance Agent</em></h1>
        <p class="ra-header__sub">Automates customer onboarding, Know Your Customer (KYC), Anti-Money Laundering (AML), and ongoing compliance workflows to accelerate onboarding while maintaining the highest standards of governance, transparency, and regulatory compliance.</p>
        <a routerLink="/contact-us" class="ra-header__cta">Talk to an Expert <i class="ph ph-arrow-right"></i></a>
      </div>
    </header>

    <section class="ra-overview">
      <div class="ra-overview__inner">
        <span class="ra-eyebrow">Overview</span>
        <div class="ra-overview__body">
          <p>Streamline regulatory compliance with an intelligent <strong>KYC and Compliance Agent</strong> that automates customer onboarding, Know Your Customer (KYC), Anti-Money Laundering (AML), and ongoing compliance workflows. Powered by Agentic AI, the solution orchestrates regulatory checks, document verification, risk assessments, and exception management across multiple systems, enabling banks to accelerate onboarding while maintaining the highest standards of governance, transparency, and regulatory compliance.</p>
          <p>The solution integrates with core banking platforms, customer onboarding systems, identity verification services, AML screening solutions, sanctions databases, customer relationship management (CRM) platforms, and document repositories to create a unified compliance orchestration layer. By combining customer information, regulatory requirements, institutional policies, and external verification sources, the agent automatically validates customer data, identifies missing or inconsistent information, coordinates compliance workflows, and routes complex or high-risk cases to compliance specialists for review. Every action is fully documented to ensure complete traceability throughout the customer lifecycle.</p>
        </div>
      </div>
    </section>

    <section class="ra-caps">
      <div class="ra-caps__ring"></div>
      <div class="ra-caps__inner">
        <div class="ra-caps__head" data-reveal>
          <span class="ra-eyebrow">Core Capabilities</span>
          <h2 class="ra-section-heading">What the agent <em>does</em></h2>
        </div>
        <div class="ra-caps__grid">
          <div class="ra-cap-item" data-reveal><span class="ra-cap-item__num">01</span><p>Collect, validate, and verify customer identity and KYC documentation.</p></div>
          <div class="ra-cap-item" data-reveal><span class="ra-cap-item__num">02</span><p>Perform onboarding checks against regulatory requirements, internal policies, and risk frameworks.</p></div>
          <div class="ra-cap-item" data-reveal><span class="ra-cap-item__num">03</span><p>Screen customers against AML watchlists, sanctions lists, politically exposed persons (PEP) databases, and adverse media sources.</p></div>
          <div class="ra-cap-item" data-reveal><span class="ra-cap-item__num">04</span><p>Detect incomplete, inconsistent, or potentially fraudulent documentation and customer information.</p></div>
          <div class="ra-cap-item" data-reveal><span class="ra-cap-item__num">05</span><p>Route exceptions and high-risk cases to compliance officers for investigation and approval.</p></div>
          <div class="ra-cap-item" data-reveal><span class="ra-cap-item__num">06</span><p>Coordinate AML review, enhanced due diligence (EDD), and ongoing customer monitoring workflows.</p></div>
          <div class="ra-cap-item" data-reveal><span class="ra-cap-item__num">07</span><p>Maintain comprehensive audit trails, compliance records, and decision logs for regulatory reporting and internal governance.</p></div>
          <div class="ra-cap-item" data-reveal><span class="ra-cap-item__num">08</span><p>Continuously monitor customer information and trigger periodic KYC reviews based on regulatory and institutional policies.</p></div>
        </div>
      </div>
    </section>

    <section class="ra-why">
      <div class="ra-why__grid-bg"></div>
      <div class="ra-why__glow"></div>
      <div class="ra-why__inner" data-reveal>
        <span class="ra-eyebrow ra-eyebrow--light">Why It Matters</span>
        <h2 class="ra-section-heading ra-section-heading--light">Why intelligent compliance management matters</h2>
        <p>Financial institutions operate within an increasingly complex regulatory environment where compliance accuracy, auditability, and operational efficiency are critical. Traditional KYC and AML processes often rely on fragmented systems, repetitive manual reviews, and extensive document handling, resulting in slower onboarding, increased operational costs, and inconsistent compliance outcomes.</p>
        <p>The KYC and Compliance Agent transforms compliance operations by combining intelligent document processing, AI-driven validation, workflow orchestration, and regulatory decision support into a single operational framework. Rather than replacing compliance professionals, the solution automates routine verification tasks, consolidates customer information, and provides contextual recommendations that enable compliance teams to focus on higher-risk investigations and regulatory judgement.</p>
      </div>
    </section>

    <section class="ra-value">
      <div class="ra-value__ring"></div>
      <div class="ra-value__inner">
        <div class="ra-value__head" data-reveal>
          <span class="ra-eyebrow">Business Value</span>
          <h2 class="ra-section-heading">Measurable <em>business outcomes</em></h2>
        </div>
        <div class="ra-value__grid">
          <div class="ra-val-card" data-reveal><i class="ph ph-arrows-clockwise"></i><span>Accelerate customer onboarding and regulatory review cycles.</span></div>
          <div class="ra-val-card" data-reveal><i class="ph ph-robot"></i><span>Reduce manual effort across KYC, AML, and compliance operations.</span></div>
          <div class="ra-val-card" data-reveal><i class="ph ph-check-circle"></i><span>Improve consistency and accuracy of compliance assessments.</span></div>
          <div class="ra-val-card" data-reveal><i class="ph ph-scales"></i><span>Strengthen audit readiness through complete process traceability and documentation.</span></div>
          <div class="ra-val-card" data-reveal><i class="ph ph-shield-check"></i><span>Enhance regulatory compliance and reduce operational risk.</span></div>
          <div class="ra-val-card" data-reveal><i class="ph ph-trend-up"></i><span>Increase productivity of compliance and onboarding teams.</span></div>
          <div class="ra-val-card" data-reveal><i class="ph ph-user-plus"></i><span>Deliver a faster, more seamless customer onboarding experience without compromising governance.</span></div>
        </div>
      </div>
    </section>

    <section class="ra-governance">
      <div class="ra-governance__inner" data-reveal>
        <div class="ra-governance__icon-wrap"><i class="ph ph-lock-simple"></i></div>
        <h2 class="ra-section-heading">Governance and <em>Control</em></h2>
        <p>The KYC and Compliance Agent is built on a governance-first framework designed to meet the stringent requirements of regulated financial institutions. Explainable AI, policy-driven decisioning, role-based access controls, segregation of duties, human-in-the-loop approvals for high-risk cases, comprehensive audit trails, immutable decision logs, and continuous compliance monitoring ensure every action remains transparent, secure, and fully accountable. This balanced approach enables banks to modernise KYC and compliance operations while maintaining complete regulatory oversight, protecting sensitive customer information, and demonstrating compliance with evolving regulatory requirements.</p>
      </div>
    </section>

    <section class="ra-back-cta">
      <a routerLink="/who-we-serve/banking/banking-solutions" class="ra-back-cta__link"><i class="ph ph-arrow-left"></i> Back to Solutions</a>
      <a routerLink="/contact-us" class="ra-back-cta__btn">Schedule a Consultation <i class="ph ph-arrow-right"></i></a>
    </section>
  `,
  styles: [`
    :host { display: block; font-family: 'DM Sans', system-ui, sans-serif; --blue:#1B3A8F; --orange:#E87722; --dark:#111; --bg:#f5f5f3; --mid:#555; --teal:#1B3A8F; --teal-dark:#142d6b; }
    .breadcrumb-bar { background: var(--teal-dark); padding: 0.55rem 3rem; display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap; }
    .breadcrumb-bar a, .breadcrumb-bar span { color: rgba(255,255,255,0.6); font-size: 0.8rem; font-weight: 500; text-decoration: none; }
    .breadcrumb-bar a:hover { color: #fff; } .breadcrumb-bar .sep { color: rgba(255,255,255,0.25); } .breadcrumb-bar .current { color: var(--orange); font-weight: 600; }
    @media (max-width: 768px) { .breadcrumb-bar { padding: 0.55rem 1rem; margin-top: 58px; } }
    .ra-header { padding: 5rem 3rem; position: relative; overflow: hidden; text-align: center; }    .ra-header__bg { position: absolute; inset: 0; z-index: 0; }    .ra-header__bg img { width: 100%; height: 100%; object-fit: cover; }    .ra-header__overlay { position: absolute; inset: 0; background: linear-gradient(135deg,rgba(6,13,31,0.90) 0%,rgba(15,31,74,0.82) 60%,rgba(27,58,143,0.70) 100%); }
    .ra-header__grid-bg { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px); background-size: 50px 50px; pointer-events: none; }
    .ra-header__glow-1 { position: absolute; width: 450px; height: 450px; border-radius: 50%; background: radial-gradient(circle,rgba(232,119,34,0.14) 0%,transparent 70%); top: -150px; right: -100px; pointer-events: none; }
    .ra-header__glow-2 { position: absolute; width: 300px; height: 300px; border-radius: 50%; background: radial-gradient(circle,rgba(123,163,255,0.1) 0%,transparent 70%); bottom: -100px; left: -60px; pointer-events: none; }
    .ra-header__inner { position: relative; z-index: 2; max-width: 820px; margin: 0 auto; }
    .ra-header__badge { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.1); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.18); border-radius: 999px; padding: 0.4rem 1.2rem; margin-bottom: 1.8rem; }
    .ra-header__badge i { font-size: 1rem; color: var(--orange); }
    .ra-header__badge span { color: rgba(255,255,255,0.85); font-size: 0.78rem; font-weight: 600; letter-spacing: 0.07em; text-transform: uppercase; }
    .ra-header__title { font-family: "DM Serif Display", serif; font-size: clamp(2rem,4vw,3rem); color: #fff; font-weight: 400; line-height: 1.1; margin-bottom: 1.4rem; }
    .ra-header__title em { font-style: italic; color: var(--orange); }
    .ra-header__sub { font-size: 1rem; color: rgba(255,255,255,0.72); line-height: 1.75; max-width: 680px; margin: 0 auto 2rem; }
    .ra-header__cta { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--orange); color: #fff; font-weight: 700; font-size: 0.9rem; padding: 0.75rem 1.8rem; border-radius: 999px; text-decoration: none; transition: transform 0.3s, box-shadow 0.3s; }
    .ra-header__cta:hover { transform: translateY(-3px); box-shadow: 0 10px 28px rgba(232,119,34,0.4); color: #fff; }
    @media (max-width: 768px) { .ra-header { padding: 4rem 1.5rem; } }
    .ra-eyebrow { display: inline-block; color: var(--teal); font-size: 0.78rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.9rem; }
    .ra-eyebrow--light { color: var(--orange); }
    .ra-section-heading { font-family: "DM Serif Display", serif; font-size: clamp(1.6rem,3vw,2.2rem); color: var(--dark); font-weight: 400; line-height: 1.2; margin-bottom: 1.5rem; }
    .ra-section-heading em { color: var(--orange); font-style: italic; }
    .ra-section-heading--light { color: #fff; }
    .ra-overview { padding: 5rem 3rem; background: var(--bg); }
    .ra-overview__inner { max-width: 900px; margin: 0 auto; }
    .ra-overview__body p { font-size: 1rem; color: #444; line-height: 1.85; margin-bottom: 1.2rem; }
    .ra-overview__body p:last-child { margin-bottom: 0; }
    @media (max-width: 768px) { .ra-overview { padding: 3.5rem 1.5rem; } }
    .ra-caps { padding: 6rem 3rem; background: #fff; position: relative; overflow: hidden; }
    .ra-caps__ring { position: absolute; top: -80px; right: -80px; width: 300px; height: 300px; border: 1.5px solid rgba(27,58,143,0.06); border-radius: 50%; animation: spinSlow 40s linear infinite; pointer-events: none; }
    .ra-caps__inner { max-width: 1100px; margin: 0 auto; }
    .ra-caps__head { margin-bottom: 3rem; }
    .ra-caps__grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; }
    .ra-cap-item { display: flex; align-items: flex-start; gap: 1.2rem; background: var(--bg); border-radius: 16px; padding: 1.4rem 1.6rem; border: 1px solid rgba(27,58,143,0.06); transition: transform 0.3s, box-shadow 0.3s; }
    .ra-cap-item:hover { transform: translateX(6px); box-shadow: 0 6px 24px rgba(27,58,143,0.08); }
    .ra-cap-item__num { font-family: "DM Serif Display", serif; font-size: 1.4rem; color: var(--orange); font-weight: 400; flex-shrink: 0; line-height: 1.4; min-width: 2rem; }
    .ra-cap-item p { font-size: 0.92rem; color: #444; line-height: 1.7; margin: 0; }
    @media (max-width: 768px) { .ra-caps { padding: 3.5rem 1.5rem; } .ra-caps__grid { grid-template-columns: 1fr; } }
    .ra-why { padding: 5rem 3rem; background: linear-gradient(135deg,#060d1f 0%,#0a1635 40%,#0f1f4a 100%); position: relative; overflow: hidden; }
    .ra-why__grid-bg { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px); background-size: 60px 60px; pointer-events: none; }
    .ra-why__glow { position: absolute; width: 400px; height: 400px; border-radius: 50%; background: radial-gradient(circle,rgba(232,119,34,0.12) 0%,transparent 70%); top: -80px; right: -80px; pointer-events: none; }
    .ra-why__inner { max-width: 900px; margin: 0 auto; position: relative; z-index: 2; }
    .ra-why__inner p { font-size: 1rem; color: rgba(255,255,255,0.72); line-height: 1.85; margin-bottom: 1.2rem; }
    .ra-why__inner p:last-child { margin-bottom: 0; }
    @media (max-width: 768px) { .ra-why { padding: 3.5rem 1.5rem; } }
    .ra-value { padding: 6rem 3rem; background: var(--bg); position: relative; overflow: hidden; }
    .ra-value__ring { position: absolute; bottom: -60px; left: -60px; width: 200px; height: 200px; border: 1.5px dashed rgba(232,119,34,0.1); border-radius: 50%; animation: spinSlow 30s linear infinite reverse; pointer-events: none; }
    .ra-value__inner { max-width: 1100px; margin: 0 auto; position: relative; z-index: 1; }
    .ra-value__head { margin-bottom: 3rem; }
    .ra-value__grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.2rem; }
    .ra-val-card { background: #fff; border-radius: 16px; padding: 1.5rem 1.6rem; display: flex; align-items: flex-start; gap: 1rem; border: 1px solid rgba(27,58,143,0.06); transition: transform 0.3s, box-shadow 0.3s; }
    .ra-val-card:hover { transform: translateY(-5px); box-shadow: 0 12px 36px rgba(27,58,143,0.1); }
    .ra-val-card i { font-size: 1.3rem; color: var(--orange); flex-shrink: 0; margin-top: 0.1rem; }
    .ra-val-card span { font-size: 0.9rem; color: #333; line-height: 1.65; font-weight: 500; }
    @media (max-width: 768px) { .ra-value { padding: 3.5rem 1.5rem; } }
    .ra-governance { padding: 5rem 3rem; background: linear-gradient(180deg,var(--bg) 0%,#eef0f7 100%); }
    .ra-governance__inner { max-width: 900px; margin: 0 auto; background: #fff; border-radius: 24px; padding: 3rem 3.5rem; box-shadow: 0 10px 40px rgba(27,58,143,0.08); border: 1px solid rgba(27,58,143,0.06); position: relative; overflow: hidden; }
    .ra-governance__inner::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg,var(--blue),var(--orange)); }
    .ra-governance__icon-wrap { width: 56px; height: 56px; margin-bottom: 1.5rem; background: linear-gradient(135deg,rgba(27,58,143,0.08),rgba(232,119,34,0.06)); border-radius: 14px; display: flex; align-items: center; justify-content: center; }
    .ra-governance__icon-wrap i { font-size: 1.4rem; color: var(--teal); }
    .ra-governance p { font-size: 0.98rem; color: #444; line-height: 1.85; }
    @media (max-width: 768px) { .ra-governance { padding: 3rem 1.2rem; } .ra-governance__inner { padding: 2rem 1.5rem; } }
    .ra-back-cta { padding: 2.5rem 3rem; background: linear-gradient(135deg,#142d6b,#1B3A8F); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
    .ra-back-cta__link { display: inline-flex; align-items: center; gap: 0.4rem; color: rgba(255,255,255,0.75); font-size: 0.88rem; font-weight: 600; text-decoration: none; transition: color 0.25s; }
    .ra-back-cta__link:hover { color: #fff; }
    .ra-back-cta__btn { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--orange); color: #fff; font-weight: 700; font-size: 0.9rem; padding: 0.75rem 1.8rem; border-radius: 999px; text-decoration: none; transition: transform 0.3s, box-shadow 0.3s; }
    .ra-back-cta__btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(232,119,34,0.4); color: #fff; }
    @media (max-width: 768px) { .ra-back-cta { padding: 2rem 1.5rem; flex-direction: column; align-items: flex-start; } }
    @keyframes spinSlow { to { transform: rotate(360deg); } }
    [data-reveal] { opacity: 0; transform: translateY(36px); transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1); }
    [data-reveal].is-visible { opacity: 1; transform: translateY(0); }
  `]
})
export class KycComplianceAgent implements AfterViewInit {
  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); observer.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
  }
}
