import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rcm',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="breadcrumb-bar">
      <a routerLink="/">Home</a><span class="sep">></span>
      <a routerLink="/what-we-offer">What We Offer</a><span class="sep">></span>
      <span class="current">RCM as a Service</span>
    </div>

    <section class="rcm-hero">
      <div class="rcm-hero__bg">
        <img src="Images/image_055.jpg" alt="RCM" />
        <div class="rcm-hero__overlay"></div>
      </div>
      <div class="rcm-hero__particles" id="rcm-particles"></div>
      <div class="rcm-hero__abstract-ring"></div>
      <div class="rcm-hero__abstract-blob"></div>
      <div class="rcm-hero__content" data-reveal>
        <div class="rcm-hero__badge"><span class="rcm-hero__badge-dot"></span><span>What We Offer</span></div>
        <h1 class="rcm-hero__heading">Revenue Cycle Management <em>as a Service</em></h1>
        <p class="rcm-hero__sub">Optimise reimbursement, reduce denials, and improve cash flow with intelligent, scalable, healthcare-focused RCM operations.</p>
      </div>
    </section>

    <section class="rcm-overview" id="rcm-overview">
      
      <div class="rcm-overview__blob"></div>
      <div class="rcm-overview__dots"></div>
      <div class="rcm-overview__grid">
        <div class="rcm-overview__text" data-reveal-left>
          <span class="rcm-eyebrow">Overview</span>
          <h2 class="rcm-section-heading">Revenue Cycle Management <em>(RCM) as a Service</em></h2>
          <p>Optimise financial performance and strengthen operational efficiency with our comprehensive Revenue Cycle Management (RCM) as a Service offering. We help healthcare providers transform the entire revenue lifecycle from patient access and eligibility verification to medical coding, claims management, denial resolution, payment posting, and accounts receivable optimisation. By combining deep healthcare domain expertise, intelligent automation, AI-enabled workflows, and proven operational excellence, we enable organisations to improve financial outcomes while enhancing the patient and provider experience.</p>
          <p>We partner with hospitals, health systems, physician groups, ambulatory care providers, specialty practices, and healthcare organisations across the care continuum to manage complex reimbursement environments and optimise every stage of the revenue cycle. Our services are designed to improve cash flow, accelerate reimbursement, reduce administrative overhead, minimise claim denials, and strengthen financial performance while ensuring compliance with evolving payer requirements and regulatory standards.</p>
          <p>Our approach extends beyond traditional claims processing. We engineer intelligent, end-to-end revenue cycle operations that integrate people, process, technology, analytics, and automation into a unified operating model. Leveraging advanced AI, intelligent automation, predictive analytics, and workflow orchestration, we streamline administrative processes, improve coding accuracy, enhance denial prevention, and provide greater visibility into revenue performance across the enterprise.</p>
          <p>Built on governance-first principles, our RCM services incorporate robust quality assurance, compliance management, audit controls, performance monitoring, and continuous process optimisation. Every engagement is designed to deliver measurable improvements in operational efficiency, financial performance, regulatory compliance, and patient satisfaction while adapting to evolving reimbursement models and business requirements.</p>
          <p>The result is a modern, intelligent, and scalable revenue cycle operation that accelerates collections, improves reimbursement accuracy, reduces operating costs, strengthens compliance, and provides healthcare organisations with a sustainable foundation for long-term financial health and operational excellence.</p>
          <div class="rcm-overview__actions">
            <a routerLink="/contact-us" class="rcm-btn rcm-btn--primary">Talk to an Expert</a>
            <a routerLink="/what-we-offer" class="rcm-btn rcm-btn--outline">All Services <i class="ph ph-arrow-right"></i></a>
          </div>
        </div>

        <div class="rcm-overview__deliver" data-reveal-right>
          <div class="rcm-deliver-box">
            <div class="rcm-deliver-box__header">
              <i class="ph ph-heartbeat"></i>
              <h3>What we deliver</h3>
            </div>
            <ul class="rcm-deliver-box__list">
              <li><a routerLink="/what-we-offer/rcm/patient-access-front-end-verification" class="rcm-deliver-link"><span>Patient access and front-end verification.</span><i class="ph ph-arrow-right"></i></a></li>
              <li><a routerLink="/what-we-offer/rcm/charge-capture-clinical-coding-support" class="rcm-deliver-link"><span>Charge capture and clinical coding support.</span><i class="ph ph-arrow-right"></i></a></li>
              <li><a routerLink="/what-we-offer/rcm/claims-submission-clearinghouse-coordination" class="rcm-deliver-link"><span>Claims submission and clearinghouse coordination.</span><i class="ph ph-arrow-right"></i></a></li>
              <li><a routerLink="/what-we-offer/rcm/denial-prevention-management-appeals" class="rcm-deliver-link"><span>Denial prevention, management, and appeals.</span><i class="ph ph-arrow-right"></i></a></li>
              <li><a routerLink="/what-we-offer/rcm/payment-posting-reconciliation" class="rcm-deliver-link"><span>Payment posting and reconciliation.</span><i class="ph ph-arrow-right"></i></a></li>
              <li><a routerLink="/what-we-offer/rcm/underpayment-detection-contract-compliance" class="rcm-deliver-link"><span>Underpayment detection and contract compliance.</span><i class="ph ph-arrow-right"></i></a></li>
              <li><a routerLink="/what-we-offer/rcm/patient-billing-collections-support" class="rcm-deliver-link"><span>Patient billing and collections support.</span><i class="ph ph-arrow-right"></i></a></li>
              <li><a routerLink="/what-we-offer/rcm/reporting-analytics-kpi-tracking" class="rcm-deliver-link"><span>Reporting, analytics, and KPI tracking.</span><i class="ph ph-arrow-right"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="rcm-why">
      <div class="rcm-why__bg-grid"></div>
      <div class="rcm-why__glow-1"></div>
      <div class="rcm-why__glow-2"></div>
      <div class="rcm-why__inner">
        <div class="rcm-why__header" data-reveal>
          <span class="rcm-eyebrow rcm-eyebrow--light">Why It Matters</span>
          <h2 class="rcm-section-heading rcm-section-heading--light">Why it matters</h2>
          <p class="rcm-why__text">Today's healthcare revenue cycle is more complex than ever, driven by evolving payer policies, changing reimbursement models, increasing regulatory requirements, and growing patient financial responsibility. Healthcare providers must balance financial performance with exceptional patient care while navigating rising administrative costs, workforce challenges, and increasing pressure to improve operational efficiency.</p>
          <p class="rcm-why__text" style="margin-top:1.2rem;">Our Revenue Cycle Management as a Service offering helps organisations overcome these challenges by combining deep healthcare expertise, intelligent automation, AI-enabled workflows, and proven operational best practices to optimise every stage of the revenue lifecycle. By reducing revenue leakage, improving first-pass claim acceptance, strengthening coding accuracy, and streamlining reimbursement processes, we help healthcare organisations maximise financial performance while enabling clinical teams to focus on delivering high-quality patient care.</p>
        </div>
      </div>
    </section>

    <section class="rcm-value" data-reveal>
      <div class="rcm-value__ring"></div>
      <div class="rcm-value__inner">
        <span class="rcm-eyebrow">Business Value</span>
        <h2 class="rcm-section-heading">Business value</h2>
        <ul class="rcm-value__list">
          <li><i class="ph ph-check-circle"></i><span>Accelerate reimbursement cycles and improve cash flow.</span></li>
          <li><i class="ph ph-check-circle"></i><span>Increase first-pass claims acceptance and reduce denial rates.</span></li>
          <li><i class="ph ph-check-circle"></i><span>Minimise revenue leakage through proactive eligibility verification, coding accuracy, and claims validation.</span></li>
          <li><i class="ph ph-check-circle"></i><span>Reduce administrative costs and improve operational efficiency through intelligent automation and streamlined workflows.</span></li>
          <li><i class="ph ph-check-circle"></i><span>Enhance visibility into financial performance with real-time reporting, analytics, and operational dashboards.</span></li>
          <li><i class="ph ph-check-circle"></i><span>Strengthen regulatory compliance and payer adherence through robust governance and quality assurance.</span></li>
          <li><i class="ph ph-check-circle"></i><span>Improve patient financial experiences through accurate billing, transparent communication, and efficient payment processes.</span></li>
        </ul>
      </div>
    </section>

    <section class="rcm-governance">
      <div class="rcm-governance__inner" data-reveal>
        <div class="rcm-governance__icon-wrap"><i class="ph ph-shield-check"></i></div>
        <h2 class="rcm-section-heading">Governance and <em>Control</em></h2>
        <p>Our RCM services are delivered through a governance-first operating model that embeds quality assurance, compliance, security, and continuous performance management into every stage of the revenue cycle. We implement comprehensive audit controls, coding quality reviews, payer compliance monitoring, workflow governance, performance scorecards, and AI-assisted operational oversight to ensure accuracy, transparency, and accountability. Continuous process optimisation, KPI monitoring, and human-in-the-loop quality controls enable healthcare organisations to achieve sustainable financial performance while maintaining the highest standards of regulatory compliance and operational excellence.</p>
      </div>
    </section>

    <section class="rcm-tagline">
      <div class="rcm-tagline__inner" data-reveal>
        <p>Transform your revenue cycle into an intelligent, scalable, and compliant financial engine that accelerates reimbursement, maximises revenue integrity, and supports long-term organisational growth.</p>
        <a routerLink="/contact-us" class="rcm-tagline__btn">Start Your Journey <i class="ph ph-arrow-right"></i></a>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; font-family: 'DM Sans', system-ui, sans-serif; }
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :host { --orange:#E87722; --blue:#1B3A8F; --dark:#111; --bg:#f5f5f3; --mid:#555; }
    a { text-decoration: none; }
    .breadcrumb-bar { padding:.7rem 2rem; background:#f0f2f8; font-size:.8rem; display:flex; gap:.4rem; flex-wrap:wrap; }
    .breadcrumb-bar a { color:var(--blue); font-weight:600; }
    .breadcrumb-bar .sep { color:#aaa; }
    .breadcrumb-bar .current { color:var(--mid); }

    .rcm-hero { position:relative; height:60vh; min-height:400px; overflow:hidden; }
    .rcm-hero__bg { position:absolute; inset:0; }
    .rcm-hero__bg img { width:100%; height:100%; object-fit:cover; }
    .rcm-hero__overlay { position:absolute; inset:0; background: radial-gradient(ellipse at 20% 30%, rgba(232, 119, 34, 0.28), transparent 55%), radial-gradient(ellipse at 80% 70%, rgba(27, 58, 143, 0.45), transparent 55%), linear-gradient(180deg, rgba(16, 21, 42, 0.35), rgba(16, 21, 42, 0.85)); }
    .rcm-hero__abstract-ring { position:absolute; top:-60px; right:-60px; width:400px; height:400px; border:1.5px solid rgba(255,255,255,.06); border-radius:50%; animation:spinSlow 40s linear infinite; }
    .rcm-hero__abstract-blob { position:absolute; bottom:-80px; left:15%; width:300px; height:300px; border-radius:50%; background:radial-gradient(circle, rgba(232,119,34,.12), transparent 70%); animation:drift 18s ease-in-out infinite; }
    .rcm-hero__particles { position:absolute; inset:0; z-index:1; pointer-events:none; }
    .rcm-hero__particle { position:absolute; bottom:-10px; background:rgba(255,255,255,.4); border-radius:50%; animation:rise linear infinite; }
    @keyframes rise { to { transform:translateY(-100vh) scale(0); opacity:0; } }
    .rcm-hero__content { position:absolute; inset:0; z-index:2; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:2rem; }
    .rcm-hero__badge { display:inline-flex; gap:.5rem; background:rgba(255,255,255,.1); border:1px solid rgba(255,255,255,.2); border-radius:999px; padding:.35rem 1.1rem; margin-bottom:1.5rem; opacity:0; transform:translateY(12px); animation:fadeUp .8s .3s forwards; }
    .rcm-hero__badge-dot { width:7px; height:7px; border-radius:50%; background:var(--orange); }
    .rcm-hero__badge span:last-child { color:#fff; font-size:.78rem; font-weight:600; letter-spacing:.06em; text-transform:uppercase; }
    .rcm-hero__heading { font-family:"DM Serif Display",serif; font-size:clamp(1.8rem,4vw,3rem); color:#fff; font-weight:400; line-height:1.1; margin-bottom:1.2rem; opacity:0; transform:translateY(20px); animation:fadeUp 1s .5s forwards; }
    .rcm-hero__heading em { color:var(--orange); font-style:italic; }
    .rcm-hero__sub { font-size:.95rem; color:rgba(255,255,255,.75); max-width:680px; line-height:1.6; margin-bottom:1.5rem; opacity:0; transform:translateY(20px); animation:fadeUp 1s .7s forwards; }
    .rcm-hero__cta { display:inline-flex; gap:.5rem; background:var(--orange); color:#fff; font-weight:600; font-size:.9rem; padding:.75rem 1.8rem; border-radius:999px; opacity:0; transform:translateY(20px); animation:fadeUp 1s .9s forwards; }
    @keyframes fadeUp { to { opacity:1; transform:translateY(0); } }

    .rcm-overview { padding:6rem 3rem; max-width:1300px; margin:0 auto; position:relative; overflow:hidden; }
    .rcm-overview__blob { position:absolute; top:-60px; right:-80px; width:300px; height:300px; border-radius:50%; background:radial-gradient(circle, rgba(27,58,143,.06), transparent 70%); animation:drift 15s ease-in-out infinite; }
    .rcm-overview__dots { position:absolute; bottom:-40px; left:-40px; width:150px; height:150px; background-image:radial-gradient(circle, rgba(232,119,34,.2) 1.5px, transparent 1.5px); background-size:16px 16px; }
    .rcm-overview__grid { display:grid; grid-template-columns:1.35fr 1fr; gap:5rem; align-items:start; }
    .rcm-overview__text p { font-size:1rem; color:#444; line-height:1.85; margin-bottom:1.2rem; }
    .rcm-overview__actions { display:flex; gap:.9rem; flex-wrap:wrap; margin-top:2rem; }
    .rcm-deliver-box { background:#fff; border-radius:24px; padding:2.2rem 2rem; box-shadow:0 12px 48px rgba(27,58,143,.1); border:1px solid rgba(27,58,143,.08); position:sticky; top:100px; overflow:hidden; }
    .rcm-deliver-box::before { content:""; position:absolute; top:0; left:0; width:100%; height:4px; background:linear-gradient(90deg,var(--blue),var(--orange)); }
    .rcm-deliver-box__header { display:flex; align-items:center; gap:.75rem; margin-bottom:1.6rem; padding-bottom:1.2rem; border-bottom:1px solid rgba(27,58,143,.08); }
    .rcm-deliver-box__header i.ph { font-size:1.5rem; color:var(--blue); }
    .rcm-deliver-box__header h3 { font-family:"DM Serif Display",serif; font-size:1.2rem; font-weight:400; }
    .rcm-deliver-box__list { list-style:none; display:flex; flex-direction:column; gap:.3rem; }
    .rcm-deliver-link { display:flex; justify-content:space-between; gap:.75rem; padding:.85rem 1rem; border-radius:12px; border:1px solid transparent; color:var(--dark); font-size:.93rem; font-weight:500; line-height:1.4; transition:all .25s; }
    .rcm-deliver-link:hover { background:linear-gradient(135deg, rgba(27,58,143,.06), rgba(232,119,34,.04)); border-color:rgba(27,58,143,.12); color:var(--blue); transform:translateX(4px); }
    .rcm-deliver-link i.ph { color:var(--orange); font-size:.9rem; }
    .rcm-eyebrow { display:inline-block; padding:.3rem .9rem; border-radius:999px; background:rgba(232,119,34,.1); color:var(--orange); font-size:.72rem; font-weight:700; letter-spacing:.12em; text-transform:uppercase; margin-bottom:1rem; }
    .rcm-eyebrow--light { background:rgba(255,255,255,.12); color:rgba(255,255,255,.8); }
    .rcm-section-heading { font-family:"DM Serif Display",serif; font-size:clamp(1.5rem,3vw,2.1rem); font-weight:400; line-height:1.2; margin-bottom:1.6rem; }
    .rcm-section-heading em { color:var(--orange); font-style:italic; }
    .rcm-section-heading--light { color:#fff; }
    .rcm-btn { display:inline-flex; align-items:center; gap:.45rem; font-weight:700; font-size:.88rem; padding:.7rem 1.6rem; border-radius:999px; }
    .rcm-btn--primary { background:var(--orange); color:#fff; }
    .rcm-btn--outline { color:var(--blue); border:2px solid var(--blue); }

    .rcm-why { padding:5.5rem 3rem; background:linear-gradient(135deg,#060d1f,#0f1f4a); position:relative; overflow:hidden; }
    .rcm-why__bg-grid { position:absolute; inset:0; background-image:linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px); background-size:60px 60px; }
    .rcm-why__glow-1 { position:absolute; width:400px; height:400px; border-radius:50%; background:radial-gradient(circle,rgba(232,119,34,.15),transparent 70%); top:-100px; right:-100px; animation:drift 18s ease-in-out infinite; }
    .rcm-why__glow-2 { position:absolute; width:350px; height:350px; border-radius:50%; background:radial-gradient(circle,rgba(123,163,255,.1),transparent 70%); bottom:-120px; left:-80px; animation:drift 14s ease-in-out infinite reverse; }
    .rcm-why__inner { max-width:900px; margin:0 auto; text-align:center; position:relative; z-index:2; }
    .rcm-why__text { font-size:1rem; color:rgba(255,255,255,.72); line-height:1.85; }

    .rcm-value { padding:6rem 3rem; background:var(--bg); position:relative; overflow:hidden; }
    .rcm-value__ring { position:absolute; top:60px; right:-60px; width:180px; height:180px; border:1.5px dashed rgba(232,119,34,.12); border-radius:50%; animation:spinSlow 35s linear infinite reverse; }
    .rcm-value__inner { max-width:860px; margin:0 auto; }
    .rcm-value__list { list-style:none; margin-top:2.5rem; display:flex; flex-direction:column; gap:1rem; }
    .rcm-value__list li { display:flex; gap:.9rem; background:#fff; border-radius:14px; padding:1.1rem 1.4rem; border:1px solid rgba(27,58,143,.06); }
    .rcm-value__list i.ph { color:var(--orange); margin-top:.1rem; }
    .rcm-value__list span { font-size:.95rem; color:#333; line-height:1.7; }

    .rcm-governance { padding:5rem 3rem; background:linear-gradient(180deg,var(--bg),#eef0f7); }
    .rcm-governance__inner { max-width:900px; margin:0 auto; background:#fff; border-radius:24px; padding:3rem 3.5rem; box-shadow:0 10px 40px rgba(27,58,143,.08); border:1px solid rgba(27,58,143,.06); position:relative; overflow:hidden; text-align:center; }
    .rcm-governance__inner::before { content:""; position:absolute; top:0; left:0; width:100%; height:4px; background:linear-gradient(90deg,var(--blue),var(--orange)); }
    .rcm-governance__icon-wrap { width:60px; height:60px; margin:0 auto 1.5rem; border-radius:16px; background:linear-gradient(135deg,rgba(27,58,143,.08),rgba(232,119,34,.06)); display:flex; align-items:center; justify-content:center; }
    .rcm-governance p { font-size:1rem; color:#444; line-height:1.85; text-align:left; }

    .rcm-tagline { background:linear-gradient(135deg,#0f1f4a,#1B3A8F); padding:3rem; text-align:center; }
    .rcm-tagline__inner { max-width:860px; margin:0 auto; display:flex; flex-direction:column; align-items:center; gap:1.8rem; }
    .rcm-tagline p { font-family:"DM Serif Display",serif; font-size:clamp(1.1rem,2vw,1.4rem); font-style:italic; color:rgba(255,255,255,.9); line-height:1.6; }
    .rcm-tagline__btn { display:inline-flex; gap:.5rem; background:var(--orange); color:#fff; font-weight:700; font-size:.9rem; padding:.75rem 1.8rem; border-radius:999px; }

    @keyframes spinSlow { to { transform:rotate(360deg); } }
    @keyframes drift { 0%,100%{transform:translate(0,0)} 25%{transform:translate(20px,-10px)} 50%{transform:translate(-10px,-20px)} 75%{transform:translate(-20px,10px)} }
    [data-reveal] { opacity:0; transform:translateY(40px); transition:opacity .8s cubic-bezier(.22,1,.36,1), transform .8s cubic-bezier(.22,1,.36,1); }
    [data-reveal].is-visible { opacity:1; transform:translateY(0); }
    [data-reveal-left] { opacity:0; transform:translateX(-40px); transition:opacity .8s cubic-bezier(.22,1,.36,1), transform .8s cubic-bezier(.22,1,.36,1); }
    [data-reveal-left].is-visible { opacity:1; transform:translateX(0); }
    [data-reveal-right] { opacity:0; transform:translateX(40px); transition:opacity .8s cubic-bezier(.22,1,.36,1), transform .8s cubic-bezier(.22,1,.36,1); }
    [data-reveal-right].is-visible { opacity:1; transform:translateX(0); }

    @media (max-width:1024px) { .rcm-overview{padding:4rem 1.5rem;} .rcm-overview__grid{grid-template-columns:1fr; gap:2.5rem;} }
    @media (max-width:768px) { .rcm-hero{height:50vh; min-height:320px;} .rcm-why,.rcm-value,.rcm-governance{padding:3.5rem 1.2rem;} .rcm-governance__inner{padding:2rem 1.5rem;} .rcm-tagline{padding:2rem 1.2rem;} }
  `],
})
export class Rcm implements AfterViewInit, OnDestroy {
  private revealObserver: IntersectionObserver | null = null;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const host = this.el.nativeElement as HTMLElement;
    const container = host.querySelector('#rcm-particles');
    if (container) {
      for (let i = 0; i < 18; i++) {
        const p = document.createElement('span');
        p.className = 'rcm-hero__particle';
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


