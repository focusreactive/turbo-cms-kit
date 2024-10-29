// start of sb components imports
import Blog from "@/contentSections/Blog";
import CardsGrid from "@/contentSections/CardsGrid";
import SimpleCarousel from "@/contentSections/carousels/SimpleCarousel";
import WideSimpleCarousel from "@/contentSections/carousels/WideSimpleCarousel";
import Copy from "@/contentSections/Copy";
import Hero from "@/contentSections/Hero";
import LinksList from "@/contentSections/LinksList";
import Logos from "@/contentSections/Logos";

// end of sb components imports

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageContainer from "@/components/Page";

export const COMPONENTS = {
  // start of sb components mapping
  page: PageContainer,
  copy: Copy,
  header: Header,
  footer: Footer,
  logos: Logos,
  linksList: LinksList,
  cardsGrid: CardsGrid,
  blog: Blog,
  simpleCarousel: SimpleCarousel,
  wideSimpleCarousel: WideSimpleCarousel,
  hero: Hero,
  // end of sb components mapping
};
