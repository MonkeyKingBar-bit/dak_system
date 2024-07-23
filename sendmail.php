<?php

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);
$mail->CharSet = 'utf-8';
$mail->IsHTML(true);

$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'kateiiverem@gmail.com';
$mail->Password = 'yrctzgqqskvelguo';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

// ivoryhealthy@belgianairways.com (test)
$mail->addReplyTo($_POST['email'], $_POST['name']);
$mail->setFrom('kateiiverem@gmail.com', 'DAK Systems');
$mail->addAddress('info@compressor.by');
$mail->Subject = 'Request_DAK Systems';

$body = '<h1>This message from site DAK Systems!</h1>';
if (trim(!empty($_POST['name']))) {
  $body .= '<p><strong>Name:</strong> ' . $_POST['name'] . '</p>';
}
if (trim(!empty($_POST['email']))) {
  $body .= '<p><strong>E-mail:</strong> ' . $_POST['email'] . '</p>';
}
if (trim(!empty($_POST['message']))) {
  $body .= '<p><strong>Message:</strong> ' . $_POST['message'] . '</p>';
}

$mail->Body = $body;

if (!$mail->send()) {
  $message = 'Error';
} else {
  $message = 'Message sent!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
