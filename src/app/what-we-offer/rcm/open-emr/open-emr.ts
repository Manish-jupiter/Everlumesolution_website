import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-open-emr',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="open-emr-breadcrumb">
      <a routerLink="/">Home</a><span class="sep">></span>
      <a routerLink="/what-we-offer">What We Offer</a><span class="sep">></span>
      <a routerLink="/what-we-offer/rcm">RCM</a><span class="sep">></span>
      <span class="current">OpenEMR</span>
    </div>

    <header class="open-emr-hero">
      <div class="open-emr-hero__bg" aria-hidden="true">
        <img src="Images/image_046.jpg" alt="" />
        <div class="open-emr-hero__overlay"></div>
      </div>
      <div class="open-emr-hero__ring" aria-hidden="true"></div>
      <div class="open-emr-hero__blob" aria-hidden="true"></div>
      <div class="open-emr-hero__content">
        <div class="open-emr-hero__badge">
          <span class="open-emr-hero__badge-dot"></span>
          <span>What We Offer</span>
        </div>
        <h1 class="open-emr-hero__title">OpenEMR <em>Electronic Medical Record</em></h1>
        <p class="open-emr-hero__description">
          An open-source electronic health record platform that helps care teams organize patient
          charts, clinical documentation, and everyday practice workflows.
        </p>
      </div>
    </header>

    <section class="open-emr-overview">
      <div class="open-emr-overview__grid">
        <div class="open-emr-overview__copy">
          <span class="open-emr-eyebrow">OpenEMR Services</span>
          <h2>OpenEMR Implementation, <em>Customization &amp; Automation Services</em></h2>
          <h3>Beyond EHR installation — smarter workflows, seamless integrations and reliable support.</h3>
          <p>
            Your Electronic Health Record (EHR) system should do more than manage patient
            information. It should support your clinical workflows, simplify administrative tasks,
            connect essential healthcare applications and help your teams work more efficiently.
          </p>
          <p>
            At <strong>Everlume Solutions</strong>, we provide end-to-end OpenEMR implementation,
            customization, integration, intelligent automation and ongoing technical support
            services for healthcare organizations.
          </p>
          <p>
            Whether you are implementing OpenEMR for the first time or looking to improve an
            existing system, we help you adapt the platform to your operational requirements.
          </p>
        </div>

        <aside class="open-emr-overview__panel">
          <div class="open-emr-overview__panel-icon"><i class="ph ph-heartbeat"></i></div>
          <span class="open-emr-overview__panel-label">A connected care experience</span>
          <h3>More than patient records</h3>
          <ul>
            <li><i class="ph ph-check-circle"></i><span>Clinical workflows</span></li>
            <li><i class="ph ph-check-circle"></i><span>Simplified administration</span></li>
            <li><i class="ph ph-check-circle"></i><span>Connected healthcare applications</span></li>
            <li><i class="ph ph-check-circle"></i><span>Reliable technical support</span></li>
          </ul>
          <div class="open-emr-overview__panel-orbit" aria-hidden="true"></div>
        </aside>
      </div>
    </section>

    <section class="open-emr-services">
      <div class="open-emr-services__inner">
        <div class="open-emr-services__heading">
          <span class="open-emr-eyebrow open-emr-eyebrow--light">Built around your needs</span>
          <h2>Our Core <em>Services</em></h2>
          <p>Explore the OpenEMR services that support your implementation and ongoing operations.</p>
        </div>

        <div class="open-emr-services__grid">
          @for (service of coreServices; track service.route; let i = $index) {
            <a class="open-emr-service-card" [routerLink]="service.route">
              <span class="open-emr-service-card__number">0{{ i + 1 }}</span>
              <span class="open-emr-service-card__icon"><i class="ph {{ service.icon }}"></i></span>
              <span class="open-emr-service-card__title">{{ service.title }}</span>
              <span class="open-emr-service-card__action">
                Explore service <i class="ph ph-arrow-up-right"></i>
              </span>
            </a>
          }
        </div>
      </div>
    </section>

    <section class="open-emr-why">
      <div class="open-emr-why__inner">
        <div class="open-emr-why__layout">
          <div class="open-emr-why__heading">
            <span class="open-emr-eyebrow">Why EverLume</span>
            <h2>Why Choose EverLume for <em>OpenEMR Services?</em></h2>
            <h3>We Go Beyond Standard EHR Installation</h3>
            <p>
              Installing OpenEMR is just the starting point. The real value comes from customizing
              the platform, connecting it with other systems, automating repetitive activities and
              supporting it as your organization grows.
            </p>
          </div>

          <div class="open-emr-why__features">
            @for (feature of whyChooseFeatures; track feature.title; let i = $index) {
              <article class="open-emr-why-feature">
                <span class="open-emr-why-feature__number">0{{ i + 1 }}</span>
                <span class="open-emr-why-feature__icon" aria-hidden="true"><i class="ph {{ feature.icon }}"></i></span>
                <div>
                  <h4>{{ feature.title }}</h4>
                  <p>{{ feature.description }}</p>
                </div>
              </article>
            }
          </div>
        </div>

        <div class="open-emr-why__partnership">
          <span class="open-emr-why__partnership-icon" aria-hidden="true"><i class="ph ph-handshake"></i></span>
          <div>
            <h3>One Technology Partner. Complete OpenEMR Services.</h3>
            <p>
              EverLume combines software engineering, healthcare technology integration and
              intelligent automation to help organizations get more value from their OpenEMR
              environments.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="open-emr-audiences">
      <div class="open-emr-audiences__inner">
        <div class="open-emr-audiences__heading">
          <span class="open-emr-eyebrow">Who We Serve</span>
          <h2>OpenEMR for <em>Every Care Setting</em></h2>
          <p>Our OpenEMR services are designed for healthcare organizations of different sizes and specialties, including:</p>
        </div>

        <div class="open-emr-audiences__list">
          @for (audience of audiences; track audience) {
            <div class="open-emr-audience">
              <span class="open-emr-audience__icon"><i class="ph {{ audience.icon }}" aria-hidden="true"></i></span>
              <span>{{ audience.name }}</span>
            </div>
          }
        </div>

        <div class="open-emr-audiences__closing">
          <span class="open-emr-audiences__closing-icon"><i class="ph ph-arrows-clockwise" aria-hidden="true"></i></span>
          <p>We support organizations considering a new OpenEMR implementation as well as those seeking to enhance their existing EHR systems.</p>
        </div>
      </div>
    </section>

    <section class="open-emr-delivery">
      <div class="open-emr-delivery__inner">
        <div class="open-emr-delivery__heading">
          <span class="open-emr-eyebrow open-emr-eyebrow--light">A proven path forward</span>
          <h2>Our Delivery <em>Approach</em></h2>
          <p>From understanding your needs to supporting continuous improvement, we guide each stage of your OpenEMR journey.</p>
        </div>

        <div class="open-emr-delivery__steps">
          @for (step of deliverySteps; track step.title; let i = $index) {
            <article class="open-emr-delivery-step">
              <span class="open-emr-delivery-step__number">0{{ i + 1 }}</span>
              <span class="open-emr-delivery-step__icon"><i class="ph {{ step.icon }}" aria-hidden="true"></i></span>
              <h3>{{ step.title }}</h3>
              <p>{{ step.description }}</p>
            </article>
          }
        </div>

        <p class="open-emr-delivery__assurance">
          <i class="ph ph-shield-check" aria-hidden="true"></i>
          Throughout the engagement, we emphasize system reliability, data protection, interoperability and operational efficiency.
        </p>
      </div>
    </section>

    <section class="open-emr-cta">
      <div class="open-emr-cta__inner">
        <span class="open-emr-eyebrow open-emr-eyebrow--light">Let's move forward</span>
        <h2>Let's Make OpenEMR Work Better <em>for Your Organization</em></h2>
        <p>Whether you need a new OpenEMR implementation, customized functionality, intelligent workflow automation, third-party integrations or ongoing technical support, EverLume Solutions can help.</p>
        <p class="open-emr-cta__prompt">Let's discuss how we can simplify your healthcare operations and extend the capabilities of OpenEMR.</p>
        <a routerLink="/contact-us" class="open-emr-cta__button">Contact Us <span>|</span> Discuss Your OpenEMR Requirements <i class="ph ph-arrow-right" aria-hidden="true"></i></a>
      </div>
    </section>

    <section class="open-emr-about">
      <div class="open-emr-about__inner">
        <div class="open-emr-about__copy">
          <span class="open-emr-eyebrow">About the platform</span>
          <h2>About <em>OpenEMR</em></h2>
          <p>OpenEMR is a free and open-source Electronic Health Records (EHR) and medical practice management platform.</p>
          <p>EverLume Solutions Pvt. Ltd. provides independent OpenEMR implementation, customization, integration, automation and technical support services.</p>
          <p class="open-emr-about__disclaimer">
            EverLume Solutions is an independent OpenEMR services provider. Any formal OpenEMR Professional Support Vendor designation will be stated after official listing confirmation.
          </p>
        </div>

        <aside class="open-emr-about__details">
          <div class="open-emr-about__detail">
            <span>Official OpenEMR Website</span>
            <a href="https://www.open-emr.org/" target="_blank" rel="noopener noreferrer">open-emr.org <i class="ph ph-arrow-up-right" aria-hidden="true"></i></a>
          </div>
          <div class="open-emr-about__detail">
            <span>Service Provider</span>
            <strong>EverLume Solutions Pvt. Ltd.</strong>
          </div>
          <div class="open-emr-about__detail">
            <span>Markets Served</span>
            <strong>United States and India <small>(subject to service availability)</small></strong>
          </div>
          <div class="open-emr-about__detail">
            <span>Business Contact</span>
            <a href="https://www.everlumesolutions.com/" target="_blank" rel="noopener noreferrer">www.everlumesolutions.com <i class="ph ph-arrow-up-right" aria-hidden="true"></i></a>
          </div>
        </aside>
      </div>
    </section>
  `,
  styles: [`
    :host { display:block; font-family:'DM Sans',system-ui,sans-serif; }
    :host { --open-emr-orange:#E87722; --open-emr-blue:#1B3A8F; --open-emr-navy:#10152a; }
    .open-emr-breadcrumb { background:#142d6b; padding:.55rem 3rem; display:flex; align-items:center; gap:.4rem; flex-wrap:wrap; }
    .open-emr-breadcrumb a, .open-emr-breadcrumb span { color:rgba(255,255,255,.6); font-size:.8rem; font-weight:500; text-decoration:none; }
    .open-emr-breadcrumb a:hover { color:#fff; }
    .open-emr-breadcrumb .sep { color:rgba(255,255,255,.25); }
    .open-emr-breadcrumb .current { color:var(--open-emr-orange); font-weight:600; }
    .open-emr-hero { position:relative; height:60vh; min-height:400px; max-height:760px; overflow:hidden; }
    .open-emr-hero__bg { position:absolute; inset:0; }
    .open-emr-hero__bg img { width:100%; height:100%; object-fit:cover; display:block; }
    .open-emr-hero__overlay { position:absolute; inset:0; background:radial-gradient(ellipse at 20% 30%,rgba(232,119,34,.28),transparent 55%),radial-gradient(ellipse at 80% 70%,rgba(27,58,143,.45),transparent 55%),linear-gradient(180deg,rgba(16,21,42,.35),rgba(16,21,42,.85)); }
    .open-emr-hero__ring { position:absolute; top:-60px; right:-60px; width:400px; height:400px; border:1.5px solid rgba(255,255,255,.06); border-radius:50%; animation:spinSlow 40s linear infinite; }
    .open-emr-hero__blob { position:absolute; bottom:-80px; left:15%; width:300px; height:300px; border-radius:50%; background:radial-gradient(circle,rgba(232,119,34,.12),transparent 70%); animation:drift 18s ease-in-out infinite; }
    .open-emr-hero__content { position:absolute; inset:0; z-index:2; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:2rem; }
    .open-emr-hero__badge { display:inline-flex; align-items:center; gap:.5rem; background:rgba(255,255,255,.1); border:1px solid rgba(255,255,255,.2); border-radius:999px; padding:.35rem 1.1rem; margin-bottom:1.5rem; opacity:0; transform:translateY(12px); animation:fadeUp .8s .3s forwards; }
    .open-emr-hero__badge-dot { width:7px; height:7px; border-radius:50%; background:var(--open-emr-orange); }
    .open-emr-hero__badge span:last-child { color:#fff; font-size:.78rem; font-weight:600; letter-spacing:.06em; text-transform:uppercase; }
    .open-emr-hero__title { max-width:1100px; font-family:"DM Serif Display",serif; font-size:clamp(1.8rem,4vw,3rem); color:#fff; font-weight:400; line-height:1.1; margin:0 0 1.2rem; opacity:0; transform:translateY(20px); animation:fadeUp 1s .5s forwards; }
    .open-emr-hero__title em { color:var(--open-emr-orange); font-style:italic; }
    .open-emr-hero__description { max-width:760px; font-size:.95rem; color:rgba(255,255,255,.78); line-height:1.6; margin:0; opacity:0; transform:translateY(20px); animation:fadeUp 1s .7s forwards; }

    .open-emr-overview { position:relative; overflow:hidden; padding:6rem 3rem; background:#f5f5f3; }
    .open-emr-overview::before { content:""; position:absolute; top:-100px; right:-100px; width:320px; height:320px; border-radius:50%; background:radial-gradient(circle,rgba(27,58,143,.08),transparent 70%); }
    .open-emr-overview__grid { position:relative; z-index:1; display:grid; grid-template-columns:minmax(0,1.45fr) minmax(280px,.75fr); gap:4rem; align-items:center; max-width:1200px; margin:0 auto; }
    .open-emr-eyebrow { display:inline-block; margin-bottom:1rem; padding:.3rem .9rem; border-radius:999px; background:rgba(232,119,34,.1); color:var(--open-emr-orange); font-size:.72rem; font-weight:700; letter-spacing:.12em; text-transform:uppercase; }
    .open-emr-overview__copy h2,.open-emr-services__heading h2 { margin:0 0 1rem; font-family:"DM Serif Display",serif; font-size:clamp(1.8rem,3.2vw,2.6rem); font-weight:400; line-height:1.2; color:#111; }
    .open-emr-overview__copy h2 em,.open-emr-services__heading h2 em { color:var(--open-emr-orange); font-style:italic; }
    .open-emr-overview__copy h3 { margin:0 0 1.6rem; color:var(--open-emr-blue); font-size:1.05rem; font-weight:600; line-height:1.6; }
    .open-emr-overview__copy p { margin:0 0 1rem; color:#444; font-size:.98rem; line-height:1.85; }
    .open-emr-overview__copy p:last-child { margin-bottom:0; }
    .open-emr-overview__panel { position:relative; overflow:hidden; padding:2.4rem 2rem; border:1px solid rgba(27,58,143,.08); border-radius:24px; background:#fff; box-shadow:0 16px 48px rgba(27,58,143,.1); }
    .open-emr-overview__panel::before { content:""; position:absolute; top:0; left:0; width:100%; height:4px; background:linear-gradient(90deg,var(--open-emr-blue),var(--open-emr-orange)); }
    .open-emr-overview__panel-icon { display:flex; align-items:center; justify-content:center; width:54px; height:54px; margin-bottom:1.3rem; border-radius:16px; background:linear-gradient(135deg,rgba(27,58,143,.1),rgba(232,119,34,.1)); color:var(--open-emr-blue); font-size:1.6rem; }
    .open-emr-overview__panel-label { color:var(--open-emr-orange); font-size:.7rem; font-weight:700; letter-spacing:.11em; text-transform:uppercase; }
    .open-emr-overview__panel h3 { margin:.5rem 0 1.3rem; color:#151a2a; font-family:"DM Serif Display",serif; font-size:1.45rem; font-weight:400; }
    .open-emr-overview__panel ul { position:relative; z-index:1; display:grid; gap:.85rem; margin:0; padding:0; list-style:none; }
    .open-emr-overview__panel li { display:flex; align-items:flex-start; gap:.65rem; color:#454a55; font-size:.9rem; line-height:1.5; }
    .open-emr-overview__panel li i { flex:0 0 auto; margin-top:.1rem; color:var(--open-emr-orange); font-size:1rem; }
    .open-emr-overview__panel-orbit { position:absolute; right:-48px; bottom:-65px; width:180px; height:180px; border:1px dashed rgba(27,58,143,.12); border-radius:50%; }

    .open-emr-services { position:relative; overflow:hidden; padding:4.5rem 3rem 5rem; background:linear-gradient(135deg,#060d1f,#142d6b 65%,#1B3A8F); }
    .open-emr-services::before,.open-emr-services::after { content:""; position:absolute; width:340px; height:340px; border-radius:50%; pointer-events:none; }
    .open-emr-services::before { top:-180px; right:-90px; background:radial-gradient(circle,rgba(232,119,34,.15),transparent 70%); }
    .open-emr-services::after { bottom:-210px; left:-100px; background:radial-gradient(circle,rgba(123,163,255,.13),transparent 70%); }
    .open-emr-services__inner { position:relative; z-index:1; max-width:1200px; margin:0 auto; }
    .open-emr-services__heading { max-width:700px; margin:0 auto 2.2rem; text-align:center; }
    .open-emr-eyebrow--light { background:rgba(255,255,255,.12); color:rgba(255,255,255,.85); }
    .open-emr-services__heading h2 { margin-bottom:.8rem; color:#fff; }
    .open-emr-services__heading p { color:rgba(255,255,255,.76); font-size:.98rem; line-height:1.7; }
    .open-emr-services__grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:.9rem; }
    .open-emr-service-card { position:relative; display:flex; min-height:190px; flex-direction:column; align-items:flex-start; padding:1.35rem; overflow:hidden; border:1px solid rgba(255,255,255,.12); border-radius:18px; background:rgba(255,255,255,.07); color:#fff; text-decoration:none; backdrop-filter:blur(8px); transition:transform .25s ease,border-color .25s ease,background .25s ease,box-shadow .25s ease; }
    .open-emr-service-card:hover,.open-emr-service-card:focus-visible { transform:translateY(-4px); border-color:rgba(232,119,34,.55); background:rgba(255,255,255,.11); box-shadow:0 14px 30px rgba(0,0,0,.2); outline:none; }
    .open-emr-service-card__number { position:absolute; top:.9rem; right:1rem; color:rgba(255,255,255,.38); font-family:"DM Serif Display",serif; font-size:1rem; }
    .open-emr-service-card__icon { display:flex; align-items:center; justify-content:center; width:46px; height:46px; margin-bottom:1rem; border-radius:14px; background:rgba(232,119,34,.15); color:var(--open-emr-orange); font-size:1.4rem; transition:transform .25s ease,background .25s ease; }
    .open-emr-service-card:hover .open-emr-service-card__icon,.open-emr-service-card:focus-visible .open-emr-service-card__icon { transform:scale(1.06); background:rgba(232,119,34,.22); }
    .open-emr-service-card__title { max-width:230px; font-family:"DM Serif Display",serif; font-size:1.25rem; line-height:1.25; }
    .open-emr-service-card__action { display:flex; align-items:center; gap:.45rem; margin-top:auto; padding-top:.9rem; color:rgba(255,255,255,.72); font-size:.8rem; font-weight:600; }
    .open-emr-service-card__action i { color:var(--open-emr-orange); transition:transform .25s ease; }
    .open-emr-service-card:hover .open-emr-service-card__action i,.open-emr-service-card:focus-visible .open-emr-service-card__action i { transform:translate(3px,-3px); }

    .open-emr-why { position:relative; overflow:hidden; padding:5.5rem 3rem; background:#f5f5f3; }
    .open-emr-why::before { content:""; position:absolute; top:-150px; right:-120px; width:380px; height:380px; border-radius:50%; background:radial-gradient(circle,rgba(27,58,143,.08),transparent 70%); pointer-events:none; }
    .open-emr-why__inner { position:relative; z-index:1; max-width:1200px; margin:0 auto; }
    .open-emr-why__heading { max-width:none; margin:0; text-align:left; }
    .open-emr-why__heading h2 { margin:0 0 .8rem; color:#111; font-family:"DM Serif Display",serif; font-size:clamp(1.8rem,3.2vw,2.6rem); font-weight:400; line-height:1.2; }
    .open-emr-why__heading h2 em { color:var(--open-emr-orange); font-style:italic; }
    .open-emr-why__heading h3 { margin:0 0 .8rem; color:var(--open-emr-blue); font-size:1.08rem; font-weight:700; line-height:1.5; }
    .open-emr-why__heading p { max-width:470px; color:#4b4d53; font-size:.98rem; line-height:1.8; }
    .open-emr-why__layout { display:grid; grid-template-columns:minmax(0,.85fr) minmax(0,1.15fr); gap:5rem; align-items:start; }
    .open-emr-why__heading { position:sticky; top:110px; }
    .open-emr-why__features { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:2rem 1.5rem; }
    .open-emr-why-feature { position:relative; min-width:0; padding:.15rem .25rem 1.15rem 0; border-bottom:1px solid rgba(27,58,143,.16); }
    .open-emr-why-feature__number { position:absolute; top:.45rem; right:.35rem; color:rgba(232,119,34,.18); font-size:2.8rem; font-weight:700; letter-spacing:-.08em; line-height:1; }
    .open-emr-why-feature__icon { position:relative; z-index:1; display:flex; align-items:center; justify-content:center; width:44px; height:44px; border-radius:14px; background:linear-gradient(135deg,rgba(27,58,143,.12),rgba(232,119,34,.12)); color:var(--open-emr-blue); font-size:1.3rem; }
    .open-emr-why-feature h4 { position:relative; z-index:1; margin:.8rem 0 .35rem; color:#172e67; font-family:inherit; font-size:1.08rem; font-weight:700; line-height:1.4; }
    .open-emr-why-feature p { position:relative; z-index:1; margin:0; color:#4b4d53; font-size:.9rem; line-height:1.7; }
    .open-emr-why__partnership { display:flex; align-items:flex-start; gap:1rem; max-width:900px; margin:2.5rem auto 0; padding:.2rem 0 .2rem 1rem; border-left:3px solid var(--open-emr-orange); }
    .open-emr-why__partnership-icon { display:flex; flex:0 0 auto; align-items:center; justify-content:center; width:42px; height:42px; color:var(--open-emr-orange); font-size:1.5rem; }
    .open-emr-why__partnership h3 { margin:0 0 .5rem; color:#172e67; font-family:inherit; font-size:1.2rem; font-weight:700; line-height:1.4; }
    .open-emr-why__partnership p { margin:0; color:#4b4d53; font-size:.93rem; line-height:1.75; }

    .open-emr-audiences { padding:5rem 3rem; border-top:1px solid rgba(27,58,143,.12); background:#fff; }
    .open-emr-audiences__inner { max-width:1050px; margin:0 auto; }
    .open-emr-audiences__heading { max-width:760px; margin:0 auto 2rem; text-align:center; }
    .open-emr-audiences__heading h2 { margin:0 0 .8rem; color:#111; font-family:"DM Serif Display",serif; font-size:clamp(1.8rem,3.2vw,2.5rem); font-weight:400; line-height:1.2; }
    .open-emr-audiences__heading h2 em { color:var(--open-emr-orange); font-style:italic; }
    .open-emr-audiences__heading p { margin:0; color:#4b4d53; font-size:.98rem; line-height:1.75; }
    .open-emr-audiences__list { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); column-gap:3rem; }
    .open-emr-audience { display:flex; align-items:center; gap:.9rem; min-height:76px; padding:.8rem 0; border-bottom:1px solid rgba(27,58,143,.12); color:#30343d; font-size:.95rem; font-weight:600; line-height:1.55; }
    .open-emr-audience__icon { display:flex; flex:0 0 auto; align-items:center; justify-content:center; width:38px; height:38px; border-radius:12px; background:linear-gradient(135deg,rgba(27,58,143,.1),rgba(232,119,34,.1)); color:var(--open-emr-blue); font-size:1.15rem; }
    .open-emr-audiences__closing { display:flex; align-items:center; gap:1rem; max-width:900px; margin:2rem auto 0; padding:1.25rem 1.5rem; border-radius:16px; background:linear-gradient(120deg,#10152a,#1B3A8F); }
    .open-emr-audiences__closing-icon { display:flex; flex:0 0 auto; align-items:center; justify-content:center; width:42px; height:42px; border-radius:13px; background:rgba(232,119,34,.16); color:var(--open-emr-orange); font-size:1.3rem; }
    .open-emr-audiences__closing p { margin:0; color:rgba(255,255,255,.9); font-size:.95rem; line-height:1.7; }

    .open-emr-delivery { position:relative; overflow:hidden; padding:5rem 3rem; background:linear-gradient(135deg,#060d1f,#142d6b 65%,#1B3A8F); color:#fff; }
    .open-emr-delivery::before { content:""; position:absolute; top:-230px; right:-130px; width:480px; height:480px; border-radius:50%; background:radial-gradient(circle,rgba(232,119,34,.16),transparent 70%); pointer-events:none; }
    .open-emr-delivery__inner { position:relative; z-index:1; max-width:1200px; margin:0 auto; }
    .open-emr-delivery__heading { max-width:700px; margin:0 auto 2.5rem; text-align:center; }
    .open-emr-delivery__heading h2 { margin:0 0 .7rem; color:#fff; font-family:"DM Serif Display",serif; font-size:clamp(1.8rem,3.2vw,2.5rem); font-weight:400; line-height:1.2; }
    .open-emr-delivery__heading h2 em { color:var(--open-emr-orange); font-style:italic; }
    .open-emr-delivery__heading p { margin:0; color:rgba(255,255,255,.72); font-size:.96rem; line-height:1.7; }
    .open-emr-delivery__steps { display:grid; grid-template-columns:repeat(6,minmax(0,1fr)); gap:1.4rem; }
    .open-emr-delivery-step { min-width:0; padding-top:1rem; border-top:1px solid rgba(255,255,255,.24); }
    .open-emr-delivery-step__number { display:block; margin-bottom:.75rem; color:var(--open-emr-orange); font-size:.75rem; font-weight:700; letter-spacing:.08em; }
    .open-emr-delivery-step__icon { display:flex; align-items:center; justify-content:center; width:36px; height:36px; margin-bottom:.8rem; border-radius:11px; background:rgba(255,255,255,.1); color:#fff; font-size:1.15rem; }
    .open-emr-delivery-step h3 { margin:0 0 .55rem; color:#fff; font-size:1rem; font-weight:700; }
    .open-emr-delivery-step p { margin:0; color:rgba(255,255,255,.7); font-size:.84rem; line-height:1.7; }
    .open-emr-delivery__assurance { display:flex; align-items:flex-start; gap:.7rem; max-width:900px; margin:2.5rem auto 0; padding-top:1.2rem; border-top:1px solid rgba(255,255,255,.18); color:rgba(255,255,255,.82); font-size:.9rem; line-height:1.7; }
    .open-emr-delivery__assurance i { flex:0 0 auto; margin-top:.15rem; color:var(--open-emr-orange); font-size:1.1rem; }

    .open-emr-about { padding:5rem 3rem; background:#f5f5f3; }
    .open-emr-about__inner { display:grid; grid-template-columns:minmax(0,1fr) minmax(0,.9fr); gap:4rem; align-items:start; max-width:1100px; margin:0 auto; }
    .open-emr-about__copy h2 { margin:0 0 1rem; color:#111; font-family:"DM Serif Display",serif; font-size:clamp(1.8rem,3vw,2.4rem); font-weight:400; line-height:1.2; }
    .open-emr-about__copy h2 em { color:var(--open-emr-orange); font-style:italic; }
    .open-emr-about__copy p { margin:0 0 1rem; color:#444; font-size:.95rem; line-height:1.8; }
    .open-emr-about__copy .open-emr-about__disclaimer { margin-top:1.6rem; padding-left:1rem; border-left:2px solid var(--open-emr-orange); color:#656872; font-size:.83rem; font-style:italic; }
    .open-emr-about__details { overflow:hidden; border:1px solid rgba(27,58,143,.08); border-radius:18px; background:#fff; box-shadow:0 12px 36px rgba(27,58,143,.08); }
    .open-emr-about__detail { display:flex; flex-direction:column; gap:.35rem; padding:1rem 1.3rem; border-bottom:1px solid rgba(27,58,143,.1); }
    .open-emr-about__detail:last-child { border-bottom:0; }
    .open-emr-about__detail > span { color:#747985; font-size:.72rem; font-weight:700; letter-spacing:.08em; text-transform:uppercase; }
    .open-emr-about__detail strong,.open-emr-about__detail a { color:#172e67; font-size:.92rem; font-weight:600; line-height:1.5; text-decoration:none; }
    .open-emr-about__detail a { display:inline-flex; align-items:center; gap:.3rem; width:fit-content; color:var(--open-emr-blue); }
    .open-emr-about__detail a:hover { color:var(--open-emr-orange); }
    .open-emr-about__detail small { color:#656872; font-size:.82rem; font-weight:400; }

    .open-emr-cta { position:relative; overflow:hidden; padding:4.5rem 2rem; background:linear-gradient(120deg,#10152a,#1B3A8F); text-align:center; }
    .open-emr-cta::before { content:""; position:absolute; top:-200px; left:50%; width:420px; height:420px; border-radius:50%; background:radial-gradient(circle,rgba(232,119,34,.18),transparent 70%); transform:translateX(-50%); }
    .open-emr-cta__inner { position:relative; z-index:1; max-width:850px; margin:0 auto; }
    .open-emr-cta__inner h2 { margin:0 0 1rem; color:#fff; font-family:"DM Serif Display",serif; font-size:clamp(1.8rem,3.4vw,2.6rem); font-weight:400; line-height:1.2; }
    .open-emr-cta__inner h2 em { color:var(--open-emr-orange); font-style:italic; }
    .open-emr-cta__inner > p { margin:0 auto 1rem; color:rgba(255,255,255,.76); font-size:.96rem; line-height:1.75; }
    .open-emr-cta__inner .open-emr-cta__prompt { margin-bottom:1.6rem; color:#fff; font-weight:600; }
    .open-emr-cta__button { display:inline-flex; align-items:center; justify-content:center; gap:.55rem; padding:.85rem 1.5rem; border-radius:999px; background:var(--open-emr-orange); color:#fff; font-size:.9rem; font-weight:700; text-decoration:none; transition:background .2s ease,transform .2s ease; }
    .open-emr-cta__button:hover { transform:translateY(-2px); background:#d86b19; }

    @keyframes fadeUp { to { opacity:1; transform:translateY(0); } }
    @keyframes spinSlow { to { transform:rotate(360deg); } }
    @keyframes drift { 0%,100% { transform:translate(0,0); } 50% { transform:translate(20px,-20px); } }
    @media (max-width:1200px) {
      .open-emr-delivery__steps { grid-template-columns:repeat(3,minmax(0,1fr)); row-gap:2rem; }
    }
    @media (max-width:900px) {
      .open-emr-overview__grid { grid-template-columns:1fr; gap:2.5rem; }
      .open-emr-overview__panel { max-width:600px; }
      .open-emr-services__grid { grid-template-columns:repeat(2,minmax(0,1fr)); }
    }
    @media (max-width:1000px) {
      .open-emr-why__layout { grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr); gap:2.5rem; }
      .open-emr-why__heading { position:static; }
      .open-emr-about__inner { gap:2.5rem; }
    }
    @media (max-width:768px) {
      .open-emr-breadcrumb { padding:.55rem 1rem; }
      .open-emr-hero { min-height:380px; }
      .open-emr-hero__content { padding:1.5rem; }
      .open-emr-hero__title { font-size:clamp(1.8rem,7vw,2.4rem); }
      .open-emr-overview { padding:4rem 1.2rem; }
      .open-emr-overview__panel { padding:2rem 1.5rem; }
      .open-emr-services { padding:4rem 1.2rem; }
      .open-emr-services__heading { margin-bottom:2rem; }
      .open-emr-services__grid { grid-template-columns:1fr; }
      .open-emr-service-card { min-height:180px; }
      .open-emr-why { padding:4rem 1.2rem; }
      .open-emr-why__heading { margin-bottom:2rem; }
      .open-emr-why__layout { grid-template-columns:1fr; gap:2rem; }
      .open-emr-why__heading p { max-width:none; }
      .open-emr-why__features { grid-template-columns:1fr; gap:1.3rem; }
      .open-emr-why-feature { padding-right:1rem; }
      .open-emr-why-feature__icon { width:38px; height:38px; }
      .open-emr-why__partnership { gap:.7rem; margin-top:1.8rem; padding-top:1.3rem; }
      .open-emr-why__partnership-icon { width:34px; height:34px; }
      .open-emr-audiences { padding:4rem 1.2rem; }
      .open-emr-audiences__heading { margin-bottom:1.5rem; }
      .open-emr-audiences__list { grid-template-columns:1fr; }
      .open-emr-audiences__closing { align-items:flex-start; gap:.8rem; margin-top:1.5rem; padding:1rem; }
      .open-emr-audiences__closing-icon { width:36px; height:36px; }
      .open-emr-delivery { padding:4rem 1.2rem; }
      .open-emr-delivery__heading { margin-bottom:2rem; }
      .open-emr-delivery__steps { grid-template-columns:repeat(2,minmax(0,1fr)); gap:1.6rem 1rem; }
      .open-emr-about { padding:4rem 1.2rem; }
      .open-emr-about__inner { grid-template-columns:1fr; gap:2rem; }
      .open-emr-about__detail { padding:.9rem 1rem; }
      .open-emr-cta { padding:4rem 1.2rem; }
      .open-emr-cta__button { max-width:100%; flex-wrap:wrap; border-radius:14px; }
    }
    @media (max-width:420px) {
      .open-emr-delivery__steps { grid-template-columns:1fr; }
    }
  `],
})
export class OpenEmr {
  readonly coreServices = [
    {
      title: 'OpenEMR Implementation',
      icon: 'ph-rocket-launch',
      route: '/what-we-offer/rcm/open-emr/implementation',
    },
    {
      title: 'Customization',
      icon: 'ph-sliders-horizontal',
      route: '/what-we-offer/rcm/open-emr/customization',
    },
    {
      title: 'System Integration',
      icon: 'ph-plugs-connected',
      route: '/what-we-offer/rcm/open-emr/system-integration',
    },
    {
      title: 'AI & UiPath Automation',
      icon: 'ph-robot',
      route: '/what-we-offer/rcm/open-emr/ai-uipath-automation',
    },
    {
      title: 'Technical Support',
      icon: 'ph-headset',
      route: '/what-we-offer/rcm/open-emr/technical-support',
    },
  ];

  readonly whyChooseFeatures = [
    {
      title: 'End-to-End Implementation',
      description: 'From initial installation and configuration to migration, testing and go-live assistance.',
      icon: 'ph-rocket-launch',
    },
    {
      title: 'Business-Specific Customization',
      description: "Custom modules, clinical forms and workflows designed around your organization's operational requirements.",
      icon: 'ph-sliders-horizontal',
    },
    {
      title: 'Intelligent Automation',
      description: 'AI, Agentic AI and UiPath-powered automation to streamline administrative activities and reduce manual effort.',
      icon: 'ph-robot',
    },
    {
      title: 'Seamless System Integration',
      description: 'Connect OpenEMR with billing platforms, laboratory systems, third-party applications and other healthcare technologies.',
      icon: 'ph-plugs-connected',
    },
    {
      title: 'Ongoing Technical Support',
      description: 'Application maintenance, troubleshooting, upgrades and continuous improvements beyond implementation.',
      icon: 'ph-headset',
    },
  ];

  readonly audiences = [
    { name: 'Independent physician practices', icon: 'ph-stethoscope' },
    { name: 'Federally Qualified Health Centers (FQHCs)', icon: 'ph-hospital' },
    { name: 'Community health centers', icon: 'ph-first-aid-kit' },
    { name: 'Multi-specialty medical groups', icon: 'ph-users-three' },
    { name: 'Outpatient clinics', icon: 'ph-hospital' },
    { name: 'Behavioral health providers', icon: 'ph-brain' },
    { name: 'Multi-location healthcare organizations', icon: 'ph-buildings' },
    { name: 'Healthcare providers seeking EHR modernization', icon: 'ph-monitor' },
  ];

  readonly deliverySteps = [
    {
      title: 'Discover',
      description: 'Understand your healthcare workflows, existing technology environment and operational challenges.',
      icon: 'ph-magnifying-glass',
    },
    {
      title: 'Implement',
      description: "Install and configure OpenEMR according to your organization's requirements.",
      icon: 'ph-rocket-launch',
    },
    {
      title: 'Customize',
      description: 'Develop tailored modules, forms and workflows that support your clinical and administrative processes.',
      icon: 'ph-sliders-horizontal',
    },
    {
      title: 'Integrate',
      description: 'Connect OpenEMR with existing healthcare applications and external systems.',
      icon: 'ph-plugs-connected',
    },
    {
      title: 'Automate',
      description: 'Identify repetitive processes and introduce appropriate AI and UiPath automation.',
      icon: 'ph-robot',
    },
    {
      title: 'Support',
      description: 'Provide ongoing maintenance, troubleshooting and continuous enhancements.',
      icon: 'ph-headset',
    },
  ];
}
