window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
      navbar.style.backgroundColor = '#fff'; // Change background color on scroll
    } else {
      navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    }
  });
  