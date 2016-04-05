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
	*  