import { Component, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-security-compliance',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- ─── BREADCRUMB ─────────────────────────────────────── -->
    <div class="breadcrumb-bar">
      <a routerLink="/">Home</a>
      <span class="sep">></span>
      <a routerLink="/who-we-serve/healthcare">Healthcare</a>
      <span class="sep">></span>
      <span class="current">Security &amp; Compliance</span>
    </div>

    <!-- ─── HERO ───────────────────────────────────────────── -->
    <section class="sc-hero">
      <div class="sc-hero__bg">
        <img src="Images/image_015.jpg" alt="Security and Compliance" />
        <div class="sc-hero__overlay"></div>
      </div>
      <div class="sc-hero__abstract-ring"></div>
      <div class="sc-hero__abstract-blob"></div>
      <div class="sc-hero__particles" id="sc-particles"></div>
      <div class="sc-hero__content" data-reveal>
        <div class="sc-hero__badge">
          <span class="sc-hero__badge-dot"></span>
          <span>Enterprise Security</span>
        </div>
        <h1 class="sc-hero__heading">Security &amp;<br/><em>Compliance</em></h1>
        <p class="sc-hero__sub">Enterprise security architecture supporting HIPAA, SOC 2 and HITRUST compliance for healthcare organisations and regulated industries.</p>
      </div>
    </section>

    <!-- ─── INTRO ──────────────────────────────────────────── -->
    <section class="sc-intro">
      <div class="sc-intro__blob"></div>
      <div class="sc-intro__dots"></div>
      <div class="sc-intro__grid">
        <div class="sc-intro__text" data-reveal-left>
          <span class="sc-eyebrow">Overview</span>
          <h2 class="sc-section-heading">Enterprise security architecture supporting <em>HIPAA, SOC 2 and HITRUST</em></h2>
          <p>Our enterprise security programme is built upon a comprehensive defence-in-depth strategy that combines network security, endpoint protection, identity-driven access controls, continuous monitoring, threat intelligence, and automated incident response. This integrated security architecture is designed to safeguard sensitive information throughout its lifecycle while supporting the stringent security, privacy, and operational requirements expected by healthcare organisations and other regulated industries.</p>
          <p>By combining Cisco Layer 3 Switching, Cisco Firepower Next Generation Firewalls, Microsoft Defender for Endpoint, and centralised security monitoring, the organisation delivers multiple layers of protection that work together to prevent, detect, contain, and respond to cyber threats. This layered approach supports the protection of electronic Protected Health Information (ePHI), confidential business information, and critical systems, while providing the governance, auditability, and resilience necessary to meet recognised security and compliance frameworks including HIPAA, SOC 2 and HITRUST.</p>
        </div>
        <div class="sc-intro__visual" data-reveal-right>
          <div class="sc-intro__dot-grid"></div>
          <div class="sc-intro__ring"></div>
          <div class="sc-intro__img">
            <img src="Images/image_041.jpg" alt="Security Architecture" loading="lazy" />
          </div>
          <div class="sc-intro__float-card">
            <div class="sc-intro__float-icon">🔐</div>
            <div class="sc-intro__float-text">
              <strong>HIPAA · SOC 2 · HITRUST</strong>
              <span>Compliance-ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── ARCHITECTURE DETAIL ────────────────────────────── -->
    <section class="sc-detail">
      <div class="sc-detail__inner">

        <div class="sc-detail__panel sc-detail__panel--left" data-reveal-left>
          <div class="sc-detail__panel-num">01</div>
          <div class="sc-detail__panel-side">
            <div class="sc-detail__panel-icon"><i class="ph ph-shield"></i></div>
            <div class="sc-detail__panel-badge">Architecture</div>
          </div>
          <div class="sc-detail__panel-content">
            <h3>Defence-in-Depth Security Architecture</h3>
            <p>The organisation has implemented a multi-layered security model in which each technology complements the others, creating overlapping security controls that minimise single points of failure. Network infrastructure, perimeter security, endpoint protection, identity management, monitoring, and operational processes work together to reduce organisational risk while ensuring business continuity.</p>
            <p>Rather than relying on any single security product, the architecture incorporates preventive, detective, and responsive controls across the enterprise to protect systems from both external and internal threats.</p>
            <div class="sc-detail__tags">
              <span>Network Security</span>
              <span>Endpoint Protection</span>
              <span>Identity Management</span>
              <span>Monitoring</span>
            </div>
          </div>
        </div>

        <div class="sc-detail__panel sc-detail__panel--right" data-reveal-right>
          <div class="sc-detail__panel-num">02</div>
          <div class="sc-detail__panel-side">
            <div class="sc-detail__panel-icon"><i class="ph ph-lock-simple"></i></div>
            <div class="sc-detail__panel-badge">Compliance</div>
          </div>
          <div class="sc-detail__panel-content">
            <h3>Supporting Regulatory and Industry Compliance</h3>
            <p>The organisation's integrated security architecture provides comprehensive administrative, technical, and operational safeguards that align with the security expectations of HIPAA, SOC 2, and the HITRUST Common Security Framework.</p>
            <p>Strong identity management, network segmentation, advanced threat prevention, endpoint protection, continuous monitoring, audit logging, incident response, vulnerability management, and security governance collectively support the protection of sensitive healthcare information and confidential business data. The layered security model helps ensure that information remains protected against unauthorised access, alteration, disclosure, and loss while maintaining the resilience, availability, and accountability expected by customers, regulators, and independent assessors.</p>
            <p>By combining modern security technologies with mature operational processes, continuous monitoring, and proactive risk management, the organisation demonstrates a robust security posture capable of supporting highly regulated healthcare environments and enterprise customers with demanding security and compliance requirements.</p>
            <div class="sc-detail__tags">
              <span>HIPAA</span>
              <span>SOC 2</span>
              <span>HITRUST</span>
              <span>ePHI Protection</span>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ─── SECURITY DOMAINS ───────────────────────────────── -->
    <section class="sc-domains" id="sc-domains">
      <div class="sc-domains__ring"></div>
      <div class="sc-domains__blob"></div>
      <div class="sc-domains__inner">
        <div class="sc-domains__header" data-reveal>
          <span class="sc-eyebrow">Security Architecture</span>
          <h2 class="sc-section-heading">Eight pillars of <em>enterprise security</em></h2>
        </div>
        <div class="sc-domains__grid">

          <a routerLink="/who-we-serve/healthcare/security-compliance/integrated-security-operations" class="sc-domain-card" data-reveal>
            <div class="sc-domain-card__icon"><i class="ph ph-monitor"></i></div>
            <div class="sc-domain-card__body">
              <h3>Integrated Security Operations</h3>
            </div>
            <div class="sc-domain-card__arrow"><i class="ph ph-arrow-right"></i></div>
          </a>

          <a routerLink="/who-we-serve/healthcare/security-compliance/zero-trust-security" class="sc-domain-card" data-reveal>
            <div class="sc-domain-card__icon"><i class="ph ph-shield"></i></div>
            <div class="sc-domain-card__body">
              <h3>Zero Trust Security</h3>
            </div>
            <div class="sc-domain-card__arrow"><i class="ph ph-arrow-right"></i></div>
          </a>

          <a routerLink="/who-we-serve/healthcare/security-compliance/network-security-segmentation" class="sc-domain-card" data-reveal>
            <div class="sc-domain-card__icon"><i class="ph ph-link"></i></div>
            <div class="sc-domain-card__body">
              <h3>Network Security and Segmentation</h3>
            </div>
            <div class="sc-domain-card__arrow"><i class="ph ph-arrow-right"></i></div>
          </a>

          <a routerLink="/who-we-serve/healthcare/security-compliance/incident-detection-response" class="sc-domain-card" data-reveal>
            <div class="sc-domain-card__icon"><i class="ph ph-warning-circle"></i></div>
            <div class="sc-domain-card__body">
              <h3>Incident Detection and Response</h3>
            </div>
            <div class="sc-domain-card__arrow"><i class="ph ph-arrow-right"></i></div>
          </a>

          <a routerLink="/who-we-serve/healthcare/security-compliance/advanced-perimeter-protection" class="sc-domain-card" data-reveal>
            <div class="sc-domain-card__icon"><i class="ph ph-arrows-left-right"></i></div>
            <div class="sc-domain-card__body">
              <h3>Advanced Perimeter Protection</h3>
            </div>
            <div class="sc-domain-card__arrow"><i class="ph ph-arrow-right"></i></div>
          </a>

          <a routerLink="/who-we-serve/healthcare/security-compliance/continuous-monitoring-audit-readiness" class="sc-domain-card" data-reveal>
            <div class="sc-domain-card__icon"><i class="ph ph-pulse"></i></div>
            <div class="sc-domain-card__body">
              <h3>Continuous Monitoring and Audit Readiness</h3>
            </div>
            <div class="sc-domain-card__arrow"><i class="ph ph-arrow-right"></i></div>
          </a>

          <a routerLink="/who-we-serve/healthcare/security-compliance/endpoint-protection-threat-detection" class="sc-domain-card" data-reveal>
            <div class="sc-domain-card__icon"><i class="ph ph-eye"></i></div>
            <div class="sc-domain-card__body">
              <h3>Endpoint Protection and Threat Detection</h3>
            </div>
            <div class="sc-domain-card__arrow"><i class="ph ph-arrow-right"></i></div>
          </a>

          <a routerLink="/who-we-serve/healthcare/security-compliance/operational-security-practices" class="sc-domain-card" data-reveal>
            <div class="sc-domain-card__icon"><i class="ph ph-users-three"></i></div>
            <div class="sc-domain-card__body">
              <h3>Operational Security Practices</h3>
            </div>
            <div class="sc-domain-card__arrow"><i class="ph ph-arrow-right"></i></div>
          </a>

        </div>
      </div>
    </section>

    <!-- ─── CTA BAND ──────────────────────────────────────── -->
    <section class="sc-cta">
      <div class="sc-cta__ring"></div>
      <div class="sc-cta__dots"></div>
      <h2 class="sc-cta__heading">Ready to strengthen your security posture?</h2>
      <p class="sc-cta__sub">Let's discuss how our enterprise security architecture can support your compliance and security requirements.</p>
      <a routerLink="/contact-us" class="sc-cta__btn">
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

    /* ─── BREADCRUMB ─────────────────────────────────────── */
    .breadcrumb-bar { background: var(--teal-dark); padding: 0.55rem 3rem; }
    .breadcrumb-bar a, .breadcrumb-bar span { color: rgba(255,255,255,0.65); font-size: 0.8rem; font-weight: 500; text-decoration: none; }
    .breadcrumb-bar a:hover { color: #fff; }
    .breadcrumb-bar .sep { margin: 0 0.45rem; color: rgba(255,255,255,0.3); }
    .breadcrumb-bar .current { color: var(--teal-light); font-weight: 600; }
    @media (max-width: 768px) { .breadcrumb-bar { padding: 0.55rem 1rem; margin-top: 58px; } }

    /* ─── SHARED ─────────────────────────────────────────── */
    .sc-eyebrow { display: inline-block; color: var(--teal); font-size: 0.78rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 1rem; }
    .sc-eyebrow--light { color: var(--orange); }
    .sc-section-heading { font-family: "DM Serif Display", serif; font-size: clamp(1.8rem, 3vw, 2.5rem); color: var(--dark); font-weight: 400; line-height: 1.2; margin-bottom: 1.2rem; }
    .sc-section-heading em { color: var(--orange); font-style: italic; }
    .sc-section-heading--light { color: #fff; }

    /* ─── HERO ───────────────────────────────────────────── */
    .sc-hero { position: relative; height: 55vh; m6in-height: 360px; max-height: 480px; overflow: hidden; }
    .sc-hero__bg { position: absolute; inset: 0; }
    .sc-hero__bg img { width: 100%; height: 100%; object-fit: cover; transform: scale(1.05); animation: heroZoom 12s ease-out forwards; }
    @keyframes heroZoom { to { transform: scale(1); } }
    .sc-hero__overlay { position: absolute; inset: 0; background: radial-gradient(ellipse at 20% 30%, rgba(232, 119, 34, 0.28), transparent 55%), radial-gradient(ellipse at 80% 70%, rgba(27, 58, 143, 0.45), transparent 55%), linear-gradient(180deg, rgba(16, 21, 42, 0.35), rgba(16, 21, 42, 0.85)); }
    .sc-hero__abstract-ring { position: absolute; top: 8%; left: 4%; width: 220px; height: 220px; border: 1.5px solid rgba(255,255,255,0.1); border-radius: 50%; z-index: 1; animation: spinSlow 28s linear infinite; }
    .sc-hero__abstract-blob { position: absolute; bottom: 12%; right: 6%; width: 140px; height: 140px; background: rgba(232,119,34,0.15); border-radius: 50%; z-index: 1; filter: blur(40px); animation: drift 14s ease-in-out infinite; }
    .sc-hero__particles { position: absolute; inset: 0; z-index: 1; overflow: hidden; pointer-events: none; }
    .sc-hero__particle { position: absolute; width: 4px; height: 4px; background: rgba(255,255,255,0.4); border-radius: 50%; animation: particleRise linear infinite; }
    @keyframes particleRise { 0% { transform: translateY(100vh) scale(0); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(-20px) scale(1); opacity: 0; } }
    .sc-hero__content { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 2rem; z-index: 2; }
    .sc-hero__badge { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.1); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.2); border-radius: 999px; padding: 0.35rem 1.1rem; margin-bottom: 1.5rem; opacity: 0; transform: translateY(12px); animation: fadeUp 0.8s 0.3s forwards; }
    .sc-hero__badge-dot { width: 7px; height: 7px; background: var(--teal-light); border-radius: 50%; animation: pulse 2s infinite; }
    @keyframes pulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.5; transform:scale(0.7); } }
    .sc-hero__badge span:last-child { color: #fff; font-size: 0.78rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; }
    .sc-hero__heading { font-family: "DM Serif Display", serif; font-size: clamp(1.8rem, 4vw, 3rem); color: #fff; font-weight: 400; line-height: 1.1; margin-bottom: 1.2rem; opacity: 0; transform: translateY(20px); animation: fadeUp 1s 0.5s forwards; }
    .sc-hero__heading em { font-style: italic; color: var(--orange); }
    .sc-hero__sub { font-size: 0.95rem; color: rgba(255,255,255,0.75); max-width: 580px; line-height: 1.6; margin-bottom: 1.5rem; opacity: 0; transform: translateY(20px); animation: fadeUp 1s 0.7s forwards; }
    .sc-hero__cta { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--orange); color: #fff; font-weight: 600; font-size: 0.9rem; padding: 0.75rem 1.8rem; border-radius: 999px; text-decoration: none; transition: background 0.3s, transform 0.3s, box-shadow 0.3s; opacity: 0; transform: translateY(20px); animation: fadeUp 1s 0.9s forwards; }
    .sc-hero__cta:hover { background: #c96418; color: #fff; transform: translateY(-3px); box-shadow: 0 12px 32px rgba(232,119,34,0.4); }
    @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
    @media (max-width: 768px) { .sc-hero { height: 50vh; min-height: 320px; } .sc-hero__sub { font-size: 0.88rem; } }

    /* ─── INTRO ──────────────────────────────────────────── */
    .sc-intro { padding: 6rem 3rem; max-width: 1200px; margin: 0 auto; position: relative; overflow: hidden; }
    .sc-intro__blob { position: absolute; top: -60px; right: -80px; width: 300px; height: 300px; background: radial-gradient(circle, rgba(27,58,143,0.06) 0%, transparent 70%); border-radius: 50%; animation: drift 15s ease-in-out infinite; pointer-events: none; }
    .sc-intro__dots { position: absolute; bottom: -40px; left: -40px; width: 150px; height: 150px; background-image: radial-gradient(circle, rgba(232,119,34,0.2) 1.5px, transparent 1.5px); background-size: 16px 16px; opacity: 0.6; pointer-events: none; animation: float 10s ease-in-out infinite; }
    .sc-intro__grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 5rem; align-items: center; }
    .sc-intro__text p { font-size: 1rem; color: #444; line-height: 1.85; margin-bottom: 1.2rem; }
    .sc-intro__visual { position: relative; padding: 2rem; }
    .sc-intro__ring { position: absolute; top: -10px; right: -10px; width: 280px; height: 280px; border: 2px dashed rgba(27,58,143,0.1); border-radius: 50%; animation: spinSlow 35s linear infinite; pointer-events: none; }
    .sc-intro__ring::after { content: ""; position: absolute; top: -5px; left: 50%; width: 10px; height: 10px; background: var(--orange); border-radius: 50%; box-shadow: 0 0 16px rgba(232,119,34,0.5); }
    .sc-intro__dot-grid { position: absolute; top: -15px; left: -15px; width: 120px; height: 120px; background-image: radial-gradient(circle, rgba(27,58,143,0.15) 1.5px, transparent 1.5px); background-size: 14px 14px; pointer-events: none; z-index: 0; }
    .sc-intro__img { width: 100%; border-radius: 24px; box-shadow: 0 20px 60px rgba(27,58,143,0.15); overflow: hidden; position: relative; z-index: 1; }
    .sc-intro__img img { width: 100%; height: auto; display: block; }
    .sc-intro__float-card { position: absolute; bottom: -30px; right: -20px; background: #fff; border-radius: 16px; padding: 1.1rem 1.4rem; box-shadow: 0 10px 40px rgba(0,0,0,0.1); display: flex; align-items: center; gap: 0.8rem; z-index: 2; animation: floatCard 4s ease-in-out infinite; }
    @keyframes floatCard { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
    .sc-intro__float-icon { width: 44px; height: 44px; background: linear-gradient(135deg, var(--orange), #c96418); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; }
    .sc-intro__float-text strong { display: block; font-size: 0.85rem; color: var(--dark); }
    .sc-intro__float-text span { font-size: 0.75rem; color: var(--mid); }
    @media (max-width: 991px) { .sc-intro { padding: 4rem 1.5rem; } .sc-intro__grid { grid-template-columns: 1fr; gap: 2.5rem; } .sc-intro__float-card { right: 10px; bottom: -20px; } }

    /* ─── ARCHITECTURE DETAIL ────────────────────────────── */
    .sc-detail { padding: 0 3rem 5rem; background: var(--bg); }
    .sc-detail__inner { max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; gap: 2rem; }
    .sc-detail__panel { position: relative; background: #fff; border-radius: 24px; padding: 3rem 3rem 3rem 3.5rem; display: grid; grid-template-columns: 160px 1fr; gap: 2.5rem; align-items: start; overflow: hidden; box-shadow: 0 8px 40px rgba(27,58,143,0.08); border: 1px solid rgba(27,58,143,0.06); }
    .sc-detail__panel::before { content: ""; position: absolute; top: 0; left: 0; width: 6px; height: 100%; background: linear-gradient(180deg, var(--blue), var(--orange)); border-radius: 24px 0 0 24px; }
    .sc-detail__panel--right::before { background: linear-gradient(180deg, var(--orange), var(--blue)); }
    .sc-detail__panel-num { position: absolute; top: 1.5rem; right: 2.5rem; font-family: "DM Serif Display", serif; font-size: 5rem; font-weight: 400; color: rgba(27,58,143,0.05); line-height: 1; pointer-events: none; user-select: none; }
    .sc-detail__panel-side { display: flex; flex-direction: column; align-items: center; gap: 1.2rem; padding-top: 0.5rem; }
    .sc-detail__panel-icon { width: 72px; height: 72px; background: linear-gradient(135deg, rgba(27,58,143,0.1), rgba(232,119,34,0.08)); border-radius: 20px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 16px rgba(27,58,143,0.12); }
    .sc-detail__panel-icon i.ph { font-size: 1.6rem; color: var(--teal); line-height: 1; }
    .sc-detail__panel-badge { background: linear-gradient(135deg, var(--blue), var(--teal-dark)); color: #fff; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 0.35rem 0.9rem; border-radius: 999px; text-align: center; }
    .sc-detail__panel-content h3 { font-family: "DM Serif Display", serif; font-size: 1.4rem; font-weight: 400; color: var(--dark); line-height: 1.3; margin: 0 0 1.2rem; }
    .sc-detail__panel-content p { font-size: 0.93rem; color: #444; line-height: 1.85; margin-bottom: 1rem; }
    .sc-detail__panel-content p:last-of-type { margin-bottom: 1.2rem; }
    .sc-detail__tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }
    .sc-detail__tags span { background: rgba(27,58,143,0.06); color: var(--teal); font-size: 0.75rem; font-weight: 600; padding: 0.3rem 0.85rem; border-radius: 999px; border: 1px solid rgba(27,58,143,0.1); }
    @media (max-width: 768px) { .sc-detail { padding: 0 1.2rem 3.5rem; } .sc-detail__panel { grid-template-columns: 1fr; padding: 2.5rem 1.8rem; } .sc-detail__panel-side { flex-direction: row; align-items: center; } .sc-detail__panel-num { font-size: 3.5rem; top: 1rem; right: 1.2rem; } }

    /* ─── SECURITY DOMAINS ───────────────────────────────── */
    .sc-domains { padding: 6rem 3rem; background: linear-gradient(180deg, rgba(27,58,143,0.04) 0%, var(--bg) 100%); position: relative; overflow: hidden; }
    .sc-domains__ring { position: absolute; top: 100px; left: -120px; width: 350px; height: 350px; border: 1.5px solid rgba(27,58,143,0.06); border-radius: 50%; pointer-events: none; animation: spinSlow 40s linear infinite; }
    .sc-domains__blob { position: absolute; bottom: 50px; right: -80px; width: 200px; height: 200px; background: rgba(232,119,34,0.04); border-radius: 50%; filter: blur(60px); animation: drift 15s ease-in-out infinite; pointer-events: none; }
    .sc-domains__inner { max-width: 1200px; margin: 0 auto; }
    .sc-domains__header { text-align: center; margin-bottom: 4rem; }
    .sc-domains__grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; }

    /* ─── DOMAIN CARD ────────────────────────────────────── */
    .sc-domain-card { background: var(--card-bg); border-radius: 20px; padding: 2rem 1.8rem; border: 1px solid rgba(27,58,143,0.06); position: relative; overflow: hidden; display: flex; flex-direction: column; gap: 0.8rem; box-shadow: 0 4px 20px rgba(27,58,143,0.06); text-decoration: none; transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s, border-color 0.3s; }
    .sc-domain-card::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 3px; background: linear-gradient(90deg, var(--blue), var(--orange)); opacity: 0.5; transition: opacity 0.4s, height 0.4s; }
    .sc-domain-card:hover::before { opacity: 1; height: 4px; }
    .sc-domain-card:hover { transform: translateY(-8px); box-shadow: 0 20px 50px rgba(27,58,143,0.12); border-color: rgba(27,58,143,0.15); }
    .sc-domain-card__icon { width: 50px; height: 50px; background: linear-gradient(135deg, rgba(27,58,143,0.08), rgba(232,119,34,0.06)); border-radius: 14px; display: flex; align-items: center; justify-content: center; transition: background 0.3s, transform 0.3s; box-shadow: 0 2px 8px rgba(27,58,143,0.08); flex-shrink: 0; }
    .sc-domain-card:hover .sc-domain-card__icon { background: linear-gradient(135deg, var(--teal), var(--teal-dark)); transform: scale(1.1) rotate(-3deg); }
    .sc-domain-card__icon i.ph { font-size: 1.4rem; color: var(--teal); transition: color 0.3s; line-height: 1; }
    .sc-domain-card:hover .sc-domain-card__icon i.ph { color: #fff; }
    .sc-domain-card__body { flex: 1; }
    .sc-domain-card__body h3 { font-size: 1rem; font-weight: 700; color: var(--dark); margin: 0 0 0.5rem; }
    .sc-domain-card__body p { font-size: 0.88rem; color: var(--mid); line-height: 1.6; margin: 0; }
    .sc-domain-card__arrow { width: 32px; height: 32px; border-radius: 50%; background: rgba(27,58,143,0.06); display: flex; align-items: center; justify-content: center; align-self: flex-end; transition: background 0.3s, transform 0.3s; }
    .sc-domain-card:hover .sc-domain-card__arrow { background: var(--orange); transform: translateX(4px); }
    .sc-domain-card__arrow i.ph { font-size: 1rem; color: var(--teal); transition: color 0.3s; line-height: 1; }
    .sc-domain-card:hover .sc-domain-card__arrow i.ph { color: #fff; }
    @media (max-width: 768px) { .sc-domains { padding: 3.5rem 1.2rem; } .sc-domains__grid { grid-template-columns: 1fr; } }

    /* ─── CTA ────────────────────────────────────────────── */
    .sc-cta { background: linear-gradient(135deg, #142d6b 0%, #1B3A8F 100%); padding: 4rem 3rem; text-align: center; position: relative; overflow: hidden; }
    .sc-cta::before { content: ""; position: absolute; width: 400px; height: 400px; border-radius: 50%; background: rgba(232,119,34,0.08); top: -150px; right: -100px; pointer-events: none; }
    .sc-cta__ring { position: absolute; bottom: -80px; left: 10%; width: 250px; height: 250px; border: 2px solid rgba(255,255,255,0.08); border-radius: 50%; animation: spinSlow 20s linear infinite; }
    .sc-cta__dots { position: absolute; top: 20px; left: 50%; width: 100px; height: 100px; background-image: radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px); background-size: 12px 12px; pointer-events: none; animation: drift 12s ease-in-out infinite; }
    .sc-cta__heading { font-family: "DM Serif Display", serif; font-size: clamp(1.5rem, 3vw, 2.2rem); color: #fff; font-weight: 400; margin-bottom: 1rem; position: relative; }
    .sc-cta__sub { color: rgba(255,255,255,0.7); font-size: 1rem; margin-bottom: 2rem; position: relative; }
    .sc-cta__btn { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--orange); color: #fff; font-weight: 700; font-size: 0.92rem; padding: 0.8rem 2rem; border-radius: 999px; text-decoration: none; transition: transform 0.3s, box-shadow 0.3s; position: relative; }
    .sc-cta__btn:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(232,119,34,0.4); color: #fff; }
    @media (max-width: 768px) { .sc-cta { padding: 3rem 1.2rem; } }

    /* ─── ANIMATIONS ─────────────────────────────────────── */
    @keyframes spinSlow { to { transform: rotate(360deg); } }
    @keyframes float { 0%,100% { transform: translateY(0) rotate(0deg); } 33% { transform: translateY(-15px) rotate(2deg); } 66% { transform: translateY(8px) rotate(-1deg); } }
    @keyframes drift { 0%,100% { transform: translate(0,0); } 25% { transform: translate(20px,-10px); } 50% { transform: translate(-10px,-20px); } 75% { transform: translate(-20px,10px); } }

    /* ─── REVEAL ─────────────────────────────────────────── */
    [data-reveal] { opacity: 0; transform: translateY(40px); transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1); }
    [data-reveal].is-visible { opacity: 1; transform: translateY(0); }
    [data-reveal-left] { opacity: 0; transform: translateX(-40px); transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1); }
    [data-reveal-left].is-visible { opacity: 1; transform: translateX(0); }
    [data-reveal-right] { opacity: 0; transform: translateX(40px); transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1); }
    [data-reveal-right].is-visible { opacity: 1; transform: translateX(0); }
  `],
})
export class SecurityCompliance implements AfterViewInit, OnDestroy {
  private revealObserver: IntersectionObserver | null = null;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const host = this.el.nativeElement as HTMLElement;

    // Particles
    const container = host.querySelector('#sc-particles');
    if (container) {
      for (let i = 0; i < 18; i++) {
        const p = document.createElement('span');
        p.className = 'sc-hero__particle';
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
  }

  ngOnDestroy(): void {
    if (this.revealObserver) this.revealObserver.disconnect();
  }
}



