import { Routes } from '@angular/router';

import { WhatWeOffer } from './what-we-offer';

export const routes: Routes = [
  {
    path: '',
    component: WhatWeOffer,
    children: [
      {
        path: '',
        loadComponent: () => import('./hub/hub').then((m) => m.WhatWeOfferHub),
      },
      {
        path: 'ai-services',
        loadComponent: () =>
          import('./ai-services/ai-services').then((m) => m.AiServices),
      },
      {
        path: 'digital-product-engineering',
        loadComponent: () =>
          import('./digital-product-engineering/digital-product-engineering').then(
            (m) => m.DigitalProductEngineering,
          ),
      },
      {
        path: 'cloud-engineering',
        loadComponent: () =>
          import('./cloud-engineering/cloud-engineering').then(
            (m) => m.CloudEngineering,
          ),
      },
      {
        path: 'data-services',
        loadComponent: () =>
          import('./data-services/data-services').then((m) => m.DataServices),
      },
      {
        path: 'rcm',
        loadComponent: () => import('./rcm/rcm').then((m) => m.Rcm),
      },
      {
        path: 'automation-services',
        loadComponent: () =>
          import('./automation-services/automation-services').then(
            (m) => m.AutomationServices,
          ),
      },
      {
        path: 'managed-services',
        loadComponent: () =>
          import('./managed-services/managed-services').then(
            (m) => m.ManagedServices,
          ),
      },
      {
        path: 'utilities-management',
        loadComponent: () =>
          import('./utilities-management/utilities-management').then(
            (m) => m.UtilitiesManagement,
          ),
      },
    ],
  },
];
