// TODO: move link part somewhere near link schema
export const FOOTER_FRAGMENT = `
  ...,
  links[] {
    ...,
    type == "internal" => {
      url->{
        _type == "page" => {
          "slug": array::compact([pathname.current]),
        },
      },
    },
  }
`;
