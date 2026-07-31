import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-zero-trust-security',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="breadcrumb-bar">
      <a routerLink="/">Home</a><span class="sep">›</span>
      <a routerLink="/who-we-serve/healthcare">Healthcare</a><span class="sep">›</span>
      <a routerLink="/who-we-serve/healthcare/security-compliance">Security &amp; Compliance</a><span class="sep">›</span>
      <span class="current">Zero Trust Security</span>
    </div>
    <section class="stub-page">
      <h1>Zero Trust Security</h1>
      <p>Identity-driven access controls ensuring no implicit trust for users, devices, or applications within the network.</p>
    </section>
  `,
  styles: [`.breadcrumb-bar{background:#142d6b;padding:.55rem 3rem}.breadcrumb-bar a,.breadcrumb-bar span{color:rgba(255,255,255,.65);font-size:.8rem;font-weight:500;text-decoration:none}.breadcrumb-bar .sep{margin:0 .45rem;color:rgba(255,255,255,.3)}.breadcrumb-bar .current{color:#E87722;font-weight:600}.stub-page{padding:6rem 3rem;max-width:900px;margin:0 auto}.stub-page h1{font-family:"DM Serif Display",serif;font-size:2.5rem;color:#111;margin-bottom:1rem}.stub-page p{font-size:1rem;color:#555;line-height:1.8}`],
})
export class ZeroTrustSecurity {}
