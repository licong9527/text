$(function () {
    $day = $("#day"),
        $month = $("#month"),
        $year = $("#year");

    // <!--出始化年-->  
    var dDate = new Date(),
        dCurYear = dDate.getFullYear(),
        str = "";
    for (var i = dCurYear - 100; i < dCurYear + 1; i++) {
        if (i == dCurYear) {
            str = "<option value=" + i + ">" + i + "</option>";
        } else {
            str = "<option value=" + i + ">" + i + "</option>";
        }
        $year.append(str);
    }

    // <!--出始化月-->  
    for (var i = 1; i <= 12; i++) {

        if (i == (dDate.getMonth() + 1)) {
            str = "<option value=" + i + " selected=true>" + i + "</option>";
        } else {
            str = "<option value=" + i + ">" + i + "</option>";
        }
        $month.append(str);
    }
    // <!--调用函数出始化日-->  
    TUpdateCal($year.val(), $month.val());
    $("#year,#month").bind("change", function () {
        TUpdateCal($year.val(), $month.val());
    });
});

// <!--根据年月获取当月最大天数-->  
function TGetDaysInMonth(iMonth, iYear) {
    var dPrevDate = new Date(iYear, iMonth, 0);
    return dPrevDate.getDate();
}

function TUpdateCal(iYear, iMonth) {
    var dDate = new Date(),
        daysInMonth = TGetDaysInMonth(iMonth, iYear),
        str = "";

    $("#day").empty();

    for (var d = 1; d <= parseInt(daysInMonth); d++) {

        if (d == dDate.getDate()) {
            str = "<option value=" + d + " selected=true>" + d + "</option>";
        } else {
            str = "<option value=" + d + ">" + d + "</option>";
        }
        $("#day").append(str);
    }
}
// ---------------------------------------------------------------------
var shoujiyanz = false;
var yzmyanz = false;
var passwordyanz = false;
//---------------------------------------------------------------
$(function () {
    $(".zhucbox").click(function () {
        $("i").css("display", "none")
        // var unsename = $(".ipono-tis").val()  
        var password = $(".mima-tis").val()
        var year = $("#year option:selected").text();
        var zcm = $(".zcm").val();


        if (password == "") {
            $(".tipsimg").removeClass("tipsimg").addClass("xtipsimg");
            $("i").eq(1).css({ "display": "block", "color": "rgb(230, 65, 65)" });
            $(".tihuan").text("请输入密码");
        }

        if (year < "2006" || year == "请选择") {
            $("i").eq(2).css("display", "none");
            if (year == "请选择") {
                $(".tipsimg").removeClass("tipsimg").addClass("xtipsimg");
                $("i").eq(2).css({ "display": "block", "color": "rgb(230, 65, 65)" });
            }
        } else {
            alert("抱歉，您未满14周岁，不符合注册微博账号的条件");
        }
        if (zcm == "") {
            $(".tipsimg").removeClass("tipsimg").addClass("xtipsimg");
            $("i").eq(3).css({ "display": "block", "color": "rgb(230, 65, 65)" });
        }
    });


    // ------------------------------------------------------------------------
    $(".ipono-tis").focus(function () {
        $(this).attr("placeholder", "");
        var ipone = $(".ipono-tis").val();
        if (ipone == "") {
            $("i").eq(0).css({ "display": "block", "color": "rgba(41, 43, 43, 0.74)" });
            $(".tip1").removeClass("xtipsimg").addClass("tipsimg");
        }
    });
    $(".ipono-tis").blur(function () {
        var date = $(this).attr("placeholder");
        if (date == "") {
            $(".tip1").removeClass("tipsimg").addClass("xtipsimg");
            $("i").eq(0).css({ "display": "block", "color": "rgb(230, 65, 65)" });
            $(this).attr("placeholder", "请输入你的手机号");
            shoujiyanz = false;
        }
        var iponeR = /^[1][3-9]\d{9}$/;
        var ipone = $(".ipono-tis").val();
        if (!iponeR.test(ipone) && ipone != "") {
            $("i").eq(0).css({ "display": "block", "color": "rgb(230, 65, 65)" });
            $(".tihuan1").text("手机号长度11位，以13/14/15/16/17/18/19开头");
        } else if (ipone != "") {
            $(".tip1").removeClass("xtipsimg").addClass("xxtipsimg");
            $(".tihuan1").text("");
            $("i").eq(0).css({ "display": "block", "color": "rgb(230, 65, 65)" });
            shoujiyanz = true;
        }
    });
    // ----------------------------------------------------------------------------------
    $(".mima-tis").keyup(function () {
        var password = $(".mima-tis").val();
        var passwordR = /^[0-9,a-z,A-Z]{6,16}$/;
        var passwordR1 = /^[0-9]{6}$/;
        var passwordR2 = /^[0-9,a-z,A-Z]{6,9}$/;
        if (!passwordR.test(password) && password != "") {
            $("i").eq(1).css({ "display": "block", "color": "rgb(230, 65, 65)" });
            $(".tip2").removeClass("tipsimg").addClass("xtipsimg");
            $(".tihuan").text("请输入6-16位数字、字母或常用符号，字母区分大小写");
            passwordyanz = false;
        } else if (password != "") {
            if (passwordR1.test(password)) {
                $("i").eq(1).css({ "display": "block", "color": "rgb(230, 65, 65)" });
                $(".tip2").removeClass("tipsimg").addClass("xtipsimg");
                $(".tihuan").text("弱：您输入的密码强度过弱，请重新输入，试试字母、数字、常用符号的组合");
            } else if (passwordR2.test(password)) {
                $("i").eq(1).css({ "display": "block", "color": "rgba(41, 43, 43, 0.74)" });
                $(".tip2").removeClass("tipsimg").removeClass("xtipsimg");
                $(".tihuan").html("<em style='font-style: normal;color: #4bb900'>中：</em>您的密码还可以更复杂些");
            } else {
                $("i").eq(1).css({ "display": "block", "color": "rgba(41, 43, 43, 0.74)" });
                $(".tihuan").html("<em style='font-style: normal;color: #4bb900'>强：</em>您的密码很安全");
                $(".tip2").removeClass("tipsimg").removeClass("xtipsimg");
            }
            passwordyanz = true;
        }
    })
    $(".mima-tis").focus(function () {
        var password = $(".mima-tis").val();
        if (password == "") {
            $("i").eq(1).css({ "display": "block", "color": "rgba(41, 43, 43, 0.74)" });
            $(".tip2").removeClass("xtipsimg").addClass("tipsimg");
            $(".tihuan").text("请输入6-16位数字、字母或常用符号，字母区分大小写");
        }
    });
    $(".mima-tis").blur(function () {
        var password = $(".mima-tis").val();
        if (password == "") {
            $(".tip2").removeClass("tipsimg").addClass("xtipsimg");
            $("i").eq(1).css({ "display": "block", "color": "rgb(230, 65, 65)" });
            $(".tihuan").text("请输入密码");
        }
    });
    //----------------------------------------------------------------------------
    $(".zcm").focus(function () {
        $("i").eq(3).css({ "display": "block", "color": "rgba(41, 43, 43, 0.74)" });
        $(".tip4").removeClass("xtipsimg").addClass("tipsimg");
    });
    $(".zcm").blur(function () {
        var zcmVal = $(".zcm").val();
        if (zcmVal != "") {
            $("i").eq(3).css("display", "none");
            yzmyanz = true;
        } else {
            $(".tip4").removeClass("tipsimg").addClass("xtipsimg");
            $("i").eq(3).css({ "display": "block", "color": "rgb(230, 65, 65)" });
            yzmyanz = false;
        }

    });



    //-------------------------------------------------------------------
    $(".zhucbox").click(function () {
        if (shoujiyanz && yzmyanz && passwordyanz) {
            var date = $(".login").serialize();
            console.log(date)
            $.post("../php/weibozc.php", date, function (res) {
                if (res.code == 200) {
                    alert("注册失败用户名已存在");
                } else if (res.code == -1) {
                    alert("用户注册成功");
                    location.href = "../../index/index.html";   //和并时购物主页页面
                }
            }, "json");
        }
    });
})