import type { Config } from "tailwindcss"

import sharedConfig from "../tailwind-config"
import { preset } from "../tailwind-config/lib/preset"

const config = {
  ...sharedConfig,
  presets: [preset],
} satisfies Config

export default config
