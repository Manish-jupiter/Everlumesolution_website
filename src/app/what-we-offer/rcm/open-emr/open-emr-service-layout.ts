import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-open-emr-service-layout',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="open-emr-service-breadcrumb">
      <a routerLink="/">Home</a><span class="sep">></span>
      <a routerLink="/what-we-offer">What We Offer</a><span class="sep">></span>
      <a routerLink="/what-we-offer/rcm">RCM</a><span class="sep">></span>
      <a routerLink="/what-we-offer/rcm/open-emr">OpenEMR</a><span class="sep">></span>
      <span class="current">{{ title }}</span>
    </div>

    <header class="open-emr-service-hero">
      <div class="open-emr-service-hero__bg" aria-hidden="true">
      <img [src]="bannerImage" alt="" />
        <div class="open-emr-service-hero__overlay"></div>
      </div>
      <div class="open-emr-service-hero__content">
        <div class="open-emr-service-hero__badge">
          <span class="open-emr-service-hero__badge-dot"></span>
          <span>OpenEMR Services</span>
        </div>
        <h1>{{ title }}</h1>
      </div>
    </header>

    <ng-content></ng-content>
  `,
  styles: [`
    :host { display:block; font-family:'DM Sans',system-ui,sans-serif; }
    .open-emr-service-breadcrumb { display:flex; align-items:center; gap:.4rem; flex-wrap:wrap; padding:.55rem 3rem; background:#142d6b; }
    .open-emr-service-breadcrumb a,.open-emr-service-breadcrumb span { color:rgba(255,255,255,.6); font-size:.8rem; font-weight:500; text-decoration:none; }
    .open-emr-service-breadcrumb a:hover { color:#fff; }
    .open-emr-service-breadcrumb .sep { color:rgba(255,255,255,.25); }
    .open-emr-service-breadcrumb .current { color:#E87722; font-weight:600; }
    .open-emr-service-hero { position:relative; display:flex; min-height:410px; height:55vh; max-height:680px; align-items:center; justify-content:center; overflow:hidden; padding:3rem; text-align:center; }
    .open-emr-service-hero__bg,.open-emr-service-hero__overlay { position:absolute; inset:0; }
    .open-emr-service-hero__bg img { width:100%; height:100%; object-fit:cover; }
    .open-emr-service-hero__overlay { background:radial-gradient(ellipse at 20% 30%,rgba(232,119,34,.24),transparent 55%),linear-gradient(180deg,rgba(16,21,42,.45),rgba(16,21,42,.88)); }
    .open-emr-service-hero__content { position:relative; z-index:1; max-width:900px; }
    .open-emr-service-hero__badge { display:inline-flex; align-items:center; gap:.5rem; margin-bottom:1.2rem; padding:.35rem 1.1rem; border:1px solid rgba(255,255,255,.2); border-radius:999px; background:rgba(255,255,255,.1); }
    .open-emr-service-hero__badge-dot { width:7px; height:7px; border-radius:50%; background:#E87722; }
    .open-emr-service-hero__badge span:last-child { color:#fff; font-size:.78rem; font-weight:600; letter-spacing:.06em; text-transform:uppercase; }
    .open-emr-service-hero h1 { margin:0; color:#fff; font-family:"DM Serif Display",serif; font-size:clamp(2rem,4vw,3rem); font-weight:400; line-height:1.15; }
    @media(max-width:768px) {
      .open-emr-service-breadcrumb { padding:.55rem 1rem; }
      .open-emr-service-hero { min-height:360px; padding:2rem 1.25rem; }
    }
  `],
})
export class OpenEmrServiceLayout {
  @Input() title = '';
  @Input() bannerImage = 'Images/image_046.jpg';
}
