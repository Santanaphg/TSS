<?php
    require_once 'vendor/autoload.php';
    require_once 'contactmail.php';

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;


    $name = $_POST["name"] ?? '';
    $email = $_POST["email"] ?? '';
    $subject = $_POST["subject"] ?? '';
    $message = $_POST['message'] ??'';

$respuesta = [];
$bandera = true; 

    if(!preg_match('/^[a-zA-ZÀ-ÿ\s]{3,20}$/', $name)){
        $respuesta += ['name' => 'required (only letters)'];
        $bandera= false;    
    }elseif($name == '' ){
        $respuesta += ['name' => 'name is required'];
        $bandera= false;
    }
    if(!filter_var($email, FILTER_VALIDATE_EMAIL) ){
        $respuesta += ['email' => 'please enter a valid email']; 
        $bandera= false;
    }elseif($email == '' ){
        $respuesta += ['email' => 'email is required'];
        $bandera= false;
    }  
    if(!preg_match('/^[a-zA-ZÀ-ÿ\s]{3,20}$/', $subject)){
        $respuesta += ['subject' => 'subject is required'];
        $bandera= false;
    }
    if($message == '' ){
        $respuesta += ['message' => 'message is required'];
        $bandera= false;
    }


if($bandera){
$mail = new PHPMailer(true); 
		try {
			//Server settings
		    $mail->SMTPDebug = 0;                                       // Enable verbose debug output
			$mail->isSMTP();                                            // Set mailer to use SMTP
			$mail->Host       = 'smtp.gmail.com';  // Specify main and backup SMTP servers
			$mail->SMTPAuth   = true;                                   // Enable SMTP authentication
			$mail->Username   = 'customerservice@theshippingstores.com';                     // SMTP username
			$mail->Password   = 'ehaicsrfodzusxdy';                               // SMTP password
			$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;                                  // Enable TLS encryption, `ssl` also accepted
			$mail->Port       = 587;                                    // TCP port to connect to
			//Recipients
			$mail->setFrom('customerservice@theshippingstores.com');
			$mail->addAddress('customerservice@theshippingstores.com', 'NEW MESSAGE');
            /* $mail->addCC($fromEmail);
            $mail->addBCC('gerenciav17@mbezulia.com.ve'); */            
			// Content
			$mail->Subject = 'NEW MESSAGE From'. '' .$name;
			$mail->isHTML(true);                                  // Set email format to HTML
			$mail->Body    = email($name,$email,$subject,$message);
			$mail->CharSet = 'UTF-8';
			$mail->send();


    $respuesta = ['respuesta' => true];

		} catch (Exception $e) {
			$respuesta = ['respuesta' => false];
		}
    }
    echo json_encode($respuesta);