// const HtmlWebpackPlugin  = require('html-webpack-plugin');
module.exports = {
    devtool : 'eval-source-map',
    entry : {
        app : __dirname + '/app/main.js',
        search : __dirname + '/app/test.js'
    },
    output : {
        path : __dirname + '/public/',
        filename : '[name].js',
        libraryTarget : 'this',
        auxiliaryComment : 'zgh'
    },
    // plugins : [
    //     new htmlWebpackPlugin ()
    // ],
    devServer :{
        //本地服务器所加载的页面所在的目录
        contentBase : "./public",
        //
        historyApiFallback : false,
        inline : true,
        port : '8081'
    }
};