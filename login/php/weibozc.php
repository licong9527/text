<?php
mysql_connect("127.0.0.1", "root", "root");
mysql_query("use wangyiyun");
$unsename = $_POST["unsename"];
$password = $_POST["password"];
$sql = "select * from denlu  where unsename = '$unsename' and password='$password'";
$result = mysql_query($sql);
$row = mysql_fetch_assoc($result);
if ($row) {
    $response = [
        "code" => 200,
        "message" => "用户名已存在"
    ];  
} else {
    $sql= "insert into denlu (unsename,password) values ('$unsename','$password')";
    $result = mysql_query($sql);
    $response = [
        "code" => -1,
        "message" => "用户注册成功"
    ];
}
echo json_encode($response);
