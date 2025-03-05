/** @type {import("prettier").Config} */

const config = {
  plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-astro"],
  proseWrap: "always",
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};

export default config;
