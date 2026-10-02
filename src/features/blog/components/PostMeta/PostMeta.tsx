import { Fragment } from 'react';

import { cn } from '@/utils/cn';

type PostMetaVariant = 'muted' | 'byline';

/**
 * Cómo se pinta cada parte. En la nota destacada toda la línea va atenuada; en
 * el artículo es una firma: el autor en semibold y el resto apenas más claro.
 */
const VARIANTS: Record<PostMetaVariant, { first: string; rest: string; dot: string }> = {
  muted: { first: 'text-heading/60', rest: 'text-heading/60', dot: 'text-heading/60' },
  byline: { first: 'font-semibold text-heading', rest: 'text-heading/65', dot: 'text-heading/50' },
};

/**
 * Línea de metadatos separada por puntos medios: "Equipo kora. · 18 sep 2026 ·
 * 7 min de lectura". Va en la letra de lectura (DM Sans), que hereda del blog.
 */
export function PostMeta({
  items,
  variant = 'muted',
  className,
}: {
  items: readonly string[];
  variant?: PostMetaVariant;
  className?: string;
}) {
  const styles = VARIANTS[variant];

  return (
    <p className={cn('flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm', className)}>
      {items.map((item, index) => (
        <Fragment key={item}>
          {index > 0 ? (
            <span aria-hidden className={styles.dot}>
              ·
            </span>
          ) : null}
          <span className={index === 0 ? styles.first : styles.rest}>{item}</span>
        </Fragment>
      ))}
    </p>
  );
}
