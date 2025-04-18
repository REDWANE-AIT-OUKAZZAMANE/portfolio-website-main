import { author } from '@/lib/content/portfolio';
import { ContactSectionType } from '@/lib/types/sections';

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    "I'm currently looking for new opportunities in fullstack development.",
    "Whether you have a project to discuss or just want to say hi, my inbox is open for all!",
  ],
  link: `mailto:${author.email}`,
  contactInfo: [
    {
      icon: 'lucide:mail',
      text: author.email,
      url: `mailto:${author.email}`,
    },
    {
      icon: 'lucide:phone',
      text: author.phone,
      url: `tel:${author.phone.replace(/\s/g, '')}`,
    },
    {
      icon: 'lucide:map-pin',
      text: author.location,
    },
    {
      icon: 'lucide:globe',
      text: 'oukazzamane.com',
      url: 'https://oukazzamane.com',
    },
  ],
};
