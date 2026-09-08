import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      // The Athens city hub moved from /city/athens/ to /athens/ to serve as
      // the primary Athens/Attica transfer hub. Preserve the old indexed URL.
      { source: "/city/athens/", destination: "/athens/", permanent: true },
      { source: "/el/poli/athina/", destination: "/el/athina/", permanent: true },
    ];
  },
};

export default nextConfig;
