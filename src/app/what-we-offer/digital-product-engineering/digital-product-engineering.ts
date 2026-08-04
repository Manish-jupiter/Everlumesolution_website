import { Component, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-digital-product-engineering',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- â”€â”€â”€ BREADCRUMB â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <div class="breadcrumb-bar">
      <a routerLink="/">Home</a><span class="sep">></span>
      <a routerLink="/what-we-offer">What We Offer</a><span class="sep">></span>
      <span class="current">Digital Product Engineering</span>
    </div>

    <!-- â”€â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="dp-hero">
      <div class="dp-hero__bg">
        <img src="Images/image_005.jpg" alt="Digital Product Engineering" />
        <div class="dp-hero__overlay"></div>
      </div>
      <div class="dp-hero__particles" id="dp-particles"></div>
      <div class="dp-hero__abstract-ring"></div>
      <div class="dp-hero__abstract-blob"></div>
      <div class="dp-hero__content" data-reveal>
        <div class="dp-hero__badge"><span class="dp-hero__badge-dot"></span><span>What We Offer</span></div>
        <h1 class="dp-hero__heading">Digital Product<br/><em>Engineering</em></h1>
        <p class="dp-hero__sub">End-to-end product engineering â€” strategy, design, build, and continuous delivery for market-defining digital products and platforms.</p>
        <a href="#dp-overview" class="dp-hero__cta">Explore Capabilities
          <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
    </section>

    <!-- â”€â”€â”€ OVERVIEW + WHAT WE DELIVER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="dp-overview" id="dp-overview">
      <div class="dp-overview__blob"></div>
      <div class="dp-overview__dots"></div>
      <div class="dp-overview__grid">

        <div class="dp-overview__text" data-reveal-left>
          <span class="dp-eyebrow">Overview</span>
          <h2 class="dp-section-heading">Digital Product <em>Engineering</em></h2>
          <p>Accelerate innovation and bring digital products to market faster with our end-to-end Digital Product Engineering services. We help organisations conceive, design, build, modernise, and scale intelligent digital products and platforms that deliver measurable business value, exceptional user experiences, and sustainable competitive advantage. By combining product strategy, user-centred design, software engineering, cloud-native technologies, artificial intelligence, data, and DevSecOps, we transform ideas into secure, scalable, and market-ready digital solutions.</p>
          <p>We partner with clients throughout the entire product lifecycle â€” from product discovery, market validation, and experience design to architecture, development, testing, deployment, and continuous optimisation. Whether launching a new digital product, modernising a legacy platform, or accelerating enterprise innovation, our multidisciplinary teams help organisations reduce time-to-market, improve product quality, and deliver differentiated digital experiences that evolve alongside changing customer expectations and business priorities.</p>
          <p>Our engineering approach combines agile delivery, cloud-native architecture, API-first development, microservices, AI-driven capabilities, automation, cybersecurity, and continuous integration and delivery (CI/CD) to build resilient, high-performing digital platforms. Every solution is designed for scalability, interoperability, security, and operational excellence, enabling organisations to innovate rapidly while maintaining enterprise-grade reliability and governance.</p>
          <p>From customer-facing applications and enterprise platforms to SaaS products, mobile experiences, digital marketplaces, and industry-specific solutions, we help organisations create intelligent digital products that drive customer engagement, improve operational efficiency, unlock new revenue opportunities, and accelerate digital transformation.</p>
          <p>Built on secure, scalable, and governance-first engineering practices, our Digital Product Engineering services ensure that technology investments remain adaptable, future-ready, and aligned with long-term business strategy. The result is a modern digital product ecosystem that empowers organisations to innovate continuously, respond rapidly to market changes, and deliver exceptional experiences across every customer and employee touchpoint.</p>
          <div class="dp-overview__actions">
            <a routerLink="/contact-us" class="dp-btn dp-btn--primary">Talk to an Expert</a>
            <a routerLink="/what-we-offer" class="dp-btn dp-btn--outline">All Services <i class="ph ph-arrow-right"></i></a>
          </div>
        </div>

        <div class="dp-overview__deliver" data-reveal-right>
          <div class="dp-deliver-box">
            <div class="dp-deliver-box__header">
              <i class="ph ph-cube"></i>
              <h3>What we deliver</h3>
            </div>
            <ul class="dp-deliver-box__list">
              <li><a routerLink="/what-we-offer/digital-product-engineering/product-strategy-roadmap" class="dp-deliver-link">
                <span>Product strategy and roadmap planning.</span><i class="ph ph-arrow-right"></i>
              </a></li>
              <li><a routerLink="/what-we-offer/digital-product-engineering/ux-ui-design-prototyping" class="dp-deliver-link">
                <span>UX/UI design and prototyping.</span><i class="ph ph-arrow-right"></i>
              </a></li>
              <li><a routerLink="/what-we-offer/digital-product-engineering/cloud-native-application-development" class="dp-deliver-link">
                <span>Cloud-native application development.</span><i class="ph ph-arrow-right"></i>
              </a></li>
              <li><a routerLink="/what-we-offer/digital-product-engineering/api-first-microservices-architecture" class="dp-deliver-link">
                <span>API-first and microservices architecture.</span><i class="ph ph-arrow-right"></i>
              </a></li>
              <li><a routerLink="/what-we-offer/digital-product-engineering/legacy-application-modernization" class="dp-deliver-link">
                <span>Legacy application modernization.</span><i class="ph ph-arrow-right"></i>
              </a></li>
              <li><a routerLink="/what-we-offer/digital-product-engineering/ai-data-integration" class="dp-deliver-link">
                <span>AI and data integration.</span><i class="ph ph-arrow-right"></i>
              </a></li>
              <li><a routerLink="/what-we-offer/digital-product-engineering/devops-cicd-release-automation" class="dp-deliver-link">
                <span>DevOps, CI/CD, and release automation.</span><i class="ph ph-arrow-right"></i>
              </a></li>
              <li><a routerLink="/what-we-offer/digital-product-engineering/ongoing-product-enhancement-support" class="dp-deliver-link">
                <span>Ongoing product enhancement and support.</span><i class="ph ph-arrow-right"></i>
              </a></li>
            </ul>
          </div>
        </div>

      </div>
    </section>

    <!-- â”€â”€â”€ WHY IT MATTERS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="dp-why">
      <div class="dp-why__bg-grid"></div>
      <div class="dp-why__glow-1"></div>
      <div class="dp-why__glow-2"></div>
      <div class="dp-why__inner">
        <div class="dp-why__header" data-reveal>
          <span class="dp-eyebrow dp-eyebrow--light">Why It Matters</span>
          <h2 class="dp-section-heading dp-section-heading--light">Why it matters</h2>
          <p class="dp-why__text">In today's digital economy, competitive advantage is driven by the ability to rapidly deliver innovative, scalable, and customer-centric digital products. Traditional software development approaches often struggle to keep pace with evolving customer expectations, emerging technologies, and changing market dynamics. Digital Product Engineering enables organisations to accelerate innovation by combining product strategy, modern engineering practices, cloud-native technologies, AI, and continuous delivery to build products that are resilient, adaptable, and designed for long-term growth.</p>
          <p class="dp-why__text" style="margin-top:1.2rem;">By adopting a product-centric engineering approach, organisations can reduce time-to-market, improve product quality, respond more quickly to customer feedback, and continuously evolve their digital platforms. The result is a stronger digital foundation that supports innovation, enhances customer engagement, and enables businesses to compete more effectively in an increasingly dynamic marketplace.</p>
        </div>
      </div>
    </section>

    <!-- â”€â”€â”€ BUSINESS VALUE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="dp-value" data-reveal>
      <div class="dp-value__ring"></div>
      <div class="dp-value__inner">
        <span class="dp-eyebrow">Business Value</span>
        <h2 class="dp-section-heading">Business value</h2>
        <ul class="dp-value__list">
          <li><i class="ph ph-check-circle"></i><span>Accelerate product development and reduce time-to-market through agile, modern engineering practices.</span></li>
          <li><i class="ph ph-check-circle"></i><span>Improve product-market fit with user-centred design, continuous feedback, and iterative innovation.</span></li>
          <li><i class="ph ph-check-circle"></i><span>Build scalable, secure, and maintainable architectures that support long-term business growth.</span></li>
          <li><i class="ph ph-check-circle"></i><span>Deliver exceptional digital experiences that increase customer engagement, loyalty, and retention.</span></li>
          <li><i class="ph ph-check-circle"></i><span>Accelerate innovation through cloud-native technologies, AI integration, automation, and DevSecOps.</span></li>
          <li><i class="ph ph-check-circle"></i><span>Reduce technical debt and long-term engineering risk through modern architectures and engineering best practices.</span></li>
          <li><i class="ph ph-check-circle"></i><span>Improve operational efficiency while enabling continuous product enhancement and faster feature delivery.</span></li>
        </ul>
      </div>
    </section>

    <!-- â”€â”€â”€ GOVERNANCE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="dp-governance">
      <div class="dp-governance__inner" data-reveal>
        <div class="dp-governance__icon-wrap"><i class="ph ph-shield-check"></i></div>
        <h2 class="dp-section-heading">Governance and <em>Control</em></h2>
        <p>Our Digital Product Engineering services are built on secure, governance-first delivery practices that ensure every product is designed for resilience, compliance, and long-term sustainability. We embed security, privacy, quality assurance, DevSecOps, architecture governance, automated testing, and continuous monitoring throughout the product lifecycle. Robust engineering standards, structured release management, comprehensive documentation, and ongoing performance monitoring enable organisations to deliver reliable, high-quality digital products while maintaining complete visibility, operational control, and regulatory compliance.</p>
      </div>
    </section>

    <!-- â”€â”€â”€ TAGLINE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="dp-tagline">
      <div class="dp-tagline__inner" data-reveal>
        <p>Transform ideas into market-leading digital products with a strategic partner that combines <em>product vision</em>, <em>experience design</em>, <em>engineering excellence</em>, and <em>continuous innovation</em>.</p>
        <a routerLink="/contact-us" class="dp-tagline__btn">Start Your Journey <i class="ph ph-arrow-right"></i></a>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; font-family: 'DM Sans', system-ui, sans-serif; }
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :host { --teal:#1B3A8F; --teal-dark:#142d6b; --orange:#E87722; --blue:#1B3A8F; --dark:#111; --bg:#f5f5f3; --mid:#555; }
    a { text-decoration: none; }

    /* BREADCRUMB */
    .breadcrumb-bar { padding: 0.7rem 2rem; background: #f0f2f8; font-size: 0.8rem; display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap; }
    .breadcrumb-bar a { color: var(--blue); font-weight: 600; }
    .breadcrumb-bar a:hover { color: var(--orange); }
    .breadcrumb-bar .sep { color: #aaa; }
    .breadcrumb-bar .current { color: var(--mid); }

    /* HERO */
    .dp-hero { position: relative; height: 60vh; min-height: 400px; overflow: hidden; display: flex; flex-direction: column; }
    .dp-hero__bg { position: absolute; inset: 0; }
    .dp-hero__bg img { width: 100%; height: 100%; object-fit: cover; }
    .dp-hero__overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(6,13,31,0.88) 0%, rgba(27,58,143,0.7) 100%); }
    .dp-hero__abstract-ring { position: absolute; top: -60px; right: -60px; width: 400px; height: 400px; border: 1.5px solid rgba(255,255,255,0.06); border-radius: 50%; animation: spinSlow 40s linear infinite; pointer-events: none; }
    .dp-hero__abstract-blob { position: absolute; bottom: -80px; left: 15%; width: 300px; height: 300px; background: radial-gradient(circle, rgba(232,119,34,0.12) 0%, transparent 70%); border-radius: 50%; animation: drift 18s ease-in-out infinite; pointer-events: none; }
    .dp-hero__particles { position: absolute; inset: 0; pointer-events: none; z-index: 1; }
    .dp-hero__particle { position: absolute; bottom: -10px; background: rgba(255,255,255,0.4); border-radius: 50%; animation: rise linear infinite; }
    @keyframes rise { to { transform: translateY(-100vh) scale(0); opacity: 0; } }
    .dp-hero__content { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 2rem; z-index: 2; }
    .dp-hero__badge { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.1); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.2); border-radius: 999px; padding: 0.35rem 1.1rem; margin-bottom: 1.5rem; opacity: 0; transform: translateY(12px); animation: fadeUp 0.8s 0.3s forwards; }
    .dp-hero__badge-dot { width: 7px; height: 7px; background: var(--orange); border-radius: 50%; animation: pulse 2s infinite; }
    @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.7)} }
    .dp-hero__badge span:last-child { color: #fff; font-size: 0.78rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; }
    .dp-hero__heading { font-family: "DM Serif Display", serif; font-size: clamp(1.8rem,4vw,3rem); color: #fff; font-weight: 400; line-height: 1.1; margin-bottom: 1.2rem; opacity: 0; transform: translateY(20px); animation: fadeUp 1s 0.5s forwards; }
    .dp-hero__heading em { font-style: italic; color: var(--orange); }
    .dp-hero__sub { font-size: 0.95rem; color: rgba(255,255,255,0.75); max-width: 580px; line-height: 1.6; margin-bottom: 1.5rem; opacity: 0; transform: translateY(20px); animation: fadeUp 1s 0.7s forwards; }
    .dp-hero__cta { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--orange); color: #fff; font-weight: 600; font-size: 0.9rem; padding: 0.75rem 1.8rem; border-radius: 999px; transition: background 0.3s, transform 0.3s, box-shadow 0.3s; opacity: 0; transform: translateY(20px); animation: fadeUp 1s 0.9s forwards; }
    .dp-hero__cta:hover { background: #c96418; color: #fff; transform: translateY(-3px); box-shadow: 0 12px 32px rgba(232,119,34,0.4); }
    @keyframes fadeUp { to { opacity:1; transform:translateY(0); } }

    @media (max-width: 768px) { .dp-hero { height: 50vh; min-height: 320px; } }

    /* OVERVIEW */
    .dp-overview { padding: 6rem 3rem; max-width: 1300px; margin: 0 auto; position: relative; overflow: hidden; }
    .dp-overview__blob { position: absolute; top: -60px; right: -80px; width: 300px; height: 300px; background: radial-gradient(circle, rgba(27,58,143,0.06) 0%, transparent 70%); border-radius: 50%; animation: drift 15s ease-in-out infinite; pointer-events: none; }
    .dp-overview__dots { position: absolute; bottom: -40px; left: -40px; width: 150px; height: 150px; background-image: radial-gradient(circle, rgba(232,119,34,0.2) 1.5px, transparent 1.5px); background-size: 16px 16px; opacity: 0.6; pointer-events: none; }
    .dp-overview__grid { display: grid; grid-template-columns: 1.35fr 1fr; gap: 5rem; align-items: start; }
    .dp-overview__text p { font-size: 1rem; color: #444; line-height: 1.85; margin-bottom: 1.2rem; }
    .dp-overview__actions { display: flex; flex-wrap: wrap; gap: 0.9rem; margin-top: 2rem; }
    @media (max-width: 1024px) { .dp-overview { padding: 4rem 1.5rem; } .dp-overview__grid { grid-template-columns: 1fr; gap: 2.5rem; } }

    /* DELIVER BOX */
    .dp-deliver-box { background: #fff; border-radius: 24px; padding: 2.2rem 2rem; box-shadow: 0 12px 48px rgba(27,58,143,0.1); border: 1px solid rgba(27,58,143,0.08); position: sticky; top: 100px; overflow: hidden; }
    .dp-deliver-box::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, var(--blue), var(--orange)); }
    .dp-deliver-box__header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.6rem; padding-bottom: 1.2rem; border-bottom: 1px solid rgba(27,58,143,0.08); }
    .dp-deliver-box__header i.ph { font-size: 1.5rem; color: var(--blue); }
    .dp-deliver-box__header h3 { font-family: "DM Serif Display", serif; font-size: 1.2rem; font-weight: 400; color: var(--dark); }
    .dp-deliver-box__list { list-style: none; display: flex; flex-direction: column; gap: 0.3rem; }
    .dp-deliver-link { display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; padding: 0.85rem 1rem; border-radius: 12px; border: 1px solid transparent; color: var(--dark); font-size: 0.93rem; font-weight: 500; line-height: 1.4; transition: all 0.25s; }
    .dp-deliver-link:hover { background: linear-gradient(135deg, rgba(27,58,143,0.06), rgba(232,119,34,0.04)); border-color: rgba(27,58,143,0.12); color: var(--blue); transform: translateX(4px); }
    .dp-deliver-link i.ph { font-size: 0.9rem; color: var(--orange); flex-shrink: 0; opacity: 0.6; transition: opacity 0.25s, transform 0.25s; }
    .dp-deliver-link:hover i.ph { opacity: 1; transform: translateX(3px); }

    /* SHARED */
    .dp-eyebrow { display: inline-block; padding: 0.3rem 0.9rem; border-radius: 999px; background: rgba(232,119,34,0.1); color: var(--orange); font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 1rem; }
    .dp-eyebrow--light { background: rgba(255,255,255,0.12); color: rgba(255,255,255,0.8); }
    .dp-section-heading { font-family: "DM Serif Display", serif; font-size: clamp(1.5rem,3vw,2.1rem); font-weight: 400; color: var(--dark); line-height: 1.2; margin-bottom: 1.6rem; }
    .dp-section-heading em { font-style: italic; color: var(--orange); }
    .dp-section-heading--light { color: #fff; }
    .dp-btn { display: inline-flex; align-items: center; gap: 0.45rem; font-weight: 700; font-size: 0.88rem; padding: 0.7rem 1.6rem; border-radius: 999px; transition: transform 0.3s, box-shadow 0.3s; }
    .dp-btn--primary { background: var(--orange); color: #fff; }
    .dp-btn--primary:hover { background: #c96418; transform: translateY(-2px); box-shadow: 0 10px 28px rgba(232,119,34,0.35); color: #fff; }
    .dp-btn--outline { background: transparent; color: var(--blue); border: 2px solid var(--blue); }
    .dp-btn--outline:hover { background: var(--blue); color: #fff; transform: translateY(-2px); }

    /* WHY */
    .dp-why { padding: 5.5rem 3rem; background: linear-gradient(135deg,#060d1f 0%,#0a1635 40%,#0f1f4a 100%); position: relative; overflow: hidden; }
    .dp-why__bg-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px); background-size: 60px 60px; pointer-events: none; }
    .dp-why__glow-1 { position: absolute; width: 400px; height: 400px; border-radius: 50%; background: radial-gradient(circle,rgba(232,119,34,0.15) 0%,transparent 70%); top: -100px; right: -100px; pointer-events: none; animation: drift 18s ease-in-out infinite; }
    .dp-why__glow-2 { position: absolute; width: 350px; height: 350px; border-radius: 50%; background: radial-gradient(circle,rgba(123,163,255,0.1) 0%,transparent 70%); bottom: -120px; left: -80px; pointer-events: none; animation: drift 14s ease-in-out infinite reverse; }
    .dp-why__inner { max-width: 900px; margin: 0 auto; position: relative; z-index: 2; text-align: center; }
    .dp-why__text { font-size: 1rem; color: rgba(255,255,255,0.72); line-height: 1.85; }
    @media (max-width: 768px) { .dp-why { padding: 3.5rem 1.2rem; } }

    /* VALUE */
    .dp-value { padding: 6rem 3rem; background: var(--bg); position: relative; overflow: hidden; }
    .dp-value__ring { position: absolute; top: 60px; right: -60px; width: 180px; height: 180px; border: 1.5px dashed rgba(232,119,34,0.12); border-radius: 50%; animation: spinSlow 35s linear infinite reverse; pointer-events: none; }
    .dp-value__inner { max-width: 860px; margin: 0 auto; position: relative; z-index: 1; }
    .dp-value__list { list-style: none; margin-top: 2.5rem; display: flex; flex-direction: column; gap: 1rem; }
    .dp-value__list li { display: flex; align-items: flex-start; gap: 0.9rem; background: #fff; border-radius: 14px; padding: 1.1rem 1.4rem; border: 1px solid rgba(27,58,143,0.06); transition: transform 0.3s, box-shadow 0.3s; }
    .dp-value__list li:hover { transform: translateX(6px); box-shadow: 0 8px 28px rgba(27,58,143,0.09); }
    .dp-value__list i.ph { font-size: 1.2rem; color: var(--orange); flex-shrink: 0; margin-top: 0.1rem; }
    .dp-value__list span { font-size: 0.95rem; color: #333; line-height: 1.7; }
    @media (max-width: 768px) { .dp-value { padding: 3.5rem 1.2rem; } }

    /* GOVERNANCE */
    .dp-governance { padding: 5rem 3rem; background: linear-gradient(180deg, var(--bg) 0%, #eef0f7 100%); }
    .dp-governance__inner { max-width: 900px; margin: 0 auto; background: #fff; border-radius: 24px; padding: 3rem 3.5rem; box-shadow: 0 10px 40px rgba(27,58,143,0.08); border: 1px solid rgba(27,58,143,0.06); position: relative; overflow: hidden; text-align: center; }
    .dp-governance__inner::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg,var(--blue),var(--orange)); }
    .dp-governance__icon-wrap { width: 60px; height: 60px; margin: 0 auto 1.5rem; background: linear-gradient(135deg,rgba(27,58,143,0.08),rgba(232,119,34,0.06)); border-radius: 16px; display: flex; align-items: center; justify-content: center; }
    .dp-governance__icon-wrap i.ph { font-size: 1.6rem; color: var(--teal); line-height: 1; }
    .dp-governance p { font-size: 1rem; color: #444; line-height: 1.85; text-align: left; }
    @media (max-width: 768px) { .dp-governance { padding: 3rem 1.2rem; } .dp-governance__inner { padding: 2rem 1.5rem; } }

    /* TAGLINE */
    .dp-tagline { background: linear-gradient(135deg,#0f1f4a,#1B3A8F); padding: 3rem 3rem; text-align: center; }
    .dp-tagline__inner { max-width: 860px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; gap: 1.8rem; }
    .dp-tagline p { font-family: "DM Serif Display", serif; font-size: clamp(1.1rem,2vw,1.4rem); font-style: italic; color: rgba(255,255,255,0.9); line-height: 1.6; }
    .dp-tagline p em { color: var(--orange); font-style: italic; }
    .dp-tagline__btn { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--orange); color: #fff; font-weight: 700; font-size: 0.9rem; padding: 0.75rem 1.8rem; border-radius: 999px; transition: transform 0.3s, box-shadow 0.3s; }
    .dp-tagline__btn:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(232,119,34,0.4); color: #fff; }

    /* ANIMATIONS */
    @keyframes spinSlow { to { transform: rotate(360deg); } }
    @keyframes drift { 0%,100%{transform:translate(0,0)} 25%{transform:translate(20px,-10px)} 50%{transform:translate(-10px,-20px)} 75%{transform:translate(-20px,10px)} }

    /* REVEAL */
    [data-reveal] { opacity: 0; transform: translateY(40px); transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1); }
    [data-reveal].is-visible { opacity: 1; transform: translateY(0); }
    [data-reveal-left] { opacity: 0; transform: translateX(-40px); transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1); }
    [data-reveal-left].is-visible { opacity: 1; transform: translateX(0); }
    [data-reveal-right] { opacity: 0; transform: translateX(40px); transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1); }
    [data-reveal-right].is-visible { opacity: 1; transform: translateX(0); }
  `],
})
export class DigitalProductEngineering implements AfterViewInit, OnDestroy {
  private revealObserver: IntersectionObserver | null = null;
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const host = this.el.nativeElement as HTMLElement;
    const container = host.querySelector('#dp-particles');
    if (container) {
      for (let i = 0; i < 18; i++) {
        const p = document.createElement('span');
        p.className = 'dp-hero__particle';
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



