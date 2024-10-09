import { SectionRenderer } from "@/contentSections";

import { CookieBanner } from "@shared/ui";

import Header from "../Header";
import type { IPageProps } from "./types";

export default function Page({ data }: IPageProps) {
  if (!data) return null;

  const { sectionsBody, showCookieBanner, header } = data;

  return (
    <div>
      <Header data={header} />
      {sectionsBody?.map((section) => (
        <SectionRenderer key={section._key} section={section} />
      ))}
      {showCookieBanner && <CookieBanner />}
    </div>
  );
}
