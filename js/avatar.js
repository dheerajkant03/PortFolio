document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.getElementById('avatar');
    const speechBubble = document.getElementById('avatar-speech');
    const hour = new Date().getHours();
    
    // Avatar messages based on time of day
    let greeting = '';
    if (hour < 12) {
        greeting = 'Good morning!';
    } else if (hour < 18) {
        greeting = 'Good afternoon!';
    } else {
        greeting = 'Good evening!';
    }
    
    const messages = [
        `${greeting} I'm your virtual guide.`,
        "I see you're checking out Dheeraj's portfolio!",
        "Did you know Dheeraj specializes in media production?",
        "The photography section has some amazing shots!",
        "Feel free to contact Dheeraj for collaborations.",
        "Check out the cool 3D effects on the project cards!"
    ];
    
    // Change message every 10 seconds
    let messageIndex = 0;
    speechBubble.textContent = messages[messageIndex];
    
    setInterval(function() {
        messageIndex = (messageIndex + 1) % messages.length;
        speechBubble.textContent = messages[messageIndex];
        
        // Add animation
        speechBubble.style.animation = 'none';
        void speechBubble.offsetWidth; // Trigger reflow
        speechBubble.style.animation = 'fadeIn 0.5s ease';
    }, 10000);
    
    // Click interaction
    avatar.addEventListener('click', function() {
        // Random message on click
        const randomIndex = Math.floor(Math.random() * messages.length);
        speechBubble.textContent = messages[randomIndex];
        
        // Pulse animation
        this.style.animation = 'none';
        void this.offsetWidth; // Trigger reflow
        this.style.animation = 'pulse 0.5s ease';
    });
    
    // Avatar follows scroll position
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.scrollHeight;
        
        // Calculate percentage scrolled
        const scrollPercent = (scrollPosition / (documentHeight - windowHeight)) * 100;
        
        // Change avatar expression based on scroll
        if (scrollPercent < 25) {
            speechBubble.textContent = "Welcome to the top of the portfolio!";
        } else if (scrollPercent > 75) {
            speechBubble.textContent = "You're near the bottom! Don't forget to say hello.";
        }
    });
});