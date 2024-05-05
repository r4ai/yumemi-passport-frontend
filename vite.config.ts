import react from "@vitejs/plugin-react-swc"
import tsconfigPaths from "vite-tsconfig-paths"
import { defineConfig } from "vitest/config"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    coverage: {
      enabled: true,
      provider: "istanbul",
      include: ["src/**/*"],
      exclude: ["**/*.stories.*"],
    },
    environment: "happy-dom",
  },
})
