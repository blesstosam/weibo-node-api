[![CircleCI](https://circleci.com/gh/puncsky/typescript-starter.svg?style=svg)](https://circleci.com/gh/puncsky/typescript-starter)

# Weibo-node-api: a nodejs weibo sdk

Purposes:

- Use weibo sdk easily

# weibo-node-api

weibo-node-api 是对新浪微博的 API 的封装，基于 Node.js，认证方式采用 OAuth2.

#### 安装

##### npm install weibo-node-api

#### 一、API 使用说明

    (1)阅读新浪微博的API文档 http://open.weibo.com/wiki/%E5%BE%AE%E5%8D%9AAPI

    (2)新建实例
    const weibo = new Weibo(opts)

    (3)请求授权接口作为单独的接口，即在weibo实例上Weibo.authorize();
    (4)浏览：http://open.weibo.com/wiki/%E5%BE%AE%E5%8D%9AAPI
       如上图所示，是API的命名方式.
       +---------
       比如1：需要使用“OAuth2授权接口”，点击链接到页面底部，看到“OAuth2”，那么OAuth2就是一个类，
       即Weibo.OAuth2.
       则Weibo.OAuth2的获取access_token的方法是：Weibo.OAuth2.access_token;
       则授权查询是：Weibo.OAuth2.get_token_info.
       类：OAuth2
       方法：access_token
       +---------
       比如2：需要使用“微博接口”,那么该类的名称是Statuses.
       则返回最新的公共微博是：public_timeline.
       整个方法的调用是Weibo.Statuses.public_timeline.
       类：Statuses
       方法：public_timeline
       +---------

       所有类和函数命名方式尊重新浪微博API方式，以此类推.
    (5)所有方法两个参数，第一参数是该接口的参数(json对象格式，不含setting.json中的配置参数)

#### 二、example 说明

    /*
    +-------------------------------------------------
    (1)注册账号：http://open.weibo.com/
    (2)配置回调url地址和安全域名地址（这两点非常重要）。
    +-------------------------------------------------
    */

    const Weibo = require('weibo-node-api');

    // 首次调用接口前需初始化Weibo类，传入配置信息
    const weibo = new Weibo({
      appKey: "2178887180",
      appSecret: "bdb36bac9ce99f78aeb6a2f204c9b8e1",
      redirectUrl: "http://blesstosam.github.io",
      secureDomain: "http://www.github.com"
    });

    /*
    +-------------------------------------------------
    1：开启微博认证
    启动认证后，将在浏览器器打开一个窗口，url中含有code参数
    +-------------------------------------------------
    */

    weibo.authorize();

    /*
    +--------------------------------------------------
    2：需要获取access_token
    (1)阅读微博开放平台API
       如：http://open.weibo.com/wiki/OAuth2/access_token，
    (2)code是您浏览器窗口获得的code。
    +---------------------------------------------------
    */

    weibo.OAuth2.access_token(
    {
      code: "3713366ba477464c7250d41794404c7b",
      grant_type: "authorization_code"
    },
    (data) => {
      console.log(data)
    }

);

    /*
    +--------------------------------------------------
    例3：调用API
    (1)发微博api
       如：https://open.weibo.com/wiki/2/statuses/share，
    (2)在回调中打印出获取的数据
    +---------------------------------------------------
    */

    weibo.Statuses.share(
      {
        source: weibo.opts.appKey,
        access_token: data.access_token,
        status: encodeURI(`just for test! ${weibo.opts.secureDomain}`)
      },
      (resp: any) => {
        console.log(resp)
      }
    );

#### 三、测试 appkey

(1)如需开发，请自行申请微博开放平台的开发者账号信息。  
(2)提供 appkey 仅为测试所用，勿用于实际开发，否则我更改了账号信息会影响您的应用正常使用。  
(3)测试的应用信息如下。

```
{
  "appKey":"2178887180",
  "appSecret":"bdb36bac9ce99f78aeb6a2f204c9b8e1",
  "redirectUrl":"127.0.0.1:3000"
}
```

#### 四、API 文档

[API 文档](https://open.weibo.com/wiki/%E5%BE%AE%E5%8D%9AAPI)
