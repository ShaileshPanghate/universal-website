// Mobile Menu Toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
    document.querySelector('.header-cta').classList.toggle('active');
});

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        question.classList.toggle('active');
        
        if (question.classList.contains('active')) {
            answer.classList.add('show');
        } else {
            answer.classList.remove('show');
        }
        
        // Close other open FAQs
        faqQuestions.forEach(q => {
            if (q !== question && q.classList.contains('active')) {
                q.classList.remove('active');
                q.nextElementSibling.classList.remove('show');
            }
        });
    });
});

// Form Submission with WhatsApp Integration
document.getElementById('counselingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const phone = document.getElementById('userPhone').value;
    const country = document.getElementById('preferredCountry').value;
    const course = document.getElementById('courseInterest').value;
    
    // Format message for WhatsApp
    const message = `New Counseling Request:%0A%0A` +
                    `*Name:* ${name}%0A` +
                    `*Email:* ${email}%0A` +
                    `*Phone:* ${phone}%0A` +
                    `*Preferred Country:* ${country}%0A` +
                    `*Course Interested In:* ${course}%0A%0A` +
                    `Please contact this potential student as soon as possible.`;
    
    // Replace with your WhatsApp business number (with country code but remove + or 00)
    const whatsappNumber = '+918793717804'; // Example: 91 for India, followed by number
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Show confirmation message
    alert(`Thank you ${name}! Our counselor will contact you shortly on WhatsApp.`);
    
    // Reset form
    this.reset();
});

// Animate elements when scrolling
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animated');
        }
    });
});