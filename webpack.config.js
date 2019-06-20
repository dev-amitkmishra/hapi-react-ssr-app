const dev = process.env.NODE_ENV !== "production";
const path = require ("path");
const {BundleAnalyzerPlugin} = require ("webpack-bundle-analyzer");
const FriendlyErrorsWebpackPlugin = require ("friendly-errors-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const plugins = [
    new FriendlyErrorsWebpackPlugin (),
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
];

if (! dev) {
    plugins.push (new BundleAnalyzerPlugin ({
        analyzerMode: "static",
        reportFilename: "webpack-report.html",
        openAnalyzer: false,
    }));
}

module.exports = {
    mode: "production",
    context: path.join (__dirname, "src"),
    devtool: dev? "none": "source-map",
    entry: {
        app: './client.js',
    },
    resolve: {
        modules: [
            path.resolve("./src"),
            "node_modules"
        ]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: / (node_modules | bower_components) /,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                        // you can specify a publicPath here
                        // by default it uses publicPath in webpackOptions.output
                        publicPath: '../',
                        hmr: 'production',
                        },
                    }, 'css-loader',
                ]
            }
        ]
    },
    output: {
        path: path.resolve (__dirname, "dist"),
        filename: "[name].bundle.js",
    },
    plugins
};