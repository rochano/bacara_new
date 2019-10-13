<?php
	$servername = "localhost";
	$username = "myhostin_bacara";
	$password = "bacara@1234";
	$dbname = "myhostin_bacara";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	} 
	mysqli_set_charset($conn,"utf8");
?>