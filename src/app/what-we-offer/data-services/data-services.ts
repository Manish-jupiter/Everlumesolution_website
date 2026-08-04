import { Component, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-data-services',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="breadcrumb-bar">
      <a routerLink="/">Home</a><span class="sep">></span>
      <a routerLink="/what-we-offer">What We Offer</a><span class="sep">></span>
      <span class="current">Data Services</span>
    </div>

    <section class="ds-hero">
      <div class="ds-hero__bg">
        <img src="Images/image_030.jpg" alt="Data Services" />
        <div class="ds-hero__overlay"></div>
      </div>
      <div class="ds-hero__particles" id="ds-particles"></div>
      <div class="ds-hero__abstract-ring"></div>
      <div class="ds-hero__abstract-blob"></div>
      <div class="ds-hero__content" data-reveal>
        <div class="ds-hero__badge"><span class="ds-hero__badge-dot"></span><span>What We Offer</span></div>
        <h1 class="ds-hero__heading">Data <em>Services</em></h1>
        <p class="ds-hero__sub">Build trusted, governed, and scalable enterprise data ecosystems that power analytics, AI, and confident decision-making.</p>
        <a href="#ds-overview" class="ds-hero__cta">Explore Capabilities
          <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
    </section>

    <section class="ds-overview" id="ds-overview">
      <div class="ds-overview__blob"></div>
      <div class="ds-overview__dots"></div>
      <div class="ds-overview__grid">
        <div class="ds-overview__text" data-reveal-left>
          <span class="ds-eyebrow">Overview</span>
          <h2 class="ds-section-heading">Data <em>Services</em></h2>
          <p>Transform data into a strategic enterprise asset with our comprehensive Data Services portfolio. We help organisations design, build, modernise, and manage robust data ecosystems that enable trusted, accessible, and actionable information across the enterprise. By combining modern data engineering, integration, governance, analytics, and cloud-native technologies, we empower organisations to make faster decisions, accelerate innovation, and maximise the value of their data investments.</p>
          <p>Our Data Services span the entire data lifecycle from strategy, architecture, and integration to data engineering, governance, quality management, analytics enablement, and ongoing optimisation. We help organisations unify fragmented data sources, eliminate information silos, and establish scalable data platforms that support business intelligence, advanced analytics, Artificial Intelligence, digital products, and operational decision-making.</p>
          <p>Using modern data engineering frameworks, automated data pipelines, cloud-native platforms, real-time integration, and secure data delivery models, we transform complex and distributed data landscapes into intelligent, high-performing information ecosystems. Our solutions ensure that trusted, high-quality data is available to the right people, systems, and applications at the right time, supporting both operational excellence and strategic business initiatives.</p>
          <p>Built on secure, governance-first principles, our Data Services incorporate enterprise-grade data governance, quality management, metadata management, security, privacy, compliance, and lifecycle management. Every solution is designed to ensure data integrity, regulatory compliance, scalability, and operational resilience while reducing complexity and improving enterprise-wide data accessibility.</p>
          <p>The result is a modern, intelligent, and trusted data foundation that enables organisations to accelerate digital transformation, power AI and advanced analytics, improve business agility, and make confident, data-driven decisions at every level of the enterprise.</p>
          <div class="ds-overview__actions">
            <a routerLink="/contact-us" class="ds-btn ds-btn--primary">Talk to an Expert</a>
            <a routerLink="/what-we-offer" class="ds-btn ds-btn--outline">All Services <i class="ph ph-arrow-right"></i></a>
          </div>
        </div>

        <div class="ds-overview__deliver" data-reveal-right>
          <div class="ds-deliver-box">
            <div class="ds-deliver-box__header">
              <i class="ph ph-database"></i>
              <h3>What we deliver</h3>
            </div>
            <ul class="ds-deliver-box__list">
              <li><a routerLink="/what-we-offer/data-services/data-strategy-architecture" class="ds-deliver-link"><span>Data strategy and architecture.</span><i class="ph ph-arrow-right"></i></a></li>
              <li><a routerLink="/what-we-offer/data-services/data-integration-pipeline-development" class="ds-deliver-link"><span>Data integration and pipeline development.</span><i class="ph ph-arrow-right"></i></a></li>
              <li><a routerLink="/what-we-offer/data-services/data-quality-validation" class="ds-deliver-link"><span>Data quality and validation.</span><i class="ph ph-arrow-right"></i></a></li>
              <li><a routerLink="/what-we-offer/data-services/master-data-metadata-management" class="ds-deliver-link"><span>Master data and metadata management.</span><i class="ph ph-arrow-right"></i></a></li>
              <li><a routerLink="/what-we-offer/data-services/api-cloud-data-delivery" class="ds-deliver-link"><span>API-based and cloud-based data delivery.</span><i class="ph ph-arrow-right"></i></a></li>
              <li><a routerLink="/what-we-offer/data-services/governance-security-access-controls" class="ds-deliver-link"><span>Governance, security, and access controls.</span><i class="ph ph-arrow-right"></i></a></li>
              <li><a routerLink="/what-we-offer/data-services/reporting-analytics-enablement" class="ds-deliver-link"><span>Reporting and analytics enablement.</span><i class="ph ph-arrow-right"></i></a></li>
              <li><a routerLink="/what-we-offer/data-services/ongoing-monitoring-support" class="ds-deliver-link"><span>Ongoing monitoring and support.</span><i class="ph ph-arrow-right"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="ds-why">
      <div class="ds-why__bg-grid"></div>
      <div class="ds-why__glow-1"></div>
      <div class="ds-why__glow-2"></div>
      <div class="ds-why__inner">
        <div class="ds-why__header" data-reveal>
          <span class="ds-eyebrow ds-eyebrow--light">Why It Matters</span>
          <h2 class="ds-section-heading ds-section-heading--light">Why it matters</h2>
          <p class="ds-why__text">Data has become one of the most valuable assets within the modern enterprise, yet many organisations struggle to unlock its full potential due to fragmented systems, inconsistent data quality, limited governance, and disconnected information silos. Without a trusted data foundation, initiatives such as advanced analytics, Artificial Intelligence, automation, and digital transformation often fail to deliver their expected business outcomes.</p>
          <p class="ds-why__text" style="margin-top:1.2rem;">Our Data Services help organisations overcome these challenges by creating a unified, governed, and scalable data ecosystem that makes information readily accessible, reliable, and actionable. Through modern data engineering, robust governance, and intelligent integration, we enable organisations to transform raw data into a strategic business asset that supports informed decision-making, operational efficiency, innovation, and long-term competitive advantage.</p>
        </div>
      </div>
    </section>

    <section class="ds-value" data-reveal>
      <div class="ds-value__ring"></div>
      <div class="ds-value__inner">
        <span class="ds-eyebrow">Business Value</span>
        <h2 class="ds-section-heading">Business value</h2>
        <ul class="ds-value__list">
          <li><i class="ph ph-check-circle"></i><span>Improve enterprise-wide access to trusted, high-quality data across business functions.</span></li>
          <li><i class="ph ph-check-circle"></i><span>Enhance data quality, consistency, and integrity through robust governance and management practices.</span></li>
          <li><i class="ph ph-check-circle"></i><span>Accelerate decision-making with timely, reliable, and actionable business insights.</span></li>
          <li><i class="ph ph-check-circle"></i><span>Establish a scalable data foundation that powers advanced analytics, Artificial Intelligence, and intelligent automation.</span></li>
          <li><i class="ph ph-check-circle"></i><span>Strengthen data governance, security, privacy, and regulatory compliance across the enterprise.</span></li>
          <li><i class="ph ph-check-circle"></i><span>Eliminate data silos and improve interoperability between enterprise applications and platforms.</span></li>
          <li><i class="ph ph-check-circle"></i><span>Maximise the return on data investments by enabling innovation, operational efficiency, and data-driven business growth.</span></li>
        </ul>
      </div>
    </section>

    <section class="ds-governance">
      <div class="ds-governance__inner" data-reveal>
        <div class="ds-governance__icon-wrap"><i class="ph ph-shield-check"></i></div>
        <h2 class="ds-section-heading">Governance and <em>Control</em></h2>
        <p>Our Data Services are built on a governance-first framework that ensures enterprise data remains secure, accurate, compliant, and trusted throughout its lifecycle. We implement comprehensive data governance policies, metadata management, master data management, lineage tracking, quality monitoring, access controls, encryption, and compliance frameworks to provide complete visibility and accountability across the data estate. Continuous monitoring, automated quality controls, policy enforcement, and lifecycle management ensure that data remains reliable, secure, and aligned with organisational standards and regulatory requirements.</p>
      </div>
    </section>

    <section class="ds-tagline">
      <div class="ds-tagline__inner" data-reveal>
        <p>Transform your data into a trusted enterprise asset that powers analytics, accelerates AI, and enables smarter, faster business decisions.</p>
        <a routerLink="/contact-us" class="ds-tagline__btn">Start Your Journey <i class="ph ph-arrow-right"></i></a>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; font-family: 'DM Sans', system-ui, sans-serif; }
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :host { --orange:#E87722; --blue:#1B3A8F; --dark:#111; --bg:#f5f5f3; --mid:#555; }
    a { text-decoration: none; }

    .breadcrumb-bar { padding: 0.7rem 2rem; background: #f0f2f8; font-size: 0.8rem; display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap; }
    .breadcrumb-bar a { color: var(--blue); font-weight: 600; }
    .breadcrumb-bar a:hover { color: var(--orange); }
    .breadcrumb-bar .sep { color: #aaa; }
    .breadcrumb-bar .current { color: var(--mid); }

    .ds-hero { position: relative; height: 60vh; min-height: 400px; overflow: hidden; display: flex; flex-direction: column; }
    .ds-hero__bg { position: absolute; inset: 0; }
    .ds-hero__bg img { width: 100%; height: 100%; object-fit: cover; }
    .ds-hero__overlay { position: absolute; inset: 0; background: radial-gradient(ellipse at 20% 30%, rgba(232, 119, 34, 0.28), transparent 55%), radial-gradient(ellipse at 80% 70%, rgba(27, 58, 143, 0.45), transparent 55%), linear-gradient(180deg, rgba(16, 21, 42, 0.35), rgba(16, 21, 42, 0.85)); }
    .ds-hero__abstract-ring { position: absolute; top: -60px; right: -60px; width: 400px; height: 400px; border: 1.5px solid rgba(255,255,255,0.06); border-radius: 50%; animation: spinSlow 40s linear infinite; pointer-events: none; }
    .ds-hero__abstract-blob { position: absolute; bottom: -80px; left: 15%; width: 300px; height: 300px; background: radial-gradient(circle, rgba(232,119,34,0.12) 0%, transparent 70%); border-radius: 50%; animation: drift 18s ease-in-out infinite; pointer-events: none; }
    .ds-hero__particles { position: absolute; inset: 0; pointer-events: none; z-index: 1; }
    .ds-hero__particle { position: absolute; bottom: -10px; background: rgba(255,255,255,0.4); border-radius: 50%; animation: rise linear infinite; }
    @keyframes rise { to { transform: translateY(-100vh) scale(0); opacity: 0; } }
    .ds-hero__content { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 2rem; z-index: 2; }
    .ds-hero__badge { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.1); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.2); border-radius: 999px; padding: 0.35rem 1.1rem; margin-bottom: 1.5rem; opacity: 0; transform: translateY(12px); animation: fadeUp 0.8s 0.3s forwards; }
    .ds-hero__badge-dot { width: 7px; height: 7px; background: var(--orange); border-radius: 50%; animation: pulse 2s infinite; }
    @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.7)} }
    .ds-hero__badge span:last-child { color: #fff; font-size: 0.78rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; }
    .ds-hero__heading { font-family: "DM Serif Display", serif; font-size: clamp(1.8rem,4vw,3rem); color: #fff; font-weight: 400; line-height: 1.1; margin-bottom: 1.2rem; opacity: 0; transform: translateY(20px); animation: fadeUp 1s 0.5s forwards; }
    .ds-hero__heading em { font-style: italic; color: var(--orange); }
    .ds-hero__sub { font-size: 0.95rem; color: rgba(255,255,255,0.75); max-width: 580px; line-height: 1.6; margin-bottom: 1.5rem; opacity: 0; transform: translateY(20px); animation: fadeUp 1s 0.7s forwards; }
    .ds-hero__cta { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--orange); color: #fff; font-weight: 600; font-size: 0.9rem; padding: 0.75rem 1.8rem; border-radius: 999px; transition: background 0.3s, transform 0.3s, box-shadow 0.3s; opacity: 0; transform: translateY(20px); animation: fadeUp 1s 0.9s forwards; }
    .ds-hero__cta:hover { background: #c96418; color: #fff; transform: translateY(-3px); box-shadow: 0 12px 32px rgba(232,119,34,0.4); }
    @keyframes fadeUp { to { opacity:1; transform:translateY(0); } }
    @media (max-width: 768px) { .ds-hero { height: 50vh; min-height: 320px; } }

    .ds-overview { padding: 6rem 3rem; max-width: 1300px; margin: 0 auto; position: relative; overflow: hidden; }
    .ds-overview__blob { position: absolute; top: -60px; right: -80px; width: 300px; height: 300px; background: radial-gradient(circle, rgba(27,58,143,0.06) 0%, transparent 70%); border-radius: 50%; animation: drift 15s ease-in-out infinite; pointer-events: none; }
    .ds-overview__dots { position: absolute; bottom: -40px; left: -40px; width: 150px; height: 150px; background-image: radial-gradient(circle, rgba(232,119,34,0.2) 1.5px, transparent 1.5px); background-size: 16px 16px; opacity: 0.6; pointer-events: none; }
    .ds-overview__grid { display: grid; grid-template-columns: 1.35fr 1fr; gap: 5rem; align-items: start; }
    .ds-overview__text p { font-size: 1rem; color: #444; line-height: 1.85; margin-bottom: 1.2rem; }
    .ds-overview__actions { display: flex; flex-wrap: wrap; gap: 0.9rem; margin-top: 2rem; }
    @media (max-width: 1024px) { .ds-overview { padding: 4rem 1.5rem; } .ds-overview__grid { grid-template-columns: 1fr; gap: 2.5rem; } }

    .ds-deliver-box { background: #fff; border-radius: 24px; padding: 2.2rem 2rem; box-shadow: 0 12px 48px rgba(27,58,143,0.1); border: 1px solid rgba(27,58,143,0.08); position: sticky; top: 100px; overflow: hidden; }
    .ds-deliver-box::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, var(--blue), var(--orange)); }
    .ds-deliver-box__header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.6rem; padding-bottom: 1.2rem; border-bottom: 1px solid rgba(27,58,143,0.08); }
    .ds-deliver-box__header i.ph { font-size: 1.5rem; color: var(--blue); }
    .ds-deliver-box__header h3 { font-family: "DM Serif Display", serif; font-size: 1.2rem; font-weight: 400; color: var(--dark); }
    .ds-deliver-box__list { list-style: none; display: flex; flex-direction: column; gap: 0.3rem; }
    .ds-deliver-link { display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; padding: 0.85rem 1rem; border-radius: 12px; border: 1px solid transparent; color: var(--dark); font-size: 0.93rem; font-weight: 500; line-height: 1.4; transition: all 0.25s; }
    .ds-deliver-link:hover { background: linear-gradient(135deg, rgba(27,58,143,0.06), rgba(232,119,34,0.04)); border-color: rgba(27,58,143,0.12); color: var(--blue); transform: translateX(4px); }
    .ds-deliver-link i.ph { font-size: 0.9rem; color: var(--orange); flex-shrink: 0; opacity: 0.6; transition: opacity 0.25s, transform 0.25s; }
    .ds-deliver-link:hover i.ph { opacity: 1; transform: translateX(3px); }

    .ds-eyebrow { display: inline-block; padding: 0.3rem 0.9rem; border-radius: 999px; background: rgba(232,119,34,0.1); color: var(--orange); font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 1rem; }
    .ds-eyebrow--light { background: rgba(255,255,255,0.12); color: rgba(255,255,255,0.8); }
    .ds-section-heading { font-family: "DM Serif Display", serif; font-size: clamp(1.5rem,3vw,2.1rem); font-weight: 400; color: var(--dark); line-height: 1.2; margin-bottom: 1.6rem; }
    .ds-section-heading em { font-style: italic; color: var(--orange); }
    .ds-section-heading--light { color: #fff; }
    .ds-btn { display: inline-flex; align-items: center; gap: 0.45rem; font-weight: 700; font-size: 0.88rem; padding: 0.7rem 1.6rem; border-radius: 999px; transition: transform 0.3s, box-shadow 0.3s; }
    .ds-btn--primary { background: var(--orange); color: #fff; }
    .ds-btn--primary:hover { background: #c96418; transform: translateY(-2px); box-shadow: 0 10px 28px rgba(232,119,34,0.35); color: #fff; }
    .ds-btn--outline { background: transparent; color: var(--blue); border: 2px solid var(--blue); }
    .ds-btn--outline:hover { background: var(--blue); color: #fff; transform: translateY(-2px); }

    .ds-why { padding: 5.5rem 3rem; background: linear-gradient(135deg,#060d1f 0%,#0a1635 40%,#0f1f4a 100%); position: relative; overflow: hidden; }
    .ds-why__bg-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px); background-size: 60px 60px; pointer-events: none; }
    .ds-why__glow-1 { position: absolute; width: 400px; height: 400px; border-radius: 50%; background: radial-gradient(circle,rgba(232,119,34,0.15) 0%,transparent 70%); top: -100px; right: -100px; pointer-events: none; animation: drift 18s ease-in-out infinite; }
    .ds-why__glow-2 { position: absolute; width: 350px; height: 350px; border-radius: 50%; background: radial-gradient(circle,rgba(123,163,255,0.1) 0%,transparent 70%); bottom: -120px; left: -80px; pointer-events: none; animation: drift 14s ease-in-out infinite reverse; }
    .ds-why__inner { max-width: 900px; margin: 0 auto; position: relative; z-index: 2; text-align: center; }
    .ds-why__text { font-size: 1rem; color: rgba(255,255,255,0.72); line-height: 1.85; }
    @media (max-width: 768px) { .ds-why { padding: 3.5rem 1.2rem; } }

    .ds-value { padding: 6rem 3rem; background: var(--bg); position: relative; overflow: hidden; }
    .ds-value__ring { position: absolute; top: 60px; right: -60px; width: 180px; height: 180px; border: 1.5px dashed rgba(232,119,34,0.12); border-radius: 50%; animation: spinSlow 35s linear infinite reverse; pointer-events: none; }
    .ds-value__inner { max-width: 860px; margin: 0 auto; position: relative; z-index: 1; }
    .ds-value__list { list-style: none; margin-top: 2.5rem; display: flex; flex-direction: column; gap: 1rem; }
    .ds-value__list li { display: flex; align-items: flex-start; gap: 0.9rem; background: #fff; border-radius: 14px; padding: 1.1rem 1.4rem; border: 1px solid rgba(27,58,143,0.06); transition: transform 0.3s, box-shadow 0.3s; }
    .ds-value__list li:hover { transform: translateX(6px); box-shadow: 0 8px 28px rgba(27,58,143,0.09); }
    .ds-value__list i.ph { font-size: 1.2rem; color: var(--orange); flex-shrink: 0; margin-top: 0.1rem; }
    .ds-value__list span { font-size: 0.95rem; color: #333; line-height: 1.7; }
    @media (max-width: 768px) { .ds-value { padding: 3.5rem 1.2rem; } }

    .ds-governance { padding: 5rem 3rem; background: linear-gradient(180deg, var(--bg) 0%, #eef0f7 100%); }
    .ds-governance__inner { max-width: 900px; margin: 0 auto; background: #fff; border-radius: 24px; padding: 3rem 3.5rem; box-shadow: 0 10px 40px rgba(27,58,143,0.08); border: 1px solid rgba(27,58,143,0.06); position: relative; overflow: hidden; text-align: center; }
    .ds-governance__inner::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg,var(--blue),var(--orange)); }
    .ds-governance__icon-wrap { width: 60px; height: 60px; margin: 0 auto 1.5rem; background: linear-gradient(135deg,rgba(27,58,143,0.08),rgba(232,119,34,0.06)); border-radius: 16px; display: flex; align-items: center; justify-content: center; }
    .ds-governance__icon-wrap i.ph { font-size: 1.6rem; color: var(--blue); line-height: 1; }
    .ds-governance p { font-size: 1rem; color: #444; line-height: 1.85; text-align: left; }
    @media (max-width: 768px) { .ds-governance { padding: 3rem 1.2rem; } .ds-governance__inner { padding: 2rem 1.5rem; } }

    .ds-tagline { background: linear-gradient(135deg,#0f1f4a,#1B3A8F); padding: 3rem 3rem; text-align: center; }
    .ds-tagline__inner { max-width: 860px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; gap: 1.8rem; }
    .ds-tagline p { font-family: "DM Serif Display", serif; font-size: clamp(1.1rem,2vw,1.4rem); font-style: italic; color: rgba(255,255,255,0.9); line-height: 1.6; }
    .ds-tagline__btn { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--orange); color: #fff; font-weight: 700; font-size: 0.9rem; padding: 0.75rem 1.8rem; border-radius: 999px; transition: transform 0.3s, box-shadow 0.3s; }
    .ds-tagline__btn:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(232,119,34,0.4); color: #fff; }

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
export class DataServices implements AfterViewInit, OnDestroy {
  private revealObserver: IntersectionObserver | null = null;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const host = this.el.nativeElement as HTMLElement;
    const container = host.querySelector('#ds-particles');
    if (container) {
      for (let i = 0; i < 18; i++) {
        const p = document.createElement('span');
        p.className = 'ds-hero__particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (6 + Math.random() * 8) + 's';
        p.style.animationDelay = (Math.random() * 6) + 's';
        p.style.width = p.style.height = (2 + Math.random() * 4) + 'px';
        container.appendChild(p);
      }
    }

    this.revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          this.revealObserver?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    host.querySelectorAll('[data-reveal],[data-reveal-left],[data-reveal-right]').forEach((el) => {
      this.revealObserver?.observe(el);
    });
  }

  ngOnDestroy(): void {
    this.revealObserver?.disconnect();
  }
}


