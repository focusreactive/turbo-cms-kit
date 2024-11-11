"use client";

import { createContext, useContext } from "react";

import type { IDataContextProviderProps, IDataContextValues } from "./types";

export const DataContext = createContext<IDataContextValues>({
  allResolvedLinks: [],
  headersAndFooters: [],
});

export function DataContextProvider({
  children,
  allResolvedLinks,
  headersAndFooters,
}: IDataContextProviderProps) {
  return (
    <DataContext.Provider
      value={{
        allResolvedLinks,
        headersAndFooters,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => {
  return useContext(DataContext);
};
