import type { Footer, Header, Page } from "@/generated/extracted-types";
import type { QueryResponseInitial } from "@sanity/react-loader";

export interface IPageWithReference extends Omit<Page, "header" | "footer"> {
  header: Header & { _key: string };
  footer: Footer & { _key: string };
}

export interface IPageProps {
  data: IPageWithReference | null;
}

export interface IPagePreviewProps {
  params: {
    slug: string | undefined;
  };
  initial: QueryResponseInitial<IPageWithReference | null>;
}
