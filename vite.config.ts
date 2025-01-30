import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      thresholds: {
        lines: 99,
        functions: 99,
        statements: 99,
      },
    },
  },
  build: {
    lib: {
      entry: "src/dateFormat.ts",
      name: "DateFormat",
      fileName: format => `date-format.${format}.js`,
      formats: ["es", "cjs"],
    },
  },
});
