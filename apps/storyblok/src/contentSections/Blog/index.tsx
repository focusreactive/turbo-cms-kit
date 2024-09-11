import { BlogSection as BlogSectionUI } from "@shared/ui";

import { prepareImageProps } from "@/lib/adapters/prepareImageProps";
import { prepareLinkProps } from "@/lib/adapters/prepareLinkProps";
import { prepareRichTextProps } from "@/lib/adapters/prepareRichTextProps";
import SectionContainer from "@/components/SectionContainer";

import type { IBlogProps } from "./types";

export default function Blog({ blok }: IBlogProps) {
  const { text, posts, style } = blok;

  const formattedPosts = posts.map((post) => ({
    style,
    text: prepareRichTextProps(post.text[0]),
    image: prepareImageProps(post.image[0]),
    link: prepareLinkProps(post.link[0]),
  }));

  return (
    <SectionContainer blok={blok}>
      <BlogSectionUI
        text={prepareRichTextProps(text[0])}
        posts={formattedPosts}
        style={style}
      />
    </SectionContainer>
  );
}
