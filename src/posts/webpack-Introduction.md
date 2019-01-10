---
title: 30分钟快速了解webpack
date: 2018-1-10
tags: [JavaScript, NodeJs, Performance]
description: 前言——webpack现在已成为前端自动化、模块化不可或缺的一款工具，我们可以把它看做是一种模块打包机，它来分析你的项目结构、找到JS模块以及一些浏览器不能直接运行的拓展语言（如SASS、LESS等），然后将其打包为合适的格式供浏览器使用......
---
 前言——webpack现在已成为前端自动化、模块化不可或缺的一款工具，我们可以把它看做是一种模块打包机，它来分析你的项目结构、找到JS模块以及一些浏览器不能直接运行的拓展语言（如SASS、LESS等），然后将其打包为合适的格式供浏览器使用......
 
 首先要确保你的计算机安装了[nodeJS](https://nodejs.org/en/)然后我们就可以开始我们的webpack之路了~~~先来按照如下步骤创建个项目吧：
<!-- more -->

### 1. 初始化package.json文件
```
npm init -y
```
### 2. 下载webpack,在4.0版本需要下载两个包webpack和webpack-cli(-D的意思是开发环境依赖)
```
npm install webpack webpack-cli -D
```
### 3. 这里插一句，在下面的步骤中童鞋们不要忘记install依赖的模块和插件哦！
### 4. 创建一个webpack配置文件webpack.config.js
```
const path = require('path');
module.exports = {
    entry:'',
    output:{

    },
    module:{

    },
    plugins:{

    },
    devServer:{
        
    }
}
```
这里先说下几个核心的配置
- entry：入口；这是使用webpack的第一步，定义一个入口文件，相当于输入（单个或多个）
- output:出口；也就是打包后文件输出到哪里，可以是定义一个文件也可以定义一个目录；path：定义一个路径（绝对路径） filename:打包后的文件名；假如是多个入口文件我们应该这样写：filename:'[name].[hash].js'
```
entry:'../main.js',
output:{
    path:path.join(__dirname,'../dist'),
    filename:'bundle.js'
},
```
- loader：模块转换器；来把以前的模块内容转换为新的JS内容靠的就是loader
- module：在这里配置模块规则，webpack打包模块靠的就是这里定义的模块规则,我们在module中配置一些规则rules，这里暂且以转换CSS文件为例：

(1) test:这里是一个正则用于匹配转换的文件(这里是以.css后缀结尾的文件)

(2) loader:如果你只需要一个loader来处理那么就传一个字符串，如果有多个则写一个数组（这里需要两个css-loader解析css里的路径如背景图路径等等，style-loader用来把css文件内容变为style标签并插入）转换的时候是按数组从右往左去转换的。
```
module:{
    rules:[
        {
            test:/\.css$/,
            loader:['style-loader','css-loader']
        }
    ]
}
```
- plugins：插件；webpack打包会有各种各样的事件，通过注册插件来处理这些事件，在构建流程中的特定时机注入扩展逻辑来做一些事情。这里我们以html-webpack-plugin这个插件为例，用它来根据模板来生成html文件到目标目录下,在配置前不要忘记安装这个插件,同时也不要忘记require这个插件！
```
npm install html-webpack-plugin -D
```
使用的时候使用new关键字，同时可以传递参数
(1)template:指定产出的html模板

(2)filename:产出html文件名

(3)hash:在引入的JS文件加入查询字符串避免缓存

(4)minify:压缩

我们也可以按需引入其他的变量参数
```
plugins:[
    new HtmlWebpackPlugin({
        template:'./src/index.html',
        filename:'index.html',
        title:'入门webpack',
        hash:true,
        minify:{
            removeAttributeQuotes:true
        }
    })
]
```

- devServer：开发服务器，这里我们来配置下开发服务器用来预览打包后的项目:首先找到package.json添加一个脚本,在scripts下添加
```
"dev":"webpack-dev-server --open --mode development"
```
这样我们就可以使用npm run dev来启动项目了,我们还需要在webpack.config.js中的devServer中来配置:

(1) contentBase:配置静态文件根目录，也就是你打包后的目录
(2) host:主机(这里使用localhost)
(3) port:端口(默认8080)
(4) compress:服务器返回浏览器是否使用gzip压缩(布尔值)
```
devServer:{
    contentBase:'../dist',
    host:'localhost',
    port:'8080',
    compress:true
}
```
> 在使用webpack-dev-server启动服务后，会注入一个websocket客户端，主要用来检测到我们修改内容后通知webpack来重新编译并刷新页面。

截止到这里，已经可以配置一个简单的webpack用来打包啦，不过这只是一个入门级的，在实际项目中还远远不够，到这里如果你还有兴趣，请继续往下走~~

#### 更多的配置
1. entry以及output进阶。在项目中我们可能会有这种需求，那就是配置多个入口文件，这就涉及到了一个出口文件的命名问题。
```
entry: {
    index: './src/index.js',
    main:'./src/main.js'
},
output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:8].js',
}
```
当我们有多入口的时候，出口文件应该像这样命名，并且可以定义一个hash值，并且可以使用冒号加数字来规定hash的长度。
2. 图片的支持问题。我们可以使用两个loader来处理图片的打包问题，第一个是file-loader来解决CSS等文件中的引入图片路径问题，第二个是url-loader当图片较小的时候会把图片BASE64编码。
```
{
    test:/\.(jpg|png|gif|svg)$/,
    use:'file-loader',
    include:path.join(__dirname,'./src'),
}
```
3. 编译less和sass,这里同样是配置规则来处理；
```
const cssExtract=new ExtractTextWebpackPlugin('css.css');
const lessExtract=new ExtractTextWebpackPlugin('less.css');
const sassExtract=new ExtractTextWebpackPlugin('sass.css');
{
    test:/\.less$/,
    use: lessExtract.extract({
        use:['css-loader','less-loader']
    }),
    include:path.join(__dirname,'./src'),
    exclude:/node_modules/
},
{
    test:/\.scss$/,
    use: sassExtract.extract({
        use:['css-loader','sass-loader']
    }),
    include:path.join(__dirname,'./src'),
    exclude:/node_modules/
},
```
4. 转义ES6和ES7及JSX。我们使用babel来转义：
```
{
    test:/\.jsx?$/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ["env","stage-0","react"]
        }
    },
    include:path.join(__dirname,'./src'),
    exclude:/node_modules/
},
```
5. devServer配置服务器代理，这个在项目中应该是非常常用的了，我们需要配置一个proxy属性，大多数时候我们在开发中处理跨域也需要用这个去请求后台接口:
```
proxy: {
    '/api': {
        target: 'http://172.1.1.1:5000',
        pathRewrite: {'^/api' : '/api'},
        changeOrigin: true
    }
}
```
target的值就是你要请求的IP地址，可以按需自行配置。
在进阶中的代码中，有配置loader的地方加了一个exclude属性，这个的作用主要是指定哪些目录下的文件不需要进行loader转换。暂且说这么多吧，一时就想起了这么多，有需要的可以留言一起探讨，下面再介绍些常用的loader和plugin吧~~

如有使用vue的项目可以配置如下module规则，不需要的可自行删减
```
module: {
    rules: [
        {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    css: 'vue-style-loader!css-loader',
                    less: 'vue-style-loader!css-loader!less-loader'
                },
                postLoaders: {
                    html: 'babel-loader'
                }
            }
        },
        {
            test: /iview\/.*?js$/,
            loader: 'happypack/loader?id=happybabel',
            exclude: /node_modules/
        },
        {
            test: /\.js$/,
            loader: 'happypack/loader?id=happybabel',
            exclude: /node_modules/
        },
        {
            test: /\.js[x]?$/,
            include: [resolve('src')],
            exclude: /node_modules/,
            loader: 'happypack/loader?id=happybabel'
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader?minimize', 'autoprefixer-loader'],
                fallback: 'style-loader'
            })
        },
        {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader?minimize','autoprefixer-loader', 'less-loader'],
                fallback: 'style-loader'
            }),
        },
        {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader?limit=1024'
        },
        {
            test: /\.(html|tpl)$/,
            loader: 'html-loader'
        }
    ]
}
```

#### 常用plugin简单介绍

- extract-text-webpack-plugin:此插件用来抽离css样式，假如你的css样式表很大推荐使用这个，以防止打包在js中引起样式错乱.
- [copy-webpack-plugin](https://www.npmjs.com/package/copy-webpack-plugin):在webpack中拷贝文件和文件夹
- [clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin):用于在打包前先清空输出目录
- [happypack](https://www.npmjs.com/package/happypack):并行转换文件，可以更加快速的构建
- webpack.optimize.CommonsChunkPlugin:用于提取公共代码
- webpack.DefinePlugin:用于创建一个可以配置的全局变量，便于开发模式和发布模式的构建
- webpack.optimize.UglifyJsPlugin:用来压缩你的js代码

> 暂时就写到这里了，可以做一个入门了解，webpack还有好多好多东西....有时间整理下再继续更新~~
