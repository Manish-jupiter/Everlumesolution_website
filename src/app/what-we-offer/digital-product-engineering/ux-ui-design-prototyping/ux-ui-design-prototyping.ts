import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ux-ui-design-prototyping',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="breadcrumb-bar">
      <a routerLink="/">Home</a><span class="sep">></span>
      <a routerLink="/what-we-offer">What We Offer</a><span class="sep">></span>
      <a routerLink="/what-we-offer/digital-product-engineering">Digital Product Engineering</a><span class="sep">></span>
      <span class="current">UX/UI Design &amp; Prototyping</span>
    </div>
    <section class="stub-page">
      <div class="stub-page__inner">
        <span class="stub-eyebrow">Digital Product Engineering</span>
        <h1 class="stub-title">UX/UI Design and <em>Prototyping</em></h1>
        <p class="stub-lead">Exceptional digital products are built on intuitive, engaging, and user-centred experiences. Our UX/UI Design and Prototyping services help organisations create seamless digital experiences that delight users, accelerate adoption, and drive measurable business outcomes. By combining human-centred design principles with data-driven insights and modern design practices, we transform complex user journeys into intuitive, visually compelling, and highly functional digital experiences.</p>
        <p class="stub-body">We collaborate closely with business stakeholders, product teams, and end users to understand customer needs, business objectives, and user behaviours. Through user research, journey mapping, information architecture, wireframing, interface design, and interactive prototyping, we validate ideas early in the product lifecycle, enabling organisations to refine concepts before significant development investment is made.</p>
        <p class="stub-body">Our iterative design approach reduces delivery risk by identifying usability challenges, validating design assumptions, and incorporating user feedback throughout the design process. Interactive prototypes enable stakeholders to visualise product experiences, test workflows, and make informed decisions before development begins, resulting in faster delivery cycles and higher-quality digital products.</p>
        <p class="stub-body">Beyond aesthetics, we design experiences that improve usability, accessibility, engagement, and customer satisfaction across web, mobile, and enterprise applications. Every interface is crafted to balance visual appeal with functional excellence, ensuring consistency, responsiveness, and ease of use across every touchpoint.</p>
        <p class="stub-body">The result is a validated, user-centric product experience that accelerates development, improves customer adoption, enhances user satisfaction, and provides a strong foundation for scalable, high-performing digital products.</p>
        <a routerLink="/what-we-offer/digital-product-engineering" class="stub-back"><i class="ph ph-arrow-left"></i> Back to Digital Product Engineering</a>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; font-family: 'DM Sans', system-ui, sans-serif; }
    .breadcrumb-bar { padding: 0.7rem 2rem; background: #f0f2f8; font-size: 0.8rem; display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap; }
    .breadcrumb-bar a { color: #1B3A8F; font-weight: 600; } .breadcrumb-bar a:hover { color: #E87722; }
    .breadcrumb-bar .sep { color: #aaa; } .breadcrumb-bar .current { color: #555; }
    .stub-page { padding: 5rem 3rem; background: #f5f5f3; }
    .stub-page__inner { max-width: 860px; margin: 0 auto; background: #fff; border-radius: 24px; padding: 3.5rem; box-shadow: 0 10px 40px rgba(27,58,143,0.08); border: 1px solid rgba(27,58,143,0.06); position: relative; overflow: hidden; }
    .stub-page__inner::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg,#1B3A8F,#E87722); }
    .stub-eyebrow { display: inline-block; padding: 0.3rem 0.9rem; border-radius: 999px; background: rgba(232,119,34,0.1); color: #E87722; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 1.2rem; }
    .stub-title { font-family: "DM Serif Display", serif; font-size: clamp(1.6rem,3vw,2.2rem); font-weight: 400; color: #111; line-height: 1.2; margin-bottom: 1.5rem; }
    .stub-title em { font-style: italic; color: #E87722; }
    .stub-lead { font-size: 1.05rem; color: #333; line-height: 1.8; margin-bottom: 1.2rem; }
    .stub-body { font-size: 0.97rem; color: #555; line-height: 1.8; margin-bottom: 1.2rem; }
    .stub-back { display: inline-flex; align-items: center; gap: 0.45rem; color: #1B3A8F; font-weight: 600; font-size: 0.88rem; border: 2px solid #1B3A8F; border-radius: 999px; padding: 0.6rem 1.4rem; transition: all 0.25s; margin-top: 1rem; }
    .stub-back:hover { background: #1B3A8F; color: #fff; }
    @media (max-width: 768px) { .stub-page { padding: 3rem 1.2rem; } .stub-page__inner { padding: 2rem 1.5rem; } }
  `],
})
export class UxUiDesignPrototyping {}

