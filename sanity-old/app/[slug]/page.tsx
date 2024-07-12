// ./app/[slug]/page.tsx

import { draftMode } from "next/headers"
import { client } from "@/sanity/lib/client"
import { POST_QUERY, POSTS_QUERY } from "@/sanity/lib/queries"
import { loadQuery } from "@/sanity/lib/store"
import { type QueryParams, type SanityDocument } from "next-sanity"

import Post from "@/components/Post"
import PostPreview from "@/components/PostPreview"

export async function generateStaticParams() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY)

  return posts.map((post) => ({
    slug: post.slug.current,
  }))
}

export default async function Page({ params }: { params: QueryParams }) {
  const initial = await loadQuery<SanityDocument>(POST_QUERY, params, {
    // Because of Next.js, RSC and Dynamic Routes this currently
    // cannot be set on the loadQuery function at the "top level"
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
  })

  return draftMode().isEnabled ? (
    <PostPreview initial={initial} params={params} />
  ) : (
    <Post post={initial.data} />
  )
}
