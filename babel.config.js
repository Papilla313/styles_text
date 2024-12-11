// module.exports = {
//   presets: [
//     "@babel/preset-env",
//     "@babel/preset-react", 
//     'nativewind/babel'
//   ],
//   plugins: [
//     'nativewind/babel',
//   ],
// };

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};