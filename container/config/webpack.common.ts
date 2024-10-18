import { Configuration } from "webpack";

export default (entryPath: string): Configuration => {
  const config: Configuration = {
    entry: entryPath,
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
  };

  return config;
};
