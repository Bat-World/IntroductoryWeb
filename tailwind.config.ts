import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
            anton: ['var(--font-anton)'],
      },
    },
  },
  content: ['./src/**/*.{js,ts,jsx,tsx}'], 
  plugins: [],
}
export default config
