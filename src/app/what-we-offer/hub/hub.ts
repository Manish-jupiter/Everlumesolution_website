import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface OfferingLink {
  label: string;
  icon: string;
  link: string;
  description: string;
}

@Component({
  selector: 'app-what-we-offer-hub',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './hub.html',
  styleUrl: './hub.css',
})
export class WhatWeOfferHub {
  readonly offerings: OfferingLink[] = [
    {
      label: 'AI Services',
      icon: 'ph-brain',
      link: '/what-we-offer/ai-services',
      description: 'Custom ML, generative AI, and intelligent automation.',
    },
    {
      label: 'Digital Product Engineering',
      icon: 'ph-code',
      link: '/what-we-offer/digital-product-engineering',
      description: 'End-to-end product design, build, and scale.',
    },
    {
      label: 'Cloud Engineering',
      icon: 'ph-cloud',
      link: '/what-we-offer/cloud-engineering',
      description: 'Multi-cloud strategy, migration, and modernization.',
    },
    {
      label: 'Data Services',
      icon: 'ph-database',
      link: '/what-we-offer/data-services',
      description: 'Data platforms, pipelines, and analytics at scale.',
    },
    {
      label: 'RCM',
      icon: 'ph-heartbeat',
      link: '/what-we-offer/rcm',
      description: 'Revenue cycle management for healthcare providers.',
    },
    {
      label: 'Automation Services',
      icon: 'ph-robot',
      link: '/what-we-offer/automation-services',
      description: 'RPA, workflow orchestration, and AI-powered bots.',
    },
    {
      label: 'Managed Services',
      icon: 'ph-headset',
      link: '/what-we-offer/managed-services',
      description: '24×7 application, cloud, and infrastructure operations.',
    },
    {
      label: 'Utilities Management',
      icon: 'ph-lightning',
      link: '/what-we-offer/utilities-management',
      description: 'Smart utilities operations and asset intelligence.',
    },
  ];
}
