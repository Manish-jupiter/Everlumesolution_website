import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { OpenEmrServiceLayout } from './open-emr-service-layout';

@Component({
  selector: 'app-open-emr-customization',
  standalone: true,
  imports: [OpenEmrServiceLayout, RouterLink],
  template: `
    <app-open-emr-service-layout
      title="2. OpenEMR Customization &amp; Development"
      bannerImage="Images/image_007.jpg"
    >
      <section class="customization">
        <div class="customization__inner">
          <header class="customization__heading">
            <h2>Your Healthcare Workflows Are Unique. <em>Your EHR Should Support Them.</em></h2>
            <p>
              Every healthcare organization has different operational processes, clinical
              requirements and administrative workflows.
            </p>
            <p>
              Standard EHR functionality may not address every business requirement. EverLume
              helps customize OpenEMR to align with the way your organization operates.
            </p>
          </header>

          <div class="customization__capabilities">
            <h3>Our customization capabilities include:</h3>
            <ul>
              @for (capability of capabilities; track capability) {
                <li><i class="ph ph-check-circle" aria-hidden="true"></i><span>{{ capability }}</span></li>
              }
            </ul>
          </div>

          <p class="customization__approach">
            Our development approach focuses on practical, maintainable customizations that improve usability and operational efficiency.
          </p>

          <a class="customization__back" routerLink="/what-we-offer/rcm/open-emr">
            <i class="ph ph-arrow-left" aria-hidden="true"></i> Back to OpenEMR Services
          </a>
        </div>
      </section>
    </app-open-emr-service-layout>
  `,
  styles: [`
    :host { display:block; font-family:'DM Sans',system-ui,sans-serif; }
    .customization { padding:5rem 3rem; background:#f5f5f3; }
    .customization__inner { max-width:1100px; margin:0 auto; }
    .customization__heading { max-width:850px; margin:0 auto 2.5rem; text-align:center; }
    .customization__heading h2 { margin:0 0 1.2rem; color:#111; font-family:"DM Serif Display",serif; font-size:clamp(1.8rem,3.2vw,2.5rem); font-weight:400; line-height:1.2; }
    .customization__heading h2 em { color:#E87722; font-style:italic; }
    .customization__heading p { margin:0 auto .8rem; color:#4b4d53; font-size:.96rem; line-height:1.8; }
    .customization__capabilities h3 { margin:0 0 1rem; color:#172e67; font-family:"DM Serif Display",serif; font-size:1.4rem; font-weight:400; }
    .customization__capabilities ul { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:.8rem; margin:0; padding:0; list-style:none; }
    .customization__capabilities li { display:flex; align-items:flex-start; gap:.7rem; min-height:68px; padding:1rem; border:1px solid rgba(27,58,143,.09); border-left:3px solid rgba(232,119,34,.72); border-radius:12px; background:#fff; color:#343943; font-size:.9rem; font-weight:600; line-height:1.55; box-shadow:0 5px 16px rgba(27,58,143,.04); }
    .customization__capabilities li i { flex:0 0 auto; margin-top:.1rem; color:#1B3A8F; font-size:1.05rem; }
    .customization__approach { margin:1.5rem 0 0; padding:1.1rem 1.25rem; border-radius:12px; background:linear-gradient(100deg,rgba(232,119,34,.1),rgba(27,58,143,.06)); color:#343943; font-size:.93rem; font-weight:600; line-height:1.7; }
    .customization__back { display:inline-flex; align-items:center; gap:.45rem; margin-top:1.2rem; color:#1B3A8F; font-size:.88rem; font-weight:700; text-decoration:none; }
    .customization__back:hover { color:#E87722; }
    @media(max-width:768px) {
      .customization { padding:4rem 1.2rem; }
      .customization__heading { margin-bottom:2rem; text-align:left; }
      .customization__capabilities ul { grid-template-columns:1fr; }
      .customization__capabilities li { min-height:0; }
    }
  `],
})
export class OpenEmrCustomization {
  readonly capabilities = [
    'Custom OpenEMR modules and functionality enhancements',
    'Patient intake and registration workflow customization',
    'Appointment scheduling and administrative workflow improvements',
    'Custom clinical forms and documentation templates',
    'Patient and provider management enhancements',
    'Role-based workflows and approval processes',
    'Custom user interfaces and workflow improvements',
    'Application enhancements based on specific business requirements',
  ];
}
