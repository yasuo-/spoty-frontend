import React, { useEffect } from "react";

import SuperTokensReact, { SuperTokensWrapper } from "supertokens-auth-react";
import Session from "supertokens-auth-react/recipe/session";
import { redirectToAuth } from "supertokens-auth-react/recipe/thirdpartyemailpassword";

import type { AppProps, NextWebVitalsMetric } from "next/app";

import * as SuperTokensConfig from "@/config/frontendConfig";
import { AppProvider } from "@/providers/AppProvider";
import "@/styles/globals.css";
// eslint-disable-next-line import/order
import { initMocks } from "@/mocks";

// window
if (typeof window !== "undefined") {
  SuperTokensReact.init(SuperTokensConfig.frontendConfig());
}

// mock
initMocks();

// metrics
export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (metric.label === "web-vital") {
    console.log(metric);
  }
}

/**
 * App
 * @param Component
 * @param pageProps
 * @constructor
 */
function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    async function doRefresh() {
      if (pageProps.fromSupertokens === "needs-refresh") {
        if (await Session.attemptRefreshingSession()) {
          location.reload();
        } else {
          // user has been logged out
          redirectToAuth();
        }
      }
    }
    doRefresh();
  }, [pageProps.fromSupertokens]);

  if (pageProps.fromSupertokens === "needs-refresh") {
    return null;
  }

  return (
    <SuperTokensWrapper>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </SuperTokensWrapper>
  );
}

export default App;
