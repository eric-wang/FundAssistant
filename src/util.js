import $ from 'jquery';

export default {
  url : {
    market: ''
  },

  jsonp: function (config, data, successCallback, failedCallback) {
    let url = config;
    if(typeof (config) == 'object'){
      url = config.url;
    }

    $.ajax({
      url: url,
      type: "GET",
      data: data || {},
      jsonp: config.jsonp || "callback",
      jsonpCallback: config.jsonp || 'callback',
      dataType: 'jsonp',
      scriptCharset: config.scriptCharset || 'utf-8',
      timeout: 10000,
      success: function (data) {
        if(successCallback){
          successCallback(data);
        }else{
          console.log(data);
        }
      },
      error: function (error) {
        if(failedCallback){
          failedCallback(error);
        }else{
          console.error(error);
        }
      }
    });
  },

  // http://hq.sinajs.cn/list=fu_001256,fu_001878
  getStock: function (code, successCallback, failedCallback) {
    let timeout = null;
    let headNode = document.getElementsByTagName('head')[0];
    let url = "http://hq.sinajs.cn/list=fu_"+code;
    let scriptNode = document.createElement('script');
    scriptNode.setAttribute('src', url);
    scriptNode.onload = scriptNode.onreadystatechange = function() {
      if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete" ) {
        scriptNode.onload = scriptNode.onreadystatechange = null;
        if(successCallback){
          if(timeout){
            clearTimeout(timeout);
          }

          successCallback(window['hq_str_fu_'+code]);
          headNode.removeChild(scriptNode);
        }
      }
    };
    headNode.appendChild(scriptNode);

    // 3s timeout
    timeout = setTimeout(function () {
      if(successCallback){
        failedCallback('timeout for 3000ms');
        headNode.removeChild(scriptNode);
      }
    }, 3000);
  }
}
