const { getDefaultConfig } = require("expo/metro-config"); // if you're using Expo
// const { getDefaultConfig } = require("metro-config"); // for bare React Native

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.transformer = {
  ...defaultConfig.transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer"),
};

defaultConfig.resolver = {
  ...defaultConfig.resolver,
  assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== "svg"),
  sourceExts: [...defaultConfig.resolver.sourceExts, "svg"],
};

module.exports = defaultConfig;
