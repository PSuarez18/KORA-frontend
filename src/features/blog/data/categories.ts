/**
 * Categorías del blog, en el orden del filtro del diseño.
 *
 * Igual que los slugs, los ids no se traducen: son la clave del diccionario
 * (`blogPage.categories`). El filtro solo muestra las que tienen artículos, así
 * que una categoría sin notas todavía no aparece vacía.
 */
export const CATEGORY_IDS = [
  'estandarizacion',
  'digitalizacion',
  'automatizacion',
  'gestion-del-conocimiento',
  'radar-ia',
] as const;

export type CategoryId = (typeof CATEGORY_IDS)[number];
