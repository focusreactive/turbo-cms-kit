import SectionContainer from "@/components/SectionContainer";
import { Copy } from "@shared/ui";
import type React from "react";
import { type ICopyProps } from "./types";
import { prepareRichTextProps } from "@/lib/adapters/prepareRichTextProps";

const CopySection: React.FunctionComponent<ICopyProps> = ({ blok }) => {
    return <SectionContainer blok={blok}><Copy richText={prepareRichTextProps(blok.text[0])} /></SectionContainer>;
};

export default CopySection;
