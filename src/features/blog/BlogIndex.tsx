import type { Dictionary, Locale } from '@/i18n';

import { BLOG_ROOT_CLASSES } from './blog.styles';
import { BlogHero } from './components/BlogHero/BlogHero';
import { FeaturedPost } from './components/FeaturedPost/FeaturedPost';
import { NewsletterBlock } from './components/Newsletter/NewsletterBlock';
import { PostArchive } from './components/PostArchive/PostArchive';
import { getFeaturedPost, getPostsByDate, getUsedCategories } from './data/posts';

/**
 * Portada del blog (`/[locale]/blog`), en el orden del diseño "Blog kora.":
 * apertura, nota destacada, archivo filtrable y newsletter.
 */
export function BlogIndex({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const featured = getFeaturedPost();

  return (
    <div className={BLOG_ROOT_CLASSES}>
      <BlogHero dict={dict.blogPage.hero} />

      {featured ? (
        <FeaturedPost locale={locale} post={featured} dict={dict.blogPage} postsDict={dict.posts} />
      ) : null}

      <PostArchive
        locale={locale}
        posts={getPostsByDate()}
        categories={getUsedCategories()}
        dict={dict.blogPage}
        postsDict={dict.posts}
      />

      <NewsletterBlock dict={dict.blogPage.newsletter} messages={dict.newsletter} />
    </div>
  );
}
