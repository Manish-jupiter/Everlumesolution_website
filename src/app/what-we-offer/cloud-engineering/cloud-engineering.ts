import { Component, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cloud-engineering',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- BREADCRUMB -->
    <div class="breadcrumb-bar">
      <a routerLink="/">Home</a><span class="sep">></span>
      <a routerLink="/what-we-offer">What We Offer</a><span class="sep">></span>
      <span class="current">Cloud Engineering</span>
    </div>

    <!-- HERO -->
    <section class="ce-hero">
      <div class="ce-hero__bg">
        <img src="Images/image_003.jpg" alt="Cloud Engineering" />
        <div class="ce-hero__overlay"></div>
      </div>
      <div class="ce-hero__particles" id="ce-particles"></div>
      <div class="ce-hero__abstract-ring"></div>
      <div class="ce-hero__abstract-blob"></div>
      <div class="ce-hero__content" data-reveal>
        <div class="ce-hero__badge"><span class="ce-hero__badge-dot"></span><span>What We Offer</span></div>
        <h1 class="ce-hero__heading">Cloud<br/><em>Engineering</em></h1>
        <p class="ce-hero__sub">Enterprise-grade cloud architecture, migration, platform engineering, and DevSecOps to build resilient, scalable, and intelligent cloud ecosystems.</p>
        <a href="#ce-overview" class="ce-hero__cta">Explore Capabilities
          <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
    </section>

    <!-- OVERVIEW + WHAT WE DELIVER -->
    <section class="ce-overview" id="ce-overview">
      <div class="ce-overview__blob"></div>
      <div class="ce-overview__dots"></div>
      <div class="ce-overview__grid">

        <div class="ce-overview__text" data-reveal-left>
          <span class="ce-eyebrow">Overview</span>
          <h2 class="ce-section-heading">Cloud <em>Engineering</em></h2>
          <p>Accelerate your cloud transformation with enterprise-grade Cloud Engineering services that help organisations design, build, modernise, and optimise secure, scalable, and high-performing cloud environments. We combine cloud architecture, platform engineering, automation, DevSecOps, migration, and continuous optimisation to create resilient cloud ecosystems that enable innovation, improve operational efficiency, and support long-term business growth.</p>
          <p>We partner with organisations across the entire cloud lifecycle — from cloud strategy and architecture to migration, modernisation, platform engineering, operations, and ongoing optimisation. Whether adopting public, private, hybrid, or multi-cloud environments, we help businesses transition from legacy infrastructure to modern cloud platforms that are aligned with strategic objectives, operational requirements, and future growth plans.</p>
          <p>Our engineering-led approach goes beyond infrastructure migration. We design cloud-native environments that leverage automation, Infrastructure as Code (IaC), containerisation, Kubernetes, serverless computing, observability, and cloud-native security to deliver highly resilient, cost-efficient, and scalable platforms. Every solution is engineered to maximise performance, improve agility, strengthen security, and enable continuous innovation while optimising cloud investments.</p>
          <p>From application modernisation and cloud platform engineering to DevSecOps, cloud governance, FinOps, disaster recovery, and managed cloud operations, our Cloud Engineering services help organisations build intelligent cloud ecosystems that accelerate digital transformation and simplify enterprise operations.</p>
          <p>Built on secure, governance-first engineering principles, our cloud solutions incorporate enterprise-grade security, compliance, automation, monitoring, and operational best practices. The result is a modern cloud foundation that improves business resilience, enhances operational efficiency, reduces infrastructure complexity, and provides the scalability and flexibility needed to support evolving business demands and sustained innovation.</p>
          <div class="ce-overview__actions">
            <a routerLink="/contact-us" class="ce-btn ce-btn--primary">Talk to an Expert</a>
            <a routerLink="/what-we-offer" class="ce-btn ce-btn--outline">All Services <i class="ph ph-arrow-right"></i></a>
          </div>
        </div>

        <div class="ce-overview__deliver" data-reveal-right>
          <div class="ce-deliver-box">
            <div class="ce-deliver-box__header">
              <i class="ph ph-cloud"></i>
              <h3>What we deliver</h3>
            </div>
            <ul class="ce-deliver-box__list">
              <li><a routerLink="/what-we-offer/cloud-engineering/cloud-strategy-architecture-design" class="ce-deliver-link">
                <span>Cloud strategy and architecture design.</span><i class="ph ph-arrow-right"></i>
              </a></li>
              <li><a routerLink="/what-we-offer/cloud-engineering/application-infrastructure-migration" class="ce-deliver-link">
                <span>Application and infrastructure migration.</span><i class="ph ph-arrow-right"></i>
              </a></li>
              <li><a routerLink="/what-we-offer/cloud-engineering/cloud-native-app-development" class="ce-deliver-link">
                <span>Cloud-native application development.</span><i class="ph ph-arrow-right"></i>
              </a></li>
              <li><a routerLink="/what-we-offer/cloud-engineering/devops-cicd-enablement" class="ce-deliver-link">
                <span>DevOps and CI/CD enablement.</span><i class="ph ph-arrow-right"></i>
              </a></li>
              <li><a routerLink="/what-we-offer/cloud-engineering/infrastructure-as-code-automation" class="ce-deliver-link">
                <span>Infrastructure as code and automation.</span><i class="ph ph-arrow-right"></i>
              </a></li>
              <li><a routerLink="/what-we-offer/cloud-engineering/security-identity-compliance-controls" class="ce-deliver-link">
                <span>Security, identity, and compliance controls.</span><i class="ph ph-arrow-right"></i>
              </a></li>
              <li><a routerLink="/what-we-offer/cloud-engineering/monitoring-optimization-finops-support" class="ce-deliver-link">
                <span>Monitoring, optimization, and FinOps support.</span><i class="ph ph-arrow-right"></i>
              </a></li>
              <li><a routerLink="/what-we-offer/cloud-engineering/backup-recovery-resilience-planning" class="ce-deliver-link">
                <span>Backup, recovery, and resilience planning.</span><i class="ph ph-arrow-right"></i>
              </a></li>
            </ul>
          </div>
        </div>

      </div>
    </section>

    <!-- WHY IT MATTERS -->
    <section class="ce-why">
      <div class="ce-why__bg-grid"></div>
      <div class="ce-why__glow-1"></div>
      <div class="ce-why__glow-2"></div>
      <div class="ce-why__inner">
        <div class="ce-why__header" data-reveal>
          <span class="ce-eyebrow ce-eyebrow--light">Why It Matters</span>
          <h2 class="ce-section-heading ce-section-heading--light">Why it matters</h2>
          <p class="ce-why__text">Cloud adoption is no longer simply about migrating infrastructure — it is about building a resilient, secure, and agile digital foundation that enables continuous innovation and business growth. While cloud platforms offer significant advantages in scalability, flexibility, and cost optimisation, realising these benefits requires thoughtful engineering, robust governance, and ongoing operational excellence. Poorly designed cloud environments can lead to security vulnerabilities, escalating costs, operational complexity, and reduced business agility.</p>
          <p class="ce-why__text" style="margin-top:1.2rem;">Cloud Engineering addresses these challenges by applying modern architectural principles, automation, platform engineering, and cloud-native best practices to create intelligent cloud ecosystems that are secure, scalable, and optimised for performance. By engineering cloud environments rather than simply migrating workloads, organisations can accelerate innovation, improve operational efficiency, strengthen resilience, and maximise the value of their cloud investments.</p>
        </div>
      </div>
    </section>

    <!-- BUSINESS VALUE -->
    <section class="ce-value" data-reveal>
      <div class="ce-value__ring"></div>
      <div class="ce-value__inner">
        <span class="ce-eyebrow">Business Value</span>
        <h2 class="ce-section-heading">Business value</h2>
        <ul class="ce-value__list">
          <li><i class="ph ph-check-circle"></i><span>Accelerate application deployment and release cycles through cloud-native architectures and automation.</span></li>
          <li><i class="ph ph-check-circle"></i><span>Improve scalability, availability, and performance to support evolving business demands.</span></li>
          <li><i class="ph ph-check-circle"></i><span>Optimise cloud expenditure through intelligent resource management, FinOps practices, and continuous cost optimisation.</span></li>
          <li><i class="ph ph-check-circle"></i><span>Strengthen security, governance, and regulatory compliance with enterprise-grade cloud controls.</span></li>
          <li><i class="ph ph-check-circle"></i><span>Reduce infrastructure complexity and operational overhead through automation and platform engineering.</span></li>
          <li><i class="ph ph-check-circle"></i><span>Enhance business resilience with high availability, disaster recovery, backup, and business continuity capabilities.</span></li>
          <li><i class="ph ph-check-circle"></i><span>Increase organisational agility by enabling rapid innovation, faster service delivery, and continuous technology evolution.</span></li>
        </ul>
      </div>
    </section>

    <!-- GOVERNANCE -->
    <section class="ce-governance">
      <div class="ce-governance__inner" data-reveal>
        <div class="ce-governance__icon-wrap"><i class="ph ph-shield-check"></i></div>
        <h2 class="ce-section-heading">Governance and <em>Control</em></h2>
        <p>Our Cloud Engineering services are built on a governance-first framework that embeds security, compliance, automation, and operational excellence into every stage of the cloud lifecycle. We implement robust identity and access management, policy-driven governance, infrastructure as code (IaC), continuous compliance monitoring, security automation, observability, and cloud operations best practices to ensure cloud environments remain secure, resilient, and cost-efficient. Comprehensive monitoring, performance management, disaster recovery planning, and continuous optimisation provide complete visibility and control while enabling organisations to confidently scale cloud operations in line with business growth and regulatory requirements.</p>
      </div>
    </section>

    <!-- TAGLINE -->
    <section class="ce-tagline">
      <div class="ce-tagline__inner" data-reveal>
        <p>Build a secure, scalable, and intelligent cloud foundation that accelerates innovation, optimises performance, and powers long-term business growth.</p>
        <a routerLink="/contact-us" class="ce-tagline__btn">Start Your Journey <i class="ph ph-arrow-right"></i></a>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; font-family: 'DM Sans', system-ui, sans-serif; }
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :host { --teal:#1B3A8F; --teal-dark:#142d6b; --orange:#E87722; --blue:#1B3A8F; --dark:#111; --bg:#f5f5f3; --mid:#555; }
    a { text-decoration: none; }

    .breadcrumb-bar { padding: 0.7rem 2rem; background: #f0f2f8; font-size: 0.8rem; display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap; }
    .breadcrumb-bar a { color: var(--blue); font-weight: 600; }
    .breadcrumb-bar a:hover { color: var(--orange); }
    .breadcrumb-bar .sep { color: #aaa; }
    .breadcrumb-bar .current { color: var(--mid); }

    .ce-hero { position: relative; height: 60vh; min-height: 400px; overflow: hidden; display: flex; flex-direction: column; }
    .ce-hero__bg { position: absolute; inset: 0; }
    .ce-hero__bg img { width: 100%; height: 100%; object-fit: cover; }
    .ce-hero__overlay { position: absolute; inset: 0; background: radial-gradient(ellipse at 20% 30%, rgba(232, 119, 34, 0.28), transparent 55%), radial-gradient(ellipse at 80% 70%, rgba(27, 58, 143, 0.45), transparent 55%), linear-gradient(180deg, rgba(16, 21, 42, 0.35), rgba(16, 21, 42, 0.85)); }
    .ce-hero__abstract-ring { position: absolute; top: -60px; right: -60px; width: 400px; height: 400px; border: 1.5px solid rgba(255,255,255,0.06); border-radius: 50%; animation: spinSlow 40s linear infinite; pointer-events: none; }
    .ce-hero__abstract-blob { position: absolute; bottom: -80px; left: 15%; width: 300px; height: 300px; background: radial-gradient(circle, rgba(232,119,34,0.12) 0%, transparent 70%); border-radius: 50%; animation: drift 18s ease-in-out infinite; pointer-events: none; }
    .ce-hero__particles { position: absolute; inset: 0; pointer-events: none; z-index: 1; }
    .ce-hero__particle { position: absolute; bottom: -10px; background: rgba(255,255,255,0.4); border-radius: 50%; animation: rise linear infinite; }
    @keyframes rise { to { transform: translateY(-100vh) scale(0); opacity: 0; } }
    .ce-hero__content { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 2rem; z-index: 2; }
    .ce-hero__badge { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.1); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.2); border-radius: 999px; padding: 0.35rem 1.1rem; margin-bottom: 1.5rem; opacity: 0; transform: translateY(12px); animation: fadeUp 0.8s 0.3s forwards; }
    .ce-hero__badge-dot { width: 7px; height: 7px; background: var(--orange); border-radius: 50%; animation: pulse 2s infinite; }
    @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.7)} }
    .ce-hero__badge span:last-child { color: #fff; font-size: 0.78rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; }
    .ce-hero__heading { font-family: "DM Serif Display", serif; font-size: clamp(1.8rem,4vw,3rem); color: #fff; font-weight: 400; line-height: 1.1; margin-bottom: 1.2rem; opacity: 0; transform: translateY(20px); animation: fadeUp 1s 0.5s forwards; }
    .ce-hero__heading em { font-style: italic; color: var(--orange); }
    .ce-hero__sub { font-size: 0.95rem; color: rgba(255,255,255,0.75); max-width: 580px; line-height: 1.6; margin-bottom: 1.5rem; opacity: 0; transform: translateY(20px); animation: fadeUp 1s 0.7s forwards; }
    .ce-hero__cta { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--orange); color: #fff; font-weight: 600; font-size: 0.9rem; padding: 0.75rem 1.8rem; border-radius: 999px; transition: background 0.3s, transform 0.3s, box-shadow 0.3s; opacity: 0; transform: translateY(20px); animation: fadeUp 1s 0.9s forwards; }
    .ce-hero__cta:hover { background: #c96418; color: #fff; transform: translateY(-3px); box-shadow: 0 12px 32px rgba(232,119,34,0.4); }
    @keyframes fadeUp { to { opacity:1; transform:translateY(0); } }
    @media (max-width: 768px) { .ce-hero { height: 50vh; min-height: 320px; } }

    .ce-overview { padding: 6rem 3rem; max-width: 1300px; margin: 0 auto; position: relative; overflow: hidden; }
    .ce-overview__blob { position: absolute; top: -60px; right: -80px; width: 300px; height: 300px; background: radial-gradient(circle, rgba(27,58,143,0.06) 0%, transparent 70%); border-radius: 50%; animation: drift 15s ease-in-out infinite; pointer-events: none; }
    .ce-overview__dots { position: absolute; bottom: -40px; left: -40px; width: 150px; height: 150px; background-image: radial-gradient(circle, rgba(232,119,34,0.2) 1.5px, transparent 1.5px); background-size: 16px 16px; opacity: 0.6; pointer-events: none; }
    .ce-overview__grid { display: grid; grid-template-columns: 1.35fr 1fr; gap: 5rem; align-items: start; }
    .ce-overview__text p { font-size: 1rem; color: #444; line-height: 1.85; margin-bottom: 1.2rem; }
    .ce-overview__actions { display: flex; flex-wrap: wrap; gap: 0.9rem; margin-top: 2rem; }
    @media (max-width: 1024px) { .ce-overview { padding: 4rem 1.5rem; } .ce-overview__grid { grid-template-columns: 1fr; gap: 2.5rem; } }

    .ce-deliver-box { background: #fff; border-radius: 24px; padding: 2.2rem 2rem; box-shadow: 0 12px 48px rgba(27,58,143,0.1); border: 1px solid rgba(27,58,143,0.08); position: sticky; top: 100px; overflow: hidden; }
    .ce-deliver-box::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, var(--blue), var(--orange)); }
    .ce-deliver-box__header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.6rem; padding-bottom: 1.2rem; border-bottom: 1px solid rgba(27,58,143,0.08); }
    .ce-deliver-box__header i.ph { font-size: 1.5rem; color: var(--blue); }
    .ce-deliver-box__header h3 { font-family: "DM Serif Display", serif; font-size: 1.2rem; font-weight: 400; color: var(--dark); }
    .ce-deliver-box__list { list-style: none; display: flex; flex-direction: column; gap: 0.3rem; }
    .ce-deliver-link { display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; padding: 0.85rem 1rem; border-radius: 12px; border: 1px solid transparent; color: var(--dark); font-size: 0.93rem; font-weight: 500; line-height: 1.4; transition: all 0.25s; }
    .ce-deliver-link:hover { background: linear-gradient(135deg, rgba(27,58,143,0.06), rgba(232,119,34,0.04)); border-color: rgba(27,58,143,0.12); color: var(--blue); transform: translateX(4px); }
    .ce-deliver-link i.ph { font-size: 0.9rem; color: var(--orange); flex-shrink: 0; opacity: 0.6; transition: opacity 0.25s, transform 0.25s; }
    .ce-deliver-link:hover i.ph { opacity: 1; transform: translateX(3px); }

    .ce-eyebrow { display: inline-block; padding: 0.3rem 0.9rem; border-radius: 999px; background: rgba(232,119,34,0.1); color: var(--orange); font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 1rem; }
    .ce-eyebrow--light { background: rgba(255,255,255,0.12); color: rgba(255,255,255,0.8); }
    .ce-section-heading { font-family: "DM Serif Display", serif; font-size: clamp(1.5rem,3vw,2.1rem); font-weight: 400; color: var(--dark); line-height: 1.2; margin-bottom: 1.6rem; }
    .ce-section-heading em { font-style: italic; color: var(--orange); }
    .ce-section-heading--light { color: #fff; }
    .ce-btn { display: inline-flex; align-items: center; gap: 0.45rem; font-weight: 700; font-size: 0.88rem; padding: 0.7rem 1.6rem; border-radius: 999px; transition: transform 0.3s, box-shadow 0.3s; }
    .ce-btn--primary { background: var(--orange); color: #fff; }
    .ce-btn--primary:hover { background: #c96418; transform: translateY(-2px); box-shadow: 0 10px 28px rgba(232,119,34,0.35); color: #fff; }
    .ce-btn--outline { background: transparent; color: var(--blue); border: 2px solid var(--blue); }
    .ce-btn--outline:hover { background: var(--blue); color: #fff; transform: translateY(-2px); }

    .ce-why { padding: 5.5rem 3rem; background: linear-gradient(135deg,#060d1f 0%,#0a1635 40%,#0f1f4a 100%); position: relative; overflow: hidden; }
    .ce-why__bg-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px); background-size: 60px 60px; pointer-events: none; }
    .ce-why__glow-1 { position: absolute; width: 400px; height: 400px; border-radius: 50%; background: radial-gradient(circle,rgba(232,119,34,0.15) 0%,transparent 70%); top: -100px; right: -100px; pointer-events: none; animation: drift 18s ease-in-out infinite; }
    .ce-why__glow-2 { position: absolute; width: 350px; height: 350px; border-radius: 50%; background: radial-gradient(circle,rgba(123,163,255,0.1) 0%,transparent 70%); bottom: -120px; left: -80px; pointer-events: none; animation: drift 14s ease-in-out infinite reverse; }
    .ce-why__inner { max-width: 900px; margin: 0 auto; position: relative; z-index: 2; text-align: center; }
    .ce-why__text { font-size: 1rem; color: rgba(255,255,255,0.72); line-height: 1.85; }
    @media (max-width: 768px) { .ce-why { padding: 3.5rem 1.2rem; } }

    .ce-value { padding: 6rem 3rem; background: var(--bg); position: relative; overflow: hidden; }
    .ce-value__ring { position: absolute; top: 60px; right: -60px; width: 180px; height: 180px; border: 1.5px dashed rgba(232,119,34,0.12); border-radius: 50%; animation: spinSlow 35s linear infinite reverse; pointer-events: none; }
    .ce-value__inner { max-width: 860px; margin: 0 auto; position: relative; z-index: 1; }
    .ce-value__list { list-style: none; margin-top: 2.5rem; display: flex; flex-direction: column; gap: 1rem; }
    .ce-value__list li { display: flex; align-items: flex-start; gap: 0.9rem; background: #fff; border-radius: 14px; padding: 1.1rem 1.4rem; border: 1px solid rgba(27,58,143,0.06); transition: transform 0.3s, box-shadow 0.3s; }
    .ce-value__list li:hover { transform: translateX(6px); box-shadow: 0 8px 28px rgba(27,58,143,0.09); }
    .ce-value__list i.ph { font-size: 1.2rem; color: var(--orange); flex-shrink: 0; margin-top: 0.1rem; }
    .ce-value__list span { font-size: 0.95rem; color: #333; line-height: 1.7; }
    @media (max-width: 768px) { .ce-value { padding: 3.5rem 1.2rem; } }

    .ce-governance { padding: 5rem 3rem; background: linear-gradient(180deg, var(--bg) 0%, #eef0f7 100%); }
    .ce-governance__inner { max-width: 900px; margin: 0 auto; background: #fff; border-radius: 24px; padding: 3rem 3.5rem; box-shadow: 0 10px 40px rgba(27,58,143,0.08); border: 1px solid rgba(27,58,143,0.06); position: relative; overflow: hidden; text-align: center; }
    .ce-governance__inner::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg,var(--blue),var(--orange)); }
    .ce-governance__icon-wrap { width: 60px; height: 60px; margin: 0 auto 1.5rem; background: linear-gradient(135deg,rgba(27,58,143,0.08),rgba(232,119,34,0.06)); border-radius: 16px; display: flex; align-items: center; justify-content: center; }
    .ce-governance__icon-wrap i.ph { font-size: 1.6rem; color: var(--teal); line-height: 1; }
    .ce-governance p { font-size: 1rem; color: #444; line-height: 1.85; text-align: left; }
    @media (max-width: 768px) { .ce-governance { padding: 3rem 1.2rem; } .ce-governance__inner { padding: 2rem 1.5rem; } }

    .ce-tagline { background: linear-gradient(135deg,#0f1f4a,#1B3A8F); padding: 3rem 3rem; text-align: center; }
    .ce-tagline__inner { max-width: 860px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; gap: 1.8rem; }
    .ce-tagline p { font-family: "DM Serif Display", serif; font-size: clamp(1.1rem,2vw,1.4rem); font-style: italic; color: rgba(255,255,255,0.9); line-height: 1.6; }
    .ce-tagline__btn { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--orange); color: #fff; font-weight: 700; font-size: 0.9rem; padding: 0.75rem 1.8rem; border-radius: 999px; transition: transform 0.3s, box-shadow 0.3s; }
    .ce-tagline__btn:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(232,119,34,0.4); color: #fff; }

    @keyframes spinSlow { to { transform: rotate(360deg); } }
    @keyframes drift { 0%,100%{transform:translate(0,0)} 25%{transform:translate(20px,-10px)} 50%{transform:translate(-10px,-20px)} 75%{transform:translate(-20px,10px)} }

    [data-reveal] { opacity: 0; transform: translateY(40px); transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1); }
    [data-reveal].is-visible { opacity: 1; transform: translateY(0); }
    [data-reveal-left] { opacity: 0; transform: translateX(-40px); transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1); }
    [data-reveal-left].is-visible { opacity: 1; transform: translateX(0); }
    [data-reveal-right] { opacity: 0; transform: translateX(40px); transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1); }
    [data-reveal-right].is-visible { opacity: 1; transform: translateX(0); }
  `],
})
export class CloudEngineering implements AfterViewInit, OnDestroy {
  private revealObserver: IntersectionObserver | null = null;
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const host = this.el.nativeElement as HTMLElement;
    const container = host.querySelector('#ce-particles');
    if (container) {
      for (let i = 0; i < 18; i++) {
        const p = document.createElement('span');
        p.className = 'ce-hero__particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (6 + Math.random() * 8) + 's';
        p.style.animationDelay = (Math.random() * 6) + 's';
        p.style.width = p.style.height = (2 + Math.random() * 4) + 'px';
        container.appendChild(p);
      }
    }
    this.revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); this.revealObserver?.unobserve(e.target); } });
    }, { threshold: 0.12 });
    host.querySelectorAll('[data-reveal],[data-reveal-left],[data-reveal-right]').forEach(el => this.revealObserver!.observe(el));
  }

  ngOnDestroy(): void { this.revealObserver?.disconnect(); }
}


