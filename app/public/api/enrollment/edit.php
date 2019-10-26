<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();//getConnection belongs to singleton class.
//it returns the same connection everytime I instantiate
//PDO: Persistent Data object


$stmt = $db->prepare('UPDATE receive set certificateIsActive = ?, certificateStartDate = ?, certificateEndDate = ? where enrollmentID = ?');
$stmt->execute([

$_POST['certificateIsActive'],
$_POST['certificateStartDate'],
$_POST['certificateEndDate'],
$_POST['enrollmentID']
]); //execute method of PDO object


// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../enrollment/');
