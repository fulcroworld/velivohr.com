const SITE = "https://www.velivohr.com";
const ORG_ID = `${SITE}/#org`;
const SITE_ID = `${SITE}/#website`;

const org = {
  "@type": "ProfessionalService",
  "@id": ORG_ID,
  name: "VelivoHR",
  url: SITE,
  logo: `${SITE}/assets/VelioHRlogo.png`,
  description:
    "Specialist recruitment for the advertising, media, marketing and communications (marcom) industry in India.",
  areaServed: "IN",
  serviceType: "Recruitment Agency",
  email: "debolina@velivohr.com",
  founder: [
    { "@type": "Person", "@id": `${SITE}/#gokul`, name: "Gokul Krishnamurthy" },
    { "@type": "Person", "@id": `${SITE}/#debolina`, name: "Debolina Das" },
  ],
};

const website = {
  "@type": "WebSite",
  "@id": SITE_ID,
  url: SITE,
  name: "VelivoHR",
  publisher: { "@id": ORG_ID },
};

function breadcrumb(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: `${SITE}${item.path}`,
      })),
    ],
  };
}

export const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [org, website],
};

export const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([{ name: "About", path: "/about/" }]),
    {
      "@type": "AboutPage",
      url: `${SITE}/about/`,
      name: "About VelivoHR",
      isPartOf: { "@id": SITE_ID },
    },
    {
      "@type": "Person",
      "@id": `${SITE}/#gokul`,
      name: "Gokul Krishnamurthy",
      jobTitle: "Director, VelivoHR",
      worksFor: { "@id": ORG_ID },
      description:
        "Over two decades of insider experience across advertising, media and marcom, including editorial leadership at Campaign India, Campaign Middle East, The Times Group, and The Hindu BusinessLine.",
    },
    {
      "@type": "Person",
      "@id": `${SITE}/#debolina`,
      name: "Debolina Das",
      jobTitle: "Director, VelivoHR",
      worksFor: { "@id": ORG_ID },
      description:
        "HR leader with over a decade of experience in organizational strategy and human capital development, including Head of HR and Chief Recruiter roles at leading digital and marketing organizations.",
    },
  ],
};

export const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([{ name: "Services", path: "/services/" }]),
    {
      "@type": "Service",
      name: "Marcom Industry Recruitment",
      provider: { "@id": ORG_ID },
      serviceType: "Recruitment",
      areaServed: "IN",
      description:
        "End-to-end recruitment services for advertising, media, marketing and communications organizations — including sourcing, screening, verification, interview coordination, and offer management.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Recruitment Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sourcing & Screening",
              description:
                "Structured candidate identification and preliminary screening for marcom roles.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Background Verification",
              description:
                "Preliminary background verification checks, available on request.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Interview Coordination",
              description:
                "End-to-end scheduling, logistics, and feedback management.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Offer Management",
              description:
                "Salary negotiation support, offer rollout, and closing.",
            },
          },
        ],
      },
    },
  ],
};

export const processSchema = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([{ name: "How We Work", path: "/process/" }]),
    {
      "@type": "HowTo",
      name: "How VelivoHR Recruits for Marcom Organizations",
      description:
        "VelivoHR's 5-step recruitment process for advertising, media, marketing and communications organizations — from intake to onboarding.",
      provider: { "@id": ORG_ID },
      step: [
        {
          "@type": "HowToStep",
          position: "1",
          name: "Intake & Setup",
          text: "Confirm the Statement of Work, finalize the job description, salary bands, and evaluation rubric.",
        },
        {
          "@type": "HowToStep",
          position: "2",
          name: "Sourcing",
          text: "Structured candidate identification and scoring; first shortlist delivered in under an hour for active roles.",
        },
        {
          "@type": "HowToStep",
          position: "3",
          name: "Interviews",
          text: "End-to-end interview scheduling, assessment coordination, and structured feedback collection.",
        },
        {
          "@type": "HowToStep",
          position: "4",
          name: "Offer Management",
          text: "Negotiation support through offer rollout to final acceptance.",
        },
        {
          "@type": "HowToStep",
          position: "5",
          name: "Pre-joining Engagement",
          text: "Candidate engagement and onboarding support to ensure smooth joining.",
        },
      ],
    },
  ],
};

export const pricingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([{ name: "Pricing", path: "/pricing/" }]),
    {
      "@type": "Service",
      name: "Marcom Recruitment Services",
      provider: { "@id": ORG_ID },
      offers: [
        {
          "@type": "Offer",
          name: "Entry-Level Placement",
          description:
            "Recruitment fee for roles with Gross Annual CTC up to INR 6 Lakhs.",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "5",
            priceCurrency: "INR",
            unitText: "% of Gross Annual CTC",
          },
          eligibleRegion: "IN",
        },
        {
          "@type": "Offer",
          name: "Mid-Level Placement",
          description:
            "Recruitment fee for roles with Gross Annual CTC between INR 6–18 Lakhs.",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "5",
            priceCurrency: "INR",
            unitText: "% of Gross Annual CTC",
          },
          eligibleRegion: "IN",
        },
        {
          "@type": "Offer",
          name: "Senior-Level Placement",
          description:
            "Recruitment fee for roles with Gross Annual CTC above INR 18 Lakhs.",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "8.33",
            priceCurrency: "INR",
            unitText: "% of Gross Annual CTC",
          },
          eligibleRegion: "IN",
        },
      ],
    },
  ],
};

export const guaranteeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([{ name: "Guarantee", path: "/guarantee/" }]),
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "When does the VelivoHR placement guarantee not apply?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The guarantee does not apply to exits arising from misrepresentation of role details, compensation, or location; delayed onboarding or salary payment delays attributable to the client; workplace disputes or harassment attributable to the client; or terminations due to redundancy, restructuring, business closure, or force majeure. The placement fee must be settled in full before any replacement is initiated.",
          },
        },
        {
          "@type": "Question",
          name: "What are the client obligations under the VelivoHR guarantee?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Clients must provide a finalized job description, compensation bands, and selection criteria before sourcing begins. Candidate feedback must be shared within 3 business days. Timely access to hiring managers is required, and core role requirements must remain stable throughout the engagement.",
          },
        },
        {
          "@type": "Question",
          name: "What is the scope of VelivoHR's recruitment services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Services cover roles based in India; international placements require a separate addendum. Background and reference checks are an optional add-on. All candidate interactions are managed exclusively through VelivoHR.",
          },
        },
        {
          "@type": "Question",
          name: "What is VelivoHR's liability limit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "VelivoHR's total liability is strictly limited to the placement fee received for the relevant candidate. VelivoHR is not liable for indirect, consequential, or punitive damages, and does not warrant specific performance outcomes from placed candidates.",
          },
        },
      ],
    },
  ],
};

export const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([{ name: "Contact", path: "/contact/" }]),
    {
      "@type": "ContactPage",
      url: `${SITE}/contact/`,
      name: "Contact VelivoHR",
      description:
        "Get in touch with VelivoHR to discuss your next marcom industry hire.",
      mainEntity: {
        "@id": ORG_ID,
        contactPoint: {
          "@type": "ContactPoint",
          email: "debolina@velivohr.com",
          contactType: "sales",
          areaServed: "IN",
          availableLanguage: "English",
        },
      },
    },
  ],
};
