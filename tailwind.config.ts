import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    animation: {
      'spin-slow': 'spin 3s linear infinite',
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
