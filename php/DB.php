<?php
   //MySQL相關資訊
   $db_host = "192.168.0.220";
<<<<<<< HEAD
   $db_user = "Rose";
=======
   $db_user = "TXH";
>>>>>>> e74f770a9e8515e2cf64e5995c44f18c659ce0bc
   $db_pass = "liyuan0142";
   $db_select = "LangTu";

   //建立資料庫連線物件
   $dsn = "mysql:host=".$db_host.";dbname=".$db_select.";charset=utf8";

   //建立PDO物件，並放入指定的相關資料
   $pdo = new PDO($dsn, $db_user, $db_pass);

   // $pdo->exec('');
?>