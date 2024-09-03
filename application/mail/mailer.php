<?php

require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;

// Get the client's email address from input
//$clientEmail = $_POST['email'];

$mail = new PHPMailer;
$mail->isSMTP();
$mail->SMTPDebug = 2;
$mail->Host = 'smtp.hostinger.com';
$mail->Port = 587;
$mail->SMTPAuth = true;
$mail->Username = 'info@bakdif.com';
$mail->Password = 'NamRubel0808@';

// Set the sender email address to your Hostinger email address
$mail->setFrom('info@bakdif.com', 'Your Name');

// Set the reply-to email address to the client's email address
$mail->addReplyTo("ghsjulian@gmail.com", 'Client Name');

// Set the recipient email address to your Hostinger email address
$mail->addAddress('info@bakdif.com', 'Your Name');

$mail->Subject = 'Client Email';
$mail->Body = 'This is a message from the client.';

if (!$mail->send()) {
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'The email message was sent.';
}



/*
   require 'vendor/autoload.php';
   use PHPMailer\PHPMailer\PHPMailer;
   $mail = new PHPMailer;
   $mail->isSMTP();
   $mail->SMTPDebug = 2;
   $mail->Host = 'smtp.hostinger.com';
   $mail->Port = 587;
   $mail->SMTPAuth = true;
   $mail->Username = 'info@bakdif.com';
   $mail->Password = 'NamRubel0808@';
   $mail->setFrom('ghsjulian@gmail.com', 'Your Name');
   $mail->addReplyTo('info@bakdif.com', 'Your Name');
   $mail->addAddress('info@bakdif.com', 'Receiver Name');
   $mail->Subject = 'Checking if PHPMailer works';
   //$mail->msgHTML(file_get_contents('message.html'), __DIR__);
   $mail->Body = 'This is just a plain text message body';
   //$mail->addAttachment('attachment.txt');
   if (!$mail->send()) {
       echo 'Mailer Error: ' . $mail->ErrorInfo;
   } else {
       echo 'The email message was sent.';
   }

*/
?>
