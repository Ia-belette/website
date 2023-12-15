import { Mail, Phone } from 'lucide-react';

export const MailMe = () => (
  <a
    href='mailto:hello@dereje.fr'
    className='mt-2 flex items-center gap-2 text-white/75 hover:text-white/90'
    aria-label='Me contacter'
  >
    <Mail size={16} aria-hidden={true} /> hello[@]dereje.fr
  </a>
);

export const PhoneMe = () => (
  <a
    href='tel:+336 61 10 77 20'
    className='mt-2 flex items-center gap-2 text-white/75 hover:text-white/90'
    aria-label='Me contacter'
    aria-describedby='Me contacter'
    aria-labelledby='Me contacter'
  >
    <Phone
      size={16}
      className='text-white/75 hover:text-white/90'
      aria-hidden={true}
    />{' '}
    06 61 10 77 20
  </a>
);
