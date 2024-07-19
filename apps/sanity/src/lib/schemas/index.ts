// prettier-ignore
import page from './page';
// prettier-ignore
import { sections } from './contentSections';

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
  ...sections,
];

export default schemas;
