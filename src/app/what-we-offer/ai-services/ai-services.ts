import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ai-services',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="breadcrumb-bar">
      <a routerLink="/">Home</a><span class="sep">></span>
      <a routerLink="/what-we-offer">What We Offer</a><span class="sep">></span>
      <span class="current">AI as a Service</span>
    </div>

    <section class="ai-hero">
      <div class="ai-hero__bg">
        <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1800&q=80" alt="AI Services" />
        <div class="ai-hero__overlay"></div>
      </div>
      <div class="ai-hero__particles" id="ai-particles"></div>
      <div class="ai-hero__abstract-ring"></div>
      <div class="ai-hero__abstract-blob"></div>
      <div class="ai-hero__content" data-reveal>
        <div class="ai-hero__badge"><span class="ai-hero__badge-dot"></span><span>What We Offer</span></div>
        <h1 class="ai-hero__heading">AI <em>as a Service</em></h1>
        <p class="ai-hero__sub">Build secure, scalable, and enterprise-ready AI capabilities that accelerate innovation and deliver measurable business value.</p>
        <a href="#ai-overview" class="ai-hero__cta">Explore Capabilities
          <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
    </section>

    <section class="ai-overview" id="ai-overview">
      <div class="ai-overview__blob"></div>
      <div class="ai-overview__dots"></div>
      <div class="ai-overview__grid">
        <div class="ai-overview__text" data-reveal-left>
          <span class="ai-eyebrow">Overview</span>
          <h2 class="ai-section-heading">AI as a Service <em>(AIaaS)</em></h2>
          <p>Accelerate your AI journey with a flexible, scalable, and enterprise-ready AI as a Service model that enables your organisation to harness the power of artificial intelligence without the complexity of building and managing an in-house AI ecosystem. Our AI as a Service offering provides access to advanced AI capabilities, industry expertise, and proven implementation frameworks that help organisations accelerate innovation, improve operational efficiency, enhance decision-making, and create differentiated customer experiences.</p>
          <p>We partner with clients throughout the entire AI lifecycle, from identifying high-value business opportunities and defining AI strategy to solution design, implementation, integration, governance, and continuous optimisation. Rather than deploying technology for its own sake, we focus on delivering AI solutions that address real business challenges, generate measurable outcomes, and scale securely across the enterprise.</p>
          <p>Our AI as a Service model combines cutting-edge AI technologies, enterprise integration capabilities, robust governance frameworks, and domain expertise to help organisations rapidly adopt AI while minimising implementation risk and accelerating time-to-value. Whether you are exploring your first AI initiative or scaling AI across multiple business functions, we provide the technology, talent, and operational support needed to transform AI from isolated pilots into a sustainable enterprise capability.</p>
          <p>Built on secure, cloud-native, and governance-first architectures, our AI as a Service solutions integrate seamlessly with existing enterprise applications, data platforms, and business processes while ensuring transparency, regulatory compliance, and responsible AI adoption. The result is a flexible AI platform that evolves with your business, continuously adapts to changing requirements, and delivers long-term competitive advantage through intelligent automation and data-driven innovation.</p>
          <div class="ai-overview__actions">
            <a routerLink="/contact-us" class="ai-btn ai-btn--primary">Talk to an Expert</a>
            <a routerLink="/what-we-offer" class="ai-btn ai-btn--outline">All Services <i class="ph ph-arrow-right"></i></a>
          </div>
        </div>

        <div class="ai-overview__deliver" data-reveal-right>
          <div class="ai-deliver-box">
            <div class="ai-deliver-box__header">
              <i class="ph ph-brain"></i>
              <h3>What we deliver</h3>
            </div>
            <ul class="ai-deliver-box__list">
              <li><a routerLink="/what-we-offer/ai-services/ai-strategy-use-case-discovery" class="ai-deliver-link"><span>AI strategy and use-case discovery.</span><i class="ph ph-arrow-right"></i></a></li>
              <li><a routerLink="/what-we-offer/ai-services/machine-learning-predictive-modelling" class="ai-deliver-link"><span>Machine learning and predictive modelling.</span><i class="ph ph-arrow-right"></i></a></li>
              <li><a routerLink="/what-we-offer/ai-services/natural-language-processing-conversational-ai" class="ai-deliver-link"><span>Natural language processing and conversational AI.</span><i class="ph ph-arrow-right"></i></a></li>
              <li><a routerLink="/what-we-offer/ai-services/computer-vision-intelligent-automation" class="ai-deliver-link"><span>Computer vision and intelligent automation.</span><i class="ph ph-arrow-right"></i></a></li>
              <li><a routerLink="/what-we-offer/ai-services/data-preparation-model-integration" class="ai-deliver-link"><span>Data preparation and model integration.</span><i class="ph ph-arrow-right"></i></a></li>
              <li><a routerLink="/what-we-offer/ai-services/deployment-monitoring-optimization" class="ai-deliver-link"><span>Deployment, monitoring, and optimization.</span><i class="ph ph-arrow-right"></i></a></li>
              <li><a routerLink="/what-we-offer/ai-services/governance-security-responsible-ai-controls" class="ai-deliver-link"><span>Governance, security, and responsible AI controls.</span><i class="ph ph-arrow-right"></i></a></li>
              <li><a routerLink="/what-we-offer/ai-services/ongoing-support-enhancement" class="ai-deliver-link"><span>Ongoing support and enhancement.</span><i class="ph ph-arrow-right"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="ai-why">
      <div class="ai-why__bg-grid"></div>
      <div class="ai-why__glow-1"></div>
      <div class="ai-why__glow-2"></div>
      <div class="ai-why__inner">
        <div class="ai-why__header" data-reveal>
          <span class="ai-eyebrow ai-eyebrow--light">Why It Matters</span>
          <h2 class="ai-section-heading ai-section-heading--light">Why it matters</h2>
          <p class="ai-why__text">Artificial Intelligence delivers meaningful business value only when it is applied to the right business challenges, integrated into enterprise workflows, and supported by a robust operating model. However, many organisations struggle to adopt AI at scale due to shortages of specialised talent, complex technology landscapes, high infrastructure costs, and evolving governance requirements.</p>
          <p class="ai-why__text" style="margin-top:1.2rem;">AI as a Service addresses these challenges by providing a flexible, consumption-based model that accelerates AI adoption while reducing implementation complexity and operational risk. Organisations gain immediate access to advanced AI capabilities, proven delivery methodologies, and specialised expertise without the time and investment required to build and maintain an in-house AI ecosystem.</p>
        </div>
      </div>
    </section>

    <section class="ai-value" data-reveal>
      <div class="ai-value__ring"></div>
      <div class="ai-value__inner">
        <span class="ai-eyebrow">Business Value</span>
        <h2 class="ai-section-heading">Business value</h2>
        <ul class="ai-value__list">
          <li><i class="ph ph-check-circle"></i><span>Accelerate AI adoption and reduce time-to-value across business functions.</span></li>
          <li><i class="ph ph-check-circle"></i><span>Eliminate the complexity of building, managing, and scaling internal AI infrastructure and specialised teams.</span></li>
          <li><i class="ph ph-check-circle"></i><span>Improve operational efficiency, productivity, and decision-making through enterprise-grade AI solutions.</span></li>
          <li><i class="ph ph-check-circle"></i><span>Enable rapid innovation with flexible, scalable AI capabilities that evolve alongside business needs.</span></li>
          <li><i class="ph ph-check-circle"></i><span>Reduce implementation risk through proven delivery frameworks, governance, and best practices.</span></li>
          <li><i class="ph ph-check-circle"></i><span>Seamlessly integrate AI with existing enterprise applications, data platforms, and business processes.</span></li>
          <li><i class="ph ph-check-circle"></i><span>Align AI investments with strategic business objectives to maximise measurable business value and return on investment.</span></li>
        </ul>
      </div>
    </section>

    <section class="ai-governance">
      <div class="ai-governance__inner" data-reveal>
        <div class="ai-governance__icon-wrap"><i class="ph ph-shield-check"></i></div>
        <h2 class="ai-section-heading">Governance and <em>Control</em></h2>
        <p>Our AI as a Service offering is built on a governance-first framework that ensures AI solutions are secure, transparent, scalable, and aligned with enterprise and regulatory requirements. Comprehensive AI governance, robust security controls, responsible AI practices, explainability, continuous performance monitoring, and lifecycle management are embedded throughout every engagement. Whether deploying predictive AI, generative AI, or agentic AI solutions, we help organisations establish trusted AI capabilities that are resilient, compliant, and designed for long-term success.</p>
      </div>
    </section>

    <section class="ai-tagline">
      <div class="ai-tagline__inner" data-reveal>
        <p>Accelerate innovation with AI as a Service, transforming artificial intelligence into a secure, scalable, and measurable enterprise capability.</p>
        <a routerLink="/contact-us" class="ai-tagline__btn">Start Your Journey <i class="ph ph-arrow-right"></i></a>
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

    .ai-hero { position:relative; height:60vh; min-height:400px; overflow:hidden; }
    .ai-hero__bg { position:absolute; inset:0; }
    .ai-hero__bg img { width:100%; height:100%; object-fit:cover; }
    .ai-hero__overlay { position:absolute; inset:0; background:linear-gradient(135deg, rgba(6,13,31,.88), rgba(27,58,143,.7)); }
    .ai-hero__abstract-ring { position:absolute; top:-60px; right:-60px; width:400px; height:400px; border:1.5px solid rgba(255,255,255,.06); border-radius:50%; animation:spinSlow 40s linear infinite; }
    .ai-hero__abstract-blob { position:absolute; bottom:-80px; left:15%; width:300px; height:300px; border-radius:50%; background:radial-gradient(circle, rgba(232,119,34,.12), transparent 70%); animation:drift 18s ease-in-out infinite; }
    .ai-hero__particles { position:absolute; inset:0; z-index:1; pointer-events:none; }
    .ai-hero__particle { position:absolute; bottom:-10px; background:rgba(255,255,255,.4); border-radius:50%; animation:rise linear infinite; }
    @keyframes rise { to { transform:translateY(-100vh) scale(0); opacity:0; } }
    .ai-hero__content { position:absolute; inset:0; z-index:2; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:2rem; }
    .ai-hero__badge { display:inline-flex; gap:.5rem; background:rgba(255,255,255,.1); border:1px solid rgba(255,255,255,.2); border-radius:999px; padding:.35rem 1.1rem; margin-bottom:1.5rem; opacity:0; transform:translateY(12px); animation:fadeUp .8s .3s forwards; }
    .ai-hero__badge-dot { width:7px; height:7px; border-radius:50%; background:var(--orange); }
    .ai-hero__badge span:last-child { color:#fff; font-size:.78rem; font-weight:600; letter-spacing:.06em; text-transform:uppercase; }
    .ai-hero__heading { font-family:"DM Serif Display",serif; font-size:clamp(1.8rem,4vw,3rem); color:#fff; font-weight:400; line-height:1.1; margin-bottom:1.2rem; opacity:0; transform:translateY(20px); animation:fadeUp 1s .5s forwards; }
    .ai-hero__heading em { color:var(--orange); font-style:italic; }
    .ai-hero__sub { font-size:.95rem; color:rgba(255,255,255,.75); max-width:680px; line-height:1.6; margin-bottom:1.5rem; opacity:0; transform:translateY(20px); animation:fadeUp 1s .7s forwards; }
    .ai-hero__cta { display:inline-flex; gap:.5rem; background:var(--orange); color:#fff; font-weight:600; font-size:.9rem; padding:.75rem 1.8rem; border-radius:999px; opacity:0; transform:translateY(20px); animation:fadeUp 1s .9s forwards; }
    @keyframes fadeUp { to { opacity:1; transform:translateY(0); } }

    .ai-overview { padding:6rem 3rem; max-width:1300px; margin:0 auto; position:relative; overflow:hidden; }
    .ai-overview__blob { position:absolute; top:-60px; right:-80px; width:300px; height:300px; border-radius:50%; background:radial-gradient(circle, rgba(27,58,143,.06), transparent 70%); animation:drift 15s ease-in-out infinite; }
    .ai-overview__dots { position:absolute; bottom:-40px; left:-40px; width:150px; height:150px; background-image:radial-gradient(circle, rgba(232,119,34,.2) 1.5px, transparent 1.5px); background-size:16px 16px; }
    .ai-overview__grid { display:grid; grid-template-columns:1.35fr 1fr; gap:5rem; align-items:start; }
    .ai-overview__text p { font-size:1rem; color:#444; line-height:1.85; margin-bottom:1.2rem; }
    .ai-overview__actions { display:flex; gap:.9rem; flex-wrap:wrap; margin-top:2rem; }
    .ai-deliver-box { background:#fff; border-radius:24px; padding:2.2rem 2rem; box-shadow:0 12px 48px rgba(27,58,143,.1); border:1px solid rgba(27,58,143,.08); position:sticky; top:100px; overflow:hidden; }
    .ai-deliver-box::before { content:""; position:absolute; top:0; left:0; width:100%; height:4px; background:linear-gradient(90deg,var(--blue),var(--orange)); }
    .ai-deliver-box__header { display:flex; align-items:center; gap:.75rem; margin-bottom:1.6rem; padding-bottom:1.2rem; border-bottom:1px solid rgba(27,58,143,.08); }
    .ai-deliver-box__header i.ph { font-size:1.5rem; color:var(--blue); }
    .ai-deliver-box__header h3 { font-family:"DM Serif Display",serif; font-size:1.2rem; font-weight:400; }
    .ai-deliver-box__list { list-style:none; display:flex; flex-direction:column; gap:.3rem; }
    .ai-deliver-link { display:flex; justify-content:space-between; gap:.75rem; padding:.85rem 1rem; border-radius:12px; border:1px solid transparent; color:var(--dark); font-size:.93rem; font-weight:500; line-height:1.4; transition:all .25s; }
    .ai-deliver-link:hover { background:linear-gradient(135deg, rgba(27,58,143,.06), rgba(232,119,34,.04)); border-color:rgba(27,58,143,.12); color:var(--blue); transform:translateX(4px); }
    .ai-deliver-link i.ph { color:var(--orange); font-size:.9rem; }
    .ai-eyebrow { display:inline-block; padding:.3rem .9rem; border-radius:999px; background:rgba(232,119,34,.1); color:var(--orange); font-size:.72rem; font-weight:700; letter-spacing:.12em; text-transform:uppercase; margin-bottom:1rem; }
    .ai-eyebrow--light { background:rgba(255,255,255,.12); color:rgba(255,255,255,.8); }
    .ai-section-heading { font-family:"DM Serif Display",serif; font-size:clamp(1.5rem,3vw,2.1rem); font-weight:400; line-height:1.2; margin-bottom:1.6rem; }
    .ai-section-heading em { color:var(--orange); font-style:italic; }
    .ai-section-heading--light { color:#fff; }
    .ai-btn { display:inline-flex; align-items:center; gap:.45rem; font-weight:700; font-size:.88rem; padding:.7rem 1.6rem; border-radius:999px; }
    .ai-btn--primary { background:var(--orange); color:#fff; }
    .ai-btn--outline { color:var(--blue); border:2px solid var(--blue); }

    .ai-why { padding:5.5rem 3rem; background:linear-gradient(135deg,#060d1f,#0f1f4a); position:relative; overflow:hidden; }
    .ai-why__bg-grid { position:absolute; inset:0; background-image:linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px); background-size:60px 60px; }
    .ai-why__glow-1 { position:absolute; width:400px; height:400px; border-radius:50%; background:radial-gradient(circle,rgba(232,119,34,.15),transparent 70%); top:-100px; right:-100px; animation:drift 18s ease-in-out infinite; }
    .ai-why__glow-2 { position:absolute; width:350px; height:350px; border-radius:50%; background:radial-gradient(circle,rgba(123,163,255,.1),transparent 70%); bottom:-120px; left:-80px; animation:drift 14s ease-in-out infinite reverse; }
    .ai-why__inner { max-width:900px; margin:0 auto; text-align:center; position:relative; z-index:2; }
    .ai-why__text { font-size:1rem; color:rgba(255,255,255,.72); line-height:1.85; }

    .ai-value { padding:6rem 3rem; background:var(--bg); position:relative; overflow:hidden; }
    .ai-value__ring { position:absolute; top:60px; right:-60px; width:180px; height:180px; border:1.5px dashed rgba(232,119,34,.12); border-radius:50%; animation:spinSlow 35s linear infinite reverse; }
    .ai-value__inner { max-width:860px; margin:0 auto; }
    .ai-value__list { list-style:none; margin-top:2.5rem; display:flex; flex-direction:column; gap:1rem; }
    .ai-value__list li { display:flex; gap:.9rem; background:#fff; border-radius:14px; padding:1.1rem 1.4rem; border:1px solid rgba(27,58,143,.06); }
    .ai-value__list i.ph { color:var(--orange); margin-top:.1rem; }
    .ai-value__list span { font-size:.95rem; color:#333; line-height:1.7; }

    .ai-governance { padding:5rem 3rem; background:linear-gradient(180deg,var(--bg),#eef0f7); }
    .ai-governance__inner { max-width:900px; margin:0 auto; background:#fff; border-radius:24px; padding:3rem 3.5rem; box-shadow:0 10px 40px rgba(27,58,143,.08); border:1px solid rgba(27,58,143,.06); position:relative; overflow:hidden; text-align:center; }
    .ai-governance__inner::before { content:""; position:absolute; top:0; left:0; width:100%; height:4px; background:linear-gradient(90deg,var(--blue),var(--orange)); }
    .ai-governance__icon-wrap { width:60px; height:60px; margin:0 auto 1.5rem; border-radius:16px; background:linear-gradient(135deg,rgba(27,58,143,.08),rgba(232,119,34,.06)); display:flex; align-items:center; justify-content:center; }
    .ai-governance p { font-size:1rem; color:#444; line-height:1.85; text-align:left; }

    .ai-tagline { background:linear-gradient(135deg,#0f1f4a,#1B3A8F); padding:3rem; text-align:center; }
    .ai-tagline__inner { max-width:860px; margin:0 auto; display:flex; flex-direction:column; align-items:center; gap:1.8rem; }
    .ai-tagline p { font-family:"DM Serif Display",serif; font-size:clamp(1.1rem,2vw,1.4rem); font-style:italic; color:rgba(255,255,255,.9); line-height:1.6; }
    .ai-tagline__btn { display:inline-flex; gap:.5rem; background:var(--orange); color:#fff; font-weight:700; font-size:.9rem; padding:.75rem 1.8rem; border-radius:999px; }

    @keyframes spinSlow { to { transform:rotate(360deg); } }
    @keyframes drift { 0%,100%{transform:translate(0,0)} 25%{transform:translate(20px,-10px)} 50%{transform:translate(-10px,-20px)} 75%{transform:translate(-20px,10px)} }
    [data-reveal] { opacity:0; transform:translateY(40px); transition:opacity .8s cubic-bezier(.22,1,.36,1), transform .8s cubic-bezier(.22,1,.36,1); }
    [data-reveal].is-visible { opacity:1; transform:translateY(0); }
    [data-reveal-left] { opacity:0; transform:translateX(-40px); transition:opacity .8s cubic-bezier(.22,1,.36,1), transform .8s cubic-bezier(.22,1,.36,1); }
    [data-reveal-left].is-visible { opacity:1; transform:translateX(0); }
    [data-reveal-right] { opacity:0; transform:translateX(40px); transition:opacity .8s cubic-bezier(.22,1,.36,1), transform .8s cubic-bezier(.22,1,.36,1); }
    [data-reveal-right].is-visible { opacity:1; transform:translateX(0); }

    @media (max-width:1024px) { .ai-overview{padding:4rem 1.5rem;} .ai-overview__grid{grid-template-columns:1fr; gap:2.5rem;} }
    @media (max-width:768px) { .ai-hero{height:50vh; min-height:320px;} .ai-why,.ai-value,.ai-governance{padding:3.5rem 1.2rem;} .ai-governance__inner{padding:2rem 1.5rem;} .ai-tagline{padding:2rem 1.2rem;} }
  `],
})
export class AiServices implements AfterViewInit, OnDestroy {
  private revealObserver: IntersectionObserver | null = null;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const host = this.el.nativeElement as HTMLElement;
    const container = host.querySelector('#ai-particles');
    if (container) {
      for (let i = 0; i < 18; i++) {
        const p = document.createElement('span');
        p.className = 'ai-hero__particle';
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
