import test from "ava";
import { Weibo } from "../weibo-sdk/index";
import { WeiboClient } from "../weibo";

// my test appkey
const cfg = {
  appKey: "2178887180",
  appSecret: "bdb36bac9ce99f78aeb6a2f204c9b8e1",
  redirectUrl: "http://blesstosam.github.io",
  secureDomain: "http://www.github.com"
};

// Todo fix test
// when open brower, the test closed
test.skip("weibo_sdk_test", t => {
  const weibo = new Weibo(cfg);
  weibo.authorize();

  weibo.OAuth2.access_token(
    {
      code: "3713366ba477464c7250d41794404c7b",
      grant_type: "authorization_code"
    },
    (data: any) => {
      t.truthy(data.access_token);

      weibo.Statuses.share(
        {
          source: weibo.opts.appKey,
          access_token: data.access_token,
          status: encodeURI(`just for test! ${weibo.opts.secureDomain}`)
        },
        (resp: any) => {
          t.truthy(resp.id);
        }
      );
    }
  );
});
