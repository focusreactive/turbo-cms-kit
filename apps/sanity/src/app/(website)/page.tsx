// import { draftMode } from "next/headers";

import { loadPage } from "@/lib/api";
import Page from "@/components/Page";

// const isDraftMode = draftMode().isEnabled;

// export const dynamic = isDraftMode ? "force-dynbamic" : "force-static";

export default async function IndexRoute() {
  const data = await loadPage("/");

  return <Page data={data} />;
}
