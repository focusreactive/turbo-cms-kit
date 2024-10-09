import type { Header } from "@/generated/extracted-types";

export interface IHeaderProps {
  data: Header & {
    _key: string;
  };
}
