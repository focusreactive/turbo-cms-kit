import sharedConfig from "@shared/tailwind-config";
import { preset } from "@shared/tailwind-config/lib/preset";
import type { Config } from "tailwindcss";

const config = {
  ...sharedConfig,
  presets: [preset],
} satisfies Config;

export default config;
