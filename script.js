document.addEventListener("DOMContentLoaded", function () {

    // Scroll header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.tech-header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // MENU HAMBURGUESA
    const toggle = document.getElementById("menu-toggle");
    const menu = document.querySelector(".nav-menu");
    const overlay = document.getElementById("overlay");

    if (toggle && menu && overlay) {
        toggle.addEventListener("click", () => {
            menu.classList.toggle("show");
            overlay.classList.toggle("show");
        });

        // cerrar al hacer click fuera
        overlay.addEventListener("click", () => {
            menu.classList.remove("show");
            overlay.classList.remove("show");
        });
    }

    // Links
    const menuLinks = document.querySelectorAll('.nav-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            console.log(`🖱️ Mouse sobre: ${this.textContent.trim()}`);
        });

        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });

    console.log('🚀 Header cargado');

    // Logo animación
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

    // Carrito
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', function() {
            alert('🛒 Carrito próximamente');
        });
    }

    // FUNCIONALIDAD Carrito de productos (cuerpo)
    const buyButtons = document.querySelectorAll('.buy-btn');
    buyButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const productName = this.parentElement.querySelector('h3').textContent;
            alert(`✅ ${productName} ha sido añadido a tu carrito de TechStore.`);
        });
    });

});