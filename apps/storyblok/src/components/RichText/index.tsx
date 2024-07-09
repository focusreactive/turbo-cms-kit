import React from "react";
import renderRichText from "@/lib/renderRichText";
import type { IRichTextProps } from "./types";

import { HeroSection } from "@shared/ui";
// import { RichTextWrapper } from "@shared/ui";

const RichText: React.FC<IRichTextProps> = ({ content }) => {
  return (
    <div>
      <div className={"prose prose-stone max-w-full lg:prose-xl"}>
        {renderRichText(content)}
      </div>

      <h3 className="text-3xl font-bold">shared package component 👇</h3>
      <HeroSection title="hello from storyblok" />
    </div>
  );
};

export default RichText;
