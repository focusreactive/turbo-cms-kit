import type { IResolvedLink } from "@/lib/api";

export interface ICoreLayoutProps {
  children: React.ReactNode;
  allResolvedLinks: IResolvedLink[];
}
