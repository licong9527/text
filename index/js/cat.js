$.getJSON("./json/index.json",function(res) {
	var str = ``;
	for(var i = 0; i < res.length; i++) {
		str += `<div class="product f-l">
						<a href="${res[i].href}">
							<img src="images/${res[i].img}.jpg"/>
							<div class="spec">
								<span class="origin">￥${res[i].money}</span>
								<span class="cut">
									<del>${res[i].cut}</del></span>
							</div>
						</a>
						<h3>
							<span class="tags">
								<em>${res[i].hod}</em>
							</span>
							<a href="${res[i].href}" class="p-name">${res[i].title}</a>
						</h3>
						<p>￥<em>${res[i].money}</em></p>
					</div>`;
	}
	$("#recommend>#cat").html(str);
	for(var i=0;i<$('.tags>em').length;i++){
		if(!$('.tags>em').eq(i).html()){
			$(".tags").eq(i).css("display","none");
		}	
		if(!$('.cut>del').eq(i).html()){
			$(".spec").eq(i).css("display","none");
		}
	}
	
	
	
	})
$.getJSON("./json/cat.json",function(res) {
	var str = ``;
	for(var i = 0; i < res.length; i++) {
		str += `<div class="product f-l">
						<a href="#">
							<img src="images/${res[i].img}.jpg"/>
							<div class="spec">
								<span class="origin">￥${res[i].money}</span>
								<span class="cut">
									<del>${res[i].cut}</del></span>
							</div>
						</a>
						<h3>
							<span class="tags">
								<em>${res[i].hod}</em>
							</span>
							<a class="p-name">${res[i].title}</a>
						</h3>
						<p>￥<em>${res[i].money}</em></p>
					</div>`;
	}
	$("#hot>#hotcat").html(str);
	for(var i=0;i<$('.tags>em').length;i++){
		if(!$('.tags>em').eq(i).html()){
				$(".tags").eq(i).css("display","none");
		}
		if(!$('.cut>del').eq(i).html()){
			$(".spec").eq(i).css("display","none");
		}
	}
})

