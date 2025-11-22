module.exports = {
  transform: [
    ["babelify", {
      "presets": ["@babel/preset-env"],
      "plugins": ["@babel/plugin-transform-runtime"]
    }]
  ]
}