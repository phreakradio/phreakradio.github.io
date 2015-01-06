<?php

$name = $_REQUEST["name"];
$email = $_REQUEST["email"];
$subject = $_REQUEST["subject"];
$message = $_REQUEST["message"];
$to      = 'dmalaniouk@gmail.com';
$headers = 'From: '. $email . "\r\n" .
    'Reply-To: '. $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

$message = "THIS MESSAGE SENT FROM THE WEBSITE: dmalaniouk.com\n\n" . $message;

if(mail($to, $subject, $message, $headers))
    echo "Success";
else
    echo "Error";


?>