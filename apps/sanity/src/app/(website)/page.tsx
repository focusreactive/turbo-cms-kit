import { loadPage } from "@/lib/sanity";
import Page from "@/components/Page";

export default async function IndexRoute() {
  const data = await loadPage("/");

  // console.log('home page data');
  // console.log(data);

  return <Page data={data} />;
}
