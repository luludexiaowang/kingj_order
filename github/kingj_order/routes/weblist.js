/**
 * Created by kingj on 2017/4/2.
 */
express = require('express');
router = express.Router();

router.get('/wjorder',function (req, res, next) {
    res.render('weblist/wjorder');
});

module.exports = router;