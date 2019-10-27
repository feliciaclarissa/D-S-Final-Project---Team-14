<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare('SELECT * FROM member m, certification c,  receive r where m.memberID=r.memberID and c.certificationID=r.certificationID and r.certificateEndDate <= curdate();');
$stmt->execute();

$receive = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($receive, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
