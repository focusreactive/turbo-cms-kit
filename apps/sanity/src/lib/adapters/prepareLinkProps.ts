import type { CustomLink } from "@/generated/extracted-schema-types";
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
    href = ""; // todo: get slug by reference
  }

  return {
    text: props.text,
    href: href,
    variant: props.variant as LinkVariant,
  };
};
