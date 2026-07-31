import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

interface OfferingLink {
  label: string;
  icon: string;
  link: string;
  description: string;
}

@Component({
  selector: 'app-what-we-offer',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './what-we-offer.html',
  styleUrl: './what-we-offer.css',
})
export class WhatWeOffer {
  readonly offerings: OfferingLink[] = [
    {
      label: 'AI Services',
      icon: 'ph-brain',
      link: 'ai-services',
      description: 'Custom ML, generative AI, and intelligent automation.',
    },
    {
      label: 'Digital Product Engineering',
      icon: 'ph-code',
      link: 'digital-product-engineering',
      description: 'End-to-end product design, build, and scale.',
    },
    {
      label: 'Cloud Engineering',
      icon: 'ph-cloud',
      link: 'cloud-engineering',
      description: 'Multi-cloud strategy, migration, and modernization.',
    },
    {
      label: 'Data Services',
      icon: 'ph-database',
      link: 'data-services',
      description: 'Data platforms, pipelines, and analytics at scale.',
    },
    {
      label: 'RCM',
      icon: 'ph-heartbeat',
      link: 'rcm',
      description: 'Revenue cycle management for healthcare providers.',
    },
    {
      label: 'Automation Services',
      icon: 'ph-robot',
      link: 'automation-services',
      description: 'RPA, workflow orchestration, and AI-powered bots.',
    },
    {
      label: 'Managed Services',
      icon: 'ph-headset',
      link: 'managed-services',
      description: '24×7 application, cloud, and infrastructure operations.',
    },
    {
      label: 'Utilities Management',
      icon: 'ph-lightning',
      link: 'utilities-management',
      description: 'Smart utilities operations and asset intelligence.',
    },
  ];
}
