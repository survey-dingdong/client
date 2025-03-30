import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import path from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: "**/*.svg?react",
    }),
    dts({
      outDir: "dist/types",
      include: ["src"],
      rollupTypes: true,
      copyDtsFiles: true,
      insertTypesEntry: true,
    }),
  ],
  build: {
    outDir: "dist",
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "@dingdong/design-system",
      formats: ["es", "umd"],
      fileName: (format) => `dingdong-ds.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "@mui/material", "@mui/system"],
      output: {
        globals: {
          react: "React",
          "@mui/material": "MaterialUI",
          "@mui/system": "MuiSystem",
        },
      },
    },
  },
});
