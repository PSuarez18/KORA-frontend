'use client';

import { useId } from 'react';

import { useNewsletterSignup } from '@/hooks/useNewsletterSignup';
import type { Dictionary } from '@/i18n';

type NewsletterInlineProps = {
  /** Titular propio del artículo ("Recibí la parte 3 cuando salga."). */
  title: string;
  submitLabel: string;
  /** Placeholder y avisos del newsletter general — son los mismos en todo el sitio. */
  messages: Dictionary['newsletter'];
};

/** Suscripción liviana al pie de un artículo: titular, input claro y botón oscuro. */
export function NewsletterInline({ title, submitLabel, messages }: NewsletterInlineProps) {
  const inputId = useId();
  const { email, setEmail, isSubmitting, handleSubmit } = useNewsletterSignup(messages);

  return (
    <section className="mt-14 flex flex-col gap-[1.125rem] border-t border-hairline-soft pt-10">
      <h2 className="font-display text-ed-subscribe font-medium">{title}</h2>

      <form onSubmit={handleSubmit} className="flex flex-wrap gap-2.5">
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
          className="min-w-[13.75rem] flex-1 rounded-sharp border border-ink/20 bg-surface px-4 py-3.5 text-base text-heading outline-none transition-colors duration-200 ease-out placeholder:text-heading/50 focus:border-ink"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-sharp bg-heading px-6 py-3.5 font-display text-smd font-medium text-on-inverse-warm transition-shadow duration-200 ease-out hover:shadow-accent-glow focus-visible:shadow-focus focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-55"
        >
          {submitLabel}
        </button>
      </form>
    </section>
  );
}
