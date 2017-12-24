<?php

require 'connection.php';
$conn    = Connect();
$name    = $conn->real_escape_string($_POST['name']);
$position  = $conn->real_escape_string($_POST['position']);
$organizer   = $conn->real_escape_string($_POST['organizer']);
$mail = $conn->real_escape_string($_POST['mail']);
$country    = $conn->real_escape_string($_POST['country']);
$author   = $conn->real_escape_string($_POST['author']);
$phone    = $conn->real_escape_string($_POST['phone']);
$nameofauthor = $conn->real_escape_string($_POST['nameofauthor']);
$title    = $conn->real_escape_string($_POST['title']);
$broadarea   = $conn->real_escape_string($_POST['broadarea']);
$accompany    = $conn->real_escape_string($_POST['accompany']);
$arrivaldate  = $conn->real_escape_string($_POST['arrivaldate']);
$departuredate    = $conn->real_escape_string($_POST['departuredate']);
$radio1 = $conn->real_escape_string($_POST['radio1']);
$radio2 = $conn->real_escape_string($_POST['radio2']);












$query   = "INSERT into tb_cform (name, position, organizer, mail, country, author, phone, nameofauthor, title, broadarea, accompany, arrivaldate, departuredate, accomodation, modeofpayment) VALUES('" . $name . "','" . $position . "','" . $organizer. "','" . $mail. "'
,'" . $country . "','" . $author . "','" . $phone . "','" . $nameofauthor . "','" . $title . "','" . $broadarea . "','" . $accompany . "',
'" . $arrivaldate. "','" . $departuredateW . "'
,'" . $radio1 . "','" . $radio2 . "')";
$success = $conn->query($query);

if (!$success) {
    die("Couldn't enter data: ".$conn->error);

}

echo "Thank You For Contacting Us! IN CASE YOU SELECTED ONLINE MODE OF PAYMENT MAKE SURE YOU PAID ONLINE OTHERWISE YOU WILL BE CHARGED UNDER ON SPOT PAYMENT MODE. ALSO MAKE SURE THAT YOU ENTER CORRECT DETAILS IN THE CONTACT FORM AS THESE WILL BE USED TO VERIFY YOUR PAYMENTS <br>";

$conn->close();

?>
