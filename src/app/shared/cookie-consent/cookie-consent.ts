import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CookieConsentService, CookiePreferences } from './cookie-consent.service';

interface Category {
  key: keyof CookiePreferences | 'essential';
  label: string;
  description: string;
  alwaysActive?: boolean;
}

@Component({
  selector: 'app-cookie-consent',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cookie-consent.html',
  styleUrl: './cookie-consent.css',
})
export class CookieConsent implements OnInit {
  private readonly service = inject(CookieConsentService);

  readonly isOpen = this.service.isOpen;
  expandedKey: Category['key'] | null = null;

  functional = false;
  analytics = false;
  advertising = false;

  readonly categories: Category[] = [
    {
      key: 'essential',
      label: 'Essential/Necessary',
      description:
        'These cookies are required for the site to function and cannot be switched off. They are usually only set in response to actions you make (login, form submissions, preferences).',
      alwaysActive: true,
    },
    {
      key: 'functional',
      label: 'Functional',
      description:
        'Functional cookies allow the site to remember choices you make (such as language or region) to provide enhanced, more personal features.',
    },
    {
      key: 'analytics',
      label: 'Performance/Analytical',
      description:
        'Analytics cookies help us understand how visitors interact with the site by collecting information anonymously — so we can improve performance.',
    },
    {
      key: 'advertising',
      label: 'Retargeting/Advertising',
      description:
        'These cookies may be set through our site by advertising partners to build a profile of your interests and show you relevant ads on other sites.',
    },
  ];

  ngOnInit(): void {
    this.service.load();
    const prefs = this.service.preferences();
    this.functional = prefs.functional;
    this.analytics = prefs.analytics;
    this.advertising = prefs.advertising;
  }

  toggle(key: 'functional' | 'analytics' | 'advertising'): void {
    this[key] = !this[key];
  }

  toggleExpand(key: Category['key']): void {
    this.expandedKey = this.expandedKey === key ? null : key;
  }

  acceptAll(): void {
    this.functional = this.analytics = this.advertising = true;
    this.persistAndClose();
  }

  denyAll(): void {
    this.functional = this.analytics = this.advertising = false;
    this.persistAndClose();
  }

  savePreferences(): void {
    this.persistAndClose();
  }

  close(): void {
    this.service.close();
  }

  private persistAndClose(): void {
    this.service.save({
      functional: this.functional,
      analytics: this.analytics,
      advertising: this.advertising,
    });
    this.service.close();
  }
}
