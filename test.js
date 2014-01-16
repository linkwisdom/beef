// 只有在入口文件才采用侵入方式
var require = require('../src/require');

require(['./amd'], function(amd) {
    console.log(amd);
});

var text = require('text!./text.txt');

console.log(text.toString());



