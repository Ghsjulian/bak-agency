<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header(
  "Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
);

require "vendor/autoload.php";
use PHPMailer\PHPMailer\PHPMailer;

$request = $_SERVER["REQUEST_METHOD"];
if ($request === "POST") {
  $data = json_decode(file_get_contents("php://input"), true);
  // echo json_encode($data);
  $clent_name = $data["clent_name"];
  $client_phone = $data["client_phone"];
  $client_email = $data["client_email"];
  $client_address = $data["client_address"];
  $client_country = $data["client_country"];
  $client_service = $data["client_service"];
  $client_messanger = $data["client_messanger"];
  $instant_type = $data["instant_type"];
  $client_message = $data["client_message"];
  $mail = new PHPMailer();
  $mail->isSMTP();
  $mail->SMTPDebug = 2;
  $mail->Host = "smtp.hostinger.com";
  $mail->Port = 587;
  $mail->SMTPAuth = true;
  $mail->Username = "info@bakdif.com";
  $mail->Password = "NamRubel0808@";
  // Set the sender email address to your Hostinger email address
  $mail->setFrom("info@bakdif.com", "Bakdif Farm");
  // Set the reply-to email address to the client's email address
  $mail->addReplyTo($client_email, $clent_name);
  // Set the recipient email address to your Hostinger email address
  $mail->addAddress("info@bakdif.com", "Server");
  $mail->Subject = "Email For - $client_service";

  $mail->Body = "
  
Subject: Email For - $client_service

Dear Bakdif Team,

$client_message

Client Phone         :   $client_phone
Client Mobile        :   $client_phone
Client Email         :   $client_email
Client Address       :   $client_address
Client Service       :   $client_service
Client Instant Name  :   $client_messanger
Client Instant Chat  :   $instant_type

Please let me know if you have recived my email or reply me here.

Best Regards From Clients,
$clent_name
  
  ";

  if (!$mail->send()) {
    echo json_encode([
      "code" => 403,
      "type" => "error",
      "status" => false,
      "message" => $mail->ErrorInfo,
    ]);
  } else {
    echo json_encode([
      "code" => 200,
      "type" => "success",
      "status" => true,
      "message" => "Email Has Been Sent Successfully",
    ]);
  }
} else {
  echo json_encode([
    "code" => 403,
    "type" => "error",
    "status" => false,
    "message" => "POST Request Available Only!",
  ]);
}
?>
