import type { NextApiRequest, NextApiResponse } from "next"
import type { Handlers } from "../../lib/api"

import { connectHandlers } from "../../lib/api"

const handlers: Handlers = {
  async GET(_, res: NextApiResponse) {
    return res.status(200).json({ user: "Val Kilmer" })
  },
  async POST(req: NextApiRequest, res: NextApiResponse) {
    const data = JSON.parse(req.body)

    return res.status(200).json({ message: `Hello ${data.username}` })
  },
}

/*
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Content-Type", "application/json");

  // Middleware 1 pour l'auth
  /*
  const user = req.session.get("user");
  if (!user?.isLoggedIn) {
    throw new AuthenticationError();
  }
  */

// Middleware 2 pour les options
/*
  const options = { header: { "Content-Type": "application/json" } };

  if (options?.header?.["Content-Type"])
    res.setHeader("Content-Type", options.header["Content-Type"]);


  return connect(handlers)(req, res);
}
*/

export default connectHandlers(handlers)
