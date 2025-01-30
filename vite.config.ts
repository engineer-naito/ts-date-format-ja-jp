import { defineConfig } from "vitest/config";
import dts from "vite-plugin-dts";

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
      formats: ["es"],
    },
  },
  plugins: [
    dts({ // 🔹 型定義ファイルの出力を有効化
      outDir: "dist",
      insertTypesEntry: true,
    }),
  ],
});
