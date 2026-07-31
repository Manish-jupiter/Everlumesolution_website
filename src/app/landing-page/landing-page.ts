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
   * loaded once by the root App component — but since that load is async,
   * we wait for `window.$` to exist before injecting script.js.
   */
  ngAfterViewInit(): void {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-landing-init]',
    );
    if (existing) existing.remove();

    this.whenJQueryReady(() => {
      const el = document.createElement('script');
      el.src = 'script.js';
      el.dataset['landingInit'] = 'true';
      document.body.appendChild(el);
    });
  }

  private whenJQueryReady(cb: () => void, attempts = 0): void {
    const w = window as unknown as { $?: unknown; jQuery?: unknown };
    if (w.$ || w.jQuery) {
      cb();
      return;
    }
    if (attempts > 100) return; // give up after ~10s
    setTimeout(() => this.whenJQueryReady(cb, attempts + 1), 100);
  }
}
