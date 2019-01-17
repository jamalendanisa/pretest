module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    },
    mode: "development",
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            loader: "babel-loader",
            options: { presets: ["@babel/env"] }
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          }
        ]
      },
    devServer: {
        port: 9009
    }
};