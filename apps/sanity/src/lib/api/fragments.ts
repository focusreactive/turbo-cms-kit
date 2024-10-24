export const LINK_FRAGMENT = `
...,
type == "internal" => {
  url->{
    _type == "page" => {
      "slug": [pathname.current],
    },
  },
}
`;
