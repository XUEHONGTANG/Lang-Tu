<?php
include("./DB.php");


// $pdo->exec('');
$data = json_decode(file_get_contents("php://input"), true); //接收前端傳來的json格式

//建立SQL
$sql = " INSERT INTO LangTu.donate(DDATE, DNAME, DPHONE, DEMAIL, DMETHODS, DAMOUNT, DAUDIT, DTYPE, DNATIONALITY, DIDNUMBER, DGENDER, DBIRTHDAY, DADDRESS, DRECEIPT, DTITLE, DCREDIT, DID, PLAN, fundNow, Amount) values (:date, :name, :phone, :email, :methods, :planPrice, :audit, :planMethod, :nationality, :idname, :gender, :birthday, :address, :receipt, :header, :public, :serialNum, :planName, :fundNow,  :fundPeople) ";


$statement = $pdo->prepare($sql);
$statement->bindValue(":date", $data["date"]);
$statement->bindValue(":name", $data["name"]);
$statement->bindValue(":phone", $data["phone"]);
$statement->bindValue(":email", $data["email"]);
$statement->bindValue(":methods", $data["methods"]);
$statement->bindValue(":audit", $data["audit"]);
$statement->bindValue(":nationality", $data["nationality"]);
$statement->bindValue(":idname", $data["idname"]);
$statement->bindValue(":gender", $data["gender"]);
$statement->bindValue(":birthday", $data["birthday"]);
$statement->bindValue(":address", $data["address"]);
$statement->bindValue(":receipt", $data["receipt"]);
$statement->bindValue(":header", $data["header"]);
$statement->bindValue(":public", $data["public"]);
$statement->bindValue(":serialNum", $data["serialNum"]);
$statement->bindValue(":planMethod", $data["planMethod"]);
$statement->bindValue(":planName", $data["planName"]);
$statement->bindValue(":planPrice", $data["planPrice"]);
$statement->bindValue(":fundNow", $data["fundNow"]);
$statement->bindValue(":fundPeople", $data["fundPeople"]);
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