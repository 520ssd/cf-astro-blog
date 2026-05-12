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
  // 👇 这是新增的重定向规则
  server: {
    async rewrite(req) {
      const url = new URL(req.url);
      // 自动把 /blog/love-xxx 重写为 /love/xxx
      if (url.pathname.startsWith("/blog/love-")) {
        return url.pathname.replace("/blog/love-", "/love/");
      }
      return undefined;
    },
  },
});