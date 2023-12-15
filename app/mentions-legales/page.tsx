import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { Footer } from '@/app/components/footer';

const Mentions = () => {
  return (
    <>
      <main className='prose prose-headings:text-white/90 prose-p:text-white/75 prose-a:text-white/75 prose-strong:text-white/80 prose-ul:text-white/75 mx-auto px-6 py-12 antialiased sm:px-12 md:px-12 md:py-20'>
        <header className='mb-4'>
          <Link
            href='/'
            className='flex items-center gap-1 text-white/75 no-underline hover:text-white/90'
          >
            <ChevronLeft size={16} /> Retour
          </Link>
        </header>
        <h1 className='!text-2xl'>MENTIONS LÉGALES</h1>
        <p>
          Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004
          pour la confiance en l&apos;économie numérique, il est précisé aux
          utilisateurs du site dereje l&apos;identité des différents
          intervenants dans le cadre de sa réalisation et de son suivi.
        </p>

        <h2>Edition du site </h2>

        <p>
          Le présent site, accessible à l&apos;URL www.dereje.fr, est édité par
          :
        </p>

        <p>
          {' '}
          <strong>Dereje Getu Tadesse</strong>, résidant Besançon, de
          nationalité Éthiopienne (Éthiopie), né(e) le 16/04/2001,{' '}
        </p>

        <h2> Hébergement</h2>

        <p>
          Le Site est hébergé par la société Cloudflare, situé 101 Townsend St,
          San Francisco, CA 94107, États-Unis, (contact téléphonique ou email :
          +16503198930).
        </p>

        <h2> Directeur de publication </h2>

        <p>Le Directeur de la publication du Site est Dereje Getu Tadesse.</p>

        <h2>Nous contacter </h2>

        <p> Par téléphone : +33 6 61 10 77 20</p>
        <p> Par email : hello@dereje.fr</p>
        <div className='not-prose'>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Mentions;
