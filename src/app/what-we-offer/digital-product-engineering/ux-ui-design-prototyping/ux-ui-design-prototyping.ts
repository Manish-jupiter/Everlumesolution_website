import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ux-ui-design-prototyping',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="dp-sub-bc"><a routerLink="/">Home</a><span class="sep">></span><a routerLink="/what-we-offer">What We Offer</a><span class="sep">></span><a routerLink="/what-we-offer/digital-product-engineering">Digital Product Engineering</a><span class="sep">></span><span class="cur">UX/UI Design and Prototyping</span></div>

    <header class="dp-sub-hdr">
      <div class="dp-sub-hdr__bg">
        <img src="Images/image_028.jpg" alt="UX UI Design and Prototyping" />
        <div class="dp-sub-hdr__overlay"></div>
      </div>
      <div class="dp-sub-hdr__grid"></div>
      <div class="dp-sub-hdr__inner">
        <div class="dp-sub-hdr__badge"><i class="ph ph-pencil-ruler"></i><span>Digital Product Engineering</span></div>
        <h1 class="dp-sub-hdr__title">UX/UI Design <em>and Prototyping</em></h1>
      </div>
    </header>

    <section class="dp-sub-body">
      <div class="dp-sub-body__inner">
        <div class="dp-sub-body__text">
          <p>Exceptional digital products are built on intuitive, engaging, and user-centred experiences. Our UX/UI Design and Prototyping services help organisations create seamless digital experiences that delight users, accelerate adoption, and drive measurable business outcomes. By combining human-centred design principles with data-driven insights and modern design practices, we transform complex user journeys into intuitive, visually compelling, and highly functional digital experiences.</p>
          <p>We collaborate closely with business stakeholders, product teams, and end users to understand customer needs, business objectives, and user behaviours. Through user research, journey mapping, information architecture, wireframing, interface design, and interactive prototyping, we validate ideas early in the product lifecycle, enabling organisations to refine concepts before significant development investment is made.</p>
          <p>Our iterative design approach reduces delivery risk by identifying usability challenges, validating design assumptions, and incorporating user feedback throughout the design process. Interactive prototypes enable stakeholders to visualise product experiences, test workflows, and make informed decisions before development begins, resulting in faster delivery cycles and higher-quality digital products.</p>
          <p>Beyond aesthetics, we design experiences that improve usability, accessibility, engagement, and customer satisfaction across web, mobile, and enterprise applications. Every interface is crafted to balance visual appeal with functional excellence, ensuring consistency, responsiveness, and ease of use across every touchpoint.</p>
          <p>The result is a validated, user-centric product experience that accelerates development, improves customer adoption, enhances user satisfaction, and provides a strong foundation for scalable, high-performing digital products.</p>
        </div>
        <div class="dp-sub-body__image">
          <img src="Images/image_008.jpg" alt="UX UI Design" loading="lazy" />
        </div>
      </div>
    </section>

    <section class="dp-sub-cta">
      <a routerLink="/what-we-offer/digital-product-engineering" class="dp-sub-cta__back"><i class="ph ph-arrow-left"></i> Back to Digital Product Engineering</a>
      <a routerLink="/contact-us" class="dp-sub-cta__btn">Talk to an Expert <i class="ph ph-arrow-right"></i></a>
    </section>
  `,
  styles: [`:host { display: block; font-family: 'DM Sans', system-ui, sans-serif; }
    .dp-sub-bc { background: #142d6b; padding: 0.55rem 3rem; display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap; }
    .dp-sub-bc a, .dp-sub-bc span { color: rgba(255,255,255,0.6); font-size: 0.8rem; font-weight: 500; text-decoration: none; }
    .dp-sub-bc a:hover { color: #fff; } .dp-sub-bc .sep { color: rgba(255,255,255,0.25); } .dp-sub-bc .cur { color: #E87722; font-weight: 600; }
    .dp-sub-hdr { position: relative; padding: 7rem 3rem 6rem; text-align: center; overflow: hidden; min-height: 340px; display: flex; align-items: center; justify-content: center; }
    .dp-sub-hdr__bg { position: absolute; inset: 0; }
    .dp-sub-hdr__bg img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .dp-sub-hdr__overlay { position: absolute; inset: 0; background: linear-gradient(135deg,rgba(6,13,31,.9) 0%,rgba(27,58,143,.78) 100%); }
    .dp-sub-hdr__grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px); background-size: 50px 50px; pointer-events: none; }
    .dp-sub-hdr__inner { position: relative; z-index: 2; max-width: 820px; margin: 0 auto; }
    .dp-sub-hdr__badge { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.1); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.18); border-radius: 999px; padding: 0.4rem 1.2rem; margin-bottom: 1.8rem; }
    .dp-sub-hdr__badge i.ph { font-size: 1rem; color: #E87722; line-height: 1; }
    .dp-sub-hdr__badge span { color: rgba(255,255,255,0.85); font-size: 0.78rem; font-weight: 600; letter-spacing: 0.07em; text-transform: uppercase; }
    .dp-sub-hdr__title { font-family: "DM Serif Display", serif; font-size: clamp(2rem,4vw,3rem); color: #fff; font-weight: 400; line-height: 1.1; margin: 0; }
    .dp-sub-hdr__title em { font-style: italic; color: #E87722; }
    .dp-sub-body { padding: 5rem 3rem; background: #f5f5f3; }
    .dp-sub-body__inner { max-width: 1200px; margin: 0 auto; background: #fff; border-radius: 24px; padding: 3rem; position: relative; border: 1px solid rgba(27,58,143,.06); box-shadow: 0 8px 40px rgba(27,58,143,.07); display: grid; grid-template-columns: 1fr 360px; gap: 2.5rem; align-items: start; }
    .dp-sub-body__inner::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg,#1B3A8F,#E87722); border-radius: 24px 24px 0 0; }
    .dp-sub-body__text p { font-size: 1rem; color: #444; line-height: 1.85; margin-bottom: 1.4rem; }
    .dp-sub-body__text p:last-child { margin-bottom: 0; }
    .dp-sub-body__image { border-radius: 16px; overflow: hidden; box-shadow: 0 8px 32px rgba(27,58,143,.12); }
    .dp-sub-body__image img { width: 100%; height: 100%; object-fit: cover; display: block; min-height: 280px; max-height: 480px; }
    @media (max-width: 1024px) { .dp-sub-body__inner { grid-template-columns: 1fr; } }
    .dp-sub-cta { padding: 2.5rem 3rem; background: linear-gradient(135deg,#142d6b,#1B3A8F); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
    .dp-sub-cta__back { display: inline-flex; align-items: center; gap: 0.4rem; color: rgba(255,255,255,0.75); font-size: 0.88rem; font-weight: 600; text-decoration: none; transition: color 0.25s; }
    .dp-sub-cta__back:hover { color: #fff; }
    .dp-sub-cta__btn { display: inline-flex; align-items: center; gap: 0.5rem; background: #E87722; color: #fff; font-weight: 700; font-size: 0.9rem; padding: 0.75rem 1.8rem; border-radius: 999px; text-decoration: none; transition: transform 0.3s, box-shadow 0.3s; }
    .dp-sub-cta__btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(232,119,34,0.4); color: #fff; }
    @media (max-width: 768px) { .dp-sub-bc { padding: 0.55rem 1rem; margin-top: 58px; } .dp-sub-hdr { padding: 4rem 1.5rem; } .dp-sub-body { padding: 3rem 1.2rem; } .dp-sub-body__inner { padding: 2rem 1.5rem; } .dp-sub-cta { padding: 2rem 1.5rem; flex-direction: column; align-items: flex-start; } }`],
})
export class UxUiDesignPrototyping {}
