<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();//getConnection belongs to singleton class.
//it returns the same connection everytime I instantiate
//PDO: Persistent Data object


$stmt = $db->prepare('UPDATE member set radioNumber = ?, stationNumber = ?, position = ?, address = ? where memberID = ?');
$stmt->execute([

$_POST['radioNumber'],
$_POST['stationNumber'],
$_POST['position'],
$_POST['address'],
$_POST['memberID']
]); //execute method of PDO object


// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../member/');
