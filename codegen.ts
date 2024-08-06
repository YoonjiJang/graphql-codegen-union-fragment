import { CodegenConfig } from "@graphql-codegen/cli";
import path from "path";

const config = {
  schema: [path.resolve(__dirname, "schema.graphql")],
  overwrite: true,
  generates: {
    "src/graphql/types.ts": {
      plugins: ["typescript"],
    },
    src: {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".ts",
        baseTypesPath: "./graphql/types.ts",
      },
      plugins: ["typescript-operations"],
      config: {
        dedupeOperationSuffix: true,
        inlineFragmentTypes: "combine",
      },
      documents: [path.resolve(__dirname, "src/**/*.graphql")],
    },
  },
} satisfies CodegenConfig;

export default config;
