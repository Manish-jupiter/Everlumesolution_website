import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <!-- BREADCRUMB -->
    <div class="breadcrumb-bar">
      <a routerLink="/">Home</a>
      <span class="sep">></span>
      <span class="current">Contact Us</span>
    </div>

    <!-- HERO BAND -->
    <section class="cu-hero" id="cu-hero">
      <div class="cu-hero__particles" id="cu-particles"></div>
      <div class="cu-hero__glow-1"></div>
      <div class="cu-hero__glow-2"></div>
      <div class="cu-hero__inner">
        <div class="cu-hero__content">
          <span class="cu-hero__badge">
            <span class="cu-hero__badge-dot"></span>Get In Touch
          </span>
          <h1 class="cu-hero__heading">Let's Build Something<br/><em>Remarkable Together</em></h1>
          <p class="cu-hero__sub">
            Whether you are planning a new product, modernising legacy infrastructure, or exploring AI and data
            transformation — our teams are ready to work with you from strategy to delivery.
          </p>
          <div class="cu-hero__stats">
            <div class="cu-stat">
              <span class="cu-stat__value">&lt;&nbsp;24h</span>
              <span class="cu-stat__label">First Response</span>
            </div>
            <div class="cu-stat">
              <span class="cu-stat__value">50+</span>
              <span class="cu-stat__label">Expert Specialists</span>
            </div>
            <div class="cu-stat">
              <span class="cu-stat__value">Global</span>
              <span class="cu-stat__label">Delivery Teams</span>
            </div>
            <div class="cu-stat">
              <span class="cu-stat__value">100%</span>
              <span class="cu-stat__label">Secure Engagement</span>
            </div>
          </div>
        </div>

        <!-- Abstract communication network visual -->
        <div class="cu-hero__visual" aria-hidden="true">
          <div class="cu-viz">
            <!-- SVG rings + dashed lines to corner chips -->
            <svg class="cu-viz__lines" viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="170" cy="170" r="148" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
              <circle cx="170" cy="170" r="104" stroke="rgba(27,58,143,0.45)" stroke-width="1"/>
              <circle cx="170" cy="170" r="62" stroke="rgba(232,119,34,0.22)" stroke-width="1"/>
              <line x1="170" y1="170" x2="46" y2="32" stroke="rgba(255,255,255,0.1)" stroke-width="1" stroke-dasharray="4 5"/>
              <line x1="170" y1="170" x2="294" y2="32" stroke="rgba(255,255,255,0.1)" stroke-width="1" stroke-dasharray="4 5"/>
              <line x1="170" y1="170" x2="46" y2="308" stroke="rgba(255,255,255,0.1)" stroke-width="1" stroke-dasharray="4 5"/>
              <line x1="170" y1="170" x2="294" y2="308" stroke="rgba(255,255,255,0.1)" stroke-width="1" stroke-dasharray="4 5"/>
              <!-- decorative arc nodes on middle ring -->
              <circle cx="170" cy="66" r="4" fill="rgba(255,255,255,0.18)"/>
              <circle cx="274" cy="170" r="4" fill="rgba(232,119,34,0.4)"/>
              <circle cx="170" cy="274" r="4" fill="rgba(255,255,255,0.18)"/>
              <circle cx="66" cy="170" r="4" fill="rgba(232,119,34,0.4)"/>
            </svg>

            <!-- Dashed rotating ring -->
            <div class="cu-viz__spin-ring"></div>

            <!-- Central hub -->
            <div class="cu-viz__core">
              <div class="cu-viz__pulse"></div>
              <div class="cu-viz__pulse cu-viz__pulse--2"></div>
              <div class="cu-viz__core-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
            </div>

            <!-- Orbiting dots -->
            <div class="cu-viz__orbit cu-viz__orbit--a"><div class="cu-viz__orb-dot cu-viz__orb-dot--orange"></div></div>
            <div class="cu-viz__orbit cu-viz__orbit--b"><div class="cu-viz__orb-dot cu-viz__orb-dot--white"></div></div>
            <div class="cu-viz__orbit cu-viz__orbit--c"><div class="cu-viz__orb-dot cu-viz__orb-dot--blue"></div></div>

            <!-- Floating info chips -->
            <div class="cu-viz__chip cu-viz__chip--1">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>&lt;&nbsp;24h Response</span>
            </div>
            <div class="cu-viz__chip cu-viz__chip--2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span>100% Secure</span>
            </div>
            <div class="cu-viz__chip cu-viz__chip--3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              <span>Global Teams</span>
            </div>
            <div class="cu-viz__chip cu-viz__chip--4">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              <span>50+ Experts</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- BODY -->
    <section class="cu-body">
      <div class="cu-body__inner">

        <!-- LEFT INFO -->
        <aside class="cu-info">
          <div class="cu-info__intro" data-cu-reveal>
            <span class="cu-info__eyebrow">Why Work With Us</span>
            <h2 class="cu-info__heading">We Deliver. <em>Every Time.</em></h2>
            <p class="cu-info__text">
              Everlume brings enterprise-grade engineering, AI, and cloud expertise to help
              organisations accelerate their most critical programs. Every engagement begins with
              listening and ends with measurable outcomes.
            </p>
          </div>

          <ul class="cu-steps" data-cu-reveal>
            <li class="cu-step">
              <span class="cu-step__num">01</span>
              <div>
                <strong>Submit Your Enquiry</strong>
                <p>Fill in the form and tell us what you are working on.</p>
              </div>
            </li>
            <li class="cu-step">
              <span class="cu-step__num">02</span>
              <div>
                <strong>Discovery Call</strong>
                <p>We review your brief and schedule a focused session within 24 hours.</p>
              </div>
            </li>
            <li class="cu-step">
              <span class="cu-step__num">03</span>
              <div>
                <strong>Tailored Solution Plan</strong>
                <p>We share a practical path with effort, timeline, and team structure.</p>
              </div>
            </li>
          </ul>

          <div class="cu-contacts" data-cu-reveal>
            <div class="cu-contact-item">
              <div class="cu-contact-item__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <span>Email</span>
                <a href="mailto:contact@everlume.com">contact&#64;everlume.com</a>
              </div>
            </div>
            <div class="cu-contact-item">
              <div class="cu-contact-item__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.61 5a2 2 0 0 1 1.95-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10a16 16 0 0 0 6 6l.9-.9a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <span>Phone</span>
                <a href="tel:+10000000000">+1 (000) 000-0000</a>
              </div>
            </div>
            <div class="cu-contact-item">
              <div class="cu-contact-item__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <span>Business Hours</span>
                <p>Mon – Fri, 9:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>
        </aside>

        <!-- FORM PANEL -->
        <section class="cu-form-panel" [class.cu-form-panel--shake]="formShake" data-cu-reveal>
          <div class="cu-form-panel__head">
            <h2>Send Us A Message</h2>
            <p>Fields marked <em>*</em> are required. We typically respond within one business day.</p>
            <div class="cu-progress">
              <div class="cu-progress__bar"><div class="cu-progress__fill" [style.width.%]="formProgress"></div></div>
              <span class="cu-progress__label">{{ formProgress }}% complete</span>
            </div>
          </div>

          <div *ngIf="errorMessage" class="cu-error">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <div>
              <strong>Delivery Failed</strong>
              <span>{{ errorMessage }}</span>
            </div>
          </div>

          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" novalidate>

            <div class="cu-form-section">
              <div class="cu-form-section__label">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                Your Details
              </div>
              <div class="cu-form-grid">
                <div class="cu-field" [class.cu-field--ok]="showSuccess('name')" [class.cu-field--err]="showError('name')">
                  <label for="cu-name">Full Name <em>*</em></label>
                  <div class="cu-input-wrap">
                    <svg class="cu-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    <input id="cu-name" type="text" formControlName="name" placeholder="Jane Doe" autocomplete="name" />
                    <span class="cu-input-status" *ngIf="showSuccess('name') || showError('name')">
                      <svg *ngIf="showSuccess('name')" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      <svg *ngIf="showError('name')" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </span>
                  </div>
                  <div class="cu-field-msg" *ngIf="showError('name')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    <span *ngIf="contactForm.controls['name'].errors?.['required']">Full name is required.</span>
                    <span *ngIf="contactForm.controls['name'].errors?.['minlength']">Name must be at least 2 characters.</span>
                  </div>
                </div>
                <div class="cu-field" [class.cu-field--ok]="showSuccess('organisation')" [class.cu-field--err]="showError('organisation')">
                  <label for="cu-org">Organisation <em>*</em></label>
                  <div class="cu-input-wrap">
                    <svg class="cu-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                    <input id="cu-org" type="text" formControlName="organisation" placeholder="Your company" autocomplete="organization" />
                    <span class="cu-input-status" *ngIf="showSuccess('organisation') || showError('organisation')">
                      <svg *ngIf="showSuccess('organisation')" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      <svg *ngIf="showError('organisation')" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </span>
                  </div>
                  <div class="cu-field-msg" *ngIf="showError('organisation')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    <span>Organisation name is required.</span>
                  </div>
                </div>
                <div class="cu-field" [class.cu-field--ok]="showSuccess('phone')" [class.cu-field--err]="showError('phone')">
                  <label for="cu-phone">Phone Number <em>*</em></label>
                  <div class="cu-input-wrap">
                    <svg class="cu-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.61 5a2 2 0 0 1 1.95-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10a16 16 0 0 0 6 6l.9-.9a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    <input id="cu-phone" type="tel" formControlName="phone" placeholder="10-digit number" autocomplete="tel" maxlength="10" inputmode="numeric" />
                    <span class="cu-input-status" *ngIf="showSuccess('phone') || showError('phone')">
                      <svg *ngIf="showSuccess('phone')" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      <svg *ngIf="showError('phone')" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </span>
                  </div>
                  <div class="cu-field-msg" *ngIf="showError('phone')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    <span *ngIf="contactForm.controls['phone'].errors?.['required']">Phone number is required.</span>
                    <span *ngIf="contactForm.controls['phone'].errors?.['pattern']">Enter exactly 10 digits (numbers only, no spaces or symbols).</span>
                  </div>
                </div>
                <div class="cu-field" [class.cu-field--ok]="showSuccess('email')" [class.cu-field--err]="showError('email')">
                  <label for="cu-email">Email Address <em>*</em></label>
                  <div class="cu-input-wrap">
                    <svg class="cu-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    <input id="cu-email" type="email" formControlName="email" placeholder="you&#64;company.com" autocomplete="email" />
                    <span class="cu-input-status" *ngIf="showSuccess('email') || showError('email')">
                      <svg *ngIf="showSuccess('email')" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      <svg *ngIf="showError('email')" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </span>
                  </div>
                  <div class="cu-field-msg" *ngIf="showError('email')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    <span *ngIf="contactForm.controls['email'].errors?.['required']">Email address is required.</span>
                    <span *ngIf="contactForm.controls['email'].errors?.['email']">Enter a valid email like name&#64;company.com.</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="cu-form-section">
              <div class="cu-form-section__label">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                Project Info
              </div>
              <div class="cu-form-grid">
                <div class="cu-field" [class.cu-field--ok]="showSuccess('serviceInterest')" [class.cu-field--err]="showError('serviceInterest')">
                  <label for="cu-service">Service Interest <em>*</em></label>
                  <div class="cu-input-wrap cu-input-wrap--select">
                    <svg class="cu-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    <select id="cu-service" formControlName="serviceInterest">
                      <option value="" disabled>Select an area</option>
                      <option>Digital Product Engineering</option>
                      <option>Data Services</option>
                      <option>AI Services</option>
                      <option>Cloud Engineering</option>
                      <option>Managed Services</option>
                      <option>Healthcare AI Solutions</option>
                      <option>Banking AI Solutions</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div class="cu-field-msg" *ngIf="showError('serviceInterest')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    <span>Please select a service area.</span>
                  </div>
                </div>
                <div class="cu-field" [class.cu-field--ok]="showSuccess('timeline')" [class.cu-field--err]="showError('timeline')">
                  <label for="cu-timeline">Preferred Timeline <em>*</em></label>
                  <div class="cu-input-wrap cu-input-wrap--select">
                    <svg class="cu-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    <select id="cu-timeline" formControlName="timeline">
                      <option value="" disabled>Select timeline</option>
                      <option>Immediate – Within 2 weeks</option>
                      <option>Short-term – Within 30 days</option>
                      <option>Medium-term – 1 to 3 months</option>
                      <option>Planning phase – 3+ months</option>
                    </select>
                  </div>
                  <div class="cu-field-msg" *ngIf="showError('timeline')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    <span>Please select a preferred timeline.</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="cu-form-section">
              <div class="cu-form-section__label">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                Your Message
              </div>
              <div class="cu-field cu-field--full" [class.cu-field--ok]="showSuccess('message')" [class.cu-field--err]="showError('message')">
                <label for="cu-message">Message <em>*</em>
                  <span class="cu-char-counter" [class.cu-char-counter--warn]="messageLength > 900">{{ messageLength }} / 1000</span>
                </label>
                <textarea id="cu-message" formControlName="message" rows="5"
                  placeholder="Describe your objective, current challenge, and desired outcome…"
                  maxlength="1000"></textarea>
                <div class="cu-field-msg" *ngIf="showError('message')">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  <span *ngIf="contactForm.controls['message'].errors?.['required']">Please describe your objective.</span>
                  <span *ngIf="contactForm.controls['message'].errors?.['minlength']">Write at least 20 characters ({{ messageLength }}/20 so far).</span>
                </div>
              </div>
            </div>

            <div class="cu-consent" [class.cu-consent--err]="showError('consent')">
              <label class="cu-checkbox">
                <input type="checkbox" formControlName="consent" />
                <span class="cu-checkbox__box"></span>
                <span class="cu-checkbox__text">I agree to be contacted by Everlume Solutions regarding this enquiry.</span>
              </label>
              <div class="cu-field-msg" *ngIf="showError('consent')">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                <span>You must accept to submit this form.</span>
              </div>
            </div>

            <div class="cu-form-footer">
              <button class="cu-submit" type="submit" [disabled]="isSubmitting">
                <span *ngIf="!isSubmitting">Send Message
                  <svg viewBox="0 0 18 18" fill="none"><path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </span>
                <span *ngIf="isSubmitting" class="cu-spinner"></span>
              </button>
            </div>
          </form>
        </section>

      </div>
    </section>

    <!-- SUCCESS MODAL -->
    <div class="cu-modal" *ngIf="showSuccessModal" (click)="closeSuccessModal()">
      <div class="cu-modal__card" (click)="$event.stopPropagation()" role="dialog" aria-modal="true" aria-labelledby="cu-modal-title">
        <button type="button" class="cu-modal__close" aria-label="Close" (click)="closeSuccessModal()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>

        <div class="cu-modal__confetti">
          <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
        </div>

        <div class="cu-modal__badge">
          <div class="cu-modal__badge-ring"></div>
          <div class="cu-modal__badge-ring cu-modal__badge-ring--2"></div>
          <div class="cu-modal__badge-core">
            <svg viewBox="0 0 52 52" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="14 27 22 35 38 18" class="cu-modal__check-path"/>
            </svg>
          </div>
        </div>

        <h3 id="cu-modal-title" class="cu-modal__title">Message Sent Successfully!</h3>
        <p class="cu-modal__text">
          Thank you for reaching out. Your enquiry has been delivered to our team and we will be in touch
          within <strong>one business day</strong>.
        </p>

        <div class="cu-modal__ref">
          <span class="cu-modal__ref-label">Reference ID</span>
          <span class="cu-modal__ref-value">{{ referenceId }}</span>
        </div>

        <div class="cu-modal__meta">
          <div class="cu-modal__meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <div><span>Delivered to</span><strong>Our contact team</strong></div>
          </div>
          <div class="cu-modal__meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <div><span>Response time</span><strong>&lt; 24 hours</strong></div>
          </div>
        </div>

        <button type="button" class="cu-modal__cta" (click)="closeSuccessModal()">
          Close
          <svg viewBox="0 0 18 18" fill="none"><path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </div>
    </div>
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
.breadcrumb-bar { background: var(--teal-dark); padding: 0.55rem 3rem; }
.breadcrumb-bar a, .breadcrumb-bar span { color: rgba(255,255,255,0.65); font-size: 0.8rem; font-weight: 500; text-decoration: none; }
.breadcrumb-bar a:hover { color: #fff; }
.breadcrumb-bar .sep { margin: 0 0.45rem; color: rgba(255,255,255,0.3); }
.breadcrumb-bar .current { color: var(--orange); font-weight: 600; }
.cu-hero { position: relative; background: linear-gradient(135deg,#0b1e4d 0%,#1B3A8F 55%,#0e2560 100%); padding: 5rem 3rem 4rem; overflow: hidden; }
.cu-hero__particles { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
.cu-hero__glow-1,.cu-hero__glow-2 { position: absolute; border-radius: 50%; filter: blur(90px); pointer-events: none; }
.cu-hero__glow-1 { width: 520px; height: 520px; background: rgba(232,119,34,0.18); top: -120px; right: -80px; }
.cu-hero__glow-2 { width: 380px; height: 380px; background: rgba(27,58,143,0.35); bottom: -100px; left: 5%; }
.cu-hero__inner { position: relative; z-index: 1; max-width: 1180px; margin: 0 auto; display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 3rem; align-items: center; }
.cu-hero__badge { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); border-radius: 999px; padding: 0.35rem 0.85rem; color: #d0deff; font-size: 0.78rem; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 1rem; }
.cu-hero__badge-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--orange); box-shadow: 0 0 8px var(--orange); }
.cu-hero__heading { font-family: 'DM Serif Display',serif; font-size: clamp(2.2rem,4.5vw,3.6rem); line-height: 1.07; color: #fff; margin: 0 0 1rem; }
.cu-hero__heading em { font-style: italic; color: var(--orange); }
.cu-hero__sub { max-width: 62ch; color: rgba(255,255,255,0.72); line-height: 1.72; margin: 0 0 2.2rem; font-size: 1.05rem; }
.cu-hero__stats { display: flex; flex-wrap: wrap; gap: 1rem 2.5rem; }
.cu-stat__value { display: block; font-family: 'DM Serif Display',serif; font-size: 1.85rem; color: #fff; line-height: 1; }
.cu-stat__label { display: block; font-size: 0.8rem; color: rgba(255,255,255,0.55); text-transform: uppercase; letter-spacing: 0.1em; margin-top: 0.28rem; }
.cu-hero__visual { display: flex; align-items: center; justify-content: center; }
.cu-viz { position: relative; width: 340px; height: 340px; flex-shrink: 0; }
.cu-viz__lines { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; }
.cu-viz__spin-ring { position: absolute; top: 50%; left: 50%; width: 128px; height: 128px; margin: -64px 0 0 -64px; border-radius: 50%; border: 1.5px dashed rgba(232,119,34,0.4); animation: cu-spin-ring 18s linear infinite; }
.cu-viz__core { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); }
.cu-viz__pulse { position: absolute; top: 50%; left: 50%; width: 80px; height: 80px; border-radius: 50%; background: rgba(232,119,34,0.13); animation: cu-pulse-ring 2.8s ease-out infinite; }
.cu-viz__pulse--2 { animation-delay: 1.4s; }
.cu-viz__core-icon { position: relative; width: 72px; height: 72px; border-radius: 20px; background: linear-gradient(135deg,var(--orange),#b84e0b); display: flex; align-items: center; justify-content: center; box-shadow: 0 0 28px rgba(232,119,34,0.65),0 0 60px rgba(232,119,34,0.2); }
.cu-viz__core-icon svg { width: 30px; height: 30px; color: #fff; }
.cu-viz__orbit { position: absolute; top: 50%; left: 50%; border-radius: 50%; }
.cu-viz__orbit--a { width: 210px; height: 210px; margin: -105px 0 0 -105px; animation: cu-orbit 12s linear infinite; }
.cu-viz__orbit--b { width: 208px; height: 208px; margin: -104px 0 0 -104px; animation: cu-orbit 20s linear infinite reverse; }
.cu-viz__orbit--c { width: 128px; height: 128px; margin: -64px 0 0 -64px; animation: cu-orbit 8s linear infinite; }
.cu-viz__orb-dot { position: absolute; top: -5px; left: 50%; transform: translateX(-50%); border-radius: 50%; }
.cu-viz__orb-dot--orange { width: 11px; height: 11px; background: var(--orange); box-shadow: 0 0 10px var(--orange); }
.cu-viz__orb-dot--white { width: 9px; height: 9px; background: rgba(255,255,255,0.85); box-shadow: 0 0 8px rgba(255,255,255,0.55); top: -4px; }
.cu-viz__orb-dot--blue { width: 8px; height: 8px; background: #6699ff; box-shadow: 0 0 8px #6699ff; top: -4px; }
.cu-viz__chip { position: absolute; display: flex; align-items: center; gap: 0.4rem; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.15); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border-radius: 10px; padding: 0.45rem 0.75rem; color: #e8eeff; font-size: 0.78rem; font-weight: 600; white-space: nowrap; animation: cu-float-chip 4s ease-in-out infinite; }
.cu-viz__chip svg { width: 13px; height: 13px; color: var(--orange); flex-shrink: 0; }
.cu-viz__chip--1 { top: 3%; left: -3%; animation-delay: 0s; }
.cu-viz__chip--2 { top: 3%; right: -3%; animation-delay: 1s; }
.cu-viz__chip--3 { bottom: 6%; left: -3%; animation-delay: 2s; }
.cu-viz__chip--4 { bottom: 6%; right: -3%; animation-delay: 1.5s; }
@keyframes cu-orbit { to { transform: rotate(360deg); } }
@keyframes cu-pulse-ring { 0% { opacity: 0.8; transform: translate(-50%,-50%) scale(1); } 100% { opacity: 0; transform: translate(-50%,-50%) scale(2.8); } }
@keyframes cu-spin-ring { to { transform: rotate(360deg); } }
@keyframes cu-float-chip { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-7px); } }
.cu-body { background: #f4f7fd; padding: 3.5rem 3rem 5rem; }
.cu-body__inner { max-width: 1180px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1.55fr; gap: 2rem; align-items: start; }
.cu-info { display: flex; flex-direction: column; gap: 1.75rem; }
.cu-info__eyebrow { display: inline-block; background: rgba(232,119,34,0.1); color: var(--orange); border-radius: 999px; padding: 0.28rem 0.7rem; font-size: 0.72rem; letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 0.6rem; }
.cu-info__heading { font-family: 'DM Serif Display',serif; font-size: clamp(1.6rem,2.8vw,2.2rem); line-height: 1.1; margin: 0 0 0.7rem; color: var(--dark); }
.cu-info__heading em { font-style: italic; color: var(--blue); }
.cu-info__text { color: var(--mid); line-height: 1.72; margin: 0; }
.cu-steps { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0; }
.cu-step { display: flex; gap: 1rem; align-items: flex-start; padding: 1rem 1.1rem; background: #fff; border: 1px solid var(--line); border-radius: 14px; box-shadow: 0 8px 20px -16px rgba(18,47,113,0.3); }
.cu-step + .cu-step { margin-top: 0.6rem; }
.cu-step__num { flex-shrink: 0; width: 34px; height: 34px; border-radius: 50%; background: linear-gradient(135deg,var(--orange),var(--blue)); color: #fff; font-size: 0.75rem; font-weight: 700; display: flex; align-items: center; justify-content: center; }
.cu-step strong { display: block; color: var(--dark); font-size: 0.96rem; margin-bottom: 0.2rem; }
.cu-step p { margin: 0; color: var(--mid); font-size: 0.88rem; line-height: 1.5; }
.cu-contacts { background: linear-gradient(160deg,#1B3A8F,#0c1836); border-radius: 18px; padding: 1.4rem; display: flex; flex-direction: column; gap: 1.1rem; }
.cu-contact-item { display: flex; gap: 0.9rem; align-items: flex-start; }
.cu-contact-item__icon { flex-shrink: 0; width: 38px; height: 38px; border-radius: 10px; background: rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; color: var(--orange); }
.cu-contact-item__icon svg { width: 18px; height: 18px; }
.cu-contact-item > div > span { display: block; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.45); margin-bottom: 0.2rem; }
.cu-contact-item > div a, .cu-contact-item > div p { margin: 0; color: #fff; font-size: 0.93rem; font-weight: 600; text-decoration: none; }
.cu-contact-item > div a:hover { color: var(--orange); }
.cu-form-panel { background: #fff; border: 1px solid var(--line); border-radius: 22px; padding: 2rem 2rem 1.8rem; box-shadow: 0 24px 48px -28px rgba(18,47,113,0.35); }
.cu-form-panel__head { border-bottom: 1px solid var(--line); padding-bottom: 1.25rem; margin-bottom: 1.4rem; }
.cu-form-panel__head h2 { font-family: 'DM Serif Display',serif; font-size: clamp(1.55rem,2.5vw,2rem); margin: 0 0 0.4rem; color: var(--dark); }
.cu-form-panel__head p { margin: 0; color: var(--mid); font-size: 0.93rem; line-height: 1.55; }
.cu-form-panel__head em { color: var(--orange); font-style: normal; }
.cu-progress { display: flex; align-items: center; gap: 0.7rem; margin-top: 0.85rem; }
.cu-progress__bar { flex: 1; height: 5px; background: #e8eefb; border-radius: 999px; overflow: hidden; }
.cu-progress__fill { height: 100%; border-radius: 999px; background: linear-gradient(90deg,var(--blue),var(--orange)); transition: width 0.45s cubic-bezier(0.4,0,0.2,1); }
.cu-progress__label { font-size: 0.73rem; font-weight: 700; color: var(--mid); white-space: nowrap; min-width: 72px; text-align: right; }
.cu-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.9rem; }
.cu-field { display: flex; flex-direction: column; }
.cu-field--full { margin-top: 0.9rem; }
.cu-field label { font-size: 0.88rem; font-weight: 600; color: #1e3166; margin-bottom: 0.4rem; }
.cu-field label em { color: var(--orange); font-style: normal; margin-left: 2px; }
.cu-field input, .cu-field select, .cu-field textarea { border: 1.5px solid #c8d7f0; border-radius: 12px; padding: 0.78rem 0.88rem; font: inherit; font-size: 0.95rem; color: #0f1f47; background: #f8fbff; transition: border-color 0.2s,box-shadow 0.2s,background 0.2s; outline: none; width: 100%; box-sizing: border-box; }
.cu-field input:focus, .cu-field select:focus, .cu-field textarea:focus { border-color: var(--blue); background: #fff; box-shadow: 0 0 0 3.5px rgba(27,58,143,0.12); }
.cu-field textarea { resize: vertical; min-height: 130px; }
.cu-input-wrap { position: relative; display: flex; align-items: center; }
.cu-input-wrap input, .cu-input-wrap select { padding-left: 2.65rem; }
.cu-input-wrap--select select { padding-right: 0.88rem; }
.cu-input-icon { position: absolute; left: 0.85rem; top: 50%; transform: translateY(-50%); width: 15px; height: 15px; color: #9baeca; pointer-events: none; z-index: 1; flex-shrink: 0; }
.cu-input-status { position: absolute; right: 0.75rem; top: 50%; transform: translateY(-50%); display: flex; align-items: center; pointer-events: none; }
.cu-input-status svg { width: 15px; height: 15px; }
.cu-field--ok .cu-input-wrap input, .cu-field--ok .cu-input-wrap select { border-color: #16a34a; background: #f0fdf4; }
.cu-field--ok .cu-input-wrap input:focus, .cu-field--ok .cu-input-wrap select:focus { border-color: #16a34a; box-shadow: 0 0 0 3.5px rgba(22,163,74,0.14); }
.cu-field--ok .cu-input-icon { color: #16a34a; }
.cu-field--ok .cu-input-status svg { color: #16a34a; }
.cu-field--ok label { color: #15803d; }
.cu-field--ok.cu-field--full textarea { border-color: #16a34a; background: #f0fdf4; }
.cu-field--ok.cu-field--full textarea:focus { border-color: #16a34a; box-shadow: 0 0 0 3.5px rgba(22,163,74,0.14); }
.cu-field--err .cu-input-wrap input, .cu-field--err .cu-input-wrap select { border-color: #dc2626; background: #fff5f5; }
.cu-field--err .cu-input-wrap input:focus, .cu-field--err .cu-input-wrap select:focus { border-color: #dc2626; box-shadow: 0 0 0 3.5px rgba(220,38,38,0.14); }
.cu-field--err .cu-input-icon { color: #dc2626; }
.cu-field--err .cu-input-status svg { color: #dc2626; }
.cu-field--err label { color: #b91c1c; }
.cu-field--err.cu-field--full textarea { border-color: #dc2626; background: #fff5f5; }
.cu-field--err.cu-field--full textarea:focus { border-color: #dc2626; box-shadow: 0 0 0 3.5px rgba(220,38,38,0.14); }
.cu-field-msg { display: flex; align-items: flex-start; gap: 0.32rem; margin-top: 0.32rem; color: #dc2626; font-size: 0.76rem; line-height: 1.4; animation: cu-msg-in 0.2s ease; }
.cu-field-msg svg { width: 13px; height: 13px; flex-shrink: 0; margin-top: 1px; }
@keyframes cu-msg-in { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: none; } }
.cu-form-section { margin-bottom: 1.2rem; }
.cu-form-section__label { display: flex; align-items: center; gap: 0.45rem; font-size: 0.71rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: var(--blue); border-bottom: 2px solid #edf2fc; padding-bottom: 0.5rem; margin-bottom: 0.85rem; }
.cu-form-section__label svg { width: 14px; height: 14px; flex-shrink: 0; }
.cu-char-counter { float: right; font-size: 0.73rem; font-weight: 600; color: #9baeca; font-style: normal; margin-left: 0.5rem; }
.cu-char-counter--warn { color: var(--orange); }
.cu-consent--err .cu-checkbox__box { border-color: #dc2626; background: #fff5f5; }
.cu-form-note { display: flex; align-items: flex-start; gap: 0.35rem; }
.cu-form-note svg { width: 14px; height: 14px; flex-shrink: 0; margin-top: 1px; color: var(--mid); }
@keyframes cu-shake { 0%,100% { transform: none; } 15%,55% { transform: translateX(-7px); } 35%,75% { transform: translateX(7px); } }
.cu-form-panel--shake { animation: cu-shake 0.42s ease; }
.cu-consent { margin-top: 1.1rem; }
.cu-checkbox { display: flex; align-items: center; gap: 0.65rem; cursor: pointer; }
.cu-checkbox input[type="checkbox"] { display: none; }
.cu-checkbox__box { flex-shrink: 0; width: 20px; height: 20px; border: 2px solid #c8d7f0; border-radius: 6px; background: #f8fbff; display: flex; align-items: center; justify-content: center; transition: border-color 0.2s,background 0.2s; }
.cu-checkbox input:checked + .cu-checkbox__box { background: var(--blue); border-color: var(--blue); }
.cu-checkbox input:checked + .cu-checkbox__box::after { content: ''; display: block; width: 10px; height: 6px; border-left: 2px solid #fff; border-bottom: 2px solid #fff; transform: rotate(-45deg) translateY(-1px); }
.cu-checkbox__text { font-size: 0.88rem; color: var(--mid); }
.cu-consent small { color: #c82040; font-size: 0.76rem; margin-top: 0.3rem; display: block; }
.cu-form-footer { margin-top: 1.4rem; display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; }
.cu-submit { border: none; cursor: pointer; border-radius: 999px; padding: 0.88rem 1.6rem; background: linear-gradient(130deg,var(--orange),var(--blue)); color: #fff; font-weight: 700; font-size: 0.97rem; font-family: inherit; display: inline-flex; align-items: center; gap: 0.5rem; transition: transform 0.2s,box-shadow 0.2s,opacity 0.2s; }
.cu-submit svg { width: 16px; height: 16px; }
.cu-submit:hover:enabled { transform: translateY(-2px); box-shadow: 0 14px 28px -12px rgba(27,58,143,0.55); }
.cu-submit:disabled { opacity: 0.65; cursor: not-allowed; }
.cu-form-note { margin: 0; font-size: 0.8rem; color: var(--mid); line-height: 1.4; }
.cu-spinner { display: inline-block; width: 18px; height: 18px; border: 2.5px solid rgba(255,255,255,0.3); border-top-color: #fff; border-radius: 50%; animation: spin 0.7s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
.cu-error { display: flex; gap: 0.9rem; align-items: flex-start; background: #fff5f5; border: 1px solid #fca5a5; border-radius: 14px; padding: 1.1rem 1.2rem; margin-bottom: 1rem; }
.cu-error svg { flex-shrink: 0; width: 24px; height: 24px; color: #dc2626; margin-top: 1px; }
.cu-error strong { display: block; color: #991b1b; font-size: 0.98rem; }
.cu-error span { color: #b91c1c; font-size: 0.88rem; }

/* SUCCESS MODAL */
.cu-modal { position: fixed; inset: 0; z-index: 9999; display: flex; align-items: center; justify-content: center; padding: 1.25rem; background: rgba(8, 15, 40, 0.62); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); animation: cu-modal-fade 0.32s ease; }
@keyframes cu-modal-fade { from { opacity: 0; } to { opacity: 1; } }
.cu-modal__card { position: relative; width: 100%; max-width: 480px; background: #fff; border-radius: 24px; padding: 2.4rem 2rem 1.8rem; text-align: center; box-shadow: 0 30px 70px -20px rgba(8, 15, 40, 0.55); animation: cu-modal-pop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1); overflow: hidden; }
@keyframes cu-modal-pop { from { opacity: 0; transform: translateY(24px) scale(0.9); } to { opacity: 1; transform: none; } }
.cu-modal__card::before { content: ''; position: absolute; inset: 0 0 auto 0; height: 4px; background: linear-gradient(90deg, #22c55e, #16a34a, #22c55e); }
.cu-modal__close { position: absolute; top: 0.85rem; right: 0.85rem; width: 32px; height: 32px; border: none; background: #f1f5fb; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; color: #64748b; transition: background 0.2s, color 0.2s, transform 0.2s; }
.cu-modal__close svg { width: 15px; height: 15px; }
.cu-modal__close:hover { background: #e2e8f0; color: #0f1f47; transform: rotate(90deg); }
.cu-modal__confetti { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
.cu-modal__confetti span { position: absolute; top: -20px; width: 8px; height: 12px; border-radius: 2px; opacity: 0; animation: cu-confetti-fall 2.4s ease-out forwards; }
.cu-modal__confetti span:nth-child(1) { left: 8%; background: #22c55e; animation-delay: 0.15s; }
.cu-modal__confetti span:nth-child(2) { left: 18%; background: #e87722; animation-delay: 0.35s; transform: rotate(20deg); }
.cu-modal__confetti span:nth-child(3) { left: 30%; background: #1B3A8F; animation-delay: 0.05s; }
.cu-modal__confetti span:nth-child(4) { left: 42%; background: #fbbf24; animation-delay: 0.42s; transform: rotate(-15deg); }
.cu-modal__confetti span:nth-child(5) { left: 54%; background: #22c55e; animation-delay: 0.22s; }
.cu-modal__confetti span:nth-child(6) { left: 65%; background: #e87722; animation-delay: 0.55s; transform: rotate(25deg); }
.cu-modal__confetti span:nth-child(7) { left: 76%; background: #1B3A8F; animation-delay: 0.1s; }
.cu-modal__confetti span:nth-child(8) { left: 84%; background: #fbbf24; animation-delay: 0.48s; transform: rotate(-25deg); }
.cu-modal__confetti span:nth-child(9) { left: 92%; background: #22c55e; animation-delay: 0.28s; }
.cu-modal__confetti span:nth-child(10) { left: 60%; background: #e87722; animation-delay: 0.6s; }
@keyframes cu-confetti-fall { 0% { opacity: 0; transform: translateY(0) rotate(0deg); } 15% { opacity: 1; } 100% { opacity: 0; transform: translateY(320px) rotate(720deg); } }
.cu-modal__badge { position: relative; width: 96px; height: 96px; margin: 0 auto 1.25rem; }
.cu-modal__badge-ring { position: absolute; inset: 0; border-radius: 50%; border: 2px solid rgba(34, 197, 94, 0.35); animation: cu-badge-ripple 2s ease-out infinite; }
.cu-modal__badge-ring--2 { animation-delay: 1s; }
@keyframes cu-badge-ripple { 0% { transform: scale(1); opacity: 0.7; } 100% { transform: scale(1.6); opacity: 0; } }
.cu-modal__badge-core { position: relative; width: 96px; height: 96px; border-radius: 50%; background: linear-gradient(135deg, #22c55e, #15803d); display: flex; align-items: center; justify-content: center; color: #fff; box-shadow: 0 12px 28px -6px rgba(34, 197, 94, 0.55), 0 0 0 6px rgba(34, 197, 94, 0.12); animation: cu-badge-scale 0.55s cubic-bezier(0.34, 1.56, 0.64, 1); }
.cu-modal__badge-core svg { width: 52px; height: 52px; }
.cu-modal__check-path { stroke-dasharray: 60; stroke-dashoffset: 60; animation: cu-check-draw 0.6s ease-out 0.4s forwards; }
@keyframes cu-check-draw { to { stroke-dashoffset: 0; } }
@keyframes cu-badge-scale { from { transform: scale(0); opacity: 0; } to { transform: scale(1); opacity: 1; } }
.cu-modal__title { font-family: 'DM Serif Display', serif; font-size: clamp(1.5rem, 2.5vw, 1.85rem); margin: 0 0 0.6rem; color: var(--dark); }
.cu-modal__text { color: var(--mid); font-size: 0.96rem; line-height: 1.6; margin: 0 0 1.4rem; }
.cu-modal__text strong { color: var(--dark); font-weight: 700; }
.cu-modal__ref { display: inline-flex; align-items: center; gap: 0.6rem; background: linear-gradient(135deg, #f0fdf4, #ecfeff); border: 1px dashed #86efac; border-radius: 12px; padding: 0.55rem 1rem; margin: 0 0 1.4rem; }
.cu-modal__ref-label { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.14em; color: #15803d; }
.cu-modal__ref-value { font-family: 'DM Mono', ui-monospace, monospace; font-weight: 700; color: #0a6640; font-size: 0.98rem; letter-spacing: 0.04em; }
.cu-modal__meta { display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; margin-bottom: 1.5rem; padding-top: 1.1rem; border-top: 1px solid #eef2fb; }
.cu-modal__meta-item { display: flex; align-items: center; gap: 0.55rem; text-align: left; }
.cu-modal__meta-item svg { flex-shrink: 0; width: 30px; height: 30px; padding: 6px; border-radius: 8px; background: rgba(27, 58, 143, 0.08); color: var(--blue); }
.cu-modal__meta-item span { display: block; font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #94a3b8; }
.cu-modal__meta-item strong { display: block; font-size: 0.86rem; color: var(--dark); font-weight: 600; margin-top: 0.1rem; }
.cu-modal__cta { border: none; cursor: pointer; border-radius: 999px; padding: 0.85rem 2rem; background: linear-gradient(130deg, var(--orange), var(--blue)); color: #fff; font-weight: 700; font-size: 0.96rem; font-family: inherit; display: inline-flex; align-items: center; gap: 0.55rem; transition: transform 0.2s, box-shadow 0.2s; }
.cu-modal__cta svg { width: 15px; height: 15px; }
.cu-modal__cta:hover { transform: translateY(-2px); box-shadow: 0 14px 28px -12px rgba(27, 58, 143, 0.55); }
@media (max-width: 480px) {
  .cu-modal__card { padding: 2rem 1.4rem 1.5rem; }
  .cu-modal__meta { grid-template-columns: 1fr; }
}
[data-cu-reveal] { opacity: 0; transform: translateY(24px); transition: opacity 0.55s ease,transform 0.55s ease; }
[data-cu-reveal].is-visible { opacity: 1; transform: none; }
@media (max-width: 1024px) {
  .cu-hero__inner { grid-template-columns: 1fr; }
  .cu-hero__visual { display: none; }
  .cu-body__inner { grid-template-columns: 1fr; }
  .cu-info { flex-direction: row; flex-wrap: wrap; gap: 1.1rem; }
  .cu-info__intro { flex: 1 1 100%; }
  .cu-steps { flex: 1 1 calc(50% - 0.6rem); }
  .cu-contacts { flex: 1 1 calc(50% - 0.6rem); }
}
@media (max-width: 768px) {
  .breadcrumb-bar { padding: 0.55rem 1rem; margin-top: 58px; }
  .cu-hero { padding: 3.5rem 1.25rem 2.5rem; }
  .cu-body { padding: 2.2rem 1.25rem 3.5rem; }
  .cu-form-grid { grid-template-columns: 1fr; }
  .cu-form-panel { padding: 1.4rem; }
  .cu-info { flex-direction: column; }
  .cu-steps, .cu-contacts { flex: 1 1 100%; }
}
@media (max-width: 480px) {
  .cu-hero__heading { font-size: 2rem; }
  .cu-form-footer { flex-direction: column; align-items: stretch; }
  .cu-submit { justify-content: center; }
}
  `],
})
export class ContactUs implements AfterViewInit, OnDestroy {
  protected isSubmitting = false;
  protected formShake = false;
  protected showSuccessModal = false;
  protected referenceId = '';
  protected errorMessage = '';
  private readonly recipientEmail = 'arvindpuskar70@gmail.com';
  protected readonly contactForm;
  private observer?: IntersectionObserver;

  constructor(private readonly fb: FormBuilder, private readonly elRef: ElementRef) {
    this.contactForm = this.fb.nonNullable.group({
      name:            ['', [Validators.required, Validators.minLength(2)]],
      organisation:    ['', [Validators.required]],
      phone:           ['', [Validators.required, Validators.pattern(/^[0-9+()\-\s]{7,20}$/)]],
      email:           ['', [Validators.required, Validators.email]],
      serviceInterest: ['', [Validators.required]],
      timeline:        ['', [Validators.required]],
      message:         ['', [Validators.required, Validators.minLength(20), Validators.maxLength(1000)]],
      consent:         [false, [Validators.requiredTrue]],
    });
  }

  ngAfterViewInit(): void {
    this.spawnParticles();
    this.initReveal();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  protected showError(controlName: 'name'|'organisation'|'phone'|'email'|'serviceInterest'|'timeline'|'message'|'consent'): boolean {
    const control = this.contactForm.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  protected showSuccess(controlName: 'name'|'organisation'|'phone'|'email'|'serviceInterest'|'timeline'|'message'|'consent'): boolean {
    const control = this.contactForm.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  get messageLength(): number {
    return (this.contactForm.controls['message'].value as string).length;
  }

  get formProgress(): number {
    const controls = Object.values(this.contactForm.controls);
    const valid = controls.filter(c => c.valid).length;
    return Math.round((valid / controls.length) * 100);
  }

  protected async onSubmit(): Promise<void> {
    this.errorMessage = '';
    this.contactForm.markAllAsTouched();
    if (this.contactForm.invalid || this.isSubmitting) {
      this.formShake = true;
      setTimeout(() => { this.formShake = false; }, 500);
      return;
    }

    this.isSubmitting = true;
    const referenceId = `EVL-${Date.now().toString().slice(-8)}`;
    const submittedAt = new Date();
    const data = this.contactForm.getRawValue();

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${this.recipientEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Enquiry from ${data.name} — ${data.serviceInterest}`,
          _template: 'table',
          _captcha: 'false',
          'Reference ID':    referenceId,
          'Submitted At':    submittedAt.toLocaleString(),
          'Full Name':       data.name,
          'Organisation':    data.organisation,
          'Email':           data.email,
          'Phone':           data.phone,
          'Service Interest': data.serviceInterest,
          'Preferred Timeline': data.timeline,
          'Message':         data.message,
          'Consent Granted': data.consent ? 'Yes' : 'No',
        }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      const result = await response.json().catch(() => ({}));
      const succeeded = result?.success === 'true' || result?.success === true;
      if (!succeeded) {
        throw new Error(result?.message || 'The email service did not confirm delivery.');
      }

      this.referenceId = referenceId;
      this.showSuccessModal = true;
      this.contactForm.reset();
    } catch (err) {
      const detail = err instanceof Error ? err.message : 'Unknown error';
      this.errorMessage = `We could not deliver your message right now (${detail}). Please try again shortly, or email us directly at ${this.recipientEmail}.`;
      this.formShake = true;
      setTimeout(() => { this.formShake = false; }, 500);
    } finally {
      this.isSubmitting = false;
    }
  }

  protected closeSuccessModal(): void {
    this.showSuccessModal = false;
    this.referenceId = '';
  }

  private spawnParticles(): void {
    const container = this.elRef.nativeElement.querySelector('#cu-particles') as HTMLElement | null;
    if (!container) return;
    for (let i = 0; i < 38; i++) {
      const d = document.createElement('div');
      const size = Math.random() * 3.5 + 1.2;
      Object.assign(d.style, {
        position: 'absolute',
        width: `${size}px`, height: `${size}px`,
        borderRadius: '50%',
        background: `rgba(255,255,255,${Math.random() * 0.35 + 0.08})`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animation: `cu-float ${Math.random() * 10 + 8}s ease-in-out infinite`,
        animationDelay: `${Math.random() * 6}s`,
      });
      container.appendChild(d);
    }
    const style = document.createElement('style');
    style.textContent = '@keyframes cu-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-18px)}}';
    document.head.appendChild(style);
  }

  private initReveal(): void {
    this.observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) (e.target as HTMLElement).classList.add('is-visible'); }),
      { threshold: 0.12 }
    );
    this.elRef.nativeElement.querySelectorAll('[data-cu-reveal]').forEach((el: HTMLElement) => this.observer!.observe(el));
  }
}
