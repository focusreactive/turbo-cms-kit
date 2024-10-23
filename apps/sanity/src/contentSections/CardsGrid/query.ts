import { LINK_FRAGMENT } from "@/lib/api/fragments";

export const CARDS_GRID_FRAGMENT = `
  ...,
  links[] {
    ...,
    link {
      ${LINK_FRAGMENT}
    }
  }
`;
