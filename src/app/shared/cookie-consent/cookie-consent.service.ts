import { Injectable, signal } from '@angular/core';

export interface CookiePreferences {
  functional: boolean;
  analytics: boolean;
  advertising: boolean;
}

const STORAGE_KEY = 'everlume.cookieConsent.v1';

@Injectable({ providedIn: 'root' })
export class CookieConsentService {
  readonly isOpen = signal(false);
  readonly preferences = signal<CookiePreferences>({
    functional: false,
    analytics: false,
    advertising: false,
  });

  /** Returns true if the user has previously saved a choice. */
  hasStoredChoice(): boolean {
    if (typeof localStorage === 'undefined') return false;
    return localStorage.getItem(STORAGE_KEY) !== null;
  }

  load(): void {
    if (typeof localStorage === 'undefined') return;
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw) as CookiePreferences;
      this.preferences.set({
        functional: !!parsed.functional,
        analytics: !!parsed.analytics,
        advertising: !!parsed.advertising,
      });
    } catch {
      // ignore malformed storage
    }
  }

  save(prefs: CookiePreferences): void {
    this.preferences.set(prefs);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    }
  }

  open(): void { this.isOpen.set(true); }
  close(): void { this.isOpen.set(false); }
}
