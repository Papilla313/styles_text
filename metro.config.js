// const { mergeConfig } = require("@react-native/metro-config");
// const { getDefaultConfig } = require('expo/metro-config');
// const { withNativeWind } = require("nativewind/metro");

// const config = mergeConfig(getDefaultConfig(__dirname), {
//   /* your config */
// });

// module.exports = withNativeWind(config, { input: "./src/global.css" });

const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname)

module.exports = withNativeWind(config, { input: './global.css' })
