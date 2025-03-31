<?php
// connect to database
$conn = new mysqli('localhost', 'username', 'password', 'database_name');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// get values from POST
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$email = $_POST['email'];
$address = $_POST['address'];
$phone = $_POST['phone'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);

// insert into database
$sql = "INSERT INTO users (first_name, last_name, email, address, phone, password) 
        VALUES (?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ssssss", $first_name, $last_name, $email, $address, $phone, $password);

if ($stmt->execute()) {
    echo "Registration successful! You can now log in.";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
