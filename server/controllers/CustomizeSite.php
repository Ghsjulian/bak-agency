<?php
require_once __DIR__ . "/../assets/__ghs__.php";
class CustomizeSite extends __ghs__
{
  public function index()
  {
    $request = $_SERVER["REQUEST_METHOD"];
    if ($request === "POST") {
      switch ($_POST["type"]) {
        case "UPDATE_HERO_SECTION":
          $this->UpdateHeroSection();
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

  public function UpdateHeroSection()
  {
    $defaultFiles = [
      "file1" => "default_file1.txt",
      "file2" => "default_file2.txt",
      "file3" => "default_file3.txt",
    ];

    $files = [
      "favicon" => $_FILES["favicon"] ?? null,
      "logoimg" => $_FILES["logoimg"] ?? null,
      "heroimg" => $_FILES["heroimg"] ?? null,
    ];
foreach ($files as $key => $value) {
    if ($files[$key] == null) {
        echo $files[$key];
    }
}
    // Now you can use $files as an array of processed files
    // with default files set if any of the original files were missing.
    /*
    $meta_tag = $_POST["meta_tag"];
    $title = $_POST["title"];
    $hero_header = $_POST["hero_header"];
    $hero_description = $_POST["hero_description"];
    $target_dir = __DIR__ . "/../assets/images/";
    $favicon_uploading = $target_dir . "favicon.png";
    $heroimg_uploading = $target_dir . "hero_img.png";
    $logoimg_uploading = $target_dir . "logo_img.png";
    /*
    if (move_uploaded_file($favicon["tmp_name"], $favicon_uploading)) {
      echo "Favicon Uploaded";
    }*/
    /*
    $data = $this->__select_all__("SELECT * FROM hero_section");
    print_r($data);
    $SQL = "UPDATE `hero_section` SET
    `title`='$title',`favicon`='$favicon_uploading',`meta_tag`='$meta_tag',`hero_header`='$hero_header',`hero_description`='$hero_description',`hero_img`='$heroimg_uploading' WHERE 1";
    echo $SQL;
    */
    //$product = $this->__insert__($SQL);
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
