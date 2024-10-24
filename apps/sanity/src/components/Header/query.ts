import { LINK_FRAGMENT } from "@/lib/api/fragments";

export const HEADER_FRAGMENT = `
  ...,
  links[] {
    ${LINK_FRAGMENT}
  }
`;
