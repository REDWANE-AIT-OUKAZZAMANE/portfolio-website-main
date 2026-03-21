import { socialLinks } from '@/lib/content/portfolio';
import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'REDWANE AIT OUKAZZAMANE.',
  tagline: 'I create sleek, scalable digital solutions.',
  description:
    "Senior full-stack engineer with 4 years shipping production systems. Co-founder and CTO of Sporgates, building a sports and fitness platform from API to web app.",
  specialText:
    'Co-founder & CTO of Sporgates. Open to consulting and advisory.',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: false,
  },
  secondaryCta: {
    title: 'LinkedIn',
    url: socialLinks.linkedin,
    sameTab: false,
  },
};
