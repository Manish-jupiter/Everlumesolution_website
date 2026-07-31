import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements AfterViewInit {
  /**
   * After the Angular template is rendered to the DOM, load jQuery and
   * Bootstrap JS in the same order as the original static index.html.
   * The page-specific script.js is loaded by the LandingPage component
   * (so its animations run after the landing-page DOM is present).
   */
  ngAfterViewInit(): void {
    this.loadScriptsInOrder([
      {
        src: 'https://code.jquery.com/jquery-3.7.1.min.js',
        integrity: 'sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=',
        crossorigin: 'anonymous',
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
        integrity:
          'sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz',
        crossorigin: 'anonymous',
      },
    ]);
  }

  private loadScriptsInOrder(
    scripts: { src: string; integrity?: string; crossorigin?: string }[],
  ): void {
    const load = (i: number): void => {
      if (i >= scripts.length) return;
      const cfg = scripts[i];
      const el = document.createElement('script');
      el.src = cfg.src;
      if (cfg.integrity) el.integrity = cfg.integrity;
      if (cfg.crossorigin) el.crossOrigin = cfg.crossorigin;
      el.onload = () => load(i + 1);
      el.onerror = () => load(i + 1);
      document.body.appendChild(el);
    };
    load(0);
  }
}
