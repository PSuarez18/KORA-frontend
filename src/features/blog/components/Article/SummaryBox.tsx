import type { ReactNode } from 'react';

import { Kicker } from '../Kicker/Kicker';

/** Recuadro "En resumen" que abre el artículo, sobre la arena del diseño. */
export function SummaryBox({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="mb-14 mt-12 rounded-sharp bg-surface-sand px-6 py-7 sm:px-8">
      <Kicker size="sm" tone="ink" className="mb-3.5">
        {title}
      </Kicker>
      {children}
    </aside>
  );
}
