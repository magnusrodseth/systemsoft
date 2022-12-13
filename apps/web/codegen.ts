import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://b5n38bm9.api.sanity.io/v1/graphql/production/default",
  documents: ["./src/graphql/**/*.ts"],
  generates: {
    "./src/graphql/generated/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
