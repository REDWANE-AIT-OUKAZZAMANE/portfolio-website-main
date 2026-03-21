'use client';

import { FeaturedProjectType } from '@/lib/types';
import { blurImageURL } from '@/lib/utils/config';
import { cn } from '@/lib/utils/helper';

import { Icon } from '@iconify/react';
import { motion, MotionProps } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Props extends FeaturedProjectType, MotionProps {
  align?: 'left' | 'right';
}

function CaseStudyLink({ caseStudyUrl }: { caseStudyUrl: string }) {
  return (
    <Link
      href={caseStudyUrl}
      className="inline-block font-mono text-sm text-accent underline-offset-2 hover:underline mt-2"
    >
      Full case study →
    </Link>
  );
}

const FeaturedProject = ({
  img,
  name,
  url,
  repo,
  description,
  tasks,
  tags,
  caseStudyUrl,
  align = 'left',
  ...rest
}: Props) => {
  const imageBlock = (
    <div
      className={cn(
        'relative w-full overflow-hidden rounded-xl shadow-2xl group shrink-0 aspect-video lg:aspect-[3/2] lg:max-h-[400px] lg:w-[52%]'
      )}
    >
      <Image
        src={img}
        alt={name}
        width={720}
        height={480}
        className="object-cover w-full h-full min-h-[200px] transition-transform duration-200 group-hover:scale-105"
        placeholder="blur"
        blurDataURL={blurImageURL}
      />
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10 block bg-transparent"
        aria-label={`Open ${name} (external)`}
      />
    </div>
  );

  const textBlock = (
    <div
      className={cn(
        'flex flex-col gap-3 flex-1 min-w-0 lg:max-w-lg',
        align === 'right' ? 'lg:text-right lg:items-end' : 'lg:text-left lg:items-start'
      )}
    >
      <div>
        <div className="font-mono text-accent capitalize text-xs mb-2">featured project</div>
        <h2 className="heading-tertiary !text-dark-2 !font-semibold !normal-case">
          <a href={url} className="duration-200 hover:text-accent" target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </h2>
      </div>

      <div className="rounded-lg bg-bg-secondary shadow-lg p-5 space-y-3 text-sm lg:text-base">
        <p className="text-dark-1">{description}</p>
        {caseStudyUrl && <CaseStudyLink caseStudyUrl={caseStudyUrl} />}
        {tasks && (
          <>
            <div className="font-mono text-xs text-accent capitalize pt-1">role & stack</div>
            <p className="text-dark-1 text-sm leading-relaxed">{tasks}</p>
          </>
        )}
      </div>

      <p
        className={cn(
          'font-mono text-xs text-accent flex flex-wrap gap-x-4 gap-y-1',
          align === 'right' ? 'lg:justify-end' : 'lg:justify-start'
        )}
      >
        {tags.map((tag) => (
          <span key={tag.replaceAll(' ', '')}>{tag}</span>
        ))}
      </p>

      {repo && (
        <div className={cn('flex items-center gap-3', align === 'right' && 'lg:flex-row-reverse')}>
          <a href={repo} className="block duration-200 hover:text-accent" target="_blank" rel="noopener noreferrer">
            <Icon icon="tabler:brand-github" width={22} height={22} />
          </a>
          <a href={url} className="block duration-200 hover:text-accent" target="_blank" rel="noopener noreferrer">
            <Icon icon="ci:external-link" width={24} height={24} />
          </a>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Desktop: flex row — height follows content, no overlap with next project */}
      <motion.div
        className={cn(
          'hidden lg:flex w-full items-start gap-10 xl:gap-14 py-6',
          align === 'right' ? 'flex-row' : 'flex-row-reverse'
        )}
        {...rest}
      >
        {imageBlock}
        {textBlock}
      </motion.div>

      {/* Mobile */}
      <motion.div className="relative lg:hidden min-h-[280px] rounded-xl shadow-lg overflow-hidden" {...rest}>
        <header className="relative w-full aspect-video">
          <Image
            src={img}
            alt={name}
            width={720}
            height={480}
            className="object-cover w-full h-full"
            placeholder="blur"
            blurDataURL={blurImageURL}
          />
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10 block bg-transparent"
            aria-label={`Open ${name} (external)`}
          />
        </header>

        <div className="bg-bg-secondary p-5 space-y-3">
          <h2 className="heading-tertiary !text-dark-2 !font-semibold !normal-case">
            <a href={url} className="duration-200 hover:text-accent" target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          </h2>
          <p className="text-dark-1 text-sm">{description}</p>
          {caseStudyUrl && <CaseStudyLink caseStudyUrl={caseStudyUrl} />}
          {tasks && (
            <>
              <div className="font-mono text-xs text-accent capitalize">role & stack</div>
              <p className="text-dark-1 text-sm">{tasks}</p>
            </>
          )}
          <p className="font-mono text-[10px] text-accent flex flex-wrap gap-2 justify-center">
            {tags.map((tag) => (
              <span key={tag.replaceAll(' ', '')}>{tag}</span>
            ))}
          </p>
          {repo && (
            <div className="flex justify-center items-center gap-3">
              <a href={repo} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                <Icon icon="tabler:brand-github" width={22} height={22} />
              </a>
              <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                <Icon icon="ci:external-link" width={24} height={24} />
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default FeaturedProject;
