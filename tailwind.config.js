/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#07090D',
          secondary: '#0B1018',
          card: 'rgba(15, 21, 32, 0.65)',
        },
        glass: {
          surface: 'rgba(255, 255, 255, 0.045)',
          surfaceHover: 'rgba(255, 255, 255, 0.075)',
          border: 'rgba(255, 255, 255, 0.10)',
          borderHover: 'rgba(101, 228, 255, 0.35)',
        },
        accent: {
          cyan: '#65E4FF',
          cyanGlow: 'rgba(101, 228, 255, 0.25)',
          violet: '#8B7CFF',
          violetGlow: 'rgba(139, 124, 255, 0.25)',
        },
        text: {
          primary: '#F5F7FA',
          secondary: '#9CA8B8',
          muted: '#637286',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'cyan-glow': '0 0 25px -5px rgba(101, 228, 255, 0.3)',
        'violet-glow': '0 0 25px -5px rgba(139, 124, 255, 0.3)',
        'card-glow': '0 0 30px -10px rgba(101, 228, 255, 0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyan-violet': 'linear-gradient(135deg, #65E4FF 0%, #8B7CFF 100%)',
        'glass-sheen': 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
