<?php
include "db.php"; // Hubungkan ke database

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = $conn->real_escape_string($_POST["nama"]);
    $email = $conn->real_escape_string($_POST["email"]);
    $phone = $conn->real_escape_string($_POST["phone"]);
    $pesan = $conn->real_escape_string($_POST["pesan"]);

    // Simpan data ke database
    $sql = "INSERT INTO contacts (nama, email, phone, pesan) VALUES ('$nama', '$email', '$phone', '$pesan')";

    if ($conn->query($sql) === TRUE) {
        echo "success";
    } else {
        echo "error: " . $conn->error;
    }

    $conn->close();
}
?>