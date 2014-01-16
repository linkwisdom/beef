// 只有在入口文件才采用侵入方式
var require = require('../src/require');

require(['./source/amd'], function(amd) {
    console.log(amd);
});

var text = require('text!./source/text.txt');

console.log(text);


var css = require('css!./source/style.less');

console.log(css);