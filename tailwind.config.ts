import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './core/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { bg: '#050508', dor: '#C9A86A', fuchsia: '#E0007A' },
      fontFamily: { sans: ['var(--font-geist)'], mono: ['var(--font-mono)'] }
    }
  },
  plugins: [],
}
export default config
