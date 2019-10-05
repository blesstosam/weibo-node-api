import test from "ava";
import { Weibo } from "../index";

// my test appkey
const cfg = {
  appKey: "2178887180",
  appSecret: "bdb36bac9ce99f78aeb6a2f204c9b8e1",
  redirectUrl: "http://blesstosam.github.io",
  secureDomain: "http://www.github.com"
};

// Todo fix test
// when open brower, the test closed
test("weibo_sdk_test", async t => {
  const weibo = new Weibo(cfg);
  weibo.authorize();

  const data = await weibo.OAuth2.access_token({
    code: "704c848903c8ef32d05e10086859a517",
    grant_type: "authorization_code"
  });

  // console.log(data)

  t.truthy(data.access_token);

  const resp = await weibo.Statuses.share({
    source: weibo.opts.appKey,
    access_token: data.access_token,
    status: `just for test! ${encodeURI(weibo.opts.secureDomain)}`
  });

  // console.log(resp)

  t.truthy(resp.id);
});
