import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { OpenEmrServiceLayout } from './open-emr-service-layout';

@Component({
  selector: 'app-open-emr-technical-support',
  standalone: true,
  imports: [OpenEmrServiceLayout, RouterLink],
  template: `
    <app-open-emr-service-layout
      title="5. OpenEMR Technical Support &amp; Maintenance"
      bannerImage="Images/image_046.jpg"
    >
      <section class="support">
        <div class="support__inner">
          <header class="support__heading">
            <h2>Our Responsibility Doesn't End <em>at Go-Live.</em></h2>
            <p>
              Implementing an EHR system is only the beginning. Healthcare organizations need
              reliable technical assistance as their operations evolve and new requirements emerge.
            </p>
            <p>
              EverLume provides ongoing OpenEMR support and maintenance services tailored to
              organizational needs.
            </p>
          </header>

          <div class="support__services">
            <h3>Our support services include:</h3>
            <ul>
              @for (service of supportServices; track service) {
                <li><i class="ph ph-check-circle" aria-hidden="true"></i><span>{{ service }}</span></li>
              }
            </ul>
          </div>

          <p class="support__closing">
            We aim to build long-term technology relationships that help healthcare organizations
            maintain reliable and efficient OpenEMR environments.
          </p>

          <a class="support__back" routerLink="/what-we-offer/rcm/open-emr">
            <i class="ph ph-arrow-left" aria-hidden="true"></i> Back to OpenEMR Services
          </a>
        </div>
      </section>
    </app-open-emr-service-layout>
  `,
  styles: [`
    :host { display:block; font-family:'DM Sans',system-ui,sans-serif; }
    .support { padding:5rem 1rem; background:#f5f5f3; }
    .support__inner { max-width:1100px; margin:0 auto; }
    .support__heading { max-width:1100px; margin:0 auto 2.5rem; text-align:center; }
    .support__heading h2 { margin:0 0 1.2rem; color:#111; font-family:"DM Serif Display",serif; font-size:clamp(1.8rem,3.2vw,2.5rem); font-weight:400; line-height:1.2; }
    .support__heading h2 em { color:#E87722; font-style:italic; }
    .support__heading p { margin:0 auto .8rem; color:#4b4d53; font-size:.96rem; line-height:1.8; }
    .support__services h3 { margin:0 0 1rem; color:#172e67; font-family:"DM Serif Display",serif; font-size:1.4rem; font-weight:400; }
    .support__services ul { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:.8rem; margin:0; padding:0; list-style:none; }
    .support__services li { display:flex; align-items:flex-start; gap:.7rem; min-height:60px; padding:1rem; border:1px solid rgba(27,58,143,.09); border-left:3px solid rgba(232,119,34,.72); border-radius:12px; background:#fff; color:#343943; font-size:.9rem; font-weight:600; line-height:1.55; box-shadow:0 5px 16px rgba(27,58,143,.04); }
    .support__services li i { flex:0 0 auto; margin-top:.1rem; color:#1B3A8F; font-size:1.05rem; }
    .support__closing { margin:1.5rem 0 0; padding:1.1rem 1.25rem; border-radius:12px; background:linear-gradient(100deg,rgba(232,119,34,.1),rgba(27,58,143,.06)); color:#343943; font-size:.93rem; font-weight:600; line-height:1.7; }
    .support__back { display:inline-flex; align-items:center; gap:.45rem; margin-top:1.2rem; color:#1B3A8F; font-size:.88rem; font-weight:700; text-decoration:none; }
    .support__back:hover { color:#E87722; }
    @media(max-width:768px) {
      .support { padding:4rem 1.2rem; }
      .support__heading { margin-bottom:2rem; text-align:left; }
      .support__services ul { grid-template-columns:1fr; }
      .support__services li { min-height:0; }
      .support__closing { padding:1rem; }
    }
  `],
})
export class OpenEmrTechnicalSupport {
  readonly supportServices = [
    'Technical troubleshooting and issue resolution',
    'OpenEMR upgrades and version maintenance',
    'Custom module maintenance and enhancements',
    'Application and database performance optimization',
    'Third-party integration support',
    'Backup and recovery planning',
    'Security updates and configuration reviews',
    'Workflow improvements and change requests',
    'Support agreements and escalation procedures',
    'Continuous application optimization',
  ];
}
