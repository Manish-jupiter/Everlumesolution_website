import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Section {
  id: string;
  icon: string;
  title: string;
  paragraphs: string[];
}

@Component({
  selector: 'app-terms-and-conditions',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- BREADCRUMB -->
    <div class="breadcrumb-bar">
      <a routerLink="/">Home</a>
      <span class="sep">></span>
      <span class="current">Terms &amp; Conditions</span>
    </div>

    <!-- HERO -->
    <section class="tc-hero">
      <div class="tc-hero__particles" id="tc-particles" aria-hidden="true"></div>
      <div class="tc-hero__glow-1" aria-hidden="true"></div>
      <div class="tc-hero__glow-2" aria-hidden="true"></div>

      <div class="tc-hero__inner">
        <div class="tc-hero__content">
          <span class="tc-hero__badge">
            <span class="tc-hero__badge-dot"></span>Legal Notice
          </span>
          <h1 class="tc-hero__heading">
            Terms &amp;<br/><em>Conditions of Use</em>
          </h1>
          <p class="tc-hero__sub">
            The following terms govern your access to and use of the Everlume Solutions website,
            services, and applications. Please read them carefully — using this site means you
            agree to be bound by them and to comply with all applicable laws and regulations.
          </p>
          <div class="tc-hero__stats">
            <div class="tc-stat">
              <span class="tc-stat__value">{{ sections.length }}</span>
              <span class="tc-stat__label">Sections</span>
            </div>
            <div class="tc-stat">
              <span class="tc-stat__value">v1.0</span>
              <span class="tc-stat__label">Current Version</span>
            </div>
            <div class="tc-stat">
              <span class="tc-stat__value">Aug 2026</span>
              <span class="tc-stat__label">Last Updated</span>
            </div>
            <div class="tc-stat">
              <span class="tc-stat__value">Global</span>
              <span class="tc-stat__label">Applies Worldwide</span>
            </div>
          </div>
        </div>

        <div class="tc-hero__visual" aria-hidden="true">
          <div class="tc-viz">
            <div class="tc-viz__ring tc-viz__ring--1"></div>
            <div class="tc-viz__ring tc-viz__ring--2"></div>
            <div class="tc-viz__ring tc-viz__ring--3"></div>
            <div class="tc-viz__core">
              <i class="ph ph-scroll"></i>
            </div>
            <div class="tc-viz__chip tc-viz__chip--1">
              <i class="ph ph-shield-check"></i><span>Compliant</span>
            </div>
            <div class="tc-viz__chip tc-viz__chip--2">
              <i class="ph ph-gavel"></i><span>Legal</span>
            </div>
            <div class="tc-viz__chip tc-viz__chip--3">
              <i class="ph ph-globe"></i><span>Global</span>
            </div>
            <div class="tc-viz__chip tc-viz__chip--4">
              <i class="ph ph-lock-key"></i><span>Secure</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- BODY -->
    <section class="tc-body">
      <div class="tc-body__inner">

        <!-- STICKY NAV -->
        <aside class="tc-nav" aria-label="Terms sections">
          <span class="tc-nav__eyebrow">On This Page</span>
          <nav class="tc-nav__list">
            @for (section of sections; track section.id; let i = $index) {
              <a class="tc-nav__link"
                 [class.tc-nav__link--active]="activeId === section.id"
                 [href]="'#' + section.id"
                 (click)="onNavClick($event, section.id)">
                <span class="tc-nav__num">{{ (i + 1).toString().padStart(2, '0') }}</span>
                <span class="tc-nav__label">{{ section.title }}</span>
              </a>
            }
          </nav>
          <div class="tc-nav__card">
            <i class="ph ph-info"></i>
            <div>
              <strong>Need clarification?</strong>
              <p>Our legal team can help you interpret any of these provisions.</p>
              <a routerLink="/contact-us" class="tc-nav__cta">Contact legal <i class="ph ph-arrow-right"></i></a>
            </div>
          </div>
        </aside>

        <!-- SECTIONS -->
        <div class="tc-content">
          @for (section of sections; track section.id; let i = $index) {
            <article class="tc-section" [id]="section.id" data-tc-observe>
              <header class="tc-section__head">
                <span class="tc-section__num">{{ (i + 1).toString().padStart(2, '0') }}</span>
                <div class="tc-section__title-wrap">
                  <i class="ph" [class]="'ph ' + section.icon"></i>
                  <h2 class="tc-section__title">{{ section.title }}</h2>
                </div>
              </header>
              <div class="tc-section__body">
                @for (para of section.paragraphs; track $index) {
                  <p>{{ para }}</p>
                }
              </div>
            </article>
          }

          <!-- FOOT NOTE -->
          <div class="tc-footnote">
            <i class="ph ph-warning-circle"></i>
            <p>
              Additional or different terms, conditions and notices may apply to specific materials,
              information, products, software and services offered through this website. In the event
              of any conflict, such additional or different terms, conditions and notices will prevail
              over these Terms of Use. Please refer to the applicable agreement or notice.
            </p>
          </div>

          <!-- FINAL CTA -->
          <div class="tc-final-cta" data-tc-observe>
            <div>
              <span class="tc-final-cta__eyebrow">Questions About These Terms?</span>
              <h3>We are happy to walk you through anything on this page.</h3>
            </div>
            <a routerLink="/contact-us" class="tc-final-cta__btn">
              Contact legal
              <i class="ph ph-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
:host {
  --blue:      #1B3A8F;
  --orange:    #E87722;
  --dark:      #0c1836;
  --mid:       #4d5c86;
  --line:      #d1ddf5;
  --teal-dark: #142d6b;
  display: block;
  font-family: 'DM Sans', system-ui, sans-serif;
  color: #0f1f47;
}

/* Breadcrumb (matches contact-us) */
.breadcrumb-bar { background: var(--teal-dark); padding: 0.55rem 3rem; }
.breadcrumb-bar a, .breadcrumb-bar span { color: rgba(255,255,255,0.65); font-size: 0.8rem; font-weight: 500; text-decoration: none; }
.breadcrumb-bar a:hover { color: #fff; }
.breadcrumb-bar .sep { margin: 0 0.45rem; color: rgba(255,255,255,0.3); }
.breadcrumb-bar .current { color: var(--orange); font-weight: 600; }

/* HERO */
.tc-hero { position: relative; background: linear-gradient(135deg,#0b1e4d 0%,#1B3A8F 55%,#0e2560 100%); padding: 5rem 3rem 4rem; overflow: hidden; }
.tc-hero__particles { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
.tc-hero__glow-1,.tc-hero__glow-2 { position: absolute; border-radius: 50%; filter: blur(90px); pointer-events: none; }
.tc-hero__glow-1 { width: 520px; height: 520px; background: rgba(232,119,34,0.18); top: -120px; right: -80px; }
.tc-hero__glow-2 { width: 380px; height: 380px; background: rgba(27,58,143,0.35); bottom: -100px; left: 5%; }
.tc-hero__inner { position: relative; z-index: 1; max-width: 1180px; margin: 0 auto; display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 3rem; align-items: center; }
.tc-hero__badge { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); border-radius: 999px; padding: 0.35rem 0.85rem; color: #d0deff; font-size: 0.78rem; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 1rem; }
.tc-hero__badge-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--orange); box-shadow: 0 0 8px var(--orange); }
.tc-hero__heading { font-family: 'DM Serif Display',serif; font-size: clamp(2.2rem,4.5vw,3.6rem); line-height: 1.07; color: #fff; margin: 0 0 1rem; }
.tc-hero__heading em { font-style: italic; color: var(--orange); }
.tc-hero__sub { max-width: 62ch; color: rgba(255,255,255,0.72); line-height: 1.72; margin: 0 0 2.2rem; font-size: 1.05rem; }
.tc-hero__stats { display: flex; flex-wrap: wrap; gap: 1rem 2.5rem; }
.tc-stat__value { display: block; font-family: 'DM Serif Display',serif; font-size: 1.85rem; color: #fff; line-height: 1; }
.tc-stat__label { display: block; font-size: 0.8rem; color: rgba(255,255,255,0.55); text-transform: uppercase; letter-spacing: 0.1em; margin-top: 0.28rem; }

.tc-hero__visual { display: flex; align-items: center; justify-content: center; }
.tc-viz { position: relative; width: 320px; height: 320px; flex-shrink: 0; }
.tc-viz__ring { position: absolute; top: 50%; left: 50%; border-radius: 50%; transform: translate(-50%,-50%); border: 1.5px dashed rgba(232,119,34,0.35); }
.tc-viz__ring--1 { width: 300px; height: 300px; animation: tc-spin 26s linear infinite; }
.tc-viz__ring--2 { width: 220px; height: 220px; border-color: rgba(255,255,255,0.14); animation: tc-spin 18s linear infinite reverse; }
.tc-viz__ring--3 { width: 140px; height: 140px; border-color: rgba(232,119,34,0.55); animation: tc-spin 12s linear infinite; }
.tc-viz__core { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 96px; height: 96px; border-radius: 24px; background: linear-gradient(135deg,var(--orange),#b84e0b); display: flex; align-items: center; justify-content: center; box-shadow: 0 0 28px rgba(232,119,34,0.55), 0 0 60px rgba(232,119,34,0.18); }
.tc-viz__core i { color: #fff; font-size: 2.4rem; }
.tc-viz__chip { position: absolute; display: inline-flex; align-items: center; gap: 0.42rem; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.15); border-radius: 10px; padding: 0.45rem 0.75rem; color: #e8eeff; font-size: 0.78rem; font-weight: 600; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); animation: tc-float-chip 4s ease-in-out infinite; }
.tc-viz__chip i { color: var(--orange); font-size: 0.95rem; }
.tc-viz__chip--1 { top: 5%;  left: -6%; animation-delay: 0s;   }
.tc-viz__chip--2 { top: 5%;  right: -6%; animation-delay: 1s;  }
.tc-viz__chip--3 { bottom: 6%; left: -6%; animation-delay: 2s; }
.tc-viz__chip--4 { bottom: 6%; right: -6%; animation-delay: 1.5s; }
@keyframes tc-spin { to { transform: translate(-50%,-50%) rotate(360deg); } }
@keyframes tc-float-chip { 0%,100% { transform: translateY(0);} 50% { transform: translateY(-7px);} }

/* BODY */
.tc-body { background: #f4f7fd; padding: 3.5rem 3rem 5rem; }
.tc-body__inner { max-width: 1180px; margin: 0 auto; display: grid; grid-template-columns: 0.85fr 1.55fr; gap: 2.4rem; align-items: start; }

/* Sticky nav */
.tc-nav { position: sticky; top: 90px; display: flex; flex-direction: column; gap: 1.1rem; }
.tc-nav__eyebrow { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.14em; color: var(--orange); }
.tc-nav__list { display: flex; flex-direction: column; gap: 0.15rem; background: #fff; border: 1px solid var(--line); border-radius: 14px; padding: 0.55rem; box-shadow: 0 10px 24px -18px rgba(18,47,113,0.3); }
.tc-nav__link { display: flex; align-items: center; gap: 0.7rem; padding: 0.55rem 0.7rem; border-radius: 10px; text-decoration: none; color: var(--mid); font-size: 0.86rem; font-weight: 500; transition: background 0.2s ease, color 0.2s ease; border-left: 3px solid transparent; }
.tc-nav__link:hover { background: #f4f7fd; color: var(--dark); }
.tc-nav__link--active { background: linear-gradient(90deg, rgba(232,119,34,0.12), rgba(27,58,143,0.05)); color: var(--blue); border-left-color: var(--orange); font-weight: 700; }
.tc-nav__num { font-size: 0.72rem; font-weight: 700; color: var(--orange); font-family: ui-monospace, monospace; letter-spacing: 0.06em; }
.tc-nav__label { flex: 1; line-height: 1.3; }
.tc-nav__card { display: flex; gap: 0.75rem; background: linear-gradient(160deg,#1B3A8F,#0c1836); border-radius: 16px; padding: 1.1rem; color: #fff; }
.tc-nav__card i { flex-shrink: 0; width: 34px; height: 34px; display: flex; align-items: center; justify-content: center; border-radius: 10px; background: rgba(255,255,255,0.1); color: var(--orange); font-size: 1.1rem; }
.tc-nav__card strong { display: block; font-size: 0.95rem; margin-bottom: 0.25rem; }
.tc-nav__card p { margin: 0 0 0.55rem; color: rgba(255,255,255,0.7); font-size: 0.82rem; line-height: 1.55; }
.tc-nav__cta { color: var(--orange); font-size: 0.82rem; font-weight: 700; text-decoration: none; display: inline-flex; align-items: center; gap: 0.35rem; }
.tc-nav__cta:hover { color: #fff; }

/* Content */
.tc-content { display: flex; flex-direction: column; gap: 1.3rem; }
.tc-section { background: #fff; border: 1px solid var(--line); border-radius: 18px; padding: 1.7rem 1.8rem; box-shadow: 0 18px 42px -30px rgba(18,47,113,0.35); scroll-margin-top: 100px; opacity: 0; transform: translateY(24px); transition: opacity 0.5s ease, transform 0.5s ease; }
.tc-section.is-visible { opacity: 1; transform: none; }
.tc-section__head { display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1rem; padding-bottom: 0.9rem; border-bottom: 1px solid #edf2fc; }
.tc-section__num { flex-shrink: 0; width: 44px; height: 44px; border-radius: 12px; background: linear-gradient(135deg, var(--orange), var(--blue)); color: #fff; font-family: 'DM Serif Display', serif; font-size: 1.15rem; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 18px -8px rgba(232,119,34,0.55); }
.tc-section__title-wrap { display: flex; align-items: center; gap: 0.6rem; padding-top: 0.35rem; }
.tc-section__title-wrap i.ph { color: var(--orange); font-size: 1.3rem; }
.tc-section__title { font-family: 'DM Serif Display', serif; font-size: clamp(1.3rem, 2vw, 1.6rem); margin: 0; color: var(--dark); }
.tc-section__body p { margin: 0 0 0.85rem; color: var(--mid); font-size: 0.98rem; line-height: 1.75; }
.tc-section__body p:last-child { margin-bottom: 0; }

/* Footnote */
.tc-footnote { display: flex; gap: 0.9rem; background: #fff8f2; border: 1px dashed #f5b382; border-radius: 14px; padding: 1.1rem 1.2rem; }
.tc-footnote i { flex-shrink: 0; font-size: 1.4rem; color: var(--orange); margin-top: 2px; }
.tc-footnote p { margin: 0; color: #7a3e12; font-size: 0.88rem; line-height: 1.65; }

/* Final CTA */
.tc-final-cta { display: flex; align-items: center; justify-content: space-between; gap: 1.5rem; background: linear-gradient(130deg,#0c1836,#1B3A8F); border-radius: 20px; padding: 1.7rem 1.9rem; color: #fff; opacity: 0; transform: translateY(24px); transition: opacity 0.5s ease, transform 0.5s ease; }
.tc-final-cta.is-visible { opacity: 1; transform: none; }
.tc-final-cta__eyebrow { display: block; font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.14em; color: var(--orange); margin-bottom: 0.35rem; }
.tc-final-cta h3 { font-family: 'DM Serif Display', serif; font-size: clamp(1.15rem, 2vw, 1.45rem); margin: 0; color: #fff; line-height: 1.35; }
.tc-final-cta__btn { display: inline-flex; align-items: center; gap: 0.55rem; padding: 0.85rem 1.35rem; border-radius: 999px; background: linear-gradient(135deg, var(--orange), #b84e0b); color: #fff; text-decoration: none; font-weight: 700; font-size: 0.95rem; white-space: nowrap; transition: transform 0.2s ease, box-shadow 0.2s ease; }
.tc-final-cta__btn:hover { transform: translateY(-2px); box-shadow: 0 14px 28px -12px rgba(232,119,34,0.6); }

/* Responsive */
@media (max-width: 1024px) {
  .tc-hero__inner { grid-template-columns: 1fr; }
  .tc-hero__visual { display: none; }
  .tc-body__inner { grid-template-columns: 1fr; }
  .tc-nav { position: static; }
  .tc-nav__list { flex-direction: row; flex-wrap: wrap; }
  .tc-nav__link { flex: 1 1 auto; }
  .tc-nav__card { display: none; }
}
@media (max-width: 768px) {
  .breadcrumb-bar { padding: 0.55rem 1rem; margin-top: 58px; }
  .tc-hero { padding: 3.5rem 1.25rem 2.5rem; }
  .tc-body { padding: 2.2rem 1.25rem 3.5rem; }
  .tc-section { padding: 1.3rem; }
  .tc-final-cta { flex-direction: column; align-items: stretch; text-align: center; }
}
@media (max-width: 480px) {
  .tc-hero__heading { font-size: 2rem; }
}
  `],
})
export class TermsAndConditions implements AfterViewInit, OnDestroy {
  protected activeId = '';
  private observer?: IntersectionObserver;
  private revealObserver?: IntersectionObserver;

  readonly sections: Section[] = [
    {
      id: 'terms-of-use',
      icon: 'ph-scroll',
      title: 'Terms of Use',
      paragraphs: [
        'By accessing, browsing or using this website, you acknowledge that you have read, understood, and agree to be bound by these terms and to comply with all applicable laws and regulations, including export and re-export control laws and regulations. If you do not agree to these terms, please do not use this website.',
        'Everlume may, without notice to users, at any time revise these Terms of Use and any other information contained in this website by updating this posting. Everlume may also make improvements and/or changes in the products, services or programs described in this site at any time without notice.',
      ],
    },
    {
      id: 'general-information',
      icon: 'ph-info',
      title: 'General Information',
      paragraphs: [
        'This website contains proprietary information, the terms of which must be observed and followed. This site and any content in this site may not be copied, reproduced, republished, uploaded, posted, transmitted, distributed, or used for the creation of derivative works without Everlume\'s prior written consent, except that Everlume grants you non-exclusive, non-transferable, limited permission to access and display the web pages within this site, solely on your computer and for your personal, non-commercial use of this website. This permission is conditioned on your not modifying the content displayed on this site, your keeping intact all copyright, trademark and other proprietary notices, and your acceptance of any terms, conditions and notices accompanying the content or otherwise set forth in this site. Notwithstanding the foregoing, any software and other materials that are made available for downloading, access or other use from this site with their own license terms, conditions, and notices will be governed by such terms, conditions and notices.',
        'Your failure to comply with the terms, conditions and notices on this site will result in automatic termination of any rights granted to you, without prior notice, and you must immediately destroy all copies of downloaded materials in your possession or control. Except for the limited permission detailed in the preceding paragraph, Everlume does not grant you any express or implied rights or licenses under any patents, trademarks, copyrights, or other proprietary or intellectual property rights. You may not mirror any of the content from this site on another website or in any other media.',
      ],
    },
    {
      id: 'certain-disclaimers',
      icon: 'ph-warning',
      title: 'Certain Disclaimers',
      paragraphs: [
        'Information on this website is not promised or guaranteed to be correct, current, or complete, and this site may contain technical inaccuracies or typographical errors. Everlume assumes no responsibility (and expressly disclaims responsibility) for updating this site to keep information current or to ensure the accuracy or completeness of any posted information. You should confirm the accuracy and completeness of all posted information before making any decision related to any services, products or other matters described in this site.',
      ],
    },
    {
      id: 'global-availability',
      icon: 'ph-globe',
      title: 'Global Availability',
      paragraphs: [
        'Information Everlume publishes on the World Wide Web may contain references or cross references to Everlume products, programs and services that are not announced or available in your country. Such references do not imply that Everlume intends to announce or make available such products, programs or services in your country. To learn whether the information regarding products, programs and services may be available to you, you can contact Everlume offices mentioned in this website.',
      ],
    },
    {
      id: 'business-relationships',
      icon: 'ph-handshake',
      title: 'Business Relationships',
      paragraphs: [
        'This website may provide links or references to non-Everlume websites and resources. Everlume makes no representations, warranties or other commitments whatsoever about any non-Everlume websites or third-party information that may be referenced to in the Everlume website. When you access a non-Everlume website, you may find that it contains the Everlume logo. Since Everlume does not have control on the content on that website, Everlume is not responsible for the claims/implications of such information. It is up to the user to take precautions to protect yourself from viruses, worms, trojan horses and other potentially destructive programs, and to protect information as deemed appropriate.',
      ],
    },
    {
      id: 'disclaimer-of-warranty',
      icon: 'ph-shield-warning',
      title: 'Disclaimer of Warranty',
      paragraphs: [
        'Use of this site is at your sole risk. All materials, information, products, software, programs and services are provided "as is," with no warranties or guarantees whatsoever. Without limitation, Everlume makes no warranty or guarantee that this website will be uninterrupted, timely, secure or error-free. You understand and agree that if you download or otherwise obtain materials, information, products, software, programs, and services, you do so at your own discretion and risk and that you will be solely responsible for any damages that may result, including loss of data or damage to your computer system.',
      ],
    },
    {
      id: 'limitation-of-liability',
      icon: 'ph-gavel',
      title: 'Limitation of Liability',
      paragraphs: [
        'In no event will Everlume be liable to any party for any direct, indirect, incidental, special, exemplary or consequential damages of any type whatsoever related to or arising from this website or any use of this website, or of any site or resource linked to, referenced or accessed through this website, or for the use or downloading of, or access to, any materials, information, products, and services, including, without limitation, any lost profits, business interruption, lost savings, loss of programs or other data, even if Everlume is expressly advised of the possibility of such damages. This exclusion and waiver of liability applies to all causes of action, whether based on contract, warranty, tort or any other legal theories.',
      ],
    },
  ];

  constructor(private readonly elRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.spawnParticles();
    this.initReveal();
    this.initSectionObserver();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.revealObserver?.disconnect();
  }

  protected onNavClick(event: Event, id: string): void {
    event.preventDefault();
    const el = this.elRef.nativeElement.querySelector('#' + id) as HTMLElement | null;
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: 'smooth' });
    this.activeId = id;
  }

  private spawnParticles(): void {
    const container = this.elRef.nativeElement.querySelector('#tc-particles') as HTMLElement | null;
    if (!container) return;
    for (let i = 0; i < 32; i++) {
      const d = document.createElement('div');
      const size = Math.random() * 3.2 + 1.2;
      Object.assign(d.style, {
        position: 'absolute',
        width: `${size}px`, height: `${size}px`,
        borderRadius: '50%',
        background: `rgba(255,255,255,${Math.random() * 0.32 + 0.08})`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animation: `tc-float ${Math.random() * 10 + 8}s ease-in-out infinite`,
        animationDelay: `${Math.random() * 6}s`,
      });
      container.appendChild(d);
    }
    const style = document.createElement('style');
    style.textContent = '@keyframes tc-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-18px)}}';
    document.head.appendChild(style);
  }

  private initReveal(): void {
    this.revealObserver = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) (e.target as HTMLElement).classList.add('is-visible'); }),
      { threshold: 0.12 },
    );
    this.elRef.nativeElement.querySelectorAll('[data-tc-observe]').forEach((el: HTMLElement) => this.revealObserver!.observe(el));
  }

  private initSectionObserver(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeId = (entry.target as HTMLElement).id;
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    );
    this.elRef.nativeElement.querySelectorAll('.tc-section').forEach((el: HTMLElement) => this.observer!.observe(el));
  }
}
