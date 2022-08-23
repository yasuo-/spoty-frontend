import React from "react";

export type AppProviderProps = {
  children: React.ReactNode;
};
/**
 * AppProvider
 * the top level component that all other components should be rendered within.
 * @param children
 * @constructor
 */
export const AppProvider = ({ children }: AppProviderProps) => {
  return <React.Suspense fallback={<div>Loading</div>}>{children}</React.Suspense>;
};
