import ThirdPartyEmailPasswordNode from "supertokens-node/recipe/thirdpartyemailpassword";
import SessionNode from "supertokens-node/recipe/session";
import { appInfo } from "./appInfo";
import jwt from "jsonwebtoken";
import { getSupabase } from "@/libs/supabase";
import { TypeInput } from "supertokens-node/lib/build/types";

const SUPABASE_SIGNING_SECRET = process.env.SUPABASE_SIGNING_SECRET
const SUPER_TOKENS_URI = process.env.SUPER_TOKENS_URI
const SUPER_TOKENS_KEY = process.env.SUPER_TOKENS_CLIENT_ID

export let backendConfig = (): TypeInput => {
  return {
    framework: "express",
    supertokens: {
      // @ts-ignore
      connectionURI: SUPER_TOKENS_URI,
      apiKey: SUPER_TOKENS_KEY,
    },
    appInfo,
    recipeList: [
      ThirdPartyEmailPasswordNode.init({
        providers: [],
        override: {
          apis: (originalImplementation) => {
            return {
              ...originalImplementation,
              // the thirdPartySignInUpPost function handles sign up/in via Social login
              thirdPartySignInUpPOST: async function (input) {
                if (originalImplementation.thirdPartySignInUpPOST === undefined) {
                  throw Error("Should never come here");
                }

                // call the sign up/in api for social login
                let response = await originalImplementation.thirdPartySignInUpPOST(input);

                // check that there is no issue with sign up and that a new user is created
                if (response.status === "OK" && response.createdNewUser) {
                  // retrieve the supabase_token from the accessTokenPayload
                  const accessTokenPayload = response.session.getAccessTokenPayload();

                  // create a supabase client with the supabase_token from the accessTokenPayload
                  const supabase = getSupabase(accessTokenPayload.supabase_token);

                  console.log("supabase", response);

                  // store the user's email mapped to their userId in Supabase
                  const { error } = await supabase
                    .from("users")
                    .insert({ email: response.user.email, id: response.user.id });

                  if (error !== null) {
                    throw error;
                  }
                }

                return response;
              },

              // the emailPasswordSignUpPOST function handles sign up via Email-Password
              emailPasswordSignUpPOST: async function (input) {
                if (originalImplementation.emailPasswordSignUpPOST === undefined) {
                  throw Error("Should never come here");
                }

                let response = await originalImplementation.emailPasswordSignUpPOST(input);

                if (response.status === "OK") {
                  // retrieve the accessTokenPayload from the user's session
                  const accessTokenPayload = response.session.getAccessTokenPayload();

                  // create a supabase client with the supabase_token from the accessTokenPayload
                  const supabase = getSupabase(accessTokenPayload.supabase_token);

                  console.log("supabase", response);

                  // store the user's email mapped to their userId in Supabase
                  const { error } = await supabase
                    .from("users")
                    .insert({ email: response.user.email, id: response.user.id });

                  if (error !== null) {
                    throw error;
                  }
                }

                return response;
              },
            };
          },
        },
      }),
      SessionNode.init({
        override: {
          functions: (originalImplementation) => {
            return {
              ...originalImplementation,
              // We want to create a JWT which contains the users userId signed with Supabase's secret so
              // it can be used by Supabase to validate the user when retrieving user data from their service.
              // We store this token in the accessTokenPayload so it can be accessed on the frontend and on the backend.
              createNewSession: async function (input) {
                const payload = {
                  userId: input.userId,
                  exp: Math.floor(Date.now() / 1000) + 60 * 60,
                };

                // @ts-ignore
                const supabase_jwt_token = jwt.sign(payload, SUPABASE_SIGNING_SECRET);

                input.accessTokenPayload = {
                  ...input.accessTokenPayload,
                  supabase_token: supabase_jwt_token,
                };

                return await originalImplementation.createNewSession(input);
              },
            };
          },
        },
      }),
    ],
    isInServerlessEnv: true,
  };
};
