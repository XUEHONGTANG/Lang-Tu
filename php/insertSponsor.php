<?php
include("./DB.php");


// $pdo->exec('');
$data = json_decode(file_get_contents("php://input"), true); //接收前端傳來的json格式

//建立SQL
$sql = " INSERT INTO LangTu.project(fundContent, fundName, fundImg, fundDate, fundEndDate, fundTopContent, fundStatus, fundGoal) values (:note, :title, :image, :dateStart, :dateEnd, :content, :status, :targetAmount)  ";


$statement = $pdo->prepare($sql);
$statement->bindValue(":title", $data["title"]);
$statement->bindValue(":content", $data["content"]);
$statement->bindValue(":dateStart", $data["dateStart"]);
$statement->bindValue(":dateEnd", $data["dateEnd"]);
$statement->bindValue(":image", $data["image"]);
$statement->bindValue(":note", $data["note"]);
$statement->bindValue(":status", $data["status"]);
$statement->bindValue(":targetAmount", $data["targetAmount"]);
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