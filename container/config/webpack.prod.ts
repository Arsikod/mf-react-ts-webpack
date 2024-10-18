import { Configuration } from "webpack";
import commonConfig from "./webpack.common";
import { merge } from "webpack-merge";
import packageJson from "../package.json";

const { ModuleFederationPlugin } = require("webpack").container;

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = (): Configuration => ({
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: `marketing@${domain}/marketing/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
});

export default merge(commonConfig(), prodConfig());
