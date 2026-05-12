// @ts-check
import cloudflare from "@astrojs/cloudflare";
import { defineConfig } from "astro/config";

export default defineConfig({
  output: "server",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  site: "https://blog.ericterminal.com",
  vite: {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  },

  // ✅ 关键配置：同时支持 /blog 和 /love 两个目录
  server: {
    async rewrite(req) {
      const url = new URL(req.url);

      // 支持 /blog/xxx → 正常访问
      if (url.pathname.startsWith("/blog/")) {
        return url.pathname;
      }

      // 支持 /love/xxx → 正常访问
      if (url.pathname.startsWith("/love/")) {
        return url.pathname;
      }

      return undefined;
    },
  },
});