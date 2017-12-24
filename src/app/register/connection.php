<?php


function Connect()
{
 $dbhost = "mysql.hostinger.in";
 $dbuser = "u439021037_admin";
 $dbpass = "Tiktik@123";
 $dbname = "u439021037_conta";

 // Create connection
 $conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname) or die($conn->connect_error);

 return $conn;
}

?>
