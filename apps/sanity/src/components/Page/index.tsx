import { SectionRenderer } from "@/contentSections";
import { stegaClean } from "@sanity/client/stega";

import { cn, CookieBanner } from "@shared/ui";

import Footer from "../Footer";
import Header from "../Header";
import type { IPageProps } from "./types";

export default function Page({ data }: IPageProps) {
  if (!data) return null;

  const { sectionsBody, showCookieBanner, header, footer, theme } = data;

  console.log("datadata");
  console.log(data);

  return (
    <div className={cn("bg-bgColor", stegaClean(theme))}>
      <Header data={header} />
      {sectionsBody?.map((section) => (
        <SectionRenderer key={section._key} section={section} />
      ))}
      {showCookieBanner && <CookieBanner />}
      <Footer data={footer} />
    </div>
  );
}
