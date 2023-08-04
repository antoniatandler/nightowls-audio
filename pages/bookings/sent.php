<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Empfänger-E-Mail-Adresse
  $to = "antoniatandler@gmail.com";

  // Betreff der E-Mail
  $subject = "Booking Request";

  // Header für die E-Mail
  $headers = "From: " . $_POST["email"] . "\r\n";
  $headers .= "Reply-To: " . $_POST["email"] . "\r\n";
  $headers .= "Content-Type: text/plain;charset=utf-8\r\n";

  // E-Mail-Inhalt
  $message = "Booking Request Details:\n";
  $message .= "Artist: " . $_POST["ArtistSelect"] . "\n";
  $message .= "Location: " . $_POST["location"] . "\n";
  $message .= "Event: " . $_POST["event"] . "\n";
  $message .= "Date: " . $_POST["date"] . "\n";
  $message .= "\nContact Details:\n";
  $message .= "Full Name: " . $_POST["fullName"] . "\n";
  $message .= "Company: " . $_POST["company"] . "\n";
  $message .= "Email: " . $_POST["email"] . "\n";
  $message .= "Phone: " . $_POST["phone"] . "\n";
  $message .= "\nMessage:\n" . $_POST["message"];

  // E-Mail versenden
  $mailSent = mail($to, $subject, $message, $headers);

  if ($mailSent) {
    // Erfolgreich versendet, weiterleiten auf Erfolgsseite oder anzeigen einer Erfolgsmeldung
    header("Location: success.html");
    exit();
  } else {
    // Fehler beim Versenden der E-Mail, weiterleiten auf Fehlerseite oder anzeigen einer Fehlermeldung
    header("Location: error.html");
    exit();
  }
}
?>

