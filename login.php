<?php
// connect to database
$conn = new mysqli('localhost', 'username', 'password', 'database_name');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// retrieve values
$email = $_POST['email'];
$password = $_POST['password'];

// check user
$sql = "SELECT password FROM users WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($hashed_password);

if ($stmt->num_rows > 0) {
    $stmt->fetch();
    if (password_verify($password, $hashed_password)) {
        echo "Login successful!";
        // You can redirect to a welcome page or store session data
    } else {
        echo "Invalid password!";
    }
} else {
    echo "No user found with this email!";
}

$stmt->close();
$conn->close();
?>
