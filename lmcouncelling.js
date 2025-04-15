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

// Form Submission
document.getElementById('counselingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = this.querySelector('input[type="text"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    
    // Show success message (in real implementation, you would send this to your backend)
    alert(`Thank you ${name}! Our counselor will call you at ${phone} within 30 minutes.`);
    
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