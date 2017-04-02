/**
 * Created by kingj on 2017/4/2.
 */
//路由主入口
module.exports = function (app) {
    app.use('/',require('./login'));
    app.use('/weblist',require('./weblist'));
};


