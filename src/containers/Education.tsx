'use client';
import { motion } from 'framer-motion';

import { educationSection } from '../lib/content/education';
import { getSectionAnimation } from '../styles/animations';

const Education = () => {
  return (
    <motion.section
      id="education"
      className="max-w-3xl py-32 mx-auto"
      {...getSectionAnimation}
    >
      <h2 className="heading-secondary">{educationSection.title}</h2>
      <div className="space-y-12 mt-8">
        {educationSection.education.map((edu, index) => (
          <div key={index} className="border-l-2 border-accent pl-6">
            <h3 className="text-xl font-bold">{edu.degree}</h3>
            <p className="text-accent font-medium">
              {edu.institution} | {edu.location}
            </p>
            <p className="text-sm opacity-70">{edu.period}</p>
            <p className="mt-1">GPA: {edu.gpa}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education; 