## Description

Imagine a better way to write API handlers in Next.js.

Inspired by [Fresh](https://fresh.deno.dev/) for Deno.

See src/lib/api.ts.

## Usage

```ts
// /pages/api/hello.ts
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

export default connectHandlers(handlers)

```

## Test it

```sh
yarn
yarn dev
```
