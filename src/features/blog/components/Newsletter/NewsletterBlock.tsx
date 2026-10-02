'use client';

import { useId } from 'react';

import { Container } from '@/components/atoms/Container';
import { REVEAL_ITEM_CLASS, useScrollReveal } from '@/hooks/animations';
import { useNewsletterSignup } from '@/hooks/useNewsletterSignup';
import type { Dictionary } from '@/i18n';

import { Kicker } from '../Kicker/Kicker';

type NewsletterBlockProps = {
  dict: Dictionary['blogPage']['newsletter'];
  /** Placeholder y avisos del newsletter general — son los mismos en todo el sitio. */
  messages: Dictionary['newsletter'];
};

/**
 * Bloque oscuro de suscripción que cierra la portada del blog: rótulo,
 * titular grande y bajada a la izquierda; input subrayado con el botón ámbar
 * a la derecha.
 */
export function NewsletterBlock({ dict, messages }: NewsletterBlockProps) {
  const ref = useScrollReveal<HTMLDivElement>();
  const inputId = useId();
  const { email, setEmail, isSubmitting, handleSubmit } = useNewsletterSignup(messages);

  return (
    <section data-i18n-block className="pb-section-y">
      <Container>
        <div ref={ref}>
          <div
            className={`${REVEAL_ITEM_CLASS} grid gap-10 rounded-sharp bg-surface-inverse px-8 py-12 text-on-inverse-warm sm:px-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,27.5rem)] lg:items-end lg:gap-14 lg:px-[4.5rem] lg:py-20`}
          >
            <div>
              <Kicker tone="mark" className="mb-[1.375rem]">
                {dict.eyebrow}
              </Kicker>
              {/* El color va explícito: `globals.css` pinta todos los h1–h4 en tinta. */}
              <h2 className="mb-[1.125rem] text-balance font-display text-ed-newsletter font-medium text-on-inverse-warm">
                {dict.title}
              </h2>
              <p className="max-w-[28.75rem] text-ed-body text-on-inverse-warm/75">
                {dict.description}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              {/* El subrayado se completa al enfocar: el diseño saca el outline del input. */}
              <div className="flex border-b-[1.5px] border-on-inverse-warm/50 transition-colors duration-200 ease-out focus-within:border-on-inverse-warm">
                <label htmlFor={inputId} className="sr-only">
                  {messages.placeholder}
                </label>
                <input
                  id={inputId}
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={messages.placeholder}
                  className="min-w-0 flex-1 border-0 bg-transparent py-3.5 text-ed-body text-on-inverse-warm outline-none placeholder:text-on-inverse-warm/50"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="my-1.5 rounded-sharp bg-accent-mark px-[1.375rem] font-display text-smd font-medium text-heading transition-[filter] duration-200 ease-out hover:brightness-105 focus-visible:shadow-focus focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-55"
                >
                  {dict.submit}
                </button>
              </div>
              <p className="text-ed-label text-on-inverse-warm/55">{dict.note}</p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
