import { Component, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-manufacturing',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- â”€â”€â”€ BREADCRUMB â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <div class="breadcrumb-bar">
      <a routerLink="/">Home</a>
      <span class="sep">></span>
      <a routerLink="/who-we-serve">Who We Serve</a>
      <span class="sep">></span>
      <span class="current">Manufacturing</span>
    </div>

    <!-- â”€â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="mf-hero">
      <div class="mf-hero__bg">
        <img src="Images/image_011.jpg" alt="Manufacturing" />
        <div class="mf-hero__overlay"></div>
      </div>
      <div class="mf-hero__abstract-ring"></div>
      <div class="mf-hero__abstract-blob"></div>
      <div class="mf-hero__particles" id="mf-particles"></div>
      <div class="mf-hero__content" data-reveal>
        <div class="mf-hero__badge">
          <span class="mf-hero__badge-dot"></span>
          <span>Agentic AI Solution</span>
        </div>
        <h1 class="mf-hero__heading">Agentic AI for<br/><em>Manufacturing</em></h1>
        <p class="mf-hero__sub">Transform manufacturing operations with intelligent AI agents that can reason, orchestrate, and execute complex workflows across production, supply chain, quality management, maintenance, and plant operations.</p>
      </div>
    </section>

    <!-- â”€â”€â”€ INTRO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="mf-intro">
      <div class="mf-intro__blob"></div>
      <div class="mf-intro__dots"></div>
      <div class="mf-intro__grid">
        <div class="mf-intro__text" data-reveal-left>
          <span class="mf-eyebrow">Overview</span>
          <h2 class="mf-section-heading">Intelligent AI agents that <em>orchestrate</em> manufacturing operations</h2>
          <p>Our Agentic AI solutions empower manufacturers to optimise production, enhance operational resilience, improve product quality, and accelerate decision-making through secure, intelligent automationâ€”while maintaining robust human oversight and governance.</p>
          <p>We design and deploy enterprise-grade, manufacturing-ready Agentic AI solutions that seamlessly integrate with Enterprise Resource Planning (ERP) systems, Manufacturing Execution Systems (MES), Supply Chain Management (SCM) platforms, Industrial IoT (IIoT) devices, Computerised Maintenance Management Systems (CMMS), Product Lifecycle Management (PLM) applications, quality management systems, and plant operations environments. By intelligently coordinating activities across people, machines, enterprise systems, and AI agents, our solutions eliminate operational silos, streamline end-to-end manufacturing processes, and enable faster, data-driven decisions across the production ecosystem.</p>
          <p>From predictive maintenance and production scheduling to quality assurance, inventory optimisation, supplier collaboration, warehouse operations, and supply chain orchestration, our Agentic AI solutions optimise every stage of the manufacturing value chain. Built on secure, scalable, and governance-first AI architectures, they enable manufacturers to reduce downtime, increase asset utilisation, improve product quality, strengthen supply chain resilience, lower operating costs, and accelerate digital transformation while maintaining the highest standards of operational safety, regulatory compliance, and responsible AI.</p>
          <div class="mf-intro__actions">
            <a routerLink="/customer-delight" class="mf-intro__btn mf-intro__btn--primary">Customer Delight</a>
            <a routerLink="/what-we-offer" class="mf-intro__btn mf-intro__btn--outline">Our Solutions <svg width="14" height="14" viewBox="0 0 18 18" fill="none"><path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
          </div>
        </div>
        <div class="mf-intro__visual" data-reveal-right>
          <div class="mf-intro__dot-grid"></div>
          <div class="mf-intro__ring"></div>
          <div class="mf-intro__img">
            <img src="Images/image_051.jpg" alt="Manufacturing AI" loading="lazy" />
          </div>
          <div class="mf-intro__float-card">
            <div class="mf-intro__float-icon"><i class="ph ph-factory"></i></div>
            <div class="mf-intro__float-text">
              <strong>Smart Factory</strong>
              <span>AI-powered operations</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- â”€â”€â”€ WHAT WE DELIVER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="mf-deliver" id="mf-deliver">
      <div class="mf-deliver__ring"></div>
      <div class="mf-deliver__blob"></div>
      <div class="mf-deliver__inner">
        <div class="mf-deliver__header" data-reveal>
          <span class="mf-eyebrow">What We Deliver</span>
          <h2 class="mf-section-heading">End-to-end <em>manufacturing intelligence</em></h2>
        </div>
        <div class="mf-deliver__grid">
          <div class="mf-cap-card" data-reveal>
            <div class="mf-cap-card__icon"><i class="ph ph-calendar"></i></div>
            <h3>Production Planning and Schedule Optimisation</h3>
            <p>Intelligently orchestrate production plans, schedules, and work orders to maximise throughput and on-time delivery across plants.</p>
          </div>
          <div class="mf-cap-card" data-reveal>
            <div class="mf-cap-card__icon"><i class="ph ph-link"></i></div>
            <h3>Supply Chain and Inventory Coordination</h3>
            <p>Monitor and coordinate supplier performance, inbound logistics, inventory levels, and material flow across the entire supply chain.</p>
          </div>
          <div class="mf-cap-card" data-reveal>
            <div class="mf-cap-card__icon"><i class="ph ph-pulse"></i></div>
            <h3>Predictive Maintenance Support</h3>
            <p>Continuously monitor equipment health, predict failures, and coordinate maintenance activities to reduce unplanned downtime.</p>
          </div>
          <div class="mf-cap-card" data-reveal>
            <div class="mf-cap-card__icon"><i class="ph ph-eye"></i></div>
            <h3>Quality Inspection and Exception Handling</h3>
            <p>Automate quality checks, detect anomalies, manage defect workflows, and escalate quality exceptions for expert review.</p>
          </div>
          <div class="mf-cap-card" data-reveal>
            <div class="mf-cap-card__icon"><i class="ph ph-warning-circle"></i></div>
            <h3>Incident Triage and Root-Cause Assistance</h3>
            <p>Rapidly triage operational incidents, identify root causes, and coordinate cross-functional responses to minimise production disruption.</p>
          </div>
          <div class="mf-cap-card" data-reveal>
            <div class="mf-cap-card__icon"><i class="ph ph-users-three"></i></div>
            <h3>Human-in-the-Loop Controls for Critical Decisions</h3>
            <p>Ensure that safety-critical, high-impact, and compliance-sensitive decisions are reviewed and approved by qualified operational experts.</p>
          </div>
          <div class="mf-cap-card" data-reveal>
            <div class="mf-cap-card__icon"><i class="ph ph-lock-simple"></i></div>
            <h3>Governance, Monitoring, and Performance Tracking</h3>
            <p>Provide complete operational visibility, performance analytics, and governance controls across all manufacturing workflows.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- â”€â”€â”€ WHY IT MATTERS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="mf-why">
      <div class="mf-why__bg-grid"></div>
      <div class="mf-why__glow-1"></div>
      <div class="mf-why__glow-2"></div>
      <div class="mf-why__inner">
        <div class="mf-why__header" data-reveal>
          <span class="mf-eyebrow mf-eyebrow--light">Why It Matters</span>
          <h2 class="mf-section-heading mf-section-heading--light">Why it matters</h2>
          <p class="mf-why__text">Manufacturers operate in increasingly complex environments where production continuity, operational efficiency, product quality, and supply chain resilience are critical to maintaining competitiveness. However, fragmented systems, manual coordination, unplanned equipment failures, and supply chain disruptions often create bottlenecks that impact productivity, increase operating costs, and delay customer deliveries. Agentic AI addresses these challenges by continuously monitoring production environments, analysing operational data in real time, intelligently orchestrating workflows across plants and enterprise systems, recommending context-aware actions, and autonomously executing routine operational decisions while escalating exceptions that require human expertise. The result is a more agile, resilient, and data-driven manufacturing operation capable of responding rapidly to changing business and operational conditions.</p>
        </div>
      </div>
    </section>

    <!-- â”€â”€â”€ BUSINESS VALUE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="mf-value" data-reveal>
      <div class="mf-value__ring"></div>
      <div class="mf-value__inner">
        <span class="mf-eyebrow">Business Value</span>
        <h2 class="mf-section-heading">Business value</h2>
        <div class="mf-value__grid">
          <div class="mf-value-card">
            <div class="mf-value-card__icon"><i class="ph ph-gear"></i></div>
            <span>Reduce unplanned equipment downtime through predictive monitoring and intelligent maintenance orchestration.</span>
          </div>
          <div class="mf-value-card">
            <div class="mf-value-card__icon"><i class="ph ph-lightning"></i></div>
            <span>Accelerate operational decision-making with real-time production, inventory, and supply chain intelligence.</span>
          </div>
          <div class="mf-value-card">
            <div class="mf-value-card__icon"><i class="ph ph-chart-line-up"></i></div>
            <span>Improve production efficiency, asset utilisation, and throughput across manufacturing operations.</span>
          </div>
          <div class="mf-value-card">
            <div class="mf-value-card__icon"><i class="ph ph-package"></i></div>
            <span>Enhance inventory visibility and optimise material flow across plants, warehouses, and suppliers.</span>
          </div>
          <div class="mf-value-card">
            <div class="mf-value-card__icon"><i class="ph ph-check-circle"></i></div>
            <span>Improve product quality and consistency through AI-assisted quality monitoring and process optimisation.</span>
          </div>
          <div class="mf-value-card">
            <div class="mf-value-card__icon"><i class="ph ph-robot"></i></div>
            <span>Reduce manual effort across production planning, maintenance, quality assurance, and supply chain operations through intelligent workflow orchestration.</span>
          </div>
          <div class="mf-value-card">
            <div class="mf-value-card__icon"><i class="ph ph-factory"></i></div>
            <span>Strengthen operational resilience while lowering manufacturing costs and improving on-time delivery performance.</span>
          </div>
        </div>
      </div>
    </section>

    <!-- â”€â”€â”€ GOVERNANCE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="mf-governance">
      <div class="mf-governance__inner" data-reveal>
        <div class="mf-governance__icon-wrap"><i class="ph ph-lock-simple"></i></div>
        <h2 class="mf-section-heading">Governance and <em>Control</em></h2>
        <p>Our Agentic AI solutions are built on a governance-first architecture that ensures every automated decision is transparent, secure, and aligned with operational policies and regulatory requirements. Configurable business rules, role-based approvals, explainable AI decisioning, comprehensive audit trails, and continuous operational monitoring provide manufacturers with complete visibility and control across production, maintenance, quality, and supply chain workflows. Human-in-the-loop oversight is embedded throughout safety-critical, quality-sensitive, and high-impact operational processes, ensuring that complex decisions remain under expert supervision while routine activities are executed autonomously. This balanced approach enables manufacturers to confidently scale intelligent automation while maintaining operational safety, product quality, regulatory compliance, and business continuity.</p>
      </div>
    </section>

    <!-- â”€â”€â”€ CASE STUDIES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="mf-case">
      <div class="mf-case__inner">
        <div class="mf-case__header" data-reveal>
          <h2 class="mf-section-heading">Real-world <em>impact in action</em></h2>
        </div>

        <!-- Case Study 1: Supply Chain Resilience -->
        <div class="mf-cs-panel" data-reveal>
          <div class="mf-cs-panel__num">01</div>
          <div class="mf-cs-panel__side">
            <div class="mf-cs-panel__icon"><i class="ph ph-link"></i></div>
            <div class="mf-cs-panel__badge">Manufacturing</div>
          </div>
          <div class="mf-cs-panel__content">
            <h3>Agentic AI for Manufacturing Supply Chain Resilience</h3>
            <div class="mf-cs-section">
              <div class="mf-cs-section__label mf-cs-section__label--blue">Business Challenge</div>
              <p>A leading mid-sized manufacturer was experiencing recurring production disruptions caused by supplier delays, fragmented logistics visibility, and slow responses to supply chain events. Critical information relating to supplier commitments, inbound shipments, inventory availability, and production schedules was dispersed across multiple enterprise systems, making it difficult for procurement, logistics, and production teams to identify and respond to disruptions before they impacted manufacturing operations.</p>
              <p>The organisation relied heavily on disconnected ERP alerts, manual reporting, spreadsheets, and email-based coordination to manage supplier performance and inbound logistics. By the time potential disruptions were identified, they had often cascaded into production delays, idle manufacturing assets, inventory shortages, rescheduled work orders, expedited freight costs, and missed customer delivery commitments.</p>
            </div>
            <div class="mf-cs-section">
              <div class="mf-cs-section__label mf-cs-section__label--orange">Solution Delivered</div>
              <p>We implemented an enterprise-grade Agentic AI platform that established a unified orchestration layer across the client's ERP system, supplier collaboration portals, transportation management platforms, warehouse operations, and production planning applications. Specialised AI agents collaborated in real time to monitor supplier performance, shipment movements, inventory availability, production schedules, and external disruption signals. The solution incorporated predictive analytics, scenario modelling, intelligent workflow orchestration, and explainable AI decision support, enabling the organisation to improve supply chain resilience while maintaining operational governance, transparency, and business continuity.</p>
            </div>
            <div class="mf-cs-section">
              <div class="mf-cs-section__label mf-cs-section__label--teal">Key Capabilities</div>
              <ul class="mf-cs-caps">
                <li>Continuous monitoring of supplier performance, lead times, delivery commitments, and supplier risk indicators.</li>
                <li>Real-time tracking of inbound shipments, logistics networks, carrier performance, port congestion, and transportation disruptions.</li>
                <li>Intelligent assessment of downstream impacts on production schedules, inventory levels, manufacturing capacity, and customer commitments.</li>
                <li>AI-powered scenario modelling and what-if analysis to evaluate alternative sourcing, inventory allocation, and logistics strategies.</li>
                <li>Automated workflow orchestration across procurement, logistics, production planning, warehouse operations, and supplier collaboration teams.</li>
                <li>Intelligent recommendations for inventory rebalancing, supplier substitutions, production rescheduling, and risk mitigation actions.</li>
                <li>Human-in-the-loop governance for high-value sourcing decisions and supply chain exceptions requiring executive approval.</li>
                <li>Enterprise dashboards providing real-time visibility into supply chain performance, operational risks, and supplier reliability.</li>
                <li>Comprehensive audit trails, explainable AI recommendations, and policy-driven governance to support compliance and accountability.</li>
              </ul>
            </div>
            <div class="mf-cs-section">
              <div class="mf-cs-section__label mf-cs-section__label--green">Business Outcomes</div>
              <p>The manufacturer transformed its supply chain operations from a reactive, manually coordinated process into a proactive, AI-driven operating model capable of anticipating disruptions and orchestrating intelligent responses before production was impacted. The solution reduced production downtime, improved supplier collaboration, enhanced inventory availability, and increased on-time delivery performance while strengthening operational resilience and reducing supply chain costs.</p>
            </div>
          </div>
        </div>

        <!-- Case Study 2: Healthcare Workflow Orchestration -->
        <div class="mf-cs-panel mf-cs-panel--alt" data-reveal>
          <div class="mf-cs-panel__num">02</div>
          <div class="mf-cs-panel__side">
            <div class="mf-cs-panel__icon"><i class="ph ph-pulse"></i></div>
            <div class="mf-cs-panel__badge">Healthcare</div>
          </div>
          <div class="mf-cs-panel__content">
            <h3>Agentic AI for Healthcare Workflow Orchestration</h3>
            <div class="mf-cs-section">
              <div class="mf-cs-section__label mf-cs-section__label--blue">Business Challenge</div>
              <p>A leading multi-site healthcare organisation was facing growing operational inefficiencies due to fragmented patient workflows spanning appointment scheduling, insurance verification, prior authorisation, clinical documentation, revenue cycle management, and post-care follow-up. Clinical and administrative teams were required to navigate multiple Electronic Health Record (EHR) systems, billing platforms, payer portals, and partner applications to coordinate patient care, resulting in excessive manual effort, delayed care delivery, and increased administrative costs.</p>
              <p>Operating across multiple hospitals, specialty clinics, and ambulatory care centres, the organisation struggled with inconsistent processes, disconnected data, and limited visibility into end-to-end patient journeys. Routine activitiesâ€”including eligibility verification, pre-visit preparation, prior authorisation, claims validation, and care coordinationâ€”required repeated handoffs between departments, leading to avoidable delays, duplicate effort, revenue leakage, and missed opportunities to enhance patient satisfaction and workforce productivity.</p>
            </div>
            <div class="mf-cs-section">
              <div class="mf-cs-section__label mf-cs-section__label--orange">Solution Delivered</div>
              <p>We implemented an enterprise-grade Agentic AI platform that established a unified orchestration layer across the client's clinical, administrative, and revenue cycle ecosystems. Seamlessly integrating with Electronic Health Records (EHRs), practice management systems, revenue cycle management platforms, payer portals, laboratory systems, and patient engagement applications, the platform intelligently coordinated patient workflows from initial scheduling through post-discharge follow-up.</p>
              <p>Specialised AI agents continuously collaborated to automate routine coordination activities while ensuring that clinically sensitive and financially significant decisions remained under expert human oversight. The platform leveraged AI-driven clinical reasoning, workflow automation, document intelligence, and real-time decision support to improve care coordination, strengthen revenue cycle performance, and enhance patient engagement while maintaining enterprise-grade governance, regulatory compliance, and operational transparency.</p>
            </div>
            <div class="mf-cs-section">
              <div class="mf-cs-section__label mf-cs-section__label--teal">Key Capabilities</div>
              <ul class="mf-cs-caps">
                <li>Intelligent patient coordination across multiple Electronic Health Records (EHRs), scheduling platforms, and care management systems.</li>
                <li>Automated insurance eligibility verification, benefits validation, and prior authorisation coordination before patient encounters.</li>
                <li>AI-generated pre-visit summaries and care preparation packages for clinicians and operational staff.</li>
                <li>Intelligent claims validation, coding verification, and documentation completeness checks to improve first-pass claims acceptance.</li>
                <li>Automated monitoring of laboratory results, referrals, discharge plans, and care pathways to coordinate timely follow-up activities.</li>
                <li>AI-driven patient outreach through appointment reminders, care notifications, scheduling assistance, and personalised follow-up communications.</li>
                <li>Intelligent workflow orchestration across clinical, administrative, revenue cycle, and patient engagement teams to reduce manual handoffs.</li>
                <li>Human-in-the-loop governance for clinically sensitive, compliance-related, and high-impact workflows requiring expert review and approval.</li>
                <li>Comprehensive audit trails, explainable AI recommendations, and policy-driven controls to support HIPAA, HITRUST, SOC 2, and organisational governance requirements.</li>
              </ul>
            </div>
            <div class="mf-cs-section">
              <div class="mf-cs-section__label mf-cs-section__label--green">Business Outcomes</div>
              <p>The organisation transformed fragmented, manually coordinated patient operations into a unified, AI-driven workflow ecosystem that streamlined collaboration across clinical, administrative, and revenue cycle teams. The solution delivered measurable improvements in appointment readiness, prior authorisation turnaround times, claims quality, and patient follow-up compliance while strengthening revenue cycle performance and enhancing the overall patient experienceâ€”successfully scaling intelligent automation without compromising clinical quality, regulatory compliance, or patient safety.</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- â”€â”€â”€ CTA BAND â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="mf-cta">
      <div class="mf-cta__ring"></div>
      <div class="mf-cta__dots"></div>
      <h2 class="mf-cta__heading">Ready to transform your manufacturing operations?</h2>
      <p class="mf-cta__sub">Let's discuss how Agentic AI can drive operational excellence across your production ecosystem.</p>
      <a routerLink="/contact-us" class="mf-cta__btn">
        Schedule a Consultation
        <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
    </section>
  `,
  styles: [`
    :host {
      --blue: #1B3A8F;
      --orange: #E87722;
      --dark: #111111;
      --bg: #f5f5f3;
      --mid: #555555;
      --card-bg: #ffffff;
      --teal: #1B3A8F;
      --teal-dark: #142d6b;
      --teal-light: #E87722;
    }

    /* â”€â”€â”€ BREADCRUMB â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .breadcrumb-bar { background: var(--teal-dark); padding: 0.55rem 3rem; }
    .breadcrumb-bar a, .breadcrumb-bar span { color: rgba(255,255,255,0.65); font-size: 0.8rem; font-weight: 500; text-decoration: none; }
    .breadcrumb-bar a:hover { color: #fff; }
    .breadcrumb-bar .sep { margin: 0 0.45rem; color: rgba(255,255,255,0.3); }
    .breadcrumb-bar .current { color: var(--teal-light); font-weight: 600; }
    @media (max-width: 768px) { .breadcrumb-bar { padding: 0.55rem 1rem; margin-top: 58px; } }

    /* â”€â”€â”€ SHARED â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .mf-eyebrow { display: inline-block; color: var(--teal); font-size: 0.78rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 1rem; }
    .mf-eyebrow--light { color: var(--orange); }
    .mf-section-heading { font-family: "DM Serif Display", serif; font-size: clamp(1.8rem, 3vw, 2.5rem); color: var(--dark); font-weight: 400; line-height: 1.2; margin-bottom: 1.2rem; }
    .mf-section-heading em { color: var(--orange); font-style: italic; }
    .mf-section-heading--light { color: #fff; }

    /* â”€â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .mf-hero { position: relative; height: 55vh; min-height: 360px; max-height: 480px; overflow: hidden; }
    .mf-hero__bg { position: absolute; inset: 0; }
    .mf-hero__bg img { width: 100%; height: 100%; object-fit: cover; transform: scale(1.05); animation: heroZoom 12s ease-out forwards; }
    @keyframes heroZoom { to { transform: scale(1); } }
    .mf-hero__overlay { position: absolute; inset: 0; background: radial-gradient(ellipse at 20% 30%, rgba(232, 119, 34, 0.28), transparent 55%), radial-gradient(ellipse at 80% 70%, rgba(27, 58, 143, 0.45), transparent 55%), linear-gradient(180deg, rgba(16, 21, 42, 0.35), rgba(16, 21, 42, 0.85)); }
    .mf-hero__abstract-ring { position: absolute; top: 8%; left: 4%; width: 220px; height: 220px; border: 1.5px solid rgba(255,255,255,0.1); border-radius: 50%; z-index: 1; animation: spinSlow 28s linear infinite; }
    .mf-hero__abstract-blob { position: absolute; bottom: 12%; right: 6%; width: 140px; height: 140px; background: rgba(232,119,34,0.15); border-radius: 50%; z-index: 1; filter: blur(40px); animation: drift 14s ease-in-out infinite; }
    .mf-hero__particles { position: absolute; inset: 0; z-index: 1; overflow: hidden; pointer-events: none; }
    .mf-hero__particle { position: absolute; width: 4px; height: 4px; background: rgba(255,255,255,0.4); border-radius: 50%; animation: particleRise linear infinite; }
    @keyframes particleRise { 0% { transform: translateY(100vh) scale(0); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(-20px) scale(1); opacity: 0; } }
    .mf-hero__content { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 2rem; z-index: 2; }
    .mf-hero__badge { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.1); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.2); border-radius: 999px; padding: 0.35rem 1.1rem; margin-bottom: 1.5rem; opacity: 0; transform: translateY(12px); animation: fadeUp 0.8s 0.3s forwards; }
    .mf-hero__badge-dot { width: 7px; height: 7px; background: var(--teal-light); border-radius: 50%; animation: pulse 2s infinite; }
    @keyframes pulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.5; transform:scale(0.7); } }
    .mf-hero__badge span:last-child { color: #fff; font-size: 0.78rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; }
    .mf-hero__heading { font-family: "DM Serif Display", serif; font-size: clamp(1.8rem, 4vw, 3rem); color: #fff; font-weight: 400; line-height: 1.1; margin-bottom: 1.2rem; opacity: 0; transform: translateY(20px); animation: fadeUp 1s 0.5s forwards; }
    .mf-hero__heading em { font-style: italic; color: var(--orange); }
    .mf-hero__sub { font-size: 0.95rem; color: rgba(255,255,255,0.75); max-width: 580px; line-height: 1.6; margin-bottom: 1.5rem; opacity: 0; transform: translateY(20px); animation: fadeUp 1s 0.7s forwards; }
    .mf-hero__cta { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--orange); color: #fff; font-weight: 600; font-size: 0.9rem; padding: 0.75rem 1.8rem; border-radius: 999px; text-decoration: none; transition: background 0.3s, transform 0.3s, box-shadow 0.3s; opacity: 0; transform: translateY(20px); animation: fadeUp 1s 0.9s forwards; }
    .mf-hero__cta:hover { background: #c96418; color: #fff; transform: translateY(-3px); box-shadow: 0 12px 32px rgba(232,119,34,0.4); }
    @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
    @media (max-width: 768px) { .mf-hero { height: 50vh; min-height: 320px; } .mf-hero__sub { font-size: 0.88rem; } }

    /* â”€â”€â”€ INTRO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .mf-intro { padding: 6rem 3rem; max-width: 1200px; margin: 0 auto; position: relative; overflow: hidden; }
    .mf-intro__blob { position: absolute; top: -60px; right: -80px; width: 300px; height: 300px; background: radial-gradient(circle, rgba(27,58,143,0.06) 0%, transparent 70%); border-radius: 50%; animation: drift 15s ease-in-out infinite; pointer-events: none; }
    .mf-intro__dots { position: absolute; bottom: -40px; left: -40px; width: 150px; height: 150px; background-image: radial-gradient(circle, rgba(232,119,34,0.2) 1.5px, transparent 1.5px); background-size: 16px 16px; opacity: 0.6; pointer-events: none; animation: float 10s ease-in-out infinite; }
    .mf-intro__grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 5rem; align-items: center; }
    .mf-intro__text p { font-size: 1rem; color: #444; line-height: 1.85; margin-bottom: 1.2rem; }
    .mf-intro__visual { position: relative; padding: 2rem; }
    .mf-intro__ring { position: absolute; top: -10px; right: -10px; width: 280px; height: 280px; border: 2px dashed rgba(27,58,143,0.1); border-radius: 50%; animation: spinSlow 35s linear infinite; pointer-events: none; }
    .mf-intro__ring::after { content: ""; position: absolute; top: -5px; left: 50%; width: 10px; height: 10px; background: var(--orange); border-radius: 50%; box-shadow: 0 0 16px rgba(232,119,34,0.5); }
    .mf-intro__dot-grid { position: absolute; top: -15px; left: -15px; width: 120px; height: 120px; background-image: radial-gradient(circle, rgba(27,58,143,0.15) 1.5px, transparent 1.5px); background-size: 14px 14px; pointer-events: none; z-index: 0; }
    .mf-intro__img { width: 100%; border-radius: 24px; box-shadow: 0 20px 60px rgba(27,58,143,0.15); overflow: hidden; position: relative; z-index: 1; }
    .mf-intro__img img { width: 100%; height: auto; display: block; }
    .mf-intro__float-card { position: absolute; bottom: -30px; right: -20px; background: #fff; border-radius: 16px; padding: 1.1rem 1.4rem; box-shadow: 0 10px 40px rgba(0,0,0,0.1); display: flex; align-items: center; gap: 0.8rem; z-index: 2; animation: floatCard 4s ease-in-out infinite; }
    @keyframes floatCard { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
    .mf-intro__float-icon { width: 44px; height: 44px; background: linear-gradient(135deg, var(--orange), #c96418); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; color: #fff; }
    .mf-intro__float-icon i.ph { font-size: 1.4rem; line-height: 1; }
    .mf-intro__float-text strong { display: block; font-size: 0.85rem; color: var(--dark); }
    .mf-intro__float-text span { font-size: 0.75rem; color: var(--mid); }
    .mf-intro__actions { display: flex; flex-wrap: wrap; gap: 0.9rem; margin-top: 1.8rem; }
    .mf-intro__btn { display: inline-flex; align-items: center; gap: 0.45rem; font-weight: 700; font-size: 0.88rem; padding: 0.7rem 1.6rem; border-radius: 999px; text-decoration: none; transition: transform 0.3s, box-shadow 0.3s; }
    .mf-intro__btn--primary { background: var(--orange); color: #fff; }
    .mf-intro__btn--primary:hover { background: #c96418; transform: translateY(-2px); box-shadow: 0 10px 28px rgba(232,119,34,0.35); color: #fff; }
    .mf-intro__btn--outline { background: transparent; color: var(--blue); border: 2px solid var(--blue); }
    .mf-intro__btn--outline:hover { background: var(--blue); color: #fff; transform: translateY(-2px); box-shadow: 0 10px 28px rgba(27,58,143,0.2); }
    /* tagline strip */
    .mf-tagline { background: linear-gradient(135deg, #0f1f4a, #1B3A8F); padding: 2.5rem 3rem; text-align: center; }
    .mf-tagline p { font-family: "DM Serif Display", serif; font-size: clamp(1.1rem, 2vw, 1.4rem); font-style: italic; color: rgba(255,255,255,0.9); max-width: 860px; margin: 0 auto; line-height: 1.6; }
    @media (max-width: 768px) { .mf-tagline { padding: 2rem 1.2rem; } }
    .mf-intro__actions { display: flex; flex-wrap: wrap; gap: 0.9rem; margin-top: 1.8rem; }
    .mf-intro__btn { display: inline-flex; align-items: center; gap: 0.45rem; font-weight: 700; font-size: 0.88rem; padding: 0.7rem 1.6rem; border-radius: 999px; text-decoration: none; transition: transform 0.3s, box-shadow 0.3s; }
    .mf-intro__btn--primary { background: var(--orange); color: #fff; }
    .mf-intro__btn--primary:hover { background: #c96418; transform: translateY(-2px); box-shadow: 0 10px 28px rgba(232,119,34,0.35); color: #fff; }
    .mf-intro__btn--outline { background: transparent; color: var(--blue); border: 2px solid var(--blue); }
    .mf-intro__btn--outline:hover { background: var(--blue); color: #fff; transform: translateY(-2px); box-shadow: 0 10px 28px rgba(27,58,143,0.2); }
    @media (max-width: 991px) { .mf-intro { padding: 4rem 1.5rem; } .mf-intro__grid { grid-template-columns: 1fr; gap: 2.5rem; } .mf-intro__float-card { right: 10px; bottom: -20px; } }

    /* â”€â”€â”€ WHAT WE DELIVER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .mf-deliver { padding: 6rem 3rem; background: linear-gradient(180deg, rgba(27,58,143,0.04) 0%, var(--bg) 100%); position: relative; overflow: hidden; }
    .mf-deliver__ring { position: absolute; top: 100px; left: -120px; width: 350px; height: 350px; border: 1.5px solid rgba(27,58,143,0.06); border-radius: 50%; pointer-events: none; animation: spinSlow 40s linear infinite; }
    .mf-deliver__blob { position: absolute; bottom: 50px; right: -80px; width: 200px; height: 200px; background: rgba(232,119,34,0.04); border-radius: 50%; filter: blur(60px); animation: drift 15s ease-in-out infinite; pointer-events: none; }
    .mf-deliver__inner { max-width: 1200px; margin: 0 auto; }
    .mf-deliver__header { text-align: center; margin-bottom: 4rem; }
    .mf-deliver__grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; counter-reset: cap-counter; }
    .mf-cap-card { background: var(--card-bg); border-radius: 20px; padding: 2rem 1.8rem; border: 1px solid rgba(27,58,143,0.06); position: relative; overflow: hidden; transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s, border-color 0.3s; display: flex; flex-direction: column; gap: 0.8rem; box-shadow: 0 4px 20px rgba(27,58,143,0.06); counter-increment: cap-counter; }
    .mf-cap-card::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 3px; background: linear-gradient(90deg, var(--blue), var(--orange)); opacity: 0.5; transition: opacity 0.4s, height 0.4s; }
    .mf-cap-card:hover::before { opacity: 1; height: 4px; }
    .mf-cap-card::after { content: "0" counter(cap-counter); position: absolute; bottom: 12px; right: 16px; font-family: "DM Serif Display", serif; font-size: 2.5rem; font-weight: 400; color: rgba(27,58,143,0.04); line-height: 1; pointer-events: none; transition: color 0.4s; }
    .mf-cap-card:hover::after { color: rgba(27,58,143,0.08); }
    .mf-cap-card:hover { transform: translateY(-8px); box-shadow: 0 20px 50px rgba(27,58,143,0.12); border-color: rgba(27,58,143,0.15); }
    .mf-cap-card__icon { width: 50px; height: 50px; background: linear-gradient(135deg, rgba(27,58,143,0.08), rgba(232,119,34,0.06)); border-radius: 14px; display: flex; align-items: center; justify-content: center; transition: background 0.3s, transform 0.3s; box-shadow: 0 2px 8px rgba(27,58,143,0.08); }
    .mf-cap-card:hover .mf-cap-card__icon { background: linear-gradient(135deg, var(--teal), var(--teal-dark)); transform: scale(1.1) rotate(-3deg); }
    .mf-cap-card__icon i.ph { font-size: 1.4rem; color: var(--teal); transition: color 0.3s; line-height: 1; }
    .mf-cap-card:hover .mf-cap-card__icon i.ph { color: #fff; }
    .mf-cap-card h3 { font-size: 1rem; font-weight: 700; color: var(--dark); margin: 0; }
    .mf-cap-card p { font-size: 0.88rem; color: var(--mid); line-height: 1.6; margin: 0; }
    @media (max-width: 768px) { .mf-deliver { padding: 3.5rem 1.2rem; } .mf-deliver__grid { grid-template-columns: 1fr; } }

    /* â”€â”€â”€ WHY IT MATTERS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .mf-why { padding: 5rem 3rem; background: linear-gradient(135deg, #060d1f 0%, #0a1635 40%, #0f1f4a 100%); position: relative; overflow: hidden; }
    .mf-why__bg-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 60px 60px; pointer-events: none; }
    .mf-why__glow-1 { position: absolute; width: 400px; height: 400px; border-radius: 50%; background: radial-gradient(circle, rgba(232,119,34,0.15) 0%, transparent 70%); top: -100px; right: -100px; pointer-events: none; animation: drift 18s ease-in-out infinite; }
    .mf-why__glow-2 { position: absolute; width: 350px; height: 350px; border-radius: 50%; background: radial-gradient(circle, rgba(123,163,255,0.1) 0%, transparent 70%); bottom: -120px; left: -80px; pointer-events: none; animation: drift 14s ease-in-out infinite reverse; }
    .mf-why__inner { max-width: 900px; margin: 0 auto; position: relative; z-index: 2; text-align: center; }
    .mf-why__text { font-size: 1rem; color: rgba(255,255,255,0.7); line-height: 1.85; max-width: 850px; margin: 0 auto; }
    @media (max-width: 768px) { .mf-why { padding: 3.5rem 1.2rem; } }

    /* â”€â”€â”€ BUSINESS VALUE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .mf-value { padding: 6rem 3rem; background: linear-gradient(180deg, var(--bg) 0%, rgba(232,119,34,0.04) 100%); position: relative; overflow: hidden; }
    .mf-value__ring { position: absolute; top: 60px; right: -60px; width: 180px; height: 180px; border: 1.5px dashed rgba(232,119,34,0.12); border-radius: 50%; animation: spinSlow 35s linear infinite reverse; pointer-events: none; }
    .mf-value__inner { max-width: 1100px; margin: 0 auto; text-align: center; position: relative; z-index: 1; }
    .mf-value__grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 3rem; text-align: left; }
    .mf-value-card { background: #fff; border-radius: 16px; padding: 1.8rem 1.5rem; display: flex; align-items: flex-start; gap: 1rem; border: 1px solid rgba(232,119,34,0.1); transition: transform 0.3s, box-shadow 0.3s; }
    .mf-value-card:hover { transform: translateY(-6px); box-shadow: 0 14px 40px rgba(27,58,143,0.1); }
    .mf-value-card__icon { width: 46px; height: 46px; flex-shrink: 0; background: linear-gradient(135deg, rgba(232,119,34,0.1), rgba(232,119,34,0.04)); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; color: var(--orange); transition: background 0.3s, transform 0.3s; }
    .mf-value-card__icon i.ph { font-size: 1.4rem; line-height: 1; }
    .mf-value-card:hover .mf-value-card__icon { background: linear-gradient(135deg, var(--orange), #c96418); color: #fff; transform: scale(1.08) rotate(-3deg); }
    .mf-value-card span { font-size: 0.9rem; font-weight: 500; color: var(--dark); line-height: 1.6; }
    @media (max-width: 768px) { .mf-value { padding: 3.5rem 1.2rem; } .mf-value__grid { grid-template-columns: 1fr; } }

    /* â”€â”€â”€ GOVERNANCE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .mf-governance { padding: 5rem 3rem; background: var(--bg); }
    .mf-governance__inner { max-width: 900px; margin: 0 auto; background: #fff; border-radius: 24px; padding: 3rem 3.5rem; box-shadow: 0 10px 40px rgba(27,58,143,0.08); border: 1px solid rgba(27,58,143,0.06); position: relative; overflow: hidden; text-align: center; }
    .mf-governance__inner::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, var(--blue), var(--orange)); }
    .mf-governance__icon-wrap { width: 60px; height: 60px; margin: 0 auto 1.5rem; background: linear-gradient(135deg, rgba(27,58,143,0.08), rgba(232,119,34,0.06)); border-radius: 16px; display: flex; align-items: center; justify-content: center; }
    .mf-governance__icon-wrap i.ph { font-size: 1.6rem; color: var(--teal); line-height: 1; }
    .mf-governance p { font-size: 1rem; color: #444; line-height: 1.85; margin-bottom: 1.2rem; text-align: left; }
    .mf-governance p:last-child { margin-bottom: 0; }
    @media (max-width: 768px) { .mf-governance { padding: 3rem 1.2rem; } .mf-governance__inner { padding: 2rem 1.5rem; } }

    /* â”€â”€â”€ CASE STUDIES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .mf-case { padding: 6rem 3rem; background: linear-gradient(180deg, rgba(27,58,143,0.03) 0%, #fff 100%); }
    .mf-case__inner { max-width: 1200px; margin: 0 auto; }
    .mf-case__header { margin-bottom: 3.5rem; }
    /* â”€â”€ panel â”€â”€ */
    .mf-cs-panel { position: relative; background: #fff; border-radius: 24px; padding: 3rem 3rem 3rem 3.5rem; display: grid; grid-template-columns: 160px 1fr; gap: 2.5rem; align-items: start; overflow: hidden; box-shadow: 0 8px 40px rgba(27,58,143,0.08); border: 1px solid rgba(27,58,143,0.06); margin-bottom: 2.5rem; }
    .mf-cs-panel:last-child { margin-bottom: 0; }
    .mf-cs-panel::before { content: ""; position: absolute; top: 0; left: 0; width: 6px; height: 100%; background: linear-gradient(180deg, var(--blue), var(--orange)); border-radius: 24px 0 0 24px; }
    .mf-cs-panel--alt::before { background: linear-gradient(180deg, var(--orange), var(--blue)); }
    .mf-cs-panel__num { position: absolute; top: 1.5rem; right: 2.5rem; font-family: "DM Serif Display", serif; font-size: 5rem; font-weight: 400; color: rgba(27,58,143,0.05); line-height: 1; pointer-events: none; user-select: none; }
    .mf-cs-panel__side { display: flex; flex-direction: column; align-items: center; gap: 1.2rem; padding-top: 0.5rem; }
    .mf-cs-panel__icon { width: 72px; height: 72px; background: linear-gradient(135deg, rgba(27,58,143,0.1), rgba(232,119,34,0.08)); border-radius: 20px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 16px rgba(27,58,143,0.12); }
    .mf-cs-panel__icon i.ph { font-size: 1.6rem; color: var(--teal); line-height: 1; }
    .mf-cs-panel__badge { background: linear-gradient(135deg, var(--blue), var(--teal-dark)); color: #fff; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 0.35rem 0.9rem; border-radius: 999px; text-align: center; }
    .mf-cs-panel--alt .mf-cs-panel__badge { background: linear-gradient(135deg, var(--orange), #c96418); }
    /* â”€â”€ content â”€â”€ */
    .mf-cs-panel__content h3 { font-family: "DM Serif Display", serif; font-size: 1.35rem; font-weight: 400; color: var(--dark); line-height: 1.3; margin: 0 0 1.8rem; padding-right: 4rem; }
    .mf-cs-section { margin-bottom: 1.6rem; padding-bottom: 1.6rem; border-bottom: 1px solid rgba(27,58,143,0.06); }
    .mf-cs-section:last-child { margin-bottom: 0; padding-bottom: 0; border-bottom: none; }
    .mf-cs-section__label { display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 0.28rem 0.85rem; border-radius: 999px; margin-bottom: 0.9rem; }
    .mf-cs-section__label--blue { background: rgba(27,58,143,0.08); color: var(--blue); }
    .mf-cs-section__label--orange { background: rgba(232,119,34,0.1); color: var(--orange); }
    .mf-cs-section__label--teal { background: rgba(27,58,143,0.06); color: #1B3A8F; }
    .mf-cs-section__label--green { background: rgba(22,163,74,0.08); color: #16a34a; }
    .mf-cs-section p { font-size: 0.9rem; color: #444; line-height: 1.8; margin-bottom: 0.8rem; }
    .mf-cs-section p:last-child { margin-bottom: 0; }
    .mf-cs-caps { margin: 0; padding: 0; list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 0.55rem; }
    .mf-cs-caps li { font-size: 0.87rem; color: #444; line-height: 1.6; padding-left: 1.2rem; position: relative; }
    .mf-cs-caps li::before { content: ""; position: absolute; left: 0; top: 0.6em; width: 6px; height: 6px; background: var(--orange); border-radius: 50%; }
    @media (max-width: 991px) { .mf-case { padding: 3.5rem 1.2rem; } .mf-cs-panel { grid-template-columns: 1fr; padding: 2.5rem 1.8rem; } .mf-cs-panel__side { flex-direction: row; } .mf-cs-panel__num { font-size: 3.5rem; top: 1rem; right: 1.2rem; } .mf-cs-caps { grid-template-columns: 1fr; } .mf-cs-panel__content h3 { padding-right: 0; } }

    /* â”€â”€â”€ CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .mf-cta { background: linear-gradient(135deg, #142d6b 0%, #1B3A8F 100%); padding: 4rem 3rem; text-align: center; position: relative; overflow: hidden; }
    .mf-cta::before { content: ""; position: absolute; width: 400px; height: 400px; border-radius: 50%; background: rgba(232,119,34,0.08); top: -150px; right: -100px; pointer-events: none; }
    .mf-cta__ring { position: absolute; bottom: -80px; left: 10%; width: 250px; height: 250px; border: 2px solid rgba(255,255,255,0.08); border-radius: 50%; animation: spinSlow 20s linear infinite; }
    .mf-cta__dots { position: absolute; top: 20px; left: 50%; width: 100px; height: 100px; background-image: radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px); background-size: 12px 12px; pointer-events: none; animation: drift 12s ease-in-out infinite; }
    .mf-cta__tagline { font-style: italic; color: rgba(255,255,255,0.55); font-size: 0.9rem; max-width: 700px; margin: 0 auto 1.5rem; position: relative; line-height: 1.7; }
    .mf-cta__heading { font-family: "DM Serif Display", serif; font-size: clamp(1.5rem, 3vw, 2.2rem); color: #fff; font-weight: 400; margin-bottom: 1rem; position: relative; }
    .mf-cta__sub { color: rgba(255,255,255,0.7); font-size: 1rem; margin-bottom: 2rem; position: relative; }
    .mf-cta__btn { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--orange); color: #fff; font-weight: 700; font-size: 0.92rem; padding: 0.8rem 2rem; border-radius: 999px; text-decoration: none; transition: transform 0.3s, box-shadow 0.3s; position: relative; }
    .mf-cta__btn:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(232,119,34,0.4); color: #fff; }
    @media (max-width: 768px) { .mf-cta { padding: 3rem 1.2rem; } }

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
export class Manufacturing implements AfterViewInit, OnDestroy {
  private revealObserver: IntersectionObserver | null = null;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const host = this.el.nativeElement as HTMLElement;

    // Particles
    const container = host.querySelector('#mf-particles');
    if (container) {
      for (let i = 0; i < 18; i++) {
        const p = document.createElement('span');
        p.className = 'mf-hero__particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (6 + Math.random() * 8) + 's';
        p.style.animationDelay = (Math.random() * 6) + 's';
        p.style.width = p.style.height = (2 + Math.random() * 4) + 'px';
        container.appendChild(p);
      }
    }

    // Scroll Reveal
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
    const cards = host.querySelectorAll<HTMLElement>('.mf-cap-card');
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



