var index = 0;
var timer = setInterval(autoPlay, 1500);
function autoPlay() {
	index++;
	$("#banner > ul > li").eq(index).fadeIn(200).siblings().fadeOut(200);
	$("#banner > ol > li").eq(index).addClass("l_hover").siblings().removeClass("l_hover");
	$.getJSON("./json/banner.json", function(res) {
		$("#banner").css("background", "url(./images/" + res[index + 1].back + ".jpg) repeat-x");
	});
	if(index == $("#banner > ul > li").length - 1) {
		index = -1
	}
};

$("#banner > ul > li").mouseover(function() {
	clearInterval(timer);
	index = $(this).index() - 1;
	autoPlay();
}).mouseout(function() {
	timer = setInterval(autoPlay, 1500);
});

$("ol > li").mouseover(function() {
	clearInterval(timer);
	index = $(this).index() - 1;
	autoPlay();
}).mouseout(function() {
	timer = setInterval(autoPlay, 1500);
});

$(".prev").click(function() {
	clearInterval(timer);
	index = $(this).index() - 1;
	index--;
	autoPlay();
	timer = setInterval(autoPlay, 1500);
});

$(".next").click(function() {
	clearInterval(timer);
	index = $(this).index() - 1;
	index++;
	autoPlay();
	timer = setInterval(autoPlay, 1500);
});



// //r-nav
// var x = 0;
// document.onscroll = function() {
// 	var o = document.documentElement.scrollTop || document.body.scrollTop;
// 	200 < o && 0 == x && ($("#r-nav>ul"), x = 1),
// 	o < 200 && 1 == x && ($("#r-nav").remove(), x = 0),
// 	300 < o && 1 == x ? $("#r-nav").attr("style","position:fixed;top:50%;transform:translate(0,-50%)") : $("#r-nav").removeAttr("style"),
// 	$("#r-nav>ul").on("click", function() {
// 		if(200 < o && 1 == x) var l = window.setInterval(function() {
// 			document.documentElement.scrollTop -= 5, document.documentElement.scrollTop <= 0 && window.clearInterval(l)
// 		}, 5)
// 	})
// };