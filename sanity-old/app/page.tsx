// ./app/page.tsx

import { draftMode } from "next/headers"
import { POSTS_QUERY } from "@/sanity/lib/queries"
import { loadQuery } from "@/sanity/lib/store"
import { type SanityDocument } from "next-sanity"

import Posts from "@/components/Posts"
import PostsPreview from "@/components/PostsPreview"

export default async function Page() {
  const initial = await loadQuery<SanityDocument[]>(
    POSTS_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    },
  )

  return draftMode().isEnabled ? (
    <PostsPreview initial={initial} />
  ) : (
    <Posts posts={initial.data} />
  )
}
