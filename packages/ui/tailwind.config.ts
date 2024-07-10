import type { Config } from "tailwindcss"

import sharedConfig from "../tailwind-config"
import { preset } from "../tailwind-config/lib/preset"

const config = {
  ...sharedConfig,
  content: ["./*.{ts,tsx}"],
  presets: [preset],
} satisfies Config

export default config
