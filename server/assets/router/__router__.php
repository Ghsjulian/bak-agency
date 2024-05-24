<?php
class Router 
{
  private $route_list = [];
  private $myControllers = [];
  private $controller_path = __DIR__ . "/../../";
  public $my_test = "Ghs Julian";
  public function addRoute($method, $path, $controller)
  {
    $this->route_list[] = [
      "method" => $method,
      "path" => $path,
      "controller" => $controller,
    ];
  }
  public function readDir()
  {
    if (is_dir($this->controller_path . "/controllers")) {
      if ($dir = opendir($this->controller_path . "/controllers")) {
        while (($file = readdir($dir)) !== false) {
          if ($file !== "." && $file !== "..") {
            array_push($this->myControllers, $file);
          }
        }
        closedir($dir);
      }
    }
  }
  public function get($path, $controller)
  {
    $this->addRoute("GET", $path, $controller);
  }
  public function post($path, $controller)
  {
    $this->addRoute("POST", $path, $controller);
  }
  public function put($path, $controller)
  {
    $this->addRoute("PUT", $path, $controller);
  }
  public function delete($path, $controller)
  {
    $this->addRoute("DELETE", $path, $controller);
  }

  // Handle the incoming request and dispatch it to the appropriate controller action
  public function run()
  {
    $isExist = true;
    $method = $_SERVER["REQUEST_METHOD"];
    $path_path = $_SERVER["REQUEST_URI"];
    foreach ($this->route_list as $route) {
      if (
        ($route["method"] === $method && $route["path"] === $path_path) ||
        $route["path"] === $path_path . "/" ||
        $path_path === "/" . $route["path"]
      ) {
        $main = explode("@", $route["controller"]);
        $route;
        $controller = $main[0];
        $action = $main[1];
        $request = $route["method"];
        $path = $route["path"];
        $parts = explode("/", $route["path"]);
        array_shift($parts);
        $param = array_pop($parts);
        array_push($parts,$param);
        $last_path = count($parts) - 1;
        $argument = $parts[$last_path];
        if ($controller && $action && $parts) {
          $this->readDir();
          foreach ($this->myControllers as $file) {
            require_once $this->controller_path . "/controllers/" . $file;
          }
          $controller = new $controller();
          call_user_func_array([$controller, $action], $parts); //$parts);
          $isExist = false;
          break;
        } else {
          $isExist = true;
        }
      }
    }

    if ($isExist) {
      echo json_encode([
        "code" => 404,
        "type" => "error",
        "status" => "false",
        "message" => "URL Doesn't Exist!",
      ]);
    }
  }
}

