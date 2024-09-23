import type { IResolvedLink } from "@/lib/api";

export interface IDataContextValues {
  allResolvedLinks: IResolvedLink[];
}

export interface IDataContextProviderProps extends IDataContextValues {
  children: React.ReactNode;
}
