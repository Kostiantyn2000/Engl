const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@components": "src/components",
    "@views": "src/views",
    "@store": "src/store",
    "@utils": "src/utils",
    "@hooks": "src/hooks",
  })(config);

  return config;
};
