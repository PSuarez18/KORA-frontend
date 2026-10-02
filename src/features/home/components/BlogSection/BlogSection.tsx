'use client';

import { ArrowRight } from 'lucide-react';

import { LinkButton } from '@/components/atoms/Button';
import { Container } from '@/components/atoms/Container';
import { Section } from '@/components/atoms/Section';
import { SectionHeading } from '@/components/molecules/SectionHeading';
import { BlogCard } from '@/components/organisms/BlogCard';
import { NewsletterPanel } from '@/components/organisms/NewsletterPanel';
import { ROUTES_APP, SECTION_IDS } from '@/constants/routes.app';
import { getPreviewPosts } from '@/features/blog';
import type { Dictionary, Locale } from '@/i18n';
import { REVEAL_ITEM_CLASS, useScrollReveal } from '@/hooks/animations';

type BlogSectionProps = {
  locale: Locale;
  dict: Dictionary['blog'];
  newsletterDict: Dictionary['newsletter'];
  postsDict: Dictionary['posts'];
  categoriesDict: Dictionary['blogPage']['categories'];
};

/** Cuántas cards muestra la vista previa (las del diseño de la home). */
const PREVIEW_COUNT = 3;

/** Últimos artículos + panel de newsletter. */
export function BlogSection({
  locale,
  dict,
  newsletterDict,
  postsDict,
  categoriesDict,
}: BlogSectionProps) {
  const containerRef = useScrollReveal<HTMLDivElement>();

  return (
    <Section id={SECTION_IDS.blog}>
      <Container>
        {/* 109px del encabezado a las cards y 106 de las cards al newsletter, en el diseño. */}
        <div ref={containerRef} className="flex flex-col gap-16 lg:gap-[6.75rem]">
          {/*
            El botón no va al pie del titular sino a su tope: en Figma arranca
            en la misma `y` que la primera línea de "Ideas para modernizar…".
            Por eso el encabezado es una grilla con el eyebrow en la fila de
            arriba y titular + botón en la de abajo.
          */}
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-start md:justify-between">
            <SectionHeading
              eyebrow={dict.eyebrow}
              title={dict.title}
              titleMaxWidth="max-w-[34.5rem]"
              className={REVEAL_ITEM_CLASS}
            />
            {/* 311×61 en el diseño: texto de 20 y 32px de padding. */}
            <LinkButton
              href={ROUTES_APP.blog(locale)}
              variant="outline"
              size="lg"
              className={`${REVEAL_ITEM_CLASS} shrink-0 gap-1 py-[17px] text-lg leading-relaxed md:mt-[4.4375rem]`}
              trailingIcon={<ArrowRight aria-hidden className="size-6" />}
            >
              {dict.cta}
            </LinkButton>
          </div>

          {/* 29px entre cards. */}
          <ul className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {/* El índice va en la key: mientras haya pocas notas, una puede repetirse. */}
            {getPreviewPosts(PREVIEW_COUNT).map((post, index) => (
              <li key={`${post.slug}-${index}`} className={REVEAL_ITEM_CLASS}>
                <BlogCard
                  locale={locale}
                  href={ROUTES_APP.blogPost(locale, post.slug)}
                  cover={post.cover}
                  publishedAt={post.publishedAt}
                  category={categoriesDict[post.category]}
                  title={postsDict[post.slug].title}
                  excerpt={postsDict[post.slug].excerpt}
                  readMoreLabel={dict.readMore}
                />
              </li>
            ))}
          </ul>

          <div className={REVEAL_ITEM_CLASS}>
            <NewsletterPanel dict={newsletterDict} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
