module.exports = {
  content: ["./index.html", "./src/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blackbackground: "#000",
        gradred: "#d65bca",
        gradredark: "#21d190",
        gradpink: "#ee0979",
        gradorange: "#ff6a00",
        titlegrad1: "#FF512F",
        titlegrad2: "#DD2476",
        viewcodebg1: "#EDE574",
        viewcodebg2: "#E1F5C4",
      },
      fontFamily: {
        Fredoka: "Fredoka",
        Kanit: "Kanit",
      },

      lineHeight: {
        "extra-loose": "1.2",
      },
    },
  },
  plugins: [],
};
