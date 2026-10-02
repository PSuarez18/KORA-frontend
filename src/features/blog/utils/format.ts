import { HTML_LANG, type Dictionary, type Locale } from '@/i18n';
import { interpolate } from '@/utils/interpolate';

/**
 * Fecha compacta, siempre "día mes año": "18 sept 2026", "18 Sep 2026",
 * "18 set 2026".
 *
 * Se arma con las partes en vez de usar el formato de `Intl` tal cual porque
 * en es y pt ese formato es "18 de sept de 2026", que no entra en la columna
 * del archivo. El nombre del mes sí sale de `Intl`, así que respeta el idioma.
 *
 * `timeZone: 'UTC'` es deliberado: las fechas vienen como `YYYY-MM-DD`, que se
 * parsean a medianoche UTC. Sin esto, en Argentina (UTC-3) se mostraría el día
 * anterior.
 */
export function formatPostDate(locale: Locale, isoDate: string): string {
  const parts = new Intl.DateTimeFormat(HTML_LANG[locale], {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).formatToParts(new Date(isoDate));

  const part = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((candidate) => candidate.type === type)?.value ?? '';

  // pt-BR abrevia con punto ("set."); el diseño va sin.
  return `${part('day')} ${part('month').replace(/\.$/, '')} ${part('year')}`;
}

/** "{count} artículo" o "{count} artículos", con las reglas de plural del idioma. */
export function formatPostCount(
  locale: Locale,
  count: number,
  dict: Dictionary['blogPage']['archive'],
): string {
  const rule = new Intl.PluralRules(HTML_LANG[locale]).select(count);
  return interpolate(rule === 'one' ? dict.countOne : dict.countOther, { count });
}

/** "01", "02"… — numeral de los pasos y de las novedades del Radar IA. */
export function formatOrdinal(index: number): string {
  return String(index + 1).padStart(2, '0');
}
