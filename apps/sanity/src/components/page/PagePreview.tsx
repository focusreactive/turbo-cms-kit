"use client";

import { type QueryResponseInitial } from "@sanity/react-loader";

import { usePage } from "@/lib/loader/useQuery";
import { type PagePayload } from "@/lib/types";

import Page from "./Page";

type Props = {
  slug: string | undefined;
  initial: QueryResponseInitial<PagePayload | null>;
};

export default function PagePreview(props: Props) {
  const { slug, initial } = props;
  const { data } = usePage({
    params: { slug },
    initial,
  });

  return <Page data={data} />;
}
