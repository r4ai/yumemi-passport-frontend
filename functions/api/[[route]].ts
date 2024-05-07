import { Hono } from "hono"
import { handle } from "hono/cloudflare-pages"

type Bindings = {
  RESAS_API_KEY: string
}

const app = new Hono<{
  Bindings: Bindings
}>().basePath("/api")

/**
 * proxy to RESAS API
 * @see https://opendata.resas-portal.go.jp/docs/api/v1/index.html
 * @example
 * ```ts
 * const res = await fetch("/api/resas/v1/prefectures")
 * const data = await res.json()  // { message: null, result: [{ prefCode: 1, prefName: "北海道" }, ...] }
 * ```
 */
app.get("/resas/v1/:path{.+}", (c) => {
  const END_POINT = "https://opendata.resas-portal.go.jp"
  return fetch(new URL(c.req.param("path"), `${END_POINT}/api/v1/`), {
    headers: {
      "X-API-KEY": c.env.RESAS_API_KEY,
    },
  })
})

export const onRequest = handle(app)
