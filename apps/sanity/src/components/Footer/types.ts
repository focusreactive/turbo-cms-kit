import type { Footer } from "@/generated/extracted-types";

export interface IFooterProps {
  data: Footer & {
    _key: string;
  };
}
