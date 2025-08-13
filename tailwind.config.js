/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0px rgba(255, 255, 255, 0.4)' },
          '50%': { boxShadow: '0 0 15px rgba(255, 255, 255, 0.8)' },
        },
        slideUpFade: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      animation: {
        fadeDown: 'fadeDown 0.5s ease-out both',
        fadeInLeft: 'fadeInLeft 0.6s ease-out both',
        fadeInUp: 'fadeInUp 0.6s ease-out both',
        fadeInRight: 'fadeInRight 0.6s ease-out both',
        gradientX: 'gradientX 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2s infinite',
        slideUpFade: 'slideUpFade 0.7s ease-out both',
      },
    },
  },
  plugins: [],
}
