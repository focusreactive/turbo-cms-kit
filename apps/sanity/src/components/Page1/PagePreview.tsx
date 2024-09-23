"use client";

import { usePage } from "@/lib/loader/useQuery";

import Page from ".";
import type { IPagePreviewProps } from "./types";

export default function PagePreview({ params, initial }: IPagePreviewProps) {
  const { data } = usePage({
    params,
    initial,
  });

  return <Page data={data} />;
}
