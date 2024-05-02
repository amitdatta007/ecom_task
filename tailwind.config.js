/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "secondary": "var(--secondary)",
        "black": "var(--black)",
        "background": "var(--background)",
        "border": "var(--border)",
        "paragraph": "var(--paragraph)",
      },
    }
  },
  plugins: [],
};
