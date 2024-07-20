import { relative } from "node:path";
import { ESLint } from "eslint";

const removeIgnoredFiles = async (files) => {
  const cwd = process.cwd();
  const eslint = new ESLint();
  const relativePaths = files.map((file) => relative(cwd, file));
  const isIgnored = await Promise.all(
    relativePaths.map((file) => {
      return eslint.isPathIgnored(file);
    }),
  );
  const filteredFiles = files.filter((_, i) => !isIgnored[i]);
  return filteredFiles.join(" ");
};

const config = {
  // 提交之前对所有的匹配到的文件进行eslint检查
  "**/*.{ts,tsx,js,jsx}": async (files) => {
    const filesToLint = await removeIgnoredFiles(files);
    return [`eslint --max-warnings=0 --fix ${filesToLint}`];
  },
};

export default config;
