'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { RevealText } from '@/components/atoms/RevealText';
import { REVEAL_ITEM_CLASS, useScrollReveal } from '@/hooks/animations';

import { Kicker } from '../Kicker/Kicker';
import { PostMeta } from '../PostMeta/PostMeta';

type ArticleHeaderProps = {
  backHref: string;
  backLabel: string;
  kicker: string;
  title: string;
  lead: string;
  meta: readonly string[];
};

/** Encabezado del artículo: vuelta al blog, kicker, titular, bajada y firma. */
export function ArticleHeader({
  backHref,
  backLabel,
  kicker,
  title,
  lead,
  meta,
}: ArticleHeaderProps) {
  const ref = useScrollReveal<HTMLElement>({ start: 'top 95%' });

  return (
    <header ref={ref} className="flex flex-col">
      <Link
        href={backHref}
        className={`${REVEAL_ITEM_CLASS} group mb-14 inline-flex w-fit items-center gap-1.5 text-sm text-heading/60 transition-colors duration-200 ease-out hover:text-heading`}
      >
        <ArrowLeft
          aria-hidden
          className="size-3.5 transition-transform duration-200 ease-out group-hover:-translate-x-0.5"
        />
        {backLabel}
      </Link>

      <Kicker className={`${REVEAL_ITEM_CLASS} mb-6`}>{kicker}</Kicker>

      {/* `immediate`: el titular está sobre el fold. */}
      <RevealText
        as="h1"
        immediate
        className="mb-7 text-balance font-display text-ed-title font-medium text-heading"
      >
        {title}
      </RevealText>

      <p className={`${REVEAL_ITEM_CLASS} mb-9 text-ed-lead text-heading/80`}>{lead}</p>

      <PostMeta
        items={meta}
        variant="byline"
        className={`${REVEAL_ITEM_CLASS} border-y border-hairline-soft py-[1.125rem]`}
      />
    </header>
  );
}
