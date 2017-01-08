var express = require('express');
var router = express.Router();
var wechat = require('wechat');


var config={
    token:'wxexpress',
    appid:'wxeb76aa92a1398e2d',
    appsecret:'677b3785d5ccdb0a629905223dbb225d',
    encodingAESKey:'hFv18SQkjayHZSmkxxoPUiW6lJoVNgOY1aP6FURnE9F'
}

router.use(express.query());

router.use('/',wechat(config,function(req, res, next){
    console.log(req.weixin);
    console.log('dddd');
    res.reply('Hello world!');
    var message = req.weixin;
    if(message.Content === '1'){
        res.reply('hhe');
    }
}));

module.exports = router;
