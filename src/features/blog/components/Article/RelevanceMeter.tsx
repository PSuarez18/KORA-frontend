import { cn } from '@/utils/cn';

import { RELEVANCE_LEVELS, type Relevance } from '../../types';

type MeterSize = 'sm' | 'md';

const BAR_SIZES: Record<MeterSize, string> = {
  /** Leyenda del resumen. */
  sm: 'h-1.5 w-3.5',
  /** Veredicto de cada novedad. */
  md: 'h-[7px] w-[18px]',
};

/**
 * Medidor de tres barras del Radar IA. Es decorativo: el veredicto siempre va
 * escrito al lado, así que se oculta a los lectores de pantalla.
 */
export function RelevanceMeter({ level, size = 'md' }: { level: Relevance; size?: MeterSize }) {
  // Los niveles van de más a menos urgente: "Sí, ahora" enciende las tres barras, "Todavía no" una.
  const filledBars = RELEVANCE_LEVELS.length - RELEVANCE_LEVELS.indexOf(level);

  return (
    <span aria-hidden className="flex gap-[3px]">
      {RELEVANCE_LEVELS.map((id, index) => (
        <span
          key={id}
          className={cn(BAR_SIZES[size], index < filledBars ? 'bg-accent-mark' : 'bg-heading/15')}
        />
      ))}
    </span>
  );
}
