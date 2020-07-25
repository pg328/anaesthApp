var HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    optimization: {
        minimizer: [new TerserPlugin(), new OptimizeCssAssetsPlugin()]
    },
    entry: {
        anaesthapp: "./src/js/index.js",
        polyfill: '@babel/polyfill',
        bootstrap: "./src/js/bootstrap_import.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.html/,
                use: ["html-loader"]
            },
			{
				test: /\.(ico|png|svg|eot|woff|woff2|ttf)/,
                loader: 'file-loader',
				options: {
					name: "[name].[ext]",
					outputPath: "img"
				}
			}
        ]
    },
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/anaesthapp.html"
		})
	]
};
