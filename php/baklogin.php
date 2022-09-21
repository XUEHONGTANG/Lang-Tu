<?php
    include("./DB.php");

    $username = isset($_POST["username"]) ? $_POST["username"] : "";

    $password = isset($_POST["password"]) ? $_POST["password"] : "";
    
    //建立SQL
    $sql = " SELECT musername, mpassword from LangTu.manager where musername = ? and mpassword = ? ";

    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $username);
    $statement->bindValue(2, $password);
    $statement->execute();

    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();


    if(count($data) > 0){
        //  echo "登入成功";

        // set session
        session_start();
        $_SESSION["username"] = $username;
        $_SESSION["password"] = $password;

        // 登入成功後跳轉會員管理頁
        header("Location: http://localhost/dist/bak_member.html");

       }else{
           // 登入失敗

           // echo "帳號或密碼錯誤";
           // echo "<script>alert('帳號或密碼錯誤')</script>";

           // 點擊alert跳轉燈入頁
           echo "<script> {window.alert('帳號或密碼錯誤');location.href='http://localhost/dist/bak.html'} </script>";
       }

    //將二維陣列取出顯示其值
    foreach($data as $index => $row){
        echo $row["musername"];   //欄位名稱
        echo " / ";
        echo $row["mpassword"];    //欄位名稱
        echo " / ";
        echo $row["id"];    //欄位名稱
        echo "<br>";	       
    }
?>