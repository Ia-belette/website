import { Spotify } from './spotify';
import { Profile } from './profile';
import { MailMe } from './contact-me';

export const Header = () => {
  return (
    <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24'>
      <div className='flex flex-col gap-2'>
        <Profile />
        <Spotify />
      </div>
      <div className='mt-4 space-y-4'>
        <MailMe />
      </div>
    </header>
  );
};
