import type { ArticleBlock } from '../../types';

/**
 * Cuerpo de un artículo editorial. Cada bloque del diccionario se pinta según
 * su `kind`; el orden lo da el diccionario.
 *
 * Los párrafos van en la letra de lectura (DM Sans, heredada del blog); los
 * subtítulos y las citas, en Satoshi.
 */
export function EditorialBody({ blocks }: { blocks: readonly ArticleBlock[] }) {
  return (
    <div className="flex flex-col gap-6 text-ed-reading">
      {blocks.map((block) => {
        switch (block.kind) {
          case 'heading':
            return (
              <h2
                key={block.text}
                className="mt-6 text-balance font-display text-ed-heading font-medium text-accent"
              >
                {block.text}
              </h2>
            );
          case 'quote':
            return (
              <blockquote key={block.text} className="my-8 flex flex-col gap-[1.125rem]">
                <span aria-hidden className="block h-0.5 w-12 bg-accent-mark" />
                <p className="text-balance font-display text-ed-quote font-medium">{block.text}</p>
              </blockquote>
            );
          case 'paragraph':
            return <p key={block.text}>{block.text}</p>;
        }
      })}
    </div>
  );
}
