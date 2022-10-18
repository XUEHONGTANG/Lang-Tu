<?php
    include("./DB.php");

    $member = json_decode(file_get_contents("php://input"), true);
    // print_r($data);

    // if ($member == null) {
    //     $member["message"] = "無會員資訊";
    //     $member["successful"] = false;
    //     echo json_encode($member);
    //     return;
    // }
    
    $SQL = " select * from LangTu.member where EMAIL = :email ";
    $stmt = $pdo->prepare($SQL);
    $stmt->bindValue(":email", $member["email"]);
    $stmt->execute();
    $data = $stmt->fetchAll();
    
    if (count($data) != 0) {
        $member["message"] = "帳號重複";
        $member["successful"] = false;
        echo json_encode($member);
        return;
    }     
    
    $SQL = "
        insert into member(NAME, EMAIL, PASSWORD, PHONE, BIRTHDAY, GENDER)
        values(:name, :email, :password, :phone, :birth, :gender)
    ";
    $stmt = $pdo->prepare($SQL);
    $stmt->bindValue(":name", $member["name"]);
    $stmt->bindValue(":email", $member["email"]);
    $stmt->bindValue(":password", $member["password"]);
    $stmt->bindValue(":phone", $member["phone"]);
    $stmt->bindValue(":birth", $member["birth"]);
    $stmt->bindValue(":gender", $member["gender"]);
    $stmt->execute();

    $result_count = $stmt->rowCount();

    $member["message"] = $result_count != 0 ? "註冊成功" : "註冊錯誤，請聯絡管理員!";
    $member["successful"] = $result_count != 0;
    echo json_encode($member);



    // 其他組的登入方式
    // if($stmt->rowCount() === 1){
    //     $member['successful'] = true;
    //     $member['message'] = "註冊成功";
    //    //  header("Location: ../index.html");
    //    //  window.location: "../index.html"
    // }else{
    //     $member['successful'] = false;
    //     $member['message'] = "註冊失敗";
    // }
    
?>