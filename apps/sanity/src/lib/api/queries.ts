import { BLOG_FRAGMENT } from "@/contentSections/Blog/query";
import { CARDS_GRID_FRAGMENT } from "@/contentSections/CardsGrid/query";
import { HERO_FRAGMENT } from "@/contentSections/Hero/query";
import { LINKS_LIST_FRAGMENT } from "@/contentSections/LinksList/query";
import { LOGOS_FRAGMENT } from "@/contentSections/Logos/query";
import { groq } from "next-sanity";

import { FOOTER_FRAGMENT } from "@/components/Footer/query";
import { HEADER_FRAGMENT } from "@/components/Header/query";

const fragmentsBySectionType = {
  "section.hero": HERO_FRAGMENT,
  "section.linksList": LINKS_LIST_FRAGMENT,
  "section.cardsGrid": CARDS_GRID_FRAGMENT,
  "section.logos": LOGOS_FRAGMENT,
  "section.blog": BLOG_FRAGMENT,
};

const allSectionFragments = Object.entries(fragmentsBySectionType)
  .map(
    ([sectionType, fragment]) => `_type == "${sectionType}" => { ${fragment} }`,
  )
  .join(",\n");

export const PAGE_BY_SLUG_QUERY = groq`
  *[_type == "page" && pathname.current == $slug][0] {
    _id,
    header->{
      ${HEADER_FRAGMENT}
    },
    sectionsBody[] {
      ...,
      ${allSectionFragments}
    },
    footer->{
      ${FOOTER_FRAGMENT}
    },
    title,
    "slug": pathname.current,

    seoTitle,
    seoDescription,
    ogImage,
    robots,
  }
`;
