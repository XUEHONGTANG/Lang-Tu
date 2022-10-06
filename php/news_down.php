<?php
    include("./DB.php");

    // $pdo->exec('');
   $home = $_GET['home'];
   $data = json_decode(file_get_contents("php://input"), true); //接收前端傳來的json格式

   //建立SQL
   $sql = " delete from news WHERE id = :id ";

   $statement = $pdo->prepare($sql);
   $statement -> bindValue(':id', $home);
   $statement->execute();

    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();
    // if ($statement->rowCount() > 0){ //只要有撈到一筆資料 = 有撈到資料
    //     $data["successful"] = true; //successful的屬性數值顯示 true        
    // } else{   //如果沒有撈到資料...
    //     $data["successful"] = false;
    // }

    echo json_encode($data);



?>