<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);
        echo "Please fill in all fields.";
        exit;
    }

    $to = "shaoun@bitbirds.com"; // Your email
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $name <$email>";

    if (mail($to, $subject, $body, $headers)) {
        echo "OK";
    } else {
        http_response_code(500);
        echo "Failed to send email.";
    }
} else {
    http_response_code(403);
    echo "Invalid request.";
}
