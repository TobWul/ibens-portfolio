/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    spacing: {
      0: 0,
      1: 1,
      2: 2,
      4: "0.25rem",
      8: "0.5rem",
      12: "0.75rem",
      16: "1rem",
      24: "1.5rem",
      32: "2rem",
      48: "3rem",
      64: "4rem",
      96: "6rem",
      128: "8rem",
      256: "12rem",
      384: "16rem",
      512: "24rem",
      640: "32rem",
      768: "48rem",
      screen: "100vw",
    },
    fontSize: {
      12: "0.75rem",
      14: "0.875rem",
      16: "1rem",
      18: "1.125rem",
      24: "1.5rem",
      32: "2rem",
      36: "2.25rem",
      40: "2.5rem",
      48: "3rem",
      96: ["6rem", { lineHeight: "1.2em" }],
      128: ["8rem", { lineHeight: "1.2em" }],
    },
    fontFamily: {
      body: "var(--font-body)",
      display: "var(--font-display)",
    },
    fontWeight: {
      light: 300,
      bold: 600,
    },
    extend: {
      leading: {},
      colors: {
        background: "#F3F2EF",
        primary: {
          900: "#0C0056",
        },
      },
      borderColor: {
        DEFAULT: "#1f2937",
      },
    },
  },
  plugins: [],
};
