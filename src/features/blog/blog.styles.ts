/**
 * Base tipográfica del blog, igual que la raíz del diseño "Blog kora.": DM Sans
 * a 17px, interlineado de lectura y en tinta. Todo texto que no declara su
 * letra, su tamaño o su interlineado los hereda de acá — por eso los
 * componentes del blog solo escriben `font-display` en lo que va en Satoshi.
 *
 * El `leading-*` va después del tamaño: dentro de `cn()` un `text-{size}` pisa
 * cualquier `leading-*` que venga antes.
 */
export const BLOG_ROOT_CLASSES = 'font-reading text-ed-body leading-reading text-heading';
