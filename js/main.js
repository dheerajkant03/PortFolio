document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('nav ul');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            
            // Update active link
            document.querySelectorAll('nav ul li a').forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // Scroll to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Audio toggle
    const audioToggle = document.getElementById('audio-toggle');
    const ambientAudio = document.getElementById('ambient-audio');
    
    audioToggle.addEventListener('click', function() {
        if (ambientAudio.paused) {
            ambientAudio.play();
            this.innerHTML = '<i class="fas fa-music"></i> <span>Sound On</span>';
        } else {
            ambientAudio.pause();
            this.innerHTML = '<i class="fas fa-music"></i> <span>Sound Off</span>';
        }
    });

    // Intersection Observer for animations
    const sections = document.querySelectorAll('.section');
    const projectCards = document.querySelectorAll('.project-card');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    projectCards.forEach(card => {
        observer.observe(card);
    });
    
    galleryItems.forEach(item => {
        observer.observe(item);
    });

    // Context-aware theme based on time of day
    const themeContainer = document.getElementById('theme-container');
    const hour = new Date().getHours();
    
    if (hour >= 18 || hour < 6) { // 6PM to 6AM
        themeContainer.setAttribute('data-theme', 'dark');
    } else {
        themeContainer.setAttribute('data-theme', 'light');
    }

    // Theme toggle button (optional)
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.classList.add('theme-toggle');
    themeToggle.style.position = 'fixed';
    themeToggle.style.bottom = '30px';
    themeToggle.style.left = '30px';
    themeToggle.style.zIndex = '999';
    themeToggle.style.width = '50px';
    themeToggle.style.height = '50px';
    themeToggle.style.borderRadius = '50%';
    themeToggle.style.backgroundColor = 'var(--primary-color)';
    themeToggle.style.color = 'white';
    themeToggle.style.border = 'none';
    themeToggle.style.cursor = 'pointer';
    themeToggle.style.boxShadow = 'var(--shadow)';
    themeToggle.style.display = 'flex';
    themeToggle.style.justifyContent = 'center';
    themeToggle.style.alignItems = 'center';
    themeToggle.style.fontSize = '1.2rem';
    
    document.body.appendChild(themeToggle);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = themeContainer.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        themeContainer.setAttribute('data-theme', newTheme);
        
        if (newTheme === 'dark') {
            this.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            this.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real implementation, you would send the form data to a server
            // For this demo, we'll just show a success message
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }

    // Initialize GSAP animations
    gsap.from(".home-content h1", {duration: 1, y: -50, opacity: 0, ease: "power2.out"});
    gsap.from(".home-content p", {duration: 1, y: -30, opacity: 0, delay: 0.3, ease: "power2.out"});
    gsap.from(".cta-buttons", {duration: 1, y: 30, opacity: 0, delay: 0.6, ease: "power2.out"});
    gsap.from(".profile-image", {duration: 1, x: 50, opacity: 0, delay: 0.9, ease: "power2.out"});
});