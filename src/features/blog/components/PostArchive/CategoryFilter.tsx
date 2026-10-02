import { cn } from '@/utils/cn';

import { Kicker } from '../Kicker/Kicker';

export type CategoryOption<Id extends string> = {
  readonly id: Id;
  readonly label: string;
};

type CategoryFilterProps<Id extends string> = {
  title: string;
  options: readonly CategoryOption<Id>[];
  activeId: Id;
  onSelect: (id: Id) => void;
};

/**
 * Lista de categorías del archivo. La activa lleva la rayita ámbar a la
 * izquierda; el resto queda atenuado.
 *
 * En desktop es una columna fija al costado; en mobile, una fila que se corta
 * en varias líneas arriba de la lista.
 */
export function CategoryFilter<Id extends string>({
  title,
  options,
  activeId,
  onSelect,
}: CategoryFilterProps<Id>) {
  return (
    <nav aria-label={title} className="flex flex-col gap-3.5">
      <Kicker>{title}</Kicker>

      <ul className="flex flex-wrap gap-x-6 gap-y-1 lg:flex-col lg:gap-1.5">
        {options.map((option) => {
          const isActive = option.id === activeId;

          return (
            <li key={option.id}>
              <button
                type="button"
                aria-pressed={isActive}
                onClick={() => onSelect(option.id)}
                className={cn(
                  'flex items-center gap-3 py-[7px] font-display text-smd text-heading transition-opacity duration-200 ease-out focus-visible:shadow-focus focus-visible:outline-none',
                  isActive ? 'font-medium' : 'font-normal opacity-60 hover:opacity-100',
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    'h-[1.5px] w-3.5 transition-colors duration-200 ease-out',
                    isActive ? 'bg-accent-mark' : 'bg-transparent',
                  )}
                />
                {option.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
