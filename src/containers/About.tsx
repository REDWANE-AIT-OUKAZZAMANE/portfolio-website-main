'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getId } from '@/lib/utils/helper';

import { AuthorImage, Link, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Hi, my name is REDWANE AIT OUKAZZAMANE, a Fullstack Engineer with a Master's degree in Software Engineering from{' '}
            <Link
              href="https://www.ensat.ac.ma/en/"
              target="_blank"
              className="text-accent"
            >
              National Schools of Applied Sciences
            </Link>
            .
          </p>
          <p>
            With 4 years of experience, I've had the privilege of working on complex enterprise-level projects at companies like{' '}
            <Link
              href="https://www.squarefeet.cloud/fr/accueil/"
              target="_blank"
              className="text-accent"
            >
              Squarefeet
            </Link>{' '}
            and Hahn Software SARL.
          </p>
          <p>
            My focus is on creating scalable digital solutions that blend elegant front-end interfaces with robust back-end systems, always prioritizing security and performance.
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <AuthorImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
