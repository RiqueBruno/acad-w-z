import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        colors: {
          brand: {
            primary: '#FFFFFF',
            secondary: '#4C4B4B',
            tertiary: '#9E624D',
            black: '#000000',
          },
          gradient: {
            start: '#9E624D',
            mid: '#D0A692',
            end: '#9E624D',
          },
        },
      },
      backgroundImage: {
        'custom-bg': "url('/BG.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
