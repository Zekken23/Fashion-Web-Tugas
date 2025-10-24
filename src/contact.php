<?php
header('Content-Type: text/plain; charset=utf-8');

$admin_email = "admin@deuglas.com";
// ------------------------------


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $name = isset($_POST['name']) ? htmlspecialchars(trim($_POST['name'])) : "";
    $email = isset($_POST['email']) ? trim($_POST['email']) : "";
    $subject = isset($_POST['subject']) ? htmlspecialchars(trim($_POST['subject'])) : "Pesan Baru dari Website DEUGLAS";
    $message = isset($_POST['message']) ? htmlspecialchars(trim($_POST['message'])) : "";

    if (empty($name)) {
        http_response_code(400); 
        echo "Nama wajib diisi.";
        exit;
    }
    
    if (empty($message)) {
        http_response_code(400);
        echo "Pesan wajib diisi.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Format email tidak valid.";
        exit;
    }

    // 3. Siapkan email
    $to = $admin_email;
    $headers = "From: $name <$email>" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();
               
    $email_body = "Anda menerima pesan baru dari formulir kontak website:\n\n" .
                  "--------------------------------------------------\n" .
                  "Nama:    $name\n" .
                  "Email:   $email\n" .
                  "Subjek:  $subject\n" .
                  "--------------------------------------------------\n\n" .
                  "Pesan:\n$message\n";

    
    if (@mail($to, $subject, $email_body, $headers)) {
        http_response_code(200);
        echo "Terima kasih! Pesan Anda telah terkirim.";
    } else {
        http_response_code(500);
        echo "Maaf, terjadi kesalahan pada server. Pesan Anda tidak dapat dikirim saat ini.";
    }

} else {
    http_response_code(403);
    echo "Akses ditolak. Metode tidak diizinkan.";
}
?>
