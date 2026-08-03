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
        path: 'digital-product-engineering/product-strategy-roadmap',
        loadComponent: () =>
          import('./digital-product-engineering/product-strategy-roadmap/product-strategy-roadmap').then(
            (m) => m.ProductStrategyRoadmap,
          ),
      },
      {
        path: 'digital-product-engineering/ux-ui-design-prototyping',
        loadComponent: () =>
          import('./digital-product-engineering/ux-ui-design-prototyping/ux-ui-design-prototyping').then(
            (m) => m.UxUiDesignPrototyping,
          ),
      },
      {
        path: 'digital-product-engineering/cloud-native-application-development',
        loadComponent: () =>
          import('./digital-product-engineering/cloud-native-application-development/cloud-native-application-development').then(
            (m) => m.CloudNativeApplicationDevelopment,
          ),
      },
      {
        path: 'digital-product-engineering/api-first-microservices-architecture',
        loadComponent: () =>
          import('./digital-product-engineering/api-first-microservices-architecture/api-first-microservices-architecture').then(
            (m) => m.ApiFirstMicroservicesArchitecture,
          ),
      },
      {
        path: 'digital-product-engineering/legacy-application-modernization',
        loadComponent: () =>
          import('./digital-product-engineering/legacy-application-modernization/legacy-application-modernization').then(
            (m) => m.LegacyApplicationModernization,
          ),
      },
      {
        path: 'digital-product-engineering/ai-data-integration',
        loadComponent: () =>
          import('./digital-product-engineering/ai-data-integration/ai-data-integration').then(
            (m) => m.AiDataIntegration,
          ),
      },
      {
        path: 'digital-product-engineering/devops-cicd-release-automation',
        loadComponent: () =>
          import('./digital-product-engineering/devops-cicd-release-automation/devops-cicd-release-automation').then(
            (m) => m.DevOpsCicdReleaseAutomation,
          ),
      },
      {
        path: 'digital-product-engineering/ongoing-product-enhancement-support',
        loadComponent: () =>
          import('./digital-product-engineering/ongoing-product-enhancement-support/ongoing-product-enhancement-support').then(
            (m) => m.OngoingProductEnhancementSupport,
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
        path: 'cloud-engineering/cloud-strategy-architecture-design',
        loadComponent: () =>
          import('./cloud-engineering/cloud-strategy-architecture-design/cloud-strategy-architecture-design').then(
            (m) => m.CloudStrategyArchitectureDesign,
          ),
      },
      {
        path: 'cloud-engineering/application-infrastructure-migration',
        loadComponent: () =>
          import('./cloud-engineering/application-infrastructure-migration/application-infrastructure-migration').then(
            (m) => m.ApplicationInfrastructureMigration,
          ),
      },
      {
        path: 'cloud-engineering/cloud-native-app-development',
        loadComponent: () =>
          import('./cloud-engineering/cloud-native-app-development/cloud-native-app-development').then(
            (m) => m.CeCloudNativeAppDevelopment,
          ),
      },
      {
        path: 'cloud-engineering/devops-cicd-enablement',
        loadComponent: () =>
          import('./cloud-engineering/devops-cicd-enablement/devops-cicd-enablement').then(
            (m) => m.DevOpsCicdEnablement,
          ),
      },
      {
        path: 'cloud-engineering/infrastructure-as-code-automation',
        loadComponent: () =>
          import('./cloud-engineering/infrastructure-as-code-automation/infrastructure-as-code-automation').then(
            (m) => m.InfrastructureAsCodeAutomation,
          ),
      },
      {
        path: 'cloud-engineering/security-identity-compliance-controls',
        loadComponent: () =>
          import('./cloud-engineering/security-identity-compliance-controls/security-identity-compliance-controls').then(
            (m) => m.SecurityIdentityComplianceControls,
          ),
      },
      {
        path: 'cloud-engineering/monitoring-optimization-finops-support',
        loadComponent: () =>
          import('./cloud-engineering/monitoring-optimization-finops-support/monitoring-optimization-finops-support').then(
            (m) => m.MonitoringOptimizationFinopsSupport,
          ),
      },
      {
        path: 'cloud-engineering/backup-recovery-resilience-planning',
        loadComponent: () =>
          import('./cloud-engineering/backup-recovery-resilience-planning/backup-recovery-resilience-planning').then(
            (m) => m.BackupRecoveryResiliencePlanning,
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
