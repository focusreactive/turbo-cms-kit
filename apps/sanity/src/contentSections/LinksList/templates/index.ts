import { createTemplate } from "@/lib/templateSelectorInput/createTemplate";

import badge from "./badge.json";
import primarySecondary from "./primary-secondary.json";

export const linksListTemplates = [
  createTemplate({
    json: badge,
    title: "Badge link style",
    description: "wdwefewfwefwef",
    category: "linksList",
  }),
  createTemplate({
    json: primarySecondary,
    title: "Primary and secondary links list",
    description: "wdwefewf121212wefwef",
    category: "linksList",
  }),
];
