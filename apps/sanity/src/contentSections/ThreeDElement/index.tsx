import { ThreeDElement as ThreeDElementUI } from "@shared/ui";

import SectionContainer from "@/components/SectionContainer";

import type { IThreeDElementProps } from "./types";

export default function ThreeDElement({ data }: IThreeDElementProps) {
  if (!data) return null;

  const { title } = data;

  return (
    <SectionContainer sectionData={data}>
      <ThreeDElementUI title={title as any} />
    </SectionContainer>
  );
}
