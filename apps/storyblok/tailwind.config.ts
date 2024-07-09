import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
  output: {},
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
