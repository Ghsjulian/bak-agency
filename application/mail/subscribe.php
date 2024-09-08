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
  $client_email = $data["client_email"];
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
  $mail->addReplyTo($client_email, "Client Name");
  // Set the recipient email address to your Hostinger email address
  $mail->addAddress("info@bakdif.com", "Server");
  $mail->Subject = "New Subscription From Client";

  $mail->Body = "
Dear Bakdif Team,

New Email Subscription From Client.

Client Email : $client_email
  
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
