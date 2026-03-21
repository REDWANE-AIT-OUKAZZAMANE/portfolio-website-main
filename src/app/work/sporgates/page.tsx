import { sporgatesCaseStudy } from '@/lib/content/case-studies/sporgates';
import { author } from '@/lib/content/portfolio';

import Layout from '@/containers/layout/Layout';

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `${sporgatesCaseStudy.title} — Case study | ${author.name}`,
  description: sporgatesCaseStudy.summary,
};

export default function SporgatesCaseStudyPage() {
  const cs = sporgatesCaseStudy;

  return (
    <Layout>
      <article className="max-w-3xl mx-auto px-6 sm:px-8 pt-28 pb-32 md:pt-36">
        <p className="font-mono text-sm text-accent mb-2">case study</p>
        <h1 className="text-3xl sm:text-4xl font-medium text-dark-2 mb-2">{cs.title}</h1>
        <p className="font-mono text-sm text-text mb-8">{cs.role}</p>
        <p className="text-lg text-text mb-10">{cs.summary}</p>

        <section className="mb-10">
          <h2 className="heading-tertiary mb-3">Problem</h2>
          <p className="text-text leading-relaxed whitespace-pre-line">{cs.problem}</p>
        </section>

        <section className="mb-10">
          <h2 className="heading-tertiary mb-3">Constraints</h2>
          <ul className="list-disc pl-5 space-y-2 text-text">
            {cs.constraints.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="heading-tertiary mb-3">Decisions</h2>
          <ul className="list-disc pl-5 space-y-2 text-text">
            {cs.decisions.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="heading-tertiary mb-3">Impact</h2>
          <ul className="list-disc pl-5 space-y-2 text-text">
            {cs.impact.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="heading-tertiary mb-3">Stack</h2>
          <p className="font-mono text-sm text-accent flex flex-wrap gap-x-4 gap-y-1">
            {cs.stack.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </p>
        </section>

        <section className="flex flex-wrap gap-4 pt-4 border-t border-dark-3">
          <a
            href={cs.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-accent underline-offset-2 hover:underline"
          >
            Live site
          </a>
          <a
            href={cs.links.app}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-accent underline-offset-2 hover:underline"
          >
            App
          </a>
          <Link
            href="/#projects"
            className="font-mono text-sm text-accent underline-offset-2 hover:underline"
          >
            Back to portfolio
          </Link>
        </section>
      </article>
    </Layout>
  );
}
