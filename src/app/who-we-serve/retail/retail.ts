import { Component, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-retail',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- â”€â”€â”€ BREADCRUMB â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <div class="breadcrumb-bar">
      <a routerLink="/">Home</a>
      <span class="sep">></span>
      <a routerLink="/who-we-serve">Who We Serve</a>
      <span class="sep">></span>
      <span class="current">Retail</span>
    </div>

    <!-- â”€â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="rt-hero">
      <div class="rt-hero__bg">
        <img src="Images/image_001.jpg" alt="Retail" />
        <div class="rt-hero__overlay"></div>
      </div>
      <div class="rt-hero__abstract-ring"></div>
      <div class="rt-hero__abstract-blob"></div>
      <div class="rt-hero__particles" id="rt-particles"></div>
      <div class="rt-hero__content" data-reveal>
        <div class="rt-hero__badge">
          <span class="rt-hero__badge-dot"></span>
          <span>Agentic AI Solution</span>
        </div>
        <h1 class="rt-hero__heading">Agentic AI for<br/><em>Retail</em></h1>
        <p class="rt-hero__sub">Transform retail operations with intelligent AI agents that can reason, orchestrate, and execute complex workflows across customer engagement, merchandising, inventory management, supply chain operations, and omnichannel fulfilment.</p>
        <a href="#rt-deliver" class="rt-hero__cta">
          Explore Capabilities
          <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
    </section>

    <!-- â”€â”€â”€ INTRO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="rt-intro">
      <div class="rt-intro__blob"></div>
      <div class="rt-intro__dots"></div>
      <div class="rt-intro__grid">
        <div class="rt-intro__text" data-reveal-left>
          <span class="rt-eyebrow">Overview</span>
          <h2 class="rt-section-heading">Intelligent AI agents that <em>transform</em> retail operations</h2>
          <p>Our Agentic AI solutions empower retailers to deliver personalised shopping experiences, optimise inventory, accelerate fulfilment, and improve operational efficiency through intelligent automationâ€”while maintaining robust human oversight and governance.</p>
          <p>We design and deploy enterprise-grade, retail-ready Agentic AI solutions that seamlessly integrate with eCommerce platforms, point-of-sale (POS) systems, customer relationship management (CRM) applications, inventory management solutions, order management systems (OMS), warehouse management systems (WMS), merchandising platforms, and customer support ecosystems. By intelligently coordinating activities across people, systems, and AI agents, our solutions eliminate operational silos, streamline end-to-end retail workflows, and enable faster, more informed business decisions.</p>
          <p>From personalised product discovery and customer engagement to demand forecasting, inventory optimisation, order fulfilment, returns management, pricing intelligence, and customer service automation, our Agentic AI solutions optimise every stage of the retail value chain. Built on secure, scalable, and governance-first AI architectures, they enable retailers to increase conversion rates, improve customer loyalty, enhance supply chain agility, reduce operational costs, and deliver consistent omnichannel experiences while maintaining the highest standards of security, data privacy, and responsible AI.</p>
          <div class="rt-intro__actions">
            <a routerLink="/customer-delight" class="rt-intro__btn rt-intro__btn--primary">Customer Delight</a>
            <a routerLink="/who-we-serve/retail/retail-solutions" class="rt-intro__btn rt-intro__btn--outline">Our Solutions <svg width="14" height="14" viewBox="0 0 18 18" fill="none"><path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
          </div>
        </div>
        <div class="rt-intro__visual" data-reveal-right>
          <div class="rt-intro__dot-grid"></div>
          <div class="rt-intro__ring"></div>
          <div class="rt-intro__img">
            <img src="Images/image_036.jpg" alt="Retail AI" loading="lazy" />
          </div>
          <div class="rt-intro__float-card">
            <div class="rt-intro__float-icon">ðŸ›ï¸</div>
            <div class="rt-intro__float-text">
              <strong>Smart Retail</strong>
              <span>AI-powered commerce</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- â”€â”€â”€ WHAT WE DELIVER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="rt-deliver" id="rt-deliver">
      <div class="rt-deliver__ring"></div>
      <div class="rt-deliver__blob"></div>
      <div class="rt-deliver__inner">
        <div class="rt-deliver__header" data-reveal>
          <span class="rt-eyebrow">What We Deliver</span>
          <h2 class="rt-section-heading">End-to-end <em>retail intelligence</em></h2>
        </div>
        <div class="rt-deliver__grid">
          <div class="rt-cap-card" data-reveal>
            <div class="rt-cap-card__icon"><i class="ph ph-user-circle"></i></div>
            <h3>Personalised Shopping Journeys</h3>
            <p>Orchestrate intelligent, context-aware customer journeys across every digital and physical channel to drive engagement, loyalty, and conversion.</p>
          </div>
          <div class="rt-cap-card" data-reveal>
            <div class="rt-cap-card__icon"><i class="ph ph-magnifying-glass"></i></div>
            <h3>Product Discovery and Recommendation Support</h3>
            <p>Deliver AI-powered search and recommendation experiences that adapt in real time to customer intent, behaviour, and catalogue changes.</p>
          </div>
          <div class="rt-cap-card" data-reveal>
            <div class="rt-cap-card__icon"><i class="ph ph-shopping-cart"></i></div>
            <h3>Cart Recovery and Conversion Optimisation</h3>
            <p>Identify and re-engage high-intent shoppers with intelligent, personalised cart recovery workflows that recover revenue and improve conversion rates.</p>
          </div>
          <div class="rt-cap-card" data-reveal>
            <div class="rt-cap-card__icon"><i class="ph ph-package"></i></div>
            <h3>Inventory and Fulfilment Coordination</h3>
            <p>Monitor inventory levels, demand signals, and fulfilment operations in real time to ensure accurate stock allocation, timely delivery, and reduced operational costs.</p>
          </div>
          <div class="rt-cap-card" data-reveal>
            <div class="rt-cap-card__icon"><i class="ph ph-headset"></i></div>
            <h3>Customer Service and Return Handling</h3>
            <p>Automate customer service interactions, return workflows, and post-purchase communications to improve resolution speed and customer satisfaction.</p>
          </div>
          <div class="rt-cap-card" data-reveal>
            <div class="rt-cap-card__icon"><i class="ph ph-users-three"></i></div>
            <h3>Human-in-the-Loop Controls for Sensitive Actions</h3>
            <p>Ensure that pricing decisions, high-value promotions, and policy-sensitive actions are reviewed and approved by qualified retail and merchandising experts.</p>
          </div>
          <div class="rt-cap-card" data-reveal>
            <div class="rt-cap-card__icon"><i class="ph ph-lock-simple"></i></div>
            <h3>Governance, Monitoring, and Performance Tracking</h3>
            <p>Provide complete operational visibility, performance analytics, and governance controls across all retail AI workflows and customer-facing processes.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- â”€â”€â”€ WHY IT MATTERS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="rt-why">
      <div class="rt-why__bg-grid"></div>
      <div class="rt-why__glow-1"></div>
      <div class="rt-why__glow-2"></div>
      <div class="rt-why__inner">
        <div class="rt-why__header" data-reveal>
          <span class="rt-eyebrow rt-eyebrow--light">Why It Matters</span>
          <h2 class="rt-section-heading rt-section-heading--light">Why it matters</h2>
          <p class="rt-why__text">Today's retailers operate in an increasingly dynamic environment where customer expectations evolve rapidly, buying behaviours shift in real time, and operational disruptions can have an immediate impact on revenue and brand loyalty. Managing these complexities across digital and physical channels requires more than traditional automation. Agentic AI enables retailers to continuously analyse customer behaviour, monitor inventory and fulfilment operations, intelligently orchestrate workflows, recommend next-best actions, and autonomously execute routine decisions while escalating exceptions that require human judgement. The result is a more agile, customer-centric, and data-driven retail operation that improves both business performance and customer experience.</p>
        </div>
      </div>
    </section>

    <!-- â”€â”€â”€ BUSINESS VALUE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="rt-value" data-reveal>
      <div class="rt-value__ring"></div>
      <div class="rt-value__inner">
        <span class="rt-eyebrow">Business Value</span>
        <h2 class="rt-section-heading">Business value</h2>
        <div class="rt-value__grid">
          <div class="rt-value-card">
            <div class="rt-value-card__icon"><i class="ph ph-trend-up"></i></div>
            <span>Increase conversion rates and average basket value through intelligent, personalised customer engagement.</span>
          </div>
          <div class="rt-value-card">
            <div class="rt-value-card__icon"><i class="ph ph-magnifying-glass"></i></div>
            <span>Enhance product discovery and customer experiences with context-aware recommendations across digital and omnichannel touchpoints.</span>
          </div>
          <div class="rt-value-card">
            <div class="rt-value-card__icon"><i class="ph ph-lightning"></i></div>
            <span>Accelerate customer service resolution through AI-assisted case management and workflow automation.</span>
          </div>
          <div class="rt-value-card">
            <div class="rt-value-card__icon"><i class="ph ph-package"></i></div>
            <span>Improve inventory visibility, demand forecasting, and fulfilment coordination across stores, warehouses, and digital channels.</span>
          </div>
          <div class="rt-value-card">
            <div class="rt-value-card__icon"><i class="ph ph-robot"></i></div>
            <span>Reduce manual effort across merchandising, operations, customer service, and supply chain teams through intelligent workflow orchestration.</span>
          </div>
          <div class="rt-value-card">
            <div class="rt-value-card__icon"><i class="ph ph-gear"></i></div>
            <span>Optimise operational efficiency while improving inventory utilisation, order accuracy, and fulfilment performance.</span>
          </div>
          <div class="rt-value-card">
            <div class="rt-value-card__icon"><i class="ph ph-shopping-bag"></i></div>
            <span>Strengthen customer loyalty and lifetime value by delivering seamless, consistent, and personalised shopping experiences.</span>
          </div>
        </div>
      </div>
    </section>

    <!-- â”€â”€â”€ GOVERNANCE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="rt-governance">
      <div class="rt-governance__inner" data-reveal>
        <div class="rt-governance__icon-wrap"><i class="ph ph-lock-simple"></i></div>
        <h2 class="rt-section-heading">Governance and <em>Control</em></h2>
        <p>Our Agentic AI solutions are built on a governance-first architecture that ensures every automated action is transparent, secure, and aligned with organisational policies. Configurable business rules, role-based approvals, explainable AI decisioning, comprehensive audit trails, and continuous monitoring provide retailers with complete visibility and control over AI-driven workflows.</p>
        <p>Human-in-the-loop oversight is embedded throughout high-value customer interactions, pricing decisions, inventory exceptions, and operationally sensitive processes, ensuring that automation remains accountable, responsible, and aligned with business objectives. This balanced approach enables retailers to confidently scale AI-driven operations while preserving customer trust, operational integrity, and brand reputation.</p>
      </div>
    </section>

    <!-- â”€â”€â”€ CASE STUDY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="rt-case">
      <div class="rt-case__inner">
        <div class="rt-case__header" data-reveal>
          <h2 class="rt-section-heading">Real-world <em>impact in action</em></h2>
        </div>

        <div class="rt-cs-panel" data-reveal>
          <div class="rt-cs-panel__num">01</div>
          <div class="rt-cs-panel__side">
            <div class="rt-cs-panel__icon"><i class="ph ph-shopping-bag"></i></div>
            <div class="rt-cs-panel__badge">Retail</div>
          </div>
          <div class="rt-cs-panel__content">
            <h3>Agentic AI for Retail Personalisation and Conversion</h3>
            <div class="rt-cs-section">
              <div class="rt-cs-section__label rt-cs-section__label--blue">Business Challenge</div>
              <p>A rapidly growing omnichannel retailer was experiencing declining digital conversion rates despite increasing website traffic. Its existing rule-based personalisation engine struggled to respond to changing customer intent in real time, resulting in repetitive product recommendations, irrelevant search results, and generic shopping experiences that failed to guide customers effectively through the buying journey.</p>
              <p>As the retailer expanded its product catalogue and customer base, merchandising and marketing teams found it increasingly difficult to manually manage recommendations, promotional campaigns, search relevance, and page merchandising. Customers frequently abandoned shopping carts, exited product pages without purchasing, and struggled to discover products aligned with their evolving interests. The inability to adapt dynamically to live customer behaviour negatively impacted conversion rates, average order value, and overall customer engagement.</p>
            </div>
            <div class="rt-cs-section">
              <div class="rt-cs-section__label rt-cs-section__label--orange">Solution Delivered</div>
              <p>We implemented an enterprise-grade Agentic AI personalisation platform that continuously analysed shopper behaviour and orchestrated intelligent, context-aware interactions across every stage of the digital shopping journey. The platform seamlessly integrated with the retailer's eCommerce platform, customer data platform (CDP), CRM, product catalogue, inventory systems, merchandising applications, and marketing automation tools to create a unified customer intelligence layer.</p>
              <p>Specialised AI agents collaborated in real time to understand customer intent, predict buying behaviour, and personalise every interaction based on live behavioural signals. Rather than relying on static business rules, the platform continuously adapted recommendations, search results, merchandising strategies, promotional offers, and customer journeys as shopper behaviour evolved.</p>
              <p>A dedicated journey orchestration engine tracked each customer's progression from initial product discovery through purchase completion, while intelligent AI agents continuously refined the experience based on browsing behaviour, search activity, product interactions, purchase history, inventory availability, and contextual signals.</p>
            </div>
            <div class="rt-cs-section">
              <div class="rt-cs-section__label rt-cs-section__label--teal">Key Capabilities</div>
              <ul class="rt-cs-caps">
                <li>Real-time customer journey orchestration across web, mobile, and omnichannel experiences.</li>
                <li>AI-powered intent recognition to identify browsing, comparison, purchase, and abandonment behaviours.</li>
                <li>Dynamic product recommendations personalised using real-time behavioural, transactional, and contextual data.</li>
                <li>Intelligent search optimisation that continuously improves result relevance as customer intent evolves.</li>
                <li>AI-driven cross-sell, upsell, and bundle recommendations to increase basket value and product discovery.</li>
                <li>Personalised promotional offers and content tailored to customer preferences, purchase history, and engagement patterns.</li>
                <li>Human-in-the-loop controls enabling merchandising and marketing teams to define campaign policies, business rules, and governance while AI continuously optimised execution.</li>
                <li>Enterprise dashboards providing real-time visibility into customer journeys, engagement metrics, conversion performance, and merchandising effectiveness.</li>
              </ul>
            </div>
            <div class="rt-cs-section">
              <div class="rt-cs-section__label rt-cs-section__label--green">Business Outcomes</div>
              <p>The retailer transformed its digital commerce experience from static, rule-based personalisation to an intelligent, adaptive shopping journey that behaved like an experienced in-store sales associate. Customers received highly relevant product recommendations, more accurate search results, and personalised offers tailored to their intent and preferences at every stage of the purchasing journey.</p>
              <p>The solution delivered measurable improvements in customer engagement, digital conversion rates, average order value, and merchandising effectiveness while reducing the manual effort required to manage recommendations and promotional campaigns. Marketing and merchandising teams gained greater agility through AI-assisted optimisation, enabling them to focus on strategic initiatives rather than operational administration.</p>
              <p>By combining intelligent personalisation with enterprise-grade governance and human oversight, the retailer created a scalable digital commerce platform capable of continuously adapting to customer behaviour while delivering consistent, engaging, and profitable shopping experiences across every channel.</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- â”€â”€â”€ CTA BAND â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="rt-cta">
      <div class="rt-cta__ring"></div>
      <div class="rt-cta__dots"></div>
      <h2 class="rt-cta__heading">Ready to transform your retail operations?</h2>
      <p class="rt-cta__sub">Let's discuss how Agentic AI can drive personalised customer experiences and operational excellence across your retail ecosystem.</p>
      <a routerLink="/contact-us" class="rt-cta__btn">
        Schedule a Consultation
        <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
    </section>
  `,
  styles: [`
    :host {
      --blue: #1B3A8F; --orange: #E87722; --dark: #111111; --bg: #f5f5f3;
      --mid: #555555; --card-bg: #ffffff; --teal: #1B3A8F;
      --teal-dark: #142d6b; --teal-light: #E87722;
    }

    /* â”€â”€â”€ BREADCRUMB â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .breadcrumb-bar { background: var(--teal-dark); padding: 0.55rem 3rem; }
    .breadcrumb-bar a, .breadcrumb-bar span { color: rgba(255,255,255,0.65); font-size: 0.8rem; font-weight: 500; text-decoration: none; }
    .breadcrumb-bar a:hover { color: #fff; }
    .breadcrumb-bar .sep { margin: 0 0.45rem; color: rgba(255,255,255,0.3); }
    .breadcrumb-bar .current { color: var(--teal-light); font-weight: 600; }
    @media (max-width: 768px) { .breadcrumb-bar { padding: 0.55rem 1rem; margin-top: 58px; } }

    /* â”€â”€â”€ SHARED â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .rt-eyebrow { display: inline-block; color: var(--teal); font-size: 0.78rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 1rem; }
    .rt-eyebrow--light { color: var(--orange); }
    .rt-section-heading { font-family: "DM Serif Display", serif; font-size: clamp(1.8rem, 3vw, 2.5rem); color: var(--dark); font-weight: 400; line-height: 1.2; margin-bottom: 1.2rem; }
    .rt-section-heading em { color: var(--orange); font-style: italic; }
    .rt-section-heading--light { color: #fff; }

    /* â”€â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .rt-hero { position: relative; height: 55vh; min-height: 360px; max-height: 480px; overflow: hidden; }
    .rt-hero__bg { position: absolute; inset: 0; }
    .rt-hero__bg img { width: 100%; height: 100%; object-fit: cover; transform: scale(1.05); animation: heroZoom 12s ease-out forwards; }
    @keyframes heroZoom { to { transform: scale(1); } }
    .rt-hero__overlay { position: absolute; inset: 0; background: radial-gradient(ellipse at 20% 30%, rgba(232, 119, 34, 0.28), transparent 55%), radial-gradient(ellipse at 80% 70%, rgba(27, 58, 143, 0.45), transparent 55%), linear-gradient(180deg, rgba(16, 21, 42, 0.35), rgba(16, 21, 42, 0.85)); }
    .rt-hero__abstract-ring { position: absolute; top: 8%; left: 4%; width: 220px; height: 220px; border: 1.5px solid rgba(255,255,255,0.1); border-radius: 50%; z-index: 1; animation: spinSlow 28s linear infinite; }
    .rt-hero__abstract-blob { position: absolute; bottom: 12%; right: 6%; width: 140px; height: 140px; background: rgba(232,119,34,0.15); border-radius: 50%; z-index: 1; filter: blur(40px); animation: drift 14s ease-in-out infinite; }
    .rt-hero__particles { position: absolute; inset: 0; z-index: 1; overflow: hidden; pointer-events: none; }
    .rt-hero__particle { position: absolute; width: 4px; height: 4px; background: rgba(255,255,255,0.4); border-radius: 50%; animation: particleRise linear infinite; }
    @keyframes particleRise { 0% { transform: translateY(100vh) scale(0); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(-20px) scale(1); opacity: 0; } }
    .rt-hero__content { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 2rem; z-index: 2; }
    .rt-hero__badge { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.1); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.2); border-radius: 999px; padding: 0.35rem 1.1rem; margin-bottom: 1.5rem; opacity: 0; transform: translateY(12px); animation: fadeUp 0.8s 0.3s forwards; }
    .rt-hero__badge-dot { width: 7px; height: 7px; background: var(--teal-light); border-radius: 50%; animation: pulse 2s infinite; }
    @keyframes pulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.5; transform:scale(0.7); } }
    .rt-hero__badge span:last-child { color: #fff; font-size: 0.78rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; }
    .rt-hero__heading { font-family: "DM Serif Display", serif; font-size: clamp(1.8rem, 4vw, 3rem); color: #fff; font-weight: 400; line-height: 1.1; margin-bottom: 1.2rem; opacity: 0; transform: translateY(20px); animation: fadeUp 1s 0.5s forwards; }
    .rt-hero__heading em { font-style: italic; color: var(--orange); }
    .rt-hero__sub { font-size: 0.95rem; color: rgba(255,255,255,0.75); max-width: 580px; line-height: 1.6; margin-bottom: 1.5rem; opacity: 0; transform: translateY(20px); animation: fadeUp 1s 0.7s forwards; }
    .rt-hero__cta { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--orange); color: #fff; font-weight: 600; font-size: 0.9rem; padding: 0.75rem 1.8rem; border-radius: 999px; text-decoration: none; transition: background 0.3s, transform 0.3s, box-shadow 0.3s; opacity: 0; transform: translateY(20px); animation: fadeUp 1s 0.9s forwards; }
    .rt-hero__cta:hover { background: #c96418; color: #fff; transform: translateY(-3px); box-shadow: 0 12px 32px rgba(232,119,34,0.4); }
    @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
    @media (max-width: 768px) { .rt-hero { height: 50vh; min-height: 320px; } .rt-hero__sub { font-size: 0.88rem; } }

    /* â”€â”€â”€ INTRO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .rt-intro { padding: 6rem 3rem; max-width: 1200px; margin: 0 auto; position: relative; overflow: hidden; }
    .rt-intro__blob { position: absolute; top: -60px; right: -80px; width: 300px; height: 300px; background: radial-gradient(circle, rgba(27,58,143,0.06) 0%, transparent 70%); border-radius: 50%; animation: drift 15s ease-in-out infinite; pointer-events: none; }
    .rt-intro__dots { position: absolute; bottom: -40px; left: -40px; width: 150px; height: 150px; background-image: radial-gradient(circle, rgba(232,119,34,0.2) 1.5px, transparent 1.5px); background-size: 16px 16px; opacity: 0.6; pointer-events: none; animation: float 10s ease-in-out infinite; }
    .rt-intro__grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 5rem; align-items: center; }
    .rt-intro__text p { font-size: 1rem; color: #444; line-height: 1.85; margin-bottom: 1.2rem; }
    .rt-intro__visual { position: relative; padding: 2rem; }
    .rt-intro__ring { position: absolute; top: -10px; right: -10px; width: 280px; height: 280px; border: 2px dashed rgba(27,58,143,0.1); border-radius: 50%; animation: spinSlow 35s linear infinite; pointer-events: none; }
    .rt-intro__ring::after { content: ""; position: absolute; top: -5px; left: 50%; width: 10px; height: 10px; background: var(--orange); border-radius: 50%; box-shadow: 0 0 16px rgba(232,119,34,0.5); }
    .rt-intro__dot-grid { position: absolute; top: -15px; left: -15px; width: 120px; height: 120px; background-image: radial-gradient(circle, rgba(27,58,143,0.15) 1.5px, transparent 1.5px); background-size: 14px 14px; pointer-events: none; z-index: 0; }
    .rt-intro__img { width: 100%; border-radius: 24px; box-shadow: 0 20px 60px rgba(27,58,143,0.15); overflow: hidden; position: relative; z-index: 1; }
    .rt-intro__img img { width: 100%; height: auto; display: block; }
    .rt-intro__float-card { position: absolute; bottom: -30px; right: -20px; background: #fff; border-radius: 16px; padding: 1.1rem 1.4rem; box-shadow: 0 10px 40px rgba(0,0,0,0.1); display: flex; align-items: center; gap: 0.8rem; z-index: 2; animation: floatCard 4s ease-in-out infinite; }
    @keyframes floatCard { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
    .rt-intro__float-icon { width: 44px; height: 44px; background: linear-gradient(135deg, var(--orange), #c96418); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; }
    .rt-intro__float-text strong { display: block; font-size: 0.85rem; color: var(--dark); }
    .rt-intro__float-text span { font-size: 0.75rem; color: var(--mid); }
    .rt-intro__actions { display: flex; flex-wrap: wrap; gap: 0.9rem; margin-top: 1.8rem; }
    .rt-intro__btn { display: inline-flex; align-items: center; gap: 0.45rem; font-weight: 700; font-size: 0.88rem; padding: 0.7rem 1.6rem; border-radius: 999px; text-decoration: none; transition: transform 0.3s, box-shadow 0.3s; cursor: pointer; font-family: inherit; }
    .rt-intro__btn--primary { background: var(--orange); color: #fff; }
    .rt-intro__btn--primary:hover { background: #c96418; transform: translateY(-2px); box-shadow: 0 10px 28px rgba(232,119,34,0.35); color: #fff; }
    .rt-intro__btn--outline { background: transparent; color: var(--blue); border: 2px solid var(--blue); }
    .rt-intro__btn--outline:hover { background: var(--blue); color: #fff; transform: translateY(-2px); box-shadow: 0 10px 28px rgba(27,58,143,0.2); }
    @media (max-width: 991px) { .rt-intro { padding: 4rem 1.5rem; } .rt-intro__grid { grid-template-columns: 1fr; gap: 2.5rem; } .rt-intro__float-card { right: 10px; bottom: -20px; } }


    .rt-sol-card { position: relative; background: #fff; border-radius: 24px; padding: 2.8rem 2.2rem 2.2rem; text-decoration: none; border: 1px solid rgba(27,58,143,0.08); box-shadow: 0 4px 24px rgba(27,58,143,0.06); overflow: hidden; display: flex; flex-direction: column; gap: 1.1rem; transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s, border-color 0.3s; }
    .rt-sol-card::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, var(--blue), var(--orange)); transition: height 0.3s; }
    .rt-sol-card:hover { transform: translateY(-10px); box-shadow: 0 28px 64px rgba(27,58,143,0.14); border-color: rgba(27,58,143,0.16); }
    .rt-sol-card:hover::before { height: 5px; }
    .rt-sol-card__num { font-family: "DM Serif Display", serif; font-size: 4rem; font-weight: 400; color: rgba(27,58,143,0.05); line-height: 1; position: absolute; top: 1.2rem; right: 1.8rem; transition: color 0.3s; }
    .rt-sol-card:hover .rt-sol-card__num { color: rgba(27,58,143,0.08); }
    .rt-sol-card__icon { width: 58px; height: 58px; background: linear-gradient(135deg, rgba(27,58,143,0.08), rgba(232,119,34,0.06)); border-radius: 16px; display: flex; align-items: center; justify-content: center; transition: background 0.35s, transform 0.35s; box-shadow: 0 2px 10px rgba(27,58,143,0.1); }
    .rt-sol-card:hover .rt-sol-card__icon { background: linear-gradient(135deg, var(--blue), var(--teal-dark)); transform: scale(1.08) rotate(-4deg); }
    .rt-sol-card__icon i.ph { font-size: 1.55rem; color: var(--blue); transition: color 0.3s; line-height: 1; }
    .rt-sol-card:hover .rt-sol-card__icon i.ph { color: #fff; }
    .rt-sol-card__title { font-family: "DM Serif Display", serif; font-size: 1.2rem; font-weight: 400; color: var(--dark); line-height: 1.3; margin: 0; transition: color 0.3s; }
    .rt-sol-card:hover .rt-sol-card__title { color: var(--blue); }
    .rt-sol-card__desc { font-size: 0.9rem; color: var(--mid); line-height: 1.72; margin: 0; flex: 1; }
    .rt-sol-card__cta { display: inline-flex; align-items: center; gap: 0.45rem; font-size: 0.84rem; font-weight: 700; color: var(--blue); transition: color 0.25s, gap 0.25s; margin-top: 0.5rem; }
    .rt-sol-card:hover .rt-sol-card__cta { color: var(--orange); gap: 0.75rem; }
    .rt-sol-card__cta i.ph { font-size: 0.9rem; transition: transform 0.25s; }
    .rt-sol-card:hover .rt-sol-card__cta i.ph { transform: translateX(4px); }


    /* â”€â”€â”€ WHAT WE DELIVER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .rt-deliver { padding: 6rem 3rem; background: linear-gradient(180deg, rgba(27,58,143,0.04) 0%, var(--bg) 100%); position: relative; overflow: hidden; }
    .rt-deliver__ring { position: absolute; top: 100px; left: -120px; width: 350px; height: 350px; border: 1.5px solid rgba(27,58,143,0.06); border-radius: 50%; pointer-events: none; animation: spinSlow 40s linear infinite; }
    .rt-deliver__blob { position: absolute; bottom: 50px; right: -80px; width: 200px; height: 200px; background: rgba(232,119,34,0.04); border-radius: 50%; filter: blur(60px); animation: drift 15s ease-in-out infinite; pointer-events: none; }
    .rt-deliver__inner { max-width: 1200px; margin: 0 auto; }
    .rt-deliver__header { text-align: center; margin-bottom: 4rem; }
    .rt-deliver__grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; counter-reset: cap-counter; }
    .rt-cap-card { background: var(--card-bg); border-radius: 20px; padding: 2rem 1.8rem; border: 1px solid rgba(27,58,143,0.06); position: relative; overflow: hidden; transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s, border-color 0.3s; display: flex; flex-direction: column; gap: 0.8rem; box-shadow: 0 4px 20px rgba(27,58,143,0.06); counter-increment: cap-counter; }
    .rt-cap-card::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 3px; background: linear-gradient(90deg, var(--blue), var(--orange)); opacity: 0.5; transition: opacity 0.4s, height 0.4s; }
    .rt-cap-card:hover::before { opacity: 1; height: 4px; }
    .rt-cap-card::after { content: "0" counter(cap-counter); position: absolute; bottom: 12px; right: 16px; font-family: "DM Serif Display", serif; font-size: 2.5rem; font-weight: 400; color: rgba(27,58,143,0.04); line-height: 1; pointer-events: none; transition: color 0.4s; }
    .rt-cap-card:hover::after { color: rgba(27,58,143,0.08); }
    .rt-cap-card:hover { transform: translateY(-8px); box-shadow: 0 20px 50px rgba(27,58,143,0.12); border-color: rgba(27,58,143,0.15); }
    .rt-cap-card__icon { width: 50px; height: 50px; background: linear-gradient(135deg, rgba(27,58,143,0.08), rgba(232,119,34,0.06)); border-radius: 14px; display: flex; align-items: center; justify-content: center; transition: background 0.3s, transform 0.3s; box-shadow: 0 2px 8px rgba(27,58,143,0.08); }
    .rt-cap-card:hover .rt-cap-card__icon { background: linear-gradient(135deg, var(--teal), var(--teal-dark)); transform: scale(1.1) rotate(-3deg); }
    .rt-cap-card__icon i.ph { font-size: 1.4rem; color: var(--teal); transition: color 0.3s; line-height: 1; }
    .rt-cap-card:hover .rt-cap-card__icon i.ph { color: #fff; }
    .rt-cap-card h3 { font-size: 1rem; font-weight: 700; color: var(--dark); margin: 0; }
    .rt-cap-card p { font-size: 0.88rem; color: var(--mid); line-height: 1.6; margin: 0; }
    @media (max-width: 768px) { .rt-deliver { padding: 3.5rem 1.2rem; } .rt-deliver__grid { grid-template-columns: 1fr; } }

    /* â”€â”€â”€ WHY IT MATTERS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .rt-why { padding: 5rem 3rem; background: linear-gradient(135deg, #060d1f 0%, #0a1635 40%, #0f1f4a 100%); position: relative; overflow: hidden; }
    .rt-why__bg-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 60px 60px; pointer-events: none; }
    .rt-why__glow-1 { position: absolute; width: 400px; height: 400px; border-radius: 50%; background: radial-gradient(circle, rgba(232,119,34,0.15) 0%, transparent 70%); top: -100px; right: -100px; pointer-events: none; animation: drift 18s ease-in-out infinite; }
    .rt-why__glow-2 { position: absolute; width: 350px; height: 350px; border-radius: 50%; background: radial-gradient(circle, rgba(123,163,255,0.1) 0%, transparent 70%); bottom: -120px; left: -80px; pointer-events: none; animation: drift 14s ease-in-out infinite reverse; }
    .rt-why__inner { max-width: 900px; margin: 0 auto; position: relative; z-index: 2; text-align: center; }
    .rt-why__text { font-size: 1rem; color: rgba(255,255,255,0.7); line-height: 1.85; max-width: 850px; margin: 0 auto; }
    @media (max-width: 768px) { .rt-why { padding: 3.5rem 1.2rem; } }

    /* â”€â”€â”€ BUSINESS VALUE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .rt-value { padding: 6rem 3rem; background: linear-gradient(180deg, var(--bg) 0%, rgba(232,119,34,0.04) 100%); position: relative; overflow: hidden; }
    .rt-value__ring { position: absolute; top: 60px; right: -60px; width: 180px; height: 180px; border: 1.5px dashed rgba(232,119,34,0.12); border-radius: 50%; animation: spinSlow 35s linear infinite reverse; pointer-events: none; }
    .rt-value__inner { max-width: 1100px; margin: 0 auto; text-align: center; position: relative; z-index: 1; }
    .rt-value__grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 3rem; text-align: left; }
    .rt-value-card { background: #fff; border-radius: 16px; padding: 1.8rem 1.5rem; display: flex; align-items: flex-start; gap: 1rem; border: 1px solid rgba(232,119,34,0.1); transition: transform 0.3s, box-shadow 0.3s; }
    .rt-value-card:hover { transform: translateY(-6px); box-shadow: 0 14px 40px rgba(27,58,143,0.1); }
    .rt-value-card__icon { width: 46px; height: 46px; flex-shrink: 0; background: linear-gradient(135deg, rgba(232,119,34,0.1), rgba(232,119,34,0.04)); border-radius: 12px; display: flex; align-items: center; justify-content: center; transition: background 0.3s, transform 0.3s; }
    .rt-value-card__icon i.ph { font-size: 1.35rem; color: var(--orange); line-height: 1; transition: color 0.3s; }
    .rt-value-card:hover .rt-value-card__icon { background: linear-gradient(135deg, var(--orange), #c96418); transform: scale(1.08) rotate(-4deg); }
    .rt-value-card:hover .rt-value-card__icon i.ph { color: #fff; }
    .rt-value-card span { font-size: 0.9rem; font-weight: 500; color: var(--dark); line-height: 1.6; }
    @media (max-width: 768px) { .rt-value { padding: 3.5rem 1.2rem; } .rt-value__grid { grid-template-columns: 1fr; } }

    /* â”€â”€â”€ GOVERNANCE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .rt-governance { padding: 5rem 3rem; background: var(--bg); }
    .rt-governance__inner { max-width: 900px; margin: 0 auto; background: #fff; border-radius: 24px; padding: 3rem 3.5rem; box-shadow: 0 10px 40px rgba(27,58,143,0.08); border: 1px solid rgba(27,58,143,0.06); position: relative; overflow: hidden; text-align: center; }
    .rt-governance__inner::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, var(--blue), var(--orange)); }
    .rt-governance__icon-wrap { width: 60px; height: 60px; margin: 0 auto 1.5rem; background: linear-gradient(135deg, rgba(27,58,143,0.08), rgba(232,119,34,0.06)); border-radius: 16px; display: flex; align-items: center; justify-content: center; }
    .rt-governance__icon-wrap i.ph { font-size: 1.6rem; color: var(--teal); line-height: 1; }
    .rt-governance p { font-size: 1rem; color: #444; line-height: 1.85; margin-bottom: 1.2rem; text-align: left; }
    .rt-governance p:last-child { margin-bottom: 0; }
    @media (max-width: 768px) { .rt-governance { padding: 3rem 1.2rem; } .rt-governance__inner { padding: 2rem 1.5rem; } }

    /* â”€â”€â”€ CASE STUDY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .rt-case { padding: 6rem 3rem; background: linear-gradient(180deg, rgba(27,58,143,0.03) 0%, #fff 100%); }
    .rt-case__inner { max-width: 1200px; margin: 0 auto; }
    .rt-case__header { margin-bottom: 3.5rem; }
    .rt-cs-panel { position: relative; background: #fff; border-radius: 24px; padding: 3rem 3rem 3rem 3.5rem; display: grid; grid-template-columns: 160px 1fr; gap: 2.5rem; align-items: start; overflow: hidden; box-shadow: 0 8px 40px rgba(27,58,143,0.08); border: 1px solid rgba(27,58,143,0.06); }
    .rt-cs-panel::before { content: ""; position: absolute; top: 0; left: 0; width: 6px; height: 100%; background: linear-gradient(180deg, var(--blue), var(--orange)); border-radius: 24px 0 0 24px; }
    .rt-cs-panel__num { position: absolute; top: 1.5rem; right: 2.5rem; font-family: "DM Serif Display", serif; font-size: 5rem; font-weight: 400; color: rgba(27,58,143,0.05); line-height: 1; pointer-events: none; user-select: none; }
    .rt-cs-panel__side { display: flex; flex-direction: column; align-items: center; gap: 1.2rem; padding-top: 0.5rem; }
    .rt-cs-panel__icon { width: 72px; height: 72px; background: linear-gradient(135deg, rgba(27,58,143,0.1), rgba(232,119,34,0.08)); border-radius: 20px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 16px rgba(27,58,143,0.12); }
    .rt-cs-panel__icon i.ph { font-size: 1.6rem; color: var(--teal); line-height: 1; }
    .rt-cs-panel__badge { background: linear-gradient(135deg, var(--blue), var(--teal-dark)); color: #fff; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 0.35rem 0.9rem; border-radius: 999px; text-align: center; }
    .rt-cs-panel__content h3 { font-family: "DM Serif Display", serif; font-size: 1.35rem; font-weight: 400; color: var(--dark); line-height: 1.3; margin: 0 0 1.8rem; padding-right: 4rem; }
    .rt-cs-section { margin-bottom: 1.6rem; padding-bottom: 1.6rem; border-bottom: 1px solid rgba(27,58,143,0.06); }
    .rt-cs-section:last-child { margin-bottom: 0; padding-bottom: 0; border-bottom: none; }
    .rt-cs-section__label { display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 0.28rem 0.85rem; border-radius: 999px; margin-bottom: 0.9rem; }
    .rt-cs-section__label--blue { background: rgba(27,58,143,0.08); color: var(--blue); }
    .rt-cs-section__label--orange { background: rgba(232,119,34,0.1); color: var(--orange); }
    .rt-cs-section__label--teal { background: rgba(27,58,143,0.06); color: #1B3A8F; }
    .rt-cs-section__label--green { background: rgba(22,163,74,0.08); color: #16a34a; }
    .rt-cs-section p { font-size: 0.9rem; color: #444; line-height: 1.8; margin-bottom: 0.8rem; }
    .rt-cs-section p:last-child { margin-bottom: 0; }
    .rt-cs-caps { margin: 0; padding: 0; list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 0.55rem; }
    .rt-cs-caps li { font-size: 0.87rem; color: #444; line-height: 1.6; padding-left: 1.2rem; position: relative; }
    .rt-cs-caps li::before { content: ""; position: absolute; left: 0; top: 0.6em; width: 6px; height: 6px; background: var(--orange); border-radius: 50%; }
    @media (max-width: 991px) { .rt-case { padding: 3.5rem 1.2rem; } .rt-cs-panel { grid-template-columns: 1fr; padding: 2.5rem 1.8rem; } .rt-cs-panel__side { flex-direction: row; } .rt-cs-panel__num { font-size: 3.5rem; top: 1rem; right: 1.2rem; } .rt-cs-caps { grid-template-columns: 1fr; } .rt-cs-panel__content h3 { padding-right: 0; } }

    /* â”€â”€â”€ CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .rt-cta { background: linear-gradient(135deg, #142d6b 0%, #1B3A8F 100%); padding: 4rem 3rem; text-align: center; position: relative; overflow: hidden; }
    .rt-cta::before { content: ""; position: absolute; width: 400px; height: 400px; border-radius: 50%; background: rgba(232,119,34,0.08); top: -150px; right: -100px; pointer-events: none; }
    .rt-cta__ring { position: absolute; bottom: -80px; left: 10%; width: 250px; height: 250px; border: 2px solid rgba(255,255,255,0.08); border-radius: 50%; animation: spinSlow 20s linear infinite; }
    .rt-cta__dots { position: absolute; top: 20px; left: 50%; width: 100px; height: 100px; background-image: radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px); background-size: 12px 12px; pointer-events: none; animation: drift 12s ease-in-out infinite; }
    .rt-cta__heading { font-family: "DM Serif Display", serif; font-size: clamp(1.5rem, 3vw, 2.2rem); color: #fff; font-weight: 400; margin-bottom: 1rem; position: relative; }
    .rt-cta__sub { color: rgba(255,255,255,0.7); font-size: 1rem; margin-bottom: 2rem; position: relative; }
    .rt-cta__btn { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--orange); color: #fff; font-weight: 700; font-size: 0.92rem; padding: 0.8rem 2rem; border-radius: 999px; text-decoration: none; transition: transform 0.3s, box-shadow 0.3s; position: relative; }
    .rt-cta__btn:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(232,119,34,0.4); color: #fff; }
    @media (max-width: 768px) { .rt-cta { padding: 3rem 1.2rem; } }

    /* â”€â”€â”€ ANIMATIONS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    @keyframes spinSlow { to { transform: rotate(360deg); } }
    @keyframes float { 0%,100% { transform: translateY(0) rotate(0deg); } 33% { transform: translateY(-15px) rotate(2deg); } 66% { transform: translateY(8px) rotate(-1deg); } }
    @keyframes drift { 0%,100% { transform: translate(0,0); } 25% { transform: translate(20px,-10px); } 50% { transform: translate(-10px,-20px); } 75% { transform: translate(-20px,10px); } }

    /* â”€â”€â”€ REVEAL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    [data-reveal] { opacity: 0; transform: translateY(40px); transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1); }
    [data-reveal].is-visible { opacity: 1; transform: translateY(0); }
    [data-reveal-left] { opacity: 0; transform: translateX(-40px); transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1); }
    [data-reveal-left].is-visible { opacity: 1; transform: translateX(0); }
    [data-reveal-right] { opacity: 0; transform: translateX(40px); transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1); }
    [data-reveal-right].is-visible { opacity: 1; transform: translateX(0); }
  `],
})
export class Retail implements AfterViewInit, OnDestroy {
  private revealObserver: IntersectionObserver | null = null;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const host = this.el.nativeElement as HTMLElement;

    // Particles
    const container = host.querySelector('#rt-particles');
    if (container) {
      for (let i = 0; i < 18; i++) {
        const p = document.createElement('span');
        p.className = 'rt-hero__particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (6 + Math.random() * 8) + 's';
        p.style.animationDelay = (Math.random() * 6) + 's';
        p.style.width = p.style.height = (2 + Math.random() * 4) + 'px';
        container.appendChild(p);
      }
    }

    // Scroll reveal
    const revealEls = host.querySelectorAll('[data-reveal],[data-reveal-left],[data-reveal-right]');
    this.revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = Number((entry.target as HTMLElement).dataset['revealDelay']) || 0;
          setTimeout(() => entry.target.classList.add('is-visible'), delay * 150);
          this.revealObserver?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach((el, i) => {
      if (!(el as HTMLElement).dataset['revealDelay']) {
        (el as HTMLElement).dataset['revealDelay'] = String(i % 5);
      }
      this.revealObserver!.observe(el);
    });

    // Card hover glow
    const cards = host.querySelectorAll<HTMLElement>('.rt-cap-card');
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', ((e.clientX - rect.left) / rect.width * 100) + '%');
        card.style.setProperty('--mouse-y', ((e.clientY - rect.top) / rect.height * 100) + '%');
      });
    });
  }

  ngOnDestroy(): void {
    if (this.revealObserver) this.revealObserver.disconnect();
  }
}



