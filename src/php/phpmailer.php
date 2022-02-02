<?php

//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function


require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/Exception.php';
require 'PHPMailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

/*
хуй знает для чего это
// Load Composer's autoloader;
require 'vendor/autoload.php';
*/

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    // $mail->SMTPDebug = 2;                      //Enable verbose debug output
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";                                          //Send using SMTP
    $mail->Host       = 'smtp.mail.ru';    //Set the SMTP server to send through
    $mail->SMTPAuth   = true;              //Enable SMTP authentication
    $mail->Username   = 'esaul-00@mail.ru';             //SMTP username
    $mail->Password   = '4ECqEZX3Dq12BMcDnuHL';          //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;     //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('esaul-00@mail.ru', 'Beget');
    $mail->addAddress('esaul-00@mail.ru', 'Egor');     //Add a recipient
    // $mail->addReplyTo('esaul-00@mail.ru', 'Information');
    // $mail->addBCC('bcc@example.com');

    //Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);             //Set email format to HTML
    $form_subject = trim($_POST["human_msg"]);
    $Name         = trim($_POST["human_name"]);
    $email        = trim($_POST["human_email"]);
    // $Phone        = trim($_POST["Phone"]);

    $message =
    "<table style='background-color: #FF7400; width:300px; margin:auto; border: 1px solid #CD0074;'>
    <tr style='text-align:center'><th colspan=2 style='color:#C7007D;'>Данные заказчика</th></tr>
    <tr><td style='padding: 10px; border: #e9e9e9 1px solid;'> Имя заказчика </td><td style='padding: 10px; border: #e9e9e9 1px solid;text-align:center'> $Name </td></tr>
    <tr><td style='padding: 10px; border: #e9e9e9 1px solid;'> Email заказчика <td style='padding: 10px; border: #e9e9e9 1px solid;text-align:center'> $email </td></tr>
    <tr><td style='padding: 10px; border: #e9e9e9 1px solid; color: #9FEE00;'> Телефон заказчика </td><td style='padding: 10px; border: #e9e9e9 1px solid;text-align:center; color: #9FEE00;'> $Phone </td></tr></tr></table>";

    $mail->Subject = $form_subject . '!!!';


    $mail->Body    = 'Бро Запах денег с Beget <b>in bold!</b> <br> ' . $message;

    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
