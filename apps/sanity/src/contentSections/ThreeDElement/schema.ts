import {
  CommonGroup,
  commonGroups,
  sectionMarginFields,
} from "@/contentSections/commonFields";
import { defineField } from "sanity";

export default {
  name: "section.threeDElement",
  title: "3D Element",
  type: "object",
  groups: commonGroups,
  fields: [
    defineField({
      name: "title",
      type: "string",
      group: CommonGroup.Content,
    }),
    ...sectionMarginFields,
  ],
};
