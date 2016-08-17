module.exports = {
  context: __dirname,
  entry: ['babel-polyfill', './src/main.js'],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  resolve: {
    alias: { monocle: __dirname + '/../../index.js' },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel' }
    ]
  },
  debug: true,
  devtool: '#source-map'
};
