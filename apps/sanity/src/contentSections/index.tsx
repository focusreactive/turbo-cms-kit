// start of section imports
import CardsGrid from "./CardsGrid";
import Copy from "./Copy";
import Copy5050 from "./Copy5050";
import Cta from "./Cta";
import Hero from "./Hero";
import Logos from "./Logos";

// end of section imports

export const sections: Record<string, any> = {
  // start of section object
  "section.hero": Hero,
  "section.cta": Cta,
  "section.copy": Copy,
  "section.copy5050": Copy5050,
  "section.logos": Logos,
  "section.cardsGrid": CardsGrid,
  // end of section object
};

export function SectionRenderer(props: { section: any }) {
  const Section = sections[props.section._type];

  if (!Section) {
    return null;
  }

  return <Section data={props.section} />;
}
