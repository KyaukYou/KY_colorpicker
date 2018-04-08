const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
	entry: ['./script/myColor.js','./script/var.js','./script/dom.js','./script/color.js','./script/run.js'],
	devtool: 'inline-source-map',
	// plugins: [
	// 	new CleanWebpackPlugin(['dist']),
	// 	new HtmlWebpackPlugin({
	// 		title: 'colorpicker'
	// 	})
	// ],
	output: {
		filename: 'color.js',
		path: path.resolve(__dirname,'dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'flie-loader'
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.(csv|tsv)$/,
				use: [
					'csv-loader'
				]
			}
		]
	}
}