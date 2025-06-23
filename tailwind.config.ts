import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        secondary: '#94a3b8',
        accent: '#f43f5e',
        accent: '#60a5fa',
      },
    },
  },
  plugins: [],
}

export default config;