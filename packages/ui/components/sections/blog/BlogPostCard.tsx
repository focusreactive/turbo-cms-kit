import { Image } from "../../ui/image";
import { RichText } from "../../ui/richText";
import { BlogStyle, type IBlogPostCardProps } from "./types";

export default function BlogPostCard({
  style,
  image,
  // link,
  text,
}: IBlogPostCardProps) {
  return (
    <article className="flex max-w-xl flex-col items-start justify-between">
      {style === BlogStyle.ThreeColumnWithImages ? (
        <div className="h-48 w-full rounded-md bg-cover bg-center pb-5">
          <Image {...image} />
        </div>
      ) : null}
      <div className="flex items-center gap-x-4 text-xs">
        {/* {post.tags.map((tag) => {
          return (
            <SmartLink
              key={getCmsKey(tag)}
              className={
                "relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
              }
            />
          );
        })} */}
      </div>
      {/*<SmartLink {...post.link}>*/}
      <div className="group relative">
        <RichText {...text} />
      </div>
      {/*</SmartLink>*/}

      <div className="relative mt-8 flex items-center gap-x-4">
        <div className="size-10 overflow-hidden rounded-full">
          <Image {...image} />
        </div>
        <div className="text-sm leading-6">
          <p className="text-textColor font-semibold">
            <a href="#">
              <span className="absolute inset-0"></span>
              {"author.name author.name"}
            </a>
          </p>
        </div>
      </div>
    </article>
  );
}
