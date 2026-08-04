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
        path: 'ai-services/ai-strategy-use-case-discovery',
        loadComponent: () =>
          import('./ai-services/ai-strategy-use-case-discovery/ai-strategy-use-case-discovery').then(
            (m) => m.AiStrategyUseCaseDiscovery,
          ),
      },
      {
        path: 'ai-services/machine-learning-predictive-modelling',
        loadComponent: () =>
          import('./ai-services/machine-learning-predictive-modelling/machine-learning-predictive-modelling').then(
            (m) => m.MachineLearningPredictiveModelling,
          ),
      },
      {
        path: 'ai-services/natural-language-processing-conversational-ai',
        loadComponent: () =>
          import('./ai-services/natural-language-processing-conversational-ai/natural-language-processing-conversational-ai').then(
            (m) => m.NaturalLanguageProcessingConversationalAi,
          ),
      },
      {
        path: 'ai-services/computer-vision-intelligent-automation',
        loadComponent: () =>
          import('./ai-services/computer-vision-intelligent-automation/computer-vision-intelligent-automation').then(
            (m) => m.ComputerVisionIntelligentAutomation,
          ),
      },
      {
        path: 'ai-services/data-preparation-model-integration',
        loadComponent: () =>
          import('./ai-services/data-preparation-model-integration/data-preparation-model-integration').then(
            (m) => m.DataPreparationModelIntegration,
          ),
      },
      {
        path: 'ai-services/deployment-monitoring-optimization',
        loadComponent: () =>
          import('./ai-services/deployment-monitoring-optimization/deployment-monitoring-optimization').then(
            (m) => m.DeploymentMonitoringOptimization,
          ),
      },
      {
        path: 'ai-services/governance-security-responsible-ai-controls',
        loadComponent: () =>
          import('./ai-services/governance-security-responsible-ai-controls/governance-security-responsible-ai-controls').then(
            (m) => m.GovernanceSecurityResponsibleAiControls,
          ),
      },
      {
        path: 'ai-services/ongoing-support-enhancement',
        loadComponent: () =>
          import('./ai-services/ongoing-support-enhancement/ongoing-support-enhancement').then(
            (m) => m.OngoingSupportEnhancement,
          ),
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
        path: 'data-services/data-strategy-architecture',
        loadComponent: () =>
          import('./data-services/data-strategy-architecture/data-strategy-architecture').then(
            (m) => m.DataStrategyArchitecture,
          ),
      },
      {
        path: 'data-services/data-integration-pipeline-development',
        loadComponent: () =>
          import('./data-services/data-integration-pipeline-development/data-integration-pipeline-development').then(
            (m) => m.DataIntegrationPipelineDevelopment,
          ),
      },
      {
        path: 'data-services/data-quality-validation',
        loadComponent: () =>
          import('./data-services/data-quality-validation/data-quality-validation').then(
            (m) => m.DataQualityValidation,
          ),
      },
      {
        path: 'data-services/master-data-metadata-management',
        loadComponent: () =>
          import('./data-services/master-data-metadata-management/master-data-metadata-management').then(
            (m) => m.MasterDataMetadataManagement,
          ),
      },
      {
        path: 'data-services/api-cloud-data-delivery',
        loadComponent: () =>
          import('./data-services/api-cloud-data-delivery/api-cloud-data-delivery').then(
            (m) => m.ApiCloudDataDelivery,
          ),
      },
      {
        path: 'data-services/governance-security-access-controls',
        loadComponent: () =>
          import('./data-services/governance-security-access-controls/governance-security-access-controls').then(
            (m) => m.GovernanceSecurityAccessControls,
          ),
      },
      {
        path: 'data-services/reporting-analytics-enablement',
        loadComponent: () =>
          import('./data-services/reporting-analytics-enablement/reporting-analytics-enablement').then(
            (m) => m.ReportingAnalyticsEnablement,
          ),
      },
      {
        path: 'data-services/ongoing-monitoring-support',
        loadComponent: () =>
          import('./data-services/ongoing-monitoring-support/ongoing-monitoring-support').then(
            (m) => m.OngoingMonitoringSupport,
          ),
      },
      {
        path: 'rcm',
        loadComponent: () => import('./rcm/rcm').then((m) => m.Rcm),
      },
      {
        path: 'rcm/patient-access-front-end-verification',
        loadComponent: () =>
          import('./rcm/patient-access-front-end-verification/patient-access-front-end-verification').then(
            (m) => m.PatientAccessFrontEndVerification,
          ),
      },
      {
        path: 'rcm/charge-capture-clinical-coding-support',
        loadComponent: () =>
          import('./rcm/charge-capture-clinical-coding-support/charge-capture-clinical-coding-support').then(
            (m) => m.ChargeCaptureClinicalCodingSupport,
          ),
      },
      {
        path: 'rcm/claims-submission-clearinghouse-coordination',
        loadComponent: () =>
          import('./rcm/claims-submission-clearinghouse-coordination/claims-submission-clearinghouse-coordination').then(
            (m) => m.ClaimsSubmissionClearinghouseCoordination,
          ),
      },
      {
        path: 'rcm/denial-prevention-management-appeals',
        loadComponent: () =>
          import('./rcm/denial-prevention-management-appeals/denial-prevention-management-appeals').then(
            (m) => m.DenialPreventionManagementAppeals,
          ),
      },
      {
        path: 'rcm/payment-posting-reconciliation',
        loadComponent: () =>
          import('./rcm/payment-posting-reconciliation/payment-posting-reconciliation').then(
            (m) => m.PaymentPostingReconciliation,
          ),
      },
      {
        path: 'rcm/underpayment-detection-contract-compliance',
        loadComponent: () =>
          import('./rcm/underpayment-detection-contract-compliance/underpayment-detection-contract-compliance').then(
            (m) => m.UnderpaymentDetectionContractCompliance,
          ),
      },
      {
        path: 'rcm/patient-billing-collections-support',
        loadComponent: () =>
          import('./rcm/patient-billing-collections-support/patient-billing-collections-support').then(
            (m) => m.PatientBillingCollectionsSupport,
          ),
      },
      {
        path: 'rcm/reporting-analytics-kpi-tracking',
        loadComponent: () =>
          import('./rcm/reporting-analytics-kpi-tracking/reporting-analytics-kpi-tracking').then(
            (m) => m.ReportingAnalyticsKpiTracking,
          ),
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
