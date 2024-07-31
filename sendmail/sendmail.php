<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('en','phpmailer/language/');
$mail->IsHTML(true);

$mail->isSMTP();
$mail->Host = 'smtp.yandex.ru';
$mail->SMTPAuth = true;
$mail->Username = 'info@compressor.by';
// xffxcdjcjwvvyyup
// $mail->Password = 'yrctzgqqskvelguo';
$mail->Password = 'xffxcdjcjwvvyyup';
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

$mail->addReplyTo($_POST['email'], $_POST['name']);
$mail->setFrom('info@compressor.by', 'DAK Systems');
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
$mail->smtpClose();

