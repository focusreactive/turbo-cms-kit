// ./sanity/lib/store.ts

import { client } from "@/sanity/lib/client"
import { token } from "@/sanity/lib/token"
import * as queryStore from "@sanity/react-loader"

queryStore.setServerClient(client.withConfig({ token }))

export const { loadQuery } = queryStore
