"""Update what-we-offer sub-pages to full dp-sub design (image header + image in card)."""
import os
import re

BASE = r'c:\Manish\Everlunme\src\app\what-we-offer'

CSS = """:host { display: block; font-family: 'DM Sans', system-ui, sans-serif; }
    .dp-sub-bc { background: #142d6b; padding: 0.55rem 3rem; display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap; }
    .dp-sub-bc a, .dp-sub-bc span { color: rgba(255,255,255,0.6); font-size: 0.8rem; font-weight: 500; text-decoration: none; }
    .dp-sub-bc a:hover { color: #fff; } .dp-sub-bc .sep { color: rgba(255,255,255,0.25); } .dp-sub-bc .cur { color: #E87722; font-weight: 600; }
    .dp-sub-hdr { position: relative; padding: 7rem 3rem 6rem; text-align: center; overflow: hidden; min-height: 340px; display: flex; align-items: center; justify-content: center; }
    .dp-sub-hdr__bg { position: absolute; inset: 0; }
    .dp-sub-hdr__bg img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .dp-sub-hdr__overlay { position: absolute; inset: 0; background: linear-gradient(135deg,rgba(6,13,31,.9) 0%,rgba(27,58,143,.78) 100%); }
    .dp-sub-hdr__grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px); background-size: 50px 50px; pointer-events: none; }
    .dp-sub-hdr__inner { position: relative; z-index: 2; max-width: 820px; margin: 0 auto; }
    .dp-sub-hdr__badge { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.1); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.18); border-radius: 999px; padding: 0.4rem 1.2rem; margin-bottom: 1.8rem; }
    .dp-sub-hdr__badge i.ph { font-size: 1rem; color: #E87722; line-height: 1; }
    .dp-sub-hdr__badge span { color: rgba(255,255,255,0.85); font-size: 0.78rem; font-weight: 600; letter-spacing: 0.07em; text-transform: uppercase; }
    .dp-sub-hdr__title { font-family: "DM Serif Display", serif; font-size: clamp(2rem,4vw,3rem); color: #fff; font-weight: 400; line-height: 1.1; margin: 0; }
    .dp-sub-hdr__title em { font-style: italic; color: #E87722; }
    .dp-sub-body { padding: 5rem 3rem; background: #f5f5f3; }
    .dp-sub-body__inner { max-width: 1200px; margin: 0 auto; background: #fff; border-radius: 24px; padding: 3rem; position: relative; border: 1px solid rgba(27,58,143,.06); box-shadow: 0 8px 40px rgba(27,58,143,.07); display: grid; grid-template-columns: 1fr 360px; gap: 2.5rem; align-items: start; }
    .dp-sub-body__inner::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg,#1B3A8F,#E87722); border-radius: 24px 24px 0 0; }
    .dp-sub-body__text p { font-size: 1rem; color: #444; line-height: 1.85; margin-bottom: 1.4rem; }
    .dp-sub-body__text p:last-child { margin-bottom: 0; }
    .dp-sub-body__image { border-radius: 16px; overflow: hidden; box-shadow: 0 8px 32px rgba(27,58,143,.12); }
    .dp-sub-body__image img { width: 100%; height: 100%; object-fit: cover; display: block; min-height: 280px; max-height: 480px; }
    @media (max-width: 1024px) { .dp-sub-body__inner { grid-template-columns: 1fr; } }
    .dp-sub-cta { padding: 2.5rem 3rem; background: linear-gradient(135deg,#142d6b,#1B3A8F); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
    .dp-sub-cta__back { display: inline-flex; align-items: center; gap: 0.4rem; color: rgba(255,255,255,0.75); font-size: 0.88rem; font-weight: 600; text-decoration: none; transition: color 0.25s; }
    .dp-sub-cta__back:hover { color: #fff; }
    .dp-sub-cta__btn { display: inline-flex; align-items: center; gap: 0.5rem; background: #E87722; color: #fff; font-weight: 700; font-size: 0.9rem; padding: 0.75rem 1.8rem; border-radius: 999px; text-decoration: none; transition: transform 0.3s, box-shadow 0.3s; }
    .dp-sub-cta__btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(232,119,34,0.4); color: #fff; }
    @media (max-width: 768px) { .dp-sub-bc { padding: 0.55rem 1rem; margin-top: 58px; } .dp-sub-hdr { padding: 4rem 1.5rem; } .dp-sub-body { padding: 3rem 1.2rem; } .dp-sub-body__inner { padding: 2rem 1.5rem; } .dp-sub-cta { padding: 2rem 1.5rem; flex-direction: column; align-items: flex-start; } }"""


def build_page(selector, class_name, bc_links, title_html, badge_icon, badge_text,
               hdr_img, hdr_alt, content_paras, content_img, content_img_alt,
               back_route, back_label):
    """Generate a complete dp-sub page TypeScript file."""
    bc_html = ''
    for label, route in bc_links:
        bc_html += f'<a routerLink="{route}">{label}</a><span class="sep">></span>'
    # last breadcrumb is plain text (strip HTML tags from title_html)
    page_name = re.sub(r'<[^>]+>', '', title_html)
    bc_html += f'<span class="cur">{page_name}</span>'

    paras_html = '\n          '.join(f'<p>{p}</p>' for p in content_paras)

    return f'''import {{ Component }} from '@angular/core';
import {{ RouterLink }} from '@angular/router';

@Component({{
  selector: '{selector}',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="dp-sub-bc">{bc_html}</div>

    <header class="dp-sub-hdr">
      <div class="dp-sub-hdr__bg">
        <img src="Images/{hdr_img}" alt="{hdr_alt}" />
        <div class="dp-sub-hdr__overlay"></div>
      </div>
      <div class="dp-sub-hdr__grid"></div>
      <div class="dp-sub-hdr__inner">
        <div class="dp-sub-hdr__badge"><i class="ph {badge_icon}"></i><span>{badge_text}</span></div>
        <h1 class="dp-sub-hdr__title">{title_html}</h1>
      </div>
    </header>

    <section class="dp-sub-body">
      <div class="dp-sub-body__inner">
        <div class="dp-sub-body__text">
          {paras_html}
        </div>
        <div class="dp-sub-body__image">
          <img src="Images/{content_img}" alt="{content_img_alt}" loading="lazy" />
        </div>
      </div>
    </section>

    <section class="dp-sub-cta">
      <a routerLink="{back_route}" class="dp-sub-cta__back"><i class="ph ph-arrow-left"></i> {back_label}</a>
      <a routerLink="/contact-us" class="dp-sub-cta__btn">Talk to an Expert <i class="ph ph-arrow-right"></i></a>
    </section>
  `,
  styles: [`{CSS}`],
}})
export class {class_name} {{}}
'''


def extract_stub_paras(txt):
    """Extract paragraphs from old stub-page format."""
    paras = re.findall(r'<p class="stub-(?:lead|body)">(.*?)</p>', txt, re.S)
    # Clean encoding artifacts
    for i, p in enumerate(paras):
        p = p.replace('â€"', '—').replace('â€™', "'").replace('â€˜', "'")
        p = p.replace('â€œ', '"').replace('â€', '"').replace('Â·', '·')
        paras[i] = p.strip()
    return paras


def extract_dp_paras(txt):
    """Extract paragraphs from dp-sub-body format (single-column card)."""
    # Find content inside dp-sub-body__inner
    m = re.search(r'<div class="dp-sub-body__inner">(.*?)</div></section>', txt, re.S)
    if m:
        inner = m.group(1)
        paras = re.findall(r'<p>(.*?)</p>', inner, re.S)
        for i, p in enumerate(paras):
            p = p.replace('â€"', '—').replace('â€™', "'").replace('â€˜', "'")
            p = p.replace('â€œ', '"').replace('â€', '"').replace('Â·', '·')
            paras[i] = p.strip()
        return paras
    return []


# ─── DIGITAL PRODUCT ENGINEERING ──────────────────────────────────────────────
DPE_PAGES = [
    {
        'name': 'ai-data-integration',
        'selector': 'app-ai-data-integration',
        'class': 'AiDataIntegration',
        'title': 'AI and <em>Data Integration</em>',
        'icon': 'ph-robot',
        'hdr_img': 'image_002.jpg',
        'hdr_alt': 'AI and Data Integration',
        'content_img': 'image_046.jpg',
        'content_img_alt': 'AI Data Integration',
    },
    {
        'name': 'api-first-microservices-architecture',
        'selector': 'app-api-first-microservices-architecture',
        'class': 'ApiFirstMicroservicesArchitecture',
        'title': 'API-First and <em>Microservices Architecture</em>',
        'icon': 'ph-plug',
        'hdr_img': 'image_024.jpg',
        'hdr_alt': 'API-First Microservices Architecture',
        'content_img': 'image_048.jpg',
        'content_img_alt': 'API Microservices',
    },
    {
        'name': 'cloud-native-application-development',
        'selector': 'app-cloud-native-application-development',
        'class': 'CloudNativeApplicationDevelopment',
        'title': 'Cloud-Native <em>Application Development</em>',
        'icon': 'ph-cloud',
        'hdr_img': 'image_027.jpg',
        'hdr_alt': 'Cloud-Native Application Development',
        'content_img': 'image_052.jpg',
        'content_img_alt': 'Cloud Native Apps',
    },
    {
        'name': 'devops-cicd-release-automation',
        'selector': 'app-devops-cicd-release-automation',
        'class': 'DevopsCicdReleaseAutomation',
        'title': 'DevOps, CI/CD and <em>Release Automation</em>',
        'icon': 'ph-arrows-clockwise',
        'hdr_img': 'image_029.jpg',
        'hdr_alt': 'DevOps CI/CD Release Automation',
        'content_img': 'image_054.jpg',
        'content_img_alt': 'DevOps Automation',
    },
    {
        'name': 'legacy-application-modernization',
        'selector': 'app-legacy-application-modernization',
        'class': 'LegacyApplicationModernization',
        'title': 'Legacy Application <em>Modernization</em>',
        'icon': 'ph-arrow-counter-clockwise',
        'hdr_img': 'image_033.jpg',
        'hdr_alt': 'Legacy Application Modernization',
        'content_img': 'image_059.jpg',
        'content_img_alt': 'Application Modernization',
    },
    {
        'name': 'ongoing-product-enhancement-support',
        'selector': 'app-ongoing-product-enhancement-support',
        'class': 'OngoingProductEnhancementSupport',
        'title': 'Ongoing Product Enhancement <em>and Support</em>',
        'icon': 'ph-wrench',
        'hdr_img': 'image_039.jpg',
        'hdr_alt': 'Ongoing Product Enhancement and Support',
        'content_img': 'image_045.jpg',
        'content_img_alt': 'Product Enhancement Support',
    },
    {
        'name': 'product-strategy-roadmap',
        'selector': 'app-product-strategy-roadmap',
        'class': 'ProductStrategyRoadmap',
        'title': 'Product Strategy <em>and Roadmap</em>',
        'icon': 'ph-map-trifold',
        'hdr_img': 'image_042.jpg',
        'hdr_alt': 'Product Strategy and Roadmap',
        'content_img': 'image_026.jpg',
        'content_img_alt': 'Product Strategy',
    },
    {
        'name': 'ux-ui-design-prototyping',
        'selector': 'app-ux-ui-design-prototyping',
        'class': 'UxUiDesignPrototyping',
        'title': 'UX/UI Design <em>and Prototyping</em>',
        'icon': 'ph-pencil-ruler',
        'hdr_img': 'image_028.jpg',
        'hdr_alt': 'UX UI Design and Prototyping',
        'content_img': 'image_034.jpg',
        'content_img_alt': 'UX UI Design',
    },
]

DPE_BC = [('Home', '/'), ('What We Offer', '/what-we-offer'),
          ('Digital Product Engineering', '/what-we-offer/digital-product-engineering')]

dpe_base = os.path.join(BASE, 'digital-product-engineering')
for pg in DPE_PAGES:
    ts_path = os.path.join(dpe_base, pg['name'], pg['name'] + '.ts')
    txt = open(ts_path, encoding='utf-8', errors='ignore').read()
    paras = extract_stub_paras(txt)
    if not paras:
        print(f"WARNING: No paras found in {pg['name']}")
        continue
    content = build_page(
        selector=pg['selector'],
        class_name=pg['class'],
        bc_links=DPE_BC,
        title_html=pg['title'],
        badge_icon=pg['icon'],
        badge_text='Digital Product Engineering',
        hdr_img=pg['hdr_img'],
        hdr_alt=pg['hdr_alt'],
        content_paras=paras,
        content_img=pg['content_img'],
        content_img_alt=pg['content_img_alt'],
        back_route='/what-we-offer/digital-product-engineering',
        back_label='Back to Digital Product Engineering',
    )
    with open(ts_path, 'w', encoding='utf-8', newline='\n') as f:
        f.write(content)
    print(f'DPE OK: {pg["name"]}')


# ─── DATA SERVICES ─────────────────────────────────────────────────────────────
DATA_PAGES = [
    {'name': 'api-cloud-data-delivery', 'selector': 'app-api-cloud-data-delivery', 'class': 'ApiCloudDataDelivery',
     'title': 'API-Based and Cloud-Based <em>Data Delivery</em>', 'icon': 'ph-cloud-arrow-up',
     'hdr_img': 'image_050.jpg', 'hdr_alt': 'API Cloud Data Delivery', 'content_img': 'image_031.jpg', 'content_img_alt': 'Data Delivery'},
    {'name': 'data-integration-pipeline-development', 'selector': 'app-data-integration-pipeline-development', 'class': 'DataIntegrationPipelineDevelopment',
     'title': 'Data Integration and <em>Pipeline Development</em>', 'icon': 'ph-git-merge',
     'hdr_img': 'image_041.jpg', 'hdr_alt': 'Data Integration Pipeline', 'content_img': 'image_032.jpg', 'content_img_alt': 'Data Pipeline'},
    {'name': 'data-quality-validation', 'selector': 'app-data-quality-validation', 'class': 'DataQualityValidation',
     'title': 'Data Quality <em>and Validation</em>', 'icon': 'ph-check-circle',
     'hdr_img': 'image_044.jpg', 'hdr_alt': 'Data Quality Validation', 'content_img': 'image_033.jpg', 'content_img_alt': 'Data Quality'},
    {'name': 'data-strategy-architecture', 'selector': 'app-data-strategy-architecture', 'class': 'DataStrategyArchitecture',
     'title': 'Data Strategy <em>and Architecture</em>', 'icon': 'ph-blueprint',
     'hdr_img': 'image_038.jpg', 'hdr_alt': 'Data Strategy Architecture', 'content_img': 'image_039.jpg', 'content_img_alt': 'Data Strategy'},
    {'name': 'governance-security-access-controls', 'selector': 'app-governance-security-access-controls', 'class': 'GovernanceSecurityAccessControls',
     'title': 'Governance, Security and <em>Access Controls</em>', 'icon': 'ph-shield-check',
     'hdr_img': 'image_053.jpg', 'hdr_alt': 'Governance Security Access Controls', 'content_img': 'image_042.jpg', 'content_img_alt': 'Data Governance'},
    {'name': 'master-data-metadata-management', 'selector': 'app-master-data-metadata-management', 'class': 'MasterDataMetadataManagement',
     'title': 'Master Data and <em>Metadata Management</em>', 'icon': 'ph-database',
     'hdr_img': 'image_056.jpg', 'hdr_alt': 'Master Data Metadata Management', 'content_img': 'image_045.jpg', 'content_img_alt': 'Master Data'},
    {'name': 'ongoing-monitoring-support', 'selector': 'app-ongoing-monitoring-support', 'class': 'OngoingMonitoringSupport',
     'title': 'Ongoing Monitoring <em>and Support</em>', 'icon': 'ph-monitor',
     'hdr_img': 'image_058.jpg', 'hdr_alt': 'Ongoing Monitoring Support', 'content_img': 'image_024.jpg', 'content_img_alt': 'Monitoring Support'},
    {'name': 'reporting-analytics-enablement', 'selector': 'app-reporting-analytics-enablement', 'class': 'ReportingAnalyticsEnablement',
     'title': 'Reporting and <em>Analytics Enablement</em>', 'icon': 'ph-chart-bar',
     'hdr_img': 'image_010.jpg', 'hdr_alt': 'Reporting Analytics Enablement', 'content_img': 'image_027.jpg', 'content_img_alt': 'Analytics Reporting'},
]

DATA_BC = [('Home', '/'), ('What We Offer', '/what-we-offer'),
           ('Data Services', '/what-we-offer/data-services')]

data_base = os.path.join(BASE, 'data-services')
for pg in DATA_PAGES:
    ts_path = os.path.join(data_base, pg['name'], pg['name'] + '.ts')
    txt = open(ts_path, encoding='utf-8', errors='ignore').read()
    paras = extract_dp_paras(txt)
    if not paras:
        # Try stub format
        paras = extract_stub_paras(txt)
    if not paras:
        print(f"WARNING: No paras found in data-services/{pg['name']}")
        continue
    content = build_page(
        selector=pg['selector'],
        class_name=pg['class'],
        bc_links=DATA_BC,
        title_html=pg['title'],
        badge_icon=pg['icon'],
        badge_text='Data Services',
        hdr_img=pg['hdr_img'],
        hdr_alt=pg['hdr_alt'],
        content_paras=paras,
        content_img=pg['content_img'],
        content_img_alt=pg['content_img_alt'],
        back_route='/what-we-offer/data-services',
        back_label='Back to Data Services',
    )
    with open(ts_path, 'w', encoding='utf-8', newline='\n') as f:
        f.write(content)
    print(f'DATA OK: {pg["name"]}')


# ─── RCM ───────────────────────────────────────────────────────────────────────
RCM_PAGES = [
    {'name': 'charge-capture-clinical-coding-support', 'selector': 'app-charge-capture-clinical-coding-support', 'class': 'ChargeCaptureClinicalCodingSupport',
     'title': 'Charge Capture and <em>Clinical Coding Support</em>', 'icon': 'ph-notepad',
     'hdr_img': 'image_043.jpg', 'hdr_alt': 'Charge Capture Clinical Coding', 'content_img': 'image_048.jpg', 'content_img_alt': 'Clinical Coding'},
    {'name': 'claims-submission-clearinghouse-coordination', 'selector': 'app-claims-submission-clearinghouse-coordination', 'class': 'ClaimsSubmissionClearinghouseCoordination',
     'title': 'Claims Submission and <em>Clearinghouse Coordination</em>', 'icon': 'ph-paper-plane-tilt',
     'hdr_img': 'image_040.jpg', 'hdr_alt': 'Claims Submission Clearinghouse', 'content_img': 'image_052.jpg', 'content_img_alt': 'Claims Submission'},
    {'name': 'denial-prevention-management-appeals', 'selector': 'app-denial-prevention-management-appeals', 'class': 'DenialPreventionManagementAppeals',
     'title': 'Denial Prevention, Management <em>and Appeals</em>', 'icon': 'ph-shield-warning',
     'hdr_img': 'image_047.jpg', 'hdr_alt': 'Denial Prevention Management', 'content_img': 'image_029.jpg', 'content_img_alt': 'Denial Management'},
    {'name': 'patient-access-front-end-verification', 'selector': 'app-patient-access-front-end-verification', 'class': 'PatientAccessFrontEndVerification',
     'title': 'Patient Access and <em>Front-End Verification</em>', 'icon': 'ph-identification-card',
     'hdr_img': 'image_051.jpg', 'hdr_alt': 'Patient Access Front End Verification', 'content_img': 'image_002.jpg', 'content_img_alt': 'Patient Access'},
    {'name': 'patient-billing-collections-support', 'selector': 'app-patient-billing-collections-support', 'class': 'PatientBillingCollectionsSupport',
     'title': 'Patient Billing and <em>Collections Support</em>', 'icon': 'ph-receipt',
     'hdr_img': 'image_055.jpg', 'hdr_alt': 'Patient Billing Collections', 'content_img': 'image_059.jpg', 'content_img_alt': 'Patient Billing'},
    {'name': 'payment-posting-reconciliation', 'selector': 'app-payment-posting-reconciliation', 'class': 'PaymentPostingReconciliation',
     'title': 'Payment Posting <em>and Reconciliation</em>', 'icon': 'ph-bank',
     'hdr_img': 'image_057.jpg', 'hdr_alt': 'Payment Posting Reconciliation', 'content_img': 'image_046.jpg', 'content_img_alt': 'Payment Reconciliation'},
    {'name': 'reporting-analytics-kpi-tracking', 'selector': 'app-reporting-analytics-kpi-tracking', 'class': 'ReportingAnalyticsKpiTracking',
     'title': 'Reporting, Analytics and <em>KPI Tracking</em>', 'icon': 'ph-chart-line-up',
     'hdr_img': 'image_003.jpg', 'hdr_alt': 'Reporting Analytics KPI Tracking', 'content_img': 'image_054.jpg', 'content_img_alt': 'KPI Analytics'},
    {'name': 'underpayment-detection-contract-compliance', 'selector': 'app-underpayment-detection-contract-compliance', 'class': 'UnderpaymentDetectionContractCompliance',
     'title': 'Underpayment Detection and <em>Contract Compliance</em>', 'icon': 'ph-magnifying-glass-dollar',
     'hdr_img': 'image_001.jpg', 'hdr_alt': 'Underpayment Detection Contract Compliance', 'content_img': 'image_033.jpg', 'content_img_alt': 'Contract Compliance'},
]

RCM_BC = [('Home', '/'), ('What We Offer', '/what-we-offer'),
          ('RCM', '/what-we-offer/rcm')]

rcm_base = os.path.join(BASE, 'rcm')
for pg in RCM_PAGES:
    ts_path = os.path.join(rcm_base, pg['name'], pg['name'] + '.ts')
    txt = open(ts_path, encoding='utf-8', errors='ignore').read()
    paras = extract_dp_paras(txt)
    if not paras:
        paras = extract_stub_paras(txt)
    if not paras:
        print(f"WARNING: No paras found in rcm/{pg['name']}")
        continue
    content = build_page(
        selector=pg['selector'],
        class_name=pg['class'],
        bc_links=RCM_BC,
        title_html=pg['title'],
        badge_icon=pg['icon'],
        badge_text='RCM as a Service',
        hdr_img=pg['hdr_img'],
        hdr_alt=pg['hdr_alt'],
        content_paras=paras,
        content_img=pg['content_img'],
        content_img_alt=pg['content_img_alt'],
        back_route='/what-we-offer/rcm',
        back_label='Back to RCM',
    )
    with open(ts_path, 'w', encoding='utf-8', newline='\n') as f:
        f.write(content)
    print(f'RCM OK: {pg["name"]}')

print('\nAll done!')
