define(["jquery"],function(){
	function Motion(){

	}
	Motion.prototype={  //二级菜单模块
		constructor:Motion,
		init:function(){
			this.$lis=$("#sasacategory>ul>li")
			this.$tabs=$("#bar>ul>li")
			this.hove()
			this.tab()
		},
		hove:function(){
			this.$lis.on("mouseover",function(){
				$(this).css({
					background:"#fff"
				})
				$(this).find("a").css({
					color:"#fa3778"
				})
				$(this).find("i").css({
					color:"#fa3778"
				})
				$(this).find("ul").css({
					display:"block"
				})
			})
			this.$lis.on("mouseout",function(){
				$(this).css({
					background:"#fa3778"
				})
				$(this).find("a").css({
					color:"#fff"
				})
				$(this).find("i").css({
					color:"#fff"
				})
				$(this).find("ul").css({
					display:"none"
				})
			})
		},
		tab:function(){
			var timer;
			this.$tabs.on("mouseenter",function(){
				$(this).css({
					background:"#fff"
				})
				var _this=this;
				clearTimeout(timer)
				timer=setTimeout(function(){
					$(_this).find("ul").stop(true,true).animate({
						height:"150px"
					})
					.css({
						padding:"5px 10px 10px 10px"
					})
				},1000/60)
			})
			this.$tabs.on("mouseleave",function(){
				$(this).css({
					background:"#f2f2f2"
				})
				$(this).find("ul").animate({
					height:"0"
				})
				$(this).find("ul").animate({
					padding:"0"
				})
			})
		}
	}

	return new Motion()
})