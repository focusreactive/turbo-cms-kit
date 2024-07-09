import { CTA } from "@shared/ui";
import type React from "react";
import { type ICtaProps } from "./types";
import SectionContainer from "@/components/SectionContainer";

const Cta: React.FunctionComponent<ICtaProps> = ({ blok }) => {
    return <SectionContainer blok={blok}> <CTA /></SectionContainer>;
};

export default Cta;
