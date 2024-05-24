<?php
require_once __DIR__ . "/../assets/__ghs__.php";
class login extends __ghs__
{
  public function index()
  {
    $request = $_SERVER["REQUEST_METHOD"];
    if ($request === "POST") {
      $data = json_decode(file_get_contents("php://input"), true);
      $email = $data["email"];
      $password = $data["password"];
      echo json_encode($this->login($email, $password));
    } else {
      echo json_encode([
        "code" => 500,
        "type" => "error",
        "status" => "false",
        "message" => "POST Request Available Only!",
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
