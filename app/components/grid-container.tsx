import { Spotlight } from './spotlight';

export const GridContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Spotlight>
      <section className='lg:flex lg:justify-between lg:gap-4'>
        {children}
      </section>
    </Spotlight>
  );
};
