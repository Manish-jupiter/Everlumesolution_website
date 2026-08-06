import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of, timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

type IdleWindow = Window & {
  requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
};

/** Preloads lazy chunks during browser idle time; falls back to a short delay. */
@Injectable({ providedIn: 'root' })
export class IdlePreloadStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<unknown>): Observable<unknown> {
    if (route.data?.['preload'] === false) {
      return of(null);
    }
    return timer(0).pipe(mergeMap(() => this.whenIdle(load)));
  }

  private whenIdle(load: () => Observable<unknown>): Observable<unknown> {
    if (typeof window === 'undefined') {
      return load();
    }
    const w = window as IdleWindow;
    if (typeof w.requestIdleCallback === 'function') {
      return new Observable((subscriber) => {
        w.requestIdleCallback!(
          () => load().subscribe(subscriber),
          { timeout: 2000 },
        );
      });
    }
    return timer(1500).pipe(mergeMap(() => load()));
  }
}
