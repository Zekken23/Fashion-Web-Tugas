# DEUGLAS - Website Profil Perusahaan Fashion (SPA)

Ini adalah tugas pembuatan website profil perusahaan (company profile) untuk brand fashion bernama **DEUGLAS**. Proyek ini dibangun sebagai *Single Page Application* (SPA) modern menggunakan HTML, CSS, dan jQuery.
Website ini dirancang untuk menjadi portofolio yang menampilkan tata letak halaman web fashion yang bersih, responsif, dan fungsional.

## ✨ Fitur Utama

* **Navigasi Single Page App (SPA):** Pindah antar halaman (Home, Tentang Kami, Kontak) secara instan tanpa *reload* browser, diatur menggunakan jQuery.
* **Desain Responsif:** Tampilan yang disesuaikan untuk desktop, tablet, dan perangkat mobile menggunakan Media Queries.
* **Form Kontak Fungsional:** Menggunakan **AJAX (via jQuery)** untuk mengirim data formulir ke *backend* PHP (`contact.php`) tanpa me-refresh halaman.
* **Animasi Form Modern:** Efek "Floating Label" yang dinamis pada input form kontak untuk UX yang lebih baik.
* **Testimoni Tema Gelap:** Bagian ulasan pelanggan (Our Happy Customers) yang disajikan dalam *grid* 3 kolom statis dengan tema gelap yang elegan.
* **Tata Letak CSS Modern:** Pemanfaatan CSS Grid dan Flexbox untuk tata letak yang kompleks dan rapi (misalnya, galeri produk, info kontak, dan footer).
* **Header *Sticky*:** Navigasi utama tetap terlihat di bagian atas layar saat pengguna melakukan *scroll*.

## 🛠️ Teknologi yang Digunakan

* **Frontend:**
    * HTML5 (Struktur Semantik)
    * CSS3 (Variables, Grid, Flexbox, Media Queries)
    * JavaScript (ES6+)
* **Library/Dependensi:**
    * **jQuery 3.7.1:** Digunakan untuk manipulasi DOM, *event handling*, animasi (slide menu mobile), dan permintaan AJAX.
* **Backend (Contoh):**
    * **PHP:** Satu file (`contact.php`) disediakan sebagai contoh *endpoint* backend untuk menerima data dari form kontak dan (secara teori) mengirimkannya sebagai email.

## 🚀 Cara Menjalankan Proyek

Proyek ini memerlukan **server lokal** untuk dapat berjalan dengan baik, terutama untuk fungsionalitas AJAX pada form kontak. Membuka `index.html` langsung dari file **tidak akan berfungsi** karena kebijakan CORS browser.

**Cara yang Direkomendasikan (Menggunakan XAMPP/MAMP):**

1.  **Unduh dan Instal XAMPP** (atau MAMP untuk Mac). Ini adalah paket server lokal gratis yang menyertakan Apache (Web Server) dan PHP.
2.  **Jalankan XAMPP** dan nyalakan modul **Apache**.
3.  **Salin Folder Proyek:** Salin seluruh folder proyek Anda (yang berisi `index.html`, `style.css`, `script.js`, dan `contact.php`) ke dalam direktori `htdocs` di dalam folder instalasi XAMPP Anda.
    * Pada Windows: `C:/xampp/htdocs/`
    * Pada macOS: `/Applications/MAMP/htdocs/`
4.  **Buka di Browser:** Buka browser Anda (Chrome, Firefox, dll.) dan ketik URL berikut:
    ```
    http://localhost/nama-folder-proyek-anda/
    ```
    (Ganti `nama-folder-proyek-anda` dengan nama folder yang Anda salin ke `htdocs`).

5.  **Selesai!** Website akan berjalan penuh, dan form kontak di halaman "Kontak" akan dapat berkomunikasi dengan file `contact.php`.

## Project manage by 
## Muhammad Yusron AL Ghoni Rizqullah
