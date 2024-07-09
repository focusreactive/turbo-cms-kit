import SectionContainer from "@/components/SectionContainer";
import { Copy } from "@shared/ui";
import type React from "react";
import { type ICopyProps } from "./types";

const CopySection: React.FunctionComponent<ICopyProps> = ({ blok }) => {
    return <SectionContainer blok={blok}><Copy richText={blok.richText} /></SectionContainer>;
};

export default CopySection;
