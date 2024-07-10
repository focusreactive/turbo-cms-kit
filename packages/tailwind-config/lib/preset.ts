import typographyPlugin from "@tailwindcss/typography"
import type { Config } from "tailwindcss"
// @ts-ignore
import animatePlugin from "tailwindcss-animate"

import { customPlugin } from "./plugin"

export const preset = {
  content: [],
  darkMode: ["class"],
  plugins: [animatePlugin, typographyPlugin, customPlugin],
} satisfies Config
