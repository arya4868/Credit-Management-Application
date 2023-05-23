module.exports = {
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ['jest-styled-components'],
    "transform": {
      "^.+\\.tsx?$": "ts-jest",
      "^.+\\.svg$": "<rootDir>/svgTransform.js"
   },
   
  };