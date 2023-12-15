import { siteConfig } from '@/app/site.config';

type Song = {
  current_song: {
    title: string;
    artist: string;
    song_url: string;
    is_playing: boolean;
  };
  isPlaying?: boolean;
};

const currentSong = async () => {
  const song = await fetch(siteConfig.spotify_endpoint, {
    method: 'GET',
    cache: 'no-cache',
  });
  return song.json();
};

export const Spotify = async () => {
  const song: Song = await currentSong();

  if (song.isPlaying || !song.current_song?.is_playing) {
    return (
      <p className='mt-2 flex items-center gap-2 text-white/80'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='#1db954'
          className='fill-current'
          viewBox='0 0 16 16'
        >
          <path d='M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z' />
        </svg>
        Pas d&apos;écoute en cours
      </p>
    );
  }

  return (
    <div className='mt-2 flex flex-col gap-2'>
      <a
        href={song.current_song.song_url}
        target='_blank'
        rel='noopener noreferrer'
        className='flex items-center gap-2 text-white/80 hover:text-white/100'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='#1db954'
          className='animate-spin-slow'
          viewBox='0 0 16 16'
        >
          <path d='M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z' />
        </svg>
        {song.current_song.title}
      </a>
    </div>
  );
};
