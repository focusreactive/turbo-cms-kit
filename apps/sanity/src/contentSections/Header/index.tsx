import EmptyBlock from "@shared/ui/components/EmptyBlock";

import { Header as HeaderUI } from "@shared/ui";

import { prepareLinkProps } from "@/lib/adapters/prepareLinkProps";
import SectionContainer from "@/components/SectionContainer";

import type { IHeaderProps } from "./types";

export default function Header({ data }: IHeaderProps) {
  if (!data) return <EmptyBlock name="Header Section" />;

  const { links } = data;

  return (
    <SectionContainer sectionData={data} className="sticky left-0 top-0 z-50">
      <HeaderUI links={links?.map(prepareLinkProps) || []} />
    </SectionContainer>
  );
}
