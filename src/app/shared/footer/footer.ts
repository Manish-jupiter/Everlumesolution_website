import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CookieConsentService } from '../cookie-consent/cookie-consent.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  private readonly cookieConsent = inject(CookieConsentService);

  openCookieSettings(event: Event): void {
    event.preventDefault();
    this.cookieConsent.open();
  }
}
