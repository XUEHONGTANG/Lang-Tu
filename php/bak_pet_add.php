<?php
    include("./DB.php");

    //      1. 接收前端傳來的JSON格式的字串，並轉成PHP中的物件
    $member = json_decode(file_get_contents("php://input"), true);

    $PNAME = htmlspecialchars(isset($_POST["PNAME"]) ? $_POST["PNAME"] : "");
    $PTYPE = htmlspecialchars(isset($_POST["PTYPE"]) ? $_POST["PTYPE"] : "");
    $PKIND = htmlspecialchars(isset($_POST["PKIND"]) ? $_POST["PKIND"] : "");
    $PGENDER = htmlspecialchars(isset($_POST["PGENDER"]) ? $_POST["PGENDER"] : "");
    $PTIME = htmlspecialchars(isset($_POST["PTIME"]) ? $_POST["PTIME"] : "");
    $PAGE = htmlspecialchars(isset($_POST["PAGE"]) ? $_POST["PAGE"] : "");
    $PHELP = htmlspecialchars(isset($_POST["PHELP"]) ? $_POST["PHELP"] : "");
    $PVAX = htmlspecialchars(isset($_POST["PVAX"]) ? $_POST["PVAX"] : "");
    $PFIX = htmlspecialchars(isset($_POST["PFIX"]) ? $_POST["PFIX"] : "");
    $PMICROCHIP = htmlspecialchars(isset($_POST["PMICROCHIP"]) ? $_POST["PMICROCHIP"] : "");

     
    //      2.將此物件中的資料，透過PDO新增(insert)至資料庫(DB)對應的資料表(Table)
    $sql = "insert into pet(PNAME, PTYPE, PKIND, PGENDER, PTIME, PAGE, PHELP, PVAX, PFIX, PMICROCHIP) Values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $PNAME);
    $statement->bindValue(2, $PTYPE);
    $statement->bindValue(3, $PKIND);
    $statement->bindValue(4, $PGENDER);
    $statement->bindValue(5, $PTIME);
    $statement->bindValue(6, $PAGE);
    $statement->bindValue(7, $PHELP);
    $statement->bindValue(8, $PVAX);
    $statement->bindValue(9, $PFIX);
    $statement->bindValue(10, $PMICROCHIP);
    $statement->execute();
?>