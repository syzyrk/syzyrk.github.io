<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$fromMail = 'kz232019uczen@gmail.com'; //e-mail (gmail)
$fromName = $_POST["from"];
$toMail = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];


if(isset($_POST["send"])){
	$mail = new PHPMailer(true);
	try {
		$mail->Host = 'smtp.gmail.com'; //smtp host
		$mail->isSMTP();
		$mail->SMTPAuth = true;
		$mail->Username = ''; //e-mail (gmail)
		$mail->Password = ''; //authentication code
		$mail->SMTPSecure = 'ssl';
		$mail->Port = 465;
		
		$mail->setFrom($fromMail, $fromName);
		$mail->addAddress($toMail);
		$mail->isHTML(true);
		$mail->Subject = $subject;
		$mail->Body    = $message;
		
		$mail->send();
		header("location:javascript://history.go(-1)");
	}
	catch (Exception $e) {
        echo "<script>alert('Wystąpił błąd podczas wysyłania wiadomości: {$mail->ErrorInfo}')</script>";
	}
}
?>