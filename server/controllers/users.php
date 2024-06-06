<?php

require_once __DIR__ . "/../assets/__ghs__.php";
class User extends __ghs__
{
  // The index action displays a list of all persons
  public function getUser($col)
  {
      return [
        "code" => 403,
        "type" => "error",
        "status" => "failed",
        "message" => "Unauthorized User !",
      ];
    
  }
  public function index()
  {
    echo json_encode($this->getUser("users"));
  }
}

?>
