'use client';

import { useMemo, useState } from 'react';

import { Container } from '@/components/atoms/Container';
import { ROUTES_APP } from '@/constants/routes.app';
import { REVEAL_ITEM_CLASS, useScrollReveal } from '@/hooks/animations';
import type { Dictionary, Locale } from '@/i18n';
import { interpolate } from '@/utils/interpolate';

import type { CategoryId } from '../../data/categories';
import type { PostEntry } from '../../data/posts';
import { formatPostCount, formatPostDate } from '../../utils/format';
import { Kicker } from '../Kicker/Kicker';
import { ArchiveRow } from './ArchiveRow';
import { CategoryFilter, type CategoryOption } from './CategoryFilter';

/** Opción "Todas" del filtro. No es una categoría: es la ausencia de filtro. */
const ALL = 'all';
type FilterId = CategoryId | typeof ALL;

type PostArchiveProps = {
  locale: Locale;
  posts: readonly PostEntry[];
  categories: readonly CategoryId[];
  dict: Dictionary['blogPage'];
  postsDict: Dictionary['posts'];
};

/**
 * Archivo del blog: filtro por categoría a la izquierda (fijo al scrollear) y
 * la lista de artículos a la derecha.
 *
 * El filtro es estado local y no va a la URL: es un recorte de una lista corta,
 * no una vista que valga la pena compartir. Si el archivo crece y pagina,
 * conviene pasarlo a `?categoria=`.
 */
export function PostArchive({ locale, posts, categories, dict, postsDict }: PostArchiveProps) {
  const ref = useScrollReveal<HTMLDivElement>();
  const [activeId, setActiveId] = useState<FilterId>(ALL);

  const options = useMemo<readonly CategoryOption<FilterId>[]>(
    () => [
      { id: ALL, label: dict.archive.all },
      ...categories.map((id) => ({ id, label: dict.categories[id] })),
    ],
    [categories, dict],
  );

  const visiblePosts =
    activeId === ALL ? posts : posts.filter((post) => post.category === activeId);

  return (
    <section data-i18n-block className="pb-section-y">
      <Container>
        <div ref={ref} className="grid gap-10 lg:grid-cols-[13.75rem_minmax(0,1fr)] lg:gap-14">
          {/* `top-28` deja pasar al nav fijo por arriba. */}
          <aside className={`${REVEAL_ITEM_CLASS} lg:sticky lg:top-28 lg:self-start`}>
            <CategoryFilter
              title={dict.archive.categoriesTitle}
              options={options}
              activeId={activeId}
              onSelect={setActiveId}
            />
          </aside>

          <div className={REVEAL_ITEM_CLASS}>
            <div className="flex items-baseline justify-between border-b border-ink/90 pb-[18px]">
              <Kicker as="h2" tone="ink">
                {dict.archive.title}
              </Kicker>
              {/* `aria-live`: al filtrar, el lector de pantalla anuncia cuántos quedaron. */}
              <p aria-live="polite" className="text-sm text-heading/60">
                {formatPostCount(locale, visiblePosts.length, dict.archive)}
              </p>
            </div>

            <ul>
              {visiblePosts.map((post) => (
                <li key={post.slug}>
                  <ArchiveRow
                    href={ROUTES_APP.blogPost(locale, post.slug)}
                    date={formatPostDate(locale, post.publishedAt)}
                    isoDate={post.publishedAt}
                    category={dict.categories[post.category]}
                    title={postsDict[post.slug].title}
                    excerpt={postsDict[post.slug].excerpt}
                    readTime={interpolate(dict.article.readTimeShort, {
                      minutes: post.readMinutes,
                    })}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
