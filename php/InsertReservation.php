<?php
include("./DB.php");


// $pdo->exec('');
$data = json_decode(file_get_contents("php://input"), true); //接收前端傳來的json格式

//建立SQL
$sql = " INSERT INTO LangTu.adoption(ANAME, APHONE, APEOPLE, PID, ADATE, ATIME, SITUATION, AID, AEMAIL) values (:name, :phone, :people, :pid, :date, :time, :situation, :aid, :email)  ";


$statement = $pdo->prepare($sql);
$statement->bindValue(":name", $data["name"]);
$statement->bindValue(":phone", $data["phone"]);
$statement->bindValue(":people", $data["people"]);
$statement->bindValue(":pid", $data["pid"]);
$statement->bindValue(":date", $data["date"]);
$statement->bindValue(":time", $data["time"]);
$statement->bindValue(":situation", $data["situation"]);
$statement->bindValue(":aid", $data["aid"]);
$statement->bindValue(":email", $data["email"]);
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