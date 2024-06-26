import { TanStackRouterVite } from "@tanstack/router-vite-plugin"
import react from "@vitejs/plugin-react-swc"
import tsconfigPaths from "vite-tsconfig-paths"
import { defineConfig } from "vitest/config"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    TanStackRouterVite({
      routeFileIgnorePattern: ".(stories|test).(js|jsx|ts|tsx)",
      quoteStyle: "double",
      semicolons: false,
    }),
  ],
  test: {
    coverage: {
      enabled: true,
      provider: "istanbul",
      include: ["src/**/*"],
      exclude: [
        "**/*.stories.*",
        "**/{components,-components}/**/*.tsx",
        "src/main.tsx",
        "src/routeTree.gen.ts",
        "src/routes/__root.tsx",
        "src/routes/**/{route,route.lazy}.tsx",
      ],
    },
    environment: "happy-dom",
  },
})
