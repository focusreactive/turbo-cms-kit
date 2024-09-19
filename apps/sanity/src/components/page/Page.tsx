import { SectionRenderer } from "@/contentSections";

import type { PagePayload } from "@/lib/types";

export interface PageProps {
  data: PagePayload | null;
}

export default function Page({ data }: PageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { sectionsBody } = data ?? {};

  return (
    <div>
      {sectionsBody?.map((section) => (
        <SectionRenderer key={section._key} section={section}/>
      ))}
    </div>
  );
}
