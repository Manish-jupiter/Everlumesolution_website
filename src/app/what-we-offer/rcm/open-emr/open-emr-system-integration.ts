import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { OpenEmrServiceLayout } from './open-emr-service-layout';

@Component({
  selector: 'app-open-emr-system-integration',
  standalone: true,
  imports: [OpenEmrServiceLayout, RouterLink],
  template: `
    <app-open-emr-service-layout
      title="3. OpenEMR Integration Services"
      bannerImage="Images/image_041.jpg"
    >
      <section class="integration">
        <div class="integration__inner">
          <header class="integration__heading">
            <h2>Connect Your EHR With the Systems <em>Your Organization Depends On</em></h2>
            <p>
              Healthcare organizations often rely on multiple applications for clinical,
              administrative, financial and operational activities.
            </p>
            <p>
              Disconnected systems can create duplicate data entry, inconsistent information and
              unnecessary manual work.
            </p>
            <p>
              EverLume helps organizations connect OpenEMR with third-party healthcare applications
              and existing technology platforms.
            </p>
          </header>

          <div class="integration__services">
            <h3>Our integration services include:</h3>
            <ul>
              @for (service of integrationServices; track service) {
                <li><i class="ph ph-check-circle" aria-hidden="true"></i><span>{{ service }}</span></li>
              }
            </ul>
          </div>

          <p class="integration__goal">
            Our goal is to establish connected healthcare workflows that support reliable
            information exchange across systems.
          </p>

          <a class="integration__back" routerLink="/what-we-offer/rcm/open-emr">
            <i class="ph ph-arrow-left" aria-hidden="true"></i> Back to OpenEMR Services
          </a>
        </div>
      </section>
    </app-open-emr-service-layout>
  `,
  styles: [`
    :host { display:block; font-family:'DM Sans',system-ui,sans-serif; }
    .integration { padding:5rem 1rem; background:#f5f5f3; }
    .integration__inner { max-width:1100px; margin:0 auto; }
    .integration__heading { max-width:1100px; margin:0 auto 2.5rem; text-align:center; }
    .integration__heading h2 { margin:0 0 1.2rem; color:#111; font-family:"DM Serif Display",serif; font-size:clamp(1.8rem,3.2vw,2.5rem); font-weight:400; line-height:1.2; }
    .integration__heading h2 em { color:#E87722; font-style:italic; }
    .integration__heading p { margin:0 auto .8rem; color:#4b4d53; font-size:.96rem; line-height:1.8; }
    .integration__services h3 { margin:0 0 1rem; color:#172e67; font-family:"DM Serif Display",serif; font-size:1.4rem; font-weight:400; }
    .integration__services ul { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:.8rem; margin:0; padding:0; list-style:none; }
    .integration__services li { display:flex; align-items:flex-start; gap:.7rem; min-height:68px; padding:1rem; border:1px solid rgba(27,58,143,.09); border-left:3px solid rgba(232,119,34,.72); border-radius:12px; background:#fff; color:#343943; font-size:.9rem; font-weight:600; line-height:1.55; box-shadow:0 5px 16px rgba(27,58,143,.04); }
    .integration__services li i { flex:0 0 auto; margin-top:.1rem; color:#1B3A8F; font-size:1.05rem; }
    .integration__goal { margin:1.5rem 0 0; padding:1.1rem 1.25rem; border-radius:12px; background:linear-gradient(100deg,rgba(232,119,34,.1),rgba(27,58,143,.06)); color:#343943; font-size:.93rem; font-weight:600; line-height:1.7; }
    .integration__back { display:inline-flex; align-items:center; gap:.45rem; margin-top:1.2rem; color:#1B3A8F; font-size:.88rem; font-weight:700; text-decoration:none; }
    .integration__back:hover { color:#E87722; }
    @media(max-width:768px) {
      .integration { padding:4rem 1.2rem; }
      .integration__heading { margin-bottom:2rem; text-align:left; }
      .integration__services ul { grid-template-columns:1fr; }
      .integration__services li { min-height:0; }
    }
  `],
})
export class OpenEmrSystemIntegration {
  readonly integrationServices = [
    'HL7/FHIR and API-based integrations',
    'Third-party healthcare application connectivity',
    'Laboratory and diagnostic system integrations',
    'Billing and Revenue Cycle Management (RCM) system integrations',
    'Insurance and eligibility verification system connectivity',
    'Patient portal and communication platform integrations',
    'Secure data exchange and synchronization',
    'Custom integration development and troubleshooting',
  ];
}
