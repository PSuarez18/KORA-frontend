import { DM_Sans } from 'next/font/google';

/**
 * DM Sans es la letra del texto corrido del blog (diseño "Blog kora."). Va en
 * este layout y no en el raíz para que solo la descarguen las páginas del blog:
 * Next la auto-hospeda y la precarga únicamente en las rutas que la usan.
 *
 * Es variable, así que un solo archivo cubre el 400 del cuerpo y el 600 de la
 * firma. Expone la variable que consume `font-reading` del preset.
 */
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <div className={dmSans.variable}>{children}</div>;
}
