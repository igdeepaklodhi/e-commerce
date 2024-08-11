<?php
// Enable error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $mail = new PHPMailer(true);

        try {
            // SMTP configuration
            $mail->isSMTP();
            $mail->Host       = 'smtp.gmail.com';
            $mail->SMTPAuth   = true;
            $mail->Username   = 'your-email@gmail.com'; // Your Gmail address
            $mail->Password   = 'your-email-password'; // Your Gmail password or App Password
            $mail->SMTPSecure = 'tls';
            $mail->Port       = 587;

            // Email settings
            $mail->setFrom('no-reply@deepaksingh.free.nf', 'Mailer');
            $mail->addAddress('lodhideepaksingh091@gmail.com', 'Deepak Singh');

            $mail->isHTML(true);
            $mail->Subject = 'New Newsletter Subscription';
            $mail->Body    = 'You have a new subscriber to your newsletter: ' . $email;
            $mail->AltBody = 'You have a new subscriber to your newsletter: ' . $email;

            $mail->send();
            header("Location: http://deepaksingh.free.nf/thank-you.html");
            exit;
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    } else {
        echo "Invalid email address.";
    }
} else {
    echo "Invalid request method.";
}
?>
