<?php
include("./DB.php");


// $pdo->exec('');
$data = json_decode(file_get_contents("php://input"), true); //接收前端傳來的json格式

//建立SQL
$sql = " UPDATE PROJECT SET fundName = :fundName, fundTopContent = :fundTopContent, fundDate = :fundDate, fundEndDate =:fundEndDate, fundGoal = :fundGoal, fundImg = :fundImg, fundContent = :fundContent, fundlistImg = :fundlistImg where id = :id";


$statement = $pdo->prepare($sql);
$statement->bindValue(":fundName", $data["fundName"]);
$statement->bindValue(":fundTopContent", $data["fundTopContent"]);
$statement->bindValue(":fundDate", $data["fundDate"]);
$statement->bindValue(":fundEndDate", $data["fundEndDate"]);
$statement->bindValue(":fundGoal", $data["fundGoal"]);
$statement->bindValue(":fundImg", $data["fundImg"]);
$statement->bindValue(":fundContent", $data["fundContent"]);
$statement->bindValue(":fundlistImg", $data["fundlistImg"]);
$statement->bindValue(":id", $data["id"]);
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