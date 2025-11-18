<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "student";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
     $sname = mysqli_real_escape_string($conn, $_POST['name']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $num = mysqli_real_escape_string($conn, $_POST['cnum']);
    $msg = mysqli_real_escape_string($conn, $_POST['msg']);
    // Prepare SQL statement
      $sql = "INSERT INTO pdata (SName, Emailid, Num, Msg)
            VALUES ('$sname', '$email', '$num', '$msg')";

    // Execute SQL statement
    if (mysqli_query($conn, $sql)) {
        echo "<p>New record created successfully</p>";
    } else {
        echo "<p>Error: " . $sql . "<br>" . mysqli_error($conn) . "</p>";
    }

    // Close connection
    mysqli_close($conn);
}
?>
