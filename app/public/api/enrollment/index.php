<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
if (isset($_GET['id'])) {
  $stmt = $db->prepare( 'SELECT * FROM receive WHERE enrollmentID = ?');
  $stmt->execute([$_GET['id']]);
}
else{
$stmt = $db->prepare('SELECT m.firstName, r.enrollmentID, c.certification_name, r.certificateIsActive, r.certificateStartDate, r.certificateEndDate FROM member m, certification c, receive r where m.memberID = r.memberID and c.certificationID = r.certificationID');
$stmt->execute();
}
$receive = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($receive, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
