// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
  // Inisialisasi carousel
  const heroCarousel = document.getElementById('heroCarousel');
  if (heroCarousel) {
    const carousel = new bootstrap.Carousel(heroCarousel, {
      interval: 5000,
      wrap: true
    });
  }

  // Tambahkan event listener untuk modal produk di halaman utama
  document.querySelectorAll('.view-detail').forEach(button => {
    button.addEventListener('click', function() {
      
    });
  });

  // Animasi scroll untuk navigasi
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      }
    });
  });
});