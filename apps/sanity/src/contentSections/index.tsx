// start of section imports
import Hero from './Hero'
import Cta from './Cta'
import Copy from './Copy'
import Copy5050 from './Copy5050'
// end of section imports

export const sections: Record<string, any> = {
  // start of section object
  'section.hero': Hero,
  'section.cta': Cta,
  'section.copy': Copy,
  'section.copy5050': Copy5050,
  // end of section object
}

export function SectionRenderer(props: { section: any }) {
  const Section = sections[props.section._type];

  if (!Section) {
    return null;
  }

  return <Section data={props.section} />;
}
