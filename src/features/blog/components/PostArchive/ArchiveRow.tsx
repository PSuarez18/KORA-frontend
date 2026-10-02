import Link from 'next/link';

import { Tag } from '@/components/atoms/Tag';

type ArchiveRowProps = {
  href: string;
  date: string;
  /** Fecha ISO, para el `dateTime` del `<time>`. */
  isoDate: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
};

/**
 * Fila del archivo: fecha | categoría + titular + bajada | tiempo de lectura.
 *
 * El link cubre toda la fila con un pseudo-elemento (`after:inset-0`) en vez de
 * envolverla: así el `<a>` contiene solo el titular, que es lo que lee un
 * lector de pantalla, y la fila entera sigue siendo clickeable.
 */
export function ArchiveRow({
  href,
  date,
  isoDate,
  category,
  title,
  excerpt,
  readTime,
}: ArchiveRowProps) {
  return (
    <article className="relative grid gap-3 border-b border-hairline-soft py-[30px] transition-colors duration-200 ease-out hover:bg-surface-sand/35 md:grid-cols-[7.5rem_minmax(0,1fr)_5.625rem] md:items-baseline md:gap-8">
      <time dateTime={isoDate} className="text-sm text-heading/60">
        {date}
      </time>

      <div className="flex flex-col items-start gap-2.5">
        <Tag variant="chip" size="sm">
          {category}
        </Tag>
        <h3 className="text-balance font-display text-ed-row font-medium text-heading">
          <Link
            href={href}
            className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:after:shadow-focus"
          >
            {title}
          </Link>
        </h3>
        <p className="text-base text-heading/70">{excerpt}</p>
      </div>

      <p className="text-sm text-heading/60 md:text-right">{readTime}</p>
    </article>
  );
}
