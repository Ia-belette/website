import { siteConfig } from '@/app/site.config';

export const About = () => (
  <div className='space-y-4 text-white/80 md:px-4 md:pb-4'>
    <h2 className='text-1xl font-medium text-white/80'>À propos</h2>
    {siteConfig.description}
  </div>
);
