/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sand: '#F5EDD8',
        terracotta: '#C4683A',
        bronze: '#8B5E3C',
        dark: '#1A1208',
        ivory: '#FFF9ED',
        olive: '#576045',
        clay: '#A95032',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Jost', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(26, 18, 8, 0.12)',
      },
      backgroundImage: {
        grain:
          "linear-gradient(rgba(245, 237, 216, 0.88), rgba(245, 237, 216, 0.88)), url('data:image/svg+xml,%3Csvg viewBox=%220 0 120 120%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.75%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22 opacity=%220.12%22/%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [],
};
