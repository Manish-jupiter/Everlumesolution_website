import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  computed,
  inject,
  signal,
} from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

/**
 * A single navigation item — either a leaf link or a parent with sub-menu.
 */
export interface NavChild {
  label: string;
  icon: string; // phosphor icon class suffix, e.g. 'ph-brain'
  link: string;
}

export interface NavItem {
  label: string;
  icon: string;
  link?: string; // present when the item itself is a leaf
  children?: NavChild[]; // present when the item has a sub-menu
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit, OnDestroy {
  private readonly host = inject(ElementRef<HTMLElement>);

  /** Full navigation model — drives both desktop and mobile menus. */
  readonly menu: NavItem[] = [
    {
      label: 'What We Offer',
      icon: 'ph-stack',
      children: [
        { label: 'AI Services', icon: 'ph-brain', link: '/what-we-offer/ai-services' },
        {
          label: 'Digital Product Engineering',
          icon: 'ph-code',
          link: '/what-we-offer/digital-product-engineering',
        },
        {
          label: 'Cloud Engineering',
          icon: 'ph-cloud',
          link: '/what-we-offer/cloud-engineering',
        },
        {
          label: 'Data Services',
          icon: 'ph-database',
          link: '/what-we-offer/data-services',
        },
        { label: 'RCM', icon: 'ph-heartbeat', link: '/what-we-offer/rcm' },
        {
          label: 'Automation Services',
          icon: 'ph-robot',
          link: '/what-we-offer/automation-services',
        },
        {
          label: 'Managed Services',
          icon: 'ph-headset',
          link: '/what-we-offer/managed-services',
        },
        {
          label: 'Property Operations',
          icon: 'ph-lightning',
          link: '/what-we-offer/utilities-management',
        },
      ],
    },
    {
      label: 'Who We Serve',
      icon: 'ph-users-three',
      children: [
        { label: 'Healthcare', icon: 'ph-first-aid-kit', link: '/who-we-serve/healthcare' },
        { label: 'Banking', icon: 'ph-bank', link: '/who-we-serve/banking' },
        { label: 'Telecom', icon: 'ph-broadcast', link: '/who-we-serve/telecom' },
        { label: 'Retail', icon: 'ph-shopping-bag', link: '/who-we-serve/retail' },
        { label: 'Manufacturing', icon: 'ph-factory', link: '/who-we-serve/manufacturing' },
      ],
    },
    { label: 'Customer Delight', icon: 'ph-sparkle', link: '/customer-delight' },
    { label: 'Career', icon: 'ph-briefcase', link: '/career' },
    { label: 'About Us', icon: 'ph-info', link: '/about-us' },
    { label: 'Contact Us', icon: 'ph-envelope-simple', link: '/contact-us' },
  ];

  /** Which parent index (if any) has its dropdown/accordion currently open. */
  readonly openIndex = signal<number | null>(null);

  /** Whether the mobile sidebar is open. */
  readonly mobileOpen = signal(false);

  /** True when the viewport is below the desktop breakpoint (1200px). */
  readonly isMobile = signal(this.detectMobile());

  /** True after the user has scrolled past the top of the page. */
  readonly scrolled = signal(false);

  /**
   * True whenever the current route is NOT the landing page, so the header
   * must be forced opaque (transparent header over a light page = invisible text).
   */
  readonly forceOpaque = signal(false);

  /** True when the header should render its opaque / white-bg variant. */
  readonly opaque = computed(() => this.scrolled() || this.forceOpaque());

  /** Logo swap based on the opaque state. */
  readonly logoSrc = computed(() =>
    this.opaque() ? 'Images/Logo_everlume.png' : 'Images/Logo_everlume-white.png',
  );

  readonly showBackdrop = computed(() => this.mobileOpen());

  private routerSub: Subscription;

  constructor(private router: Router) {
    // Close all menus after any successful navigation.
    this.routerSub = this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        this.openIndex.set(null);
        this.closeMobile();
        this.updateForceOpaque();
      });
  }

  ngOnInit(): void {
    this.updateScrolled();
    this.updateForceOpaque();
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
    this.unlockBody();
  }

  // ── Desktop dropdown handlers (click-only) ─────────────────
  toggleParent(idx: number, event?: Event): void {
    event?.stopPropagation();
    this.openIndex.update((cur) => (cur === idx ? null : idx));
  }

  // ── Mobile sidebar ─────────────────────────────────────────
  openMobile(): void {
    this.mobileOpen.set(true);
    this.lockBody();
  }

  closeMobile(): void {
    this.mobileOpen.set(false);
    this.openIndex.set(null);
    this.unlockBody();
  }

  toggleMobile(): void {
    this.mobileOpen() ? this.closeMobile() : this.openMobile();
  }

  private lockBody(): void {
    document.body.classList.add('is-nav-locked');
  }

  private unlockBody(): void {
    document.body.classList.remove('is-nav-locked');
  }

  // ── Responsive detection ───────────────────────────────────
  @HostListener('window:resize')
  onResize(): void {
    const mobile = this.detectMobile();
    this.isMobile.set(mobile);
    // If the window grew to desktop while the sidebar was open, tidy up.
    if (!mobile && this.mobileOpen()) this.closeMobile();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.mobileOpen()) this.closeMobile();
    else this.openIndex.set(null);
  }

  // ── Scroll — toggles compact / white variant ───────────────
  @HostListener('window:scroll')
  onScroll(): void {
    this.updateScrolled();
  }

  private updateScrolled(): void {
    if (typeof window === 'undefined') return;
    this.scrolled.set(window.scrollY > 10);
  }

  private updateForceOpaque(): void {
    // Landing page = '/' (also the empty path right after bootstrap).
    const url = this.router.url.split('?')[0].split('#')[0];
    this.forceOpaque.set(url !== '/' && url !== '');
  }

  // ── Close open dropdowns when clicking anywhere else ───────
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    // Ignore clicks inside this header (handled by button handlers).
    if (this.host.nativeElement.contains(event.target as Node)) return;
    if (this.openIndex() !== null) this.openIndex.set(null);
  }

  private detectMobile(): boolean {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(max-width: 1199.98px)').matches;
  }
}
