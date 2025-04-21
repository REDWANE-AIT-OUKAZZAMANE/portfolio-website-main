import { contactSection } from '@/lib/content/contact';

import { ContactForm, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

const Contact = () => {
  const { subtitle, title, paragraphs } = contactSection;
  return (
    <Wrapper
      id="contact"
      className="max-w-3xl mx-auto text-center !py-16 md:!py-24 mb-20 md:mb-32"
      {...getSectionAnimation}
    >
      <p className="mb-3 font-mono text-sm capitalize text-accent">
        {subtitle}
      </p>
      <h2 className="heading-secondary !mb-5">{title}</h2>

      {paragraphs.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
      
      <ContactForm />
    </Wrapper>
  );
};

export default Contact;
