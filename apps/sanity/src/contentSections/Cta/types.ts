import type { CtaVariant } from "@shared/ui/components/sections/cta/types";

export interface ICtaProps {
    data: ICta;
}

export interface ICta {
    _key: string;
    text: any
    links: any[]
    variant: CtaVariant
}