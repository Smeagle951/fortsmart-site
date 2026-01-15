/* ============================================
   FORTSMART AGRO - SCRIPTS
   JavaScript puro para funcionalidades do site
   ============================================ */

(function() {
    'use strict';

    // ============================================
    // Menu Mobile (Hambúrguer)
    // ============================================
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
            
            // Fechar menu ao clicar em link
            const navLinks = navMenu.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navToggle.setAttribute('aria-expanded', 'false');
                    navMenu.classList.remove('active');
                });
            });
        });
        
        // Fechar menu ao clicar fora
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('active');
            }
        });
    }

    // ============================================
    // Scroll Suave para Âncoras
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Não processar links vazios ou apenas "#"
            if (href === '#' || href === '') {
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // Carrossel de Screenshots (Mobile)
    // ============================================
    const carouselTrack = document.getElementById('carouselTrack');
    const carouselPrev = document.getElementById('carouselPrev');
    const carouselNext = document.getElementById('carouselNext');
    const screenshotsGrid = document.getElementById('screenshotsGrid');
    
    if (carouselTrack && screenshotsGrid) {
        // Clonar itens do grid para o carrossel
        const screenshotItems = screenshotsGrid.querySelectorAll('.screenshot-item');
        let currentSlide = 0;
        
        screenshotItems.forEach((item, index) => {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            if (index === 0) slide.classList.add('active');
            
            const img = item.querySelector('img').cloneNode(true);
            const caption = item.querySelector('.screenshot-caption').cloneNode(true);
            
            slide.appendChild(img);
            slide.appendChild(caption);
            carouselTrack.appendChild(slide);
        });
        
        const slides = carouselTrack.querySelectorAll('.carousel-slide');
        
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
            currentSlide = index;
        }
        
        function nextSlide() {
            const next = (currentSlide + 1) % slides.length;
            showSlide(next);
        }
        
        function prevSlide() {
            const prev = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(prev);
        }
        
        if (carouselNext) {
            carouselNext.addEventListener('click', nextSlide);
        }
        
        if (carouselPrev) {
            carouselPrev.addEventListener('click', prevSlide);
        }
        
        // Auto-play opcional (descomente para ativar)
        // setInterval(nextSlide, 5000);
    }

    // ============================================
    // Header Fixo com Sombra ao Scroll
    // ============================================
    const header = document.getElementById('header');
    
    if (header) {
        let lastScroll = 0;
        
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 50) {
                header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
            }
            
            lastScroll = currentScroll;
        });
    }

    // ============================================
    // Validação e Envio do Formulário de Contato
    // ============================================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            // Validação básica
            let isValid = true;
            
            if (!nameInput.value.trim()) {
                showError(nameInput, 'Nome é obrigatório');
                isValid = false;
            } else {
                clearError(nameInput);
            }
            
            if (!emailInput.value.trim()) {
                showError(emailInput, 'Email é obrigatório');
                isValid = false;
            } else if (!isValidEmail(emailInput.value)) {
                showError(emailInput, 'Email inválido');
                isValid = false;
            } else {
                clearError(emailInput);
            }
            
            if (!messageInput.value.trim()) {
                showError(messageInput, 'Mensagem é obrigatória');
                isValid = false;
            } else {
                clearError(messageInput);
            }
            
            if (isValid) {
                // Criar link mailto
                const subject = encodeURIComponent('Contato - FortSmart Agro');
                const body = encodeURIComponent(
                    `Nome: ${nameInput.value.trim()}\n` +
                    `Email: ${emailInput.value.trim()}\n\n` +
                    `Mensagem:\n${messageInput.value.trim()}`
                );
                const mailtoLink = `mailto:fortsmart.01@gmail.com?subject=${subject}&body=${body}`;
                
                // Abrir cliente de email
                window.location.href = mailtoLink;
                
                // Opcional: Mostrar mensagem de sucesso
                showSuccessMessage();
                
                // Limpar formulário após 1 segundo
                setTimeout(() => {
                    contactForm.reset();
                }, 1000);
            }
        });
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showError(input, message) {
        clearError(input);
        input.style.borderColor = '#d32f2f';
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = '#d32f2f';
        errorDiv.style.fontSize = '0.875rem';
        errorDiv.style.marginTop = '0.25rem';
        errorDiv.textContent = message;
        
        input.parentElement.appendChild(errorDiv);
    }
    
    function clearError(input) {
        input.style.borderColor = '';
        const errorDiv = input.parentElement.querySelector('.error-message');
        if (errorDiv) {
            errorDiv.remove();
        }
    }
    
    function showSuccessMessage() {
        // Criar mensagem de sucesso temporária
        const successDiv = document.createElement('div');
        successDiv.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background-color: #2e7d32;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;
        successDiv.textContent = 'Mensagem enviada! Abrindo cliente de email...';
        
        document.body.appendChild(successDiv);
        
        setTimeout(() => {
            successDiv.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                successDiv.remove();
            }, 300);
        }, 3000);
    }

    // ============================================
    // Reveal on Scroll (Animação Suave)
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos para animação
    const animateElements = document.querySelectorAll('.feature-card, .step-item, .pricing-card, .testimonial-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ============================================
    // CSS para animações (adicionado via JavaScript)
    // ============================================
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // ============================================
    // Console Message (Opcional)
    // ============================================
    console.log('%c FortSmart Agro ', 'background: #1B5E20; color: #fff; padding: 10px; font-size: 16px; font-weight: bold;');
    console.log('%c Site desenvolvido para consultoria agronômica digital', 'color: #2E7D32; font-size: 12px;');

})();