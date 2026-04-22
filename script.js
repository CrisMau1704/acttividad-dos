// ========== EFECTOS JAVASCRIPT PARA EL HEADER ==========


window.addEventListener('scroll', function() {
    const header = document.querySelector('.tech-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


const menuLinks = document.querySelectorAll('.nav-menu a');
menuLinks.forEach(link => {
    link.addEventListener('mouseenter', function(e) {
        console.log(`🖱️ Mouse sobre: ${this.textContent.trim()}`);
    });
    
    // 3. Resaltar el enlace activo (según la página actual)
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});


console.log('%c🚀 TechStore - Header cargado con éxito!', 'color: #00d4ff; font-size: 16px; font-weight: bold;');

// 5. Animación sutil del logo al cargar
const logo = document.querySelector('.logo h1');
if (logo) {
    logo.style.opacity = '0';
    logo.style.transform = 'translateX(-20px)';
    setTimeout(() => {
        logo.style.transition = 'all 0.6s ease';
        logo.style.opacity = '1';
        logo.style.transform = 'translateX(0)';
    }, 100);
}


const cartIcon = document.querySelector('.cart-icon');
if (cartIcon) {
    cartIcon.addEventListener('click', function() {
        alert('🛒 Carrito de compras - Próximamente más funciones');
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
}