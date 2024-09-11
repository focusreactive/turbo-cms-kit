import dynamic from "next/dynamic";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import { generateStaticSlugs } from "@/lib/loader/generateStaticSlugs";
import { loadPage } from "@/lib/loader/loadQuery";
import Page from "@/components/page/Page";

const PagePreview = dynamic(() => import("@/components/page/PagePreview"));

type Props = {
  params: { slug: string[] | undefined };
};

// TODO: add metadata
// export async function generateMetadata(
//   { params }: Props,
//   parent: ResolvingMetadata,
// ): Promise<Metadata> {
//   const { data: page } = await loadPage(params.slug)
//
//   return {
//     title: page?.title,
//     description: page?.overview
//       ? toPlainText(page.overview)
//       : (await parent).description,
//   }
// }

export function generateStaticParams() {
  return generateStaticSlugs("page");
}

export default async function PageSlugRoute({ params }: Props) {
  // TODO: research why this happens
  if (params.slug?.[0] === "_next") return null;

  const slug = params.slug?.join("/") ?? "/";
  const initial = await loadPage(slug);

  if (draftMode().isEnabled) {
    return <PagePreview slug={slug} initial={initial} />;
  }

  if (!initial.data) {
    notFound();
  }

  return <Page data={initial.data} />;
}
