<?php
    include("./DB.php");

    $member = json_decode(file_get_contents("php://input"), true);
    // print_r($data);
    
    
    
    $SQL = "
        insert into MEMBER(NAME, EMAIL, PASSWORD, PHONE, BIRTHDAY, GENDER)
        values(?, ?, ?, ?, ?, ?)
    ";
    $stmt = $pdo->prepare($SQL);
    $stmt->bindValue(1, $member["name"]);
    $stmt->bindValue(2, $member["email"]);
    $stmt->bindValue(3, $member["password"]);
    $stmt->bindValue(4, $member["phone"]);
    $stmt->bindValue(5, $member["birth"]);
    $stmt->bindValue(6, $member["gender"]);
    $stmt->execute();

    if($stmt->rowCount() == 1){
        $member['successful'] = true;
        $member['message'] = "註冊成功";
       //  header("Location: ../index.html");
       //  window.location: "../index.html"
    }else{
        $member['successful'] = false;
        $member['message'] = "註冊失敗";
    }
    
    // $result_count = $stmt->rowCount();
    // echo "$result_count";
    
    // $member["message"] = $result_count != 0 ? "註冊成功" : "註冊錯誤，請聯絡管理員!";
    // $member["successful"] = $result_count != 0;
    // echo json_encode($member);


    // if ($member == null) {
    //     $member["message"] = "無會員資訊";
    //     $member["successful"] = false;
    //     echo json_encode($member);
    //     return;
    // }
    
    // $SQL = " select * from MEMBER ";
    // $stmt = $pdo->prepare($SQL);
    // // $stmt->bindValue(1, $member["registerEmail"]);
    // $stmt->execute();
    // $members = $stmt->fetchAll();
    
    // if (count($members) != 0) {
    //     $member["message"] = "帳號重複";
    //     $member["successful"] = false;
    //     echo json_encode($member);
    //     return;
    // }
?>