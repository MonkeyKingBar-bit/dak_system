<?php

use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php';
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

//Create a new PHPMailer instance
$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('en', 'phpmailer/language/');
$mail->IsHTML(true);

//Set PHPMailer to use the sendmail transport
// $mail->isSendmail();
//Set who the message is to be sent from
$mail->setFrom('kateiiverem@gmail.com ', 'DAK Systems');
//Set an alternative reply-to address
// $mail->addReplyTo('replyto@example.com', 'First Last');
//Set who the message is to be sent to
$mail->addAddress('info@compressor.by');
//Set the subject line
$mail->Subject = 'Request from DAK Systems_site';
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
// $mail->msgHTML(file_get_contents('contents.html'), __DIR__);
//Replace the plain text body with one created manually
// $mail->AltBody = 'This is a plain-text message body';
//Attach an image file
// $mail->addAttachment('images/phpmailer_mini.png');

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

//send the message, check for errors
if (!$mail->send()) {
  $message = 'Error';
} else {
  $message = 'Message sent!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
