import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'Karni',
      description: "The phone credit notebook that makes your life easier - A mobile application that allows merchants to manage their customer credits.",
      tasks:
        "Development of a mobile application enabling merchants to track and manage their credit transactions, send payment notifications via WhatsApp or SMS, and secure their data in the cloud.",
      url: 'https://karny.ma/fr',
      img: '/projects/karni.png',
      tags: [
        'React Native',
        'Node.js',
        'Express',
        'MongoDB',
        'WhatsApp API',
        'SMS Gateway',
        'Cloud Storage',
        'Mobile App'
      ],
    },
    {
      id: getId(),
      name: 'Express Relais',
      description: "Innovation and expertise at the service of your packages - A national network of automated lockers for sending and receiving packages in Morocco.",
      tasks:
        "Development of an innovative logistics solution integrating a network of automated lockers available 24/7 throughout Morocco. Creation of a web and mobile platform allowing real-time package tracking and automation of the delivery process.",
      url: 'https://expressrelais.ma/',
      img: '/projects/express.png',
      tags: [
        'Vue.js',
        'Node.js',
        'Express',
        'MongoDB',
        'Docker',
        'CI/CD',
        'RESTful API',
        'Responsive Design'
      ],
    },
    {
      id: getId(),
      name: 'Squarefeet CRM',
      description: 'A comprehensive CRM solution for real estate management, featuring lead optimization, asset management, and transaction tracking.',
      tasks:
        "Developed a unified platform that integrates all types of leasing (Standard, Specialty, and Media) into a single solution, enabling unmatched commercial efficiency. Automated marketing materials, leasing documents, and floor plans while ensuring system scalability.",
      url: 'https://www.squarefeet.cloud/fr/accueil/',
      img: '/projects/squarefeet.png',
      tags: [
        'Vue.js',
        'React',
        'NestJS',
        'GraphQL',
        'Prisma',
        'CRM',
        'GitLab',
        'Nginx'
      ],
    },
    {
      id: getId(),
      name: 'Authentikeys E-commerce',
      description: 'A modern e-commerce platform for tech products featuring product categories, brand showcases, and a blog section.',
      tasks:
        'Built a complete e-commerce solution with user authentication, shopping cart functionality, and payment integration. Created responsive interfaces and implemented secure payment processing systems.',
      url: 'https://www.authentikeys.com',
      img: '/projects/authentikeys.png',
      tags: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    },
    {
      id: getId(),
      name: 'KIIIBS - Mechanical Keyboard Store',
      description: 'A fully-fledged e-commerce web store for mechanical keyboards with responsive design and shopping cart functionality.',
      tasks:
        'Developed an e-commerce platform with persistent shopping cart, dynamic product pages, and comprehensive testing. Implemented responsive design principles to ensure optimal user experience across all devices.',
      url: 'https://ecomy-alpha.vercel.app',
      img: '/projects/Keyboard-ecom.png',
      tags: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Pinia', 'Cypress', 'Vite'],
    },
  ],
};

export default featuredProjectsSection;
