import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { OpenEmrServiceLayout } from './open-emr-service-layout';

@Component({
  selector: 'app-open-emr-ai-uipath-automation',
  standalone: true,
  imports: [OpenEmrServiceLayout, RouterLink],
  template: `
    <app-open-emr-service-layout
      title="4. Intelligent Workflow Automation Using AI &amp; UiPath"
      bannerImage="Images/image_060.jpg"
    >
      <section class="automation">
        <div class="automation__inner">
          <header class="automation__heading">
            <h2>Reduce Repetitive Work. <em>Improve Operational Efficiency.</em></h2>
            <p>
              Healthcare teams spend valuable time performing repetitive administrative tasks,
              verifying information, processing documents and updating multiple systems.
            </p>
            <p>
              EverLume combines <strong>Artificial Intelligence (AI), Agentic AI and UiPath Robotic
              Process Automation (RPA)</strong> to develop intelligent workflow automation solutions
              that work alongside OpenEMR.
            </p>
          </header>

          <div class="automation__capabilities">
            <h3>Our automation capabilities include:</h3>
            <ul>
              @for (capability of automationCapabilities; track capability) {
                <li><i class="ph ph-check-circle" aria-hidden="true"></i><span>{{ capability }}</span></li>
              }
            </ul>
          </div>

          <section class="automation__approach">
            <h3>Our Automation Approach</h3>
            <div class="automation__approach-grid">
              @for (step of automationApproach; track step.title; let i = $index) {
                <article class="automation__approach-card">
                  <div class="automation__approach-card-heading">
                    <span class="automation__approach-number">0{{ i + 1 }}</span>
                    <span class="automation__approach-icon" aria-hidden="true">
                      <i class="ph {{ step.icon }}"></i>
                    </span>
                  </div>
                  <h4>{{ step.title }}</h4>
                  <p>{{ step.description }}</p>
                </article>
              }
            </div>
          </section>

          <p class="automation__closing">
            By combining these technologies, we help healthcare organizations automate repetitive
            processes while maintaining appropriate control, traceability and human oversight.
          </p>

          <a class="automation__back" routerLink="/what-we-offer/rcm/open-emr">
            <i class="ph ph-arrow-left" aria-hidden="true"></i> Back to OpenEMR Services
          </a>
        </div>
      </section>
    </app-open-emr-service-layout>
  `,
  styles: [`
    :host { display:block; font-family:'DM Sans',system-ui,sans-serif; }
    .automation { padding:5rem 1rem; background:#f5f5f3; }
    .automation__inner { max-width:1100px; margin:0 auto; }
    .automation__heading { max-width:1100px; margin:0 auto 2.5rem; text-align:center; }
    .automation__heading h2 { margin:0 0 1.2rem; color:#111; font-family:"DM Serif Display",serif; font-size:clamp(1.8rem,3.2vw,2.5rem); font-weight:400; line-height:1.2; }
    .automation__heading h2 em { color:#E87722; font-style:italic; }
    .automation__heading p { margin:0 auto .8rem; color:#4b4d53; font-size:.96rem; line-height:1.8; }
    .automation__heading strong { color:#343943; }
    .automation__capabilities h3,.automation__approach h3 { margin:0 0 1rem; color:#172e67; font-family:"DM Serif Display",serif; font-size:1.4rem; font-weight:400; }
    .automation__capabilities ul { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:.8rem; margin:0; padding:0; list-style:none; }
    .automation__capabilities li { display:flex; align-items:flex-start; gap:.7rem; min-height:60px; padding:1rem; border:1px solid rgba(27,58,143,.09); border-left:3px solid rgba(232,119,34,.72); border-radius:12px; background:#fff; color:#343943; font-size:.9rem; font-weight:600; line-height:1.55; box-shadow:0 5px 16px rgba(27,58,143,.04); }
    .automation__capabilities li i { flex:0 0 auto; margin-top:.1rem; color:#1B3A8F; font-size:1.05rem; }
    .automation__approach { margin-top:1.5rem; }
    .automation__approach h3 { margin-bottom:1.1rem; }
    .automation__approach-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:1rem; }
    .automation__approach-card { min-width:0; padding:1.35rem; border:1px solid rgba(27,58,143,.1); border-top:3px solid #E87722; border-radius:14px; background:#fff; box-shadow:0 8px 24px rgba(27,58,143,.06); }
    .automation__approach-card-heading { display:flex; align-items:center; justify-content:space-between; margin-bottom:1.1rem; }
    .automation__approach-number { color:#8992a7; font-size:.76rem; font-weight:700; letter-spacing:.08em; }
    .automation__approach-icon { display:grid; width:42px; height:42px; place-items:center; border-radius:12px; background:rgba(232,119,34,.1); color:#E87722; font-size:1.25rem; }
    .automation__approach-card h4 { margin:0 0 .65rem; color:#172e67; font-size:1rem; font-weight:700; line-height:1.4; }
    .automation__approach-card p { margin:0; color:#4b4d53; font-size:.9rem; line-height:1.75; }
    .automation__closing { margin:1.25rem 0 0; color:#343943; font-size:.93rem; line-height:1.7; }
    .automation__back { display:inline-flex; align-items:center; gap:.45rem; margin-top:1.2rem; color:#1B3A8F; font-size:.88rem; font-weight:700; text-decoration:none; }
    .automation__back:hover { color:#E87722; }
    @media(max-width:768px) {
      .automation { padding:4rem 1.2rem; }
      .automation__heading { margin-bottom:2rem; text-align:left; }
      .automation__capabilities ul { grid-template-columns:1fr; }
      .automation__capabilities li { min-height:0; }
      .automation__approach-grid { grid-template-columns:1fr; }
      .automation__approach-card { padding:1.1rem; }
    }
  `],
})
export class OpenEmrAiUipathAutomation {
  readonly automationCapabilities = [
    'Patient registration and demographic data validation',
    'Insurance eligibility and benefits verification workflows',
    'Intelligent document classification and data extraction',
    'Administrative task automation',
    'Billing and claims-related workflow automation',
    'Automated data entry and system updates',
    'Notifications, task routing and follow-up management',
    'Exception identification and human approval workflows',
    'Automated status tracking and process monitoring',
  ];

  readonly automationApproach = [
    {
      title: 'AI & Agentic AI',
      description:
        'Interpret documents, analyze information, identify discrepancies and support workflow decisions.',
      icon: 'ph-brain',
    },
    {
      title: 'UiPath RPA',
      description:
        'Perform structured system interactions, data lookups, portal activities, repetitive tasks and workflow updates.',
      icon: 'ph-robot',
    },
    {
      title: 'Human Oversight',
      description:
        'Review exceptions, approve sensitive actions and handle situations requiring professional judgment.',
      icon: 'ph-eye',
    },
  ];
}
