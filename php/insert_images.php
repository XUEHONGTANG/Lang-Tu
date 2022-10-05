<?php
    //Web根目錄真實路徑, ex: C:/XAMPP/htdocs
    $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
    // echo $ServerRoot; //印出該資訊
    // exit();  //終止執行程式
    // DOCUMENT_ROOT   //動態抓取根目錄位置

    //取得上傳的檔案資訊(陣列型態)=============================
    $fileName_arr = $_FILES["profile"]["name"];    //檔案名稱含副檔名    
    $fileTmpName_arr = $_FILES["profile"]["tmp_name"]; //Server上的暫存檔路徑含檔名    
    // $fileType_arr = $_FILES["profile"]["type"];    //檔案種類        
    // $fileSize_arr = $_FILES["profile"]["size"];    //檔案尺寸
    $error_arr = $_FILES["profile"]["error"];  //錯誤代碼
    //=======================================================

    //依上傳檔案的數量跑迴圈一一處理
    for ($i = 0; $i < count($fileName_arr); $i++) {        

        //Server上的暫存檔路徑含檔名
        $filePath_Temp = $fileTmpName_arr[$i];
        
        //檔案最終存放位置
        $filePath = $ServerRoot."/tgd102_g3/images/ff/".$fileName_arr[$i];

        //判斷是否上傳成功
        if($error_arr[$i] > 0){
            echo "上傳失敗: 錯誤代碼".$error_arr[$i];
        }else{
            //將暫存檔搬移到正確位置
            move_uploaded_file($filePath_Temp, $filePath);
        }
    }    

    header('Location: ../bak_product_page.html');
    exit();
?>
