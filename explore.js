// Mobile Menu Toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
    document.querySelector('.header-cta').classList.toggle('active');
});

// University Slider Auto-Scroll
let currentUniSlide = 0;
const uniSlides = document.querySelectorAll('.university-card');
const totalUniSlides = uniSlides.length;

setInterval(() => {
    currentUniSlide = (currentUniSlide + 1) % totalUniSlides;
    document.querySelector('.university-slider').scrollTo({
        left: uniSlides[currentUniSlide].offsetLeft,
        behavior: 'smooth'
    });
}, 5000);

// Testimonial Slider Auto-Scroll
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');
const totalTestimonials = testimonials.length;

setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    document.querySelector('.testimonial-slider').scrollTo({
        left: testimonials[currentTestimonial].offsetLeft,
        behavior: 'smooth'
    });
}, 6000);

// WhatsApp Button
document.querySelector('.whatsapp-btn').addEventListener('click', function() {
    window.open('https://wa.me/1234567890?text=Hello%20MedAbroad,%20I%20want%20information%20about%20MBBS%20abroad');
});