<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $to = "sagedickson35@gmail.com";
  $subject = "Contact Form Submission";
  $body = "Name: $name\nEmail: $email\nMessage: $message";
  mail($to, $subject, $body);
  header("Location: contact.html");
?>
