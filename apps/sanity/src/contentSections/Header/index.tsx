"use client";

import { Header as HeaderUI } from "@shared/ui";

import { prepareLinkProps } from "@/lib/adapters/prepareLinkProps";
import SectionContainer from "@/components/SectionContainer";

import type { IHeaderProps } from "./types";

export default function Header({ data }: IHeaderProps) {
  if (!data) return null;

  const { links, _key, theme = "light" } = data;

  return (
    <SectionContainer id={_key} theme={theme}>
      <HeaderUI links={links.map(prepareLinkProps)} />
    </SectionContainer>
  );
}
