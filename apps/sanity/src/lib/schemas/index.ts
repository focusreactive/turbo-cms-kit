// prettier-ignore
import page from './page';
// prettier-ignore
import { sections } from './contentSections';

import { defaultCard } from "./contentSections/cardsGrid";
import { logoItem } from "./contentSections/logos";
import customImage from "./customImage";
import customLink from "./customLink";
import customRichText from "./customRichText";

const schemas = [
  page,
  customImage,
  customLink,
  customRichText,
  logoItem,
  defaultCard,
  ...sections,
];

export default schemas;
