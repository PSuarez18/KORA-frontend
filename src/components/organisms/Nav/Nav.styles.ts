/**
 * Estilo compartido por los links del nav — 16px Medium, como en Figma.
 *
 * `whitespace-nowrap` es necesario: los links son ítems de una fila flex que
 * puede achicarse, y sin él "Nuestro método" se parte en dos líneas entre
 * 1024 y ~1165px y desalinea la fila.
 */
export const NAV_LINK_CLASSES =
  'whitespace-nowrap font-display text-base font-medium tracking-tight text-heading ' +
  'transition-colors ' +
  'duration-200 ease-out hover:text-accent focus-visible:text-accent focus-visible:outline-none';
