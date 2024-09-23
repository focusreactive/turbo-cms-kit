"use client";

import { createContext, useContext } from "react";

import type { IDataContextProviderProps, IDataContextValues } from "./types";

export const DataContext = createContext<IDataContextValues>({
  allResolvedLinks: [],
});

export function DataContextProvider({
  children,
  allResolvedLinks,
}: IDataContextProviderProps) {
  return (
    <DataContext.Provider
      value={{
        allResolvedLinks,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => {
  return useContext(DataContext);
};
