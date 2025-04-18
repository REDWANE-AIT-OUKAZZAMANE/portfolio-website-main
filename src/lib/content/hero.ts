import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'REDWANE AIT OUKAZZAMANE.',
  tagline: 'I create sleek, scalable digital solutions.',
  description:
    "Senior Developer with 4 years of experience crafting sleek, scalable digital solutions. I blend code and creativity to build user-centric apps, from elegant UIs to robust backends. Known for delivering complex, enterprise-level projects with precision and flair across diverse industries.",
  specialText: 'Currently available for new opportunities',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
