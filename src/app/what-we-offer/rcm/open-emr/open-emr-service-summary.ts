import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-open-emr-service-summary',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="open-emr-service-summary">
      <div class="open-emr-service-summary__inner">
        <p>{{ description }}</p>
        <a routerLink="/what-we-offer/rcm/open-emr">
          <i class="ph ph-arrow-left" aria-hidden="true"></i> Back to OpenEMR Services
        </a>
      </div>
    </section>
  `,
  styles: [`
    :host { display:block; font-family:'DM Sans',system-ui,sans-serif; }
    .open-emr-service-summary { padding:5rem 3rem; background:#f5f5f3; }
    .open-emr-service-summary__inner { max-width:900px; margin:0 auto; }
    .open-emr-service-summary p { margin:0 0 1.5rem; padding-left:1.2rem; border-left:3px solid #E87722; color:#343943; font-size:clamp(1rem,1.8vw,1.18rem); line-height:1.8; }
    .open-emr-service-summary a { display:inline-flex; align-items:center; gap:.45rem; color:#1B3A8F; font-size:.88rem; font-weight:700; text-decoration:none; }
    .open-emr-service-summary a:hover { color:#E87722; }
    @media(max-width:768px) {
      .open-emr-service-summary { padding:4rem 1.2rem; }
    }
  `],
})
export class OpenEmrServiceSummary {
  @Input() description = '';
}
