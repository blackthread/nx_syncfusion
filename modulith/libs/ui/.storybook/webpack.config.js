const rootWebpackConfig = require('../../../.storybook/webpack.config');
const path = require("path");
// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  config = await rootWebpackConfig({ config, mode });

  config.module.rules.push({
    test: /\.scss$/,
    use: [
      {
        loader: "postcss-loader",
        options: {
          ident: "postcss",
          plugins: [
            require("postcss-import"),
            require("tailwindcss"),
            require("autoprefixer")
          ]
        }
      }
    ],
    include: path.resolve(__dirname,"../../../")
  })
  
  return config;
};
