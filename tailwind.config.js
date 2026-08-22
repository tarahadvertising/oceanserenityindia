/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0b62a9', // Logo Marine Blue
          dark: '#273171',    // Logo Deep Navy
          light: '#21ade4',   // Logo Cerulean / Wave Blue
        },
        secondary: {
          DEFAULT: '#273171',
          dark: '#162050',
          light: '#f0f7ff',
        },
        ocean: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc5fb',
          400: '#38a9f6',
          500: '#21ade4', // Logo Cerulean Blue
          600: '#0b62a9', // Logo Royal Ocean Blue
          700: '#115ea3',
          800: '#27387a',
          900: '#273171', // Logo Deep Navy
          950: '#0f1738', // Deep Midnight
        },
        accent: {
          DEFAULT: '#21ade4',
          dark: '#0b62a9',
          light: '#63ccf5',
          gold: '#ffc857',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['Montserrat', 'Inter', 'Segoe UI', 'sans-serif'],
        ocean: ['Poppins', 'Montserrat', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'ocean-gradient': 'linear-gradient(180deg, #273171 0%, #0b62a9 50%, #21ade4 100%)',
        'ocean-dark-gradient': 'linear-gradient(135deg, #0f1738 0%, #162050 50%, #273171 100%)',
        'primary-gradient': 'linear-gradient(135deg, #273171 0%, #0b62a9 50%, #21ade4 100%)',
        'azure-gradient': 'linear-gradient(135deg, #0b62a9 0%, #21ade4 100%)',
      },
      boxShadow: {
        'ocean-glow': '0 4px 20px rgba(33, 173, 228, 0.25)',
        'ocean-deep': '0 8px 30px rgba(11, 98, 169, 0.3)',
        'card-ocean': '0 4px 6px -1px rgba(11, 98, 169, 0.1), 0 2px 4px -1px rgba(11, 98, 169, 0.06)',
      },
    },
  },
  plugins: [],
}
