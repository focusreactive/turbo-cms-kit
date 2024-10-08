// start of section imports
import blog from "@/contentSections/Blog/schema";
import cardsGrid from "@/contentSections/CardsGrid/schema";
import simpleCarousel from "@/contentSections/carousels/SimpleCarousel/schema";
import wideSimpleCarousel from "@/contentSections/carousels/WideSimpleCarousel/schema";
import copy from "@/contentSections/Copy/schema";
import footer from "@/contentSections/Footer/schema";
import header from "@/contentSections/Header/schema";
import hero from "@/contentSections/Hero/schema";
import linksList from "@/contentSections/LinksList/schema";
import logos from "@/contentSections/Logos/schema";

// end of section imports

const sections = [
  // start of section array
  header,
  footer,
  copy,
  logos,
  linksList,
  cardsGrid,
  blog,
  simpleCarousel,
  wideSimpleCarousel,
  hero,
  // end of section array
];

export default sections;
