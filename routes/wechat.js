var express = require('express');
var router = express.Router();
var wechat = require('wechat');
var wechatApi = require('wechat-api');


var config={
    token:'wxexpress',
    appid:'wxeb76aa92a1398e2d',
    appsecret:'677b3785d5ccdb0a629905223dbb225d',
    encodingAESKey:'hFv18SQkjayHZSmkxxoPUiW6lJoVNgOY1aP6FURnE9F'
}

var api = new wechatApi('wxeb76aa92a1398e2d','677b3785d5ccdb0a629905223dbb225d');

router.use(express.query());

router.use('/',wechat(config,function(req, res, next){
    console.log(req.weixin);

    var menu = {
         "button":[
           {
             "type":"click",
             "name":"今日歌曲",
             "key":"V1001_TODAY_MUSIC"
           },
           {
             "name":"菜单",
             "sub_button":[
               {
                 "type":"view",
                 "name":"搜索",
                 "url":"http://m.iboxpay.com/"
               },
               {
                 "type":"click",
                 "name":"赞一下我们",
                 "key":"V1001_GOOD"
               }]
             }
         ]
    };
    api.createMenu(menu,function(data){console.log(data)});
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
