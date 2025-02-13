const path = require("path");

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
      "@storybook/preset-scss"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    // Add support for TypeScript files
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("ts-loader"),
          options: { transpileOnly: true },
        },
      ],
    });
    config.resolve.extensions.push(".ts", ".tsx");

    // Add SCSS support
    // config.module.rules.push({
    //   test: /\.s(a|c)ss$/,
    //   use: [
    //     "style-loader",
    //     {
    //       loader: "css-loader",
    //       options: {
    //         importLoaders: 1, // We always need to apply postcss-loader before css-loader
    //         modules: {
    //           auto: /\.module\.scss$/, // true
    //           localIdentName: "[name]__[local]--[hash:base64:5]",
    //         },
    //       },
    //     },
    //     {
    //       loader: "postcss-loader", // required for tailwind
    //       options: {
    //         implementation: require("postcss"), // postcss 8
    //         postcssOptions: {
    //           config: path.resolve(__dirname, "../postcss.config.js"),
    //         },
    //       },
    //     },
    //     {
    //       loader: "sass-loader",
    //       options: {
    //         // sourceMap: true,
    //         implementation: require("sass"), // dart sass
    //       },
    //     },
    //   ],
    // });

    config.module.rules.push({
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    });

    return config;
  },
};

export default config;
