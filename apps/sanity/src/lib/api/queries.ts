import { groq } from "next-sanity";

export const PAGE_BY_SLUG_QUERY = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    sectionsBody,
    title,
    "slug": slug.current,
  }
`;
