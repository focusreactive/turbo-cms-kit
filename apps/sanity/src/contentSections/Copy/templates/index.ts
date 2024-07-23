import { createTemplate } from "@/lib/templateSelectorInput/createTemplate";

import centeredDark from "./centered-dark.json";
import withCardsGrid from "./with-cards-grid.json";

export const copyTemplates = [
  createTemplate({
    json: centeredDark,
    title: "Dark copy with buttons",
    description: "daek",
    category: "copy",
  }),
  createTemplate({
    json: withCardsGrid,
    title: "Copy with cards grid",
    description: "desc22323",
    category: "copy",
  }),
];
