<?php
    include("./DB.php");

    //      1. 接收前端傳來的JSON格式的字串，並轉成PHP中的物件
    $member = json_decode(file_get_contents("php://input"), true);
     
    //      2.將此物件中的資料，透過PDO新增(insert)至資料庫(DB)對應的資料表(Table)
    $sql = "insert into MEMBER(PNAME) Values(?)";
?>