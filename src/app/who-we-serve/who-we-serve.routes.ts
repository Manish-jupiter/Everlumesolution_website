import { Routes } from '@angular/router';

import { WhoWeServe } from './who-we-serve';

export const routes: Routes = [
  {
    path: '',
    component: WhoWeServe,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'telecom' },
      {
        path: 'healthcare',
        loadComponent: () =>
          import('./healthcare/healthcare').then((m) => m.Healthcare),
      },
      {
        path: 'banking',
        loadComponent: () => import('./banking/banking').then((m) => m.Banking),
      },
      {
        path: 'telecom',
        loadComponent: () => import('./telecom/telecom').then((m) => m.Telecom),
      },
      {
        path: 'retail',
        loadComponent: () => import('./retail/retail').then((m) => m.Retail),
      },
      {
        path: 'manufacturing',
        loadComponent: () =>
          import('./manufacturing/manufacturing').then((m) => m.Manufacturing),
      },
    ],
  },
];
