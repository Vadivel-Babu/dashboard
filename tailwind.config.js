/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#BEFB7A",
        violet: "#9B76D6",
        white: "#fff",
      },
    },
    backgroundImage: {
      gradient:
        "linear-gradient(90deg,rgba(190, 251, 122, 0) 42.53%,#befb7a 230.08% )",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
