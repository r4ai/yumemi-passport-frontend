import { createRootRoute, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"
import { FC, Suspense } from "react"
import { sva } from "styled-system/css"

import { Loader } from "~/components/elements/loader"
import { RootLayout } from "~/components/layout"
import { isProduction } from "~/utils/runtime/runtime"

const Loading: FC = () => {
  const styles = loading()
  return (
    <div className={styles.root}>
      <Loader />
      <p>アプリケーションを読み込んでいます...</p>
    </div>
  )
}

const loading = sva({
  slots: ["root"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "6",
      padding: "8",
      width: "100%",
      height: "100%",
      alignSelf: "center",
    },
  },
})

export const Route = createRootRoute({
  component: () => (
    <>
      <RootLayout>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </RootLayout>
      {!isProduction() && <TanStackRouterDevtools />}
    </>
  ),
})
