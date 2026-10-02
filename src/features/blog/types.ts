import type { CategoryId } from './data/categories';
import type { PostSlug } from './data/posts';

/**
 * Forma del copy de cada artículo en los diccionarios.
 *
 * A diferencia del resto del diccionario, estos tipos **no** se ensanchan a
 * `string`: `template`, `kind` y `relevance` son discriminantes que el render
 * necesita conservar como literales. Por eso `Dictionary` los deja afuera de
 * `Widen` (ver `i18n/dictionaries/es.ts`).
 */

/** Bloque del cuerpo de un artículo editorial. */
export type ArticleBlock = {
  readonly kind: 'paragraph' | 'heading' | 'quote';
  readonly text: string;
};

/** Paso numerado de "Qué hacer con esto". */
export type ActionStep = {
  readonly title: string;
  readonly description: string;
};

/** Qué tan urgente es una novedad del Radar IA — de más a menos. */
export const RELEVANCE_LEVELS = ['now', 'watch', 'later'] as const;
export type Relevance = (typeof RELEVANCE_LEVELS)[number];

type PostCopyBase = {
  readonly title: string;
  /** Bajada corta para las listas (archivo, home). */
  readonly excerpt: string;
  /** Línea en mayúsculas sobre el titular ("Serie Estandarización · Parte 2 de 4"). */
  readonly kicker: string;
  /** Bajada larga, debajo del titular del artículo. */
  readonly lead: string;
  readonly steps: readonly ActionStep[];
  /** Titular de la suscripción al pie del artículo. */
  readonly subscribeTitle: string;
};

export type EditorialCopy = PostCopyBase & {
  readonly template: 'editorial';
  /** Viñetas de "En resumen". */
  readonly summary: readonly string[];
  readonly body: readonly ArticleBlock[];
};

export type RadarItemCopy = {
  /** Área de la novedad ("Herramientas de oficina"). */
  readonly area: string;
  readonly category: CategoryId;
  readonly title: string;
  readonly description: string;
  readonly relevance: Relevance;
  /** Consejo que acompaña al veredicto ("Probalo esta semana"). */
  readonly advice: string;
};

export type RadarCopy = PostCopyBase & {
  readonly template: 'radar';
  /** Párrafo de "En resumen". */
  readonly summary: string;
  readonly items: readonly RadarItemCopy[];
};

export type PostCopy = EditorialCopy | RadarCopy;

/** Copy de todos los artículos de un idioma. Si falta un slug, no compila. */
export type PostsCopy = { readonly [Slug in PostSlug]: PostCopy };
