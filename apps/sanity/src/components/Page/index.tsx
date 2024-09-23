import { SectionRenderer } from "@/contentSections";

import type { IPageProps } from "./types";

export default function Page({ data }: IPageProps) {
  if (!data) return null;

  const { sectionsBody } = data;

  return (
    <div>
      {sectionsBody?.map((section) => (
        <SectionRenderer key={section._key} section={section} />
      ))}
    </div>
  );
}
