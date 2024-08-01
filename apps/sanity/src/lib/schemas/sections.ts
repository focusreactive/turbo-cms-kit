// start of section imports
import blog from "@/contentSections/Blog/schema";
import cardsGrid from "@/contentSections/CardsGrid/schema";
import copy from "@/contentSections/Copy/schema";
import copy5050 from "@/contentSections/Copy5050/schema";
import cta from "@/contentSections/Cta/schema";
import footer from "@/contentSections/Footer/schema";
import header from "@/contentSections/Header/schema";
import hero from "@/contentSections/Hero/schema";
import linksList from "@/contentSections/LinksList/schema";
import logos from "@/contentSections/Logos/schema";
// end of section imports

const sections = [
  // start of section array
  hero,
  cta,
  copy5050,
  copy,
  logos,
  cardsGrid,
  header,
  footer,
  linksList,
  blog,
// end of section array
];

export default sections;
