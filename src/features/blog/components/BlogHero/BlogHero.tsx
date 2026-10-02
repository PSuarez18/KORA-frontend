'use client';

import { Container } from '@/components/atoms/Container';
import { RevealText } from '@/components/atoms/RevealText';
import { REVEAL_ITEM_CLASS, useScrollReveal } from '@/hooks/animations';
import type { Dictionary } from '@/i18n';

import { Kicker } from '../Kicker/Kicker';

/**
 * Apertura del blog: rótulo + titular a la izquierda y bajada a la derecha,
 * alineadas por la base — como en el diseño.
 */
export function BlogHero({ dict }: { dict: Dictionary['blogPage']['hero'] }) {
  const ref = useScrollReveal<HTMLDivElement>({ start: 'top 95%' });

  return (
    <section data-i18n-block className="pb-section-y-tight pt-page-hero">
      <Container>
        <div
          ref={ref}
          className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,26.25rem)] lg:items-end lg:gap-12"
        >
          <div>
            <Kicker className={`${REVEAL_ITEM_CLASS} mb-7`}>{dict.eyebrow}</Kicker>
            {/* `immediate`: está sobre el fold, no puede depender de un ScrollTrigger. */}
            <RevealText
              as="h1"
              immediate
              className="text-balance font-display text-ed-display font-medium text-heading"
            >
              {dict.title}
            </RevealText>
          </div>

          <p className={`${REVEAL_ITEM_CLASS} text-ed-intro text-heading/80`}>{dict.subtitle}</p>
        </div>
      </Container>
    </section>
  );
}
