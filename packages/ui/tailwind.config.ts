import type { Config } from "tailwindcss";

import sharedConfig from "../tailwind-config";
import { preset } from "../tailwind-config/lib/preset";

const config: Config = {
  ...sharedConfig,
  presets: [preset],
};

export default config;
