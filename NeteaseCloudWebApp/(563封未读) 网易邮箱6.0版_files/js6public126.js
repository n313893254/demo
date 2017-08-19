
(function(){
    if(!window.gAd){
        window.gAd = {};
    }
    var blank = {
        type: 0
    };
    window.gAd.biz = {
        welBanner : fAdWelBanner,
        composeBanner : fAdComposeBanner,
        readFlash : fAdReadFlash,
        close : fAdClose,
        compose: fCompose,
        letter: fLetter,
        composeTips: fComposeTips,
        logout: fLogout
    };

    // 写信成功左下角大图背景广告 620x330
    function fCompose(){
        var o = [blank,blank,blank];
		//o[0] = '<div style="position:relative:+zoom:1;"><img src="https://mimg.127.net/ggimg/all/img19/ico_gg.png" style="position:absolute; left:2px; bottom:2px;z-index:10;" srcset="https://mimg.127.net/ggimg/all/img19/ico_gg.png 1x, https://mimg.127.net/ggimg/all/img19/ico_gg@2x.png 2x">' + '<a style="display:inline-block" href="https://g.163.com/a?CID=51564&Values=3928388920&Redirect=http://www.tpark-toyota.com/index.html?path=1&position=16" target="_blank"><img src="https://img1.126.net/channel19/028917/620330_0803.jpg" width="620" height="330" alt=""></a>' + '</div>';
		return o;

    }

    // 假信（霸王邮文字）
    function fLetter(){
        var o = [blank,blank,blank,blank];
        //o[0] = '<div style="background-color: #f7f7f7;padding: 0 25px 0 12px;overflow-y: hidden;height: 32px;line-height: 32px;border: 1px solid #f1f1f1;font-size: 12px;position: relative;color: #999;"><span style="float: right;">[<a href="https://g.163.com/a?CID=51590&Values=540301830&Redirect=http://xf.house.163.com/gz/BRUc.html" style="color:#999;" target="_blank">碧桂园</a>]' + '&nbsp;[广告]' + '</span><a href="https://g.163.com/a?CID=51590&Values=540301830&Redirect=http://xf.house.163.com/gz/BRUc.html" target="_blank">碧桂园映象>></a><div style="position: absolute;right: 0;top: 0;width: 25px;height: 22px;overflow: hidden;padding-top: 5px;"><a href="javascript:void(0)" style="color: #bfbfbf;margin-left: 1px;float: left;width: 16px;height: 16px;overflow: hidden;display: inline-block;+display: inline;+zoom:1;vertical-align: middle;" hidefocus="hidefocus" onclick="gAd.util.closeInbox(this);" title="关闭"><b class="nui-ico nui-ico-close" style="margin-top: 5px;margin-left: 5px;vertical-align: top;"></b></a></div></div>';
		//o[1] = '<div style="background-color: #f7f7f7;padding: 0 25px 0 12px;overflow-y: hidden;height: 32px;line-height: 32px;border: 1px solid #f1f1f1;font-size: 12px;position: relative;color: #999;"><span style="float: right;">[<a href="https://g.163.com/a?CID=51590&Values=540301830&Redirect=http://xf.house.163.com/gz/BRUc.html" style="color:#999;" target="_blank">碧桂园</a>]' + '&nbsp;[广告]' + '</span><a href="https://g.163.com/a?CID=51590&Values=540301830&Redirect=http://xf.house.163.com/gz/BRUc.html" target="_blank">碧桂园映象>></a><div style="position: absolute;right: 0;top: 0;width: 25px;height: 22px;overflow: hidden;padding-top: 5px;"><a href="javascript:void(0)" style="color: #bfbfbf;margin-left: 1px;float: left;width: 16px;height: 16px;overflow: hidden;display: inline-block;+display: inline;+zoom:1;vertical-align: middle;" hidefocus="hidefocus" onclick="gAd.util.closeInbox(this);" title="关闭"><b class="nui-ico nui-ico-close" style="margin-top: 5px;margin-left: 5px;vertical-align: top;"></b></a></div></div>';
    	return o;
    }

    // 成功发信页面文字连接广告小黄条
    function fComposeTips(){
        var o = [blank,blank,blank,blank];
		//o[0] = '<div style="padding:4px 12px;margin:12px 0;color:#CE0000" class="nui-assistBlock nui-block nui-txt-s18 nui-txt-bold"><span style="float:right;color:#999;font-size:12px;font-weight:normal;line-height:1;padding-top:8px;">[广告]</span><a href="https://g.163.com/a?CID=51215&Values=34533360&Redirect=https://appd.evergrande.com/wdw08/html/index.html?fromSource=100" target="_blank" style="color:#D90000">诚邀兼职销售员 轻松赚十万>>> </a></div>';
 		return o;
    }

    // 退出页 巨幅广告995x350
    function fLogout(){
        var o = [blank,blank];

        o//[0] = '<div style="position:relative;+zoom:1;height:350px;width:100%;"><img src="http://mimg.127.net/ggimg/all/img19/ico_gg.png" style="position:absolute; left:2px; bottom:2px;z-index:10;" srcset="http://mimg.127.net/ggimg/all/img19/ico_gg.png 1x, http://mimg.127.net/ggimg/all/img19/ico_gg@2x.png 2x"><div>' + '<div style="width:995px;height:350px;margin: 0 auto;"><a href="http://g.163.com/a?CID=51367&Values=2113479404&Redirect=http://e.cn.miaozhen.com/r/k=2053466&p=77amK&dx=__IPDX__&rt=2&ns=__IP__&ni=__IESID__&v=__LOC__&xa=__ADPLATFORM__&tr=__REQUESTID__&ro=sm&o=http://auto.163.com/17/0719/17/CPNNCSAL000882UN.html" target="_blank"><img src="https://img1.126.net/channel19/027776/995350_0719.jpg"></a></div>';
		return o;
    }

    // 欢迎页右侧banner 190x360
    function fAdWelBanner(){
        var o = [blank,blank,blank];
		o[0] = '<div style="position:relative:+zoom:1;"><img src="https://mimg.127.net/ggimg/all/img19/ico_gg.png" style="position:absolute; left:2px; bottom:2px;z-index:10;" srcset="https://mimg.127.net/ggimg/all/img19/ico_gg.png 1x, https://mimg.127.net/ggimg/all/img19/ico_gg@2x.png 2x">' + '<a pid="41" href="https://g.163.com/a?CID=51680&Values=2952276223&Redirect=http://www.yc999vip.com/1716/PC14/index.html" target="_blank"><img width="190px" height="360px" src="https://img1.126.net/channel19/026190/190360_0814.jpg" /></a>' + '</div>';
		//o[1] = '<div style="position:relative:+zoom:1;"><img src="http://mimg.127.net/ggimg/all/img19/ico_gg.png" style="position:absolute; left:2px; bottom:2px;z-index:10;" srcset="http://mimg.127.net/ggimg/all/img19/ico_gg.png 1x, http://mimg.127.net/ggimg/all/img19/ico_gg@2x.png 2x">' + '<embed src="https://img1.126.net/channel19/028797/190360_0714.swf" quality="high" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash  type=application/x-shockwave-flash" width="190px" height="360px" wmode="opaque"></embed>' + '</div>';

		 return o;
    }

    // 写信成功右下角 260x330
    function fAdComposeBanner(){
        var o = [blank,blank,blank];
        o[0] = '<div style="position:relative:+zoom:1;"><img src="http://mimg.127.net/ggimg/all/img19/ico_gg.png" style="position:absolute; left:2px; bottom:2px;z-index:10;" srcset="http://mimg.127.net/ggimg/all/img19/ico_gg.png 1x, http://mimg.127.net/ggimg/all/img19/ico_gg@2x.png 2x">' + '<a href="https://g.163.com/a?CID=51679&Values=230973787&Redirect=http://www.yc999vip.com/1716/PC14/index.html" target="_blank"><img src="https://img1.126.net/channel19/026190/260330_0814.jpg" alt=""></a>' + '</div>';   
        o[1] = '<div style="position:relative:+zoom:1;"><img src="http://mimg.127.net/ggimg/all/img19/ico_gg.png" style="position:absolute; left:2px; bottom:2px;z-index:10;" srcset="http://mimg.127.net/ggimg/all/img19/ico_gg.png 1x, http://mimg.127.net/ggimg/all/img19/ico_gg@2x.png 2x">' + '<embed src="https://img1.126.net/channel19/029156/260330_0815l.swf" quality="high" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash  type=application/x-shockwave-flash" width="260px" height="330px" wmode="opaque"></embed>' + '</div>';	
		return o;
    }
 
    // 读信右上角flash 135x98
    function fAdReadFlash(){
        var o = [blank,blank,blank];       
        return o;
    }

    // 浏览器关闭弹框 720x300
    function fAdClose(){
        var o = [blank,blank];
		//o[0] = 'http://img1.126.net/mail/html/mail126_yitou_newb.html';
		return o;
    }

})();
 
// END  201708171800
