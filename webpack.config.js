const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry:  {
		bundle: './src/index.js',
		vendor: [ 'lodash', 'react', 'react-dom' ],
	},
	output: {
 		path: path.join(__dirname, 'dist'),
		filename: '[name].[chunkhash].js',
	},
	module: {
		rules: [
			{ test: /\.(jsx|js)$/, exclude: /node_modules/, use: 'babel-loader' },
		]
	},
  resolve: {
    extensions: ['.js', '.jsx' ],
  },
	plugins: [
		new HtmlWebpackPlugin({
      title: 'My Bolerplate',
      template: 'src/index.html'
    })
	],
	mode: 'development',
};
