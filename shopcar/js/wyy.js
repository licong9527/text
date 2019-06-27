  //数量+-
  $(".btn1").css('color','#ccc')
  $(".btn1").click(function(){     
    var num = $(".number").val() 
    if(num>1){ 
        $(".number").val(num-1);              
    }else{
        $(".btn1").css('color','#ccc') 
    }
    }); 
       $(".btn2").click(function(){ 
        var value=parseInt($(".number").val())+1; 
           $(".number").val(value); 
           if(value>1){
            $(".btn1").css('color','#333')  
           }
    });
    
      
//登录移入移出
$(".login").mousemove(function () {
    $("#t-list").css('display','block');
});
$(".login>span").mouseout(function () {
    $("#t-list").css('display', 'none');
});
$("#t-list").mouseout(function () {
    $("#t-list").css('display', 'none');
});

// 促销移入移出
$(".cuxiao1").mousemove(function () {
    $(".none").css('display','block');
});
$(".cuxiao1").mouseout(function () {
    $(".none").hide();
});

//点击按钮样式事件
$(".color").on("click","li",function(){
    $(this).addClass("bt").siblings().removeClass("bt");     
 })


 //悬浮栏
 $(function() {
    $(".nav2").hide();
    $(window).scroll(function() {
        if($(document).scrollTop() >= 700) {
            $(".nav2").addClass("fixnav").slideDown();
        } else {
            $(".nav2").hide();
        }
    })
})

// $(function() {
//     $("#r-nav").hide();
//     $(window).scroll(function() {
//         if($(document).scrollTop() >= 300) {
//             $("#r-nav").addClass("fixnav2").fadeIn();
//         } else {
//             $("#r-nav").hide();
//         }
//     })
// })


//放大镜
$(function () {
$("#middlepic").on("mouseover", function () {
    $("#move").css("display", "block");//鼠标移入，放大镜出现
    $("#bigpic").css("display", "block")
})
$("#middlepic").on("mouseout", function () {//鼠标移出，放大镜消失
    $("#move").css("display", "none");
    $("#bigpic").css("display", "none")
})
$("#middlepic").on("mousemove", function (e) {
    var disX = e.pageX - $("#middlepic").offset().left - $("#move").width() / 2;
    var disY = e.pageY - $("#middlepic").offset().top - $("#move").height() / 2;//此处最好不要用clientY

    if (disX < 0) {
        disX = 0
    } else if (disX > ($("#middlepic").width() - $("#move").width())) {
        disX = $("#middlepic").width() - $("#move").width()
    }

    if (disY < 0) {
        disY = 0
    } else if (disY > ($("#middlepic").height() - $("#move").height())) {
        disY = $("#middlepic").height() - $("#move").height()
    }


    $("#move").css({ left: disX + "px", top: disY + "px" })

    var l = disX / ($("#middlepic").width() - $("#move").width())
    var t = disY / ($("#middlepic").height() - $("#move").height())

//右侧放大镜显示的逻辑
    $(".oImg").css({
        left: -l * ($(".oImg").width() - $("#bigpic").width()) + "px",
        top: -t * ($(".oImg").height() - $("#bigpic").height()) + "px"
    })
})
     var index = 0;
$("#smallpic span").click(function () {
    $(this).addClass("sel").siblings().removeClass("sel");
    var index = $(this).index();
    $(".boxhide").eq(index).addClass('boxshows').siblings().removeClass('boxshows');
    $(".bigpic-hide").eq(index).addClass('bigpic-show').siblings().removeClass('bigpic-show');
    $(".bigpic-show img").addClass('oImg');//class为bigpic-show 的子元素添加oImg显示出来
    $(".bigpic-hide").eq(index).siblings().children("img").removeClass('oImg');//除了下标为index的img标签移除oImg
})
})

//点击颜色显示对应的图片，第二组图
    var index = "";
    var image_2 = "";
    var str3 = "";
    $(".color").on('click', 'li', function () {
        $(".xiaoshi").css("display", 'none');
        $(".XS").css("display", 'block');
        index = $(this).index();

        //获取图片的路径
        $(".XS > .span").eq(index).addClass("sel").siblings().removeClass("sel");	   
        $(".smallpic > p").eq(0).hide();
        //显示一个小图其他的消失
        $(".XS > .span").eq(index).removeClass("hidden_x").siblings().addClass("hidden_x");
        $(".XS > .boxhide").eq(index).addClass("boxshows").siblings().removeClass("boxshows");

        $(".XS > .bigpic-hide").eq(index).addClass("bigpic-show").siblings().removeClass("bigpic-show");
        $(".XS > .bigpic-show img").addClass('oImg');//class为bigpic-show 的子元素添加oImg显示出来
        $(".XS > .bigpic-hide").eq(index).siblings().children("img").removeClass('oImg');//除了下标为index的img标签移除oImg
        image_2 = $(".XS > .boxhide > img").eq(index).attr("src");
        var str = image_2.split('.');
        var str2 = str[0].split('/');
        str3 = str2[1];
        $(".number").val(1);
    });