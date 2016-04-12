# webpack
____

## Hello webpack

*先和其他依赖node模块的工具一样，`npm init` 建一个 package.json文件.
* `npm install webpack --save-dev`  安装wbepack
* 最简单的打包方法 `webpack src/entry.js build/build.js`, webpack 要打包的js文件 打包完生成的js文件
* 新建另一个first.js文件，在第一个js文件里引入`require('first')`;再次运行打包。此时两个js文件会被合并成一个

##

##loader
各种loader
 
		css-loader
		style-loader
		
装需要的`loader`插件,再配合webpack.config.json打包

## webpack.config.json

先引入webpack

	var webpack = require('webpack')

	用module.exprots = {} 暴漏给webpack执行调用

	module.exports = {
	    entry : ['./src/entry.js'],
	    output : {
	        path : __dirname,
	        filename : './build/build.js'
	    },
	    module : {
	        loaders : [
	            {test : /\.css$/, loader : 'style!css'}
	        ]
	    }
	};
	
**entry** 代表入口文件

**output** 输出文件

* path 输出文件路径
* filename 文件名

**module**
* 对模块处理的逻辑
* 一般是定义一堆的loader


## 各种loader

* **加载图片**
	* url-loader
	
### package.json
	{
	  "name": "webpack+vue",
	  "version": "1.0.0",
	  "description": "vue+webapck",
	  "main": "index.js",
	  "scripts": {
	    "test": "echo \"Error: no test specified\" && exit 1",
	    "start": "webpack-dev-server --inline"
	  },
	  "dependencies": {
	    "vue": "^1.0.21"
	  },
	  "devDependencies": {
	    "babel": "^6.5.2",
	    "babel-core": "^6.7.6",
	    "babel-loader": "^6.2.4",
	    "babel-plugin-transform-runtime": "^6.7.5",
	    "babel-runtime": "^6.6.1",
	    "css-loader": "^0.23.1",
	    "file-loader": "^0.8.5",
	    "html-loader": "^0.4.3",
	    "node-less": "^1.0.0",
	    "postcss-loader": "^0.8.2",
	    "style-loader": "^0.13.1",
	    "url-loader": "^0.5.7",
	    "vue-html-loader": "^1.2.2",
	    "vue-loader": "^8.2.2",
	    "webpack": "^1.12.15",
	    "webpack-dev-server": "^1.14.1"
	  },
	  "author": "zhangxinxin",
	  "license": "MIT",
	  "keywords": [
	    "vue",
	    "webpack"
	  ]
	}

### webpack.config.js

	var path = require('path');
	
	module.exports = {
	    entry: './src/main.js',
	
	    output: {
	        path: path.join(__dirname, './dist'),
	        filename: 'index.js',
	        publicPath: '/dist/'
	    },
	
	    devServer: {
	        historyApiFallback: true,
	        hot: false,
	        inline: true,
	        grogress: true,
	    },
	
	    module: {
	        loaders: [
	            { test: /\.css$/, loader: 'style!css' },
	            { test: /\.vue$/, loader: 'vue' },
	            { test: /\.less$/, loader: 'style!css!less' },
	            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
	            { test: /\.html$/, loader: 'html' }
	        ]
	    },
	
	    vue: {
	        loaders: {
	            css: 'style!css!postcss'
	        }
	    },
	
	    resolve: {
	        extensions: ['', '.js', '.vue'],
	        alias: {
	            filter: path.join(__dirname, './src/filters'),
	            components: path.join(__dirname, './src/components')
	        }
	    }
	};
