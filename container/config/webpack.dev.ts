import { Configuration } from "webpack";
import { Configuration as DevServerConfig } from "webpack-dev-server";
import commonConfig from "./webpack.common";
import { merge } from "webpack-merge";
import packageJson from "../package.json";
import path from "path";

const { ModuleFederationPlugin } = require("webpack").container;

const devServerConfig: DevServerConfig = {
  port: 8080,
  historyApiFallback: true,
};

const devConfig = (): Configuration => ({
  mode: "development",
  devServer: devServerConfig,
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: "marketing@http://localhost:8081/remoteEntry.js",
      },
      shared: packageJson.dependencies,
    }),
  ],
});

const paths = {
  templatePath: path.resolve(__dirname, "../public", "index.html"),
  entryPath: path.resolve(__dirname, "../src", "index.ts"),
};

export default merge(commonConfig(), devConfig());
