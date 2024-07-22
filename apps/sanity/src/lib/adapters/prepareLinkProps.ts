import {
  LinkVariant,
  type LinkProps,
} from "@shared/ui/components/ui/link/types";

interface ISanityReference {
  _ref: string;
  _type: string;
}

export interface ILink {
  text: string;
  type: "url" | "internal";
  _key: string;
  variant?: LinkVariant;
  url?: ISanityReference;
  href?: string;
  target?: string;
}

export const prepareLinkProps = (props?: ILink): LinkProps => {
  if (!props || typeof props !== "object")
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
    variant: props.variant,
  };
};
