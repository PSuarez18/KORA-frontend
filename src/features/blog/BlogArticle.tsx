import { Container } from '@/components/atoms/Container';
import { ROUTES_APP } from '@/constants/routes.app';
import type { Dictionary, Locale } from '@/i18n';
import { cn } from '@/utils/cn';
import { interpolate } from '@/utils/interpolate';

import { BLOG_ROOT_CLASSES } from './blog.styles';
import { ActionSteps } from './components/Article/ActionSteps';
import { ArticleHeader } from './components/Article/ArticleHeader';
import { EditorialBody } from './components/Article/EditorialBody';
import { RadarItem } from './components/Article/RadarItem';
import { RelevanceMeter } from './components/Article/RelevanceMeter';
import { SummaryBox } from './components/Article/SummaryBox';
import { NewsletterInline } from './components/Newsletter/NewsletterInline';
import { POSTS, type PostSlug } from './data/posts';
import { RELEVANCE_LEVELS, type EditorialCopy, type RadarCopy } from './types';
import { formatOrdinal, formatPostDate } from './utils/format';

type BlogArticleProps = {
  locale: Locale;
  slug: PostSlug;
  dict: Dictionary;
};

/**
 * Artículo del blog (`/[locale]/blog/[slug]`).
 *
 * Hay dos plantillas, que decide el `template` del copy: **editorial** (cuerpo
 * de lectura con citas) y **radar** (novedades con su veredicto "¿Te
 * importa?"). Encabezado, "Qué hacer con esto" y suscripción son comunes.
 */
export function BlogArticle({ locale, slug, dict }: BlogArticleProps) {
  const post = POSTS[slug];
  const copy = dict.posts[slug];
  const { article } = dict.blogPage;

  return (
    <article data-i18n-block className={cn(BLOG_ROOT_CLASSES, 'pb-section-y pt-article-top')}>
      <Container width="article">
        <ArticleHeader
          backHref={ROUTES_APP.blog(locale)}
          backLabel={article.back}
          kicker={copy.kicker}
          title={copy.title}
          lead={copy.lead}
          meta={[
            article.author,
            formatPostDate(locale, post.publishedAt),
            interpolate(article.readTime, { minutes: post.readMinutes }),
          ]}
        />

        {copy.template === 'editorial' ? (
          <EditorialContent copy={copy} dict={dict.blogPage} />
        ) : (
          <RadarContent copy={copy} dict={dict.blogPage} />
        )}

        <ActionSteps title={article.stepsTitle} steps={copy.steps} />

        <NewsletterInline
          title={copy.subscribeTitle}
          submitLabel={dict.blogPage.newsletter.submit}
          messages={dict.newsletter}
        />
      </Container>
    </article>
  );
}

function EditorialContent({ copy, dict }: { copy: EditorialCopy; dict: Dictionary['blogPage'] }) {
  return (
    <>
      <SummaryBox title={dict.article.summaryTitle}>
        <ul className="flex list-disc flex-col gap-2 pl-[1.125rem] text-base">
          {copy.summary.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </SummaryBox>

      <EditorialBody blocks={copy.body} />
    </>
  );
}

function RadarContent({ copy, dict }: { copy: RadarCopy; dict: Dictionary['blogPage'] }) {
  return (
    <>
      <SummaryBox title={dict.article.summaryTitle}>
        <div className="flex flex-col gap-4">
          <p className="text-base">{copy.summary}</p>
          {/* Leyenda del medidor: los tres niveles, del más urgente al menos. */}
          <ul className="flex flex-wrap gap-5 text-ed-label">
            {RELEVANCE_LEVELS.map((level) => (
              <li key={level} className="flex items-center gap-2">
                <RelevanceMeter level={level} size="sm" />
                {dict.relevance[level]}
              </li>
            ))}
          </ul>
        </div>
      </SummaryBox>

      <div className="border-b border-ink">
        {copy.items.map((item, index) => (
          <RadarItem
            key={item.title}
            label={`${formatOrdinal(index)} — ${item.area}`}
            category={dict.categories[item.category]}
            title={item.title}
            description={item.description}
            relevance={item.relevance}
            relevanceTitle={dict.article.relevanceTitle}
            verdict={dict.relevance[item.relevance]}
            advice={item.advice}
          />
        ))}
      </div>
    </>
  );
}
