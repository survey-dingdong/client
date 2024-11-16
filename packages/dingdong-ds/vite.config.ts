import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import path from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: "**/*.svg?react",
    }),
    dts({
      outDir: "dist/types",
    }),
  ],
  build: {
    outDir: "dist",
    lib: {
      name: "DesignSystem",
      entry: path.resolve(__dirname, "src/index.ts"),
    },
    rollupOptions: {
      external: ["react"],
      output: [
        {
          globals: {
            react: "React",
          },
          format: "umd",
          name: "MyLibrary",
          dir: "dist",
        },
        {
          format: "esm",
          dir: "dist",
        },
      ],
    },
    commonjsOptions: {
      esmExternals: ["react"], // React를 ESM 형식으로 외부 모듈 처리
    },
  },
});
