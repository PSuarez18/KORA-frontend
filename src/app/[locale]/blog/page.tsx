import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { BlogIndex } from '@/features/blog';
import { getDictionary, isLocale } from '@/i18n';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const { meta } = getDictionary(locale).blogPage;

  return { title: meta.title, description: meta.description };
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return <BlogIndex locale={locale} dict={getDictionary(locale)} />;
}
