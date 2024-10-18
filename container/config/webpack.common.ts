import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

const paths = {
  templatePath: path.resolve(__dirname, "../public", "index.html"),
  entryPath: path.resolve(__dirname, "../src", "index.ts"),
};

export default (): Configuration => {
  const config: Configuration = {
    entry: paths.entryPath,
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: paths.templatePath,
      }),
    ],
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
  };

  return config;
};
