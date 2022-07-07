import type { NextApiRequest, NextApiResponse } from "next"

const METHODS = ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTION", "HEAD"] as const

type Handler = (req: NextApiRequest, res: NextApiResponse) => Promise<any>

type Methods = typeof METHODS[number]

export type Handlers = {
  [Key in Methods]?: Handler
}

export type NextHandler = (req: NextApiRequest, res: NextApiResponse) => void

export function connectHandlers(handlers: Handlers) {
  return function (req: NextApiRequest, res: NextApiResponse) {
    if (!req.method || !METHODS.includes(req.method as any)) return res.status(400).json({ error: "Bad request" })

    const handler = handlers[req.method as Methods]

    return handler !== undefined ? handler(req, res) : res.status(405).send("Method not allowed")
  }
}
