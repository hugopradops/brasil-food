/**
 * Brazilian Flavors Restaurant
 * JavaScript - Interactivity & Animations
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initNavigation();
    initMenuFilter();
    initImageModal();
    initScrollAnimations();
    initSmoothScroll();
});

/**
 * Navigation Module
 * Handles mobile menu toggle, header scroll effect, and active link highlighting
 */
function initNavigation() {
    const header = document.getElementById('header');
    const navToggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('active') && 
            !nav.contains(e.target) && 
            !navToggle.contains(e.target)) {
            navToggle.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Header scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add scrolled class when scrolled past threshold
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });

    // Active link highlighting based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveLink() {
        const scrollPosition = window.scrollY + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Initial call
}

/**
 * Menu Filter Module
 * Handles category filtering of menu items
 */
function initMenuFilter() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const menuCards = document.querySelectorAll('.menu-card');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Get selected category
            const category = button.dataset.category;

            // Filter menu cards
            menuCards.forEach(card => {
                const cardCategory = card.dataset.category;
                
                if (category === 'all' || cardCategory === category) {
                    card.classList.remove('hidden');
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    
                    // Trigger animation
                    requestAnimationFrame(() => {
                        card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    });
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

/**
 * Image Modal Module
 * Handles image lightbox functionality
 */
function initImageModal() {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalClose = modal.querySelector('.modal-close');
    const modalOverlay = modal.querySelector('.modal-overlay');
    const viewButtons = document.querySelectorAll('.view-btn');

    // Open modal
    viewButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const imageSrc = button.dataset.image;
            const imageTitle = button.dataset.title;
            
            modalImage.src = imageSrc;
            modalImage.alt = imageTitle;
            modalTitle.textContent = imageTitle;
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal functions
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Reset image source after animation
        setTimeout(() => {
            modalImage.src = '';
        }, 300);
    }

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

/**
 * Scroll Animations Module
 * Handles revealing elements on scroll using Intersection Observer
 */
function initScrollAnimations() {
    // Add animation classes to elements
    const animatedElements = document.querySelectorAll(
        '.menu-card, .testimonial-card, .feature, .contact-item, .gallery-item'
    );

    // Set initial styles
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Create intersection observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add stagger delay based on element's position among siblings
                const siblings = Array.from(entry.target.parentElement.children);
                const siblingIndex = siblings.indexOf(entry.target);
                const delay = siblingIndex * 100;

                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, delay);

                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animated elements
    animatedElements.forEach(el => observer.observe(el));

    // Animate section headers
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        header.style.opacity = '0';
        header.style.transform = 'translateY(20px)';
        header.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    const headerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                headerObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    sectionHeaders.forEach(header => headerObserver.observe(header));
}

/**
 * Smooth Scroll Module
 * Enhanced smooth scrolling for anchor links
 */
function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Skip if it's just "#" or empty
            if (href === '#' || !href) return;

            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Utility: Debounce function for performance optimization
 */
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Utility: Throttle function for scroll events
 */
function throttle(func, limit = 100) {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Add loading state handler
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate hero content on load
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        requestAnimationFrame(() => {
            heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        });
    }
});
