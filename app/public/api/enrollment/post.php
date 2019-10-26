<?php
use Ramsey\Uuid\Uuid;

// Step 0: Validate the incoming data
$guid = Uuid::uuid4()->toString(); // i.e. 25769c6c-d34d-4bfe-ba98-e0ee856f3e7a

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'INSERT INTO receive (memberID, certificationID, certificateStartDate, certificateEndDate)
  VALUES (?, ?, ?, ?)'
);

$stmt->execute([
  // $id,
  $_POST['memberID'],
  $_POST['certificationID'],
  $_POST['certificateStartDate'],
  $_POST['certificateEndDate']
]);
$id = $db->lastInsertId();

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../enrollment/?id='.$id);
