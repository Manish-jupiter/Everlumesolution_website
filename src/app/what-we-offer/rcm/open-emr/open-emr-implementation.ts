import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { OpenEmrServiceLayout } from './open-emr-service-layout';

@Component({
  selector: 'app-open-emr-implementation',
  standalone: true,
  imports: [OpenEmrServiceLayout, RouterLink],
  template: `
    <app-open-emr-service-layout
      title="1. OpenEMR Installation &amp; Implementation"
      bannerImage="Images/image_059.jpg"
    >
      <section class="implementation">
        <div class="implementation__inner">
          <header class="implementation__heading">
            <span class="implementation__eyebrow">Our OpenEMR Services</span>
            <h2>Build a Reliable Foundation for Your <em>Healthcare Operations</em></h2>
            <p class="implementation__intro">
              A successful EHR implementation begins with the right technical setup, configuration
              and understanding of your organization's workflows. EverLume helps healthcare
              organizations deploy and configure OpenEMR to support their clinical and
              administrative operations.
            </p>
          </header>

          <div class="implementation__services">
            <h3>Our services include:</h3>
            <ul>
              @for (service of implementationServices; track service; let i = $index) {
                <li>
                  <span class="implementation__number">0{{ i + 1 }}</span>
                  <i class="ph ph-check-circle" aria-hidden="true"></i>
                  <span>{{ service }}</span>
                </li>
              }
            </ul>
          </div>

          <div class="implementation__objective">
            <i class="ph ph-target" aria-hidden="true"></i>
            <p>Our objective is to establish a stable, secure and scalable OpenEMR environment that supports your organization's current needs and future growth.</p>
          </div>

          <a class="implementation__back" routerLink="/what-we-offer/rcm/open-emr">
            <i class="ph ph-arrow-left" aria-hidden="true"></i> Back to OpenEMR Services
          </a>
        </div>
      </section>
    </app-open-emr-service-layout>
  `,
  styles: [`
    :host { display:block; font-family:'DM Sans',system-ui,sans-serif; }
    .implementation { padding:5rem 3rem; background:#f5f5f3; }
    .implementation__inner { max-width:1100px; margin:0 auto; }
    .implementation__heading { max-width:850px; margin:0 auto 2.5rem; text-align:center; }
    .implementation__eyebrow { display:inline-block; margin-bottom:.8rem; color:#E87722; font-size:.72rem; font-weight:700; letter-spacing:.12em; text-transform:uppercase; }
    .implementation__heading h2 { margin:0 0 1rem; color:#111; font-family:"DM Serif Display",serif; font-size:clamp(1.8rem,3.2vw,2.5rem); font-weight:400; line-height:1.2; }
    .implementation__heading h2 em { color:#E87722; font-style:italic; }
    .implementation__intro { max-width:900px; margin:0 auto .8rem; color:#4b4d53; font-size:.96rem; line-height:1.8; }
    .implementation__services h3 { margin:0 0 1rem; color:#172e67; font-family:"DM Serif Display",serif; font-size:1.4rem; font-weight:400; }
    .implementation__services ul { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:.8rem; margin:0; padding:0; list-style:none; }
    .implementation__services li { display:grid; grid-template-columns:32px 22px minmax(0,1fr); align-items:center; gap:.65rem; min-height:76px; padding:.85rem 1rem; border:1px solid rgba(27,58,143,.09); border-left:3px solid rgba(232,119,34,.72); border-radius:12px; background:#fff; color:#343943; font-size:.9rem; font-weight:600; line-height:1.55; box-shadow:0 5px 16px rgba(27,58,143,.04); }
    .implementation__number { color:#E87722; font-size:.72rem; font-weight:700; }
    .implementation__services li > i { color:#1B3A8F; font-size:1.05rem; }
    .implementation__objective { display:flex; align-items:center; gap:.9rem; margin-top:1.5rem; padding:1.1rem 1.25rem; border-radius:12px; background:linear-gradient(100deg,rgba(232,119,34,.1),rgba(27,58,143,.06)); }
    .implementation__objective > i { flex:0 0 auto; color:#E87722; font-size:1.35rem; }
    .implementation__objective p { margin:0; color:#343943; font-size:.93rem; font-weight:600; line-height:1.7; }
    .implementation__back { display:inline-flex; align-items:center; gap:.45rem; margin-top:1.2rem; color:#1B3A8F; font-size:.88rem; font-weight:700; text-decoration:none; }
    .implementation__back:hover { color:#E87722; }
    @media(max-width:768px) {
      .implementation { padding:4rem 1.2rem; }
      .implementation__heading { margin-bottom:2rem; text-align:left; }
      .implementation__intro { margin-left:0; }
      .implementation__services ul { grid-template-columns:1fr; }
      .implementation__services li { min-height:64px; }
      .implementation__objective { align-items:flex-start; padding:1rem; }
    }
  `],
})
export class OpenEmrImplementation {
  readonly implementationServices = [
    'OpenEMR installation and initial configuration',
    'Cloud and on-premises deployment',
    'Database setup and environment configuration',
    'User roles, permissions and access management',
    'Patient registration and clinical workflow configuration',
    'Data migration from existing EHR systems',
    'System testing and deployment validation',
    'Go-live assistance and user onboarding',
  ];
}
