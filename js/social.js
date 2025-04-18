document.addEventListener('DOMContentLoaded', function() {
    // Simulate real-time visitors
    const visitorCount = document.getElementById('visitor-count');
    let count = parseInt(visitorCount.textContent);
    
    // Randomly fluctuate visitor count
    setInterval(function() {
        const change = Math.random() > 0.5 ? 1 : -1;
        count = Math.max(5, count + change); // Never go below 5
        visitorCount.textContent = count;
    }, 5000);
    
    // Simulate "people also viewing" feature
    const projects = [
        "Academic PPT Designs",
        "College Event Videos",
        "Campus Photography"
    ];
    
    const visitorsElement = document.createElement('div');
    visitorsElement.className = 'active-visitors';
    visitorsElement.style.position = 'fixed';
    visitorsElement.style.bottom = '120px';
    visitorsElement.style.right = '30px';
    visitorsElement.style.backgroundColor = 'var(--card-bg)';
    visitorsElement.style.padding = '15px';
    visitorsElement.style.borderRadius = '10px';
    visitorsElement.style.boxShadow = 'var(--shadow)';
    visitorsElement.style.zIndex = '998';
    visitorsElement.style.display = 'none';
    
    document.body.appendChild(visitorsElement);
    
    // Show active visitors on project hover
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            const projectName = this.querySelector('h3').textContent;
            const randomVisitors = Math.floor(Math.random() * 3) + 1; // 1-3 visitors
            
            let visitorsText = `${randomVisitors} people are also viewing ${projectName}`;
            if (randomVisitors === 1) {
                visitorsText = `1 person is also viewing ${projectName}`;
            }
            
            visitorsElement.textContent = visitorsText;
            visitorsElement.style.display = 'block';
            
            // Position near the project card
            const rect = this.getBoundingClientRect();
            visitorsElement.style.top = `${rect.top + window.scrollY}px`;
            visitorsElement.style.left = `${rect.left + rect.width + 20}px`;
        });
        
        card.addEventListener('mouseleave', function() {
            visitorsElement.style.display = 'none';
        });
    });
    
    // Testimonials simulation (could be replaced with actual data from Google Forms)
    const testimonials = [
        {
            name: "John Doe",
            role: "Professor at IIITD",
            text: "Dheeraj's PPT designs for our department were exceptional - clear, visually appealing, and professional."
        },
        {
            name: "Jane Smith",
            role: "Event Coordinator",
            text: "The event videos produced by Dheeraj perfectly captured the energy and spirit of our college fest."
        },
        {
            name: "Alex Johnson",
            role: "Photography Client",
            text: "Dheeraj has an amazing eye for composition and lighting in his photography work."
        }
    ];
    
    // Add testimonials to the about section
    const aboutSection = document.querySelector('.about-text');
    const testimonialsContainer = document.createElement('div');
    testimonialsContainer.className = 'testimonials';
    testimonialsContainer.style.marginTop = '30px';
    
    testimonials.forEach(testimonial => {
        const testimonialElement = document.createElement('div');
        testimonialElement.className = 'testimonial';
        testimonialElement.style.backgroundColor = 'rgba(108, 99, 255, 0.1)';
        testimonialElement.style.padding = '15px';
        testimonialElement.style.borderRadius = '10px';
        testimonialElement.style.marginBottom = '15px';
        
        testimonialElement.innerHTML = `
            <p style="font-style: italic;">"${testimonial.text}"</p>
            <p style="font-weight: 500; margin-top: 10px;">— ${testimonial.name}, ${testimonial.role}</p>
        `;
        
        testimonialsContainer.appendChild(testimonialElement);
    });
    
    aboutSection.appendChild(testimonialsContainer);
});