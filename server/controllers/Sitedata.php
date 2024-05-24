<?php

require_once __DIR__ . "/../assets/__ghs__.php";
class Sitedata extends __ghs__
{
  // The index action displays a list of all persons
  public function getSiteInfo()
  {
    $file_path = __DIR__ . "/../assets/json/site-config.json";
    $site_data = file_get_contents($file_path);
    return json_decode($site_data);
  }
  public function index()
  {
    $request = $_SERVER["REQUEST_METHOD"];
    if ($request === "POST") {
      $data = json_decode(file_get_contents("php://input"), true);
      $payload = $data["payloads"];
      if ($payload !== "") {
        echo json_encode($this->getSiteInfo());
      } else {
        echo http_response_code(403);
        echo json_encode([
          "code" => 403,
          "type" => "error",
          "status" => "false",
          "message" => "Unauthorized Access!",
        ]);
      }
    } else {
      echo json_encode([
        "code" => 505,
        "type" => "error",
        "status" => "false",
        "message" => "POST Request Available Only!",
      ]);
    }
  }
}

?>
