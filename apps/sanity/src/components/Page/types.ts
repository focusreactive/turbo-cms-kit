import type { Page } from "@/generated/extracted-schema-types";
import type { QueryResponseInitial } from "@sanity/react-loader";

export interface IPageProps {
  data: Page | null;
}

export interface IPagePreviewProps {
  params: {
    slug: string | undefined;
  };
  initial: QueryResponseInitial<Page | null>;
}
