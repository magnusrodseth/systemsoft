module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      minHeight: (theme) => ({
        container: "calc(100vh - 84px)",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
