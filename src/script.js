// Menunggu dokumen siap (document ready)
$(document).ready(function() {
    
    // --- 1. FUNGSI UNTUK INISIALISASI KOMPONEN ---

    /**
     * (JS UNTUK KONTAK)
     * Fungsi ini menambahkan listener untuk animasi floating label.
     */
    function initFloatingLabels() {
        // Hapus listener lama agar tidak duplikat
        $('.form-group.floating input, .form-group.floating textarea').off('focus blur');

        // Listener untuk 'focus' (klik)
        $('.form-group.floating input, .form-group.floating textarea').on('focus', function() {
            $(this).closest('.form-group.floating').addClass('focused');
        });

        // Listener untuk 'blur' (keluar)
        $('.form-group.floating input, .form-group.floating textarea').on('blur', function() {
            if ($(this).val() === '') {
                // Kosong, hilangkan 'focused'
                $(this).closest('.form-group.floating').removeClass('focused');
            } else {
                // Ada isi, biarkan 'focused'
                $(this).closest('.form-group.floating').addClass('focused');
            }
        });

        // Cek saat load, jika ada field yg sudah terisi (misal auto-fill browser)
        $('.form-group.floating input, .form-group.floating textarea').trigger('blur');
    }

    /**
     * (AJAX FORM)
     * Fungsi ini menginisialisasi listener submit form kontak.
     */
    function initContactForm() {
        $('#contact-form').off('submit'); // Hapus listener lama

        $('#contact-form').on('submit', function(e) {
            e.preventDefault();
            var $form = $(this);
            var $formMessage = $('#form-message');
            var $submitButton = $form.find('.submit-btn');
            var formData = $form.serialize();

            $.ajax({
                type: 'POST',
                url: 'contact.php', // Target file PHP
                data: formData,
                dataType: 'text',
                beforeSend: function() {
                    $submitButton.prop('disabled', true).text('Mengirim...');
                    $formMessage.slideUp().removeClass('error success');
                },
                success: function(response) {
                    $formMessage.text(response).removeClass('error').addClass('success').slideDown();
                    $form[0].reset();
                    // Reset floating labels setelah reset form
                    $form.find('.form-group.floating').removeClass('focused');
                },
                error: function(xhr) {
                    var errorMessage = xhr.responseText || "Terjadi kesalahan, silakan coba lagi.";
                    $formMessage.text(errorMessage).removeClass('success').addClass('error').slideDown();
                },
                complete: function() {
                    $submitButton.prop('disabled', false).text('Kirim Pesan');
                }
            });
        });
    }

    /**
     * Toggle Menu Mobile
     */
    $('#mobile-menu-button').on('click', function() {
        $(this).toggleClass('open');
        $('#mobile-menu').slideToggle(300); // Animasi slide
    });

    // --- 2. SCRIPT NAVIGASI Halaman (SPA) ---

    // Fungsi untuk pindah halaman
    function showPage(targetPage, isInitialLoad = false) {
        
        // Default ke home jika target tidak ada atau #
        if (!targetPage || targetPage === '#' || $(targetPage).length === 0) {
            targetPage = '#page-home';
        }

        // Hapus kelas 'active' dari semua link dan halaman
        $('.nav-link').removeClass('active');
        $('.page-content').removeClass('active');
        
        // Tambahkan 'active' ke link dan halaman target
        $('.nav-link[href="' + targetPage + '"]').addClass('active');
        $(targetPage).addClass('active');

        // Tutup menu mobile jika terbuka saat pindah halaman
        if ($('#mobile-menu-button').hasClass('open')) {
            $('#mobile-menu-button').removeClass('open');
            $('#mobile-menu').slideUp(200);
        }

        // Inisialisasi komponen berdasarkan halaman yang aktif
        if (targetPage === '#page-home') {
            // Tidak ada JS yang perlu di-init untuk grid statis
        } else if (targetPage === '#page-contact') {
            // (JS BARU) Inisialisasi form kontak
            initFloatingLabels();
            initContactForm();
        }

        // Scroll ke atas (kecuali saat load awal)
        if (!isInitialLoad) {
            $('html, body').animate({ scrollTop: 0 }, 'fast');
        }
    }

    // Klik Navigasi (termasuk di footer)
    // Diganti ke 'document.on' agar link di footer juga berfungsi
    $(document).on('click', '.nav-link', function(e) {
        e.preventDefault(); // Mencegah pindah halaman standar
        var targetPage = $(this).attr('href');
        
        // Cek jika link valid sebelum pindah
        if (targetPage && targetPage.startsWith('#page-')) {
             showPage(targetPage);
        } else if (targetPage && $(targetPage).length > 0) {
             // Ini untuk halaman placeholder (shop, sale, dll)
             showPage(targetPage);
        } else {
            // Link eksternal atau placeholder '#' biasa
            console.log("Link non-SPA diklik: " + targetPage);
        }
    });

    // Tampilkan halaman yang benar saat pertama kali load
    showPage('#page-home', true); // <-- Selalu paksa ke #page-home saat load

    // --- 3. FUNGSI & LISTENER SLIDER (SEMUA DIHAPUS) ---
    // Tidak ada kode slider lagi.

});

