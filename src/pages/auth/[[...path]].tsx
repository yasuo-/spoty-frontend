import React, { useEffect } from "react";

import dynamic from "next/dynamic";
import SuperTokens from "supertokens-auth-react";
import { redirectToAuth } from "supertokens-auth-react/recipe/thirdpartyemailpassword";

// @ts-ignore
const SuperTokensComponentNoSSR = dynamic(new Promise((res) => res(SuperTokens.getRoutingComponent)), {
  ssr: false
});

export default function Auth() {
  useEffect(() => {
    if (!SuperTokens.canHandleRoute()) {
      redirectToAuth();
    }
  }, []);

  return <SuperTokensComponentNoSSR />;
}
