export const navItems = [
  { label: 'About', href: '#stack' },
  { label: 'Experience', href: '#experience' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export const heroHighlights = [
  {
    value: '10+ YR',
    caption: 'Software delivery',
    title: '10+ YR',
    body: 'More than a decade of software delivery across frontend, fullstack, and enterprise product work — built with maintainability in mind.',
    tags: ['Career Depth', 'Delivery Maturity', 'Long-Term Thinking'],
    target: '#journey',
    cta: 'View journey',
  },
  {
    value: 'UI + API',
    caption: 'Key highlight',
    title: 'UI + API',
    body: 'Frontend systems connected cleanly to APIs, auth flows, and cloud requirements.',
    tags: ['React', '.NET Core', 'Integration'],
    target: '#stack',
    cta: 'View core stack',
  },
  {
    value: '3 Brands',
    caption: 'Key brand partnerships',
    title: '3 Brands',
    body: 'Microsoft, Amazon, and Allianz shaped a more structured approach to enterprise delivery and product execution.',
    tags: ['Microsoft', 'Amazon', 'Allianz'],
    target: '#experience',
    cta: 'View selected work',
  },
] as const

export const stackGroups = [
  {
    title: 'Frontend Systems',
    label: 'Core',
    description:
      'React, Angular, TypeScript, scalable component architecture, and practical client-side state handling for product teams.',
    tags: ['React', 'Angular', 'TypeScript'],
  },
  {
    title: 'Backend & Integration',
    label: 'Systems',
    description:
      '.NET Core APIs, Go services, and gRPC communication that keep interface delivery aligned with system requirements.',
    tags: ['.NET Core', 'Go', 'gRPC'],
  },
  {
    title: 'Cloud & Delivery',
    label: 'Execution',
    description:
      'Azure Functions, Docker, Kubernetes, TanStack Query, and CI/CD practices that support stable release workflows.',
    tags: ['Azure Functions', 'Docker', 'Kubernetes', 'TanStack Query'],
  },
]

export const experiences = [
  {
    company: 'Microsoft',
    role: 'Software Engineer',
    duration: 'Aug 2023 — Oct 2025',
    type: 'Contract',
    description:
      'Built .NET Core APIs and React + TypeScript frontends for enterprise workflows, including secure authentication with MSAL and Azure Functions integration.',
    bullets: [
      'Delivered frontend flows and service integrations with a strong enterprise focus.',
      'Worked across UI, API, and cloud-connected components in one delivery stream.',
    ],
    tags: ['React', 'TypeScript', 'MSAL', 'Azure Functions'],
  },
  {
    company: 'Amazon',
    role: 'Frontend Engineer',
    duration: 'Oct 2025 — Present',
    type: 'Contract',
    description:
      'Building scalable React interfaces for internal product workflows, with TanStack Query supporting cleaner data fetching, caching, and UI responsiveness.',
    bullets: [
      'Focused on reliable frontend patterns for operational tools.',
      'Improved maintainability through reusable components and better data access.',
    ],
    tags: ['React', 'TanStack Query', 'Frontend Systems'],
  },
  {
    company: 'Allianz',
    role: 'Frontend Engineer',
    duration: 'Nov 2023 — Jun 2025',
    type: 'Contract',
    description:
      'Migrated legacy JSF screens into Angular-based interfaces while helping strengthen CI/CD workflows through Jenkins for smoother enterprise delivery.',
    bullets: [
      'Balanced modernization work with production readiness.',
      'Contributed to cleaner UI structure and better release discipline.',
    ],
    tags: ['Angular', 'TypeScript', 'Jenkins', 'CI/CD'],
  },
]

export const journeyItems = [
  ['Vodus.my', 'Fullstack Engineer · 2022 — 2023', 'Built .NET Core APIs, Azure Functions, and Razor Pages for product workflows.'],
  ['PT Bank Mandiri', 'Software Engineer · 2021 — 2022', 'Worked on banking applications, production fixes, and delivery support in a regulated environment.'],
  ['AllForSee', 'Software Engineer', 'Handled Go, gRPC, Docker, Kubernetes, and distributed-systems-related engineering work.'],
  ['AVNOS', 'Frontend Developer', 'Worked with Angular upgrades and D3.js visualizations for data-rich interfaces.'],
  ['Dealpos', 'Software Engineer', 'Built Angular SPA, Ionic applications, and ASP.NET WebAPI-powered features.'],
  ['IntelloTech', 'Software Developer', 'Early frontend and mobile-related work using HTML, CSS, Joomla, and Intel XDK.'],
] as const

export const values = [
  ['Architecture Thinking', 'Frontend structures that remain maintainable as products scale.'],
  ['Scalable Delivery', 'Interfaces built with reuse, performance, and long-term consistency in mind.'],
  ['System Awareness', 'Comfortable working close to APIs, cloud functions, and integration layers.'],
  ['Product Discipline', 'Balancing UX clarity, engineering quality, and release reliability.'],
] as const
