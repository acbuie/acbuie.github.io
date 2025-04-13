/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      typography: () => ({
        main: {
          css: {
            "--tw-prose-body": "var(--foreground)",
            "--tw-prose-headings": "var(--foreground)",
            "--tw-prose-lead": "var(--cyan)",

            "--tw-prose-links": "var(--blue)",
            "--tw-prose-bold": "var(--foreground)",

            "--tw-prose-counters": "var(--purple)",
            "--tw-prose-bullets": "var(--secondary)",

            "--tw-prose-hr": "var(--primary)",

            "--tw-prose-quotes": "var(--muted-foreground)",
            "--tw-prose-quote-borders": "var(--muted)",
            "--tw-prose-captions": "var(--foreground)",

            // "--tw-prose-kbd": colors.gray[900],
            // "--tw-prose-kbd-shadows": hexToRgb(colors.gray[900]),

            //TODO: Switch to Shiki or Prism eventually
            "--tw-prose-code": "var(--red)",
            "--tw-prose-pre-code": "var(--light0)",
            "--tw-prose-pre-bg": "var(--dark1)",

            "--tw-prose-th-borders": "var(--secondary)",
            "--tw-prose-td-borders": "var(--accent)",
          },
        },
      }),
    },
  },
};
