import { Component } from '@angular/core';

@Component({
  selector: 'app-telecom',
  standalone: true,
  imports: [],
  template: `
    <article class="page">
      <span class="page__eyebrow">Who We Serve</span>
      <h1 class="page__title">
        <i class="ph ph-broadcast"></i>
        <span>Telecom</span>
      </h1>
      <p class="page__lede">BSS/OSS transformation, 5G analytics, and network automation for communications service providers.</p>
      <div class="page__cta">
        <a href="/contact-us" class="page__btn">
          Talk to an expert
          <i class="ph ph-arrow-right"></i>
        </a>
      </div>
    </article>
  `,
  styles: [
    `
      :host { display: block; }
      .page {
        max-width: 860px;
        margin: 0 auto;
        padding: 3rem 1.5rem 4rem;
        font-family: 'DM Sans', system-ui, sans-serif;
        color: #101a3a;
      }
      .page__eyebrow {
        display: inline-block;
        padding: 0.3rem 0.7rem;
        border-radius: 999px;
        background: rgba(232, 119, 34, 0.12);
        color: #e87722;
        font-size: 0.75rem;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        margin-bottom: 1rem;
      }
      .page__title {
        font-family: 'DM Serif Display', serif;
        font-size: clamp(2rem, 4vw, 2.75rem);
        display: inline-flex;
        align-items: center;
        gap: 0.85rem;
        margin: 0 0 1rem;
      }
      .page__title i.ph {
        color: #e87722;
        font-size: 2.4rem;
      }
      .page__lede {
        color: #4a5680;
        font-size: 1.05rem;
        line-height: 1.7;
        margin: 0 0 1.75rem;
      }
      .page__cta { margin-top: 1.5rem; }
      .page__btn {
        display: inline-flex;
        align-items: center;
        gap: 0.55rem;
        padding: 0.85rem 1.35rem;
        border-radius: 999px;
        background: linear-gradient(135deg, #e87722, #1b3a8f);
        color: #fff;
        text-decoration: none;
        font-weight: 600;
        transition: transform 0.25s ease, box-shadow 0.25s ease;
      }
      .page__btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 14px 28px -14px rgba(27, 58, 143, 0.6);
      }
    `,
  ],
})
export class Telecom {}
