export const isServer = () => typeof window === "undefined"
export const isProduction = () =>
  typeof process !== "undefined" && process.env.NODE_ENV === "production"
