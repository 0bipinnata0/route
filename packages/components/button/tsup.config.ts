import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  target: "esnext",
  format: ["cjs", "esm"], // 打包出 Commonjs & ESMoudle 规范的代码
});
