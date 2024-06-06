<?php

require_once __DIR__ . "/assets/router/__router__.php";
require_once __DIR__ . "/assets/__ghs__.php";

$router = new Router();
$home_path = [
  "/",
  "/home",
  "/root",
  "/main",
  "/dir",
  "/path",
  "/directory",
  "/index",
  "/default",
];
// Request For Home Page

foreach ($home_path as $path) {
  $router->get("/server" . $path, "Home@index");
}

// DEFINED POST REQUEST HERE...
$router->post("/admin/login", "login@index");
$router->post("/signup", "signup@index");
$router->post("/server/site-info", "Sitedata@index");
$router->post("/admin/edit-settings", "AdminSettings@index");
$router->post("/admin/customize-site", "CustomizeSite@index");
$router->post("/server/client-contact", "Contact@index");
$router->post("/destroy", "Destroy@index");

// DEFINED GET REQUEST HERE...
$router->get("/server/users", "User@index");

/*
$router->get("/set-config", "Config@setConfig");
$router->get("/show-config", "Config@showMessage");
$router->post("/config", "Config@index");
*/

// Run the router and handle the request
$router->run();

?>
