import { groq } from "next-sanity";

import { HEADER_FRAGMENT } from "@/components/Header/query";

const fragmentsBySectionType = {
  "section.header": HEADER_FRAGMENT,
};
const allSectionFragments = Object.entries(fragmentsBySectionType)
  .map(
    ([sectionType, fragment]) => `_type == "${sectionType}" => { ${fragment} }`,
  )
  .join("\n");

export const PAGE_BY_SLUG_QUERY = groq`
  *[_type == "page" && pathname.current == $slug][0] {
    _id,
    sectionsBody[] {
      ...,
      ${allSectionFragments}
    },
    title,
    "slug": pathname.current,

    seoTitle,
    seoDescription,
    ogImage,
    robots,
  }
`;
