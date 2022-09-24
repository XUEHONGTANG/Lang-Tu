<?php
    include("./DB.php");

    $member = json_decode(file_get_contents("php://input"), true);
    
    if ($member == null) {
        $member["message"] = "無會員資訊";
        $member["successful"] = false;
        echo json_encode($member);
        return;
    }
    
    $SQL = " select * from LangTu.MEMBER where EMAIL = ? ";
    $stmt = $pdo->prepare($SQL);
    $stmt->bindValue(1, $member["registerEmail"]);
    $stmt->execute();
    $members = $stmt->fetchAll();
    
    if (count($members) != 0) {
        $member["message"] = "帳號重複";
        $member["successful"] = false;
        echo json_encode($member);
        return;
    }
    
    $SQL = "
        insert into LangTu.MEMBER(NAME, EMAIL, PASSWORD, BIRTHDAY, GENDER)
        values(?, ?, ?, ?, ?)
    ";
    $stmt = $pdo->prepare($SQL);
    $stmt->bindValue(1, $member["registerName"]);
    $stmt->bindValue(2, $member["registerEmail"]);
    $stmt->bindValue(3, $member["registerPassword"]);
    $stmt->bindValue(4, $member["date"]);
    $stmt->bindValue(5, $member["gender"]);
    $stmt->execute();
    
    $result_count = $stmt->rowCount();
    
    $member["message"] = $result_count != 0 ? "註冊成功" : "註冊錯誤，請聯絡管理員!";
    $member["successful"] = $result_count != 0;
    echo json_encode($member);
?>