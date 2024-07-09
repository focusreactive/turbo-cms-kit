import PageContainer from "@/components/Page";
import RichText from "@/components/RichText";
import CopySection from "@/contentSections/Copy";
import Cta from "@/contentSections/Cta";
import Hero from "@/contentSections/Hero";
import renderRichText from "@/lib/renderRichText";
import { configurateUi } from "@shared/ui/components/config";

configurateUi({
  richTextFormatterFunction: (data) => {
    return renderRichText(data)
  }
})

export const COMPONENTS = {
  richText: RichText,
  page: PageContainer,
  hero: Hero,
  cta: Cta,
  copy: CopySection
};
