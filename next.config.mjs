/** @type {import('next').NextConfig} */

// GitHub Pages serves this as a *project page* at https://seed0001.github.io/b-bBros/
// so the app must be exported as static HTML and live under the /b-bBros base path.
const isProd = process.env.NODE_ENV === "production";
const repo = "b-bBros";

const nextConfig = {
  output: "export", // emit a static site into ./out (no Node server needed)
  trailingSlash: true, // /creators -> /creators/index.html, robust on Pages
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  reactStrictMode: true,
  images: {
    unoptimized: true, // the Next image optimizer needs a server; export can't use it
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
};

export default nextConfig;
