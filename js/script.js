// Script para melhorar a experiência do usuário na landing page

document.addEventListener('DOMContentLoaded', function() {
    // Adiciona comportamento suave ao scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Adiciona animação ao botão CTA
    const ctaButton = document.querySelector('#cta .btn-primary');
    if (ctaButton) {
        setInterval(() => {
            ctaButton.classList.add('pulse');
            setTimeout(() => {
                ctaButton.classList.remove('pulse');
            }, 1000);
        }, 3000);
    }
});
