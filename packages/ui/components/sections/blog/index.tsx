import { RichText } from "../../ui/richText";
import BlogPostCard from "./BlogPostCard";
import { BlogStyle, type IBlogSectionProps } from "./types";

// todo: rework section

export const templates: any = {
  [BlogStyle.ThreeColumn]: { header: "mx-auto max-w-2xl lg:mx-0" },
  [BlogStyle.ThreeColumnWithImages]: { header: "w-full text-center" },
  [BlogStyle.ThreeColumnWithBackgroundImages]: { header: "w-full text-center" },
};

export function BlogSection({ text, style, posts }: IBlogSectionProps) {
  return (
    <div className="bg-bgColor py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`${templates[style]?.header}`}>
          <RichText {...text} />
        </div>

        <div className="border-textSecondaryColor mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post, i) => (
            <BlogPostCard {...post} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
