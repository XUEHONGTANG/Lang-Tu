<?php

include("./DB.php");


   // $pdo->exec('');
   $data = json_decode(file_get_contents("php://input"), true); //接收前端傳來的json格式

   //建立SQL
//    $sql = " SELECT * from products ";
   $sql = " SELECT ID as id, PDID as pdId, PDNAME as name, PRICE as price, INVENTORY as inventory, IMAGE as product_images ,BIG_IMAGE as big_Images, CUSTOMIZED as customized  from LangTu.products WHERE CUSTOMIZED = 'ROSE' ";

   $statement = $pdo->prepare($sql);
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