import type { ILink } from "@/lib/adapters/prepareLinkProps";

interface IHeader {
  _key: string;
  links: ILink[];
  theme?: "light" | "dark";
}

export interface IHeaderProps {
  data: IHeader;
}
