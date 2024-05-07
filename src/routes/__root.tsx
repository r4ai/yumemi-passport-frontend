import { createRootRoute, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"
import { Suspense } from "react"

import { RootLayout } from "~/components/layout"

export const Route = createRootRoute({
  component: () => (
    <>
      <RootLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </RootLayout>
      <TanStackRouterDevtools />
    </>
  ),
})
