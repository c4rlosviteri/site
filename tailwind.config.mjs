/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        nd: {
          black: "#000000",
          surface: "#111111",
          "surface-raised": "#1a1a1a",
          border: "#222222",
          "border-visible": "#333333",
          "text-disabled": "#7a7a7a",
          "text-secondary": "#999999",
          "text-primary": "#e8e8e8",
          "text-display": "#ffffff",
          accent: "#ff3b30",
          "accent-subtle": "rgba(255,59,48,0.15)",
          success: "#4a9e5c",
          warning: "#d4a843",
          interactive: "#5b9bf6",
        },
      },
      fontFamily: {
        display: ['"Doto"', '"Space Mono"', "monospace"],
        body: ['"Space Grotesk"', '"DM Sans"', "system-ui", "sans-serif"],
        mono: [
          '"Space Mono"',
          '"JetBrains Mono"',
          '"SF Mono"',
          "monospace",
        ],
      },
      fontSize: {
        "display-xl": ["72px", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "display-lg": ["48px", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-md": ["36px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        heading: ["24px", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        subheading: ["18px", { lineHeight: "1.3" }],
        label: [
          "11px",
          { lineHeight: "1.2", letterSpacing: "0.08em" },
        ],
      },
      spacing: {
        "2xs": "2px",
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "48px",
        "3xl": "64px",
        "4xl": "96px",
      },
      maxWidth: {
        content: "76rem",
      },
      animation: {
        "reveal-fade-up": "reveal-fade-up 0.3s cubic-bezier(0.25,0.1,0.25,1) both",
        "reveal-fade-in": "reveal-fade-in 0.3s cubic-bezier(0.25,0.1,0.25,1) both",
      },
    },
  },
  plugins: [],
};