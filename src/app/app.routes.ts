import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./landing-page/landing1').then((m) => m.Landing1),
  },
  {
    path: 'landing-page',
    loadComponent: () =>
      import('./landing-page/landing-page').then((m) => m.LandingPage),
  },

  // What We Offer (parent + sub-menus)
  {
    path: 'what-we-offer',
    loadChildren: () =>
      import('./what-we-offer/what-we-offer.routes').then((m) => m.routes),
  },

  // Who We Serve (parent + sub-menus)
  {
    path: 'who-we-serve',
    loadChildren: () =>
      import('./who-we-serve/who-we-serve.routes').then((m) => m.routes),
  },

  {
    path: 'customer-delight',
    loadComponent: () =>
      import('./customer-delight/customer-delight').then((m) => m.CustomerDelight),
  },
  {
    path: 'career',
    loadComponent: () => import('./career/career').then((m) => m.Career),
  },
  {
    path: 'about-us',
    loadComponent: () => import('./about-us/about-us').then((m) => m.AboutUs),
  },
  {
    path: 'contact-us',
    loadComponent: () =>
      import('./contact-us/contact-us').then((m) => m.ContactUs),
  },

  // Footer > Company
  {
    path: 'support',
    loadComponent: () => import('./support/support').then((m) => m.Support),
  },

  // Footer > Services
  {
    path: 'ai-machine-learning',
    loadComponent: () =>
      import('./ai-machine-learning/ai-machine-learning').then(
        (m) => m.AiMachineLearning
      ),
  },
  {
    path: 'cloud-solutions',
    loadComponent: () =>
      import('./cloud-solutions/cloud-solutions').then((m) => m.CloudSolutions),
  },
  {
    path: 'cybersecurity',
    loadComponent: () =>
      import('./cybersecurity/cybersecurity').then((m) => m.Cybersecurity),
  },
  {
    path: 'devops-ci-cd',
    loadComponent: () =>
      import('./devops-ci-cd/devops-ci-cd').then((m) => m.DevopsCiCd),
  },

  // Footer > Legal
  {
    path: 'terms-and-conditions',
    loadComponent: () =>
      import('./terms-and-conditions/terms-and-conditions').then(
        (m) => m.TermsAndConditions
      ),
  },
  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('./privacy-policy/privacy-policy').then((m) => m.PrivacyPolicy),
  },
  {
    path: 'cookie-settings',
    loadComponent: () =>
      import('./cookie-settings/cookie-settings').then((m) => m.CookieSettings),
  },

  { path: '**', redirectTo: '' },
];
