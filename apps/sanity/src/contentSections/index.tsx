// start of section imports
import Blog from "./Blog";
import CardsGrid from "./CardsGrid";
import Copy from "./Copy";
import Footer from "./Footer";
import Header from "./Header";
import LinksList from "./LinksList";
import Logos from "./Logos";

// end of section imports

export const sections: Record<string, any> = {
  // start of section object
  "section.header": Header,
  "section.footer": Footer,
  "section.copy": Copy,
  "section.logos": Logos,
  "section.linksList": LinksList,
  "section.cardsGrid": CardsGrid,
  "section.blog": Blog,
  // end of section object
};

export function SectionRenderer(props: { section: any }) {
  const Section = sections[props.section._type];

  if (!Section) {
    return null;
  }

  return <Section data={props.section} />;
}
