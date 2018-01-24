require(["script/list_config.js"],function(){
	require(["waterfull","shopcar","shoplist","effect"],function(waterfull,shopcar,shoplist,effect){
		waterfull.init($(".li_fonfor"))
		shopcar.init($(".li_fonfor"),$(".shopnum"));
		shoplist.init($(".li_fonfor"));
		effect.init()
		setTimeout(function(){
			$("button",".li_fonfor").on("click",function(){
				effect.init()
			})
		},1000)
	})
})