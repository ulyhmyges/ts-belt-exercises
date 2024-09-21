export default {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "node",
  testMatch: ["**/test/**/*.test.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
      // Place any ts-jest-specific configuration here
        tsconfig: "tsconfig.json", // Ensure to specify your tsconfig
    }],
  }
}
