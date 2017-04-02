/**
 * Created by kingj on 2017/4/2.
 */
var path = require('path');

var config = {
    //程序运行端口
    port:3000,
    //信任的代理ip
    proxy:'loopback, 127.0.0.1',
    // debug 为 true 时，用于本地调试
    debug: true,
};

module.exports = config;