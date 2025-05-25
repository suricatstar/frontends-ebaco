// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    
    // Elementos do DOM
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const backToTop = document.getElementById('backToTop');
    const form = document.querySelector('.rsvp-form');
    const header = document.querySelector('.header');
    
    // Menu hambúrguer para mobile
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fecha o menu quando clica em um link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Efeito de scroll no header
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });

    // Botão voltar ao topo
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Animação de elementos ao fazer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observa elementos que devem ter animação de fade-in
    const animatedElements = document.querySelectorAll('.detail-card, .timeline-item, .gallery-item');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Formulário de confirmação
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Coleta os dados do formulário
        const formData = new FormData(form);
        const data = {
            nome: formData.get('nome'),
            email: formData.get('email'),
            telefone: formData.get('telefone'),
            acompanhantes: formData.get('acompanhantes'),
            gamePreference: formData.get('game-preference'),
            mensagem: formData.get('mensagem')
        };

        // Validação básica
        if (!data.nome || !data.email) {
            showNotification('Por favor, preencha os campos obrigatórios, gamer!', 'error');
            return;
        }

        // Simula envio do formulário
        showLoading();
        
        setTimeout(() => {
            hideLoading();
            showNotification('Player adicionado ao squad! 🎮🎉', 'success');
            form.reset();
            
            // Adiciona confetes na tela
            createConfetti();
        }, 2000);
    });

    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contador regressivo para o evento
    createCountdown();

    // Efeito parallax suave no hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-elements');
        
        parallaxElements.forEach(element => {
            element.style.transform = `translateY(${scrolled * 0.5}px)`;
        });
    });
});

// Função para mostrar notificações
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Adiciona estilos da notificação
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4caf50' : type === 'error' ? '#f44336' : '#2196f3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // Animação de entrada
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove após 5 segundos
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Função para mostrar loading
function showLoading() {
    const loading = document.createElement('div');
    loading.id = 'loading';
    loading.innerHTML = `
        <div class="loading-spinner">
            <div class="spinner"></div>
            <p>Confirmando presença...</p>
        </div>
    `;
    
    loading.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        color: white;
    `;
    
    const spinnerStyles = document.createElement('style');
    spinnerStyles.textContent = `
        .loading-spinner {
            text-align: center;
        }
        .spinner {
            width: 50px;
            height: 50px;
            border: 4px solid #333;
            border-top: 4px solid #e91e63;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 1rem;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(spinnerStyles);
    document.body.appendChild(loading);
}

// Função para esconder loading
function hideLoading() {
    const loading = document.getElementById('loading');
    if (loading) {
        document.body.removeChild(loading);
    }
}

// Função para criar confetes
function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#e91e63', '#9b59b6', '#ffd700'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            top: -10px;
            left: ${Math.random() * 100}%;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            z-index: 10000;
            pointer-events: none;
            animation: confetti-fall 3s linear forwards;
        `;
        
        document.body.appendChild(confetti);
        
        // Remove o confete após a animação
        setTimeout(() => {
            if (document.body.contains(confetti)) {
                document.body.removeChild(confetti);
            }
        }, 3000);
    }
}

// Função para criar contador regressivo
function createCountdown() {
    const eventDate = new Date('2025-06-21T16:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;
        
        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Atualiza os elementos do countdown
            const daysElement = document.getElementById('days');
            const hoursElement = document.getElementById('hours');
            const minutesElement = document.getElementById('minutes');
            const secondsElement = document.getElementById('seconds');
            
            if (daysElement) daysElement.textContent = days;
            if (hoursElement) hoursElement.textContent = hours;
            if (minutesElement) minutesElement.textContent = minutes;
            if (secondsElement) secondsElement.textContent = seconds;
            
            // Efeito de piscar quando próximo do evento
            if (days <= 7) {
                document.querySelectorAll('.countdown-number').forEach(el => {
                    el.style.animation = 'pulse 1s ease-in-out infinite';
                });
            }
        } else {
            // Evento iniciou!
            const countdownSection = document.querySelector('.countdown-display');
            if (countdownSection) {
                countdownSection.innerHTML = `
                    <div class="event-started">
                        <h2>🎮 GAME ON! 🎂</h2>
                        <p>A festa do Cauê começou!</p>
                    </div>
                `;
            }
        }
    }
    
    // Atualiza o contador a cada segundo
    setInterval(updateCountdown, 1000);
    updateCountdown(); // Chama imediatamente
}

// Função para adicionar efeitos de hover nos cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.detail-card, .gallery-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Função para validação de email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Função para validação de telefone
function validatePhone(phone) {
    const re = /^[\(\)\s\-\+\d]{10,}$/;
    return re.test(phone);
}

// Adiciona validação em tempo real nos campos do formulário
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('telefone');
    
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            const email = this.value;
            if (email && !validateEmail(email)) {
                this.style.borderColor = '#f44336';
                showNotification('Por favor, insira um email válido', 'error');
            } else {
                this.style.borderColor = '#4caf50';
            }
        });
    }
    
    if (phoneInput) {
        phoneInput.addEventListener('blur', function() {
            const phone = this.value;
            if (phone && !validatePhone(phone)) {
                this.style.borderColor = '#f44336';
                showNotification('Por favor, insira um telefone válido', 'error');
            } else {
                this.style.borderColor = '#4caf50';
            }
        });
    }
});

// Efeito de typing no título
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Aplicar efeito de typing quando a página carregar
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 100);
    }
});

// Função para compartilhar o evento
function shareEvent(platform) {
    const url = window.location.href;
    const text = 'Você está convidado para uma festa de aniversário especial! 🎉';
    
    const shareUrls = {
        whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
    };
    
    if (shareUrls[platform]) {
        window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
}

// Adiciona funcionalidade de zoom nas imagens da galeria
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Aqui você pode adicionar um modal de zoom para as imagens
            showNotification('Recurso de zoom em desenvolvimento! 📸', 'info');
        });
    });
});

// Efeitos sonoros de games (simulados com notificações visuais)
function playGameSound(type) {
    const sounds = {
        'level-up': '🔊 LEVEL UP!',
        'achievement': '🏆 Achievement Unlocked!',
        'coin': '🪙 Coin collected!',
        'power-up': '⚡ Power-up activated!'
    };
    
    if (sounds[type]) {
        showNotification(sounds[type], 'info');
    }
}

// Adiciona efeitos de hover nos elementos de games
document.addEventListener('DOMContentLoaded', function() {
    const gameElements = document.querySelectorAll('.game-element');
    
    gameElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2)';
            this.style.filter = 'drop-shadow(0 0 10px #00ff88)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.filter = 'none';
        });
        
        element.addEventListener('click', function() {
            playGameSound('coin');
            this.style.animation = 'bounce 0.5s ease';
            setTimeout(() => {
                this.style.animation = 'float 3s ease-in-out infinite';
            }, 500);
        });
    });
    
    // Efeito especial no bolo
    const cakeIcon = document.querySelector('.cake-icon');
    if (cakeIcon) {
        cakeIcon.addEventListener('click', function() {
            playGameSound('level-up');
            this.style.animation = 'pulse 1s ease-in-out 3';
            setTimeout(() => {
                this.style.animation = 'bounce 2s ease-in-out infinite';
            }, 3000);
        });
    }
});

// Adiciona easter eggs de games
function addGamingEasterEggs() {
    let konamiCode = [];
    const konamiSequence = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA'
    ];
    
    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.code);
        
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
            activateKonamiCode();
            konamiCode = [];
        }
    });
}

function activateKonamiCode() {
    showNotification('🎮 KONAMI CODE ACTIVATED! 🎮', 'success');
    document.body.style.animation = 'rainbow 2s infinite';
    
    // Adiciona chuva de power-ups
    createPowerUpRain();
    
    setTimeout(() => {
        document.body.style.animation = '';
    }, 10000);
}

function createPowerUpRain() {
    const powerUps = ['🍄', '⭐', '🔥', '❄️', '⚡', '💎'];
    
    for (let i = 0; i < 20; i++) {
        const powerUp = document.createElement('div');
        powerUp.textContent = powerUps[Math.floor(Math.random() * powerUps.length)];
        powerUp.style.cssText = `
            position: fixed;
            top: -50px;
            left: ${Math.random() * 100}%;
            font-size: 2rem;
            z-index: 10000;
            pointer-events: none;
            animation: power-up-fall 3s linear forwards;
        `;
        
        document.body.appendChild(powerUp);
        
        setTimeout(() => {
            if (document.body.contains(powerUp)) {
                document.body.removeChild(powerUp);
            }
        }, 3000);
    }
}

// Ativar easter eggs
addGamingEasterEggs();
