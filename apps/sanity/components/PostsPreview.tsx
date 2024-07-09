// ./components/PostPreview.tsx

"use client";

import { POSTS_QUERY } from "@/sanity/lib/queries";
import { type QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { type SanityDocument } from "next-sanity";

import Posts from "@/components/Posts";

export default function PostsPreview({
  initial,
}: {
  initial: QueryResponseInitial<SanityDocument[]>;
}) {
  const { data } = useQuery<SanityDocument[] | null>(
    POSTS_QUERY,
    {},
    { initial }
  );

  return data ? (
    <Posts posts={data} />
  ) : (
    <div className="bg-red-100">No posts found</div>
  );
}