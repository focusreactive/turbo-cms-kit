import {
  LinkVariant,
  type LinkProps,
} from "@shared/ui/components/ui/link/types";
import type { SbBlokData } from "@storyblok/react/rsc";

import { useDataContext } from "@/components/DataContext";

import { isPreview } from "../utils";

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
  const { allResolvedLinks } = useDataContext();

  if (!props) {
    return {
      text: "",
      href: "",
      variant: LinkVariant.Default,
      clickDisabled: isPreview,
    };
  }

  let url = "";

  if (props.link.linktype === "url") {
    url = props.link.url;
  }

  if (props.link.linktype === "story") {
    const resolvedLink = allResolvedLinks?.find(
      (item) => item.uuid === props?.link.id,
    );

    if (resolvedLink?.url.startsWith("/")) {
      url = resolvedLink?.url;
    } else {
      url = `/${resolvedLink?.url}`;
    }
  }

  return {
    text: props.text,
    href: url,
    variant: props.variant,
    clickDisabled: isPreview,
  };
};
