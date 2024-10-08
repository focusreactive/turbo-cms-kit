import { SectionRenderer } from "@/contentSections";

import { CookieBanner } from "@shared/ui";

import type { IPageProps } from "./types";

export default function Page({ data }: IPageProps) {
  if (!data) return null;

  const { sectionsBody, showCookieBanner } = data;

  return (
    <div>
      {sectionsBody?.map((section) => (
        <SectionRenderer key={section._key} section={section} />
      ))}
      {showCookieBanner && <CookieBanner />}
    </div>
  );
}
