import { CATEGORY_IDS, type CategoryId } from './categories';

/**
 * Fixture de artículos. Acá vive solo lo que no se traduce (fecha, portada,
 * categoría, tiempo de lectura); título, bajada y cuerpo salen del diccionario
 * (`posts`). Cuando exista `kora_api`, esto se reemplaza por una llamada al BFF
 * (`ROUTES_API.posts`).
 *
 * Los slugs no se traducen: son la ruta y la clave del diccionario a la vez.
 */
export type PostMeta = {
  /** Fecha ISO — se formatea según el idioma, nunca se guarda ya formateada. */
  readonly publishedAt: string;
  readonly readMinutes: number;
  readonly category: CategoryId;
  readonly cover: string;
  /** La nota que encabeza la portada del blog. */
  readonly featured?: boolean;
};

export const POSTS = {
  'radar-ia-edicion-14': {
    publishedAt: '2026-09-22',
    readMinutes: 5,
    category: 'radar-ia',
    cover: '/images/blog-cover.png',
  },
  'si-depende-de-una-persona': {
    publishedAt: '2026-09-18',
    readMinutes: 7,
    category: 'estandarizacion',
    cover: '/images/blog/si-depende-de-una-persona.png',
    featured: true,
  },
} as const satisfies Record<string, PostMeta>;

export type PostSlug = keyof typeof POSTS;

export type PostEntry = PostMeta & { readonly slug: PostSlug };

export function isPostSlug(value: string): value is PostSlug {
  return Object.hasOwn(POSTS, value);
}

/** Todos los artículos, del más reciente al más viejo. */
export function getPostsByDate(): readonly PostEntry[] {
  return (Object.keys(POSTS) as PostSlug[])
    .map((slug): PostEntry => ({ slug, ...POSTS[slug] }))
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

/**
 * Los `count` artículos más recientes — la vista previa de la home.
 *
 * Provisorio: mientras haya menos notas que lugares, se repiten desde la más
 * reciente para que la grilla no quede con un hueco (pedido de Kora). Apenas
 * haya tantas notas como lugares, la repetición desaparece sola.
 */
export function getPreviewPosts(count: number): readonly PostEntry[] {
  const posts = getPostsByDate();
  if (posts.length === 0) return [];

  return Array.from({ length: count }, (_, index) => posts[index % posts.length]).filter(
    (post): post is PostEntry => post !== undefined,
  );
}

/** La nota destacada; si ninguna lo está, la más reciente. */
export function getFeaturedPost(): PostEntry | undefined {
  const posts = getPostsByDate();
  return posts.find((post) => post.featured) ?? posts[0];
}

/** Categorías con al menos un artículo, en el orden canónico. */
export function getUsedCategories(): readonly CategoryId[] {
  const used = new Set<CategoryId>(Object.values(POSTS).map((post) => post.category));
  return CATEGORY_IDS.filter((id) => used.has(id));
}
