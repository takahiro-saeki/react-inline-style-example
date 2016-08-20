import webpack from 'webpack';
import path from 'path';

const env = process.env.NODE_ENV;
const PATH = {
  INPUT: './assets/js/common.js',
  OUTPUT:'./template/js/main.js'
}

export default {
  entry: PATH.INPUT,
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  output: {
    path: __dirname,
    filename: PATH.OUTPUT
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-class-properties']
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ]
};
