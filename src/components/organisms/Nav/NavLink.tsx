import Link from 'next/link';

import { cn } from '@/utils/cn';

import { NAV_LINK_CLASSES } from './Nav.styles';

type NavLinkProps = {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
};

/** Link del nav. Al pasar el cursor solo cambia de color (ver `NAV_LINK_CLASSES`). */
export function NavLink({ href, label, onClick, className }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(NAV_LINK_CLASSES, 'inline-flex items-center', className)}
    >
      {label}
    </Link>
  );
}
