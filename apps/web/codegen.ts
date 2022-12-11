import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://b5n38bm9.api.sanity.io/v1/graphql/production/default",
  documents: ["./src/graphql/**/*.graphql"],
  generates: {
    "./src/graphql/generated/generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
      },
    },
  },
};

export default config;
