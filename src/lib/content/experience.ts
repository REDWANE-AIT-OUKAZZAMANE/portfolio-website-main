import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: 'Squarefeet',
      companyUrl: 'https://www.squarefeet.cloud/fr/accueil/',
      role: 'full stack engineer | cybersecurity specialist',
      started: 'april 2024',
      upto: 'present',
      tasks: [
        'Automated marketing materials, leasing documents, and floor plans in one CRM.',
        'Ensured system scalability to handle multiple clients.',
        'Optimized performance and consistency across devices.',
      ],
    },
    {
      company: 'Hahn Software SARL',
      companyUrl: '#',
      role: 'full stack developer & devops specialist',
      started: 'june 2023',
      upto: 'february 2024',
      tasks: [
        'Built a complete IT support system from scratch, improving internal ticket handling.',
        'Implemented CI/CD pipelines using Jenkins and Docker for efficient deployment.',
      ],
    },
    {
      company: 'Soclicagency',
      companyUrl: '#',
      role: 'software engineer',
      started: 'july 2022',
      upto: 'may 2023',
      tasks: [
        'Designed and developed tailor-made web solutions for multiple B2B clients.',
        'Integrated REST APIs and third-party services to extend platform functionality.',
      ],
    },
    {
      company: 'XHUB',
      companyUrl: 'https://www.x-hub.io/',
      role: 'full stack developer',
      started: 'january 2022',
      upto: 'june 2022',
      tasks: [
        'Design and development of an interactive social media wall.',
        'Used Java, Spring Boot, and React to build responsive web applications.',
        'Implemented CI/CD workflows with Jenkins, GitLab, and Maven.',
      ],
    },
    {
      company: 'MITC',
      companyUrl: 'https://mitc.ma/',
      role: 'fullstack developer intern',
      started: 'july 2021',
      upto: 'december 2021',
      tasks: [
        'Design and development of an interactive digital solution to visualize 2D plans of Technopark Morocco.',
        'Built responsive web interfaces using Angular and backend services with Spring Boot.',
        'Integrated with Salesforce and used tools like Postman, Maven, Git, and Inkscape.',
      ],
    },
  ],
};
