import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customer-service-returns-agent',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="breadcrumb-bar">
      <a routerLink="/">Home</a><span class="sep">›</span>
      <a routerLink="/who-we-serve">Who We Serve</a><span class="sep">›</span>
      <a routerLink="/who-we-serve/retail/solutions">Our Solutions</a><span class="sep">›</span>
      <span class="current">Customer Service and Returns Agent</span>
    </div>

    <!-- PAGE HEADER -->
    <header class="ra-header">
      <div class="ra-header__glow-1"></div>
      <div class="ra-header__glow-2"></div>
      <div class="ra-header__grid-bg"></div>
      <div class="ra-header__inner">
        <div class="ra-header__badge">
          <i class="ph ph-headset"></i>
          <span>Agentic AI · Retail</span>
        </div>
        <h1 class="ra-header__title">Customer Service and <em>Returns Agent</em></h1>
        <p class="ra-header__sub">Automates routine customer service interactions, orchestrates returns and refund workflows, and provides personalised post-purchase support across every customer touchpoint.</p>
        <a routerLink="/contact-us" class="ra-header__cta">Talk to an Expert <i class="ph ph-arrow-right"></i></a>
      </div>
    </header>

    <!-- OVERVIEW -->
    <section class="ra-overview">
      <div class="ra-overview__inner">
        <span class="ra-eyebrow">Overview</span>
        <div class="ra-overview__body">
          <p>Deliver seamless post-purchase experiences with an intelligent <strong>Customer Service and Returns Agent</strong> that automates routine customer service interactions, orchestrates returns and refund workflows, and provides personalised support across every customer touchpoint. Powered by Agentic AI, the solution enables retailers to resolve enquiries faster, improve customer satisfaction, and reduce the operational burden on customer service teams while maintaining human oversight for complex or high-value cases.</p>
          <p>The solution integrates with eCommerce platforms, Order Management Systems (OMS), Warehouse Management Systems (WMS), Customer Relationship Management (CRM) applications, payment platforms, fulfilment providers, and customer support systems to create a unified service orchestration layer. By combining order information, shipment status, customer history, return policies, and service workflows, the agent understands customer intent, executes approved service actions, coordinates fulfilment processes, and keeps customers informed throughout every stage of the post-purchase journey.</p>
        </div>
      </div>
    </section>

    <!-- CORE CAPABILITIES -->
    <section class="ra-caps">
      <div class="ra-caps__ring"></div>
      <div class="ra-caps__inner">
        <div class="ra-caps__head" data-reveal>
          <span class="ra-eyebrow">Core Capabilities</span>
          <h2 class="ra-section-heading">What the agent <em>does</em></h2>
        </div>
        <div class="ra-caps__grid">
          <div class="ra-cap-item" data-reveal><span class="ra-cap-item__num">01</span><p>Respond to customer enquiries regarding orders, deliveries, shipments, and fulfilment status.</p></div>
          <div class="ra-cap-item" data-reveal><span class="ra-cap-item__num">02</span><p>Process eligible return, refund, cancellation, and exchange requests in accordance with business policies.</p></div>
          <div class="ra-cap-item" data-reveal><span class="ra-cap-item__num">03</span><p>Support customer account updates, order modifications, and post-purchase service requests.</p></div>
          <div class="ra-cap-item" data-reveal><span class="ra-cap-item__num">04</span><p>Coordinate workflows across order management, fulfilment, payments, logistics, and customer service systems.</p></div>
          <div class="ra-cap-item" data-reveal><span class="ra-cap-item__num">05</span><p>Escalate complex, policy-sensitive, or high-value cases to customer service specialists when required.</p></div>
          <div class="ra-cap-item" data-reveal><span class="ra-cap-item__num">06</span><p>Deliver proactive notifications and status updates throughout the returns and resolution process.</p></div>
          <div class="ra-cap-item" data-reveal><span class="ra-cap-item__num">07</span><p>Maintain comprehensive customer interaction histories and service records across all channels.</p></div>
          <div class="ra-cap-item" data-reveal><span class="ra-cap-item__num">08</span><p>Capture operational insights and service outcomes to support continuous process improvement.</p></div>
        </div>
      </div>
    </section>

    <!-- WHY IT MATTERS -->
    <section class="ra-why">
      <div class="ra-why__grid-bg"></div>
      <div class="ra-why__glow"></div>
      <div class="ra-why__inner" data-reveal>
        <span class="ra-eyebrow ra-eyebrow--light">Why It Matters</span>
        <h2 class="ra-section-heading ra-section-heading--light">Why it matters</h2>
        <p>Retailers experience significant fluctuations in customer service demand, particularly during seasonal peaks, promotional campaigns, product launches, and fulfilment disruptions. Traditional support models often depend on manual processes that increase response times, create inconsistent customer experiences, and place considerable pressure on contact centre teams. At the same time, customers increasingly expect rapid, transparent, and effortless post-purchase support.</p>
        <p>The Customer Service and Returns Agent transforms customer support by combining conversational intelligence, workflow orchestration, and task execution into a unified service experience. Rather than simply answering questions, the solution understands customer requests, performs authorised actions, coordinates activities across enterprise systems, and resolves routine enquiries autonomously. Human agents remain focused on complex exceptions, dispute resolution, and customer situations that require empathy, negotiation, or policy judgement.</p>
      </div>
    </section>

    <!-- BUSINESS VALUE -->
    <section class="ra-value">
      <div class="ra-value__ring"></div>
      <div class="ra-value__inner">
        <div class="ra-value__head" data-reveal>
          <span class="ra-eyebrow">Business Value</span>
          <h2 class="ra-section-heading">Measurable <em>business outcomes</em></h2>
        </div>
        <div class="ra-value__grid">
          <div class="ra-val-card" data-reveal><i class="ph ph-lightning"></i><span>Accelerate customer issue resolution across post-purchase support processes.</span></div>
          <div class="ra-val-card" data-reveal><i class="ph ph-robot"></i><span>Reduce customer service workload through intelligent automation of routine enquiries.</span></div>
          <div class="ra-val-card" data-reveal><i class="ph ph-star"></i><span>Improve post-purchase experiences with faster, more transparent service.</span></div>
          <div class="ra-val-card" data-reveal><i class="ph ph-chat-circle-dots"></i><span>Minimise repeat customer contacts through proactive communication and efficient resolution.</span></div>
          <div class="ra-val-card" data-reveal><i class="ph ph-heart"></i><span>Increase customer satisfaction, loyalty, and retention.</span></div>
          <div class="ra-val-card" data-reveal><i class="ph ph-currency-dollar"></i><span>Lower operational costs while improving service quality and consistency.</span></div>
          <div class="ra-val-card" data-reveal><i class="ph ph-chart-line-up"></i><span>Scale customer support efficiently during seasonal demand peaks and business growth.</span></div>
        </div>
      </div>
    </section>

    <!-- GOVERNANCE -->
    <section class="ra-governance">
      <div class="ra-governance__inner" data-reveal>
        <div class="ra-governance__icon-wrap"><i class="ph ph-lock-simple"></i></div>
        <h2 class="ra-section-heading">Governance and <em>Control</em></h2>
        <p>The Customer Service and Returns Agent operates within a governance-first framework that ensures every automated action remains secure, transparent, and aligned with organisational policies. Configurable business rules, role-based access controls, policy-driven approvals, human-in-the-loop governance for exceptions, comprehensive audit trails, AI decision logging, and continuous performance monitoring provide complete visibility into customer interactions and service workflows. This approach enables retailers to scale intelligent customer service while maintaining full operational control, regulatory compliance, and a consistent brand experience across every customer engagement.</p>
      </div>
    </section>

    <!-- BACK CTA -->
    <section class="ra-back-cta">
      <a routerLink="/who-we-serve/retail/solutions" class="ra-back-cta__link"><i class="ph ph-arrow-left"></i> Back to Solutions</a>
      <a routerLink="/contact-us" class="ra-back-cta__btn">Schedule a Consultation <i class="ph ph-arrow-right"></i></a>
    </section>
  `,
  styles: [`
    :host { display: block; font-family: 'DM Sans', system-ui, sans-serif; --blue:#1B3A8F; --orange:#E87722; --dark:#111; --bg:#f5f5f3; --mid:#555; --teal:#1B3A8F; --teal-dark:#142d6b; }
    .breadcrumb-bar { background: var(--teal-dark); padding: 0.55rem 3rem; display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap; }
    .breadcrumb-bar a, .breadcrumb-bar span { color: rgba(255,255,255,0.6); font-size: 0.8rem; font-weight: 500; text-decoration: none; }
    .breadcrumb-bar a:hover { color: #fff; } .breadcrumb-bar .sep { color: rgba(255,255,255,0.25); } .breadcrumb-bar .current { color: var(--orange); font-weight: 600; }
    @media (max-width: 768px) { .breadcrumb-bar { padding: 0.55rem 1rem; margin-top: 58px; } }
    .ra-header { background: linear-gradient(135deg,#060d1f 0%,#0f1f4a 60%,#1B3A8F 100%); padding: 5rem 3rem; position: relative; overflow: hidden; text-align: center; }
    .ra-header__grid-bg { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px); background-size: 50px 50px; pointer-events: none; }
    .ra-header__glow-1 { position: absolute; width: 450px; height: 450px; border-radius: 50%; background: radial-gradient(circle,rgba(232,119,34,0.14) 0%,transparent 70%); top: -150px; right: -100px; pointer-events: none; }
    .ra-header__glow-2 { position: absolute; width: 300px; height: 300px; border-radius: 50%; background: radial-gradient(circle,rgba(123,163,255,0.1) 0%,transparent 70%); bottom: -100px; left: -60px; pointer-events: none; }
    .ra-header__inner { position: relative; z-index: 2; max-width: 820px; margin: 0 auto; }
    .ra-header__badge { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.1); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.18); border-radius: 999px; padding: 0.4rem 1.2rem; margin-bottom: 1.8rem; }
    .ra-header__badge i.ph { font-size: 1rem; color: var(--orange); line-height: 1; }
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
    .ra-val-card i.ph { font-size: 1.3rem; color: var(--orange); flex-shrink: 0; margin-top: 0.1rem; line-height: 1; }
    .ra-val-card span { font-size: 0.9rem; color: #333; line-height: 1.65; font-weight: 500; }
    @media (max-width: 768px) { .ra-value { padding: 3.5rem 1.5rem; } }
    .ra-governance { padding: 5rem 3rem; background: linear-gradient(180deg,var(--bg) 0%,#eef0f7 100%); }
    .ra-governance__inner { max-width: 900px; margin: 0 auto; background: #fff; border-radius: 24px; padding: 3rem 3.5rem; box-shadow: 0 10px 40px rgba(27,58,143,0.08); border: 1px solid rgba(27,58,143,0.06); position: relative; overflow: hidden; }
    .ra-governance__inner::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg,var(--blue),var(--orange)); }
    .ra-governance__icon-wrap { width: 56px; height: 56px; margin-bottom: 1.5rem; background: linear-gradient(135deg,rgba(27,58,143,0.08),rgba(232,119,34,0.06)); border-radius: 14px; display: flex; align-items: center; justify-content: center; }
    .ra-governance__icon-wrap i.ph { font-size: 1.4rem; color: var(--teal); line-height: 1; }
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
  `],
})
export class CustomerServiceReturnsAgent {
  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); observer.unobserve(e.target); } });
    }, { threshold: 0.1 });
    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
  }
}
