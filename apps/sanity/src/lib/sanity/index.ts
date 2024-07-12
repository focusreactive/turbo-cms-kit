import type { IPageContainer } from "@/components/Page/types";

import { loadQuery } from "./loadQuery";
import { PAGE_QUERY, PAGES_QUERY } from "./queries";

export async function loadPage(pathname: string) {
  return loadQuery<IPageContainer | null>({
    query: PAGE_QUERY,
    params: { pathname },
  });
}

export async function loadPages() {
  return loadQuery<IPageContainer[]>({
    query: PAGES_QUERY,
  });
}
