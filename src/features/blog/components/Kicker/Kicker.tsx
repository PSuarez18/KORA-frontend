import type { ElementType, ReactNode } from 'react';

import { cn } from '@/utils/cn';

type KickerTone = 'accent' | 'ink' | 'mark';

const TONES: Record<KickerTone, string> = {
  /** Ámbar quemado — eyebrows y kickers sobre fondo claro. */
  accent: 'text-accent',
  /** Tinta — "ARCHIVO", "EN RESUMEN". */
  ink: 'text-heading',
  /** Ámbar medio — "NEWSLETTER" sobre el bloque oscuro. */
  mark: 'text-accent-mark',
};

type KickerSize = 'sm' | 'md';

const SIZES: Record<KickerSize, string> = {
  /** "EN RESUMEN": 12px. */
  sm: 'text-xs',
  /** El resto: 13px. */
  md: 'text-ed-label',
};

type KickerProps = {
  as?: ElementType;
  tone?: KickerTone;
  size?: KickerSize;
  className?: string;
  children: ReactNode;
};

/**
 * Rótulo en mayúsculas espaciadas del blog: "BLOG · NOTAS DE OPERACIÓN",
 * "CATEGORÍAS", "ARCHIVO", "QUÉ HACER CON ESTO".
 *
 * Es el equivalente editorial del `Eyebrow` de la home, que va en minúsculas y
 * con el cuadradito ámbar: el diseño del blog no lo lleva.
 */
export function Kicker({
  as: Tag = 'p',
  tone = 'accent',
  size = 'md',
  className,
  children,
}: KickerProps) {
  return (
    <Tag
      className={cn(
        'font-display font-medium uppercase tracking-label',
        SIZES[size],
        TONES[tone],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
