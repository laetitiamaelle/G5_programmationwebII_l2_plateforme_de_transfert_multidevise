import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  reactStrictMode: true,
  /** Évite que Next prenne un lockfile parent (ex. monorepo Web2) comme racine du tracing. */
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
