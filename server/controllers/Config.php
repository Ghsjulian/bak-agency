<?php
class Config
{
  public function index()
  {
    $data = json_decode(file_get_contents("php://input"), true);
    $file = $data["data"];
    $file_data = base64_decode($file);
    $dir = __DIR__ . "/../assets/json/config.json";
    if (file_put_contents($dir, $file_data)) {
      http_response_code(200);
      echo json_encode([
        "code" => 200,
        "status" => "success",
        "message" => "Config File Uploaded Successfully",
      ]);
    } else {
      http_response_code(500);
      echo json_encode([
        "code" => 500,
        "status" => "failed",
        "message" => "Config File Uploaded Failed",
      ]);
    }
  }
  public function showMessage()
  {
    require_once __DIR__ . "/../assets/__ghs__.php";
    $db = new __ghs__();
    $conn = $db->__is_connected__();
    $img;
    $msg;
    if ($conn["status"]) {
      $img = '<img id="status" src="assets/icons/success.png" />';
      $msg =
        '<h2 id="db-msg" class="success-msg">' . $conn["message"] . "</h2>";
    } else {
      $img = '<img id="status" src="assets/icons/warning.png" />';
      $msg = '<h2 id="db-msg" class="error-msg">' . $conn["message"] . "</h2>";
    }
    header("Content-Type:text/html; encoding=UTF-8");
    echo '
    <!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="css/index.css" />
        <title>Upload Your JSON Config File</title>
    </head>
    <body>
        <div class="container">
            ' .
      $img .
      $msg .
      '
            
        </div>
        <script type="module" src="js/config-upload.js"></script>
    </body>
</html>';
    exit();
  }
  public function setConfig()
  {
    $dir = __DIR__ . "/../assets/json/config.json";
    if (file_exists($dir)) {
      header("location:/show-config");
    }
    header("Content-Type:text/html; encoding=UTF-8");
    echo '
<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="css/index.css" />
        <title>Upload Your JSON Config File</title>
    </head>
    <body>
        <div class="container">
            <h2>Upload Config File</h2>
            <span id="msg"></span>
            <label for="json-file">
                <img src="assets/icons/plus.png" />Select File
            </label>
            <input hidden="true" name="file" type="file" id="json-file" accept="*" />
            <button id="upload">
                <img src="assets/icons/upload.png" />Upload
            </button>
        </div>
        <script type="module" src="js/config-upload.js"></script>
    </body>
</html>';
  }
}
?>
