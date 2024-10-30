// start of section imports
import blog from "@/contentSections/Blog/schema";
import cardsGrid from "@/contentSections/CardsGrid/schema";
import simpleCarousel from "@/contentSections/carousels/SimpleCarousel/schema";
import wideSimpleCarousel from "@/contentSections/carousels/WideSimpleCarousel/schema";
import copy from "@/contentSections/Copy/schema";
import hero from "@/contentSections/Hero/schema";
import linksList from "@/contentSections/LinksList/schema";
import logos from "@/contentSections/Logos/schema";
import pricing from "@/contentSections/Pricing/schema";
import stepGuideSchema from "@/contentSections/StepGuide/schema";

// end of section imports

const sections = [
  // start of section array
  copy,
  logos,
  linksList,
  cardsGrid,
  blog,
  simpleCarousel,
  wideSimpleCarousel,
  hero,
  pricing,
  stepGuideSchema,
  // end of section array
];

export default sections;
