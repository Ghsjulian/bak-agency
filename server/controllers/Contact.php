<?php
require_once __DIR__ . "/../assets/__ghs__.php";
class Contact extends __ghs__
{
  public function index()
  {
    $request = $_SERVER["REQUEST_METHOD"];
    if ($request === "POST") {
      $data = json_decode(file_get_contents("php://input"), true);
      $username = trim($data["user_name"]);
      $useremail = trim($data["user_email"]);
      $userphone = trim($data["user_phone"]);
      $message = trim($data["user_message"]);
      echo json_encode(
        $this->makeContact($username, $useremail, $userphone, $message)
      );
    } else {
      echo json_encode([
        "code" => 500,
        "type" => "error",
        "status" => "false",
        "message" => "POST Request Available Only!",
      ]);
    }
  }

  public function makeContact($username, $useremail, $userphone, $message)
  {
    $status = "";
    $message = "This Is Contact";
    return [
      "status" => $status,
      "message" => $message,
    ];
  }
}
?>
