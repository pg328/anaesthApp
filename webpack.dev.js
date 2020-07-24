const path = require("path");
const common = require("./webpack.base");
const merge = require("webpack-merge");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common,  {
	mode: "development",
    devtool: "eval-cheap-module-source-map",
    devServer: {
        port: 8091
    },
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({filename: "[name].css"})
	],

	module: {


		rules: [
			{
				test: /\.css/,
				use: [MiniCssExtractPlugin.loader,
					//'style-loader', // 2nd step: Add JS styles to bundle.js
					'css-loader' // 1nd step: css to Javascript
				]
			},
			{
				test: /\.scss/,
				use: [MiniCssExtractPlugin.loader,
					//'style-loader', // 3rd step: Add JS styles to bundle.js (Otherwise used 'style-loader')
					'css-loader', // 2nd step: css to Javascript
					'sass-loader' // 1st step: Sass (scss) to css
				]
			}
		]

	}
});
