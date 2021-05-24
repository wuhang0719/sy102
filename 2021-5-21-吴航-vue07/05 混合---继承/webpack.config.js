//暴露接口
module.exports = {
    // resolve配置webpack如何查找文件
    resolve: {
        //扩展名
        extensions: ['.js','.vue'],
        //配置别名
        alias: {
            // 注意此时的'/'为E盘
            vue$: '/node_modules/vue/dist/vue.js'

        }
    },
    //入口文件
    entry: {
        "main": "./modules/main.js",
    },
    //出口配置
    output: {
        // 输出目录改为当前目录
        // path:__dirname,
        //文件名
        filename: "[name].js"
    },
    //加载机
    module: {
        //匹配规则
        rules: [
            //ES6
            {
                test: /\.js$/,
                loader: 'babel-loader',
                //排除文件夹
                exclude: '/node_modules',
                //包含指定的文件夹
                include: '/modules',
                options: {
                    presets: ['env']
                }
            },
            // vue
            {
                test:/\.vue$/,
                loader: 'vue-loader'
            },
            // css
            {
                test: /\.css$/,
                // loader: 'style-loader!css-loader'
                use: ['style-loader', 'css-loader']
            },
            // scss
            {
                test: /\.scss$/,
                // loader: 'style-loader!css-loader'
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            // less
            {
                test: /\.css$/,
                // loader: 'style-loader!css-loader'
                use: ['style-loader', 'css-loader', 'less-loader']
            },
        ]
    },
    // 模式
    mode: 'development',
    // 通过devServer配置项为webpack-dev-server写配置
    devServer: {
        // 配置域名
        host: 'localhost',
        // 配置端口号
        port: 8080,
        // 是否打开浏览器
        open: true,
        // 代理
        proxy: {
            // 存在多个被代理的请求
            // 键代表请求的地址，值代表请求的配置
            '/data/sy102': {
                // 目标路径
                target: 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg',
                // 是否重写路径
                pathRewrite: {
                    changeOrigin: true,
                    '^/data/sy102' : '',
                },
                // https是否教验
                secure: false
            },
        }
    },
}