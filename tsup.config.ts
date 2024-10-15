import { defineConfig } from "tsup";
export default defineConfig({
  target: "es6",
  clean: true,
  dts: true,
  entry: ["src/index.tsx"],
  keepNames: true,
  sourcemap: true,
  minify: true,
  format: ["esm"],
});
