<?php
    include("./DB.php");

    //      1. 接收前端傳來的JSON格式的字串，並轉成PHP中的物件
    $member = json_decode(file_get_contents("php://input"), true);

    $PDNAME = htmlspecialchars(isset($_POST["PDNAME"]) ? $_POST["PDNAME"] : "");
    $INFO = htmlspecialchars(isset($_POST["INFO"]) ? $_POST["INFO"] : "");
    $PRICE = htmlspecialchars(isset($_POST["PRICE"]) ? $_POST["PRICE"] : "");
    $INVENTORY = htmlspecialchars(isset($_POST["INVENTORY"]) ? $_POST["INVENTORY"] : "");


     //      2.將此物件中的資料，透過PDO新增(insert)至資料庫(DB)對應的資料表(Table)
     $sql = "insert into products(PDNAME, INFO, PRICE, INVENTORY) Values(?, ?, ?, ?)";

    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $PDNAME);
    $statement->bindValue(2, $INFO);
    $statement->bindValue(3, $PRICE);
    $statement->bindValue(4, $INVENTORY);
    $statement->execute();





?>