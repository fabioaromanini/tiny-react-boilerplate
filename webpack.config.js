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
			{ test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
      title: 'My Bolerplate',
      template: 'src/index.html'
    })
	],
	mode: 'development'
};
