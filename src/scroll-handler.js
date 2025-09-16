// Handle header visibility on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar-full-width');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 100) {
        navbar.classList.add('show');
    } else {
        navbar.classList.remove('show');
    }
});
