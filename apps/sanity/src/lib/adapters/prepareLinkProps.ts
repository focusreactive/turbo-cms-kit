import {
  LinkVariant,
  type LinkProps,
} from "@shared/ui/components/ui/link/types";

interface ISanityResolvedReference {
  slug: string[];
}

export interface ILink {
  text: string;
  type: "url" | "internal";
  _key: string;
  variant?: LinkVariant;
  url?: ISanityResolvedReference;
  href?: string;
  target?: string;
}

export const prepareLinkProps = (props?: ILink): LinkProps => {
  if (!props) return { text: "", href: "", variant: LinkVariant.Default };

  let href = "";
  if (props.type === "url") {
    href = props.href as string;
  }

  if (props.type === "internal") {
    href = props?.url?.slug ? props.url.slug.join("/") : "";
  }

  return {
    text: props.text,
    href: href,
    variant: props.variant || LinkVariant.Default,
  };
};
