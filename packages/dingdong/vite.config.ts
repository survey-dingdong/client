import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.svg",
        "favicon.ico",
        "robots.txt",
        "apple-touch-icon.png",
      ],
      manifest: {
        name: "Dingdong",
        short_name: "dingdong",
        description: "for research and survey",
        theme_color: "#ffffff",
        icons: [
          {
            src: "favicon-64x64.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        // icons: [
        //   {
        //     src: 'pwa-192x192.png',
        //     sizes: '192x192',
        //     type: 'image/png'
        //   },
        //   {
        //     src: 'pwa-512x512.png',
        //     sizes: '512x512',
        //     type: 'image/png'
        //   },
        //   {
        //     src: 'pwa-512x512.png',
        //     sizes: '512x512',
        //     type: 'image/png',
        //     purpose: 'any maskable'
        //   }
        // ]
      },
    }),
  ],
});
