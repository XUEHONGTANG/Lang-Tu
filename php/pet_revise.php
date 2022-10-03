<?php
    include("./DB.php");

    // $pdo->exec('');
    // $modify = $_GET['modify'];
    $data = json_decode(file_get_contents("php://input"), true); //接收前端傳來的json格式

    // $PNAME = htmlspecialchars(isset($_GET["PNAME"]) ? $_GET["PNAME"] : "");
    // $PTYPE = htmlspecialchars(isset($_GET["PTYPE"]) ? $_GET["PTYPE"] : "");
    // $PKIND = htmlspecialchars(isset($_GET["PKIND"]) ? $_GET["PKIND"] : "");
    // $PGENDER = htmlspecialchars(isset($_GET["PGENDER"]) ? $_GET["PGENDER"] : "");
    // $PTIME = htmlspecialchars(isset($_GET["PTIME"]) ? $_GET["PTIME"] : "");
    // $PAGE = htmlspecialchars(isset($_GET["PAGE"]) ? $_GET["PAGE"] : "");
    // $PHELP = htmlspecialchars(isset($_GET["PHELP"]) ? $_GET["PHELP"] : "");
    // $PVAX = htmlspecialchars(isset($_GET["PVAX"]) ? $_GET["PVAX"] : "");
    // $PFIX = htmlspecialchars(isset($_GET["PFIX"]) ? $_GET["PFIX"] : "");
    // $PMICROCHIP = htmlspecialchars(isset($_GET["PMICROCHIP"]) ? $_GET["PMICROCHIP"] : "");


    //建立SQL
    $sql = "update pet set PNAME = ?, PTYPE = ?, PKIND = ?, PGENDER = ?, PTIME = ?, PAGE = ?, PHELP = ?, PVAX = ?, PFIX = ?, PMICROCHIP = ? where PID = ? ";

    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $data['PNAME']);
    $statement->bindValue(2, $data['PTYPE']);
    $statement->bindValue(3, $data['PKIND']);
    $statement->bindValue(4, $data['PGENDER']);
    $statement->bindValue(5, $data['PTIME']);
    $statement->bindValue(6, $data['PAGE']);
    $statement->bindValue(7, $data['PHELP']);
    $statement->bindValue(8, $data['PVAX']);
    $statement->bindValue(9, $data['PFIX']);
    $statement->bindValue(10, $data['PMICROCHIP']);
    $statement->bindValue(11, $data['modify']);
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