import SessionReact from "supertokens-auth-react/recipe/session";
import ThirdPartyEmailPasswordReact from "supertokens-auth-react/recipe/thirdpartyemailpassword";

import { appInfo } from "./appInfo";

export let frontendConfig = () => {
  return {
    appInfo,
    recipeList: [
      ThirdPartyEmailPasswordReact.init({
        emailVerificationFeature: {
          mode: "REQUIRED"
        },
        signInAndUpFeature: {
          providers: []
        }
      }),
      SessionReact.init()
    ]
  };
};
