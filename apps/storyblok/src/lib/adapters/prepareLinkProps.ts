import {
  LinkVariant,
  type LinkProps,
} from "@shared/ui/components/ui/link/types";
import type { SbBlokData } from "@storyblok/react/rsc";

export enum LinkTypes {
  story = "story",
  url = "url",
  email = "email",
}

export interface IStoryLink {
  id: string;
  url: string;
  anchor?: string;
  linktype: LinkTypes;
  fieldtype: string;
  cached_url: string;
  target?: string;
  story?: {
    full_slug: string;
  };
}

export interface ILinkBlok extends SbBlokData {
  text: string;
  link: IStoryLink;
  variant: LinkVariant;
  newTab?: boolean;
}

export const prepareLinkProps = (props?: ILinkBlok): LinkProps => {
  if (!props) {
    return {
      text: "",
      href: "",
      variant: LinkVariant.Default,
    };
  }

  const linkType = props.link.linktype;
  const href = linkType === "story" ? `/${props.link.cached_url}` : props.link.url;

  return {
    text: props.text,
    href,
    variant: props.variant,
  };
};
