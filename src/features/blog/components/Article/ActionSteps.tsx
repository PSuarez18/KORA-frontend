import type { ActionStep } from '../../types';
import { formatOrdinal } from '../../utils/format';
import { Kicker } from '../Kicker/Kicker';

/** Recuadro "Qué hacer con esto": pasos numerados que cierran el artículo. */
export function ActionSteps({ title, steps }: { title: string; steps: readonly ActionStep[] }) {
  return (
    <section className="mt-[4.5rem] rounded-sharp border border-ink p-6 sm:p-10">
      <Kicker as="h2" className="mb-7">
        {title}
      </Kicker>

      <ol className="flex flex-col gap-6">
        {steps.map((step, index) => (
          <li key={step.title} className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4">
            <span aria-hidden className="font-display text-ed-number font-medium text-accent-mark">
              {formatOrdinal(index)}
            </span>
            <div>
              <p className="mb-1 font-display text-ed-step font-medium">{step.title}</p>
              <p className="text-base text-heading/70">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
