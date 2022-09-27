<?php
   //MySQL相關資訊
   // local_host
   // $db_host = "127.0.0.1";
   // $db_user = "root";

   
   // $db_host = "192.168.0.220";
   // $db_user = "Rose";
   // $db_pass = "liyuan0142";
   // $db_select = "LangTu";

   $db_host = "192.168.0.185";
<<<<<<< HEAD
   $db_user = "Meteor";
=======
   $db_user = "Rose";
>>>>>>> 203c0870ce7e661e56f65776339a863123c077b3
   $db_pass = "password";
   $db_select = "LangTu";

   // other_host

   //建立資料庫連線物件
   $dsn = "mysql:host=".$db_host.";dbname=".$db_select.";charset=utf8";

   //建立PDO物件，並放入指定的相關資料
   $pdo = new PDO($dsn, $db_user, $db_pass);

   // $pdo->exec('');
?>
