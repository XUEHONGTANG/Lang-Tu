<?php

    include("./DB.php");

    //1. 接收前端傳來的JSON格式的字串，並轉成PHP中的物件
    $data = json_decode(file_get_contents("php://input"), true);

    //      2.將此物件中的資料，透過PDO新增(insert)至資料庫(DB)對應的資料表(Table)
    $sql = "insert into news(title, category, year, date, content, image) Values(?, ?, ?, ?, ?, ?)";

    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $data['title']);
    $statement->bindValue(2, $data['category']);
    $statement->bindValue(3, $data['year']);
    $statement->bindValue(4, $data['date']);
    $statement->bindValue(5, $data['content']);
    $statement->bindValue(6, $data['pic']);
    $statement->execute();

    echo json_encode($data);
?>