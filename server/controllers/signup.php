<?php
require_once __DIR__ . "/../assets/__ghs__.php";
class signup extends __ghs__
{
  public function index()
  {
    $requestMethod = $_SERVER["REQUEST_METHOD"];
    if ($requestMethod === "POST") {
      $data = json_decode(file_get_contents("php://input"), true);
      echo json_encode($this->signup($data));
    } else {
      echo json_encode([
        "type" => "error",
        "status" => "failed",
        "message" => "POST Request Available Only !",
      ]);
    }
  }
  public function session_user($token)
  {
    $sql = "SELECT * FROM users WHERE token='$token'";
    $Data = $this->__select_one__($sql);
    return [
      "user_id" => $Data["user_id"],
      "user_name" => $Data["user_name"],
      "user_email" => $Data["user_email"],
      "user_img" => $Data["user_img"],
    ];
  }
  public function signup($data)
  {
    $message = "";
    $status = "";
    $token = "";
    $session = [];
    $user_name = trim($data["name"]);
    $user_email = trim($data["email"]);
    $user_pass = trim($data["password"]);
    $user_img = trim($data["image"]);
    $enc_password = sha1($user_pass);

    if ($user_img === "") {
      $img_name = "default_user.png";
    } else {
      if (!$this->__save_image__($user_img, $img_name)) {
        return ["status" => "error", "message" => "Unsupported Image File !"];
      }
    }

    if ($user_name && $user_pass && $user_email) {
      $sql_1 = "SELECT * FROM users WHERE user_email = '$user_email'";
      if (!$this->__is_exist__($sql_1)) {
        /*
        $sql = "INSERT INTO `users`(`user_name`, `user_email`, `user_password`, `user_status`, `user_login`, `user_img`, `birthday`, `token`, `district`, `nationality`,`profession`)
      VALUES ('$user_name','$user_email','$enc_password','User','0','$img_name','$birth','no token','$district','$nationality','$profession')";
        */
        $sql = "INSERT INTO `users`(`user_name`, `user_email`, `user_password`, `user_img`, `token`)
      VALUES('$user_name','$user_email','$enc_password','$img_name','')";

        $query = $this->__signup__($sql);
        if ($query) {
          $sql_2 = "SELECT * FROM users WHERE user_name='$user_name' AND user_email='$user_email'";
          $Data = $this->__select_one__($sql_2);
          $tok = $this->__encode_jwt__([
            "user_id" => $Data["user_id"],
            "user_name" => $Data["user_name"],
            "time" => time(),
          ]);
          $SQL_3 = "UPDATE users SET token='$tok' WHERE user_email='$user_email' AND user_password='$enc_password'";
          $product = $this->__insert__($SQL_3);
          $session = $this->session_user($tok, $this);
          $token = $tok;
          $message = "Registration Successfully";
          $status = "success";
        } else {
          $message = "Registration error";
          $status = "error";
        }
      } else {
        $status = "error";
        $message = "User Already Registered With This Email";
      }
    } else {
      $message = "Fields Are Required !";
      $status = "error";
    }

    return [
      "status" => $status,
      "message" => $message,
      "token" => $token ? $token : "No Token",
      "data" => $session ? $session : [],
    ];
  }
}
?>
