document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk memberikan notifikasi sederhana saat tombol di klik
    function handleCtaClick(buttonId, message) {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', function(event) {
                event.preventDefault(); // Mencegah pindah halaman
                // Kode di bawah ini hanya untuk demo
                alert(message);
                
                // Di aplikasi nyata, kode ini akan mengarahkan pengguna ke halaman pendaftaran
                // window.location.href = '/pendaftaran'; 
            });
        }
    }

    // Panggil fungsi untuk tombol "Daftar Sekarang"
    handleCtaClick('btn-daftar-sekarang', 'Anda akan diarahkan ke halaman Pendaftaran Faskes/Pengguna.');

    // Panggil fungsi untuk tombol "Coba Gratis"
    handleCtaClick('btn-coba-gratis', 'Form percobaan gratis akan segera muncul. Selamat mencoba!');
    
    // Efek sederhana: Ubah warna highlight saat scroll sedikit
    const header = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.backgroundColor = 'var(--card-bg)';
        }
    });

});