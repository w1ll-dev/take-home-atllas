import { pathsToModuleNameMapper } from "ts-jest";
import TSConfig from "./tsconfig.json";

module.exports = {
  rootDir: "./",
  preset: "jest-expo",
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  testTimeout: 120000,
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)",
  ],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  cacheDirectory: ".jest/cache",
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: pathsToModuleNameMapper(TSConfig.compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
  verbose: true,
};
