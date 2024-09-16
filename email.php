<?php
    require_once 'vendor/autoload.php';
    require_once 'sendmail.php';

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;


    $Fullname = $_POST["name"] ?? '';
    $fromEmail = $_POST["email"] ?? '';
    $phone = $_POST["phone"] ?? '';
    $address = $_POST["address"] ?? '';
    $residence = $_POST['residence'] ?? '';
    $city = $_POST["city"] ?? '';
    $zipCode = $_POST["zipCode"] ?? '';
    $country = $_POST["country"] ?? ''; 

    $destName = $_POST['name2'] ?? '';
    $destEmail = $_POST['email2'] ?? '';
    $destPhone = $_POST['phone2'] ?? '';
    $destAddress = $_POST['address2'] ?? '';
    $residence2 = $_POST['residence2' ] ?? '';
    $destCity = $_POST['city2'] ?? '';
    $zipCode2 = $_POST['zipCode2'] ?? '';
    $destCountry = $_POST['country2'] ?? '';

    $weight = $_POST['weight'] ?? '';
    $value = $_POST['value'] ?? '';
    $size = $_POST['value'] ?? '';
    $size2 = $_POST['value'] ?? '';
    $size3 = $_POST['value'] ?? '';

    $optionsCourier = $_POST['options-courier'] ?? '';
    $optionsContent = $_POST['options-content'] ?? '';
    $optionsShipping = $_POST['options-shipping'] ?? '';

$respuesta = [];
$bandera = true; 

    if(!preg_match('/^[a-zA-ZÀ-ÿ\s]{3,20}$/', $Fullname)){
        $respuesta += ['name' => '*required / only letters min:3 - max:20'];
        $bandera= false;    
    }elseif($Fullname == '' ){
        $respuesta += ['address' => 'Address is required'];
        $bandera= false;
    }
    if(!filter_var($fromEmail, FILTER_VALIDATE_EMAIL) ){
        $respuesta += ['email' => 'please enter a valid email']; 
        $bandera= false;
    }elseif($fromEmail == '' ){
        $respuesta += ['address' => 'Address is required'];
        $bandera= false;
    }  
    if(!preg_match('/^\d{10,14}$/', $phone)){
        $respuesta += ['phone' => 'only numbers / min:10 - max:14'];
        $bandera= false;
    }
    if($address == '' ){
        $respuesta += ['address' => 'Address is required'];
        $bandera= false;
    }
    if($city == '' ){
        $respuesta += ['city' => 'City is required'];
        $bandera= false;
    }
    if($zipCode == '' ){
        $respuesta += ['zipCode' => 'Zip Code is required'];
        $bandera= false;
    } 
    if($country == '' ){
        $respuesta += ['country' => 'Country is required'];
        $bandera= false;
    }  

  //TO 
    if(!preg_match('/^[a-zA-ZÀ-ÿ\s]{3,20}$/',$destName)){
        $respuesta += ['name2' => '*required / only letters min:3 - max:20'];
        $bandera= false;
    }
    if(!filter_var($destEmail, FILTER_VALIDATE_EMAIL) ){
        $respuesta += ['email2' => 'please enter a valid email'];
    $bandera= false;
    }elseif($destEmail == '' ){
        $respuesta += ['address' => 'Address is required'];
        $bandera= false;
    } 
    if(!preg_match('/^\d{10,14}$/', $destPhone)){
        $respuesta += ['phone2' => 'only numbers / min:10 - max:14'];
        $bandera= false;
    } 
    if($destAddress == '' ){
        $respuesta += ['address2' => 'Address is required'];
        $bandera= false;
    } 
    if($destCity == '' ){
        $respuesta += ['city2' => 'City is required'];
        $bandera= false;
    }  
    if($zipCode2 == '' ){
        $respuesta += ['zipCode2' => 'Zip Code is required'];
        $bandera= false;
    } 
    if($destCountry == '' ){
        $respuesta += ['country2' => 'Country is required'];
        $bandera= false;
    }
    
    if(!preg_match('/^\d{1,3}$/',$weight)){
        $respuesta += ['weight' => 'only numbers'];
        $bandera= false;
    }
    if(!preg_match('/^\d{1,5}$/',$value)){
        $respuesta += ['value' => 'only numbers'];
        $bandera= false;
    }
    if(!preg_match('/^\d{1,3}$/',$size)){
        $respuesta += ['size' => 'required'];
        $bandera= false;
    }elseif($size == '' ){
        $respuesta += ['size' => 'required'];
        $bandera= false;
    }    
    if($size2 == '' ){
        $respuesta += ['size2' => 'required'];
        $bandera= false;
    }
    if($size3 == '' ){
        $respuesta += ['size3' => 'required'];
        $bandera= false;
    }
    if($optionsCourier == '' ){
        $respuesta += ['options-courier' => 'select an option'];
        $bandera= false;
    }
    if($optionsContent == '' ){
        $respuesta += ['options-content' => 'select an option'];
        $bandera= false;
    }
    if($optionsShipping == '' ){
        $respuesta += ['options-shipping' => 'select an option'];
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
			$mail->addAddress('customerservice@theshippingstores.com', 'NEW QUOTE');
            /* $mail->addCC($fromEmail);
            $mail->addBCC('gerenciav17@mbezulia.com.ve'); */            
			// Content
			$mail->Subject = 'NEW QUOTE From'. '' .$Fullname;
			$mail->isHTML(true);                                  // Set email format to HTML
			$mail->Body    = correo($Fullname,$fromEmail,$phone,$address,$city,$zipCode,$country,$destName,$destEmail,
                                    $destPhone,$destAddress,$destCity,$zipCode2,$destCountry,$weight,$value,$size,$size2,$size3,
                                    $optionsCourier,$optionsContent,$optionsShipping,$residence,$residence2);
			$mail->CharSet = 'UTF-8';
			$mail->send();


    $respuesta = ['respuesta' => true];

		} catch (Exception $e) {
			$respuesta = ['respuesta' => false];
		}
    }
    echo json_encode($respuesta);