export const siteConfig = {
  title: 'Développeur web',
  full_name: 'Dereje GETU TADESSE',
  description: (
    <p className='mb-14 leading-normal'>
      Hey 👋 je suis <strong>Dereje Getu Tadesse</strong> Un développeur{'  '}
      <strong>frontend</strong>. J&apos;aime transformer des idées en réalités
      visuelles sur le <strong>web</strong>.
    </p>
  ),
  location: 'Besançon, France',
  site_url: 'https://dereje.fr',
  spotify_endpoint: 'https://current-playing.dereje.fr/',
  socials: [
    {
      name: 'Github',
      url: 'https://github.com/Dereje-getu-tadesse-10',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/dereje-getu-tadesse-1158a9214/',
    },
  ],
  projects: [
    {
      icon: 'soon',
      tempIcon: 'OC',
      name: 'Opoilchic',
      description:
        "Création d'une boutique Shopify vendant des colliers personnalisés pour chiens et chats.",
      stack: ['Shopify', 'Liquid'],
      link: 'https://www.opoilchic.com',
      date: {
        start: '14/12/2023',
        end: 'Present',
      },
    },
    {
      icon: 'https://www.focusedshares.com/icon.png',
      name: `Focused shares`,
      description: `Application dédiée au partage de vidéos YouTube de musique Lofi, Jazz, Chillhop, etc., spécialement conçue pour favoriser la concentration.`,
      stack: ['Next.js', 'Panda CSS', 'Cloudflare'],
      link: 'https://focusedshares.com/',
      date: {
        start: '01/12/2023',
        end: 'Present',
      },
    },
    {
      icon: 'https://atelier.qru.pet/assets/logo_qru.d8327dd1.svg',
      name: 'QRU Atelier',
      description: `Authentification, gestion des animaux et intégration Stripe dans une app e-commerce.`,
      stack: ['React', 'MUI'],
      link: 'https://atelier.qru.pet/',
      date: {
        start: '03/04/2023',
        end: '24/11/2023',
      },
    },
    {
      icon: 'https://atelier.qru.pet/assets/logo_qru.d8327dd1.svg',
      name: 'Point relais',
      description: `Gestion de l'UI et de l'authentification via l'API interne.`,
      stack: ['React', 'ReactBootstrap', 'Bootstrap'],
      link: 'https://relais.qru.pet/',
      date: {
        start: '19/12/2022',
        end: '03/04/2023',
      },
    },
  ],
  footerLink: [
    {
      name: 'Mentions légales',
      url: '/mentions-legales',
    },
  ],
};
