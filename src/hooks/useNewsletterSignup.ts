'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import { toast } from 'sonner';

import { ROUTES_API } from '@/constants/routes.api';
import { apiClient } from '@/lib/axios';

type NewsletterMessages = {
  success: string;
  error: string;
};

/**
 * Estado y envío de un formulario de suscripción al newsletter.
 *
 * Lo comparten el panel de la home y los dos formularios del blog (portada y
 * final de artículo): cambia el diseño, no la llamada al BFF ni los avisos.
 */
export function useNewsletterSignup(messages: NewsletterMessages) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await apiClient.post(ROUTES_API.newsletter, { email });
      toast.success(messages.success);
      setEmail('');
    } catch {
      toast.error(messages.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { email, setEmail, isSubmitting, handleSubmit };
}
