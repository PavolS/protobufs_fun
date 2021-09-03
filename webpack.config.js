const path = require('path');

module.exports = {
    target: "node",
    node: {
        __dirname: false,
    },    
    externals: {
        fs: "require('fs')",
        readline: "require('readline')",
    },    
  entry: './toy-example.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.node$/,
        loader: "node-loader",
      },      
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },  
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};