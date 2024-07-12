import { SectionRenderer } from "@/contentSections";

import type { IPageContainerProps } from "./types";

export default function PageContainer({ data }: IPageContainerProps) {
  return (
    <div>
      {data?.sectionsBody?.map((section) => (
        <SectionRenderer key={section._key} section={section} />
      ))}
    </div>
  );
}
