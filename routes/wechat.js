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
//    res.reply('Hello world!');   每一次只能回复一条，多余报错
    var message = req.weixin;
    if(message.Content == '1'){
        res.reply('壹');
    }
    else if(message.Content == '2'){
        res.reply('贰');
    }
    else{
        res.reply('自动回复生效！');
    }
}));

module.exports = router;
