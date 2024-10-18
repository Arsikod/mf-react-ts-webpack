import { Configuration } from "webpack";
import { Configuration as DevServerConfig } from "webpack-dev-server";
import commonConfig from "./webpack.common";
import { merge } from "webpack-merge";
import packageJson from "../package.json";

const { ModuleFederationPlugin } = require("webpack").container;

const devServerConfig: DevServerConfig = {
  port: 8081,
  historyApiFallback: {
    index: "index.html",
  },
};

const devConfig = (): Configuration => ({
  mode: "development",
  devServer: devServerConfig,
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
