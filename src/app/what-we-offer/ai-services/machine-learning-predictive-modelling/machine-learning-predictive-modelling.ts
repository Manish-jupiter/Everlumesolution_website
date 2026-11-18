import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-machine-learning-predictive-modelling',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="dp-sub-bc"><a routerLink="/">Home</a><span class="sep">></span><a routerLink="/what-we-offer">What We Offer</a><span class="sep">></span><a routerLink="/what-we-offer/ai-services">AI Services</a><span class="sep">></span><span class="cur">Machine Learning and Predictive Modelling</span></div>

    <header class="dp-sub-hdr">
      <div class="dp-sub-hdr__bg">
        <img src="Images/image_005.jpg" alt="Machine Learning and Predictive Modelling" />
        <div class="dp-sub-hdr__overlay"></div>
      </div>
      <div class="dp-sub-hdr__grid"></div>
      <div class="dp-sub-hdr__inner">
        <div class="dp-sub-hdr__badge"><i class="ph ph-graph"></i><span>AI as a Service</span></div>
        <h1 class="dp-sub-hdr__title">Machine Learning and <em>Predictive Modelling</em></h1>
      </div>
    </header>

    <section class="dp-sub-body">
      <div class="dp-sub-body__inner">
        <div class="dp-sub-body__text">
      <p>Unlock the value of your data with advanced Machine Learning and Predictive Modelling solutions that transform historical and real-time information into actionable business intelligence. We help organisations harness the power of AI to identify hidden patterns, predict future outcomes, optimise business processes, and make faster, more informed decisions with greater confidence.</p>
      <p>Our team designs, develops, and deploys enterprise-grade machine learning models tailored to your business objectives and operational environment. Whether forecasting customer demand, assessing financial risk, predicting equipment failures, identifying fraudulent activity, optimising supply chains, or improving customer engagement, our solutions enable organisations to move beyond descriptive analytics and embrace predictive, data-driven decision-making.</p>
      <p>By combining advanced statistical techniques, machine learning algorithms, domain expertise, and scalable data engineering, we deliver intelligent models that continuously learn from new information and adapt to evolving business conditions. Every solution is built with a strong emphasis on explainability, governance, model monitoring, and responsible AI to ensure long-term reliability, transparency, and business trust.</p>
      <p>The result is a more intelligent, agile, and proactive organisation, one that anticipates change, responds to emerging opportunities, mitigates risk, and makes better decisions through the power of predictive intelligence.</p>
        </div>
        <div class="dp-sub-body__image">
          <img src="Images/image_011.jpg" alt="Machine learning and data analytics" loading="lazy" />
        </div>
      </div>
    </section>

    <section class="dp-sub-cta">
      <a routerLink="/what-we-offer/ai-services" class="dp-sub-cta__back"><i class="ph ph-arrow-left"></i> Back to AI Services</a>
      <a routerLink="/contact-us" class="dp-sub-cta__btn">Talk to an Expert <i class="ph ph-arrow-right"></i></a>
    </section>
  `,
  styles: [`:host { display:block; font-family:'DM Sans',system-ui,sans-serif; }
    .dp-sub-bc{background:#142d6b;padding:.55rem 3rem;display:flex;gap:.4rem;flex-wrap:wrap;align-items:center;}
    .dp-sub-bc a,.dp-sub-bc span{color:rgba(255,255,255,.65);font-size:.8rem;text-decoration:none;font-weight:500;}
    .dp-sub-bc a:hover{color:#fff;} .dp-sub-bc .sep{color:rgba(255,255,255,.25);} .dp-sub-bc .cur{color:#E87722;font-weight:600;}
    @media(max-width:768px){.dp-sub-bc{padding:.55rem 1rem;}}
    .dp-sub-hdr{position:relative;padding:7rem 3rem 6rem;text-align:center;overflow:hidden;min-height:340px;display:flex;align-items:center;justify-content:center;}
    .dp-sub-hdr__bg{position:absolute;inset:0;}
    .dp-sub-hdr__bg img{width:100%;height:100%;object-fit:cover;display:block;}
    .dp-sub-hdr__overlay{position:absolute;inset:0;background:linear-gradient(135deg,rgba(6,13,31,.9) 0%,rgba(27,58,143,.78) 100%);}
    .dp-sub-hdr__grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px);background-size:50px 50px;pointer-events:none;}
    .dp-sub-hdr__inner{position:relative;z-index:2;max-width:820px;margin:0 auto;}
    .dp-sub-hdr__badge{display:inline-flex;gap:.5rem;align-items:center;background:rgba(255,255,255,.1);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.18);border-radius:999px;padding:.4rem 1.2rem;margin-bottom:1.8rem;}
    .dp-sub-hdr__badge i{color:#E87722;font-size:1rem;}
    .dp-sub-hdr__badge span{color:rgba(255,255,255,.85);font-size:.78rem;text-transform:uppercase;letter-spacing:.07em;font-weight:600;}
    .dp-sub-hdr__title{font-family:"DM Serif Display",serif;font-size:clamp(2rem,4vw,3rem);color:#fff;font-weight:400;line-height:1.15;margin:0;}
    .dp-sub-hdr__title em{color:#E87722;font-style:italic;}
    @media(max-width:768px){.dp-sub-hdr{padding:4.5rem 1.5rem;min-height:260px;}}
    .dp-sub-body{padding:5rem 3rem;background:#f5f5f3;}
    .dp-sub-body__inner{max-width:1200px;margin:0 auto;background:#fff;border-radius:24px;padding:3rem;position:relative;border:1px solid rgba(27,58,143,.06);box-shadow:0 8px 40px rgba(27,58,143,.07);display:grid;grid-template-columns:1fr 360px;gap:2.5rem;align-items:start;}
    .dp-sub-body__inner::before{content:"";position:absolute;top:0;left:0;width:100%;height:4px;background:linear-gradient(90deg,#1B3A8F,#E87722);border-radius:24px 24px 0 0;}
    .dp-sub-body__text p{font-size:1rem;color:#444;line-height:1.85;margin-bottom:1.4rem;}
    .dp-sub-body__text p:last-child{margin-bottom:0;}
    .dp-sub-body__image{border-radius:16px;overflow:hidden;box-shadow:0 8px 32px rgba(27,58,143,.12);}
    .dp-sub-body__image img{width:100%;height:100%;object-fit:cover;display:block;min-height:280px;max-height:480px;}
    @media(max-width:1024px){.dp-sub-body__inner{grid-template-columns:1fr;}}
    @media(max-width:768px){.dp-sub-body{padding:3rem 1.2rem;} .dp-sub-body__inner{padding:2rem 1.5rem;}}
    .dp-sub-cta{padding:2.5rem 3rem;background:linear-gradient(135deg,#142d6b,#1B3A8F);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;}
    .dp-sub-cta__back{display:inline-flex;align-items:center;gap:.4rem;color:rgba(255,255,255,.75);font-size:.88rem;font-weight:600;text-decoration:none;transition:color .25s;}
    .dp-sub-cta__back:hover{color:#fff;}
    .dp-sub-cta__btn{display:inline-flex;align-items:center;gap:.5rem;background:#E87722;color:#fff;font-weight:700;font-size:.9rem;padding:.75rem 1.8rem;border-radius:999px;text-decoration:none;transition:transform .3s,box-shadow .3s;}
    .dp-sub-cta__btn:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(232,119,34,.4);color:#fff;}
    @media(max-width:640px){.dp-sub-cta{padding:2rem 1.2rem;flex-direction:column;align-items:flex-start;}}`]
})
export class MachineLearningPredictiveModelling {}