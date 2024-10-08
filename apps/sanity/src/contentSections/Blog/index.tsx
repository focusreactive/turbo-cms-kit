import EmptyBlock from "@shared/ui/components/EmptyBlock";
import type { BlogStyle } from "@shared/ui/components/sections/blog/types";

import { BlogSection as BlogSectionUI } from "@shared/ui";

import { prepareImageProps } from "@/lib/adapters/prepareImageProps";
import { prepareLinkProps } from "@/lib/adapters/prepareLinkProps";
import { prepareRichTextProps } from "@/lib/adapters/prepareRichTextProps";
import SectionContainer from "@/components/SectionContainer";

import type { IBlogSectionProps } from "./types";

export default function BlogSection({ data }: IBlogSectionProps) {
  if (!data) return null;

  const { text, posts, style } = data;

  if ((!posts || posts.length === 0) && !text)
    return <EmptyBlock name="Blog" />;

  const formattedPosts = posts?.map((post) => ({
    style: style as BlogStyle,
    text: prepareRichTextProps(post.text),
    image: prepareImageProps(post.image),
    link: prepareLinkProps(post.link),
  }));

  return (
    <SectionContainer sectionData={data}>
      <BlogSectionUI
        text={prepareRichTextProps(text)}
        posts={formattedPosts || []}
        style={style as BlogStyle}
      />
    </SectionContainer>
  );
}
