/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: "#F24194",
        secundary: "#F2D43D",
        neutral: "#f8f8f8",
        base: "#202024",
        info: "#60a5fa",
        success: "#00DE5E",
        warning: "#fbbf24",
        error: "#dc2626"
      }
    }
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar-hide")]
};
