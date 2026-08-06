import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Block {
  type: 'p' | 'h4' | 'ul';
  text?: string;
  items?: string[];
}

interface Section {
  id: string;
  icon: string;
  title: string;
  blocks: Block[];
}

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- BREADCRUMB -->
    <div class="breadcrumb-bar">
      <a routerLink="/">Home</a>
      <span class="sep">></span>
      <span class="current">Privacy Policy</span>
    </div>

    <!-- HERO -->
    <section class="pp-hero">
      <div class="pp-hero__particles" id="pp-particles" aria-hidden="true"></div>
      <div class="pp-hero__glow-1" aria-hidden="true"></div>
      <div class="pp-hero__glow-2" aria-hidden="true"></div>

      <div class="pp-hero__inner">
        <div class="pp-hero__content">
          <span class="pp-hero__badge">
            <span class="pp-hero__badge-dot"></span>Your Privacy Matters
          </span>
          <h1 class="pp-hero__heading">
            Privacy &amp;<br/><em>Data Protection Policy</em>
          </h1>
          <p class="pp-hero__sub">
            At Everlume Solutions, we believe in the confidentiality, integrity and security of every
            piece of information you share with us. This policy explains what we collect, why we
            collect it, how we protect it, and the rights you have over your personal data.
          </p>
          <div class="pp-hero__stats">
            <div class="pp-stat">
              <span class="pp-stat__value">{{ sections.length }}</span>
              <span class="pp-stat__label">Sections</span>
            </div>
            <div class="pp-stat">
              <span class="pp-stat__value">v1.0</span>
              <span class="pp-stat__label">Current Version</span>
            </div>
            <div class="pp-stat">
              <span class="pp-stat__value">Aug 2026</span>
              <span class="pp-stat__label">Last Updated</span>
            </div>
            <div class="pp-stat">
              <span class="pp-stat__value">GDPR</span>
              <span class="pp-stat__label">Compliant</span>
            </div>
          </div>
        </div>

        <div class="pp-hero__visual" aria-hidden="true">
          <div class="pp-viz">
            <div class="pp-viz__ring pp-viz__ring--1"></div>
            <div class="pp-viz__ring pp-viz__ring--2"></div>
            <div class="pp-viz__ring pp-viz__ring--3"></div>
            <div class="pp-viz__core">
              <i class="ph ph-shield-check"></i>
            </div>
            <div class="pp-viz__chip pp-viz__chip--1">
              <i class="ph ph-lock-key"></i><span>Encrypted</span>
            </div>
            <div class="pp-viz__chip pp-viz__chip--2">
              <i class="ph ph-eye-slash"></i><span>Private</span>
            </div>
            <div class="pp-viz__chip pp-viz__chip--3">
              <i class="ph ph-fingerprint"></i><span>Identifiable</span>
            </div>
            <div class="pp-viz__chip pp-viz__chip--4">
              <i class="ph ph-cookie"></i><span>Consent</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- BODY -->
    <section class="pp-body">
      <div class="pp-body__inner">

        <!-- STICKY NAV -->
        <aside class="pp-nav" aria-label="Privacy sections">
          <span class="pp-nav__eyebrow">On This Page</span>
          <nav class="pp-nav__list">
            @for (section of sections; track section.id; let i = $index) {
              <a class="pp-nav__link"
                 [class.pp-nav__link--active]="activeId === section.id"
                 [href]="'#' + section.id"
                 (click)="onNavClick($event, section.id)">
                <span class="pp-nav__num">{{ (i + 1).toString().padStart(2, '0') }}</span>
                <span class="pp-nav__label">{{ section.title }}</span>
              </a>
            }
          </nav>
          <div class="pp-nav__card">
            <i class="ph ph-envelope-simple"></i>
            <div>
              <strong>Privacy Questions?</strong>
              <p>Reach out to our privacy team for data-related concerns or requests.</p>
              <a href="mailto:privacy@everlume.com" class="pp-nav__cta">privacy&#64;everlume.com <i class="ph ph-arrow-right"></i></a>
            </div>
          </div>
        </aside>

        <!-- SECTIONS -->
        <div class="pp-content">
          @for (section of sections; track section.id; let i = $index) {
            <article class="pp-section" [id]="section.id" data-pp-observe>
              <header class="pp-section__head">
                <span class="pp-section__num">{{ (i + 1).toString().padStart(2, '0') }}</span>
                <div class="pp-section__title-wrap">
                  <i class="ph" [class]="'ph ' + section.icon"></i>
                  <h2 class="pp-section__title">{{ section.title }}</h2>
                </div>
              </header>
              <div class="pp-section__body">
                @for (block of section.blocks; track $index) {
                  @if (block.type === 'p') {
                    <p>{{ block.text }}</p>
                  } @else if (block.type === 'h4') {
                    <h4 class="pp-section__subhead">{{ block.text }}</h4>
                  } @else if (block.type === 'ul') {
                    <ul class="pp-section__list">
                      @for (item of block.items; track $index) {
                        <li>{{ item }}</li>
                      }
                    </ul>
                  }
                }
              </div>
            </article>
          }

          <!-- FOOT NOTE -->
          <div class="pp-footnote">
            <i class="ph ph-info"></i>
            <p>
              If you have questions about this Privacy Policy, wish to exercise your rights over
              your personal data, or want to withdraw consent for any processing activity, please
              write to us at <a href="mailto:privacy@everlume.com">privacy&#64;everlume.com</a>.
              We will respond within a reasonable timeframe.
            </p>
          </div>

          <!-- FINAL CTA -->
          <div class="pp-final-cta" data-pp-observe>
            <div>
              <span class="pp-final-cta__eyebrow">Exercise Your Data Rights</span>
              <h3>Talk to our privacy team about your personal information.</h3>
            </div>
            <a routerLink="/contact-us" class="pp-final-cta__btn">
              Contact privacy team
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

/* Breadcrumb */
.breadcrumb-bar { background: var(--teal-dark); padding: 0.55rem 3rem; }
.breadcrumb-bar a, .breadcrumb-bar span { color: rgba(255,255,255,0.65); font-size: 0.8rem; font-weight: 500; text-decoration: none; }
.breadcrumb-bar a:hover { color: #fff; }
.breadcrumb-bar .sep { margin: 0 0.45rem; color: rgba(255,255,255,0.3); }
.breadcrumb-bar .current { color: var(--orange); font-weight: 600; }

/* HERO */
.pp-hero { position: relative; background: linear-gradient(135deg,#0b1e4d 0%,#1B3A8F 55%,#0e2560 100%); padding: 5rem 3rem 4rem; overflow: hidden; }
.pp-hero__particles { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
.pp-hero__glow-1,.pp-hero__glow-2 { position: absolute; border-radius: 50%; filter: blur(90px); pointer-events: none; }
.pp-hero__glow-1 { width: 520px; height: 520px; background: rgba(232,119,34,0.18); top: -120px; right: -80px; }
.pp-hero__glow-2 { width: 380px; height: 380px; background: rgba(27,58,143,0.35); bottom: -100px; left: 5%; }
.pp-hero__inner { position: relative; z-index: 1; max-width: 1180px; margin: 0 auto; display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 3rem; align-items: center; }
.pp-hero__badge { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); border-radius: 999px; padding: 0.35rem 0.85rem; color: #d0deff; font-size: 0.78rem; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 1rem; }
.pp-hero__badge-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--orange); box-shadow: 0 0 8px var(--orange); }
.pp-hero__heading { font-family: 'DM Serif Display',serif; font-size: clamp(2.2rem,4.5vw,3.6rem); line-height: 1.07; color: #fff; margin: 0 0 1rem; }
.pp-hero__heading em { font-style: italic; color: var(--orange); }
.pp-hero__sub { max-width: 62ch; color: rgba(255,255,255,0.72); line-height: 1.72; margin: 0 0 2.2rem; font-size: 1.05rem; }
.pp-hero__stats { display: flex; flex-wrap: wrap; gap: 1rem 2.5rem; }
.pp-stat__value { display: block; font-family: 'DM Serif Display',serif; font-size: 1.85rem; color: #fff; line-height: 1; }
.pp-stat__label { display: block; font-size: 0.8rem; color: rgba(255,255,255,0.55); text-transform: uppercase; letter-spacing: 0.1em; margin-top: 0.28rem; }

.pp-hero__visual { display: flex; align-items: center; justify-content: center; }
.pp-viz { position: relative; width: 320px; height: 320px; flex-shrink: 0; }
.pp-viz__ring { position: absolute; top: 50%; left: 50%; border-radius: 50%; transform: translate(-50%,-50%); border: 1.5px dashed rgba(232,119,34,0.35); }
.pp-viz__ring--1 { width: 300px; height: 300px; animation: pp-spin 26s linear infinite; }
.pp-viz__ring--2 { width: 220px; height: 220px; border-color: rgba(255,255,255,0.14); animation: pp-spin 18s linear infinite reverse; }
.pp-viz__ring--3 { width: 140px; height: 140px; border-color: rgba(232,119,34,0.55); animation: pp-spin 12s linear infinite; }
.pp-viz__core { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 96px; height: 96px; border-radius: 24px; background: linear-gradient(135deg,var(--orange),#b84e0b); display: flex; align-items: center; justify-content: center; box-shadow: 0 0 28px rgba(232,119,34,0.55), 0 0 60px rgba(232,119,34,0.18); }
.pp-viz__core i { color: #fff; font-size: 2.4rem; }
.pp-viz__chip { position: absolute; display: inline-flex; align-items: center; gap: 0.42rem; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.15); border-radius: 10px; padding: 0.45rem 0.75rem; color: #e8eeff; font-size: 0.78rem; font-weight: 600; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); animation: pp-float-chip 4s ease-in-out infinite; }
.pp-viz__chip i { color: var(--orange); font-size: 0.95rem; }
.pp-viz__chip--1 { top: 5%;  left: -10%; animation-delay: 0s;   }
.pp-viz__chip--2 { top: 5%;  right: -6%; animation-delay: 1s;  }
.pp-viz__chip--3 { bottom: 6%; left: -12%; animation-delay: 2s; }
.pp-viz__chip--4 { bottom: 6%; right: -6%; animation-delay: 1.5s; }
@keyframes pp-spin { to { transform: translate(-50%,-50%) rotate(360deg); } }
@keyframes pp-float-chip { 0%,100% { transform: translateY(0);} 50% { transform: translateY(-7px);} }

/* BODY */
.pp-body { background: #f4f7fd; padding: 3.5rem 3rem 5rem; }
.pp-body__inner { max-width: 1180px; margin: 0 auto; display: grid; grid-template-columns: 0.85fr 1.55fr; gap: 2.4rem; align-items: start; }

/* Sticky nav */
.pp-nav { position: sticky; top: 90px; display: flex; flex-direction: column; gap: 1.1rem; }
.pp-nav__eyebrow { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.14em; color: var(--orange); }
.pp-nav__list { display: flex; flex-direction: column; gap: 0.15rem; background: #fff; border: 1px solid var(--line); border-radius: 14px; padding: 0.55rem; box-shadow: 0 10px 24px -18px rgba(18,47,113,0.3); }
.pp-nav__link { display: flex; align-items: center; gap: 0.7rem; padding: 0.55rem 0.7rem; border-radius: 10px; text-decoration: none; color: var(--mid); font-size: 0.86rem; font-weight: 500; transition: background 0.2s ease, color 0.2s ease; border-left: 3px solid transparent; }
.pp-nav__link:hover { background: #f4f7fd; color: var(--dark); }
.pp-nav__link--active { background: linear-gradient(90deg, rgba(232,119,34,0.12), rgba(27,58,143,0.05)); color: var(--blue); border-left-color: var(--orange); font-weight: 700; }
.pp-nav__num { font-size: 0.72rem; font-weight: 700; color: var(--orange); font-family: ui-monospace, monospace; letter-spacing: 0.06em; }
.pp-nav__label { flex: 1; line-height: 1.3; }
.pp-nav__card { display: flex; gap: 0.75rem; background: linear-gradient(160deg,#1B3A8F,#0c1836); border-radius: 16px; padding: 1.1rem; color: #fff; }
.pp-nav__card i { flex-shrink: 0; width: 34px; height: 34px; display: flex; align-items: center; justify-content: center; border-radius: 10px; background: rgba(255,255,255,0.1); color: var(--orange); font-size: 1.1rem; }
.pp-nav__card strong { display: block; font-size: 0.95rem; margin-bottom: 0.25rem; }
.pp-nav__card p { margin: 0 0 0.55rem; color: rgba(255,255,255,0.7); font-size: 0.82rem; line-height: 1.55; }
.pp-nav__cta { color: var(--orange); font-size: 0.82rem; font-weight: 700; text-decoration: none; display: inline-flex; align-items: center; gap: 0.35rem; word-break: break-all; }
.pp-nav__cta:hover { color: #fff; }

/* Content */
.pp-content { display: flex; flex-direction: column; gap: 1.3rem; }
.pp-section { background: #fff; border: 1px solid var(--line); border-radius: 18px; padding: 1.7rem 1.8rem; box-shadow: 0 18px 42px -30px rgba(18,47,113,0.35); scroll-margin-top: 100px; opacity: 0; transform: translateY(24px); transition: opacity 0.5s ease, transform 0.5s ease; }
.pp-section.is-visible { opacity: 1; transform: none; }
.pp-section__head { display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1rem; padding-bottom: 0.9rem; border-bottom: 1px solid #edf2fc; }
.pp-section__num { flex-shrink: 0; width: 44px; height: 44px; border-radius: 12px; background: linear-gradient(135deg, var(--orange), var(--blue)); color: #fff; font-family: 'DM Serif Display', serif; font-size: 1.15rem; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 18px -8px rgba(232,119,34,0.55); }
.pp-section__title-wrap { display: flex; align-items: center; gap: 0.6rem; padding-top: 0.35rem; }
.pp-section__title-wrap i.ph { color: var(--orange); font-size: 1.3rem; }
.pp-section__title { font-family: 'DM Serif Display', serif; font-size: clamp(1.3rem, 2vw, 1.6rem); margin: 0; color: var(--dark); }
.pp-section__body p { margin: 0 0 0.85rem; color: var(--mid); font-size: 0.98rem; line-height: 1.75; }
.pp-section__body p:last-child { margin-bottom: 0; }
.pp-section__subhead { font-family: 'DM Sans', system-ui, sans-serif; font-size: 1rem; color: var(--dark); margin: 1.1rem 0 0.55rem; font-weight: 700; display: flex; align-items: center; gap: 0.45rem; }
.pp-section__subhead::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--orange); }
.pp-section__list { margin: 0 0 0.85rem; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 0.5rem; }
.pp-section__list li { position: relative; padding-left: 1.4rem; color: var(--mid); font-size: 0.96rem; line-height: 1.7; }
.pp-section__list li::before { content: ''; position: absolute; left: 0; top: 0.6rem; width: 8px; height: 8px; border-radius: 3px; background: linear-gradient(135deg, var(--orange), var(--blue)); }

/* Footnote */
.pp-footnote { display: flex; gap: 0.9rem; background: #fff8f2; border: 1px dashed #f5b382; border-radius: 14px; padding: 1.1rem 1.2rem; }
.pp-footnote i { flex-shrink: 0; font-size: 1.4rem; color: var(--orange); margin-top: 2px; }
.pp-footnote p { margin: 0; color: #7a3e12; font-size: 0.88rem; line-height: 1.65; }
.pp-footnote a { color: #b84e0b; font-weight: 700; text-decoration: none; border-bottom: 1px dashed #f5b382; }
.pp-footnote a:hover { color: var(--orange); }

/* Final CTA */
.pp-final-cta { display: flex; align-items: center; justify-content: space-between; gap: 1.5rem; background: linear-gradient(130deg,#0c1836,#1B3A8F); border-radius: 20px; padding: 1.7rem 1.9rem; color: #fff; opacity: 0; transform: translateY(24px); transition: opacity 0.5s ease, transform 0.5s ease; }
.pp-final-cta.is-visible { opacity: 1; transform: none; }
.pp-final-cta__eyebrow { display: block; font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.14em; color: var(--orange); margin-bottom: 0.35rem; }
.pp-final-cta h3 { font-family: 'DM Serif Display', serif; font-size: clamp(1.15rem, 2vw, 1.45rem); margin: 0; color: #fff; line-height: 1.35; }
.pp-final-cta__btn { display: inline-flex; align-items: center; gap: 0.55rem; padding: 0.85rem 1.35rem; border-radius: 999px; background: linear-gradient(135deg, var(--orange), #b84e0b); color: #fff; text-decoration: none; font-weight: 700; font-size: 0.95rem; white-space: nowrap; transition: transform 0.2s ease, box-shadow 0.2s ease; }
.pp-final-cta__btn:hover { transform: translateY(-2px); box-shadow: 0 14px 28px -12px rgba(232,119,34,0.6); }

/* Responsive */
@media (max-width: 1024px) {
  .pp-hero__inner { grid-template-columns: 1fr; }
  .pp-hero__visual { display: none; }
  .pp-body__inner { grid-template-columns: 1fr; }
  .pp-nav { position: static; }
  .pp-nav__list { flex-direction: row; flex-wrap: wrap; }
  .pp-nav__link { flex: 1 1 auto; }
  .pp-nav__card { display: none; }
}
@media (max-width: 768px) {
  .breadcrumb-bar { padding: 0.55rem 1rem; margin-top: 58px; }
  .pp-hero { padding: 3.5rem 1.25rem 2.5rem; }
  .pp-body { padding: 2.2rem 1.25rem 3.5rem; }
  .pp-section { padding: 1.3rem; }
  .pp-final-cta { flex-direction: column; align-items: stretch; text-align: center; }
}
@media (max-width: 480px) {
  .pp-hero__heading { font-size: 2rem; }
}
  `],
})
export class PrivacyPolicy implements AfterViewInit, OnDestroy {
  protected activeId = '';
  private observer?: IntersectionObserver;
  private revealObserver?: IntersectionObserver;

  readonly sections: Section[] = [
    {
      id: 'our-commitment',
      icon: 'ph-shield-check',
      title: 'Our Commitment to Your Privacy',
      blocks: [
        { type: 'p', text: 'Everlume Solutions believes in the confidentiality, integrity, and security of the information that is made available or revealed by the user on the website. We also understand the importance of the nature of the information and the need for securing the same.' },
        { type: 'p', text: 'Everlume upholds strict standards of confidentiality, integrity and security for every piece of information you share with us. We recognise how sensitive personal data can be and continually invest in the controls required to keep it safe.' },
        { type: 'p', text: 'No information held by Everlume is shared in breach of the confidentiality and non-disclosure agreements we have with our customers and clients.' },
      ],
    },
    {
      id: 'scope',
      icon: 'ph-globe',
      title: 'Scope & Applicability',
      blocks: [
        { type: 'p', text: 'This Privacy Policy applies to all visitors, users and others who access or use the website https://www.everlume.com/. Except as otherwise provided in this Policy, you can generally visit or use our sites and apps without identifying who you are. In certain circumstances, however, Everlume requires the user to disclose their identity — in those cases you may be required to reveal your true and correct information.' },
        { type: 'p', text: 'This Privacy Policy is intended to inform you about the personal information we collect, the purpose of collection, what we do with it (use), how we process, share and transfer that information, and the rights you have over the personal information shared with us.' },
      ],
    },
    {
      id: 'personal-information',
      icon: 'ph-identification-card',
      title: 'Personal Information We Collect',
      blocks: [
        { type: 'p', text: 'Personal Information means any information that identifies you as an individual (the "data subject", referred to as "you" or "your") along with any other information we associate with it. Using a common identifier, this includes but is not limited to first and last name, email address, telephone number, occupation, profession, and other information needed to provide a service that you have requested.' },
        { type: 'p', text: 'For the purposes of this privacy statement, "Personal data" is any data which relates to an individual who may be identified from that data, or from a combination of a set of data and other information which is in the possession of Everlume.' },
        { type: 'p', text: 'Depending on the site or app you use and the context of your interaction, we may collect the following information — either from what you share with us or automatically whenever you visit our sites and apps:' },
        { type: 'h4', text: 'Contact Information' },
        { type: 'p', text: 'Name, address, city, state, postal or ZIP code, country, phone number and email address.' },
        { type: 'h4', text: 'Demographic Information' },
        { type: 'p', text: 'Country of origin and employer details.' },
        { type: 'h4', text: 'Our Career Portal' },
        { type: 'p', text: 'Our site may include a link to our Career section. This privacy policy applies to any personal data submitted through that portion of the site, whether by upload or via email.' },
        { type: 'h4', text: 'Internet & Network Activity' },
        { type: 'p', text: 'We use cookies to collect data on how you use our websites, including your IP address, internet domain, browser type, type of operating system, domain name of your internet service provider, pages visited, and length of time spent on the site.' },
        { type: 'h4', text: 'Social Media Widgets' },
        { type: 'p', text: 'Our sites and applications may include social media features connected with platforms such as Facebook, Twitter, Instagram, YouTube, LinkedIn, and others. Your interactions with those features are governed by the privacy policies of the companies that provide them.' },
      ],
    },
    {
      id: 'cookies',
      icon: 'ph-cookie',
      title: 'Cookies & Tracking Technologies',
      blocks: [
        { type: 'p', text: 'Cookies are small text files that a website downloads onto your computer or other internet-enabled devices (such as mobile phones and tablets) when you visit a website. The cookie helps in the recognition of your device the next time you visit.' },
        { type: 'p', text: 'We sometimes collect anonymous information from visits to our website to help us provide better customer service. For example, we keep track of the domains from which people visit and we measure visitor activity on Everlume websites, but we do so in ways that keep the information anonymous. Everlume, its affiliates or vendors may use this data to analyse trends and statistics and to help us improve our service. We follow reasonable security practices to protect the information of the user, and our affiliates and vendors maintain the same high levels of confidentiality. This anonymous information is used and analysed only at an aggregate level to help us understand trends and patterns — none of it is reviewed at an individual level.' },
        { type: 'p', text: 'If you do not want your transaction details used in this manner, you can either disable your cookies or opt-out at the download or request page. Our use of cookies to process personal data is explained in our cookie policy, which we invite you to read.' },
        { type: 'p', text: 'You can block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies. However, if you use your browser settings to block all cookies (including essential cookies), you may not be able to access all or parts of our site, or they may not function properly.' },
        { type: 'h4', text: 'Types of cookies used on our site' },
        { type: 'p', text: 'Essential Cookies — Required to enable you to log into secure areas of our site. Disabling these cookies may make certain features and services unavailable.' },
        { type: 'p', text: 'Functionality Cookies — Record your preferences and settings regarding our services, enabling us to maintain your preferences over time and recognise you when you visit our site again. These cookies help us personalise our content for you and greet you by name.' },
        { type: 'p', text: 'Performance / Analytical Cookies — Allow us to understand how visitors use our site and services, what pages they visit, how long they stay on the site, and similar behaviour. They also help us measure the performance of our advertising campaigns.' },
        { type: 'p', text: 'Retargeting / Advertising Cookies — Collect data about your online activities and identify your interests so that we can provide advertising that we believe is relevant to you.' },
      ],
    },
    {
      id: 'legal-basis',
      icon: 'ph-scales',
      title: 'Legal Basis for Processing',
      blocks: [
        { type: 'h4', text: 'Consent' },
        { type: 'p', text: 'Where we process personal data based on consent, you will have the option to opt out and the ability to withdraw your consent at any time. If at any point you wish to unsubscribe from our communications, opt out of our services, or have any queries or concerns regarding the personal data we process, please contact us at privacy@everlume.com.' },
        { type: 'h4', text: 'Contract' },
        { type: 'p', text: 'When we need to carry out a contract with you that we are about to enter or have already entered. This applies in any case where we provide services to you pursuant to a contract. If you do not provide the personal data that we need to deliver our services, we may not be able to serve you.' },
        { type: 'h4', text: 'Legal or Regulatory Obligation' },
        { type: 'p', text: 'This includes records keeping and performing compliance reviews (e.g., anti-money laundering and financial checks). It covers automatic checks of the personal data you submit against appropriate databases, as well as contacting you to confirm your identity for compliance purposes or maintaining records of our communication for compliance purposes.' },
        { type: 'h4', text: 'Legitimate Interests' },
        { type: 'p', text: 'Wherever necessary for our legitimate interests — such as conducting and developing our business, meeting and anticipating the requirements of our current and prospective customers, applying appropriate controls to ensure our website, processes and procedures are running effectively, preventing and detecting fraud, and safeguarding IT security.' },
      ],
    },
    {
      id: 'security-consequences',
      icon: 'ph-lock-key',
      title: 'Data Security & Consequences of Not Providing Data',
      blocks: [
        { type: 'p', text: 'If you choose not to provide personal data that is mandatory for processing your request, we may not be able to provide the corresponding service.' },
        { type: 'p', text: 'Everlume has implemented technological and operational security processes to protect information from loss, misuse, alteration, or unintentional destruction. While no security measure can guarantee against compromise, we regularly review and update our security measures in accordance with industry standards to provide appropriate security for all information held by the Company.' },
      ],
    },
    {
      id: 'sharing',
      icon: 'ph-share-network',
      title: 'Information Sharing & Third Parties',
      blocks: [
        { type: 'p', text: 'Everlume does not rent, sell or share personal information about the user with any third party except to provide the products or services you have requested, when we have your permission, or under the specific circumstances outlined below.' },
        { type: 'p', text: 'We may share information with trusted partners who work on behalf of or with Everlume under extremely strict confidentiality agreements. These partners may use your personal information to help Everlume communicate with you about offers from Everlume and our marketing partners. However, these partners do not have any independent right to share this information.' },
        { type: 'p', text: 'We may also share information: with parental permission when the user is a child under the age of 13; in response to summons, court orders or legal process, or to establish or exercise our legal rights or defend against legal claims; when we believe it is necessary to investigate, prevent or act regarding illegal activities, suspected fraud, situations involving potential threats to the physical safety of any person, or as otherwise required by law; and when Everlume is acquired by or merged with another company.' },
        { type: 'p', text: 'Depending on your relationship with us, we may receive information about you from other sources — including data vendors, consulting firms, background-check service providers, and social media — to ensure the accuracy and completeness of your personal data. You may choose to give us personal information such as your name, address or email that may be needed to correspond with you, to download white papers or to provide you with a subscription. If you tell us that you do not want us to use this information as a basis for further contact with you, we will respect your wishes.' },
        { type: 'p', text: 'We intend to protect the quality and integrity of your personally identifiable information and will make a sincere effort to respond in a timely manner to your requests to correct inaccuracies. To do so, please return the message containing the inaccuracies to the sender along with the details of the correction requested.' },
        { type: 'h4', text: 'Categories of CPRA third parties with whom we share information' },
        { type: 'ul', items: [
          'Affiliates',
          'Vendors and service providers, including for data analytics and marketing or advertising our products and services to you',
          'Third parties integrated into our services',
          'Third parties as required by law and similar disclosures',
          'Third parties in connection with a merger, sale, or asset transfer',
          'Other third parties for whom we have obtained your permission to disclose your personal information',
        ]},
      ],
    },
    {
      id: 'retention',
      icon: 'ph-database',
      title: 'Data Storage & Retention',
      blocks: [
        { type: 'p', text: 'Your personal data processed by Everlume is kept in a form that permits your identification for no longer than is necessary for the purposes for which it is processed, in line with legal, regulatory, contractual, or statutory obligations as applicable. At the expiry of such periods, your personal data will be deleted or archived to comply with legal or contractual retention obligations or in accordance with applicable statutory limitation periods.' },
      ],
    },
    {
      id: 'antispam',
      icon: 'ph-envelope-simple-open',
      title: 'Antispam Policy',
      blocks: [
        { type: 'p', text: 'Everlume recognises the receipt, transmission, or distribution of spam emails (unsolicited bulk emails) as a major concern and has taken reasonable measures to minimise the transmission and effect of spam emails in its computing environment. All emails received by Everlume are subject to a spam check, in coordination with Anti-Threat Protection, Anti-Spam and Anti-Malware Protection services. Any email identified as spam will be rejected, with sufficient information provided to the sender for taking necessary action.' },
        { type: 'p', text: 'With this measure — along with other technical spam-reduction measures — Everlume aims to minimise the effect of spam emails. Everlume reserves the right to reject and/or report any suspicious spam emails to the authorities concerned for necessary action from time to time.' },
      ],
    },
    {
      id: 'modifications',
      icon: 'ph-note-pencil',
      title: 'Modifications to This Statement',
      blocks: [
        { type: 'p', text: 'The Company reserves the right to change, modify or update this statement at any time. We indicate the date of the current statement so you know when it was last updated. Continued use of the website after any such revision or modification constitutes your acceptance of the privacy statement as revised or modified, where permitted by law.' },
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
    const container = this.elRef.nativeElement.querySelector('#pp-particles') as HTMLElement | null;
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
        animation: `pp-float ${Math.random() * 10 + 8}s ease-in-out infinite`,
        animationDelay: `${Math.random() * 6}s`,
      });
      container.appendChild(d);
    }
    const style = document.createElement('style');
    style.textContent = '@keyframes pp-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-18px)}}';
    document.head.appendChild(style);
  }

  private initReveal(): void {
    this.revealObserver = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) (e.target as HTMLElement).classList.add('is-visible'); }),
      { threshold: 0.12 },
    );
    this.elRef.nativeElement.querySelectorAll('[data-pp-observe]').forEach((el: HTMLElement) => this.revealObserver!.observe(el));
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
    this.elRef.nativeElement.querySelectorAll('.pp-section').forEach((el: HTMLElement) => this.observer!.observe(el));
  }
}
