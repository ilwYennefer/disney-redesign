module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionDuration: {
        250: "250ms",
      },
      transitionTimingFunction: {
        "link-transition": "cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s",
      },
      transformOrigin: {
        "left-center": "left center",
      },
      minHeight: {
        home: "calc(100vh - 70px)",
      },
      padding: {
        home: "calc(3.5vw + 5px)",
      },
      backgroundImage: (theme) => ({
        home: "url('https://rb.gy/aeg0ze')",
      }),
      zIndex: {
        "-1": "-1",
      },
      boxShadow: {
        image:
          "rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px",
        "image-hover":
          "rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
