import { createTemplate } from "@/lib/templateSelectorInput/createTemplate";

import header from "./header.json";

export const headerTemplates = [
  createTemplate({
    json: header,
    title: "Header with links",
    description: "dakwefwef",
    category: "header",
  }),
];
