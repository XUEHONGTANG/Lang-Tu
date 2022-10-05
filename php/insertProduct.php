<?php
include("./DB.php");


// $pdo->exec('');
$data = json_decode(file_get_contents("php://input"), true); //接收前端傳來的json格式
// print_r($data);
// exit();
//建立SQL
$sql = " INSERT INTO products (PDID, PDNAME, COST, PRICE, INVENTORY, SALES, INFO, STATE, IMAGE) values (:pdId, :pdname, :cost, :price, :inventory, :sales, :info, :state, :image)  ";
// NOW()

$statement = $pdo->prepare($sql);
$statement->bindValue(":pdId", $data["pdId"]);
$statement->bindValue(":pdname", $data["name"]);
$statement->bindValue(":cost", $data["cost"]);
$statement->bindValue(":price", $data["price"]);
$statement->bindValue(":inventory", $data["inventory"]);
$statement->bindValue(":sales", $data["sales"]);
$statement->bindValue(":info", $data["info"]);
$statement->bindValue(":state", $data["state"]);
$statement->bindValue(":image", $data["images"]);
$statement->execute();

 //抓出全部且依照順序封裝成一個二維陣列
//  $data = $statement->fetchAll();
 // if ($statement->rowCount() > 0){ //只要有撈到一筆資料 = 有撈到資料
 //     $data["successful"] = true; //successful的屬性數值顯示 true        
 // } else{   //如果沒有撈到資料...
 //     $data["successful"] = false;
 // }
 
 echo json_encode($data);
?>