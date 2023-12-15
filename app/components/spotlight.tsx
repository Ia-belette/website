'use client';
import { useRef } from 'react';
import { useMouse } from 'react-use';

export const Spotlight = ({ children }: { children: React.ReactNode }) => {
  const container = useRef<HTMLDivElement>(null);
  const { elX, elY } = useMouse(container);
  return (
    <main
      ref={container}
      style={{
        opacity: 1,
        background: `radial-gradient(500px circle at ${elX}px ${elY}px, rgba(29,185,84,.10), transparent 90%)`,
        willChange: 'background',
      }}
      className='px-6 py-12 antialiased sm:px-12 md:px-12 md:py-20 lg:px-24 lg:py-0'
    >
      {children}
    </main>
  );
};
