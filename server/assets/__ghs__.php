<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header(
  "Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
);
// require __DIR__ . "/router/__router__.php";
/*_________ __ghs__ _________*/
class __ghs__ 
{
  private $conn = false;
  private $result;
  private $secret_key;
  private $host;
  private $user;
  private $password;
  private $db_name;
  private $main_dir = __DIR__ . "/../assets";
  public function __construct()
  {
    if (!$this->conn) {
      $this->__get_config__();
      $connect = new mysqli(
        $this->host,
        $this->user,
        $this->password,
        $this->db_name
      );
      if ($connect->connect_error) {
        return $connect->connect_error;
      } else {
        $this->conn = $connect;
      }
    }
  }

  private function __get_config__()
  {
    if (!file_exists($this->main_dir . "/json/config.json")) {
      header("location:/set-config");
      exit();
    } else {
      $config = json_decode(
        file_get_contents($this->main_dir . "/json/config.json"),
        true
      );
      $this->host = $config["db_info"]["host_name"];
      $this->user = $config["db_info"]["user_name"];
      $this->password = $config["db_info"]["password"];
      $this->db_name = $config["db_info"]["db_name"];
      $this->secret_key = $config["db_info"]["secret_key"];
    }
  }
  /* For Checking If Connect Or Not */
  public function __is_connected__()
  {
    if ($this->conn) {
      return [
          "status" => true,
          "message" => "Database Connected Successfully !"
          ];
    } else {
      return [
          "status" => false,
          "message" => "Database Connected Failed !"
          ];
    }
  }

  /* ======= Database Methods ====== */
  public function __insert__($sql)
  {
    if ($sql) {
      $query = mysqli_query($this->conn, $sql);
      if ($query) {
        return true;
      } else {
        return false;
      }
    } else {
      return "Please Insert SQL Query!";
    }
  }
  public function __update__($sql)
  {
    if ($sql) {
      $query = mysqli_query($this->conn, $sql);
      if ($query) {
        return true;
      } else {
        return false;
      }
    } else {
      return "Please Insert SQL Query!";
    }
  }
  public function __select_all__($sql)
  {
    if ($sql) {
      $query = mysqli_query($this->conn, $sql);
      while ($data = mysqli_fetch_all($query, true)) {
        return $data;
      }
    } else {
      echo "Please Insert SQL Query!";
    }
  }
  public function __select_one__($sql)
  {
    if ($sql) {
      $query = mysqli_query($this->conn, $sql);
      if (mysqli_num_rows($query) > 0) {
        return mysqli_fetch_assoc($query);
      } else {
        return false;
      }
    } else {
      return "Please Insert SQL Query!";
    }
  }
  public function __login__($sql)
  {
    if ($sql) {
      $query = mysqli_query($this->conn, $sql);
      if (mysqli_num_rows($query) == 1) {
        return mysqli_fetch_assoc($query);
      } else {
        return false;
      }
    } else {
      return "Please Insert SQL Query!";
    }
  }
  public function __signup__($sql)
  {
    if ($sql) {
      $query = mysqli_query($this->conn, $sql);
      if ($query) {
        return true;
      } else {
        return false;
      }
    } else {
      return "Please Insert SQL Query!";
    }
  }
  public function create_table($tableName, $columns)
  {
    $query = "CREATE TABLE IF NOT EXISTS $tableName (";
    foreach ($columns as $column) {
      $query .=
        $column["name"] .
        " " .
        $column["type"] .
        " " .
        $column["constraints"] .
        ", ";
    }
    $query = rtrim($query, ", ") . ")";
    return mysqli_query($this->conn, $query);
  }

  public function create_db($dbName)
  {
    $query = "CREATE DATABASE IF NOT EXISTS $dbName";
    return mysqli_query($this->conn, $query);
  }

  public function create_user($userName, $password)
  {
    $query = "CREATE USER '$userName'@'localhost' IDENTIFIED BY '$password'";
    return mysqli_query($this->conn, $query);
  }
  public function insert($tableName, $columns, $values)
  {
    $query = "INSERT INTO $tableName (";
    foreach ($columns as $column) {
      $query .= $column . ", ";
    }
    $query = rtrim($query, ", ") . ") VALUES (";
    foreach ($values as $value) {
      $query .= "'$value', ";
    }
    $query = rtrim($query, ", ") . ")";
    return mysqli_query($this->conn, $query);
  }
  public function select_by_id($tableName, $whereClause)
  {
    $query = "SELECT * FROM $tableName WHERE $whereClause";
    $result = mysqli_query($this->conn, $query);
    if (mysqli_num_rows($result) > 0) {
      return mysqli_fetch_assoc($result);
    } else {
      return false;
    }
  }
  public function select_all($tableName)
  {
    $query = "SELECT * FROM $tableName";
    $result = mysqli_query($this->conn, $query);
    return $result->fetch_all(MYSQLI_ASSOC);
  }

  public function select_one($tableName, $whereClause)
  {
    $query = "SELECT * FROM $tableName WHERE $whereClause";
    $result = mysqli_query($this->conn, $query);
    if (mysqli_num_rows($result) > 0) {
      return mysqli_fetch_assoc($result);
    } else {
      return false;
    }
  }

  public function __delete__($sql)
  {
    if ($sql) {
      $query = mysqli_query($this->conn, $sql);
      if ($query) {
        return true;
      } else {
        return false;
      }
    } else {
      return "Please Insert SQL Query!";
    }
  }
  public function __is_exist__($sql)
  {
    if ($sql) {
      $query = mysqli_query($this->conn, $sql);
      if (mysqli_num_rows($query) > 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return "Please Insert SQL Query!";
    }
  }
  public function is_exist_db($dbName)
  {
    $query = "SHOW DATABASES LIKE '$dbName'";
    $result = mysqli_query($this->conn, $query);
    if ($result->num_rows > 0) {
      return true;
    } else {
      return false;
    }
  }

  public function is_exist_user($userName)
  {
    $query = "SELECT EXISTS(SELECT * FROM mysql.user WHERE User='$userName') AS isExist";
    $result = mysqli_query($this->conn, $query);
    $row = $result->fetch_assoc();
    return $row["isExist"] == 1;
  }

  public function is_exist_table($tableName)
  {
    $query = "SHOW TABLES LIKE '$tableName'";
    $result = mysqli_query($this->conn, $query);
    if ($result->num_rows > 0) {
      return true;
    } else {
      return false;
    }
  }

  public function img_to_base64($imagePath)
  {
    $imageData = file_get_contents($imagePath);
    return base64_encode($imageData);
  }

  public function base64_to_binary($base64String)
  {
    $imageData = base64_decode($base64String);
    return $imageData;
  }

  public function binary_to_base64($binaryData)
  {
    return base64_encode($binaryData);
  }

  public function binary_to_img($binaryData, $outputPath)
  {
    file_put_contents($outputPath, $binaryData);
  }

  public function __scape__($value)
  {
    return mysqli_real_escape_string($this->conn, $value);
  }
  /*    OTHER USEFUL METHODS    */
  /*    Creating Random String  */
  public function __get_string__($len = 8)
  {
    $random = openssl_random_pseudo_bytes($len);
    $hex = bin2hex($random);
    $string = substr($hex, 0, $len);
    return "__ghs__" . $string;
  }
  /* Creating Random Number Generator */
  public function __get_number__($len = 5)
  {
    $random = openssl_random_pseudo_bytes($len);
    $number = 0;
    for ($i = 0; $i < $len; $i++) {
      $number = $number * 10 + (ord($random[$i]) % 10);
    }
    return $number;
  }

  /*   Get Data Type   */
  public function __get_type__($var)
  {
    if (is_array($var)) {
      return "array";
    } elseif (is_object($var)) {
      return "object";
    } elseif (is_int($var)) {
      return "integer";
    } elseif (is_float($var)) {
      return "float";
    } elseif (is_string($var)) {
      return "string";
    } elseif (is_bool($var)) {
      return "boolean";
    } elseif (is_null($var)) {
      return "null";
    } elseif (is_resource($var)) {
      return "resource";
    } else {
      return "unknown";
    }
  }
  /*     Encrypt Any String    */
  public function __encrypt__($value)
  {
    if ($this->__get_type__($value) == "string") {
      $iv = openssl_random_pseudo_bytes(
        openssl_cipher_iv_length("aes-256-cbc")
      );
      $encrypted = openssl_encrypt(
        $value,
        "aes-256-cbc",
        $this->secret_key,
        0,
        $iv
      );
      return base64_encode($iv . $encrypted);
    } else {
      return "Send A String Which You Want To Encrypt.";
    }
  }
  /* Decrypt The Encrypted String  */

  public function __decrypt__($encrypted)
  {
    if ($this->__get_type__($encrypted) == "string") {
      $decoded = base64_decode($encrypted);
      $iv = substr($decoded, 0, openssl_cipher_iv_length("aes-256-cbc"));
      $encrypted = substr($decoded, openssl_cipher_iv_length("aes-256-cbc"));
      return openssl_decrypt(
        $encrypted,
        "aes-256-cbc",
        $this->secret_key,
        0,
        $iv
      );
    } else {
      return "Send A Encrypted String Which You Want To Decrypt.";
    }
  }
  /* Save Base64 Image String As Image */
  public function __save_image__($image, $img_name)
  {
    if ($image && $img_name) {
      $imageData = base64_decode(
        preg_replace("#^data:image/\w+;base64,#i", "", $image)
      );
      $path = __DIR__ . "/images/";
      try {
        if (!file_exists($path)) {
          mkdir($path, 0777, true);
        }
        if (file_put_contents($path . $img_name, $imageData)) {
          $upload_file = $path . $img_name;
          $image_size = getimagesize($upload_file);
          $image_size_in_bytes = $image_size[0] * $image_size[1] * 3;
          if ($image_size_in_bytes > 2000000) {
            unlink($upload_file);
            return false;
          } else {
            return true;
          }
        } else {
          return false;
        }
      } catch (Exception $e) {
        return $e;
      }
    } else {
      return "First Argument Image File Strings And Second Argument The Name Of The Image Which You Want To Save As.";
    }
  }
  /* CREATE JSON WEB TOKEN */
  public function __encode_jwt__($payload)
  {
    $header = [
      "alg" => "HS256",
      "typ" => "JWT",
    ];
    $headerEncoded = rtrim(
      strtr(base64_encode(json_encode($header)), "+/", "-_"),
      "="
    );
    // Payload Encoded
    $payloadEncoded = rtrim(
      strtr(base64_encode(json_encode($payload)), "+/", "-_"),
      "="
    );
    // Generate the signature
    $has_key = $headerEncoded . "." . $payloadEncoded . $this->secret_key;
    $signature = rtrim(
      strtr(base64_encode(hash_hmac("sha256", $has_key, true)), "+/", "-_"),
      "="
    );
    $JWT = $headerEncoded . "." . $payloadEncoded . "." . $signature;
    return $JWT;
  }

  public function __decode_jwt__($jwt)
  {
    // Split the JWT into its three parts
    $parts = explode(".", $jwt);
    // Decode the header and payload
    $header = json_decode(base64_decode(strtr($parts[0], "-_", "+/")), true);
    $payload = json_decode(base64_decode(strtr($parts[1], "-_", "+/")), true);

    $has_key = $parts[0] . "." . $parts[1] . $this->secret_key;
    // Verify the signature
    $signature = hash_hmac("sha256", $has_key, true);
    $signature = rtrim(strtr(base64_encode($signature), "+/", "-_"), "=");

    // Check if the signature is valid
    if ($signature === $parts[2]) {
      // Output the decoded JWT
      return $payload;
    } else {
      echo "Invalid signature";
    }
  }
  public function __validate__($arr)
  {
    if ($this->__get_type__($arr) == "array") {
      $result = [];
      foreach ($arr as $key => $value) {
        if (trim($arr[$key]) == "") {
          array_push($result, $key . " Is Required!");
        }
      }
      if (count($result) > 0) {
        echo json_encode([
          "code" => 403,
          "status" => "failed",
          "message" => $result,
        ]);
      } else {
        return true;
      }
    } else {
      return "The Argument Required An Array !";
    }
  }
  function get_all_dir($directory)
  {
    $files = scandir($directory);
    foreach ($files as $file) {
      if ($file !== "." && $file !== "..") {
        $path = $directory . "/" . $file;
        if (is_file($path)) {
          yield $path;
        }
      }
    }
    $directory = "path/to/directory"; // Replace with the actual directory path
    $fileGenerator = iterateFiles($directory);
    foreach ($fileGenerator as $file) {
      echo "File: $file\n";
    }
  }
}

?>
