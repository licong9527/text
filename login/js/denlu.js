
$(function () {
    $(".seek1").focus(function () {
        $(this).val("");
    });
    $(".seek1").blur(function () {
        $(this).val("音乐/视频/电台/用户");
    });
    $(".enter").hover(function () {
        $(".pull-down-list").css("display", "block");
    }, function () {
        $(".pull-down-list").css("display", "none");
    });
    // 移动窗口函数
    function move(obj, obj1) {
        var onOff = false;
        var l = 0, t = 0, x = 0, y = 0;
        obj.mousedown(function (event) {
            var e = event || window.event;
            x = e.clientX;
            y = e.clientY;
            l = parseInt(obj1[0].offsetLeft);
            t = parseInt(obj1[0].offsetTop);
            onOff = true;
            document.onmousemove = function (event) {
                if (onOff) {
                    var e = event || window.event;
                    obj1[0].style.left = l + e.clientX - x + 'px';
                    obj1[0].style.top = t + e.clientY - y + 'px';
                }
            }
            document.onmouseup = function () {
                if (onOff) {
                    onOff = false;
                }
            };

        });
    }
    //  手机登录
    $("#phone-up,.bgcolor").click(function () {
        $("#phone-phone").val("");
        $("#phone-password").val("");
        $("#id-1").css("display", "none");
        move($(".return-case-nave"), $(".enter-case"));
        $(".enter-case").css("display", "block");
        $(".cover").css("display", "block");
        $(".return-case").css("display", "none");
        $("#phone-sut").click(function () {
            $(".enter-case").css("display", "none");
            $(".cover").css("display", "none");

        });
    });



    // 网易登录
    $("#wy-up,#wy-up1,#wydl2").click(function () {
        $("#wydl-zhv").val("");
        $("#wydl-password").val("");
        $("#id-2").css("display", "none");
        move($(".return-case-nave"), $(".wyenter-case"));
        $(".wyenter-case").css("display", "block");
        $(".cover").css("display", "block");
        $(".return-case").css("display", "none");
        $("#wy-sut").click(function () {
            $(".wyenter-case").css("display", "none");
            $(".cover").css("display", "none");

        });
    });

    //返回页面
    $("#return-up,#wyreturn-up,#zcreturn-up").click(function () {
        move($(".return-case-nave"), $(".return-case"));
        $(".return-case").css("display", "block");
        $(".cover").css("display", "block");
        $(".enter-case").css("display", "none");
        $(".wyenter-case").css("display", "none");
        $(".login-case").css("display", "none");
        $("#return-sut").click(function () {
            $(".return-case").css("display", "none");
            $(".cover").css("display", "none");

        });
    });
    //注册框
    $(".zhuc,#zc1,.a2").click(function () {
        $("#zc-phonev").val("");
        $("#zc-passwordv").val("");
        $("#id-3").css("display", "none");
        move($(".return-case-nave"), $(".login-case"));
        $(".login-case").css("display", "block");
        $(".return-case").css("display", "none");
        $(".enter-case").css("display", "none")
        $("#zcreturn-sut").click(function () {
            $(".login-case").css("display", "none");
            $(".cover").css("display", "none");

        });
    })
    //手机框登录
    $("#ipone-dl-btn").click(function () {
        var iponereg = /^[1][3-9]\d{9}$/;
        $(".tis-1>h5").text("")
        $(".tis-1").css("display", "none");
        var ipone = $("#phone-phone").val();
        var password = $("#phone-password").val();
        if (ipone == "") {
            $(".tis-1").css("display", "block");
            $(".tis-1>h5").text("请输入手机号");
            return;
        }
        if (password == "") {
            $(".tis-1").css("display", "block");
            $(".tis-1>h5").text("请输入登录密码");
            return;
        }
        if (!iponereg.test(ipone)) {
            $(".tis-1").css("display", "block");
            $(".tis-1>h5").text("手机号长度11位以13/14/15/16/17/18/19开头");
        } else {
            var date = $(".form-ipone").serialize();
            $.post("../php/weibodl.php", date, function (res) {
                if (res.code == 200) {
                    location.href = "../../index/index.html";   //和并时购物主页页面
                } else {
                    $(".tis-1").css("display", "block");
                    $(".tis-1>h5").text("该手机号尚未注册");
                }
            }, "json");
        }
    });
    //手机号注册
    $("#zhuc-btn").click(function () {
        var iponereg = /^[1][3-9]\d{9}$/;
        $(".tis-2>h5").text("")
        $(".tis-2").css("display", "none");
        //console.log(1)
        var ipone = $("#zc-phonev").val();
        var password = $("#zc-passwordv").val();
        if (ipone == "") {
            $(".tis-2").css("display", "block");
            $(".tis-2>h5").text("请输入手机号");
            return;
        }
        if (password == "") {
            $(".tis-2").css("display", "block");
            $(".tis-2>h5").text("请输入登录密码");
            return;
        }
        if (!iponereg.test(ipone)) {
            $(".tis-2").css("display", "block");
            $(".tis-2>h5").text("手机号长度11位以13/14/15/16/17/18/19开头");
        } else {
            var date = $(".form-zc").serialize();
            $.post("../php/weibozc.php", date, function (res) {
                console.log(res.code)
                if (res.code == 200) {
                    $(".tis-2").css("display", "block");
                    $(".tis-2>h5").text("该手机号已注册");
                } else if (res.code == -1) {
                    alert("用户注册成功");
                    location.href = "../../index/index.html";   //和并时购物主页页面
                }
            }, "json");
        }
    });

    //网易账号登录框
    var arr = [];
    $("#wydl-zhv").keyup(function () {
        $(".all_email").css("display", "block");
        // var a1 = $(".all_email>li").text();
        // var b1 = $("#wydl-zhv").val();
        // arr.push(b1);
        // console.log(arr.length);
        // if(arr.length==1){
            
        //     var sub= arr[arr.length-1];
        //     $(".all_email>li").text(sub + a1);
        // }else{
        //     arr=[]
        //    console.log(arr)
        // }
        
        // //var sub= arr[arr.length-1];
        // //console.log(sub);
        // //$(".all_email>li").text(sub + a1);
    })
    $(".all_email>li").click(function () {
        var index = $(this).index();
        console.log(index);
        var a = $(this).eq(0).text();
        console.log(a)
        var b = $("#wydl-zhv").val();
        $("#wydl-zhv").val(b + a);
        $(".all_email").css("display", "none");
    })


    $("#wy-dl-btn").click(function () {
        $(".tis-3>h5").text("")
        $(".tis-3").css("display", "none");
        //console.log(1)
        var ipone = $("#wydl-zhv").val();
        var password = $("#wydl-password").val();
        if (ipone == "") {
            $(".tis-3").css("display", "block");
            $(".tis-3>h5").text("请输入邮箱账号");
            return;
        }
        if (password == "") {
            $(".tis-3").css("display", "block");
            $(".tis-3>h5").text("请输入登录密码");
            return;
        }
        var date = $(".form-wydl").serialize();
        $.post("../php/weibodl.php", date, function (res) {
            if (res.code == 200) {
                location.href = "../../index/index.html"; //和并时购物主页页面
            } else {
                $(".tis-3").css("display", "block");
                $(".tis-3>h5").text("邮箱或密码错误");
            }
        }, "json");
    })

  
})
