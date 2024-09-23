import type { SectionBlog } from "@/generated/extracted-schema-types";

export interface IBlogSectionProps {
  data: SectionBlog & {
    _key: string;
  };
}
