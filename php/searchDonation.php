<?php
include("./DB.php");


// $pdo->exec('');
$data = json_decode(file_get_contents("php://input"), true); //接收前端傳來的json格式

//建立SQL
$sql = " SELECT d.DID as id, d.DDATE as date, d.DMETHODS as method, d.DAMOUNT as amount, d.DTYPE as situation, d.FUNDNAME as fundName from LangTu.donate d natural join LangTu.member m WHERE d.DEMAIL = :account";

$statement = $pdo->prepare($sql);
$statement->bindValue(":account", $data["account"]);
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