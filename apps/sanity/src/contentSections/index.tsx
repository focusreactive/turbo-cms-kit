import Copy from "./Copy";
import Copy5050 from "./Copy5050";
import Cta from "./Cta";
import Hero from "./Hero";

export const sections: Record<string, any> = {
  "section.hero": Hero,
  "section.cta": Cta,
  "section.copy": Copy,
  "section.copy5050": Copy5050,
};

export function SectionRenderer(props: { section: any }) {
  const Section = sections[props.section._type];

  if (!Section) {
    return null;
  }

  return <Section data={props.section} />;
}
