import { LINK_FRAGMENT } from "@/lib/api/fragments";

export const CARDS_GRID_FRAGMENT = `
  ...,
  items[] {
    ...,
    link {
      ${LINK_FRAGMENT}
    }
  }
`;
