import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        kitchen: { bg: '#f5f0e8', card: '#ffffff', panel: '#faf5ef', border: '#e5ddd0', header: '#2c2417', text: '#3d3427', muted: '#9a8e7f' },
        order: { new: '#dc2626', cooking: '#ea580c', ready: '#16a34a', served: '#2563eb', cancelled: '#6b7280' },
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'], mono: ['JetBrains Mono', 'monospace'] },
    },
  },
  plugins: [],
};
export default config;
