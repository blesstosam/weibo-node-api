import open from "open";
import https from "https";
import qs from "qs";
import urlConfig, { ConfigItem } from "./config";

export interface WeiboOpts {
  appKey: string;
  appSecret: string;
  redirectUrl: string;
  secureDomain: string;
}

export class Weibo {
  readonly opts: WeiboOpts;

  // all the weibo api
  // https://open.weibo.com/wiki/%E5%BE%AE%E5%8D%9AAPI
  OAuth2: any;
  Statuses: any;
  Comments: any;
  Users: any;
  Friendships: any;
  Account: any;
  Favorites: any;
  Trends: any;
  Tags: any;
  Register: any;
  Search: any;
  Suggestions: any;
  Remind: any;
  Short_url: any;
  Notification: any;
  Common: any;
  Place: any;
  Location: any;

  constructor(opts: WeiboOpts) {
    this.opts = opts;
    for (let name in urlConfig) {
      //@ts-ignore
      let funcBody = urlConfig[name];
      //@ts-ignore
      this[name] = {};
      for (let index in funcBody) {
        //@ts-ignore
        this[name][funcBody[index].func] = this._createFun(funcBody[index]);
      }
    }
  }

  getGetParam(params?: Object) {
    let commonPath = `?${qs.stringify({
      client_id: this.opts.appKey,
      redirect_uri: this.opts.redirectUrl,
      client_secret: this.opts.appSecret
    })}`;
    if (params) return commonPath + "&" + qs.stringify(params);
    return commonPath;
  }

  getPostParam(params?: { [key: string]: string }) {
    params = params || {};
    params.client_id = this.opts.appKey;
    params.redirect_uri = this.opts.redirectUrl;
    params.client_secret = this.opts.appSecret;
    return params;
  }

  // authorize to get authorize code
  authorize() {
    let path = "https://api.weibo.com/oauth2/authorize" + this.getGetParam();
    open(path);
  }

  _createFun(
    urlParams: ConfigItem
  ): (param: { [key: string]: string }) => Promise<any> {
    let _this = this;
    return function(pJson) {
      let options: { [key: string]: any } = {},
        postData = "";
      options.hostname = urlParams.host.replace("https://", "");
      options.port = 443;
      options.path = urlParams.path;

      if (urlParams.rmethod[0] === "GET") {
        options.path = options.path + _this.getGetParam(arguments[0]);
        options.method = "GET";
      } else {
        options.method = "POST";
        options.rejectUnauthorized = false;
        const jsonAgrs = _this.getPostParam(pJson);
        postData = qs.stringify(jsonAgrs);
        options.headers = {
          "Content-Type": "application/x-www-form-urlencoded",
          "Content-Length": postData.length
        };
      }

      return new Promise((reslove, reject) => {
        const req = https.request(options, function(res) {
          let fullData = "";
          res.on("data", function(data) {
            fullData += data;
          });

          res.on("end", function() {
            let buf = Buffer.from(fullData);
            let jsonData = {};
            if (buf) {
              try {
                //@ts-ignore
                jsonData = JSON.parse(buf);
              } catch (e) {
                throw new Error(`server error, ${e}`);
              }
            }

            reslove(jsonData);
          });
        });

        req.on("error", function(e) {
          reject(e);
          throw new Error(`request error, ${e}`);
        });

        req.end(postData);
      });
    };
  }
}
