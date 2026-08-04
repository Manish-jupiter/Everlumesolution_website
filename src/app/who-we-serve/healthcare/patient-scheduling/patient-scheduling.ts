import { Component, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-patient-scheduling',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- â”€â”€â”€ BREADCRUMB â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <div class="breadcrumb-bar">
      <a routerLink="/">Home</a>
      <span class="sep">></span>
      <a routerLink="/who-we-serve/healthcare">Healthcare</a>
      <span class="sep">></span>
      <span class="current">Patient Scheduling &amp; Coordination</span>
    </div>

    <!-- â”€â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="ps-hero">
      <div class="ps-hero__bg">
        <img src="Images/image_046.jpg" alt="Patient scheduling" />
        <div class="ps-hero__overlay"></div>
      </div>
      <div class="ps-hero__abstract-ring"></div>
      <div class="ps-hero__abstract-blob"></div>
      <div class="ps-hero__particles" id="ps-particles"></div>
      <div class="ps-hero__content" data-reveal>
        <div class="ps-hero__badge">
          <span class="ps-hero__badge-dot"></span>
          <span>Agentic AI Solution</span>
        </div>
        <h1 class="ps-hero__heading">Patient Scheduling<br/><em>and Coordination</em></h1>
        <p class="ps-hero__sub">Our custom-built Agentic AI solutions transform the way healthcare organisations schedule, manage, and coordinate patient appointments across multiple clinics, specialties, departments, and care providers.</p>
      </div>
    </section>

    <!-- â”€â”€â”€ INTRO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="ps-intro">
      <div class="ps-intro__blob"></div>
      <div class="ps-intro__dots"></div>
      <div class="ps-intro__grid">
        <div class="ps-intro__text" data-reveal-left>
          <span class="ps-eyebrow">Overview</span>
          <h2 class="ps-section-heading">Intelligent AI agents that <em>autonomously manage</em> the entire scheduling lifecycle</h2>
          <p>Our custom-built Agentic AI solutions transform the way healthcare organisations schedule, manage, and coordinate patient appointments across multiple clinics, specialties, departments, and care providers. Intelligent AI agents autonomously manage appointment requests, optimise scheduling, send personalised reminders, coordinate rescheduling, and guide patients to the most appropriate care pathway based on provider availability, clinical urgency, patient preferences, and care requirements.</p>
          <p>By seamlessly integrating with Electronic Health Records (EHRs), CRM platforms, practice management systems, and patient communication channels, our scheduling agents orchestrate end-to-end appointment workflows while eliminating manual coordination and fragmented handoffs. They proactively manage scheduling conflicts, reduce missed appointments, improve resource utilisation, and ensure patients receive timely access to care.</p>
          <p>The result is a more efficient, connected, and patient-centric scheduling ecosystem that reduces administrative burden, enhances operational efficiency, improves patient satisfaction, and enables clinical and administrative teams to focus on delivering exceptional patient care rather than routine coordination tasks.</p>
        </div>
        <div class="ps-intro__visual" data-reveal-right>
          <div class="ps-intro__dot-grid"></div>
          <div class="ps-intro__ring"></div>
          <div class="ps-intro__img">
            <img src="Images/image_029.jpg" alt="AI scheduling" loading="lazy" />
          </div>
          <div class="ps-intro__float-card">
            <div class="ps-intro__float-icon">ðŸ“…</div>
            <div class="ps-intro__float-text">
              <strong>Smart Scheduling</strong>
              <span>AI-optimised workflows</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- â”€â”€â”€ CAPABILITIES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="ps-capabilities" id="ps-capabilities">
      <div class="ps-capabilities__ring"></div>
      <div class="ps-capabilities__blob"></div>
      <div class="ps-capabilities__inner">
        <div class="ps-capabilities__header" data-reveal>
          <span class="ps-eyebrow">What It Can Do</span>
          <h2 class="ps-section-heading">Powerful capabilities for<br/><em>seamless scheduling</em></h2>
        </div>
        <div class="ps-capabilities__grid">
          <div class="ps-cap-card" data-reveal>
            <div class="ps-cap-card__icon"><i class="ph ph-calendar"></i></div>
            <h3>Book, Cancel &amp; Reschedule</h3>
            <p>Book, cancel, and reschedule appointments.</p>
          </div>
          <div class="ps-cap-card" data-reveal>
            <div class="ps-cap-card__icon"><i class="ph ph-users-three"></i></div>
            <h3>Smart Provider Matching</h3>
            <p>Match patients with the right provider, location, or specialty.</p>
          </div>
          <div class="ps-cap-card" data-reveal>
            <div class="ps-cap-card__icon"><i class="ph ph-pulse"></i></div>
            <h3>Automated Reminders</h3>
            <p>Send reminders and follow-up messages.</p>
          </div>
          <div class="ps-cap-card" data-reveal>
            <div class="ps-cap-card__icon"><i class="ph ph-clock"></i></div>
            <h3>No-Show Risk Detection</h3>
            <p>Identify no-show risks and trigger outreach.</p>
          </div>
          <div class="ps-cap-card" data-reveal>
            <div class="ps-cap-card__icon"><i class="ph ph-arrows-left-right"></i></div>
            <h3>Multi-Step Coordination</h3>
            <p>Coordinate multi-step visits and referrals.</p>
          </div>
          <div class="ps-cap-card" data-reveal>
            <div class="ps-cap-card__icon"><i class="ph ph-gear-six"></i></div>
            <h3>Human Escalation</h3>
            <p>Escalate exceptions to staff when human review is needed.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- â”€â”€â”€ WHY IT MATTERS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="ps-why">
      <div class="ps-why__bg-grid"></div>
      <div class="ps-why__glow-1"></div>
      <div class="ps-why__glow-2"></div>
      <div class="ps-why__inner">
        <div class="ps-why__header" data-reveal>
          <span class="ps-eyebrow ps-eyebrow--light">Why It Matters</span>
          <h2 class="ps-section-heading ps-section-heading--light">Why it matters</h2>
          <p class="ps-why__text">Patient access is often delayed due to bottlenecks created by back-and-forth coordination, missed communications, and disconnected systems. Our agentic scheduling solution helps reduce delays, improve appointment fill rates, and create a smoother patient experience from the first request to the completed visit.</p>
        </div>
        <div class="ps-why__features">
          <div class="ps-why__feature" data-reveal>
            <div class="ps-why__feature-icon"><i class="ph ph-clock"></i></div>
            <div class="ps-why__feature-body">
              <strong>Reduce Delays</strong>
              <span>Eliminate back-and-forth coordination that slows patient access to care</span>
            </div>
          </div>
          <div class="ps-why__feature" data-reveal>
            <div class="ps-why__feature-icon"><i class="ph ph-calendar"></i></div>
            <div class="ps-why__feature-body">
              <strong>Fill Appointments</strong>
              <span>Maximise provider utilisation by intelligently filling open and cancelled slots</span>
            </div>
          </div>
          <div class="ps-why__feature" data-reveal>
            <div class="ps-why__feature-icon"><i class="ph ph-pulse"></i></div>
            <div class="ps-why__feature-body">
              <strong>Smoother Experience</strong>
              <span>Create a seamless patient journey from first request to completed visit</span>
            </div>
          </div>
          <div class="ps-why__feature" data-reveal>
            <div class="ps-why__feature-icon"><i class="ph ph-users-three"></i></div>
            <div class="ps-why__feature-body">
              <strong>Connected Systems</strong>
              <span>Bridge disconnected platforms into one unified scheduling ecosystem</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- â”€â”€â”€ BUSINESS VALUE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="ps-value" data-reveal>
      <div class="ps-value__ring"></div>
      <div class="ps-value__inner">
        <span class="ps-eyebrow">Business Value</span>
        <h2 class="ps-section-heading">Business value</h2>
        <div class="ps-value__grid">
          <div class="ps-value-card">
            <div class="ps-value-card__icon">ðŸ“‰</div>
            <span>Lower no-show rates.</span>
          </div>
          <div class="ps-value-card">
            <div class="ps-value-card__icon">âš¡</div>
            <span>Faster appointment turnaround.</span>
          </div>
          <div class="ps-value-card">
            <div class="ps-value-card__icon">ðŸ“ž</div>
            <span>Reduced call center workload.</span>
          </div>
          <div class="ps-value-card">
            <div class="ps-value-card__icon">ðŸ“Š</div>
            <span>Better utilization of provider schedules.</span>
          </div>
          <div class="ps-value-card">
            <div class="ps-value-card__icon">ðŸ˜Š</div>
            <span>Improved patient satisfaction and access.</span>
          </div>
        </div>
      </div>
    </section>

    <!-- â”€â”€â”€ CTA BAND â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
    <section class="ps-cta">
      <div class="ps-cta__ring"></div>
      <div class="ps-cta__dots"></div>
      <h2 class="ps-cta__heading">Ready to transform patient scheduling?</h2>
      <p class="ps-cta__sub">Let's discuss how our Agentic AI can streamline your scheduling workflows.</p>
      <a routerLink="/contact-us" class="ps-cta__btn">
        Schedule a Consultation
        <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
    </section>
  `,
  styles: [`
    :host {
      --blue: #1B3A8F;
      --orange: #E87722;
      --dark: #111111;
      --bg: #f5f5f3;
      --mid: #555555;
      --card-bg: #ffffff;
      --teal: #1B3A8F;
      --teal-dark: #142d6b;
      --teal-light: #E87722;
    }

    /* â”€â”€â”€ BREADCRUMB â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .breadcrumb-bar {
      background: var(--teal-dark);
      padding: 0.55rem 3rem;
    }
    .breadcrumb-bar a, .breadcrumb-bar span {
      color: rgba(255,255,255,0.65);
      font-size: 0.8rem;
      font-weight: 500;
      text-decoration: none;
    }
    .breadcrumb-bar a:hover { color: #fff; }
    .breadcrumb-bar .sep { margin: 0 0.45rem; color: rgba(255,255,255,0.3); }
    .breadcrumb-bar .current { color: var(--teal-light); font-weight: 600; }
    @media (max-width: 768px) {
      .breadcrumb-bar { padding: 0.55rem 1rem; margin-top: 58px; }
    }

    /* â”€â”€â”€ SHARED â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .ps-eyebrow {
      display: inline-block;
      color: var(--teal);
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 1rem;
    }
    .ps-eyebrow--light { color: var(--orange); }

    .ps-section-heading {
      font-family: "DM Serif Display", serif;
      font-size: clamp(1.8rem, 3vw, 2.5rem);
      color: var(--dark);
      font-weight: 400;
      line-height: 1.2;
      margin-bottom: 1.2rem;
    }
    .ps-section-heading em { color: var(--orange); font-style: italic; }
    .ps-section-heading--light { color: #fff; }

    /* â”€â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .ps-hero {
      position: relative;
      height: 55vh;
      min-height: 360px;
      max-height: 480px;
      overflow: hidden;
    }
    .ps-hero__bg {
      position: absolute;
      inset: 0;
    }
    .ps-hero__bg img {
      width: 100%; height: 100%;
      object-fit: cover;
      transform: scale(1.05);
      animation: heroZoom 12s ease-out forwards;
    }
    @keyframes heroZoom { to { transform: scale(1); } }

    .ps-hero__overlay {
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse at 20% 30%, rgba(232, 119, 34, 0.28), transparent 55%), radial-gradient(ellipse at 80% 70%, rgba(27, 58, 143, 0.45), transparent 55%), linear-gradient(180deg, rgba(16, 21, 42, 0.35), rgba(16, 21, 42, 0.85));
    }
    .ps-hero__abstract-ring {
      position: absolute;
      top: 8%; left: 4%;
      width: 220px; height: 220px;
      border: 1.5px solid rgba(255,255,255,0.1);
      border-radius: 50%;
      z-index: 1;
      animation: spinSlow 28s linear infinite;
    }
    .ps-hero__abstract-blob {
      position: absolute;
      bottom: 12%; right: 6%;
      width: 140px; height: 140px;
      background: rgba(232,119,34,0.15);
      border-radius: 50%;
      z-index: 1;
      filter: blur(40px);
      animation: drift 14s ease-in-out infinite;
    }
    .ps-hero__particles {
      position: absolute; inset: 0;
      z-index: 1; overflow: hidden;
      pointer-events: none;
    }
    .ps-hero__particle {
      position: absolute;
      width: 4px; height: 4px;
      background: rgba(255,255,255,0.4);
      border-radius: 50%;
      animation: particleRise linear infinite;
    }
    @keyframes particleRise {
      0% { transform: translateY(100vh) scale(0); opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { transform: translateY(-20px) scale(1); opacity: 0; }
    }

    .ps-hero__content {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 2rem;
      z-index: 2;
    }
    .ps-hero__badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(255,255,255,0.1);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255,255,255,0.2);
      border-radius: 999px;
      padding: 0.35rem 1.1rem;
      margin-bottom: 1.5rem;
      opacity: 0; transform: translateY(12px);
      animation: fadeUp 0.8s 0.3s forwards;
    }
    .ps-hero__badge-dot {
      width: 7px; height: 7px;
      background: var(--teal-light);
      border-radius: 50%;
      animation: pulse 2s infinite;
    }
    @keyframes pulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.5; transform:scale(0.7); } }
    .ps-hero__badge span:last-child {
      color: #fff; font-size: 0.78rem;
      font-weight: 600; letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .ps-hero__heading {
      font-family: "DM Serif Display", serif;
      font-size: clamp(1.8rem, 4vw, 3rem);
      color: #fff; font-weight: 400;
      line-height: 1.1; margin-bottom: 1.2rem;
      opacity: 0; transform: translateY(20px);
      animation: fadeUp 1s 0.5s forwards;
    }
    .ps-hero__heading em { font-style: italic; color: var(--orange); }
    .ps-hero__sub {
      font-size: 0.95rem; color: rgba(255,255,255,0.75);
      max-width: 580px; line-height: 1.6;
      margin-bottom: 1.5rem;
      opacity: 0; transform: translateY(20px);
      animation: fadeUp 1s 0.7s forwards;
    }
    .ps-hero__cta {
      display: inline-flex; align-items: center;
      gap: 0.5rem; background: var(--orange);
      color: #fff; font-weight: 600;
      font-size: 0.9rem; padding: 0.75rem 1.8rem;
      border-radius: 999px; text-decoration: none;
      transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
      opacity: 0; transform: translateY(20px);
      animation: fadeUp 1s 0.9s forwards;
    }
    .ps-hero__cta:hover {
      background: #c96418; color: #fff;
      transform: translateY(-3px);
      box-shadow: 0 12px 32px rgba(232,119,34,0.4);
    }
    @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }

    @media (max-width: 768px) {
      .ps-hero { height: 50vh; min-height: 320px; }
      .ps-hero__sub { font-size: 0.88rem; }
    }

    /* â”€â”€â”€ INTRO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .ps-intro {
      padding: 6rem 3rem;
      max-width: 1200px;
      margin: 0 auto;
      position: relative; overflow: hidden;
    }
    .ps-intro__blob {
      position: absolute;
      top: -60px; right: -80px;
      width: 300px; height: 300px;
      background: radial-gradient(circle, rgba(27,58,143,0.06) 0%, transparent 70%);
      border-radius: 50%;
      animation: drift 15s ease-in-out infinite;
      pointer-events: none;
    }
    .ps-intro__dots {
      position: absolute;
      bottom: -40px; left: -40px;
      width: 150px; height: 150px;
      background-image: radial-gradient(circle, rgba(232,119,34,0.2) 1.5px, transparent 1.5px);
      background-size: 16px 16px;
      opacity: 0.6; pointer-events: none;
      animation: float 10s ease-in-out infinite;
    }
    .ps-intro__grid {
      display: grid;
      grid-template-columns: 1.3fr 1fr;
      gap: 5rem; align-items: center;
    }
    .ps-intro__text p {
      font-size: 1rem; color: #444;
      line-height: 1.85; margin-bottom: 1.2rem;
    }
    .ps-intro__visual {
      position: relative; padding: 2rem;
    }
    .ps-intro__ring {
      position: absolute;
      top: -10px; right: -10px;
      width: 280px; height: 280px;
      border: 2px dashed rgba(27,58,143,0.1);
      border-radius: 50%;
      animation: spinSlow 35s linear infinite;
      pointer-events: none;
    }
    .ps-intro__ring::after {
      content: "";
      position: absolute;
      top: -5px; left: 50%;
      width: 10px; height: 10px;
      background: var(--orange);
      border-radius: 50%;
      box-shadow: 0 0 16px rgba(232,119,34,0.5);
    }
    .ps-intro__dot-grid {
      position: absolute;
      top: -15px; left: -15px;
      width: 120px; height: 120px;
      background-image: radial-gradient(circle, rgba(27,58,143,0.15) 1.5px, transparent 1.5px);
      background-size: 14px 14px;
      pointer-events: none; z-index: 0;
    }
    .ps-intro__img {
      width: 100%; border-radius: 24px;
      box-shadow: 0 20px 60px rgba(27,58,143,0.15);
      overflow: hidden; position: relative; z-index: 1;
    }
    .ps-intro__img img {
      width: 100%; height: auto; display: block;
    }
    .ps-intro__float-card {
      position: absolute;
      bottom: -30px; right: -20px;
      background: #fff; border-radius: 16px;
      padding: 1.1rem 1.4rem;
      box-shadow: 0 10px 40px rgba(0,0,0,0.1);
      display: flex; align-items: center;
      gap: 0.8rem; z-index: 2;
      animation: floatCard 4s ease-in-out infinite;
    }
    @keyframes floatCard { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
    .ps-intro__float-icon {
      width: 44px; height: 44px;
      background: linear-gradient(135deg, var(--orange), #c96418);
      border-radius: 12px;
      display: flex; align-items: center;
      justify-content: center; font-size: 1.2rem;
    }
    .ps-intro__float-text strong {
      display: block; font-size: 0.85rem; color: var(--dark);
    }
    .ps-intro__float-text span {
      font-size: 0.75rem; color: var(--mid);
    }
    @media (max-width: 991px) {
      .ps-intro { padding: 4rem 1.5rem; }
      .ps-intro__grid { grid-template-columns: 1fr; gap: 2.5rem; }
      .ps-intro__float-card { right: 10px; bottom: -20px; }
    }

    /* â”€â”€â”€ CAPABILITIES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .ps-capabilities {
      padding: 6rem 3rem;
      background: linear-gradient(180deg, rgba(27,58,143,0.04) 0%, var(--bg) 100%);
      position: relative; overflow: hidden;
    }
    .ps-capabilities__ring {
      position: absolute;
      top: 100px; left: -120px;
      width: 350px; height: 350px;
      border: 1.5px solid rgba(27,58,143,0.06);
      border-radius: 50%;
      pointer-events: none;
      animation: spinSlow 40s linear infinite;
    }
    .ps-capabilities__blob {
      position: absolute;
      bottom: 50px; right: -80px;
      width: 200px; height: 200px;
      background: rgba(232,119,34,0.04);
      border-radius: 50%;
      filter: blur(60px);
      animation: drift 15s ease-in-out infinite;
      pointer-events: none;
    }
    .ps-capabilities__inner {
      max-width: 1200px; margin: 0 auto;
    }
    .ps-capabilities__header {
      text-align: center; margin-bottom: 4rem;
    }
    .ps-capabilities__grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 1.5rem;
      counter-reset: cap-counter;
    }
    .ps-cap-card {
      background: var(--card-bg);
      border-radius: 20px;
      padding: 2rem 1.8rem;
      border: 1px solid rgba(27,58,143,0.06);
      position: relative; overflow: hidden;
      transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s, border-color 0.3s;
      display: flex; flex-direction: column;
      gap: 0.8rem;
      box-shadow: 0 4px 20px rgba(27,58,143,0.06);
      counter-increment: cap-counter;
    }
    .ps-cap-card::before {
      content: "";
      position: absolute; top: 0; left: 0;
      width: 100%; height: 3px;
      background: linear-gradient(90deg, var(--blue), var(--orange));
      opacity: 0.5; transition: opacity 0.4s, height 0.4s;
    }
    .ps-cap-card:hover::before { opacity: 1; height: 4px; }
    .ps-cap-card::after {
      content: "0" counter(cap-counter);
      position: absolute; bottom: 12px; right: 16px;
      font-family: "DM Serif Display", serif;
      font-size: 2.5rem; font-weight: 400;
      color: rgba(27,58,143,0.04);
      line-height: 1; pointer-events: none;
      transition: color 0.4s;
    }
    .ps-cap-card:hover::after { color: rgba(27,58,143,0.08); }
    .ps-cap-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 50px rgba(27,58,143,0.12);
      border-color: rgba(27,58,143,0.15);
    }
    .ps-cap-card__icon {
      width: 50px; height: 50px;
      background: linear-gradient(135deg, rgba(27,58,143,0.08), rgba(232,119,34,0.06));
      border-radius: 14px;
      display: flex; align-items: center;
      justify-content: center;
      transition: background 0.3s, transform 0.3s;
      box-shadow: 0 2px 8px rgba(27,58,143,0.08);
    }
    .ps-cap-card:hover .ps-cap-card__icon {
      background: linear-gradient(135deg, var(--teal), var(--teal-dark));
      transform: scale(1.1) rotate(-3deg);
    }
    .ps-cap-card__icon i.ph { font-size: 1.4rem; color: var(--teal); transition: color 0.3s; line-height: 1; }
    .ps-cap-card:hover .ps-cap-card__icon i.ph { color: #fff; }
    .ps-cap-card h3 {
      font-size: 1rem; font-weight: 700;
      color: var(--dark); margin: 0;
    }
    .ps-cap-card p {
      font-size: 0.88rem; color: var(--mid);
      line-height: 1.6; margin: 0;
    }
    @media (max-width: 768px) {
      .ps-capabilities { padding: 3.5rem 1.2rem; }
      .ps-capabilities__grid { grid-template-columns: 1fr; }
    }

    /* â”€â”€â”€ WHY IT MATTERS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .ps-why {
      padding: 5rem 3rem;
      background: linear-gradient(135deg, #060d1f 0%, #0a1635 40%, #0f1f4a 100%);
      position: relative; overflow: hidden;
    }
    .ps-why__bg-grid {
      position: absolute; inset: 0;
      background-image:
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
      background-size: 60px 60px;
      pointer-events: none;
    }
    .ps-why__glow-1 {
      position: absolute;
      width: 400px; height: 400px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(232,119,34,0.15) 0%, transparent 70%);
      top: -100px; right: -100px;
      pointer-events: none;
      animation: drift 18s ease-in-out infinite;
    }
    .ps-why__glow-2 {
      position: absolute;
      width: 350px; height: 350px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(123,163,255,0.1) 0%, transparent 70%);
      bottom: -120px; left: -80px;
      pointer-events: none;
      animation: drift 14s ease-in-out infinite reverse;
    }
    .ps-why__inner {
      max-width: 1100px;
      margin: 0 auto;
      position: relative; z-index: 2;
    }
    .ps-why__header {
      text-align: center;
      margin-bottom: 3rem;
    }
    .ps-why__text {
      font-size: 1rem;
      color: rgba(255,255,255,0.65);
      line-height: 1.85;
      max-width: 800px;
      margin: 0 auto;
    }
    .ps-why__features {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
    .ps-why__feature {
      display: flex; align-items: flex-start;
      gap: 1rem; padding: 1.2rem 1.4rem;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 16px;
      backdrop-filter: blur(8px);
      transition: background 0.4s, border-color 0.4s, transform 0.4s, box-shadow 0.4s;
    }
    .ps-why__feature:hover {
      background: rgba(232,119,34,0.06);
      border-color: rgba(232,119,34,0.25);
      transform: translateY(-4px);
      box-shadow: 0 8px 30px rgba(232,119,34,0.08);
    }
    .ps-why__feature-icon {
      width: 42px; height: 42px;
      flex-shrink: 0;
      background: linear-gradient(135deg, var(--orange), #c96418);
      border-radius: 12px;
      display: flex; align-items: center;
      justify-content: center;
    }
    .ps-why__feature-icon i.ph { font-size: 1.2rem; color: #fff; line-height: 1; }
    .ps-why__feature-body strong {
      display: block; font-size: 0.88rem;
      color: #fff; margin-bottom: 0.2rem;
    }
    .ps-why__feature-body span {
      font-size: 0.8rem;
      color: rgba(255,255,255,0.5);
      line-height: 1.5;
    }
    @media (max-width: 768px) {
      .ps-why { padding: 3.5rem 1.2rem; }
      .ps-why__features { grid-template-columns: 1fr; }
    }

    /* â”€â”€â”€ BUSINESS VALUE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .ps-value {
      padding: 6rem 3rem;
      background: linear-gradient(180deg, var(--bg) 0%, rgba(232,119,34,0.04) 100%);
      position: relative; overflow: hidden;
    }
    .ps-value__ring {
      position: absolute;
      top: 60px; right: -60px;
      width: 180px; height: 180px;
      border: 1.5px dashed rgba(232,119,34,0.12);
      border-radius: 50%;
      animation: spinSlow 35s linear infinite reverse;
      pointer-events: none;
    }
    .ps-value__inner {
      max-width: 1100px;
      margin: 0 auto;
      text-align: center;
      position: relative; z-index: 1;
    }
    .ps-value__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
      margin-top: 3rem;
    }
    .ps-value-card {
      background: #fff;
      border-radius: 16px;
      padding: 2rem 1.5rem;
      text-align: center;
      border: 1px solid rgba(232,119,34,0.1);
      transition: transform 0.3s, box-shadow 0.3s;
    }
    .ps-value-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 14px 40px rgba(27,58,143,0.1);
    }
    .ps-value-card__icon {
      width: 52px; height: 52px;
      margin: 0 auto 1rem;
      background: linear-gradient(135deg, rgba(232,119,34,0.1), rgba(232,119,34,0.04));
      border-radius: 14px;
      display: flex; align-items: center;
      justify-content: center; font-size: 1.4rem;
    }
    .ps-value-card span {
      font-size: 0.92rem; font-weight: 600;
      color: var(--dark); line-height: 1.5;
    }
    @media (max-width: 768px) {
      .ps-value { padding: 3.5rem 1.2rem; }
      .ps-value__grid { grid-template-columns: 1fr 1fr; }
    }
    @media (max-width: 480px) {
      .ps-value__grid { grid-template-columns: 1fr; }
    }

    /* â”€â”€â”€ CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    .ps-cta {
      background: linear-gradient(135deg, #142d6b 0%, #1B3A8F 100%);
      padding: 4rem 3rem;
      text-align: center;
      position: relative; overflow: hidden;
    }
    .ps-cta::before {
      content: "";
      position: absolute;
      width: 400px; height: 400px;
      border-radius: 50%;
      background: rgba(232,119,34,0.08);
      top: -150px; right: -100px;
      pointer-events: none;
    }
    .ps-cta__ring {
      position: absolute;
      bottom: -80px; left: 10%;
      width: 250px; height: 250px;
      border: 2px solid rgba(255,255,255,0.08);
      border-radius: 50%;
      animation: spinSlow 20s linear infinite;
    }
    .ps-cta__dots {
      position: absolute;
      top: 20px; left: 50%;
      width: 100px; height: 100px;
      background-image: radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px);
      background-size: 12px 12px;
      pointer-events: none;
      animation: drift 12s ease-in-out infinite;
    }
    .ps-cta__heading {
      font-family: "DM Serif Display", serif;
      font-size: clamp(1.5rem, 3vw, 2.2rem);
      color: #fff; font-weight: 400;
      margin-bottom: 1rem;
      position: relative;
    }
    .ps-cta__sub {
      color: rgba(255,255,255,0.7);
      font-size: 1rem;
      margin-bottom: 2rem;
      position: relative;
    }
    .ps-cta__btn {
      display: inline-flex; align-items: center;
      gap: 0.5rem; background: var(--orange);
      color: #fff; font-weight: 700;
      font-size: 0.92rem; padding: 0.8rem 2rem;
      border-radius: 999px; text-decoration: none;
      transition: transform 0.3s, box-shadow 0.3s;
      position: relative;
    }
    .ps-cta__btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 30px rgba(232,119,34,0.4);
      color: #fff;
    }
    @media (max-width: 768px) {
      .ps-cta { padding: 3rem 1.2rem; }
    }

    /* â”€â”€â”€ ANIMATIONS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    @keyframes spinSlow { to { transform: rotate(360deg); } }
    @keyframes float {
      0%,100% { transform: translateY(0) rotate(0deg); }
      33% { transform: translateY(-15px) rotate(2deg); }
      66% { transform: translateY(8px) rotate(-1deg); }
    }
    @keyframes drift {
      0%,100% { transform: translate(0,0); }
      25% { transform: translate(20px,-10px); }
      50% { transform: translate(-10px,-20px); }
      75% { transform: translate(-20px,10px); }
    }

    /* â”€â”€â”€ REVEAL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
    [data-reveal] {
      opacity: 0; transform: translateY(40px);
      transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1);
    }
    [data-reveal].is-visible { opacity: 1; transform: translateY(0); }
    [data-reveal-left] {
      opacity: 0; transform: translateX(-40px);
      transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1);
    }
    [data-reveal-left].is-visible { opacity: 1; transform: translateX(0); }
    [data-reveal-right] {
      opacity: 0; transform: translateX(40px);
      transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1);
    }
    [data-reveal-right].is-visible { opacity: 1; transform: translateX(0); }
    [data-reveal-scale] {
      opacity: 0; transform: scale(0.9);
      transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1);
    }
    [data-reveal-scale].is-visible { opacity: 1; transform: scale(1); }
  `],
})
export class PatientScheduling implements AfterViewInit, OnDestroy {
  private revealObserver: IntersectionObserver | null = null;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const host = this.el.nativeElement as HTMLElement;

    // Particles
    const container = host.querySelector('#ps-particles');
    if (container) {
      for (let i = 0; i < 18; i++) {
        const p = document.createElement('span');
        p.className = 'ps-hero__particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (6 + Math.random() * 8) + 's';
        p.style.animationDelay = (Math.random() * 6) + 's';
        p.style.width = p.style.height = (2 + Math.random() * 4) + 'px';
        container.appendChild(p);
      }
    }

    // Scroll Reveal
    const revealEls = host.querySelectorAll('[data-reveal],[data-reveal-left],[data-reveal-right],[data-reveal-scale]');
    this.revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = Number((entry.target as HTMLElement).dataset['revealDelay']) || 0;
          setTimeout(() => entry.target.classList.add('is-visible'), delay * 150);
          this.revealObserver?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach((el, i) => {
      if (!(el as HTMLElement).dataset['revealDelay']) {
        (el as HTMLElement).dataset['revealDelay'] = String(i % 5);
      }
      this.revealObserver!.observe(el);
    });

    // Card hover glow
    const cards = host.querySelectorAll<HTMLElement>('.ps-cap-card');
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', ((e.clientX - rect.left) / rect.width * 100) + '%');
        card.style.setProperty('--mouse-y', ((e.clientY - rect.top) / rect.height * 100) + '%');
      });
    });
  }

  ngOnDestroy(): void {
    if (this.revealObserver) this.revealObserver.disconnect();
  }
}



