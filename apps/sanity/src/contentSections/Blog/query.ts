import { LINK_FRAGMENT } from "@/lib/api/fragments";

export const BLOG_FRAGMENT = `
  ...,
  posts[] {
    ...,
    link {
      ${LINK_FRAGMENT}
    }
  }
`;
