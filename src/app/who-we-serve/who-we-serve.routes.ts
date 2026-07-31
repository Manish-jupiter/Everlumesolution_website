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
        path: 'healthcare/patient-scheduling',
        loadComponent: () =>
          import('./healthcare/patient-scheduling/patient-scheduling').then((m) => m.PatientScheduling),
      },
      {
        path: 'healthcare/prior-authorization',
        loadComponent: () =>
          import('./healthcare/prior-authorization/prior-authorization').then((m) => m.PriorAuthorization),
      },
      {
        path: 'healthcare/claims-processing',
        loadComponent: () =>
          import('./healthcare/claims-processing/claims-processing').then((m) => m.ClaimsProcessing),
      },
      {
        path: 'healthcare/medical-coding',
        loadComponent: () =>
          import('./healthcare/medical-coding/medical-coding').then((m) => m.MedicalCoding),
      },
      {
        path: 'healthcare/care-gap-identification',
        loadComponent: () =>
          import('./healthcare/care-gap-identification/care-gap-identification').then((m) => m.CareGapIdentification),
      },
      {
        path: 'healthcare/clinical-digital-support',
        loadComponent: () =>
          import('./healthcare/clinical-digital-support/clinical-digital-support').then((m) => m.ClinicalDigitalSupport),
      },
      {
        path: 'healthcare/remote-patient-monitoring',
        loadComponent: () =>
          import('./healthcare/remote-patient-monitoring/remote-patient-monitoring').then((m) => m.RemotePatientMonitoring),
      },
      {
        path: 'healthcare/clinical-operational-workflow',
        loadComponent: () =>
          import('./healthcare/clinical-operational-workflow/clinical-operational-workflow').then((m) => m.ClinicalOperationalWorkflow),
      },
      {
        path: 'healthcare/human-in-the-loop',
        loadComponent: () =>
          import('./healthcare/human-in-the-loop/human-in-the-loop').then((m) => m.HumanInTheLoop),
      },
      {
        path: 'healthcare/security-compliance',
        loadComponent: () =>
          import('./healthcare/security-compliance/security-compliance').then((m) => m.SecurityCompliance),
      },
      {
        path: 'healthcare/security-compliance/integrated-security-operations',
        loadComponent: () =>
          import('./healthcare/security-compliance/integrated-security-operations/integrated-security-operations').then((m) => m.IntegratedSecurityOperations),
      },
      {
        path: 'healthcare/security-compliance/network-security-segmentation',
        loadComponent: () =>
          import('./healthcare/security-compliance/network-security-segmentation/network-security-segmentation').then((m) => m.NetworkSecuritySegmentation),
      },
      {
        path: 'healthcare/security-compliance/advanced-perimeter-protection',
        loadComponent: () =>
          import('./healthcare/security-compliance/advanced-perimeter-protection/advanced-perimeter-protection').then((m) => m.AdvancedPerimeterProtection),
      },
      {
        path: 'healthcare/security-compliance/endpoint-protection-threat-detection',
        loadComponent: () =>
          import('./healthcare/security-compliance/endpoint-protection-threat-detection/endpoint-protection-threat-detection').then((m) => m.EndpointProtectionThreatDetection),
      },
      {
        path: 'healthcare/security-compliance/zero-trust-security',
        loadComponent: () =>
          import('./healthcare/security-compliance/zero-trust-security/zero-trust-security').then((m) => m.ZeroTrustSecurity),
      },
      {
        path: 'healthcare/security-compliance/incident-detection-response',
        loadComponent: () =>
          import('./healthcare/security-compliance/incident-detection-response/incident-detection-response').then((m) => m.IncidentDetectionResponse),
      },
      {
        path: 'healthcare/security-compliance/continuous-monitoring-audit-readiness',
        loadComponent: () =>
          import('./healthcare/security-compliance/continuous-monitoring-audit-readiness/continuous-monitoring-audit-readiness').then((m) => m.ContinuousMonitoringAuditReadiness),
      },
      {
        path: 'healthcare/security-compliance/operational-security-practices',
        loadComponent: () =>
          import('./healthcare/security-compliance/operational-security-practices/operational-security-practices').then((m) => m.OperationalSecurityPractices),
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
