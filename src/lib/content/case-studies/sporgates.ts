export const sporgatesCaseStudy = {
  title: 'Sporgates',
  role: 'Co-founder & CTO',
  summary:
    'Sports community and business platform: discovery, facility booking, squads, leagues, and organizer tooling built as a full-stack product with a documented API and a modern web app.',

  problem: `Athletes and organizers were stuck between spreadsheets, phone calls, and disconnected apps. There was no single place to discover sessions, book venues, run squads, or grow a sports business with a consistent product experience.`,

  constraints: [
    'Small core team: needed clear API contracts so frontend and future integrations could move in parallel.',
    'Domain models (sports, facilities, memberships, leagues) evolve quickly—schema flexibility mattered early.',
    'Security boundaries between public marketing, authenticated app, and role-based features had to be explicit.',
  ],

  decisions: [
    'Spring Boot 3 with REST and OpenAPI/Swagger for discoverable, versionable endpoints and faster partner onboarding.',
    'JWT-based auth with refresh patterns and Spring Security for role-based access across domains.',
    'MongoDB for document-oriented entities that change with product iteration, with Atlas-ready deployment assumptions.',
    'Next.js frontend with a split between marketing hosts and the app host to simplify cookies, routing, and SEO.',
  ],

  impact: [
    'Delivered a multi-domain API (auth, users, sports, facilities, squads, leagues, activities, and related collections) documented for consumers.',
    'Owned architecture from database design through CORS, error handling, and integration with the product roadmap.',
    'Enabled a single narrative for the company: one platform for players, venues, and organizers.',
  ],

  stack: [
    'Next.js',
    'TypeScript',
    'Spring Boot',
    'Java',
    'MongoDB',
    'Redis',
    'JWT',
    'OpenAPI',
  ],

  links: {
    live: 'https://sporgates.com',
    app: 'https://app.sporgates.com',
  },
} as const;
