import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-security-identity-compliance-controls',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="dp-sub-bc">
      <a routerLink="/">Home</a><span class="sep">></span>
      <a routerLink="/what-we-offer">What We Offer</a><span class="sep">></span>
      <a routerLink="/what-we-offer/cloud-engineering">Cloud Engineering</a><span class="sep">></span>
      <span class="cur">Security, Identity &amp; Compliance Controls</span>
    </div>
    <header class="dp-sub-hdr">
      <div class="dp-sub-hdr__grid"></div><div class="dp-sub-hdr__glow"></div>
      <div class="dp-sub-hdr__inner">
        <div class="dp-sub-hdr__badge"><i class="ph ph-shield-check"></i><span>Cloud Engineering</span></div>
        <h1 class="dp-sub-hdr__title">Security, Identity, and <em>Compliance Controls</em></h1>
      </div>
    </header>
    <section class="dp-sub-body">
      <div class="dp-sub-body__inner">
        <p>Establish a secure, resilient, and compliant cloud environment with enterprise-grade Security, Identity, and Compliance Controls. Our Cloud Engineering services embed security into every layer of the cloud ecosystem from the outset, ensuring that protection, governance, and regulatory compliance are integral to the architecture rather than retrofitted after deployment. This security-by-design approach enables organisations to innovate with confidence while safeguarding critical applications, data, and digital assets.</p>
        <p>We implement comprehensive cloud security frameworks that encompass identity and access management (IAM), privileged access controls, multi-factor authentication, encryption, network segmentation, workload protection, data security, and policy-driven governance. By applying the principle of least privilege and adopting Zero Trust security principles, we help organisations minimise risk, strengthen operational resilience, and protect cloud environments against evolving cyber threats.</p>
        <p>Our approach also integrates compliance and governance throughout the cloud lifecycle. We establish policy enforcement, security baselines, continuous compliance monitoring, audit logging, vulnerability management, and automated security controls that support adherence to industry regulations and organisational policies. Whether operating in highly regulated industries or global enterprise environments, we help organisations maintain visibility, accountability, and control across their cloud estate.</p>
        <p>Built on DevSecOps and governance-first principles, our solutions incorporate automated security validation, infrastructure policy management, continuous risk assessment, security monitoring, incident response integration, and comprehensive reporting. These capabilities enable organisations to proactively identify vulnerabilities, enforce consistent security standards, and maintain compliance without compromising agility or innovation.</p>
        <p>The result is a secure, well-governed, and compliant cloud foundation that protects critical business assets, reduces operational and regulatory risk, strengthens stakeholder confidence, and provides the resilience required to support enterprise-scale digital transformation and long-term business growth.</p>
      </div>
    </section>
    <section class="dp-sub-cta">
      <a routerLink="/what-we-offer/cloud-engineering" class="dp-sub-cta__back"><i class="ph ph-arrow-left"></i> Back to Cloud Engineering</a>
      <a routerLink="/contact-us" class="dp-sub-cta__btn">Talk to an Expert <i class="ph ph-arrow-right"></i></a>
    </section>
  `,
  styles: [`
    :host { display: block; font-family: 'DM Sans', system-ui, sans-serif; }
    .dp-sub-bc { background: #142d6b; padding: 0.55rem 3rem; display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap; }
    .dp-sub-bc a, .dp-sub-bc span { color: rgba(255,255,255,0.6); font-size: 0.8rem; font-weight: 500; text-decoration: none; }
    .dp-sub-bc a:hover { color: #fff; } .dp-sub-bc .sep { color: rgba(255,255,255,0.25); } .dp-sub-bc .cur { color: #E87722; font-weight: 600; }
    .dp-sub-hdr { background: linear-gradient(135deg,#060d1f 0%,#0f1f4a 60%,#1B3A8F 100%); padding: 5rem 3rem; text-align: center; position: relative; overflow: hidden; }
    .dp-sub-hdr__grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px); background-size: 50px 50px; pointer-events: none; }
    .dp-sub-hdr__glow { position: absolute; width: 400px; height: 400px; border-radius: 50%; background: radial-gradient(circle,rgba(232,119,34,0.14) 0%,transparent 70%); top: -120px; right: -80px; pointer-events: none; }
    .dp-sub-hdr__inner { position: relative; z-index: 2; max-width: 820px; margin: 0 auto; }
    .dp-sub-hdr__badge { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.1); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.18); border-radius: 999px; padding: 0.4rem 1.2rem; margin-bottom: 1.8rem; }
    .dp-sub-hdr__badge i.ph { font-size: 1rem; color: #E87722; line-height: 1; }
    .dp-sub-hdr__badge span { color: rgba(255,255,255,0.85); font-size: 0.78rem; font-weight: 600; letter-spacing: 0.07em; text-transform: uppercase; }
    .dp-sub-hdr__title { font-family: "DM Serif Display", serif; font-size: clamp(2rem,4vw,3rem); color: #fff; font-weight: 400; line-height: 1.1; margin: 0; }
    .dp-sub-hdr__title em { font-style: italic; color: #E87722; }
    .dp-sub-body { padding: 5rem 3rem; background: #f5f5f3; }
    .dp-sub-body__inner { max-width: 900px; margin: 0 auto; background: #fff; border-radius: 24px; padding: 3.5rem; box-shadow: 0 8px 40px rgba(27,58,143,0.07); border: 1px solid rgba(27,58,143,0.06); position: relative; overflow: hidden; }
    .dp-sub-body__inner::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg,#1B3A8F,#E87722); }
    .dp-sub-body__inner p { font-size: 1rem; color: #444; line-height: 1.85; margin-bottom: 1.4rem; }
    .dp-sub-body__inner p:last-child { margin-bottom: 0; }
    .dp-sub-cta { padding: 2.5rem 3rem; background: linear-gradient(135deg,#142d6b,#1B3A8F); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
    .dp-sub-cta__back { display: inline-flex; align-items: center; gap: 0.4rem; color: rgba(255,255,255,0.75); font-size: 0.88rem; font-weight: 600; text-decoration: none; transition: color 0.25s; }
    .dp-sub-cta__back:hover { color: #fff; }
    .dp-sub-cta__btn { display: inline-flex; align-items: center; gap: 0.5rem; background: #E87722; color: #fff; font-weight: 700; font-size: 0.9rem; padding: 0.75rem 1.8rem; border-radius: 999px; text-decoration: none; transition: transform 0.3s, box-shadow 0.3s; }
    .dp-sub-cta__btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(232,119,34,0.4); color: #fff; }
    @media (max-width: 768px) { .dp-sub-bc { padding: 0.55rem 1rem; margin-top: 58px; } .dp-sub-hdr { padding: 4rem 1.5rem; } .dp-sub-body { padding: 3rem 1.2rem; } .dp-sub-body__inner { padding: 2rem 1.5rem; } .dp-sub-cta { padding: 2rem 1.5rem; flex-direction: column; align-items: flex-start; } }
  `],
})
export class SecurityIdentityComplianceControls {}

