/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      typography: () => ({
        main: {
          css: {
            "--tw-prose-body": "var(--color-primary)",
            "--tw-prose-headings": "var(--color-primary)",
            "--tw-prose-lead": "var(--color-primary)",
            "--tw-prose-links": "var(--color-primary)",
            "--tw-prose-bold": "var(--color-primary)",
            "--tw-prose-counters": "var(--color-gruv-purple)",
            "--tw-prose-bullets": "var(--color-gruv-purple)",
            "--tw-prose-hr": "var(--color-gruv-purple)",
            "--tw-prose-quotes": "var(--color-accent)",
            "--tw-prose-quote-borders": "var(--color-gruv-purple)",
            "--tw-prose-captions": "var(--color-accent)",
            "--tw-prose-kbd": "var(--color-secondary)",
            "--tw-prose-code": "var(--color-secondary)", // In text
            "--tw-prose-pre-code": "var(--color-accent)", // In block
            "--tw-prose-pre-bg": "var(--color-bg-accent)", // Block bg
            "--tw-prose-th-borders": "var(--color-red)",
            "--tw-prose-td-borders": "var(--color-blue)",
          },
        },
      }),
    },
  },
};
