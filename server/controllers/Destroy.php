<?php
require_once __DIR__ . "/../assets/__ghs__.php";
class Destroy extends __ghs__
{
  public function index()
  {
    $request = $_SERVER["REQUEST_METHOD"];
    if ($request === "POST") {
      $data = json_decode(file_get_contents("php://input"), true);
      $key = $data["secret_key"];
      echo json_encode($key);
    } else {
      echo json_encode([
        "code" => 500,
        "type" => "error",
        "status" => "false",
        "message" => "POST Request Available Only!",
      ]);
    }
  }
}

?>
