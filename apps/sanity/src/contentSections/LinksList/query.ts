import { LINK_FRAGMENT } from "@/lib/api/fragments";

export const LINKS_LIST_FRAGMENT = `
  ...,
  links[] {
    ${LINK_FRAGMENT}
  }
`;
