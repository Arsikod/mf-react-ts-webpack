import { Configuration } from "webpack";
import commonConfig from "./webpack.common";
import { merge } from "webpack-merge";
import packageJson from "../package.json";

const { ModuleFederationPlugin } = require("webpack").container;

const devConfig = (): Configuration => ({
  mode: "production",
  plugins: [
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./MarketingApp": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
  ],
});

export default merge(commonConfig(), devConfig());
