var path =require('path')
var webpack =require('webpack')

module.exports = {
    devtool:'cheap-module-eval-source-map',
    entry: './index',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',//在webpack的module部分的loaders里进行配置即可
                query: {
                    presets: ['es2015','react'],
                    plugins: [
                             ['import', { libraryName: 'antd', style: 'css' }],
                          ]
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'//添加对样式表的处理
            }
        ]
    }

}