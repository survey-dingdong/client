import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, "package.json"), "utf-8"));

export default [
  {
    input: "src/index.ts",
    output: [
      { file: packageJson.exports.import, format: "es", sourcemap: "inline" },
      { file: packageJson.exports.require, format: "umd", name: "DingDongDesignSystem", sourcemap: "inline", plugins: [terser()] },
      { file: packageJson.main, format: "cjs", sourcemap: "inline" },
    ],
    plugins: [resolve(), commonjs(), typescript({ tsconfig: "./tsconfig.json" })],
    external: Object.keys(packageJson.peerDependencies || {}),
  },
  {
    input: "src/index.ts",
    output: { file: packageJson.types, format: "es" },
    plugins: [dts()],
  },
];
