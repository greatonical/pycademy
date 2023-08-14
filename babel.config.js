module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "^@colors": "./src/utils/colors.ts",
            "^@fonts": "./src/utils/fonts.ts",
            "^@routes": "./src/utils/routes.ts",
            "^@components": "./src/components",
            "^@animations/(.*)": "./src/animations/\\1",
            "^@lib/(.*)": "./src/lib/\\1",
            "^@images/(.*)": "./src/images/\\1",
            "^@/(.*)": "./\\1",
          },
        },
      ],
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
      require.resolve("expo-router/babel"),
      "nativewind/babel",
    ],
  };
};
