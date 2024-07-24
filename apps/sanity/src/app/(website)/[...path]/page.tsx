// import { draftMode } from "next/headers";

import { loadPage } from "@/lib/api";
import { generateStaticPaths } from "@/lib/api/generateStaticSlugs";
import Page from "@/components/Page";

// const isDraftMode = draftMode().isEnabled;

// export const dynamic = isDraftMode ? "force-dynbamic" : "force-static";

export async function generateStaticParams() {
  const pages = await generateStaticPaths(["page"]);

  const paths = pages.filter((p) => p !== "/");

  return paths;
}

export default async function DynamicRoute({
  params,
}: {
  params: { path: string[] };
}) {
  const pathname = `/${params.path.join("/")}`;
  const data = await loadPage(pathname);

  return <Page data={data} />;
}
