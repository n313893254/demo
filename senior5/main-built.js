define("gotop",["jquery"],function(e){var t=function(e,t){this.ctn=e,this.target=t,this.createNode(),this.bindEvent()};return t.prototype.createNode=function(){var t=e("<"+this.ctn+">"+"</"+this.ctn+">"),n=e("<"+this.target+">"+"Top"+"</"+this.target+">");n.addClass("on"),t.append(n),e("body").append(t)},t.prototype.bindEvent=function(){e(window).scroll(function(){e(this).scrollTop()>900?e(".on").css("display","block"):e(".on").css("display","none")}),e(".on").click(function(){e(window).scrollTop(0),e(".on").css("display","none")})},t}),define("carousel",["jquery"],function(e){function t(e){this.$ctn=e,this.init(),this.bind(),this.autoPlay()}t.prototype.init=function(){this.curIdx=0,this.isAnimate=!1,this.$container=this.$ctn.find(".img-ct"),this.$items=this.$container.children(),this.imgWidth=this.$items.width(),this.imgCount=this.$items.length,this.$pre=this.$ctn.find(".btn-pre"),this.$next=this.$ctn.find(".btn-next"),this.$dots=this.$ctn.find(".dots")},t.prototype.bind=function(){var t=this;this.$next.on("click",function(){var e=t.curIdx+1;e===t.imgCount&&(e=0),t.play(e)}),this.$pre.on("click",function(){var e=t.curIdx-1;e<0&&(e=t.imgCount-1),t.play(e)}),this.$dots.on("click","li",function(){var n=e(this).index();t.play(n)}),this.$items.on("mouseover",function(){}),this.$items.on("mouseout",function(){})},t.prototype.play=function(e){var t=this;if(this.isAnimate)return;this.isAnimate=!0,this.$items.eq(this.curIdx).fadeOut(500),this.$items.eq(e).fadeIn(500,function(){t.isAnimate=!1}),this.curIdx=e,this.setBullet()},t.prototype.setBullet=function(){this.$dots.children().removeClass("active").eq(this.curIdx).addClass("active")},t.prototype.autoPlay=function(){var e=this;clock=setInterval(function(){var t=e.curIdx+1;t===e.imgCount&&(t=0),e.play(t)},3e3)},t.prototype.stopAuto=function(){clearInterval(clock)};var n=function(){return{init:function(n){n.each(function(n,r){new t(e(r))})}}}();return n}),define("waterfall",["jquery"],function(e){function t(e){this.$ctn=e,this.init(),this.bind()}return t.prototype.init=function(){this.item=this.$ctn.find(".show-item"),this.colWidth=this.item.outerWidth(!0),this.colLength=parseInt(this.$ctn.width()/this.colWidth),this.array=[];for(var e=0;e<this.colLength;e++)this.array[e]=0},t.prototype.bind=function(){var t=this;this.item.each(function(){var n=Math.min.apply(null,t.array),r=t.array.indexOf(n);e(this).css({top:n,left:t.colWidth*r}),t.array[r]+=e(this).outerHeight(!0),t.$ctn.height(Math.max.apply(null,t.array))})},t}),define("loadmore",["jquery","waterfall"],function(e,t){function n(e){this.$ctn=e,this.init(),this.bind()}n.prototype.init=function(){this.pageIndex=0,this.isDataArrive=!0,this.$btn=this.$ctn.parents(".ship").find(".load")},n.prototype.bind=function(){var e=this;this.$btn.on("click",function(){if(!e.isDataArrive)return;e.getData(),e.isDataArrive=!1})},n.prototype.getData=function(){var t=this;e.get("/loadMore",{index:t.pageIndex}).done(function(e){console.log(e);if(e.length===0)return;t.isDataArrive=!0,t.pageIndex++,t.render(e)}).fail(function(){console.log("error")})},n.prototype.render=function(n){var r=this;e.each(n,function(n,i){var s=r.getNode(i);s.find("img").load(function(){r.$ctn.append(s),new t(e(".ship .show"))})})},n.prototype.getNode=function(t){var n="";return n+='<div class="show-item">',n+='<a href="#">',n+='<img src="'+t.img+'">',n+="</a>",n+="<h1>"+t.title+"</h1>",n+="<p>"+t.content+"</p>",n+="</div>",e(n)};var r=function(){return{init:function(e){new n(e)}}}();return r}),require.config({baseUrl:"js",paths:{jquery:"https://code.jquery.com/jquery-3.2.1.min"}}),require(["jquery","gotop","carousel","loadmore","waterfall"],function(e,t,n,r,i){new t("div","a"),n.init(e(".carousel")),new i(e(".ship .show")),r.init(e(".ship .show"))}),define("main",function(){});