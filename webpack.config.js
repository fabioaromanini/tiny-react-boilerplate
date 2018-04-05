const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
 		path: path.join(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{ test: /\.(jsx|js)$/, exclude: /node_modules/, use: 'babel-loader' },
		]
	},
  resolve: {
    extensions: ['.js', '.jsx']
  },
	plugins: [
		new HtmlWebpackPlugin({
      title: 'My Bolerplate',
      template: 'src/index.html'
    })
	],
	mode: 'development'
};
