<?php
require_once __DIR__ . "/../assets/__ghs__.php";
class Home extends __ghs__
{
  public function setCofig()
  {
    $dir = __DIR__ . "/../assets/json/config.json";
    if (!file_exists($dir)) {
      header("location:/set-config.php");
      exit();
    } else {
      return true;
    }
  }
  public function index()
  {
    if ($this->setCofig()) {
      echo "This Is Home Page";
    }
  }
}
