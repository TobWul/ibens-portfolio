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
    extend: {
      fontFamily: { sans: ["var(--sans-serif)", "sans-serif"] },
    },
  },
  plugins: [],
};
