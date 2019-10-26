<?php


use Ramsey\Uuid\Uuid;

// $guid = Uuid::uuid4()->toString();

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();//getConnection belongs to singleton class.
//it returns the same connection everytime I instantiate
//PDO: Persistent Data object

// Step 2: Create & run the query
$stmt = $db->prepare('INSERT INTO member ( firstName, lastName, dob, gender, radioNumber, stationNumber, email, position, phoneNumber, address, startDate)
                      VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
                    );
$stmt->execute([
  // $guid,
  $_POST ['firstName'],
  $_POST ['lastName'],
  $_POST ['dob'],
  $_POST ['gender'],
  $_POST ['radioNumber'],
  $_POST ['stationNumber'],
  $_POST ['email'],
  $_POST ['position'],
  $_POST ['phoneNumber'],
  $_POST ['address'],
  $_POST ['startDate']
]);
$id = $db->lastInsertId();
// TODO: Error checking?!

//Step 3:
header('HTTP/1.1 303 See Other');
header('Location: ../member/fetch.php?id='.$id);
