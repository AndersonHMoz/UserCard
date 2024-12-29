import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-primary": "#050505",
        "background-secondary": "#F0F10",
        "background-tertiary": "#19191a",
        "content-body": "#CDCBCC",
        "content-placeholder": "827D7F",
        "content-headline": "#B2B2B2",
        "border-primary": "#19191A",
        "border-secondary": "#323234",
        "boder-tertiary": "#97979B",
        "accent-purple": "#4B2DBB",
        "accent-green":"#87BB2B",
        "accent-pink": "#B5446B",

      },
    },
  },
  plugins: [],
} satisfies Config;
