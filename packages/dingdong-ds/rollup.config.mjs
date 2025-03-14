import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import url from "@rollup/plugin-url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, "package.json"), "utf-8"));

export default [
  {
    input: "src/index.ts",
    output: [
      { 
        file: "dist/dingdong-ds.es.js",  // ESM 번들
        format: "es", 
        sourcemap: true 
      },
      { 
        file: "dist/dingdong-ds.umd.js", // UMD 번들
        format: "umd", 
        name: "DingDongDesignSystem", 
        sourcemap: true,
        plugins: [terser()]
      },
      { file: packageJson.main, format: "cjs", sourcemap: "inline" },
    ],
    plugins: [
      url({
        include: ['**/*.png', '**/*.jpg', '**/*.gif', '**/*.svg'],
        limit: 8192, 
      }),
      resolve(), 
      commonjs(), 
      typescript({ 
        tsconfig: "./tsconfig.json",
        declaration: true,
        declarationDir: "./dist/types",
        exclude: ["**/*.test.ts", "**/*.stories.tsx"]
      })
    ],
    external: Object.keys(packageJson.peerDependencies || {}),
  },
  {
    input: "src/index.ts",
    output: { file: packageJson.types, format: "es" },
    plugins: [dts()],
  },
];
