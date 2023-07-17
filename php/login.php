<?php
$email = $_POST['email'];
$username = $_POST['username'];
$password = $_POST['password'];

if ($email == 'sazzaliee@gmail.com' && $username == 'esha' && $password == 'fesloth') {
    header('Location: landing-page.php');
    exit;
} else {
    echo 'Username atau password salah.';
}
