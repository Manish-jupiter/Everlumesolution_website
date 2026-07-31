import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

interface IndustryLink {
  label: string;
  icon: string;
  link: string;
  description: string;
}

@Component({
  selector: 'app-who-we-serve',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './who-we-serve.html',
  styleUrl: './who-we-serve.css',
})
export class WhoWeServe {
  readonly industries: IndustryLink[] = [
    {
      label: 'Healthcare',
      icon: 'ph-first-aid-kit',
      link: 'healthcare',
      description: 'Care coordination, RCM, and clinical intelligence.',
    },
    {
      label: 'Banking',
      icon: 'ph-bank',
      link: 'banking',
      description: 'Core modernization, digital banking, and fraud analytics.',
    },
    {
      label: 'Telecom',
      icon: 'ph-broadcast',
      link: 'telecom',
      description: 'BSS/OSS, 5G analytics, and network automation.',
    },
    {
      label: 'Retail',
      icon: 'ph-shopping-bag',
      link: 'retail',
      description: 'Omnichannel commerce and connected customer experience.',
    },
    {
      label: 'Manufacturing',
      icon: 'ph-factory',
      link: 'manufacturing',
      description: 'Industry 4.0, IIoT, and connected supply chains.',
    },
  ];
}
