<?php
use Ramsey\Uuid\Uuid;

// Step 0: Validate the incoming data
$guid = Uuid::uuid4()->toString(); // i.e. 25769c6c-d34d-4bfe-ba98-e0ee856f3e7a

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'INSERT INTO certification (certificationID,certification_name,certification_agency,exp_period)
  VALUES (?, ?, ?, ? )'
);

$stmt->execute([
  $guid,
  $_POST['certification_name'],
  $_POST['certification_agency'],
  $_POST['exp_period']
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../certification/?guid=' . $guid);
