const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

exports.devServer = ({ host, port } = {}) => ({
    devServer: {
        // contentBase: path.join(__dirname,'build'),
        // compress: true,
        watchContentBase: true,
        historyApiFallback: true,
        // stats: 'errors-only',
        host, // Defaults to `localhost`
        port, // Defaults to 8080
        // overlay: {
        //     errors: true,
        //     warnings: true,
        // },
        // contentBase: "./build/" //static server根目录
    },
});

exports.ts = () => ({
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                // conditions
                test: /\.tsx?$/,

                // restrictions
                include: path.join(__dirname, 'src'),

                // actions
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            // compilerOptions: {}, // override tsconfig.json
                        }
                    },

                ]
            }
        ]
    }
});

exports.loadImageInfo = () => ({

    module: {
        rules: [
            {
                test: /\.(gif|jpeg|jpg|png|svg)$/,
                loader: 'image-size-loader',
                // loader: 'file-loader',
                options: {
                    name: 'images/[name]_[hash:8].[ext]'
                }
            }
        ]
    }

})

exports.loadImage = () => ({
    module: {
        rules: [
            {
                test: /\.(gif|jpeg|jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name]_[hash:8].[ext]'
                }
            }
        ]
    }

})

exports.clean = (path) => ({
    plugins: [
        new CleanWebpackPlugin([path]),
    ]
})


exports.banner = (str) => ({
    plugins: [
        new webpack.BannerPlugin({ banner: str, raw: true })
    ]
})


// copy-webpack-plugin

exports.uglifyJS = () => ({
    plugins: [
        new UglifyJSPlugin()
    ]
})

