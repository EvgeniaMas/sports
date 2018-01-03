<?php 
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
$phone = $_POST['user_phone'];
$name = $_POST['user_name'];
$mail->isSMTP();                                      
$mail->Host = 'smtp.mail.ru';																
$mail->SMTPAuth = true;                               
$mail->Username = 'swedenwalls@mail.ru'; 
$mail->Password = '20richy18'; 
$mail->SMTPSecure = 'ssl';                            
$mail->Port = 465;
$mail->setFrom('swedenwalls@mail.ru'); 
$mail->addAddress('ЗДЕСЬ ВСТАВИТЬ АДРЕС ПОЧТЫ КУДА БУДУТ ПРИХОДИТЬ');
$mail->isHTML(true);                                 
$mail->Subject = 'Заказ c сайта';
$mail->Body    = 'Заказ обратного звонка от посетителя по имени ' .$name . ' c номером телефона ' .$phone;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Ошибка! Свяжитесь с администратом сайта';
} else {
    header('location: thanks.html');
}
?>