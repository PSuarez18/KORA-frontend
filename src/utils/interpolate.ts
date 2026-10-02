/**
 * Reemplaza los `{placeholder}` de un texto del diccionario.
 *
 * `interpolate('{minutes} min', { minutes: 7 })` → `'7 min'`. Un placeholder sin
 * valor queda tal cual, así se ve el error en pantalla en vez de un hueco.
 */
export function interpolate(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}
