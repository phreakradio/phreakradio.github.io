<?php

$name = $_REQUEST["name"];
$email = $_REQUEST["email"];
$subject = $_REQUEST["subject"];
$message = $_REQUEST["message"];
$to      = 'dmalaniouk@gmail.com';
$headers = 'From: '. $email . "\r\n" .
    'Reply-To: '. $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);




//$message."\n\n This message sent to you by ".$email;
//
//if(mail('dmalaniouk@gmail.com',$subject, $message))
//    echo "done";

?>