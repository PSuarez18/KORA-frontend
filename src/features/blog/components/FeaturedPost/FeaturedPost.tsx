'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/atoms/Container';
import { Tag } from '@/components/atoms/Tag';
import { ROUTES_APP } from '@/constants/routes.app';
import { REVEAL_ITEM_CLASS, useScrollReveal } from '@/hooks/animations';
import type { Dictionary, Locale } from '@/i18n';
import { interpolate } from '@/utils/interpolate';

import type { PostEntry } from '../../data/posts';
import { formatPostDate } from '../../utils/format';
import { PostMeta } from '../PostMeta/PostMeta';

type FeaturedPostProps = {
  locale: Locale;
  post: PostEntry;
  dict: Dictionary['blogPage'];
  postsDict: Dictionary['posts'];
};

/**
 * Nota destacada: portada grande a la izquierda y texto a la derecha.
 *
 * Toda la pieza es un solo link — en el diseño se clickea entera. El "Leer
 * artículo" con su rayita es decorativo.
 */
export function FeaturedPost({ locale, post, dict, postsDict }: FeaturedPostProps) {
  const ref = useScrollReveal<HTMLDivElement>();
  const copy = postsDict[post.slug];

  return (
    <section data-i18n-block className="pb-section-y">
      <Container>
        <div ref={ref}>
          <Link
            href={ROUTES_APP.blogPost(locale, post.slug)}
            className={`${REVEAL_ITEM_CLASS} group grid items-center gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-14`}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-sharp bg-surface-sand">
              <Image
                src={post.cover}
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 700px, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>

            <div className="flex flex-col gap-[1.375rem]">
              <div className="flex flex-wrap items-center gap-3.5">
                <Tag variant="chip">{dict.categories[post.category]}</Tag>
                <span className="text-sm text-heading/60">{dict.featured.label}</span>
              </div>

              <h2 className="text-balance font-display text-ed-featured font-medium text-heading transition-colors duration-200 ease-out group-hover:text-accent">
                {copy.title}
              </h2>

              <p className="text-md text-heading/80">{copy.lead}</p>

              <PostMeta
                items={[
                  dict.article.author,
                  formatPostDate(locale, post.publishedAt),
                  interpolate(dict.article.readTime, { minutes: post.readMinutes }),
                ]}
              />

              <span
                aria-hidden
                className="flex items-center gap-2.5 font-display text-smd font-medium text-heading"
              >
                {dict.featured.cta}
                <span className="block h-[1.5px] w-8 bg-accent-mark transition-[width] duration-300 ease-out group-hover:w-14" />
              </span>
            </div>
          </Link>
        </div>
      </Container>
    </section>
  );
}
