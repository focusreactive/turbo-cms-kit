import type { Config } from "tailwindcss";
import sharedConfig from "@shared/tailwind-config";
import { preset } from "@shared/tailwind-config/lib/preset";

const config = {
  ...sharedConfig,
  presets: [preset],
} satisfies Config;

export default config;
