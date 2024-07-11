// ./components/PostPreview.tsx

"use client";

import { POST_QUERY } from "@/sanity/lib/queries";
import { type QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { type QueryParams, type SanityDocument } from "next-sanity";

import Post from "@/components/Post";

export default function PostPreview({
  initial,
  params
}: {
  initial: QueryResponseInitial<SanityDocument>;
  params: QueryParams
}) {
  const { data } = useQuery<SanityDocument | null>(
    POST_QUERY,
    params,
    { initial }
  );

  return data ? (
    <Post post={data} />
  ) : (
    <div className="bg-red-100">Post not found</div>
  );
}