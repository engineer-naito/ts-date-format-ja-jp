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
});
