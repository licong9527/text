$(function () {
    $("#unsename").focus(function () {
        $(this).attr("placeholder", "");
    });

    $("#unsename").blur(function () {
        $(this).attr("placeholder", "请用微博账号登录");
    });
    $("#password").focus(function () {
        $(this).attr("placeholder", "");
    });

    $("#password").blur(function () {
        $(this).attr("placeholder", "请输入密码");
    });

    $(".btn2").click(function () {
        location.href = "../html/denlu.html";
    });

    $(".span2").click(function () {
        $(".tooltip").css("display", "none");
    })

    $(".btn1").click(function () {
        $("#unsename").click(function () {
            $(".tooltip").css("display", "none");
        });
        $("#password").click(function () {
            $(".tooltip").css("display", "none");
        });
        var unsename = $("#unsename").val();
        var password = $("#password").val();

        if (unsename == "") {
            $(".tooltip").css("display", "block");
            return;
        }
        if (password == "") {
            $(".tooltip").css("display", "block");
            $("#p").text("请输入密码");
            return;
        }
        var date = $("form").serialize();
        $.post("../php/weibodl.php", date, function (res) {
            if (res.code == 200) {
                location.href = "../../index/index.html";   //和并时购物主页页面
            } else {
                $(".tooltip").css("display", "block");
                $("#p").text(res.message);
            }
        }, "json");
    });
})
