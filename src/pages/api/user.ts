import supertokens from "supertokens-node";
import { superTokensNextWrapper } from "supertokens-node/nextjs";
import { verifySession } from "supertokens-node/recipe/session/framework/express";

import type { NextApiRequest, NextApiResponse } from "next";

import { backendConfig } from "@/config/backendConfig";
import { getSupabase } from "@/libs/supabase";

supertokens.init(backendConfig());

type Data = any;
type NextApiRequestWithSession = NextApiRequest & { session: any };

/**
 * user
 * @param req NextApiRequestWithSession
 * @param res NextApiResponse
 */
export default async function user(req: NextApiRequestWithSession, res: NextApiResponse<Data>) {
  await superTokensNextWrapper(
    async (next) => {
      // @ts-ignore
      return await verifySession()(req, res, next);
    },
    req,
    res
  );

  const accessTokenPayload = req.session.getAccessTokenPayload();
  const userId = req.session.getUserId();

  const supabase = getSupabase(accessTokenPayload.supabase_token);

  // retrieve user's email from supabase
  const { data } = await supabase.from("users").select("email").eq("id", userId);
  // @ts-ignore
  let email = data[0].email;

  return res.json({
    note: "Fetch any data from your application for authenticated user after using verifySession middleware",
    userId,
    email,
    sessionHandle: req.session.getHandle(),
    accessTokenPayload
  });
}
