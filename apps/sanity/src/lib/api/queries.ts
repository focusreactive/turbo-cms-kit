import { groq } from "next-sanity";

export const PAGE_BY_SLUG_QUERY = groq`
  *[_type == "page" && pathname.current == $slug][0] {
    _id,
    sectionsBody,
    title,
    "slug": pathname.current,

    seoTitle,
    seoDescription,
    ogImage,
    robots,
  }
`;
