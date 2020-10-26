<?php
// Check for empty fields
if(empty($_POST['nome'])      ||
   empty($_POST['email'])     ||
   empty($_POST['telefone'])     ||
   empty($_POST['cpf'])   ||
   empty($_POST['tipoContato'])   ||
   empty($_POST['tipoCategoria'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }
   
$nome = strip_tags(htmlspecialchars($_POST['nome']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$telfone = strip_tags(htmlspecialchars($_POST['telefone']));
$cpf = strip_tags(htmlspecialchars($_POST['cpf']));
$tipoContato = strip_tags(htmlspecialchars($_POST['tipoContato']));
$tipoCategoria = strip_tags(htmlspecialchars($_POST['tipoCategoria']));
   
// Create the email and send the message
$to = 'leozinpok@gmail.com'; // Add your email address in between the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Website Contact Form:  $nome";
$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nNome: $nome\n\nEmail: $email\n\nTelefone: $telefone\n\nCpf: $cpf\n\nTipoContato: $tipoContato\n\nTipoCategoria: $TipoCategoria\n\n";
$headers = "From: leozinpok@gmail.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email";   
mail($to,$email_subject,$email_body,$headers);
return true;         
?>