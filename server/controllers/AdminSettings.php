<?php
require_once __DIR__ . "/../assets/__ghs__.php";
class AdminSettings extends __ghs__
{
  public function index()
  {
    $request = $_SERVER["REQUEST_METHOD"];
    if ($request === "POST") {
      switch ($_POST["type"]) {
        case "CHANGE_PROFILE_PICTURE":
          $this->changeProfile();
          break;
        case "CHANGE_ADMIN_NAME":
          $this->changeAdminName();
          break;
        case "CHANGE_ADMIN_PASSWORD":
          $this->changeAdminPassword();
          break;
        default:
          echo json_encode([
            "code" => 403,
            "type" => "error",
            "status" => "false",
            "message" => "Type Keyword Is Required !",
          ]);
          break;
      }
    } else {
      echo json_encode([
        "code" => 500,
        "type" => "error",
        "status" => "false",
        "message" => "POST Request Available Only!",
      ]);
    }
  }

  public function changeProfile()
  {
    $file = $_FILES["file"];
    $fileName = $file["name"];
    $fileTmpName = $file["tmp_name"];
    $fileSize = $file["size"];
    $fileType = $file["type"];
    $fileError = $file["error"];
    json_encode($_FILES["file"]);
  }
  public function changeAdminName()
  {
    $name = trim($_POST["admin_name"]);
    if ($name !== "") {
      echo json_encode($name);
    } else {
      echo json_encode([
        "code" => 403,
        "type" => "error",
        "status" => "false",
        "message" => "Admin Name Is Required !",
      ]);
    }
  }
  public function changeAdminPassword()
  {
    $old_pass = trim($_POST["old_pass"]);
    $new_pass = trim($_POST["new_pass"]);
    if ($old_pass && $new_pass) {
      echo json_encode($type);
    } else {
      echo json_encode([
        "code" => 403,
        "type" => "error",
        "status" => "false",
        "message" => "One Field Is Required !",
      ]);
    }
  }

  public function login($email, $password)
  {
    $status = "";
    $message = "";
    $token = "";
    $session = null;
    $user_email = trim($email);
    $user_pass = trim($password);
    $enc_password = sha1($user_pass);
    if ($user_email && $password) {
      $sql = "SELECT user_email,user_password FROM users WHERE user_email='$user_email' AND user_password='$enc_password'";
      $query = $this->__login__($sql);
      if ($query) {
        $sql2 = "SELECT * FROM users WHERE user_email='$user_email' AND user_password='$enc_password'";
        $Data = $this->__select_one__($sql2);
        $tok = $this->__encode_jwt__([
          "user_id" => $Data["user_id"],
          "user_name" => $Data["user_name"],
          "time" => time(),
        ]);
        $SQL_3 = "UPDATE users SET token='$tok' WHERE user_email='$user_email' AND user_password='$enc_password'";
        $product = $this->__insert__($SQL_3);
        $session = $this->session_user($tok, $this);
        $token = $tok;
        $status = "success";
        $message = "Login Successfully";
      } else {
        $status = "error";
        $message = "Login Failed, Invalid Credentials";
      }
    } else {
      $status = "error";
      $message = "All Fields Are Required!";
    }
    return [
      "token" => $token ? $token : "",
      "data" => $session ? $session : "",
      "status" => $status,
      "message" => $message,
    ];
  }
}
?>
