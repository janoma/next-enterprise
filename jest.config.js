import nextJest from "next/jest"

const createJestConfig = nextJest({
  dir: "./",
})

const customJestConfig = {
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: ["<rootDir>/e2e"],
}

export default createJestConfig(customJestConfig)
