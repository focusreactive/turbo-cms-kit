import { loadPage } from "@/lib/api";
import Page from "@/components/Page";

export default async function DynamicRoute({
  params,
}: {
  params: { path: string[] };
}) {
  const pathname = `/${params.path.join("/")}`;
  const data = await loadPage(pathname);

  return <Page data={data} />;
}
