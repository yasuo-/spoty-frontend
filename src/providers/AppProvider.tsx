import React from "react";

import { ErrorBoundary } from "react-error-boundary";
import { I18nextProvider } from "react-i18next";

import { Spinner } from "@/components/Elements/Loader/Spinner";
import { ErrorFallback } from "@/components/Error";
import i18n from "@/libs/locale/i18n";

export type AppProviderProps = {
  children: React.ReactNode;
};
/**
 * AppProvider
 * the top level component that all other components should be rendered within.
 * @param children
 * @returns {JSX.Element}
 */
export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <I18nextProvider i18n={i18n}>
      <React.Suspense fallback={<Spinner />}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
      </React.Suspense>
    </I18nextProvider>
  );
};
