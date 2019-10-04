import open from "open";
import https from "https";
import qs from "qs";
import urlConfig from "./config";

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
        this[name][funcBody[index].func] = this._createFunc(funcBody[index]);
      }
    }
  }

  getGetParam(paras?: Object) {
    let commonPath = `?${qs.stringify({
      client_id: this.opts.appKey,
      redirect_uri: this.opts.redirectUrl,
      client_secret: this.opts.appSecret
    })}`;
    if (paras) return commonPath + "&" + qs.stringify(paras);
    return commonPath;
  }

  getPostParam(paras?: any) {
    paras = paras || {};
    paras.client_id = this.opts.appKey;
    paras.redirect_uri = this.opts.redirectUrl;
    paras.client_secret = this.opts.appSecret;
    return paras;
  }

  // authorize to get authorize code
  authorize() {
    let path = "https://api.weibo.com/oauth2/authorize" + this.getGetParam();
    open(path);
  }

  _createFunc(urlParas: any) {
    let _this = this;
    return function(pJson: Object, callback: Function) {
      let options: any = {},
        postData = "";
      options.hostname = urlParas.host.replace("https://", "");
      options.port = 443;
      options.path = urlParas.path;

      if (urlParas.rmethod[0] === "GET") {
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
          callback(jsonData);
        });
      });

      req.end(postData);
      req.on("error", function(e) {
        throw new Error(`request error, ${e}`);
      });
    };
  }
}
