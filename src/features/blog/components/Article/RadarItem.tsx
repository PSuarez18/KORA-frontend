import { Tag } from '@/components/atoms/Tag';

import { RelevanceMeter } from './RelevanceMeter';
import type { Relevance } from '../../types';

type RadarItemProps = {
  /** "01 — Herramientas de oficina". */
  label: string;
  category: string;
  title: string;
  description: string;
  relevance: Relevance;
  relevanceTitle: string;
  verdict: string;
  advice: string;
};

/** Una novedad del Radar IA, con su veredicto "¿Te importa?" al pie. */
export function RadarItem({
  label,
  category,
  title,
  description,
  relevance,
  relevanceTitle,
  verdict,
  advice,
}: RadarItemProps) {
  return (
    <section className="flex flex-col gap-4 border-t border-ink py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <span className="font-display text-ed-label font-medium text-accent">{label}</span>
        <Tag variant="chip" size="sm">
          {category}
        </Tag>
      </div>

      <h2 className="text-balance font-display text-ed-heading font-medium">{title}</h2>

      <p className="text-ed-body">{description}</p>

      <div className="flex flex-wrap items-center justify-between gap-4 rounded-sharp border border-hairline-soft bg-surface px-[1.125rem] py-3.5">
        <span className="font-display text-sm font-medium">{relevanceTitle}</span>
        <span className="flex flex-wrap items-center gap-3 text-sm">
          <RelevanceMeter level={relevance} />
          <span className="font-semibold">{verdict}.</span>
          <span className="text-heading/70">{advice}</span>
        </span>
      </div>
    </section>
  );
}
