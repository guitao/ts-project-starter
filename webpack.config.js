const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackLib = require('./webpack.lib.js');
const packageJson = require('./package.json');

const PATHS = {
    SRC: path.join(__dirname, 'src/main.ts'),
    BUILD: path.join(__dirname, 'build'),
    TEST: path.join(__dirname, 'test')
}

const commonConfig = {
    entry: {
        main: PATHS.SRC,
    },
    output: {
        path: PATHS.BUILD,
        filename: '[name].js'
        // publicPath: '/build/assets/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: packageJson.name
        })
    ]
}


// npm run build 
const productionConfig = merge([]);

// npm start
const developmentConfig = merge([
    webpackLib.devServer({
        host: process.env.host,
        port: process.env.port
    }),
    // Turn on sourcemaps
    {
        devtool: 'source-map',
    },
    // webpackLib.clean(PATHS.BUILD),
    webpackLib.ts(),
    // webpackLib.loadImageInfo()
    webpackLib.loadImage(),
    webpackLib.banner("/* this is banner */"),
    webpackLib.uglifyJS()
]);

// npm run test
const testConfig = merge([

]);




// module.exports = {
//     entry: SRC_PATH,
//     output: {
//         path: BUILD_PATH,
//         // publicPath: '/',
//         filename: 'bundle.js'
//     },
//     // Turn on sourcemaps
//     devtool: 'source-map',
//     resolve: {
//         extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
//     },
//     // Add minification
//     plugins: [
//         new webpack.optimize.UglifyJsPlugin({
//             compress: {
//                 warnings: false
//             }
//         })
//     ],
//     module: {
//         rules: [
//             { test: /\.tsx?$/, loader: 'ts-loader' }
//         ],

//     },

// }

module.exports = (env) => {
    console.log('env', env);
    switch (env) {
        case 'production':
            return merge(commonConfig, productionConfig);
            break;
        case 'development':
            return merge(commonConfig, developmentConfig);
            break;
        case 'test':
            return merge(commonConfig, testConfig);
            break;

        default:
            throw new Error('need pass env param to production / development / test');
            break;
    }

}