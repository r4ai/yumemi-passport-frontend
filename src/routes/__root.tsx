import { createRootRoute, Link, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"
import { Suspense } from "react"
import { css } from "styled-system/css"

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link
          to="/"
          className={css({
            _statusActive: {
              fontWeight: "bold",
            },
          })}
        >
          Home
        </Link>
      </div>
      <hr />
      <Suspense fallback="Loading...">
        <Outlet />
      </Suspense>
      <TanStackRouterDevtools />
    </>
  ),
})
