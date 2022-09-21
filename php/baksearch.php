<?php
    include("./DB.php");

    $search = $_POST["q"] ;
    $search1 = "%$search%";

    //建立SQL語法
    $sql = "SELECT * FROM LangTu.member WHERE NAME LIKE ? OR ACCOUNT like ? OR EMAIL LIKE ? OR PHONE LIKE ? OR BIRTHDAY LIKE ? OR GENDER LIKE ?";

    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    //    $statement = $pdo->query($sql);

    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $search1);
    $statement->bindValue(2, $search1);
    $statement->bindValue(3, $search1);
    $statement->bindValue(4, $search1);
    $statement->bindValue(5, $search1);
    $statement->bindValue(6, $search1);
    $statement->execute();

    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();

     //將二維陣列取出顯示其值
     foreach($data as $index => $row){
         echo $row["ID"];    //欄位名稱
         echo " / ";
         echo $row["NAME"];    //欄位名稱
         echo " / ";
         echo $row["ACCOUNT"];   //欄位名稱
         echo " / ";
         echo $row["PHONE"];   //欄位名稱
         echo " / ";
         echo $row["BIRTHDAY"];   //欄位名稱
         echo " / ";
         echo $row["GENDER"];   //欄位名稱
         echo "<br>";	       
    }

    

?>