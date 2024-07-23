import { createTemplate } from "@/lib/templateSelectorInput/createTemplate";

import withImage from "./with-images.json";
import withoutImage from "./without-images.json";

export const blogTemplates = [
  createTemplate({
    json: withImage,
    title: "Blog section with images",
    description: "desc1",
    category: "blog",
  }),
  createTemplate({
    json: withoutImage,
    title: "Blog section without images",
    description: "desc2",
    category: "blog",
  }),
];
