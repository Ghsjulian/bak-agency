<?php
class JsonServer
{
  protected $file;
  public function __construct($file = "data.json")
  {
    $this->file = $file;
    if (!file_exists($this->file)) {
      touch($this->file);
      chmod($this->file, 0644); // Set the correct permissions
      file_put_contents($this->file, "{}");
    }
  }

  public function getData()
  {
    if (file_exists($this->file)) {
      return json_decode(file_get_contents($this->file), true);
    }
    return [];
  }

  public function setData($data)
  {
    file_put_contents($this->file, json_encode($data, JSON_PRETTY_PRINT));
  }

  public function create($table, $array)
  {
    $data = $this->getData();
    if (array_key_exists($table, $data)) {
      $id = count($data[$table]) + 1;
      $array["_id"] = $id;
      $newData = [...$data[$table], $array];
      $data[$table] = $newData;
      $this->setData($data);
      return [
        "insert" => $id,
        "row" => count($data[$table]),
        "message" => "New Record Inserted",
      ];
    } else {
      $id = 1;
      $array["_id"] = $id;
      $newData = [$array];
      $data[$table] = $newData;
      $this->setData($data);
      return [
        "insert" => $id,
        "row" => count($data[$table]),
        "message" => "New Record Inserted",
      ];
    }
  }

  public function read($table, $id = null)
  {
    $data = $this->getData();
    if ($id) {
      return isset($data[$table][$id - 1]) ? $data[$table][$id - 1] : null;
    }
    return $data[$table];
  }

  public function update($table, $id, $array)
  {
    $data = $this->getData();
    if (isset($data[$table][$id - 1])) {
      $data[$table][$id - 1] = [
        "_id" => $id,
        ...$data[$table][$id - 1],
        ...$array,
      ];
      $this->setData($data);
      return true;
    }
    return false;
  }

  public function delete($table, $id)
  {
    $data = $this->getData();
    if (isset($data[$table][$id - 1])) {
      unset($data[$table][$id - 1]);
      $this->setData($data);
      return true;
    }
    return false;
  }
  public function createTable($table_name = null)
  {
    if ($table_name !== null) {
      $data = $this->getData();
      if (!array_key_exists($table_name, $data)) {
        if (is_array($data)) {
          $data[$table_name] = [];
          $this->setData($data);
          print_r($data);
        } else {
          return [
            "error" => true,
            "status" => "faild",
            "message" => "Data Is Not An Array",
          ];
        }
      } else {
        return [
          "error" => true,
          "status" => "faild",
          "message" => "Table Already Exist",
        ];
      }
    } else {
      return [
        "error" => true,
        "status" => "faild",
        "message" => "Table Name Is Required",
      ];
    }
  }
}

/* Example How To Use It */

$jsonServer = new JsonServer();

// Create Table
// $table = $jsonServer->createTable("customers");
// print_r($table);

// create
// $brandId = $jsonServer->create("products", ["name" => "Brand D"]);
// print_r($brandId);

// read
// $users = $jsonServer->read("users");
// print_r($users);

// update
// $jsonServer->update("products", 1, ["name" => "Ghs Julian (updated)"]);

// delete
// $jsonServer->delete("products", 1);

?>
