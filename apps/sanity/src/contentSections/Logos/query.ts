import { LINK_FRAGMENT } from "@/lib/api/fragments";

export const LOGOS_FRAGMENT = `
  ...,
  items[] {
    ...,
    link {
      ${LINK_FRAGMENT}
    }
  }
`;
