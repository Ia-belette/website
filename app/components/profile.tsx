import { MapPin } from 'lucide-react';
import { siteConfig } from '@/app/site.config';

export const Profile = () => (
  <>
    <h1 className='text-3xl font-bold text-white/90 sm:text-4xl md:text-5xl'>
      {siteConfig.full_name}
    </h1>
    <p className='mt-4 flex items-center gap-1 text-white/80'>
      <MapPin size={20} aria-aria-hidden={true} /> {siteConfig.location}
    </p>
  </>
);
