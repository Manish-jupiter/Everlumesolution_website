import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing1',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './landing1.html',
  styleUrl: './landing1.css',
  // Emulated (default) — all landing1.css rules are auto-scoped to this component only
  encapsulation: ViewEncapsulation.Emulated,
})
export class Landing1 implements AfterViewInit {
  ngAfterViewInit(): void {
    const existing = document.querySelector<HTMLScriptElement>('script[data-landing-init]');
    if (existing) existing.remove();

    this.whenJQueryReady(() => {
      const el = document.createElement('script');
      el.src = 'script.js';
      el.dataset['landingInit'] = 'true';
      document.body.appendChild(el);
    });

    this.initHowWeWork();
    this.initFocusCards();
  }

  private initFocusCards(): void {
    const grid = document.querySelector<HTMLElement>('.ev__focus-grid');
    if (!grid) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { grid.classList.add('ev--in-view'); io.disconnect(); }
    }, { threshold: 0.25 });
    io.observe(grid);
  }

  private initHowWeWork(): void {
    const section = document.getElementById('how-we-work') as HTMLElement | null;
    if (!section) return;

    const cards = Array.from(section.querySelectorAll<HTMLElement>('.hw-card'));
    const currentEl = document.getElementById('hw-current');
    const progressBar = document.getElementById('hw-progress-bar');
    const total = cards.length;

    const showAll = () => {
      cards.forEach((card, i) => setTimeout(() => card.classList.add('is-visible'), i * 110));
      if (currentEl) currentEl.textContent = String(total).padStart(2, '0');
      if (progressBar) progressBar.style.width = '100%';
    };

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { showAll(); io.disconnect(); }
    }, { threshold: 0.2 });
    io.observe(section);
  }

  private whenJQueryReady(cb: () => void, attempts = 0): void {
    const w = window as unknown as { $?: unknown; jQuery?: unknown };
    if (w.$ || w.jQuery) { cb(); return; }
    if (attempts > 100) return;
    setTimeout(() => this.whenJQueryReady(cb, attempts + 1), 100);
  }
}