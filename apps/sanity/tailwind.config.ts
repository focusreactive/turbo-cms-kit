import { preset } from "@shared/tailwind-config/lib/preset"
import type { Config } from "tailwindcss"

const config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "../../packages/ui/components/**/*.{ts,tsx}",
  ],
  presets: [preset],
  plugins: [require("@tailwindcss/typography")], // should be in ui package
} satisfies Config

export default config
