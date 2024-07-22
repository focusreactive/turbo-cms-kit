import React from "react";

import { BlogSection as BlogSectionUI } from "@shared/ui";

import { prepareImageProps } from "@/lib/adapters/prepareImageProps";
import { prepareLinkProps } from "@/lib/adapters/prepareLinkProps";
import { prepareRichTextProps } from "@/lib/adapters/prepareRichTextProps";
import SectionContainer from "@/components/SectionContainer";

import type { IBlogSectionProps } from "./types";

export default function BlogSection({ data }: IBlogSectionProps) {
  if (!data) return null;

  const { text, posts, style, _key, theme = "light" } = data;

  const formattedPosts = posts?.map((post) => {
    return {
      text: prepareRichTextProps(post.text),
      image: prepareImageProps(post.image),
      link: prepareLinkProps(post.link),
    };
  });

  return (
    <SectionContainer id={_key} theme={theme}>
      <BlogSectionUI
        text={prepareRichTextProps(text)}
        posts={formattedPosts as any[]}
        style={style}
      />
    </SectionContainer>
  );
}
