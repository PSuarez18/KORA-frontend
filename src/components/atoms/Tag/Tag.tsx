import type { ReactNode } from 'react';

import { cn } from '@/utils/cn';

type TagVariant = 'pill' | 'chip';
type TagSize = 'sm' | 'md';

/**
 * El interlineado va en `sizes`, después del tamaño: dentro de `cn()` un
 * `text-{size}` pisa cualquier `leading-*` que venga antes.
 */
const VARIANTS: Record<TagVariant, { base: string; sizes: Record<TagSize, string> }> = {
  /** Píldora con borde de las cards de la home (diseño de Figma). */
  pill: {
    base: 'rounded-pill border border-ink/60 font-bold',
    sizes: {
      sm: 'px-3 py-0.5 text-xs leading-relaxed',
      md: 'px-[15px] py-1 text-sm leading-relaxed',
    },
  },
  /** Rectángulo celeste en mayúsculas del blog (diseño "Blog kora."). */
  chip: {
    base: 'rounded-sharp bg-chip font-medium uppercase tracking-wide',
    sizes: {
      /** Archivo y novedades del Radar IA: 11px. */
      sm: 'px-[9px] py-1 text-ed-chip leading-reading',
      /** Nota destacada: 12px. */
      md: 'px-2.5 py-[5px] text-xs leading-reading',
    },
  },
};

type TagProps = {
  variant?: TagVariant;
  size?: TagSize;
  className?: string;
  children: ReactNode;
};

/** Etiqueta de categoría ("Estandarización", "Radar IA"). */
export function Tag({ variant = 'pill', size = 'md', className, children }: TagProps) {
  const { base, sizes } = VARIANTS[variant];

  return (
    <span
      className={cn(
        'inline-flex w-fit items-center font-display text-heading',
        base,
        sizes[size],
        className,
      )}
    >
      {children}
    </span>
  );
}
