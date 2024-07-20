import conventional from "@commitlint/config-conventional";

/** @type {typeof conventional} */
const config = {
  extends: ["@commitlint/config-conventional"],
  plugins: ["commitlint-plugin-function-rules"],
  // helpUrl: "https://github.com/0bipinnata0/route",
  helpUrl:
    "https://github.com/conventional-changelog/commitlint/#what-is-commitlint",
  rules: {
    ...conventional.rules,
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "feature",
        "fix",
        "refactor",
        "docs",
        "build",
        "test",
        "ci",
        "chore",
      ],
    ],
    "function-rules/header-max-length": [0],
  },
};

export default config;
