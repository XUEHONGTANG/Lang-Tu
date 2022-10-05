<?php

    include("./DB.php");

    //1. 接收前端傳來的JSON格式的字串，並轉成PHP中的物件
    $member = json_decode(file_get_contents("php://input"), true);

    $title = htmlspecialchars(isset($_POST["title"]) ? $_POST["title"] : "");
    $category = htmlspecialchars(isset($_POST["category"]) ? $_POST["category"] : "");
    $year = htmlspecialchars(isset($_POST["year"]) ? $_POST["year"] : "");
    $date = htmlspecialchars(isset($_POST["year"]) ? $_POST["date"] : "");
    $content = htmlspecialchars(isset($_POST["content"]) ? $_POST["content"] : "");

    //      2.將此物件中的資料，透過PDO新增(insert)至資料庫(DB)對應的資料表(Table)
    $sql = "insert into news(title, category, year, date, content) Values(?, ?, ?, ?, ?)";

    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $title);
    $statement->bindValue(2, $category);
    $statement->bindValue(3, $year);
    $statement->bindValue(4, $date);
    $statement->bindValue(5, $content);
    $statement->execute();

    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();

    if(count($data) > 0){

        // set session
        session_start();
        $_SESSION["username"] = $username;
        $_SESSION["password"] = $password;

        // 登入成功後跳轉會員管理頁
        header("Location: ../bak_member.html");

       }else{
           // 登入失敗

           // echo "帳號或密碼錯誤";
           // echo "<script>alert('帳號或密碼錯誤')</script>";

        //    點擊alert跳轉燈入頁
           echo "<script> {window.alert('帳號或密碼錯誤');location.href='../bak.html'} </script>";
       }

?>