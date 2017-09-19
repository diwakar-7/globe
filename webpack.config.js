var path = require('path');

module.exports = {
	entry: './src/js/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader'
			}
		]
	}
};