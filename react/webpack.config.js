const dev = process.env.NODE_ENV !== "production";
const path = require( "path" );
const FriendlyErrorsWebpackPlugin = require( "friendly-errors-webpack-plugin" );
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require( "mini-css-extract-plugin" );

const plugins = [
    new FriendlyErrorsWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin( {
        filename: "styles.css",
        chunkFilename: "[id].css",
    } ),
];
module.exports = {
    mode: dev ? "development" : "production",
    context: path.join( __dirname, "" ),
    devtool: dev ? "none" : "source-map",
    entry: {
        app: [ "./src/index.js" ],
    },
    resolve: {
        modules: [
            path.resolve( "./src" ),
            "node_modules",
        ],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: true,
                            localsConvention: "asIs",
                            modules: true,
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.css$/,
                use: [ "style-loader", "css-loader" ],
            },
        ],
    },
    output: {
        path: path.resolve( __dirname, "dist" ),
        filename: "[name].bundle.js",
    },
    plugins,
};