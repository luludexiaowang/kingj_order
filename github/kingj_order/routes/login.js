/**
 * Created by kingj on 2017/4/2.
 */
express = require('express');
var router = express.Router();

//GET 登陆页面
router.get('/',function (req, res, next) {
    res.render('login',{errorMsg: ''});
});

//POST 用户登陆
router.post('/',function (req, res, next) {
    let mobile = req.body.mobile;
    let password = req.body.password;
    if(mobile === 'wangjian' && password ==='123'){
        return res.redirect('/weblist/wjorder');
    }
    res.render('login', {errorMsg: '手机号或者密码错误'});
});


module.exports = router;