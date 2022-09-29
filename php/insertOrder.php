<?php
include("./DB.php");


// $pdo->exec('');
$data = json_decode(file_get_contents("php://input"), true); //接收前端傳來的json格式

//建立SQL
$sql = " INSERT INTO LangTu.order(ODATETIME, OCONSIGNEE, OCARTLIST, OPAYMENT, ODELIVERYWAY, ODELIVERYFEE, OTOTAL, OINVOCE, OEMAIL, OPHONE, OADDRESS, ONOTE) values (:datetime, :consignee, :cartlist, :payment, :deliveryWay, :deliveryFee, :total, :invoce, :email, :phone, :address, :note)  ";
// NOW()

$statement = $pdo->prepare($sql);
$statement->bindValue(":datetime", $data["datetime"]);
$statement->bindValue(":consignee", $data["consignee"]);
$statement->bindValue(":cartlist", $data["cartlist"]);
$statement->bindValue(":payment", $data["payment"]);
$statement->bindValue(":deliveryWay", $data["deliveryWay"]);
$statement->bindValue(":deliveryFee", $data["deliveryFee"]);
$statement->bindValue(":total", $data["total"]);
$statement->bindValue(":invoce", $data["invoce"]);
$statement->bindValue(":email", $data["email"]);
$statement->bindValue(":phone", $data["phone"]);
$statement->bindValue(":address", $data["address"]);
$statement->bindValue(":note", $data["note"]);
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