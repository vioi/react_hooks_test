const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new htmlWebpackPlugin({
    template:'./src/main.html',  //指定要用到的入口main.html
    filename:'index.html' //指定生成的文件名，改文件存于内存中
})
module.exports = { 
    //webpack 定义打包入口和出口文件，直接写入磁盘。想要热更新，
    //使用webpack-dev-server，会在内存中生成一个打包好的js文件，进行高效更新
    mode:"development", //production
    entry: path.resolve(__dirname, './src/index.js'), //指定入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录
    output: {
        path: path.resolve(__dirname, './dist'), // 输出的路径
        filename: 'bundle.js'  // 打包后文件
    },
    plugins:[
        htmlPlugin
    ],
    module:{ //所有第三方模块的规则
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react'],
                    }
                },
                exclude: /node_modules/
            },
            
            { test: /\.css$/, use: [{ loader: 'style-loader' },{loader:'css-loader'}],exclude: /node_modules/}
        ]
    }
}

/**
 * html-webpack-plugins 该依赖用于将入口指定的html文件，映射到当前根目录的内存中，域名后，可以直接显示首页
 * webpack-dev-server 该依赖用于将入口js文件进行打包，映射到当前根目录的内存中，用于页面高效更新数据
 * 
 */