<?php
include("./DB.php");


// $pdo->exec('');
$data = json_decode(file_get_contents("php://input"), true); //接收前端傳來的json格式

//建立SQL
$sql = " INSERT INTO project(fundContent, fundName, fundImg, fundDate, fundEndDate, fundTopContent, fundStatus, fundGoal, fundlistImg, fundNow, STATE, Amount) values (:note, :title, :image, :dateStart, :dateEnd, :content, :status, :targetAmount, :imageList, :fundNow, :state, :amount)  ";


$statement = $pdo->prepare($sql);
$statement->bindValue(":note", $data["note"]);
$statement->bindValue(":title", $data["title"]);
$statement->bindValue(":image", $data["image"]);
$statement->bindValue(":dateStart", $data["dateStart"]);
$statement->bindValue(":dateEnd", $data["dateEnd"]);
$statement->bindValue(":content", $data["content"]);
$statement->bindValue(":targetAmount", $data["targetAmount"]);
$statement->bindValue(":status", $data["status"]);
$statement->bindValue(":fundNow", $data["fundNow"]);
$statement->bindValue(":state", $data["state"]);
$statement->bindValue(":amount", $data["amount"]);
$statement->bindValue(":imageList", $data["imageList"]);

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