import Link from 'next/link';
import { siteConfig } from '@/app/site.config';

export const Footer = () => (
  <footer className='mt-12 flex h-24 w-full justify-between border-t border-zinc-800'>
    <div className='mt-4 flex space-x-4 text-sm'>
      {siteConfig.footerLink.map((link) => (
        <Link
          key={link.name}
          href={link.url}
          className='text-white/75 hover:text-white/90'
        >
          {link.name}
        </Link>
      ))}
    </div>
    <div className='mt-4 text-sm text-white/75'>
      <span>© {new Date().getFullYear()} Dereje Getu Tadesse</span>
    </div>
  </footer>
);
