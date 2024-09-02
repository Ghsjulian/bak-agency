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
  $mail->Subject = "Email For - { $client_service}";
  
  $mail->Body = '
  <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
    <head>
        <title>Email Signature</title>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    </head>
    <body style="font-size: 10pt; font-family: Arial, sans-serif">
        <table
            cellspacing="0"
            cellpadding="0"
            border="0"
            style="
                color: #534e4e;
                font-family: Arial, sans-serif;
                width: 440px;
                background: transparent !important;
            "
        >
            <tbody>
                <tr>
                    <td colspan="2">
                        <br />
                        <span
                            style="
                                font-size: 18pt;
                                color: #0c5bb4;
                                line-height: 22pt;
                                padding-bottom: 12.2px;
                                font-family: Arial, sans-serif;
                            "
                            ><strong>Client Name : Ghs Julian</strong></span
                        >
                    </td>
                </tr>
                <tr>
                    <td
                        style="
                            font-size: 12pt;
                            font-family: Arial, sans-serif;
                            width: 260px;
                            color: #534e4e;
                            line-height: 14pt;
                            padding-top: 8.2px;
                            padding-bottom: 20px;
                        "
                    >
                        <br />
                        <span
                            style="
                                padding-top: 5.2px;
                                font-size: 15pt;
                                line-height: 20px;
                                font-weight: 700;
                                color: #534e4e;
                                font-family: Arial, sans-serif;
                            "
                            >Email For - Website Development</span
                        ><br />
                    </td>
                </tr>
                <tr>
                    <td
                        style="
                            border-top: solid 1px #0c5bb4;
                            font-size: 12pt;
                            font-family: Arial, sans-serif;
                            width: 260px;
                            color: #534e4e;
                            line-height: 14pt;
                            padding-top: 8.2px;
                            padding-bottom: 15px;
                        "
                    >
                        <span
                            style="
                                padding-top: 5.2px;
                                font-size: 12pt;
                                line-height: 20px;
                                color: #534e4e;
                                font-family: Arial, sans-serif;
                            "
                            >Client Phone -
                            <span
                                style="
                                    font-weight: 700;
                                    color: #0c5bb4;
                                    font-family: Arial, sans-serif;
                                "
                                >01743789311</span
                            > </span
                        ><br /><br />
                        <span
                            style="
                                padding-top: 5.2px;
                                font-size: 12pt;
                                line-height: 20px;
                                color: #534e4e;
                                font-family: Arial, sans-serif;
                            "
                            >Client Mobile -
                            <span
                                style="
                                    font-weight: 700;
                                    color: #0c5bb4;
                                    font-family: Arial, sans-serif;
                                "
                                >01743789311</span
                            > </span
                        ><br /><br />
                        <span
                            style="
                                padding-top: 5.2px;
                                font-size: 12pt;
                                line-height: 20px;
                                color: #534e4e;
                                font-family: Arial, sans-serif;
                            "
                            >Client Email -
                            <span
                                style="
                                    font-weight: 700;
                                    color: #0c5bb4;
                                    font-family: Arial, sans-serif;
                                "
                                ><a
                                    href="mailto:{email}"
                                    style="text-decoration: none"
                                    >ghsjulian@outlook.com</a
                                ></span
                            > </span
                        ><br /><br />
                        <span
                            style="
                                padding-top: 5.2px;
                                font-size: 12pt;
                                line-height: 20px;
                                color: #534e4e;
                                font-family: Arial, sans-serif;
                            "
                            >Client Service -
                            <span
                                style="
                                    font-weight: 700;
                                    color: #0c5bb4;
                                    font-family: Arial, sans-serif;
                                "
                                >Web Development</span
                            > </span
                        ><br /><br />
                        <span
                            style="
                                padding-top: 5.2px;
                                font-size: 12pt;
                                line-height: 20px;
                                color: #534e4e;
                                font-family: Arial, sans-serif;
                            "
                            >Client Country -
                            <span
                                style="
                                    font-weight: 700;
                                    color: #0c5bb4;
                                    font-family: Arial, sans-serif;
                                "
                                >United States America</span
                            > </span
                        ><br /><br />
                        <span
                            style="
                                padding-top: 5.2px;
                                font-size: 12pt;
                                line-height: 20px;
                                color: #534e4e;
                                font-family: Arial, sans-serif;
                            "
                            >Client Address -
                            <span
                                style="
                                    font-weight: 700;
                                    color: #0c5bb4;
                                    font-family: Arial, sans-serif;
                                "
                                >Washington DC , New York</span
                            > </span
                        ><br /><br />
                        <span
                            style="
                                padding-top: 5.2px;
                                font-size: 12pt;
                                line-height: 20px;
                                color: #534e4e;
                                font-family: Arial, sans-serif;
                            "
                            >Client Instant Chat -
                            <span
                                style="
                                    font-weight: 700;
                                    color: #0c5bb4;
                                    font-family: Arial, sans-serif;
                                "
                                >Facebook</span
                            > </span
                        ><br /><br />
                    </td>
                </tr>
                <tr>
                    <td
                        colspan="2"
                        style="
                            padding-top: 12px;
                            border-top: solid 1px #0c5bb4;
                            font-size: 9pt;
                            line-height: 14px;
                        "
                    >
                        <br />
                        <span
                            style="
                                padding-top: 8.2px;
                                font-size: 15pt;
                                line-height: 10px;
                                color: #534e4e;
                                font-weight: 600;
                                font-family: Arial, sans-serif;
                            "
                            >Client Message Descriptions -</span
                        ><br /><br />
                        <p
                            style="
                                font-size: 12pt;
                                line-height: 25px;
                                color: #201e1e;
                                font-weight: 400;
                                width: 80%;
                            "
                        >
                            From where will i bring that fate which can make you
                            mine Hello we want to see if it was held up in the
                            morning and I can
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
    </body>
</html>
  ';
  
  
  
  
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
