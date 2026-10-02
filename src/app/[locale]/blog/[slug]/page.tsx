import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { BlogArticle, getPostsByDate, isPostSlug } from '@/features/blog';
import { getDictionary, isLocale } from '@/i18n';

type ArticleParams = Promise<{ locale: string; slug: string }>;

/** Un slug que no está en el fixture es 404, no un render dinámico. */
export const dynamicParams = false;

/** Prerenderiza cada artículo; el layout ya multiplica por idioma. */
export function generateStaticParams() {
  return getPostsByDate().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: ArticleParams }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isPostSlug(slug)) return {};

  const { title, excerpt } = getDictionary(locale).posts[slug];

  return { title, description: excerpt };
}

export default async function BlogArticlePage({ params }: { params: ArticleParams }) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isPostSlug(slug)) notFound();

  return <BlogArticle locale={locale} slug={slug} dict={getDictionary(locale)} />;
}
