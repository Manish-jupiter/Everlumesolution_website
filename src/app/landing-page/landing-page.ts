import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage implements AfterViewInit {
  /**
   * Re-run the original site's script.js after the landing page enters the
   * DOM so all scroll animations continue to work. jQuery / Bootstrap are
   * loaded once by the root App component.
   */
  ngAfterViewInit(): void {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-landing-init]',
    );
    if (existing) existing.remove();

    const el = document.createElement('script');
    el.src = 'script.js';
    el.dataset['landingInit'] = 'true';
    document.body.appendChild(el);
  }
}
