import Blog from "@/contentSections/Blog";
import CardsGrid from "@/contentSections/CardsGrid";
import SimpleCarousel from "@/contentSections/carousels/SimpleCarousel";
import WideSimpleCarousel from "@/contentSections/carousels/WideSimpleCarousel";
import Copy from "@/contentSections/Copy";
import Footer from "@/contentSections/Footer";
import Hero from "@/contentSections/Hero";
import LinksList from "@/contentSections/LinksList";
import Logos from "@/contentSections/Logos";

import Header from "@/components/Header";
import PageContainer from "@/components/Page";

export const COMPONENTS = {
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
};
