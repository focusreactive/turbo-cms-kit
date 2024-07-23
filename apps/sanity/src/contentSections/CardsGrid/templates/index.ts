import { createTemplate } from "@/lib/templateSelectorInput/createTemplate";

import oneColumns from "./one-column.json";
import threeColumns from "./three-columns.json";

export const cardsGridsTemplates = [
  createTemplate({
    json: oneColumns,
    title: "One column cards grid",
    description: "one columns grid ",
    category: "grid",
  }),
  createTemplate({
    json: threeColumns,
    title: "Three columns cards grid",
    description: "desc2",
    category: "grid",
  }),
];
