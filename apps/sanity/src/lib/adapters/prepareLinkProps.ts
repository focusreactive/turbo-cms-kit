import type { CustomLink } from "@/generated/extracted-types";
import {
  LinkVariant,
  type LinkProps,
} from "@shared/ui/components/ui/link/types";

export const prepareLinkProps = (props?: CustomLink): LinkProps => {
  if (!props || !props.text)
    return { text: "", href: "", variant: LinkVariant.Default };

  let href = "";
  if (props.type === "url") {
    href = props.href as string;
  }

  if (props.type === "internal") {
    // todo: remove @ts-ignore when sanity typegen will be working with MemberExpression
    // @ts-ignore
    href = props?.url?.slug ? props.url.slug?.join("/") : "";
  }

  return {
    text: props.text,
    href: href,
    variant: props.variant as LinkVariant,
  };
};
