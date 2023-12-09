/**  @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx,html}",
    "./components/**/*.{js,jsx,ts,tsx,html}",
    "./app/**/*.{js,jsx,ts,tsx,html}",
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        pop: ["Poppins", "sans-serif"],
        menlo: ["Menlo", "sans-serif"],
        monaco: ["Monaco", "sans-serif"],
      },
      colors: {
        txt: "#FFFFFF",
        background: "#000814",
        primary: "#507daa",
        secondary: "#075985",
        accent: "#ffd60a",
      },
    },
  },
};
