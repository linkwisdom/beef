beef -- 牛排



-- 解决前后端模块化公用；面向前端modules标准化模块，支持前端模块在服务复用

# Features
 * 支持标准模块加载器, requirejs, esl, seajs
 * 支持常用插件形式, text, json, less, css
 * 支持自定义扩展插件 require.plugin
 * 支持自定义路由配置

 ```js

global.require = require('beef');

// 自定义路由
require.config({
    baseUrl: './source',
    packages: {
        'admin': '../admin'
    }
});

// 自定义扩展插件
require.plugin.ext = function (filename) {
    return require(filename);
};

 ```

 
 使用方法

 ```js

// 同步require 方式
var mod = require('./mod');

// 异步调用方式
require(['./amd'], function(amd) {
    console.log(amd);
});

// 利用插件读取
var text = require('text!./text.txt');

console.log(text);

```

  ![fresh beef](http://image4.buy.ccb.com/images/59288134/1373701097874_3.jpg)
