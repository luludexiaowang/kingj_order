/**
 * Created by kingj on 2017/4/2.
 */
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

//配置文件地址
var config = require('./config/config');

// 指定子网和IP地址
app.set('trust proxy', config.proxy);
// 静态地址设置
app.use(express.static(path.join(__dirname, 'public')));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//指定路由入口
var routes = require('./routes/index');
routes(app);
// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

if(!module.parent){
    app.listen(config.port,function () {
        console.log(`listening on port ${config.port}`);
    });
}

module.exports = app;