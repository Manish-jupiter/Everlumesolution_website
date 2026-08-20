import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface AboutTab {
  id: string;
  label: string;
  icon: string;
  paragraphs: string[];
  personName?: string;
  personTitle?: string;
  personImage?: string;
}

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs {
  readonly activeIndex = signal(0);

  readonly tabs: AboutTab[] = [
    {
      id: 'what-we-do',
      label: 'Promoter',
      icon: 'ph-compass',
      personName: 'Sartaj Rekhi',
      personTitle: 'Promoter & Visionary Entrepreneur',
      personImage: 'Images/Sartaj.jpg',
      paragraphs: [
        'A young, dynamic, and visionary serial entrepreneur, Sartaj Rekhi brings a proven track record of building, scaling, and transforming technology businesses. Combining entrepreneurial drive with strategic discipline and a deep understanding of evolving markets, he has consistently delivered sustainable growth and long-term value.',
        'As a promoter and business leader, Sartaj successfully guided a technology company through its public listing and IPO, and subsequently led its expansion to more than USD 200 million in revenue, significantly strengthening its market position.',
        'His leadership style combines empathy and inclusiveness with a strong focus on execution and measurable outcomes.',
        'As the promoter of EverLume Solutions, Sartaj brings together entrepreneurial experience, public-market insight, technology expertise, and a strong commitment to responsible innovation.',
        'Sartaj is a graduate from American River College and San Jose State University and has also completed advanced management programs from UC Berkeley. In his free time, he loves traveling and watching boxing.',
      ],
    },
    {
      id: 'our-approach',
      label: 'What We Do',
      icon: 'ph-compass',
      paragraphs: [
        'Our service portfolio is designed to support the full lifecycle of digital transformation. We help clients discover opportunities, design solutions, build platforms, automate processes, manage operations, and apply AI where it can create real advantage.',
        'Our capabilities include digital product engineering, cloud engineering, managed services, automation as a service, data services, and AI services. We also support agentic AI solutions across specific industry workflows — helping organizations move beyond task automation toward intelligent orchestration and decision support.',
        'For each engagement, we focus on solving the right problem first. Then we apply the right mix of engineering, data, cloud, and AI to deliver a solution that is scalable, efficient, and aligned with business goals.',
      ],
    },
    {
      id: 'our-approach-method',
      label: 'Our Approach',
      icon: 'ph-map-trifold',
      paragraphs: [
        'We take a structured but flexible approach to every project. We start by understanding the business context, operational challenges, user needs, and technology environment. From there, we shape a solution that balances short-term impact with long-term sustainability.',
        'We believe strong solutions come from combining thoughtful design with disciplined execution. That includes clear roadmaps, modern architecture, secure delivery, and ongoing support after launch. It also means keeping governance, monitoring, and human oversight in place where it matters most.',
        'Our clients value us because we help reduce complexity without reducing ambition. We bring clarity to complicated environments and help organizations move from fragmented processes to coordinated, intelligent operations.',
      ],
    },
    {
      id: 'our-strengths',
      label: 'Our Strengths',
      icon: 'ph-medal',
      paragraphs: [
        'We are experienced in building solutions that work across industries with demanding operational needs. Our offerings are especially relevant for sectors such as healthcare, banking, telecom, utilities management, retail, and manufacturing — where scale, compliance, responsiveness, and reliability are essential.',
        'In healthcare, we support areas such as revenue cycle management, human-in-the-loop controls, and governance-focused AI use cases. In banking, we help with fraud detection, case triage, customer service, and compliance workflows. In telecom, we enable network operations, customer support, and field service coordination. In utilities management, we support billing exceptions, customer requests, move-in and move-out workflows, complaints, and service orchestration. In retail and manufacturing, we help with inventory, customer experience, maintenance, quality, planning, and operational automation.',
        'This industry perspective matters because every organization faces different workflows, risks, and priorities. We do not apply a one-size-fits-all model. Instead, we adapt our services to the realities of the domain, the maturity of the client, and the outcomes that matter most.',
      ],
    },
    {
      id: 'why-clients',
      label: 'Why Clients Work With Us',
      icon: 'ph-handshake',
      paragraphs: [
        'Clients come to us when they need a partner who can connect strategy to execution. They want solutions that are not only technically strong, but also operationally useful and business-aligned.',
        'They also value our ability to work across disciplines. A strong digital solution often requires product thinking, cloud infrastructure, data readiness, automation logic, AI capability, and support services all working together. We bring those pieces together in a coordinated way.',
        'Most importantly, we focus on outcomes that can be felt in the business — faster turnaround times, lower operational overhead, better customer service, stronger control, improved resilience. These are the kinds of results our services are designed to deliver.',
      ],
    },
    {
      id: 'our-commitment',
      label: 'Our Commitment',
      icon: 'ph-seal-check',
      paragraphs: [
        'We are committed to building solutions that create lasting value. That means designing for reliability, scalability, security, and maintainability from the start. It also means staying engaged after launch to support optimization and continuous improvement.',
        'As businesses face rising complexity, changing customer expectations, and growing pressure to do more with less, they need partners who can help them adapt. We help organizations do exactly that through services that combine engineering excellence with operational intelligence.',
        'Our mission is simple: help clients transform the way they work with digital services that are practical, powerful, and built for the future.',
      ],
    },
  ];

  setTab(index: number): void {
    this.activeIndex.set(index);
  }
}
