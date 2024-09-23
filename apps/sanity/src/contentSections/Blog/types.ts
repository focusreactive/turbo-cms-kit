import type { SectionBlog } from "@/generated/extracted-types";

export interface IBlogSectionProps {
  data: SectionBlog & {
    _key: string;
  };
}
