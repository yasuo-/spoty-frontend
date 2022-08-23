import supertokens from "supertokens-node";
import { middleware } from "supertokens-node/framework/express";
import { superTokensNextWrapper } from "supertokens-node/nextjs";

import type { NextApiRequest, NextApiResponse } from "next";

import { backendConfig } from "@/config/backendConfig";

supertokens.init(backendConfig());

type Data = any;

/**
 * superTokens
 * @param req
 * @param res
 */
export default async function superTokens(req: NextApiRequest, res: NextApiResponse<Data>) {
  await superTokensNextWrapper(
    async (next) => {
      // @ts-ignore
      await middleware()(req, res, next);
    },
    req,
    res
  );
  if (!res.writableEnded) {
    res.status(404).send("Not found");
  }
}
