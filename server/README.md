### Description : 

---

**In the root directory, open 'config.json' file. edit the database config**
**Set your database connection info**
**Now open 'http://localhost:8080'**
**Upload the 'config.json' file.**
**If config file is correct, you'll see success message**

---

### How To Use Database : 

<br><br>
<center>
 <h2>Manually SQL Query : </h2>
</center>

---

**Include The Database File :**

```php
// Include Database
// Create An Object 

require_once("database/database.php");
$db = new __ghs__();
```

---

**Check Is Connected :**

```php
// If Configuration Is Correct
//You'll See Connection Successfully 

$conn = $db->__is_connected__();
echo $conn;
```
---

**Insert Record Manually :**

```php
// Create Insert SQL Query 

$sql = "INSERT INTO table(...)VALUES(...)";
$query = $db->__insert__($sql);
print_r($query);
```
---

**Select One Record Manually :**

```php
// Create Select SQL Query 

$sql = "SELECT * FROM table WHERE id='1'";
$query = $db->__select_one__($sql);
print_r($query);
```
---

**Select All Record Manually :**

```php
// Create Select All SQL Query 

$sql = "SELECT * FROM table";
$query = $db->__select_all__($sql);
print_r($query);
```
---

**Update Record Manually :**

```php
// Create Update SQL Query 

$sql = "UPDATE table SET column_name='value' WHERE id='1'";
$query = $db->__update__($sql);
print_r($query);
```
---

**Delete Record Manually :**

```php
// Create Delete SQL Query 

$sql = "DELETE FROM table WHERE id='1'";
$query = $db->__delete__($sql);
print_r($query);
```
---

**User Login Record Manually :**

```php
// Create Login SQL Query 

$sql = "SELECT email, password FROM users WHERE email='value' AND password='value'";
$query = $db->__login__($sql);
print_r($query);
```
---

**Signup Record Manually :**

```php
// Create Signup SQL Query 

$sql = "INSERT INTO users(...)VALUES(...)";
$query = $db->__signup__($sql);
print_r($query);
```
---

**If Exist Record Manually :**

```php
// Create Signup SQL Query 

$sql = "SELECT * FROM table WHERE id='1'";
$query = $db->__is_exist__($sql);
print_r($query);
```
---

**Scape The SQL Injection :**

```php
// Create SQL Query And Remove Scape

$sql = "SELECT * FROM table WHERE id='1'";
$query = $db->__scape__($sql);
echo $query;
```
---

<br><br>
<center>
 <h2>Automatic SQL Query : </h2>
</center>

---

**If Exist Database :**

```php
// Check If Exist Database 

$query = $db->is_exist_db("db_name");
print_r($query);
```

---

**If Exist Database User :**

```php
// Check If Exist Database User

$query = $db->is_exist_user("root");
print_r($query);
```


---

**If Exist Table :**

```php
// Check If Exist Table

$query = $db->is_exist_table("table_name");
print_r($query);
```

---

**Create New Database :**

```php
// Create New Database 

$query = $db->create_db("my_new_db");
print_r($query);
```

---

**Create New Table :**

```php
// Create New Table
// Second Parameters Will Be An Array Column Name
$query = $db->create_table("table",[]);
print_r($query);
```

---

**Create New Database User :**

```php
// Create New Database User
$query = $db->create_user("username","password");
print_r($query);
```


---

**Insert One Record :**

```php
// Insert One Record

$query = $db->insert("table_name",['columns...'],['values...']);
print_r($query);
```

---

**Select One Record Only :**

```php
// Select One Record Only

$query = $db->select_one("table_name","id=1");
print_r($query);
```


---

**Select All Records :**

```php
// Select All Records 

$query = $db->select_all("table_name");
print_r($query);
```


---

**Select Record By ID :**

```php
// Select Record With ID 

$query = $db->select_by_id("table_name","id=1");
print_r($query);
```

---

<br><br>
<center>
 <h2>Some Useful Methods : </h2>
</center>

---

**Get Random String :**

```php
// Send Length Of String 
// If Don't Have Parameters 
// It Will Set Default length 8

$query = $db->__get_string__(10);
print_r($query);
```

---

**Get Random Number :**

```php
// Send Length Of Number 
// If Don't Have Parameters 
// It Will Set Default length 5

$query = $db->__get_string__(8);
print_r($query);
```

---

**Get Type Of Any Word Or Key :**

```php
// Get Type Anything 
// It Will Print Array

$query = $db->__get_type__([]);
print_r($query);
```
---

**Get Encrypted String :**

```php
// Send A String 
// It Will Return Encrypted String 

$query = $db->__encrypt__("string");
print_r($query);
```

---

**Get Decrypt String :**

```php
// Send A Encrypted String 
// It Will Return Decrypt String 

$query = $db->__decrypt__($encrypted_string);
print_r($query);
```

---

**Save Image From Base64 String :**

```php
// Send Base64 String Of An Image 
// It Will Save As An Image File

$query = $db->__save_image__($image_string,$image_name);
print_r($query);
```
---

**Create JWT Token :**

```php
// Send An Array 
// It Will Return JWT Token 

$query = $db->__encode_jwt__([
          "user_id" => 15,
          "user_name" => "Ghs Julian",
          "time" => time(),
        ]);
print_r($query);
```

---

**Decode/Extract Data From JWT Token :**

```php
// Send An JWT Token 
// It Will Return Array Of Info Data

$query = $db->__encode_jwt__("token");
print_r($query);
```

---

**Validate A Value Is Empty :**

```php
// Send An Array With Values 
// It Will Return Error If Any Value Is Required 

$query = $db->__validate__([
            "name" => "Ghs Julian",
            "email" => "ghsjulan@gmail.com",
            "password" => ""
        ]);
print_r($query);

// It Will Print Password Required

```

---

**Image To Base64 String :**

```php
// Send An File Path
// It Will Return Base64 String  Of The Image 

$query = $db->img_to_base64("/img/demo.png");
print_r($query);

// It Will Print Base64 String Of The Image 

```

---

**Base64 String To Binary Data :**

```php
// Send Base64 String 
// It Will Return Binary Data Of Base64 Strings 

$query = $db->base64_to_binary("some_base64_string");
print_r($query);

// It Will Print Binary Data

```

---

**Binary Data To Base64 String :**

```php
// Send Binary Data 
// It Will Return Base64 Strings 

$query = $db->binary_to_base64("some_binary_data");
print_r($query);

// It Will Print Base64 String

```

---

**Binary Data To Image Creation :**

```php
// Send Binary Data and Output Path
// It Will Save The Binary As An Image 

$query = $db->binary_to_img("some_binary_data","/img/my_img.png");
print_r($query);

// It Will Create An Image File

```
