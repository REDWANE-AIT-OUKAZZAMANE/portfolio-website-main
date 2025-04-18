import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'backend development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building robust backend systems with Java, Spring Boot, and Node.js',
        'Creating RESTful APIs and microservices with NestJS',
        'Designing and implementing database solutions with MongoDB and MySQL',
        'Implementing cybersecurity best practices across applications'
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'java', icon: 'vscode-icons:file-type-java' },
        { name: 'spring', icon: 'simple-icons:spring' },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'nestjs', icon: 'logos:nestjs' },
        { name: 'python', icon: 'vscode-icons:file-type-python' },
        { name: 'php', icon: 'vscode-icons:file-type-php' },
        { name: 'mongodb', icon: 'vscode-icons:file-type-mongo' },
        { name: 'mysql', icon: 'logos:mysql' },
      ],
    },
    {
      id: getId(),
      title: 'frontend development',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        'Building responsive web applications with React, Vue.js, and Next.js',
        'Creating interactive user interfaces with Angular',
        'Developing mobile applications with Flutter',
        'Implementing modern designs with Tailwind CSS'
      ],
      softwareSkills: [
        { name: 'angular', icon: 'logos:angular-icon' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'vue', icon: 'logos:vue' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        { name: 'flutter', icon: 'logos:flutter' },
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        { name: 'typeScript', icon: 'vscode-icons:file-type-typescript-official' },
      ],
    },
    {
      id: getId(),
      title: 'DevOps & Soft Skills',
      lottie: {
        light: '/lotties/cloudinfra.json',
        dark: '/lotties/cloudinfra.json',
      },
      points: [
        'Implementing CI/CD pipelines using Jenkins and Docker for efficient deployment',
        'Effective communication and teamwork in cross-functional teams',
        'Critical thinking and problem-solving approach to complex challenges',
        'Project management and continuous integration practices'
      ],
      softwareSkills: [
        { name: 'docker', icon: 'logos:docker-icon' },
        { name: 'jenkins', icon: 'vscode-icons:file-type-jenkins' },
        { name: 'git', icon: 'logos:git-icon' },
        { name: 'nginx', icon: 'logos:nginx' },
        { name: 'cybersecurity', icon: 'carbon:security' },
        { name: 'teamwork', icon: 'ph:users-three' },
        { name: 'communication', icon: 'ri:chat-4-line' },
        { name: 'critical thinking', icon: 'carbon:idea' },
      ],
    },
  ],
};
