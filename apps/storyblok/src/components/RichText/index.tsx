import React from "react";
import renderRichText from "@/lib/renderRichText";
import type { IRichTextProps } from "./types";

const RichText: React.FC<IRichTextProps> = ({ content }) => {
  return (
    <div>
      <div className={"prose prose-stone max-w-full lg:prose-xl"}>
        {renderRichText(content)}
      </div>
    </div>
  );
};

export default RichText;
