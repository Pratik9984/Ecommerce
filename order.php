<?php
$host = "localhost";
$db = "customer data";
$user = "root";
$pass = ""; // default in XAMPP

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents("php://input"));

$name = $conn->real_escape_string($data->name);
$email = $conn->real_escape_string($data->email);
$phone = $conn->real_escape_string($data->phone);
$address = $conn->real_escape_string($data->address);

$sql = "INSERT INTO `customer data` (`full name`, `Email`, `Phone Number`, `Shipping address`)
        VALUES ('$name', '$email', '$phone', '$address')";

if ($conn->query($sql) === TRUE) {
  echo "Success";
} else {
  http_response_code(500);
  echo "Error: " . $conn->error;
}

$conn->close();
?>
