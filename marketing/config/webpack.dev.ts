import { Configuration } from "webpack";
import { Configuration as DevServerConfig } from "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";
import commonConfig from "./webpack.common";
import { merge } from "webpack-merge";
import packageJson from "../package.json";
import path from "path";

const { ModuleFederationPlugin } = require("webpack").container;

const devServerConfig: DevServerConfig = {
  port: 8081,
  historyApiFallback: {
    index: "index.html",
  },
};

const paths = {
  templatePath: path.resolve(__dirname, "../public", "index.html"),
  entryPath: path.resolve(__dirname, "../src", "index.ts"),
};

const devConfig = (templatePath: string): Configuration => ({
  mode: "development",
  devServer: devServerConfig,
  plugins: [
    new HtmlWebpackPlugin({
      template: templatePath,
    }),
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./MarketingApp": "./src/bootstrap",
      },
      // shared: packageJson.dependencies,
    }),
  ],
});

export default merge(
  commonConfig(paths.entryPath),
  devConfig(paths.templatePath)
);
