// Main JavaScript - Vanilla JS implementation

class ORCWebsite {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeComponents();
        this.setupIntersectionObserver();
        this.setupParticleAnimation();
    }

    setupEventListeners() {
        // Mobile menu toggle
        const menuToggle = document.querySelector('.header__menu-toggle');
        const menu = document.querySelector('.header__menu');
        
        if (menuToggle && menu) {
            menuToggle.addEventListener('click', () => {
                const isOpen = menu.classList.contains('header__menu--open');
                menu.classList.toggle('header__menu--open', !isOpen);
                menuToggle.classList.toggle('header__menu-toggle--open', !isOpen);
                menuToggle.setAttribute('aria-expanded', !isOpen);
            });
        }

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Modal functionality
        this.setupModals();

        // Form submissions
        this.setupForms();

        // Keyboard navigation
        this.setupKeyboardNavigation();
    }

    setupModals() {
        const modals = document.querySelectorAll('[data-modal]');
        
        modals.forEach(modal => {
            const openTriggers = document.querySelectorAll(`[href="#${modal.id}"]`);
            const closeBtn = modal.querySelector('[data-modal-close]');
            const backdrop = modal.querySelector('[data-modal-backdrop]');
            
            const openModal = () => {
                modal.classList.add('modal--open');
                modal.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden';
                
                // Focus management
                const firstFocusable = modal.querySelector('input, button, textarea, select');
                if (firstFocusable) {
                    firstFocusable.focus();
                }
            };
            
            const closeModal = () => {
                modal.classList.remove('modal--open');
                modal.setAttribute('aria-hidden', 'true');
                document.body.style.overflow = '';
            };
            
            openTriggers.forEach(trigger => {
                trigger.addEventListener('click', (e) => {
                    e.preventDefault();
                    openModal();
                });
            });
            
            if (closeBtn) {
                closeBtn.addEventListener('click', closeModal);
            }
            
            if (backdrop) {
                backdrop.addEventListener('click', closeModal);
            }
            
            // Close on Escape key
            modal.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    closeModal();
                }
            });
        });
    }

    setupForms() {
        // Contact form
        const contactForm = document.querySelector('[data-contact-form]');
        if (contactForm) {
            contactForm.addEventListener('submit', this.handleContactForm.bind(this));
        }

        // Registration form
        const registrationForm = document.querySelector('[data-registration-form]');
        if (registrationForm) {
            registrationForm.addEventListener('submit', this.handleRegistrationForm.bind(this));
        }
    }

    async handleContactForm(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const submitBtn = form.querySelector('button[type="submit"]');
        
        // Show loading state
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        try {
            // Simulate API call
            await this.simulateAPICall(2000);
            
            // Show success message
            this.showNotification('Message sent successfully!', 'success');
            form.reset();
        } catch (error) {
            this.showNotification('Failed to send message. Please try again.', 'error');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    }

    async handleRegistrationForm(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const submitBtn = form.querySelector('button[type="submit"]');
        
        // Validate form
        if (!this.validateRegistrationForm(formData)) {
            return;
        }
        
        // Show loading state
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Submitting...';
        submitBtn.disabled = true;
        
        try {
            // Simulate API call
            await this.simulateAPICall(3000);
            
            // Show success message
            this.showNotification('Registration submitted successfully!', 'success');
            form.reset();
            
            // Close modal
            const modal = form.closest('.modal');
            if (modal) {
                modal.classList.remove('modal--open');
                modal.setAttribute('aria-hidden', 'true');
                document.body.style.overflow = '';
            }
        } catch (error) {
            this.showNotification('Registration failed. Please try again.', 'error');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    }

    validateRegistrationForm(formData) {
        const requiredFields = ['teamName', 'teamLeader', 'email', 'teamSize', 'experience'];
        const errors = [];
        
        requiredFields.forEach(field => {
            if (!formData.get(field)) {
                errors.push(`${field} is required`);
            }
        });
        
        // Email validation
        const email = formData.get('email');
        if (email && !this.isValidEmail(email)) {
            errors.push('Please enter a valid email address');
        }
        
        // Terms acceptance
        if (!formData.get('terms')) {
            errors.push('You must agree to the terms and conditions');
        }
        
        if (errors.length > 0) {
            this.showNotification(errors.join(', '), 'error');
            return false;
        }
        
        return true;
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.innerHTML = `
            <div class="notification__content">
                <span class="notification__message">${message}</span>
                <button class="notification__close" aria-label="Close notification">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                </button>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
            color: white;
            padding: 16px 20px;
            border-radius: 8px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            transform: translateX(100%);
            transition: transform 0.3s ease-in-out;
            max-width: 400px;
        `;
        
        // Add to DOM
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Close functionality
        const closeBtn = notification.querySelector('.notification__close');
        const closeNotification = () => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        };
        
        closeBtn.addEventListener('click', closeNotification);
        
        // Auto close after 5 seconds
        setTimeout(closeNotification, 5000);
    }

    initializeComponents() {
        this.initProductCarousel();
        this.initQuoteSlider();
        this.initLogoStrip();
    }

    initProductCarousel() {
        const carousel = document.querySelector('[data-carousel]');
        if (!carousel) return;
        
        const track = carousel.querySelector('[data-carousel-track]');
        const slides = carousel.querySelectorAll('.product-slide');
        const prevBtn = carousel.querySelector('[data-carousel-prev]');
        const nextBtn = carousel.querySelector('[data-carousel-next]');
        const indicators = carousel.querySelectorAll('[data-slide-to]');
        
        let currentSlide = 0;
        
        const updateCarousel = () => {
            // Update slides
            slides.forEach((slide, index) => {
                slide.classList.toggle('product-slide--active', index === currentSlide);
            });
            
            // Update indicators
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('product-carousel__indicator--active', index === currentSlide);
            });
            
            // Update transform
            track.style.transform = `translateX(-${currentSlide * 100}%)`;
        };
        
        const nextSlide = () => {
            currentSlide = (currentSlide + 1) % slides.length;
            updateCarousel();
        };
        
        const prevSlide = () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateCarousel();
        };
        
        const goToSlide = (index) => {
            currentSlide = index;
            updateCarousel();
        };
        
        // Event listeners
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);
        
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => goToSlide(index));
        });
        
        // Auto-play
        setInterval(nextSlide, 5000);
        
        // Initialize
        updateCarousel();
    }

    initQuoteSlider() {
        const slider = document.querySelector('[data-quote-slider]');
        if (!slider) return;
        
        const track = slider.querySelector('[data-quote-track]');
        const slides = slider.querySelectorAll('.quote-slide');
        const prevBtn = slider.querySelector('[data-quote-prev]');
        const nextBtn = slider.querySelector('[data-quote-next]');
        const indicators = slider.querySelectorAll('[data-quote-to]');
        
        let currentSlide = 0;
        
        const updateSlider = () => {
            // Update slides
            slides.forEach((slide, index) => {
                slide.classList.toggle('quote-slide--active', index === currentSlide);
            });
            
            // Update indicators
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('quote-slider__indicator--active', index === currentSlide);
            });
            
            // Update transform
            track.style.transform = `translateX(-${currentSlide * 100}%)`;
        };
        
        const nextSlide = () => {
            currentSlide = (currentSlide + 1) % slides.length;
            updateSlider();
        };
        
        const prevSlide = () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateSlider();
        };
        
        const goToSlide = (index) => {
            currentSlide = index;
            updateSlider();
        };
        
        // Event listeners
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);
        
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => goToSlide(index));
        });
        
        // Auto-play
        setInterval(nextSlide, 7000);
        
        // Initialize
        updateSlider();
    }

    initLogoStrip() {
        const logoStrip = document.querySelector('.logo-strip__track');
        if (!logoStrip) return;
        
        // Clone items for seamless loop
        const items = logoStrip.children;
        const itemsArray = Array.from(items);
        
        itemsArray.forEach(item => {
            const clone = item.cloneNode(true);
            logoStrip.appendChild(clone);
        });
    }

    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe elements for fade-in animation
        const animatedElements = document.querySelectorAll('.value-prop-card, .course-card, .quote-slide');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(el);
        });
    }

    setupParticleAnimation() {
        const canvas = document.querySelector('.hero__particles');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationId;
        
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        
        const createParticle = () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.2,
            life: Math.random() * 200 + 100
        });
        
        const initParticles = () => {
            particles = [];
            for (let i = 0; i < 50; i++) {
                particles.push(createParticle());
            }
        };
        
        const updateParticles = () => {
            particles.forEach((particle, index) => {
                particle.x += particle.vx;
                particle.y += particle.vy;
                particle.life--;
                
                // Wrap around edges
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;
                
                // Remove dead particles
                if (particle.life <= 0) {
                    particles[index] = createParticle();
                }
            });
        };
        
        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
                ctx.fill();
            });
            
            // Draw connections
            particles.forEach((particle, i) => {
                particles.slice(i + 1).forEach(otherParticle => {
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                });
            });
        };
        
        const animate = () => {
            updateParticles();
            drawParticles();
            animationId = requestAnimationFrame(animate);
        };
        
        // Initialize
        resizeCanvas();
        initParticles();
        animate();
        
        // Handle resize
        window.addEventListener('resize', () => {
            resizeCanvas();
            initParticles();
        });
        
        // Pause animation when not visible
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                cancelAnimationFrame(animationId);
            } else {
                animate();
            }
        });
    }

    setupKeyboardNavigation() {
        // Trap focus in modals
        document.addEventListener('keydown', (e) => {
            const openModal = document.querySelector('.modal--open');
            if (!openModal) return;
            
            if (e.key === 'Tab') {
                const focusableElements = openModal.querySelectorAll(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];
                
                if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement.focus();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement.focus();
                    }
                }
            }
        });
    }

    simulateAPICall(delay = 1000) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate 90% success rate
                if (Math.random() > 0.1) {
                    resolve({ success: true });
                } else {
                    reject(new Error('API Error'));
                }
            }, delay);
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ORCWebsite();
});

// Handle lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Performance optimization: Defer non-critical scripts
window.addEventListener('load', () => {
    // Load non-critical resources after page load
    const deferredStyles = document.querySelectorAll('link[rel="preload"][as="style"]');
    deferredStyles.forEach(link => {
        link.rel = 'stylesheet';
    });
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    // Could send to error tracking service
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    // Could send to error tracking service
});