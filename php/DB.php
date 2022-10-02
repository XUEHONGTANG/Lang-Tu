<?php
   //MySQL相關資訊
   // local_host
   $db_host = "127.0.0.1";
   $db_user = "root";
   $db_pass = "password";
   $db_select = "LangTu";

   // other_host
   // $db_host = "192.168.0.220";
   // $db_user = "ff";
   // $db_pass = "liyuan0142";
   // // $db_pass = "password";
   // $db_select = "LangTu";

   //建立資料庫連線物件
   $dsn = "mysql:host=".$db_host.";dbname=".$db_select.";charset=utf8";

   //建立PDO物件，並放入指定的相關資料
   $pdo = new PDO($dsn, $db_user, $db_pass);

   // $pdo->exec('');
?>
